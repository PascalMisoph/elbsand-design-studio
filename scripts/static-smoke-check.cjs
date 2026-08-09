const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const pages = [read("src/pages/index.astro"), read("src/pages/en/index.astro")];
const geoPages = [
  read("src/pages/geo-optimierung/index.astro"),
  read("src/pages/en/geo-optimization/index.astro"),
];
const geoHubPage = read("src/components/GeoHubPage.astro");
const layout = read("src/layouts/BaseLayout.astro");
const content = read("src/content/site.ts");
const geoContent = read("src/content/geo.ts");
const servicePage = read("src/components/ServicePage.astro");
const serviceContent = read("src/content/service-pages.ts");
const serviceFamilyContent = [
  read("src/content/service-pages/ai-visibility.ts"),
  read("src/content/service-pages/research-support.ts"),
  read("src/content/service-pages/technical-content.ts"),
].join("\n");
const sitemap = read("public/sitemap.xml");
const css = read("src/styles/global.css");
const contact = read("src/components/Contact.astro");
const contactApi = read("src/pages/api/contact.ts");
const aiCheck = read("src/components/AiCheck.astro");
const scanApi = read("src/pages/api/scan.ts");

for (const page of pages) {
  if (!page.includes('id="main-content"')) throw new Error("page: missing main content target");
  if (!page.includes("<Hero")) throw new Error("page: missing hero");
}

for (const page of geoPages) {
  if (!page.includes("<GeoHubPage")) throw new Error("GEO route: missing dedicated hub page");
}

for (const required of ['id="main-content"', 'class="h-hero', 'id="h-services"', 'class="h-packages', "alternateDePath", "alternateEnPath"]) {
  if (!geoHubPage.includes(required)) throw new Error(`GEO hub missing ${required}`);
}

for (const required of [
  "1.450 €",
  "ab 3.900 €",
  "ab 1.850 €",
  "ca. 4–6 Wochen",
  "Nennungen und Empfehlungen lassen sich nicht garantieren. Messbare Verbesserungen schon.",
  "Mentions and recommendations cannot be guaranteed. Measurable improvements can.",
]) {
  if (!geoContent.includes(required)) throw new Error(`GEO content missing ${required}`);
}

for (const required of ["hreflang=\"de\"", "hreflang=\"en\"", "application/ld+json", "skip-link"]) {
  if (!layout.includes(required)) throw new Error(`layout missing ${required}`);
}

for (const required of ["Suchmaschinen verändern sich.", "Search engines are changing.", "Gefunden werden verändert sich", "imageAlt"]) {
  if (!content.includes(required)) throw new Error(`content missing ${required}`);
}

for (const required of ["prefers-reduced-motion", "@keyframes marquee", "@media (max-width: 640px)", "@media (max-width: 860px)", "focus-visible", "--section", "--gutter"]) {
  if (!css.includes(required)) throw new Error(`CSS missing ${required}`);
}

for (const required of ["BreadcrumbList", "FAQPage", "data-service-reveal", "prefers-reduced-motion", "service-related", "audit-demo", "data-demo-variant", "service-narrative-artifact", "method-scene"]) {
  if (!servicePage.includes(required)) throw new Error(`service page foundation missing ${required}`);
}

for (const required of ["geo-audit", "GEO Audit", "Illustrative Auditansicht", "Illustrative audit view", "alternateDePath", "alternateEnPath"]) {
  if (!serviceContent.includes(required)) throw new Error(`service content missing ${required}`);
}

const serviceRoutePairs = [
  ["/geo-audit/", "/en/geo-audit/"],
  ["/ai-sichtbarkeit/", "/en/ai-visibility/"],
  ["/ki-quellenanalyse/", "/en/ai-source-analysis/"],
  ["/ki-wettbewerbsanalyse/", "/en/ai-competitor-analysis/"],
  ["/ki-markenwahrnehmung/", "/en/ai-brand-perception/"],
  ["/ki-faktencheck/", "/en/ai-fact-checking/"],
  ["/prompt-recherche/", "/en/prompt-research/"],
  ["/technische-geo-optimierung/", "/en/technical-geo-optimization/"],
  ["/ai-crawlability/", "/en/ai-crawlability/"],
  ["/geo-content/", "/en/geo-content/"],
  ["/content-optimierung-ai-suche/", "/en/content-optimization-ai-search/"],
  ["/geo-monitoring/", "/en/geo-monitoring/"],
  ["/geo-betreuung/", "/en/geo-support/"],
];

for (const route of serviceRoutePairs.flat()) {
  const sourcePath = `src/pages${route}index.astro`;
  if (!fs.existsSync(path.join(root, sourcePath))) throw new Error(`missing service route ${route}`);
  if (!sitemap.includes(`<loc>https://elbsand.studio${route}</loc>`)) throw new Error(`sitemap missing ${route}`);
}

for (const variant of [
  "visibility-index",
  "source-map",
  "competitor-split",
  "perception-orbit",
  "factcheck-tilt",
  "prompt-constellation",
  "technical-graph",
  "crawl-path",
  "citation-document",
  "content-refresh",
  "monitoring-timeline",
  "action-queue",
]) {
  if (!serviceFamilyContent.includes(`variant: "${variant}"`)) throw new Error(`service family missing visual variant ${variant}`);
}

for (const required of ['data-contact-flow', 'action="/api/contact"', 'name="intent"', "autocomplete=", "required", 'type="submit"', "aria-live", "data-flow-success", "https://calendly.com/pascal-misoph/erstgespraech", "https://assets.calendly.com/assets/external/widget.js"]) {
  if (!contact.includes(required)) throw new Error(`contact form missing ${required}`);
}

for (const required of ["export const POST", "validation_failed", "isRateLimited", "contact-inquiries.ndjson", "htmlConfirmation"]) {
  if (!contactApi.includes(required)) throw new Error(`contact API missing ${required}`);
}

for (const required of ["data-ai-check", 'action="/api/contact"', "/api/scan", "data-ai-score", "data-ai-lead-form"]) {
  if (!aiCheck.includes(required)) throw new Error(`AI check missing ${required}`);
}

for (const required of ["validatePublicUrl", "isPrivateAddress", "robots.txt", "application\\/ld\\+json", "ttfbMs", "isRateLimited"]) {
  if (!scanApi.includes(required)) throw new Error(`scan API missing ${required}`);
}

for (const slug of ["llmstxt", "llmsfull", "gptbot", "perplexity", "claudebot", "headings", "multimodal", "schemaorg", "schemalocal", "eeat", "sitemap", "jsonld", "nap", "citability", "https", "hsts", "xcontent", "xframe", "csp", "referrer", "ttfb"]) {
  if (!scanApi.includes(`"${slug}"`)) throw new Error(`scan API missing criterion ${slug}`);
}

for (const forbidden of ["Math.random()", "if(score > 95)", "score = 92"]) {
  if (scanApi.includes(forbidden)) throw new Error(`scan API contains deceptive scoring: ${forbidden}`);
}

if (content.includes("Beim Absenden öffnet sich dein E-Mail-Programm")) {
  throw new Error("content still contains the mail application conversion break");
}

console.log("source accessibility/performance smoke ok");
