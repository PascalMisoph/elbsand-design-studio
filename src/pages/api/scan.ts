import type { APIRoute } from "astro";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

import {
  gradeForScore,
  interpretScanResult,
  type CategoryKey,
  type CheckStatus,
  type ScanCategory,
  type ScanCheck,
  type ScanLocale,
  type ScanSnapshot,
} from "@/lib/ai-readiness";
import { createInMemoryRateLimiter } from "@/lib/server/rate-limit";
import { createScanResultToken, scanResultPath } from "@/lib/server/scan-result-token";
import { SITE_URL } from "@/lib/seo";

export const prerender = false;

const MAX_HTML_BYTES = 1_250_000;
const MAX_ROBOTS_BYTES = 200_000;
const FETCH_TIMEOUT_MS = 12_000;
const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const isRateLimited = createInMemoryRateLimiter({
  windowMs: RATE_LIMIT_WINDOW_MS,
  maxRequests: RATE_LIMIT_MAX,
});

const getClientAddress = (request: Request) =>
  request.headers.get("cf-connecting-ip") ??
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
  "unknown";

const isPrivateIpv4 = (address: string) => {
  const parts = address.split(".").map(Number);
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part))) return true;
  const [a, b, c] = parts;
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    a >= 224 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 198 && (b === 18 || b === 19)) ||
    (a === 192 && b === 0 && (c === 0 || c === 2)) ||
    (a === 198 && b === 51 && c === 100) ||
    (a === 203 && b === 0 && c === 113)
  );
};

const isPrivateAddress = (address: string) => {
  const version = isIP(address);
  if (version === 4) return isPrivateIpv4(address);
  if (version !== 6) return true;

  const normalized = address.toLowerCase();
  if (normalized.startsWith("::ffff:")) {
    return isPrivateIpv4(normalized.slice(7));
  }
  return (
    normalized === "::" ||
    normalized === "::1" ||
    normalized.startsWith("fc") ||
    normalized.startsWith("fd") ||
    /^fe[89ab]/.test(normalized) ||
    normalized.startsWith("2001:db8")
  );
};

const validatePublicUrl = async (url: URL) => {
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("unsupported_protocol");
  if (url.username || url.password) throw new Error("credentials_not_allowed");
  if (url.port && !["80", "443"].includes(url.port)) throw new Error("port_not_allowed");

  const hostname = url.hostname.toLowerCase();
  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal")
  ) {
    throw new Error("private_host");
  }

  const directIpVersion = isIP(hostname);
  const addresses = directIpVersion
    ? [{ address: hostname }]
    : await lookup(hostname, { all: true, verbatim: true });

  if (!addresses.length || addresses.some(({ address }) => isPrivateAddress(address))) {
    throw new Error("private_host");
  }
};

const normalizeUrl = (input: string) => {
  const trimmed = input.trim();
  if (!trimmed || trimmed.length > 500) throw new Error("invalid_url");
  const withProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  const url = new URL(withProtocol);
  url.hash = "";
  // The readiness check does not need query parameters. Removing them avoids
  // transporting campaign IDs, access tokens or accidental PII in result URLs.
  url.search = "";
  url.pathname = "/";
  return url;
};

const readLimitedText = async (response: Response, maxBytes: number) => {
  if (!response.body) return "";
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > maxBytes) {
      await reader.cancel();
      throw new Error("response_too_large");
    }
    chunks.push(value);
  }

  const combined = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    combined.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(combined);
};

