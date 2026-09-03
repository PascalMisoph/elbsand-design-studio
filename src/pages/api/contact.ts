import type { APIRoute } from "astro";
import { createHash, randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import {
  createScanHistoryRecord,
  renderInternalAiCheckEmail,
  renderUserAiCheckEmail,
  type ScanHistoryRecord,
} from "@/lib/server/ai-check-email";
import { createInMemoryRateLimiter } from "@/lib/server/rate-limit";
import { verifyScanResultToken } from "@/lib/server/scan-result-token";
import type { ScanSnapshot } from "@/lib/ai-readiness";

export const prerender = false;

const MAX_REQUEST_BYTES = 64_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const isRateLimited = createInMemoryRateLimiter({
  windowMs: RATE_LIMIT_WINDOW_MS,
  maxRequests: RATE_LIMIT_MAX,
});

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";
const singleLineText = (value: unknown, maxLength: number) =>
  text(value, maxLength).replace(/[\r\n\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ");

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });

const getClientAddress = (request: Request) =>
  request.headers.get("cf-connecting-ip") ??
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
  "unknown";

interface ContactRecord {
  id: string;
  reference: string;
  createdAt: string;
  status: "new";
  intent: string;
  details: string;
  name: string;
  email: string;
  locale: "de" | "en";
  source: string;
  clientHash: string;
  userAgent: string;
  scanToken?: string;
  scan?: ScanSnapshot;
}

const persistLocally = async (record: ContactRecord, scanHistory?: ScanHistoryRecord) => {
  const dataDirectory = path.join(process.cwd(), ".data");
  await mkdir(dataDirectory, { recursive: true });
  await appendFile(
    path.join(dataDirectory, "contact-inquiries.ndjson"),
    `${JSON.stringify(record)}\n`,
    { encoding: "utf8" },
  );
  if (scanHistory) {
    await appendFile(
      path.join(dataDirectory, "ai-check-history.ndjson"),
      `${JSON.stringify(scanHistory)}\n`,
      { encoding: "utf8" },
    );
  }
};

const extractEmailAddress = (value: string) => value.match(/<([^>]+)>/)?.[1]?.trim() ?? value.trim();
const namedSender = (name: string, configuredAddress: string) =>
  `${name} <${extractEmailAddress(configuredAddress)}>`;

const sendWithResend = async (
  apiKey: string,
  idempotencyKey: string,
  message: Record<string, unknown>,
) => {
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
      "idempotency-key": idempotencyKey,
    },
    body: JSON.stringify(message),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`contact_delivery_failed_${response.status}`);
};

const deliverWithResend = async (record: ContactRecord) => {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    throw new Error("contact_delivery_not_configured");
  }

  if (record.source === "ai-check" && record.scan && record.scanToken) {
    const lead = {
      name: record.name,
      email: record.email,
      createdAt: record.createdAt,
      source: record.source,
      inquiryType: record.intent,
    };
    const userMail = renderUserAiCheckEmail(lead, record.scan, record.scanToken);
    const internalMail = renderInternalAiCheckEmail(lead, record.scan, record.scanToken);
    const brandReplyTo = process.env.CONTACT_REPLY_TO_EMAIL?.trim() || "kontakt@paternoga-seo-geo.de";

    await Promise.all([
      sendWithResend(apiKey, `${record.id}-internal`, {
        from: namedSender("PATERNOGA Leads", from),
        to: [to],
        reply_to: record.email,
        subject: internalMail.subject,
        text: internalMail.text,
      }),
      sendWithResend(apiKey, `${record.id}-user`, {
        from: namedSender("PATERNOGA – KI-Readiness Check", from),
        to: [record.email],
        reply_to: brandReplyTo,
        subject: userMail.subject,
        text: userMail.text,
        html: userMail.html,
      }),
    ]);
    return;
  }

  const intentLabels: Record<string, string> = {
    new: "Neues Projekt",
    improve: "Bestehende Website",
    advice: "Beratung",
  };
  const message = [
    `Referenz: ${record.reference}`,
    `Eingang: ${record.createdAt}`,
    `Quelle: ${record.source}`,
    `Sprache: ${record.locale}`,
    `Anliegen: ${intentLabels[record.intent] ?? record.intent}`,
    `Name: ${record.name}`,
    `E-Mail: ${record.email}`,
    "",
    record.details,
  ].join("\n");

  await sendWithResend(apiKey, record.id, {
    from,
    to: [to],
    reply_to: record.email,
    subject: `PATERNOGA Anfrage · ${record.reference} · ${intentLabels[record.intent] ?? record.intent}`,
    text: message,
  });
};

