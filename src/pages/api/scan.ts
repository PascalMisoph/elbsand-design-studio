import type { APIRoute } from "astro";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

export const prerender = false;

const MAX_HTML_BYTES = 1_250_000;
const MAX_ROBOTS_BYTES = 200_000;
const FETCH_TIMEOUT_MS = 12_000;
const RATE_LIMIT_WINDOW_MS = 30 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const requestHistory = new Map<string, number[]>();

type CheckStatus = "pass" | "warning" | "fail";

interface ScanCheck {
  slug: string;
  score: number;
  maxScore: number;
  status: CheckStatus;
  passed: boolean;
  title: string;
  detail: string;
}

type CategoryKey = "ai" | "data" | "tech";

interface ScanCategory {
  key: CategoryKey;
  title: string;
  score: number;
  maxScore: number;
  status: CheckStatus;
  checks: ScanCheck[];
}

const getClientAddress = (request: Request) =>
  request.headers.get("cf-connecting-ip") ??
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
  "unknown";

const isRateLimited = (address: string) => {
  const now = Date.now();
  const recent = (requestHistory.get(address) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  requestHistory.set(address, recent);
  return false;
};

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
          "user-agent": "ELBSAND-GEO-Readiness-Check/1.0 (+https://elbsand.studio)",
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
) => {
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
      ? `${label} wird nicht vollständig per robots.txt blockiert.`
      : status === "warning"
        ? `Die robots.txt war nicht eindeutig prüfbar; ${label} bleibt unbestätigt.`
        : `${label} ist für die gesamte Website gesperrt.`;

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
      "llms.txt Präsenz",
      llmsPresent
        ? "Eine öffentlich abrufbare llms.txt mit verwertbarem Inhalt ist vorhanden."
        : "Keine verwertbare llms.txt unter /llms.txt erkannt.",
      5,
      llmsPresent ? "pass" : "fail",
    ),
    createCheck(
      "llmsfull",
      "llms-full.txt Struktur",
      llmsFullPresent
        ? "Eine ausführliche llms-full.txt ist öffentlich abrufbar."
        : "Keine ausreichend befüllte llms-full.txt erkannt.",
      3,
      llmsFullPresent ? "pass" : "fail",
    ),
    createCheck("gptbot", "GPTBot Freigabe", botDetail("GPTBot", gptStatus), 7, gptStatus),
    createCheck(
      "perplexity",
      "PerplexityBot Freigabe",
      botDetail("PerplexityBot", perplexityStatus),
      6,
      perplexityStatus,
    ),
    createCheck(
      "claudebot",
      "ClaudeBot Freigabe",
      botDetail("ClaudeBot", claudeStatus),
      5,
      claudeStatus,
    ),
    createCheck(
      "headings",
      "Fragebasierte Überschriften",
      questionHeadingCount
        ? `${questionHeadingCount} fragebasierte Überschrift${questionHeadingCount === 1 ? "" : "en"} erkannt.`
        : "Keine eindeutige Frageüberschrift in H1 bis H3 erkannt.",
      4,
      questionHeadingCount >= 2 ? "pass" : questionHeadingCount === 1 ? "warning" : "fail",
    ),
    createCheck(
      "multimodal",
      "Multimodale Content-Signale",
      hasRichMedia
        ? `${meaningfulImageCount} beschriftete Bilder oder strukturierte Rich-Media-Signale erkannt.`
        : "Zu wenige aussagekräftig beschriftete Medien für eine multimodale Einordnung.",
      5,
      hasRichMedia ? "pass" : meaningfulImageCount === 1 ? "warning" : "fail",
    ),
  ];

  const dataChecks = [
    createCheck(
      "schemaorg",
      "Schema.org Organization",
      organizationRecords.length
        ? "Ein maschinenlesbares Unternehmens-Schema wurde erkannt."
        : "Kein Organization- oder vergleichbares Unternehmens-Schema erkannt.",
      7,
      organizationRecords.length ? "pass" : "fail",
    ),
    createCheck(
      "schemalocal",
      "Schema.org LocalBusiness",
      localBusinessRecords.length
        ? "Ein lokaler Unternehmenstyp ist in JSON-LD ausgezeichnet."
        : "Kein LocalBusiness- oder spezialisierter lokaler Typ erkannt.",
      7,
      localBusinessRecords.length ? "pass" : "fail",
    ),
    createCheck(
      "eeat",
      "E-E-A-T Autor-Signale",
      hasAuthorSignals
        ? "Personen-, Autoren- oder Gründerinformationen sind maschinenlesbar beziehungsweise sichtbar."
        : "Keine eindeutigen Autoren- oder Personen-Signale erkannt.",
      4,
      hasAuthorSignals ? "pass" : "fail",
    ),
    createCheck(
      "sitemap",
      "Sitemap.xml Indexierung",
      sitemapValid
        ? "Eine valide Sitemap mit URL-Einträgen ist abrufbar."
        : "Unter /sitemap.xml wurde keine valide Sitemap erkannt.",
      4,
      sitemapValid ? "pass" : "fail",
    ),
    createCheck(
      "jsonld",
      "JSON-LD Fehlerfreiheit",
      schema.validCount
        ? `${schema.validCount} valide JSON-LD-Blöcke${schema.invalidCount ? ` und ${schema.invalidCount} fehlerhafte` : ""} erkannt.`
        : "Kein valider JSON-LD-Block erkannt.",
      4,
      schema.validCount > 0 && schema.invalidCount === 0
        ? "pass"
        : schema.validCount > 0
          ? "warning"
          : "fail",
    ),
    createCheck(
      "nap",
      "Eindeutige NAP-Daten",
      hasNap
        ? "Name, Adresse und Kontaktangabe sind gemeinsam im Unternehmens-Schema vorhanden."
        : "Name, Adresse und Kontaktangabe sind nicht vollständig strukturiert verknüpft.",
      5,
      hasNap ? "pass" : "fail",
    ),
    createCheck(
      "citability",
      "Zitierfähige Content-Blöcke",
      paragraphCount
        ? `${paragraphCount} substanziell eigenständige Textblöcke als Zitier-Signal erkannt.`
        : "Keine ausreichend substanziellen, eigenständigen Textblöcke erkannt.",
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
      "HTTPS-Verschlüsselung",
      finalUrl.protocol === "https:"
        ? "Die finale URL wird verschlüsselt über HTTPS ausgeliefert."
        : "Die finale URL nutzt keine HTTPS-Verschlüsselung.",
      6,
      finalUrl.protocol === "https:" ? "pass" : "fail",
    ),
    createCheck(
      "hsts",
      "HSTS-Sicherheitsheader",
      headers.has("strict-transport-security")
        ? "Strict-Transport-Security ist gesetzt."
        : "Der Strict-Transport-Security-Header fehlt.",
      4,
      headers.has("strict-transport-security") ? "pass" : "fail",
    ),
    createCheck(
      "xcontent",
      "X-Content-Type-Options",
      headers.get("x-content-type-options")?.toLowerCase() === "nosniff"
        ? "MIME-Type-Sniffing wird mit nosniff verhindert."
        : "X-Content-Type-Options: nosniff fehlt.",
      3,
      headers.get("x-content-type-options")?.toLowerCase() === "nosniff" ? "pass" : "fail",
    ),
    createCheck(
      "xframe",
      "Clickjacking-Schutz",
      headers.has("x-frame-options") || /frame-ancestors/i.test(csp)
        ? "Ein X-Frame-Options- oder CSP-frame-ancestors-Schutz ist aktiv."
        : "Kein eindeutiger Schutz gegen fremde Frame-Einbettung erkannt.",
      3,
      headers.has("x-frame-options") || /frame-ancestors/i.test(csp) ? "pass" : "fail",
    ),
    createCheck(
      "csp",
      "Content-Security-Policy",
      csp ? "Eine Content-Security-Policy wird ausgeliefert." : "Kein Content-Security-Policy-Header erkannt.",
      4,
      csp ? "pass" : "fail",
    ),
    createCheck(
      "referrer",
      "Referrer-Policy",
      headers.has("referrer-policy")
        ? `Referrer-Policy: ${headers.get("referrer-policy")}.`
        : "Kein Referrer-Policy-Header erkannt.",
      3,
      headers.has("referrer-policy") ? "pass" : "fail",
    ),
    createCheck(
      "ttfb",
      "Antwortzeit (TTFB)",
      `Gemessene Server-Antwortzeit: ${ttfbMs} ms.`,
      7,
      ttfbStatus,
    ),
  ];

  return {
    ai: buildCategory("ai", "AI-Readiness & Crawling", aiChecks),
    data: buildCategory("data", "Daten-Architektur & Vertrauenssignale", dataChecks),
    tech: buildCategory("tech", "Technische Basis & Security", techChecks),
  };
};

export const POST: APIRoute = async ({ request }) => {
  if (isRateLimited(getClientAddress(request))) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let payload: { url?: unknown };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  if (typeof payload.url !== "string") {
    return Response.json({ ok: false, error: "invalid_url" }, { status: 422 });
  }

  let pageUrl: URL;
  try {
    pageUrl = normalizeUrl(payload.url);
    await validatePublicUrl(pageUrl);
  } catch {
    return Response.json({ ok: false, error: "invalid_url" }, { status: 422 });
  }

  try {
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
    );
    const categoryList = Object.values(categories);
    const allChecks = categoryList.flatMap((category) => category.checks);
    const score = allChecks.reduce((sum, check) => sum + check.score, 0);
    const criticalIssues = allChecks.filter((check) => check.status === "fail").length;
    const grade = score >= 85 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : score >= 40 ? "D" : "E";
    const scanId = crypto.randomUUID();

    return Response.json(
      {
        ok: true,
        requestedUrl: payload.url.trim(),
        finalUrl: pageResult.finalUrl.toString(),
        scannedAt: new Date().toISOString(),
        scanId,
        score,
        grade,
        criticalIssues,
        categories,
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
