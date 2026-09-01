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
const serviceContent = read("src/content/service-pages.ts");
const serviceFamilyContent = [
  read("src/content/service-pages/ai-visibility.ts"),
  read("src/content/service-pages/research-support.ts"),
  read("src/content/service-pages/technical-content.ts"),
].join("\n");
const sitemap = read("public/sitemap.xml");
const css = read("src/styles/global.css");
const tailwind = read("src/styles/tailwind.css");
const astroConfig = read("astro.config.mjs");
const faqAccordion = read("src/components/FaqAccordion.astro");
const chart = read("src/components/FlatAreaChart.tsx");
const contact = read("src/components/Contact.astro");
const contactApi = read("src/pages/api/contact.ts");
const aiCheck = read("src/components/AiCheck.astro");
const scanApi = read("src/pages/api/scan.ts");
const llms = read("public/llms.txt");
const llmsFull = read("public/llms-full.txt");
const seo = read("src/lib/seo.ts");
const crawlerStudy = JSON.parse(read("src/data/research/dax-40-ai-crawler-readiness-2026.json"));
const publicCrawlerStudy = read("public/research/dax-40-ai-crawler-readiness-2026.json");
const publicCrawlerCsv = read("public/research/dax-40-ai-crawler-readiness-2026.csv");
const indexNow = read("scripts/indexnow.mjs");
const crawlerPolicyValidator = read("scripts/validate-crawler-policy.mjs");

for (const page of pages) {
  if (!page.includes('id="main-content"')) throw new Error("page: missing main content target");
  if (!page.includes("<Hero")) throw new Error("page: missing hero");
}

for (const page of geoPages) {
  if (!page.includes("<GeoHubPage")) throw new Error("GEO route: missing dedicated hub page");
}

for (const required of ['id="main-content"', 'id="service-network"', "IconFeaturePanel", "LinkButton", "alternateDePath", "alternateEnPath"]) {
  if (!geoHubPage.includes(required)) throw new Error(`GEO hub missing ${required}`);
}

for (const required of [
  "1.450 €",
  "ab 3.900 €",
  "ab 1.850 €",
  "ca. 4–6 Wochen",
  "Klare Grundlagen lassen sich gezielt verbessern und nachvollziehbar prüfen.",
  "Clear foundations can be improved deliberately and reviewed transparently.",
]) {
  if (!geoContent.includes(required)) throw new Error(`GEO content missing ${required}`);
}

for (const required of ["hreflang=\"de\"", "hreflang=\"en\"", "application/ld+json", "skip-link", "twitter:card", "og:image", "max-image-preview:large"]) {
  if (!layout.includes(required)) throw new Error(`layout missing ${required}`);
}

for (const required of ["createPageSchema", "createServicePageSchema", '"@type": "Organization"', "WebSite", "WebPage", "BreadcrumbList"]) {
  if (!seo.includes(required)) throw new Error(`SEO schema helper missing ${required}`);
}

for (const required of ["https://www.paternoga-seo-geo.de/", "sitemap.xml", "llms-full.txt"]) {
  if (!llms.includes(required)) throw new Error(`llms.txt missing ${required}`);
}

for (const required of ["Method and limitations", "German route inventory", "English route inventory"]) {
  if (!llmsFull.includes(required)) throw new Error(`llms-full.txt missing ${required}`);
}

for (const required of ["Suchmaschinen verändern sich.", "Search engines are changing.", "Gefunden werden verändert sich", "imageAlt"]) {
  if (!content.includes(required)) throw new Error(`content missing ${required}`);
}

for (const required of ["prefers-reduced-motion", "@keyframes marquee", "@media (max-width: 640px)", "@media (max-width: 860px)", "focus-visible", "--section", "--gutter"]) {
  if (!css.includes(required)) throw new Error(`CSS missing ${required}`);
}

for (const required of ["@tailwindcss/vite", "tailwindcss()"] ) {
  if (!astroConfig.includes(required)) throw new Error(`Astro Tailwind setup missing ${required}`);
}

for (const required of ["tailwindcss/theme.css", "tailwindcss/utilities.css", "--container-content", "--spacing-section", "--text-display"]) {
  if (!tailwind.includes(required)) throw new Error(`Tailwind token layer missing ${required}`);
}

for (const required of ["<details", "<summary", 'name="page-faq"', "@lucide/astro"] ) {
  if (!faqAccordion.includes(required)) throw new Error(`native FAQ missing ${required}`);
}

for (const required of ["recharts", "@/components/ui/chart", "FlatAreaDatum"] ) {
  if (!chart.includes(required)) throw new Error(`chart island missing ${required}`);
}

const nonExemptVisualSources = [
  "src/components/BrandPerceptionPage.astro",
  "src/components/CompetitorPage.astro",
  "src/components/ContentOptimizationPage.astro",
  "src/components/CrawlabilityPage.astro",
  "src/components/FactCheckPage.astro",
  "src/components/GeoContentPage.astro",
  "src/components/GeoHubPage.astro",
  "src/components/GeoSupportPage.astro",
  "src/components/MonitoringPage.astro",
  "src/components/SourceAnalysisServicePage.astro",
  "src/components/TechnicalGeoPage.astro",
].map(read).join("\n");

if (/<svg(?:\s|>)/i.test(nonExemptVisualSources)) {
  throw new Error("non-exempt service source contains a handwritten inline SVG");
}

for (const required of ["geo-audit", "GEO Audit", "Illustrative Auditansicht", "Illustrative audit view", "alternateDePath", "alternateEnPath"]) {
  if (!serviceContent.includes(required)) throw new Error(`service content missing ${required}`);
}

const serviceRoutePairs = [
  ["/geo-agentur-deutschland/", "/en/geo-agency-germany/"],
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
  ["/wissen/ki-crawler-robots-txt/", "/en/knowledge/ai-crawlers-robots-txt/"],
  ["/research/ki-crawler-readiness-dax-40-2026/", "/en/research/dax-40-ai-crawler-readiness-2026/"],
];

for (const route of serviceRoutePairs.flat()) {
  const sourcePath = `src/pages${route}index.astro`;
  if (!fs.existsSync(path.join(root, sourcePath))) throw new Error(`missing service route ${route}`);
  if (!sitemap.includes(`<loc>https://www.paternoga-seo-geo.de${route}</loc>`)) throw new Error(`sitemap missing ${route}`);
}

if (crawlerStudy.summary.sampleSize !== 40 || crawlerStudy.results.length !== 40) {
  throw new Error("DAX crawler study must contain the declared 40-company sample");
}
if (JSON.parse(publicCrawlerStudy).collectedAt !== crawlerStudy.collectedAt) {
  throw new Error("public research JSON is out of sync with the source dataset");
}
if (!publicCrawlerCsv.startsWith('"company","origin","robots_status"')) {
  throw new Error("public research CSV is missing its expected header");
}
for (const required of ["--dry-run", "api.indexnow.org/indexnow", "keyLocation", "response.ok"]) {
  if (!indexNow.includes(required)) throw new Error(`IndexNow client missing ${required}`);
}
for (const required of ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot", "robots.txt"]) {
  if (!crawlerPolicyValidator.includes(required)) throw new Error(`crawler policy validator missing ${required}`);
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
