import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";
const markdownHeaders = { Accept: "text/markdown" };
const url = (path: string) => `${TEST_ORIGIN}${path}`;

test.describe("Markdown content negotiation", () => {
  test("keeps the homepage as HTML for normal requests", async ({ request }) => {
    const response = await request.get(url("/"));
    const body = await response.text();

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/html");
    expect(response.headers()["vary"] ?? "").toContain("Accept");
    expect(body).toContain("<html");
    expect(body).toContain("Suchmaschinen");
  });

  test("keeps an explicit HTML request as HTML", async ({ request }) => {
    const response = await request.get(url("/"), { headers: { Accept: "text/html" } });

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/html");
    expect(response.headers()["vary"] ?? "").toContain("Accept");
  });

  test("returns a clean German homepage representation", async ({ request }) => {
    const response = await request.get(url("/"), { headers: markdownHeaders });
    const body = await response.text();

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/markdown");
    expect(response.headers()["vary"] ?? "").toContain("Accept");
    expect(body).toMatch(/^# /);
    expect(body).toContain("Suchmaschinen");
    expect(body).toContain("kontakt@paternoga-seo-geo.de");
    expect(body).toContain("## Kontakt");
    expect(body).not.toContain("<html");
    expect(body).not.toContain("<script");
    expect(body).not.toContain("astro-island");
    expect(body).not.toContain("<style");
  });

  test("returns English Markdown without mixing in the German hero", async ({ request }) => {
    const response = await request.get(url("/en/"), { headers: markdownHeaders });
    const body = await response.text();

    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/markdown");
    expect(body).toContain("Search engines are changing.");
    expect(body).toContain("## Contact");
    expect(body).not.toContain("Suchmaschinen verändern sich.");
    expect(body).not.toContain("<astro-island");
  });

  test("supports service, knowledge and legal routes", async ({ request }) => {
    for (const path of [
      "/geo-audit/",
      "/en/geo-audit/",
      "/wissen/ki-crawler-robots-txt/",
      "/en/knowledge/ai-crawlers-robots-txt/",
      "/impressum/",
      "/en/legal-notice/",
    ]) {
      const response = await request.get(url(path), { headers: markdownHeaders });
      const body = await response.text();

      expect(response.status(), path).toBe(200);
      expect(response.headers()["content-type"], path).toContain("text/markdown");
      expect(body, path).toMatch(/^# /);
      expect(body, path).not.toContain("<script");
    }
  });

  test("preserves CC BY 4.0 licensing on both DAX research pages", async ({ request }) => {
    const licenseUrl = "https://creativecommons.org/licenses/by/4.0/";
    const routes = [
      ["/research/ki-crawler-readiness-dax-40-2026/", "Creative Commons Namensnennung 4.0 International (CC BY 4.0)", "Inhalte und Rechte der untersuchten Drittwebsites bleiben hiervon unberührt.", "Zur Originalstudie"],
      ["/en/research/dax-40-ai-crawler-readiness-2026/", "Creative Commons Attribution 4.0 International (CC BY 4.0)", "The content and rights of the third-party websites examined remain unaffected.", "Read the original study"],
    ] as const;

    for (const [path, licenseText, scopeText, originalLabel] of routes) {
      const htmlResponse = await request.get(url(path));
      const html = await htmlResponse.text();
      const schemaBlock = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i)?.[1];
      const schema = JSON.parse(schemaBlock ?? "{}");
      const dataset = schema["@graph"]?.find((node: Record<string, unknown>) => node["@type"] === "Dataset") as Record<string, unknown> | undefined;
      const markdownResponse = await request.get(url(path), { headers: markdownHeaders });
      const markdown = await markdownResponse.text();

      expect(htmlResponse.status(), path).toBe(200);
      expect(dataset?.license, path).toBe(licenseUrl);
      expect(html, path).toContain(licenseText);
      expect(html, path).toContain(scopeText);
      expect(html, path).toContain(`href="${licenseUrl}"`);
      expect(html, path).toContain(`href="https://www.paternoga-seo-geo.de${path}"`);
      expect(html, path).toContain('hreflang="de"');
      expect(html, path).toContain('hreflang="en"');
      expect(markdownResponse.status(), path).toBe(200);
      expect(markdown, path).toContain(licenseText);
      expect(markdown, path).toContain(scopeText);
      expect(markdown, path).toContain(licenseUrl);
      expect(markdown, path).toContain(originalLabel);
    }
  });

  test("supports Markdown on every canonical sitemap route", async ({ request }) => {
    const sitemap = await request.get(url("/sitemap.xml"));
    const sitemapBody = await sitemap.text();
    const routes = [...sitemapBody.matchAll(/<loc>https:\/\/www\.paternoga-seo-geo\.de([^<]+)<\/loc>/g)].map(
      (match) => match[1],
    );

    expect(sitemap.status()).toBe(200);
    expect(routes).toHaveLength(40);

    for (const route of routes) {
      const response = await request.get(url(route), { headers: markdownHeaders });
      const body = await response.text();

      expect(response.status(), route).toBe(200);
      expect(response.headers()["content-type"], route).toContain("text/markdown");
      expect(response.headers()["vary"] ?? "", route).toContain("Accept");
      expect(body, route).toContain("Canonical URL");
      expect(body, route).not.toContain("<script");
      expect(body, route).not.toContain("astro-island");
    }
  });

  test("preserves the crawler discovery files", async ({ request }) => {
    const robots = await request.get(url("/robots.txt"));
    const llms = await request.get(url("/llms.txt"));
    const llmsFull = await request.get(url("/llms-full.txt"));

    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain("Content-Signal: search=yes, ai-input=yes, ai-train=yes");
    const llmsBody = await llms.text();
    expect(llmsBody).toContain("https://www.paternoga-seo-geo.de/");
    expect(llmsBody).toContain("Contact: kontakt@paternoga-seo-geo.de");
    expect(llmsBody).not.toMatch(/pascal\.misoph@gmail\.com|pascal@paternoga-seo-geo\.de/i);
    expect(await llmsFull.text()).toContain("kontakt@paternoga-seo-geo.de");
  });
});