const fetchPublicText = async (initialUrl: URL, maxBytes: number) => {
  let currentUrl = new URL(initialUrl);
  let redirectCount = 0;

  while (redirectCount <= 4) {
    await validatePublicUrl(currentUrl);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const startedAt = performance.now();

    try {
      const response = await fetch(currentUrl, {
        redirect: "manual",
        signal: controller.signal,
        headers: {
          accept: "text/html,application/xhtml+xml,text/plain;q=0.8,*/*;q=0.5",
          "user-agent": "PATERNOGA-GEO-Readiness-Check/1.0 (+https://www.paternoga-seo-geo.de)",
        },
      });
      const ttfbMs = Math.round(performance.now() - startedAt);

      if (response.status >= 300 && response.status < 400) {
        const location = response.headers.get("location");
        if (!location) throw new Error("redirect_without_location");
        currentUrl = new URL(location, currentUrl);
        redirectCount += 1;
        continue;
      }

      const body = await readLimitedText(response, maxBytes);
      return { response, body, finalUrl: currentUrl, ttfbMs };
    } finally {
      clearTimeout(timeout);
    }
  }

  throw new Error("too_many_redirects");
};

const parseRobotsGroups = (robots: string) => {
  const groups: Array<{ agents: string[]; disallow: string[] }> = [];
  let currentAgents: string[] = [];
  let currentDisallow: string[] = [];
  let hasRules = false;

  const flush = () => {
    if (currentAgents.length) groups.push({ agents: currentAgents, disallow: currentDisallow });
    currentAgents = [];
    currentDisallow = [];
    hasRules = false;
  };

  for (const rawLine of robots.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const directive = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();

    if (directive === "user-agent") {
      if (hasRules) flush();
      currentAgents.push(value.toLowerCase());
    } else if (directive === "disallow" && currentAgents.length) {
      currentDisallow.push(value);
      hasRules = true;
    }
  }
  flush();
  return groups;
};

const isBotBlocked = (
  groups: ReturnType<typeof parseRobotsGroups>,
  botName: string,
) => {
  const exactGroups = groups.filter((group) => group.agents.includes(botName.toLowerCase()));
  const relevantGroups = exactGroups.length
    ? exactGroups
    : groups.filter((group) => group.agents.includes("*"));
  return relevantGroups.some((group) =>
    group.disallow.some((pathValue) => pathValue.trim() === "/"),
  );
};

const createCheck = (
  slug: string,
  title: string,
  detail: string,
  maxScore: number,
  status: CheckStatus,
): ScanCheck => ({
  slug,
  title,
  detail,
  maxScore,
  status,
  passed: status === "pass",
  score: status === "pass" ? maxScore : status === "warning" ? Math.ceil(maxScore / 2) : 0,
});

const fetchOptionalText = async (url: URL, maxBytes: number) => {
  try {
    return await fetchPublicText(url, maxBytes);
  } catch {
    return null;
  }
};

const stripMarkup = (value: string) =>
  value
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:nbsp|amp|quot|apos);/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const collectSchemaRecords = (
  value: unknown,
  records: Array<Record<string, unknown>>,
  types: Set<string>,
) => {
  if (Array.isArray(value)) {
    value.forEach((item) => collectSchemaRecords(item, records, types));
    return;
  }
  if (!value || typeof value !== "object") return;

  const record = value as Record<string, unknown>;
  records.push(record);
  const rawType = record["@type"];
  if (typeof rawType === "string") types.add(rawType.toLowerCase());
  if (Array.isArray(rawType)) {
    rawType.forEach((type) => typeof type === "string" && types.add(type.toLowerCase()));
  }
  Object.values(record).forEach((child) => collectSchemaRecords(child, records, types));
};

