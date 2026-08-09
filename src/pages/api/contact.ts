import type { APIRoute } from "astro";
import { createHash, randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const prerender = false;

const MAX_REQUEST_BYTES = 12_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestHistory = new Map<string, number[]>();

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

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

const htmlConfirmation = (locale: string, reference: string) => {
  const isEnglish = locale === "en";
  const title = isEnglish ? "Thank you for your enquiry." : "Vielen Dank für deine Anfrage.";
  const body = isEnglish
    ? "Your details have been received. Pascal will reply personally."
    : "Deine Angaben sind angekommen. Pascal meldet sich persönlich bei dir.";
  const back = isEnglish ? "Back to ELBSAND" : "Zurück zu ELBSAND";

  return `<!doctype html>
<html lang="${isEnglish ? "en" : "de"}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)} · ELBSAND Design Studio</title>
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
      <p>ELBSAND · ${escapeHtml(reference)}</p>
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
    const originHost = new URL(origin).host;
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
      payload = await request.json();
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
  const submittedName = text(payload.name, 120);
  const name = source === "ai-check" && !submittedName ? "KI-Check Lead" : submittedName;
  const email = text(payload.email, 254).toLowerCase();
  const locale = text(payload.locale, 2) === "en" ? "en" : "de";

  if (
    !["new", "improve", "advice"].includes(intent) ||
    details.length < 3 ||
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
  const record = {
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
  };

  try {
    const dataDirectory = path.join(process.cwd(), ".data");
    await mkdir(dataDirectory, { recursive: true });
    await appendFile(
      path.join(dataDirectory, "contact-inquiries.ndjson"),
      `${JSON.stringify(record)}\n`,
      { encoding: "utf8" },
    );
  } catch (error) {
    console.error("Unable to persist contact enquiry", error);
    return Response.json({ ok: false, error: "persistence_failed" }, { status: 500 });
  }

  if (contentType.includes("application/json")) {
    return Response.json({ ok: true, reference }, { status: 201 });
  }

  return new Response(htmlConfirmation(locale, reference), {
    status: 201,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};
