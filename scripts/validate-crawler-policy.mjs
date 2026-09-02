import { readFile } from "node:fs/promises";
import { evaluateRobotsAccess, parseRobots } from "./lib/robots-policy.mjs";

const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
const llms = await readFile(new URL("../public/llms.txt", import.meta.url), "utf8");
const llmsFull = await readFile(new URL("../public/llms-full.txt", import.meta.url), "utf8");
const groups = parseRobots(robots);
const targetPaths = [...sitemap.matchAll(/<loc>https:\/\/www\.paternoga-seo-geo\.de([^<]*)<\/loc>/g)]
  .map((match) => match[1] || "/");
const agents = ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot"];
const failures = [];

if (!/^sitemap:\s*https:\/\/www\.paternoga-seo-geo\.de\/sitemap\.xml\s*$/im.test(robots)) {
  failures.push("robots.txt does not declare the canonical sitemap");
}
if (!/^content-signal:\s*search=yes,\s*ai-input=yes,\s*ai-train=yes\s*$/im.test(robots)) {
  failures.push("robots.txt does not declare the intended Content-Signal policy");
}
if (targetPaths.length !== 40) failures.push(`Expected 40 canonical sitemap routes, found ${targetPaths.length}`);
for (const [name, document] of [["llms.txt", llms], ["llms-full.txt", llmsFull]]) {
  if (!document.includes("Paternoga SEO & GEO Studio")) failures.push(`${name} does not identify the organization consistently`);
  if (!document.includes("https://www.paternoga-seo-geo.de/")) failures.push(`${name} does not declare the canonical site`);
}

for (const agent of agents) {
  for (const path of targetPaths) {
    if (evaluateRobotsAccess(groups, agent, path) !== "allowed") failures.push(`${agent} is blocked from ${path}`);
  }
}

if (failures.length > 0) {
  console.error(`Crawler policy validation failed (${failures.length} issues):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Crawler policy validation passed: ${agents.length} search crawlers can access all ${targetPaths.length} canonical public routes; robots, sitemap and llms files are aligned.`);
