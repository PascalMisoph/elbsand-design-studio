import { readFile } from "node:fs/promises";

const config = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
const canonicalHostRedirect = config.redirects?.find((redirect) => redirect.has?.some((condition) => condition.type === "host" && condition.value === "paternoga-seo-geo.de"));
const sourceRule = config.headers?.find((rule) => rule.source === "/(.*)");
const configured = new Map((sourceRule?.headers ?? []).map((header) => [header.key.toLowerCase(), header.value]));
const required = {
  "x-content-type-options": "nosniff",
  "x-frame-options": "SAMEORIGIN",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
};
const failures = [];

if (canonicalHostRedirect?.source !== "/:path*" || canonicalHostRedirect.destination !== "https://www.paternoga-seo-geo.de/:path*" || canonicalHostRedirect.permanent !== true) {
  failures.push("vercel.json is missing the permanent apex-to-www redirect");
}
if (!sourceRule) failures.push("vercel.json is missing its catch-all header rule");
for (const [name, value] of Object.entries(required)) {
  if (configured.get(name) !== value) failures.push(`${name} is missing or has an unexpected value`);
}

const csp = configured.get("content-security-policy") ?? "";
for (const directive of [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src-attr 'none'",
  "img-src 'self' data:",
  "font-src 'self'",
  "https://assets.aceternity.com",
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://assets.calendly.com",
  "https://calendly.com",
]) {
  if (!csp.includes(directive)) failures.push(`CSP is missing ${directive}`);
}
if (csp.includes("unsafe-eval")) failures.push("CSP must not allow unsafe-eval");
if (!csp.includes("script-src 'self' 'unsafe-inline'")) failures.push("CSP script policy does not document the required Astro inline-script exception");
if (!csp.includes("style-src 'self' 'unsafe-inline'")) failures.push("CSP style policy does not document the required Astro inline-style exception");

const middleware = await readFile(new URL("../src/middleware.ts", import.meta.url), "utf8");
if (!middleware.includes("applySecurityHeaders(headers)")) failures.push("Astro middleware does not apply the shared security headers");

if (failures.length > 0) {
  console.error(`Security header validation failed (${failures.length} issues):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Security header configuration passed: Vercel catch-all and Astro middleware cover the required policy.");