const htmlConfirmation = (locale: string, reference: string) => {
  const isEnglish = locale === "en";
  const title = isEnglish ? "The next step is ready." : "Der nächste Schritt ist vorbereitet.";
  const body = isEnglish
    ? "Pascal will review your details personally and get back to you with an initial assessment and suitable next steps."
    : "Pascal prüft deine Angaben persönlich und meldet sich mit einer ersten Einschätzung und passenden nächsten Schritten.";
  const back = isEnglish ? "Back to PATERNOGA" : "Zurück zu PATERNOGA";

  return `<!doctype html>
<html lang="${isEnglish ? "en" : "de"}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)} · Paternoga SEO & GEO Studio</title>
    <style>
      :root { color-scheme: light; font-family: Inter, system-ui, sans-serif; background: #f4f0e8; color: #1b1a17; }
      body { min-height: 100vh; display: grid; place-items: center; margin: 0; padding: 24px; }
      main { width: min(100%, 680px); border: 1px solid rgba(27,26,23,.16); border-radius: 12px; background: #fbf8f2; padding: clamp(32px, 7vw, 72px); box-sizing: border-box; }
      p:first-child { color: #7b2f18; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
      h1 { margin: 24px 0; font-family: Georgia, serif; font-size: clamp(42px, 7vw, 64px); font-weight: 400; line-height: 1.02; }
      p { color: #625f58; line-height: 1.65; }
      a { display: inline-flex; margin-top: 24px; min-height: 48px; align-items: center; background: #b74622; color: #fffaf4; padding: 0 22px; text-decoration: none; }
    </style>
  </head>
  <body>
    <main>
      <p>PATERNOGA · ${escapeHtml(reference)}</p>
      <h1>${escapeHtml(title)}</h1>
      <p>${escapeHtml(body)}</p>
      <a href="/">${escapeHtml(back)}</a>
    </main>
  </body>
</html>`;
};

export const POST: APIRoute = async ({ request }) => {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json({ ok: false, error: "request_too_large" }, { status: 413 });
  }

  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  if (origin) {
    let originHost: string;
    try {
      originHost = new URL(origin).host;
    } catch {
      return Response.json({ ok: false, error: "invalid_origin" }, { status: 403 });
    }
    const acceptedHosts = new Set(
      [
        requestUrl.host,
        request.headers.get("host"),
        request.headers.get("x-forwarded-host"),
      ].filter(Boolean),
    );
    const browserConfirmsSameSite = fetchSite === "same-origin" || fetchSite === "same-site";
    if (!browserConfirmsSameSite && !acceptedHosts.has(originHost)) {
      return Response.json({ ok: false, error: "invalid_origin" }, { status: 403 });
    }
  }

  const contentType = request.headers.get("content-type") ?? "";
  let payload: Record<string, unknown>;

  try {
    if (contentType.includes("application/json")) {
      const parsed: unknown = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
      }
      payload = parsed as Record<string, unknown>;
    } else {
      payload = Object.fromEntries(await request.formData());
    }
  } catch {
    return Response.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  if (text(payload.companyFax, 200)) {
    return Response.json({ ok: true });
  }

  const startedAt = Number(payload.startedAt ?? 0);
  if (startedAt && Date.now() - startedAt < 1_500) {
    return Response.json({ ok: false, error: "submitted_too_fast" }, { status: 429 });
  }

  const intent = text(payload.intent, 24);
  const details = text(payload.details, 2_000);
  const submittedSource = text(payload.source, 30);
  const source = ["ai-check", "geo-audit"].includes(submittedSource) ? submittedSource : "contact-form";
  const submittedName = singleLineText(payload.name, 120);
  const name = source === "ai-check" && !submittedName ? "KI-Check Lead" : submittedName;
  const email = text(payload.email, 254).toLowerCase();
  const locale = text(payload.locale, 2) === "en" ? "en" : "de";
  const scanToken = source === "ai-check" ? text(payload.scanToken, 48_000) : "";
  let scan: ScanSnapshot | undefined;

  if (source === "ai-check") {
    try {
      scan = verifyScanResultToken(scanToken);
    } catch {
      return Response.json({ ok: false, error: "invalid_or_expired_scan" }, { status: 422 });
    }
    if (scan.locale !== locale) {
      return Response.json({ ok: false, error: "scan_locale_mismatch" }, { status: 422 });
    }
  }

  if (
    !["new", "improve", "advice"].includes(intent) ||
    (source !== "ai-check" && details.length < 3) ||
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json({ ok: false, error: "validation_failed" }, { status: 422 });
  }

  const clientAddress = getClientAddress(request);
  if (isRateLimited(clientAddress)) {
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const id = randomUUID();
  const reference = id.slice(0, 8).toUpperCase();
  const record: ContactRecord = {
    id,
    reference,
    createdAt: new Date().toISOString(),
    status: "new",
    intent,
    details,
    name,
    email,
    locale,
    source,
    clientHash: createHash("sha256").update(clientAddress).digest("hex"),
    userAgent: text(request.headers.get("user-agent"), 300),
    scanToken: scan ? scanToken : undefined,
    scan,
  };

  try {
    if (import.meta.env.PROD) {
      await deliverWithResend(record);
    } else {
      const scanHistory = scan
        ? createScanHistoryRecord({
            name,
            email,
            createdAt: record.createdAt,
            source,
            inquiryType: intent,
          }, scan)
        : undefined;
      await persistLocally(record, scanHistory);
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : "unknown_error";
    console.error("Unable to deliver contact enquiry", { reference, reason });
    return Response.json({ ok: false, error: "delivery_failed" }, { status: 503 });
  }

  if (contentType.includes("application/json")) {
    return Response.json({ ok: true, reference }, { status: 201 });
  }

  return new Response(htmlConfirmation(locale, reference), {
    status: 201,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};
