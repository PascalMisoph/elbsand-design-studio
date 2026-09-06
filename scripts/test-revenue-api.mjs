import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir, mkdtemp, readFile } from "node:fs/promises";
import path from "node:path";
import { createScanResultToken } from "../src/lib/server/scan-result-token.ts";
import { interpretScanResult } from "../src/lib/ai-readiness.ts";

await mkdir(".codex-tmp", { recursive: true });
const directory = await mkdtemp(path.resolve(".codex-tmp/revenue-api-"));
const log = path.join(directory, "mock-mails.ndjson");
const origin = "http://127.0.0.1:4397";
process.env.SCAN_RESULT_SIGNING_SECRET = "fixture-only-revenue-contract-signing-secret";
try { await fetch(origin); throw new Error("Test port 4397 already occupied"); }
catch (error) { if (error.message.includes("already occupied")) throw error; }
const server = spawn(process.execPath, ["--import", "./tests/fixtures/revenue-mail-mock.mjs", "dist/server/entry.mjs"], {
  stdio: ["ignore", "pipe", "pipe"],
  env: { ...process.env, HOST: "127.0.0.1", PORT: "4397", NODE_ENV: "production", RESEND_API_KEY: "fixture-only", CONTACT_FROM_EMAIL: "sender@example.invalid", CONTACT_TO_EMAIL: "internal@example.invalid", CONTACT_REPLY_TO_EMAIL: "reply@example.invalid", REVENUE_MAIL_LOG: log },
});
let logs = "";
server.stdout.on("data", (data) => { logs += data; });
server.stderr.on("data", (data) => { logs += data; });
let requestIndex = 0;
const send = (data) => fetch(`${origin}/api/contact`, { method: "POST", headers: { "content-type": "application/json", origin, "x-forwarded-for": `192.0.2.${++requestIndex}` }, body: JSON.stringify(data) });
const base = { name: "QA Fixture", email: "qa@example.invalid", intent: "advice", details: "https://example.invalid/ – synthetic contract test", source: "geo-audit-service", locale: "de", formGuard: "", startedAt: Date.now() - 10000, offer_type: "geo_audit", landing_page: "/", source_page: "/geo-audit/", cta_id: "audit_hero", utm_source: "test", utm_medium: "referral", utm_campaign: "revenue_sprint", attribution_mode: "consented_session", funnel_path: ["/", "/geo-audit/"] };
try {
  let ready = false;
  for (let i = 0; i < 100; i++) {
    if (server.exitCode !== null) throw new Error(logs);
    try { if ((await fetch(origin)).ok) { ready = true; break; } } catch { /* Binding. */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  assert.ok(ready, logs);
  const ids = new Set();
  for (const variant of [base, { ...base, locale: "en", source_page: "/en/geo-audit/" }, { ...base, offer_type: "page_sprint", intent: "improve", source: "content-optimization-service", source_page: "/content-optimierung-ai-suche/", cta_id: "sprint_hero" }, { ...base, offer_type: "general", source: "national-geo-agency" }, { ...base, attribution_mode: "current_request", utm_campaign: "", landing_page: "/geo-audit/" }]) {
    const response = await send(variant);
    assert.equal(response.status, 201);
    const receipt = await response.json();
    assert.match(receipt.lead_id, /^[a-f0-9-]{36}$/);
    assert.ok(!ids.has(receipt.lead_id)); ids.add(receipt.lead_id);
    const mails = (await readFile(log, "utf8")).trim().split("\n").map(JSON.parse);
    const mail = mails.at(-1);
    assert.ok(mail.text.includes(receipt.lead_id));
    const attribution = JSON.parse(mail.text.split("Zuordnung: ")[1].split("\n")[0]);
    for (const field of ["offer_type", "source_page", "landing_page", "cta_id", "utm_campaign", "attribution_mode"]) assert.equal(attribution[field], variant[field]);
    assert.ok(mail.text.includes(`Quelle: ${variant.source}`));
  }
  assert.equal((await send({ ...base, details: "" })).status, 422);
  assert.equal((await send({ ...base, source: "ai-check", scanToken: "invalid" })).status, 422);
  assert.equal((await send({ ...base, startedAt: Date.now() })).status, 429);
  assert.equal((await send({ ...base, email: "fail@example.invalid" })).status, 503);
  const bot = await send({ ...base, formGuard: "filled-by-bot" });
  assert.equal(bot.status, 200);
  assert.equal((await bot.json()).lead_id, undefined);
  assert.equal((await readFile(log, "utf8")).trim().split("\n").length, 5);
  for (const locale of ["de", "en"]) {
    const categories = Object.fromEntries(["ai", "data", "tech"].map((key) => [key, { key, title: key, score: 0, maxScore: key === "tech" ? 30 : 35, status: "fail", checks: [{ slug: "fixture", title: "Synthetic check", detail: "Test fixture only", status: "fail", passed: false, score: 0, maxScore: 5 }] }]));
    const core = { requestedUrl: "https://example.invalid/", finalUrl: "https://example.invalid/", scannedAt: new Date().toISOString(), scanId: "00000000-0000-4000-8000-000000000001", score: 0, grade: "E", criticalIssues: 3, categories };
    const snapshot = { ...core, locale, interpretation: interpretScanResult(core, locale) };
    const token = createScanResultToken(snapshot);
    const response = await send({ ...base, locale, source: "ai-check", offer_type: "technical_ai_check", scanToken: token, details: "", intent: "improve" });
    assert.equal(response.status, 201);
    const receipt = await response.json();
    const mails = (await readFile(log, "utf8")).trim().split("\n").map(JSON.parse);
    const pair = mails.slice(-2);
    assert.ok(pair.some((mail) => mail.text.includes(receipt.lead_id) && mail.text.includes('"offer_type":"technical_ai_check"')));
    assert.ok(pair.some((mail) => mail.to.includes("qa@example.invalid") && mail.html.includes("result=")));
    const resultPath = locale === "de" ? "/ki-readiness-ergebnis/" : "/en/ai-readiness-result/";
    assert.equal((await fetch(`${origin}${resultPath}?result=${encodeURIComponent(token)}`)).status, 200);
  }
  console.log("Revenue API contract passed: 5/5 attributed inquiries, unique lead IDs, DE/EN scanner internal + user mock emails and signed result pages, validation, scan-token guard, timing guard, delivery failure and honeypot. No external email sent.");
} finally { server.kill(); }
