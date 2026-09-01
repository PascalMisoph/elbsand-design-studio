import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { evaluateRobotsAccess, parseRobots } from "./lib/robots-policy.mjs";

const collectedAt = new Date().toISOString();
const requestDelayMs = 900;
const requestTimeoutMs = 8_000;
const maxBytes = 1_500_000;
const userAgent = "PATERNOGA-Public-Research/1.0 (+https://www.paternoga-seo-geo.de/research/ki-crawler-readiness-dax-40-2026/)";

const companies = [
  ["adidas", "https://www.adidas-group.com"],
  ["Airbus", "https://www.airbus.com"],
  ["Allianz", "https://www.allianz.com"],
  ["BASF", "https://www.basf.com"],
  ["Bayer", "https://www.bayer.com"],
  ["Beiersdorf", "https://www.beiersdorf.com"],
  ["BMW", "https://www.bmwgroup.com"],
  ["Brenntag", "https://www.brenntag.com"],
  ["Commerzbank", "https://www.commerzbank.com"],
  ["Continental", "https://www.continental.com"],
  ["Daimler Truck", "https://www.daimlertruck.com"],
  ["Deutsche Bank", "https://www.db.com"],
  ["Deutsche Börse", "https://www.deutsche-boerse.com"],
  ["Deutsche Telekom", "https://www.telekom.com"],
  ["DHL Group", "https://group.dhl.com"],
  ["E.ON", "https://www.eon.com"],
  ["Fresenius", "https://www.fresenius.com"],
  ["Fresenius Medical Care", "https://freseniusmedicalcare.com"],
  ["GEA", "https://www.gea.com"],
  ["Hannover Rück", "https://www.hannover-re.com"],
  ["Heidelberg Materials", "https://www.heidelbergmaterials.com"],
  ["Henkel", "https://www.henkel.com"],
  ["HOCHTIEF", "https://www.hochtief.com"],
  ["Infineon", "https://www.infineon.com"],
  ["Mercedes-Benz Group", "https://group.mercedes-benz.com"],
  ["Merck KGaA", "https://www.merckgroup.com"],
  ["MTU Aero Engines", "https://www.mtu.de"],
  ["Munich Re", "https://www.munichre.com"],
  ["QIAGEN", "https://www.qiagen.com"],
  ["Rheinmetall", "https://www.rheinmetall.com"],
  ["RWE", "https://www.rwe.com"],
  ["SAP", "https://www.sap.com"],
  ["Scout24", "https://www.scout24.com"],
  ["Siemens", "https://www.siemens.com"],
  ["Siemens Energy", "https://www.siemens-energy.com"],
  ["Siemens Healthineers", "https://www.siemens-healthineers.com"],
  ["Symrise", "https://www.symrise.com"],
  ["Volkswagen", "https://www.volkswagen-group.com"],
  ["Vonovia", "https://www.vonovia.de"],
  ["Zalando", "https://corporate.zalando.com"],
];

const crawlerAgents = ["Googlebot", "Bingbot", "OAI-SearchBot", "GPTBot", "PerplexityBot"];

const delay = (milliseconds) => new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds));

const readLimitedBody = async (response) => {
  if (!response.body) return "";
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  let size = 0;
  while (size < maxBytes) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    text += decoder.decode(value, { stream: true });
  }
  if (size >= maxBytes) await reader.cancel();
  return text + decoder.decode();
};

