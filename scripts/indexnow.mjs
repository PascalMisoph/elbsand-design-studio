import { readFile } from "node:fs/promises";

const siteOrigin = "https://www.paternoga-seo-geo.de";
const key = "31e505214575d66e8609be34fa20f140";
const keyLocation = `${siteOrigin}/${key}.txt`;
const endpoint = "https://api.indexnow.org/indexnow";
const requested = process.argv.slice(2).filter((argument) => argument !== "--dry-run");
const dryRun = process.argv.includes("--dry-run") || process.env.INDEXNOW_DRY_RUN === "1";

if (requested.length === 0) {
  throw new Error("Pass one or more genuinely new, changed or deleted PATERNOGA paths. Example: npm run indexnow -- /geo-agentur-deutschland/");
}

const keyFile = (await readFile(new URL(`../public/${key}.txt`, import.meta.url), "utf8")).trim();
if (keyFile !== key) throw new Error("IndexNow key file does not match the configured key");

const urls = [...new Set(requested.map((pathOrUrl) => new URL(pathOrUrl, siteOrigin).toString()))];
for (const url of urls) {
  if (new URL(url).origin !== siteOrigin) throw new Error(`Refusing to submit URL outside ${siteOrigin}: ${url}`);
}

const payload = { host: new URL(siteOrigin).hostname, key, keyLocation, urlList: urls };
if (dryRun) {
  console.log(JSON.stringify({ endpoint, payload, dryRun: true }, null, 2));
  process.exit(0);
}

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(15_000),
});

if (!response.ok && response.status !== 202) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
}

console.log(`IndexNow accepted ${urls.length} URL notification(s) with HTTP ${response.status}. Receipt does not guarantee indexing.`);
