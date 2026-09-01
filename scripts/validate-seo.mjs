const origin = new URL(process.argv[2] ?? "http://127.0.0.1:4321");
const canonicalOrigin = "https://www.paternoga-seo-geo.de";

const decodeHtml = (value = "") => value
  .replaceAll("&amp;", "&")
  .replaceAll("&quot;", '"')
  .replaceAll("&#39;", "'")
  .replaceAll("&lt;", "<")
  .replaceAll("&gt;", ">");
const stripTags = (value = "") => decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
const attribute = (html, pattern) => decodeHtml(html.match(pattern)?.[1]?.trim() ?? "");
const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const sitemapResponse = await fetch(new URL("/sitemap.xml", origin));
if (!sitemapResponse.ok) throw new Error(`Unable to fetch sitemap: ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.paternoga-seo-geo\.de([^<]*)<\/loc>/g)]
  .map((match) => match[1] || "/");
const routeSet = new Set(paths);
const failures = [];
const titles = new Map();
const pages = new Map();
const checkedAssets = new Map();
const articleRoutes = new Set([
  "/wissen/ki-crawler-robots-txt/",
  "/en/knowledge/ai-crawlers-robots-txt/",
  "/research/ki-crawler-readiness-dax-40-2026/",
  "/en/research/dax-40-ai-crawler-readiness-2026/",
]);
const researchRoutes = new Set([
  "/research/ki-crawler-readiness-dax-40-2026/",
  "/en/research/dax-40-ai-crawler-readiness-2026/",
]);
const legalRoutes = new Set([
  "/impressum/",
  "/datenschutz/",
  "/en/legal-notice/",
  "/en/privacy/",
]);

for (const path of paths) {
  const response = await fetch(new URL(path, origin));
  const html = await response.text();
  pages.set(path, html);
  if (response.status !== 200) failures.push(`${path}: returned ${response.status}`);

  const title = stripTags(attribute(html, /<title>([\s\S]*?)<\/title>/i));
  const description = attribute(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = attribute(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const expectedCanonical = new URL(path, canonicalOrigin).href;
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)]
    .map((match) => ({ level: Number(match[1]), text: stripTags(match[2]) }));

  if (!title || title.length > 60) failures.push(`${path}: title length is ${title.length}, expected 1-60`);
  if (!description || description.length > 155) failures.push(`${path}: description length is ${description.length}, expected 1-155`);
  if (canonical !== expectedCanonical) failures.push(`${path}: canonical is ${canonical || "missing"}`);
  if (h1Count !== 1) failures.push(`${path}: expected one H1, found ${h1Count}`);
  if (titles.has(title)) failures.push(`${path}: duplicate title also used by ${titles.get(title)}`);
  titles.set(title, path);

  for (let index = 1; index < headings.length; index += 1) {
    const previous = headings[index - 1];
    const current = headings[index];
    if (current.level > previous.level + 1) {
      failures.push(`${path}: heading jump H${previous.level} -> H${current.level} before “${current.text}”`);
    }
  }

  for (const required of [
    '<meta name="robots"',
    '<meta property="og:title"',
    '<meta property="og:description"',
    '<meta property="og:image"',
    '<meta name="twitter:card"',
    '<link rel="alternate" hreflang="de"',
    '<link rel="alternate" hreflang="en"',
    '<link rel="alternate" hreflang="x-default"',
  ]) {
    if (!html.includes(required)) failures.push(`${path}: missing ${required}`);
  }

  const schemaBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (schemaBlocks.length === 0) failures.push(`${path}: missing JSON-LD`);
  const schemaTypes = new Set();
  const schemaNodes = [];
  for (const block of schemaBlocks) {
    try {
      const parsed = JSON.parse(block[1]);
      const nodes = Array.isArray(parsed?.["@graph"]) ? parsed["@graph"] : [parsed];
      for (const node of nodes) {
        schemaNodes.push(node);
        const types = Array.isArray(node?.["@type"]) ? node["@type"] : [node?.["@type"]];
        types.filter(Boolean).forEach((type) => schemaTypes.add(type));
      }
    } catch {
      failures.push(`${path}: invalid JSON-LD`);
    }
  }
  for (const type of ["Organization", "WebSite", "WebPage"]) {
    if (!schemaTypes.has(type)) failures.push(`${path}: JSON-LD missing ${type}`);
  }
  const organization = schemaNodes.find((node) => node?.["@type"] === "Organization");
  if (organization?.name !== "Paternoga SEO & GEO Studio") failures.push(`${path}: Organization name is inconsistent`);
  if (organization?.["@id"] !== `${canonicalOrigin}/#organization`) failures.push(`${path}: Organization @id is inconsistent`);
  if (organization?.founder?.["@id"] !== `${canonicalOrigin}/#pascal-misoph`) failures.push(`${path}: founder @id is inconsistent`);
  if (organization?.areaServed?.name !== "Deutschland") failures.push(`${path}: national areaServed is missing`);
  if (organization?.logo?.width !== 256 || organization?.logo?.height !== 256) failures.push(`${path}: logo dimensions do not match the shipped asset`);
  if (articleRoutes.has(path)) {
    if (!html.includes('<meta property="og:type" content="article"')) failures.push(`${path}: Open Graph type is not article`);
    for (const type of ["TechArticle", "BreadcrumbList"]) {
      if (!schemaTypes.has(type)) failures.push(`${path}: JSON-LD missing ${type}`);
    }
    const article = schemaNodes.find((node) => node?.["@type"] === "TechArticle");
    if (article?.author?.["@id"] !== `${canonicalOrigin}/#pascal-misoph`) failures.push(`${path}: article author @id is inconsistent`);
    if (researchRoutes.has(path) && !schemaTypes.has("Dataset")) failures.push(`${path}: JSON-LD missing Dataset`);
  } else if (path !== "/" && path !== "/en/" && !legalRoutes.has(path)) {
    for (const type of ["Service", "BreadcrumbList"]) {
      if (!schemaTypes.has(type)) failures.push(`${path}: JSON-LD missing ${type}`);
    }
  }

  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  if (images.some((image) => !/\salt="[^"]*"/i.test(image))) failures.push(`${path}: image without alt attribute`);
  if (images.some((image) => !/\swidth="\d+"/i.test(image) || !/\sheight="\d+"/i.test(image))) {
    failures.push(`${path}: image without explicit dimensions`);
  }
}

for (const [path, html] of pages) {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/gi)].map((match) => decodeHtml(match[1])));
  const hrefs = [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)].map((match) => decodeHtml(match[1]));
  for (const href of hrefs) {
    if (/^(?:mailto:|tel:|https?:\/\/|\/\/)/i.test(href)) continue;
    const resolved = new URL(href, new URL(path, canonicalOrigin));
    const targetPath = resolved.pathname.endsWith("/") || resolved.pathname.includes(".")
      ? resolved.pathname
      : `${resolved.pathname}/`;
    if (targetPath.includes(".") && !routeSet.has(targetPath)) {
      if (!checkedAssets.has(targetPath)) {
        const assetResponse = await fetch(new URL(targetPath, origin));
        checkedAssets.set(targetPath, assetResponse.ok);
      }
      if (!checkedAssets.get(targetPath)) failures.push(`${path}: linked asset missing: ${href}`);
      continue;
    }
    if (targetPath !== "/" && !routeSet.has(targetPath)) failures.push(`${path}: internal link target missing: ${href}`);
    if (resolved.hash && targetPath === path && !ids.has(resolved.hash.slice(1))) {
      failures.push(`${path}: local fragment target missing: ${href}`);
    }
  }

  for (const hreflang of ["de", "en", "x-default"]) {
    const match = html.match(new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${escapePattern(hreflang)}"\\s+href="([^"]+)"`, "i"));
    if (!match) continue;
    const alternatePath = new URL(decodeHtml(match[1])).pathname;
    if (!routeSet.has(alternatePath)) failures.push(`${path}: hreflang ${hreflang} points to missing ${alternatePath}`);
  }
}

if (paths.length !== 40) failures.push(`Expected 40 sitemap routes, found ${paths.length}`);

if (failures.length > 0) {
  console.error(`SEO validation failed (${failures.length} issues):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO validation passed: ${paths.length} routes, unique metadata, canonical/hreflang, headings, JSON-LD, images and internal links.`);