const fetchPublicText = async (url) => {
  try {
    const response = await fetch(url, {
      headers: { "user-agent": userAgent, accept: "text/html,text/plain,application/xml;q=0.9,*/*;q=0.5" },
      redirect: "follow",
      signal: AbortSignal.timeout(requestTimeoutMs),
    });
    const body = await readLimitedBody(response);
    return {
      requestedUrl: url,
      finalUrl: response.url,
      status: response.status,
      contentType: response.headers.get("content-type") ?? "",
      body,
      error: null,
    };
  } catch (error) {
    return {
      requestedUrl: url,
      finalUrl: null,
      status: null,
      contentType: "",
      body: "",
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

const csvCell = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;

const results = [];
for (const [company, origin] of companies) {
  const [robots, llms, sitemap, homepage] = await Promise.all([
    fetchPublicText(new URL("/robots.txt", origin).toString()),
    fetchPublicText(new URL("/llms.txt", origin).toString()),
    fetchPublicText(new URL("/sitemap.xml", origin).toString()),
    fetchPublicText(new URL("/", origin).toString()),
  ]);
  await delay(requestDelayMs);

  const robotsReadable = robots.status === 200 && robots.body.trim().length > 0;
  const groups = robotsReadable ? parseRobots(robots.body) : [];
  const policies = Object.fromEntries(crawlerAgents.map((agent) => [agent, {
    accessToHomepage: robotsReadable ? evaluateRobotsAccess(groups, agent, "/") : "unknown",
    explicitlyNamed: robotsReadable && groups.some((group) => group.agents.includes(agent.toLowerCase())),
  }]));
  const sitemapDeclared = robotsReadable && /^sitemap\s*:\s*https?:\/\//im.test(robots.body);
  const sitemapReachable = sitemap.status === 200 && /<(?:urlset|sitemapindex)\b/i.test(sitemap.body);
  const llmsReachable = llms.status === 200 && llms.body.trim().length >= 40 && !/<html\b/i.test(llms.body.slice(0, 500));
  const jsonLdPresent = homepage.status === 200 && /type=["']application\/ld\+json["']/i.test(homepage.body);

  results.push({
    company,
    origin,
    robots: { status: robots.status, finalUrl: robots.finalUrl, readable: robotsReadable, sitemapDeclared, error: robots.error },
    policies,
    llmsTxt: { status: llms.status, finalUrl: llms.finalUrl, reachable: llmsReachable, error: llms.error },
    sitemap: { status: sitemap.status, finalUrl: sitemap.finalUrl, reachable: sitemapReachable, error: sitemap.error },
    homepage: { status: homepage.status, finalUrl: homepage.finalUrl, jsonLdPresent, error: homepage.error },
  });
}

const count = (predicate) => results.filter(predicate).length;
const summary = {
  sampleSize: results.length,
  robotsReadable: count((result) => result.robots.readable),
  sitemapDeclared: count((result) => result.robots.sitemapDeclared),
  sitemapReachableAtRoot: count((result) => result.sitemap.reachable),
  llmsTxtReachable: count((result) => result.llmsTxt.reachable),
  homepageJsonLdPresent: count((result) => result.homepage.jsonLdPresent),
  crawlerPolicies: Object.fromEntries(crawlerAgents.map((agent) => [agent, {
    allowed: count((result) => result.policies[agent].accessToHomepage === "allowed"),
    blocked: count((result) => result.policies[agent].accessToHomepage === "blocked"),
    unknown: count((result) => result.policies[agent].accessToHomepage === "unknown"),
    explicitlyNamed: count((result) => result.policies[agent].explicitlyNamed),
  }])),
};

const study = {
  title: "AI-Crawler-Readiness der DAX-40-Unternehmenswebsites 2026",
  collectedAt,
  sampleDefinition: "DAX 40 constituents observed on 2026-08-30; public corporate domains selected manually and recorded in this script.",
  methodologyVersion: "1.0.0",
  requestPolicy: { publicResourcesOnly: true, sequentialDomains: true, requestsPerDomain: 4, delayBetweenDomainsMs: requestDelayMs, timeoutMs: requestTimeoutMs, maxBytesPerResponse: maxBytes, userAgent },
  limitations: [
    "The study observes public robots.txt declarations and selected public endpoints; it does not impersonate or verify visits by external crawlers.",
    "Allowed means the evaluated homepage path is not disallowed by the readable robots.txt policy. It does not prove server, CDN or WAF access.",
    "A root sitemap check can miss sitemaps hosted at a different path when they are not declared in robots.txt.",
    "JSON-LD presence is a syntax-presence check, not a quality or validity assessment.",
    "Corporate domains and crawler policies can change after collection.",
  ],
  summary,
  results,
};

const jsonPath = resolve("src/data/research/dax-40-ai-crawler-readiness-2026.json");
const publicJsonPath = resolve("public/research/dax-40-ai-crawler-readiness-2026.json");
const publicCsvPath = resolve("public/research/dax-40-ai-crawler-readiness-2026.csv");
await Promise.all([dirname(jsonPath), dirname(publicJsonPath), dirname(publicCsvPath)].map((directory) => mkdir(directory, { recursive: true })));
await writeFile(jsonPath, `${JSON.stringify(study, null, 2)}\n`, "utf8");
await writeFile(publicJsonPath, `${JSON.stringify(study, null, 2)}\n`, "utf8");

const headers = ["company", "origin", "robots_status", "robots_readable", "sitemap_declared", "sitemap_reachable", "llms_txt_reachable", "json_ld_present", ...crawlerAgents.flatMap((agent) => [`${agent}_homepage_access`, `${agent}_explicitly_named`])];
const rows = results.map((result) => [
  result.company,
  result.origin,
  result.robots.status,
  result.robots.readable,
  result.robots.sitemapDeclared,
  result.sitemap.reachable,
  result.llmsTxt.reachable,
  result.homepage.jsonLdPresent,
  ...crawlerAgents.flatMap((agent) => [result.policies[agent].accessToHomepage, result.policies[agent].explicitlyNamed]),
]);
await writeFile(publicCsvPath, `${[headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")}\n`, "utf8");

console.log(JSON.stringify({ collectedAt, summary, jsonPath, publicCsvPath }, null, 2));