const parseSchema = (html: string) => {
  const scripts = [
    ...html.matchAll(
      /<script\b[^>]*type\s*=\s*["']application\/ld\+json(?:\s*;[^"']*)?["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  const records: Array<Record<string, unknown>> = [];
  const types = new Set<string>();
  let validCount = 0;
  let invalidCount = 0;

  scripts.forEach((script) => {
    try {
      const value = JSON.parse(script[1].trim());
      validCount += 1;
      collectSchemaRecords(value, records, types);
    } catch {
      invalidCount += 1;
    }
  });

  return { scriptsCount: scripts.length, validCount, invalidCount, records, types };
};

const organizationTypes = new Set([
  "organization",
  "localbusiness",
  "professionalservice",
  "store",
  "restaurant",
  "medicalbusiness",
  "financialservice",
  "legalservice",
  "dentist",
]);

const localBusinessTypes = new Set([
  "localbusiness",
  "professionalservice",
  "store",
  "restaurant",
  "medicalbusiness",
  "financialservice",
  "legalservice",
  "dentist",
]);

const recordHasType = (record: Record<string, unknown>, accepted: Set<string>) => {
  const rawType = record["@type"];
  const values = Array.isArray(rawType) ? rawType : [rawType];
  return values.some((value) => typeof value === "string" && accepted.has(value.toLowerCase()));
};

const buildCategory = (
  key: CategoryKey,
  title: string,
  checks: ScanCheck[],
): ScanCategory => {
  const score = checks.reduce((sum, check) => sum + check.score, 0);
  const maxScore = checks.reduce((sum, check) => sum + check.maxScore, 0);
  const ratio = score / maxScore;
  return {
    key,
    title,
    checks,
    score,
    maxScore,
    status: ratio >= 0.75 ? "pass" : ratio >= 0.4 ? "warning" : "fail",
  };
};

const analyzeTwentyOneCriteria = async (
  finalUrl: URL,
  html: string,
  response: Response,
  ttfbMs: number,
  locale: ScanLocale,
) => {
  const t = (de: string, en: string) => locale === "en" ? en : de;
  const [robotsResult, llmsResult, llmsFullResult, rootSitemapResult] = await Promise.all([
    fetchOptionalText(new URL("/robots.txt", finalUrl), MAX_ROBOTS_BYTES),
    fetchOptionalText(new URL("/llms.txt", finalUrl), MAX_ROBOTS_BYTES),
    fetchOptionalText(new URL("/llms-full.txt", finalUrl), MAX_ROBOTS_BYTES),
    fetchOptionalText(new URL("/sitemap.xml", finalUrl), MAX_ROBOTS_BYTES),
  ]);

  const robotsUsable = Boolean(robotsResult?.response.ok);
  const robotsMissing = robotsResult?.response.status === 404;
  const robotsGroups = robotsUsable ? parseRobotsGroups(robotsResult?.body ?? "") : [];
  let sitemapResult = rootSitemapResult;
  if (!sitemapResult?.response.ok && robotsUsable) {
    const declaredSitemap = robotsResult?.body.match(/^sitemap\s*:\s*(\S+)/im)?.[1];
    if (declaredSitemap) {
      try {
        sitemapResult = await fetchOptionalText(
          new URL(declaredSitemap, finalUrl),
          MAX_ROBOTS_BYTES,
        );
      } catch {
        // The regular /sitemap.xml result remains the source of truth.
      }
    }
  }
  const botStatus = (botNames: string[]) => {
    if (robotsMissing) return "pass" as const;
    if (!robotsUsable) return "warning" as const;
    return botNames.some((bot) => isBotBlocked(robotsGroups, bot)) ? "fail" as const : "pass" as const;
  };
  const botDetail = (label: string, status: CheckStatus) =>
    status === "pass"
      ? t(`${label} wird nicht vollständig per robots.txt blockiert.`, `${label} is not blocked site-wide by robots.txt.`)
      : status === "warning"
        ? t(`Die robots.txt war nicht eindeutig prüfbar; ${label} bleibt unbestätigt.`, `The robots.txt file could not be verified reliably; ${label} remains unconfirmed.`)
        : t(`${label} ist für die gesamte Website gesperrt.`, `${label} is blocked across the entire website.`);

  const schema = parseSchema(html);
  const organizationRecords = schema.records.filter((record) =>
    recordHasType(record, organizationTypes),
  );
  const localBusinessRecords = schema.records.filter((record) =>
    recordHasType(record, localBusinessTypes),
  );
  const visibleText = stripMarkup(html);
  const headingTexts = [...html.matchAll(/<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/gi)].map(
    (match) => stripMarkup(match[1]),
  );
  const questionHeadingCount = headingTexts.filter(
    (heading) =>
      heading.includes("?") ||
      /^(wie|was|warum|wann|wo|wer|welche|how|what|why|when|where|who|which)\b/i.test(heading),
  ).length;
  const meaningfulImageCount = [...html.matchAll(/<img\b[^>]*\balt\s*=\s*["']([^"']+)["'][^>]*>/gi)]
    .map((match) => stripMarkup(match[1]))
    .filter((alt) => alt.length >= 4).length;
  const hasRichMedia =
    meaningfulImageCount >= 2 ||
    /<(?:video|audio)\b/i.test(html) ||
    schema.types.has("imageobject") ||
    schema.types.has("videoobject");
  const paragraphCount = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => stripMarkup(match[1]))
    .filter((paragraph) => paragraph.length >= 100 && paragraph.length <= 900).length;

  const hasAuthorSignals =
    schema.types.has("person") ||
    schema.records.some((record) => "author" in record || "founder" in record) ||
    /\b(?:autor(?:in)?|verfasst von|geschrieben von|written by|author)\b/i.test(visibleText);
  const hasNap = organizationRecords.some(
    (record) =>
      typeof record.name === "string" &&
      Boolean(record.address) &&
      (typeof record.telephone === "string" || typeof record.email === "string"),
  );
  const sitemapValid =
    Boolean(sitemapResult?.response.ok) &&
    /<(?:urlset|sitemapindex)\b/i.test(sitemapResult?.body ?? "") &&
    /<loc>/i.test(sitemapResult?.body ?? "");

  const llmsPresent = Boolean(llmsResult?.response.ok && stripMarkup(llmsResult.body).length >= 40);
  const llmsFullPresent = Boolean(
    llmsFullResult?.response.ok && stripMarkup(llmsFullResult.body).length >= 100,
  );
  const gptStatus = botStatus(["gptbot"]);
  const perplexityStatus = botStatus(["perplexitybot"]);
  const claudeStatus = botStatus(["claudebot", "claude-searchbot", "claude-user"]);

  const aiChecks = [
    createCheck(
      "llmstxt",
      t("llms.txt Präsenz", "llms.txt presence"),
      llmsPresent
        ? t("Eine öffentlich abrufbare llms.txt mit verwertbarem Inhalt ist vorhanden.", "A public llms.txt with usable content is available.")
        : t("Keine verwertbare llms.txt unter /llms.txt erkannt.", "No usable llms.txt was detected at /llms.txt."),
      5,
      llmsPresent ? "pass" : "fail",
    ),
    createCheck(
      "llmsfull",
      t("llms-full.txt Struktur", "llms-full.txt structure"),
      llmsFullPresent
        ? t("Eine ausführliche llms-full.txt ist öffentlich abrufbar.", "A detailed llms-full.txt is publicly available.")
        : t("Keine ausreichend befüllte llms-full.txt erkannt.", "No sufficiently populated llms-full.txt was detected."),
      3,
      llmsFullPresent ? "pass" : "fail",
    ),
    createCheck("gptbot", t("GPTBot Freigabe", "GPTBot access"), botDetail("GPTBot", gptStatus), 7, gptStatus),
    createCheck(
      "perplexity",
      t("PerplexityBot Freigabe", "PerplexityBot access"),
      botDetail("PerplexityBot", perplexityStatus),
      6,
      perplexityStatus,
    ),
    createCheck(
      "claudebot",
      t("ClaudeBot Freigabe", "ClaudeBot access"),
      botDetail("ClaudeBot", claudeStatus),
      5,
      claudeStatus,
    ),
    createCheck(
      "headings",
      t("Fragebasierte Überschriften", "Question-led headings"),
      questionHeadingCount
        ? t(
            `${questionHeadingCount} fragebasierte Überschrift${questionHeadingCount === 1 ? "" : "en"} erkannt.`,
            `${questionHeadingCount} question-led heading${questionHeadingCount === 1 ? "" : "s"} detected.`,
          )
        : t("Keine eindeutige Frageüberschrift in H1 bis H3 erkannt.", "No clear question-led heading was detected from H1 to H3."),
      4,
      questionHeadingCount >= 2 ? "pass" : questionHeadingCount === 1 ? "warning" : "fail",
    ),
    createCheck(
      "multimodal",
      t("Multimodale Content-Signale", "Multimodal content signals"),
      hasRichMedia
        ? t(
            `${meaningfulImageCount} beschriftete Bilder oder strukturierte Rich-Media-Signale erkannt.`,
            `${meaningfulImageCount} labelled images or structured rich-media signals detected.`,
          )
        : t("Zu wenige aussagekräftig beschriftete Medien für eine multimodale Einordnung.", "Too few meaningfully labelled media elements were detected for multimodal interpretation."),
      5,
      hasRichMedia ? "pass" : meaningfulImageCount === 1 ? "warning" : "fail",
    ),
  ];

  const dataChecks = [
    createCheck(
      "schemaorg",
      t("Schema.org Organization", "Schema.org Organization"),
      organizationRecords.length
        ? t("Ein maschinenlesbares Unternehmens-Schema wurde erkannt.", "A machine-readable organisation schema was detected.")
        : t("Kein Organization- oder vergleichbares Unternehmens-Schema erkannt.", "No Organization or comparable organisation schema was detected."),
      7,
      organizationRecords.length ? "pass" : "fail",
    ),
    createCheck(
      "schemalocal",
      t("Schema.org LocalBusiness", "Schema.org LocalBusiness"),
      localBusinessRecords.length
        ? t("Ein lokaler Unternehmenstyp ist in JSON-LD ausgezeichnet.", "A local business type is represented in JSON-LD.")
        : t("Kein LocalBusiness- oder spezialisierter lokaler Typ erkannt.", "No LocalBusiness or specialised local type was detected."),
      7,
      localBusinessRecords.length ? "pass" : "fail",
    ),
    createCheck(
      "eeat",
      t("E-E-A-T Autor-Signale", "E-E-A-T author signals"),
      hasAuthorSignals
        ? t("Personen-, Autoren- oder Gründerinformationen sind maschinenlesbar beziehungsweise sichtbar.", "Person, author or founder information is visible or machine-readable.")
        : t("Keine eindeutigen Autoren- oder Personen-Signale erkannt.", "No clear author or person signals were detected."),
      4,
      hasAuthorSignals ? "pass" : "fail",
    ),
    createCheck(
      "sitemap",
      t("Sitemap.xml Indexierung", "Sitemap.xml indexing"),
      sitemapValid
        ? t("Eine valide Sitemap mit URL-Einträgen ist abrufbar.", "A valid sitemap with URL entries is available.")
        : t("Unter /sitemap.xml wurde keine valide Sitemap erkannt.", "No valid sitemap was detected at /sitemap.xml."),
      4,
      sitemapValid ? "pass" : "fail",
    ),
    createCheck(
      "jsonld",
      t("JSON-LD Fehlerfreiheit", "JSON-LD validity"),
      schema.validCount
        ? t(
            `${schema.validCount} valide JSON-LD-Blöcke${schema.invalidCount ? ` und ${schema.invalidCount} fehlerhafte` : ""} erkannt.`,
            `${schema.validCount} valid JSON-LD block${schema.validCount === 1 ? "" : "s"}${schema.invalidCount ? ` and ${schema.invalidCount} invalid` : ""} detected.`,
          )
        : t("Kein valider JSON-LD-Block erkannt.", "No valid JSON-LD block was detected."),
      4,
      schema.validCount > 0 && schema.invalidCount === 0
        ? "pass"
        : schema.validCount > 0
          ? "warning"
          : "fail",
    ),
    createCheck(
      "nap",
      t("Eindeutige NAP-Daten", "Consistent NAP data"),
      hasNap
        ? t("Name, Adresse und Kontaktangabe sind gemeinsam im Unternehmens-Schema vorhanden.", "Name, address and contact details are linked within the organisation schema.")
        : t("Name, Adresse und Kontaktangabe sind nicht vollständig strukturiert verknüpft.", "Name, address and contact details are not fully linked in structured data."),
      5,
      hasNap ? "pass" : "fail",
    ),
    createCheck(
      "citability",
      t("Zitierfähige Content-Blöcke", "Citable content passages"),
      paragraphCount
        ? t(
            `${paragraphCount} substanziell eigenständige Textblöcke als Zitier-Signal erkannt.`,
            `${paragraphCount} substantial self-contained passages detected as citability signals.`,
          )
        : t("Keine ausreichend substanziellen, eigenständigen Textblöcke erkannt.", "No sufficiently substantial self-contained passages were detected."),
      4,
      paragraphCount >= 4 ? "pass" : paragraphCount >= 2 ? "warning" : "fail",
    ),
  ];

  const headers = response.headers;
  const csp = headers.get("content-security-policy") ?? "";
  const ttfbStatus: CheckStatus = ttfbMs <= 300 ? "pass" : ttfbMs <= 800 ? "warning" : "fail";
  const techChecks = [
    createCheck(
      "https",
      t("HTTPS-Verschlüsselung", "HTTPS encryption"),
      finalUrl.protocol === "https:"
        ? t("Die finale URL wird verschlüsselt über HTTPS ausgeliefert.", "The final URL is delivered securely over HTTPS.")
        : t("Die finale URL nutzt keine HTTPS-Verschlüsselung.", "The final URL does not use HTTPS encryption."),
      6,
      finalUrl.protocol === "https:" ? "pass" : "fail",
    ),
    createCheck(
      "hsts",
      t("HSTS-Sicherheitsheader", "HSTS security header"),
      headers.has("strict-transport-security")
        ? t("Strict-Transport-Security ist gesetzt.", "Strict-Transport-Security is set.")
        : t("Der Strict-Transport-Security-Header fehlt.", "The Strict-Transport-Security header is missing."),
      4,
      headers.has("strict-transport-security") ? "pass" : "fail",
    ),
    createCheck(
      "xcontent",
      "X-Content-Type-Options",
      headers.get("x-content-type-options")?.toLowerCase() === "nosniff"
        ? t("MIME-Type-Sniffing wird mit nosniff verhindert.", "MIME type sniffing is prevented with nosniff.")
        : t("X-Content-Type-Options: nosniff fehlt.", "X-Content-Type-Options: nosniff is missing."),
      3,
      headers.get("x-content-type-options")?.toLowerCase() === "nosniff" ? "pass" : "fail",
    ),
    createCheck(
      "xframe",
      t("Clickjacking-Schutz", "Clickjacking protection"),
      headers.has("x-frame-options") || /frame-ancestors/i.test(csp)
        ? t("Ein X-Frame-Options- oder CSP-frame-ancestors-Schutz ist aktiv.", "X-Frame-Options or CSP frame-ancestors protection is active.")
        : t("Kein eindeutiger Schutz gegen fremde Frame-Einbettung erkannt.", "No clear protection against third-party framing was detected."),
      3,
      headers.has("x-frame-options") || /frame-ancestors/i.test(csp) ? "pass" : "fail",
    ),
    createCheck(
      "csp",
      "Content-Security-Policy",
      csp
        ? t("Eine Content-Security-Policy wird ausgeliefert.", "A Content Security Policy is delivered.")
        : t("Kein Content-Security-Policy-Header erkannt.", "No Content-Security-Policy header was detected."),
      4,
      csp ? "pass" : "fail",
    ),
    createCheck(
      "referrer",
      "Referrer-Policy",
      headers.has("referrer-policy")
        ? `Referrer-Policy: ${headers.get("referrer-policy")}.`
        : t("Kein Referrer-Policy-Header erkannt.", "No Referrer-Policy header was detected."),
      3,
      headers.has("referrer-policy") ? "pass" : "fail",
    ),
    createCheck(
      "ttfb",
      t("Antwortzeit (TTFB)", "Response time (TTFB)"),
      t(`Gemessene Server-Antwortzeit: ${ttfbMs} ms.`, `Measured server response time: ${ttfbMs} ms.`),
      7,
      ttfbStatus,
    ),
  ];

  return {
    ai: buildCategory("ai", t("AI-Readiness & Crawling", "AI readiness & crawling"), aiChecks),
    data: buildCategory("data", t("Daten-Architektur & Vertrauenssignale", "Data architecture & trust signals"), dataChecks),
    tech: buildCategory("tech", t("Technische Basis & Security", "Technical foundation & security"), techChecks),
  };
};

export const POST: APIRoute = async ({ request }) => {
  if (isRateLimited(getClientAddress(request))) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let payload: { url?: unknown; locale?: unknown };
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
    }
    payload = parsed as { url?: unknown; locale?: unknown };
  } catch {
    return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  if (typeof payload.url !== "string") {
    return Response.json({ ok: false, error: "invalid_url" }, { status: 422 });
  }
  const locale: ScanLocale = payload.locale === "en" ? "en" : "de";

  let pageUrl: URL;
  try {
    pageUrl = normalizeUrl(payload.url);
    await validatePublicUrl(pageUrl);
  } catch {
    return Response.json({ ok: false, error: "invalid_url" }, { status: 422 });
  }

  try {
    const submittedUrl = pageUrl.toString();
    let pageResult;
    try {
      pageResult = await fetchPublicText(pageUrl, MAX_HTML_BYTES);
    } catch (error) {
      const hadExplicitProtocol = /^[a-z][a-z\d+.-]*:\/\//i.test(payload.url.trim());
      if (hadExplicitProtocol || pageUrl.protocol !== "https:") throw error;
      pageUrl.protocol = "http:";
      pageResult = await fetchPublicText(pageUrl, MAX_HTML_BYTES);
    }

    const categories = await analyzeTwentyOneCriteria(
      pageResult.finalUrl,
      pageResult.body,
      pageResult.response,
      pageResult.ttfbMs,
      locale,
    );
    const categoryList = Object.values(categories);
    const allChecks = categoryList.flatMap((category) => category.checks);
    const score = allChecks.reduce((sum, check) => sum + check.score, 0);
    const criticalIssues = allChecks.filter((check) => check.status === "fail").length;
    const grade = gradeForScore(score);
    const scanId = crypto.randomUUID();
    const core = {
      requestedUrl: submittedUrl,
      finalUrl: new URL(pageResult.finalUrl.origin).toString(),
      scannedAt: new Date().toISOString(),
      scanId,
      score,
      grade,
      criticalIssues,
      categories,
    };
    const snapshot: ScanSnapshot = {
      ...core,
      locale,
      interpretation: interpretScanResult(core, locale),
    };
    const resultToken = createScanResultToken(snapshot);

    return Response.json(
      {
        ok: true,
        ...snapshot,
        resultToken,
        resultUrl: new URL(scanResultPath(locale, resultToken), SITE_URL).toString(),
      },
      {
        status: 200,
        headers: { "cache-control": "no-store" },
      },
    );
  } catch (error) {
    console.error("Website scan failed", error);
    return Response.json({ ok: false, error: "scan_failed" }, { status: 502 });
  }
};
