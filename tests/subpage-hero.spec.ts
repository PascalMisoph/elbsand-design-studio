import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";

const heroCtaRoutes = [
  "/geo-audit/",
  "/en/geo-audit/",
  "/ki-quellenanalyse/",
  "/en/ai-source-analysis/",
  "/ai-sichtbarkeit/",
  "/en/ai-visibility/",
  "/prompt-recherche/",
  "/en/prompt-research/",
  "/geo-agentur-deutschland/",
  "/en/geo-agency-germany/",
  "/geo-optimierung/",
  "/en/geo-optimization/",
  "/technische-geo-optimierung/",
  "/en/technical-geo-optimization/",
  "/geo-content/",
  "/en/geo-content/",
  "/content-optimierung-ai-suche/",
  "/en/content-optimization-ai-search/",
  "/geo-monitoring/",
  "/en/geo-monitoring/",
  "/ki-faktencheck/",
  "/en/ai-fact-checking/",
  "/ki-wettbewerbsanalyse/",
  "/en/ai-competitor-analysis/",
  "/ki-markenwahrnehmung/",
  "/en/ai-brand-perception/",
  "/ai-crawlability/",
  "/en/ai-crawlability/",
  "/geo-betreuung/",
  "/en/geo-support/",
] as const;

const representativeRoutes = [
  "/geo-audit/",
  "/ki-quellenanalyse/",
  "/technische-geo-optimierung/",
  "/en/technical-geo-optimization/",
  "/geo-monitoring/",
  "/en/geo-monitoring/",
] as const;

const editorialRoutes = [
  "/wissen/ki-crawler-robots-txt/",
  "/en/knowledge/ai-crawlers-robots-txt/",
  "/research/ki-crawler-readiness-dax-40-2026/",
  "/en/research/dax-40-ai-crawler-readiness-2026/",
] as const;

type HeroMetrics = {
  actionBottom: number | null;
  actionCount: number;
  documentWidth: number;
  entryGap: number;
  h1Top: number;
  headerBottom: number;
  hasBreadcrumb: boolean;
  viewportHeight: number;
};

const inspectHero = () => {
  const h1 = document.querySelector<HTMLElement>("main h1");
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!h1 || !header) throw new Error("Missing subpage header or H1");

  const isVisible = (element: HTMLElement) => {
    const box = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return box.width > 0 && box.height > 0 && style.display !== "none" && style.visibility !== "hidden";
  };

  const h1Box = h1.getBoundingClientRect();
  const heroCopy = h1.parentElement;
  const firstEntry = [...document.querySelectorAll<HTMLElement>(
    "main nav, main [class*='crumb'], main .eyebrow, main [class*='kicker'], main [class*='label'], main h1",
  )]
    .filter(isVisible)
    .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
  const controls = [...(heroCopy?.querySelectorAll<HTMLElement>("a, button") ?? [])]
    .filter(isVisible)
    .filter((element) => element.getBoundingClientRect().top >= h1Box.bottom - 8);
  const actionGroup = controls[0]?.parentElement;
  const actionControls = [...(actionGroup?.querySelectorAll<HTMLElement>("a, button") ?? [])].filter(isVisible);
  const actionBoxes = actionControls.map((element) => element.getBoundingClientRect());

  return {
    actionBottom: actionBoxes.length ? Math.max(...actionBoxes.map((box) => box.bottom)) : null,
    actionCount: actionBoxes.length,
    documentWidth: document.documentElement.scrollWidth,
    entryGap: (firstEntry?.getBoundingClientRect().top ?? header.getBoundingClientRect().top)
      - header.getBoundingClientRect().bottom,
    h1Top: h1Box.top,
    headerBottom: header.getBoundingClientRect().bottom,
    hasBreadcrumb: Boolean(document.querySelector("main nav, main [class*='crumb']")),
    viewportHeight: window.innerHeight,
  } satisfies HeroMetrics;
};

for (const route of heroCtaRoutes) {
  test(`${route} keeps the complete hero CTA in the 1366x768 viewport`, async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 768 });

    const response = await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
    expect(response?.status(), route).toBe(200);

    const metrics = await page.evaluate(inspectHero);
    expect(metrics.actionCount, `${route} must expose its existing hero actions`).toBeGreaterThan(0);
    expect(metrics.actionBottom, `${route} hero CTA row`).not.toBeNull();
    expect(metrics.actionBottom ?? Infinity, `${route} hero CTA row`).toBeLessThanOrEqual(768);
    expect(metrics.entryGap, `${route} subpage entry gap`).toBeLessThanOrEqual(48);
    expect(metrics.documentWidth, `${route} horizontal overflow`).toBeLessThanOrEqual(1366);
  });
}

for (const [width, height] of [[1440, 900], [1536, 864], [390, 844]] as const) {
  test(`representative subpage heroes remain composed at ${width}x${height}`, async ({ page }) => {
    await page.setViewportSize({ width, height });

    for (const route of representativeRoutes) {
      const response = await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
      expect(response?.status(), route).toBe(200);

      const metrics = await page.evaluate(inspectHero);
      expect(metrics.actionCount, `${route} must expose its existing hero actions`).toBeGreaterThan(0);
      expect(metrics.actionBottom, `${route} hero CTA row`).not.toBeNull();
      expect(metrics.actionBottom ?? Infinity, `${route} hero CTA row`).toBeLessThanOrEqual(height);
      expect(metrics.entryGap, `${route} subpage entry gap`).toBeLessThanOrEqual(width <= 640 ? 40 : 48);
      expect(metrics.documentWidth, `${route} horizontal overflow`).toBeLessThanOrEqual(width);
    }
  });
}

test("editorial and research entries remain compact without inventing hero CTAs", async ({ page }) => {
  for (const [width, height] of [[1366, 768], [390, 844]] as const) {
    await page.setViewportSize({ width, height });

    for (const route of editorialRoutes) {
      const response = await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
      expect(response?.status(), route).toBe(200);

      const metrics = await page.evaluate(inspectHero);
      expect(metrics.actionCount, `${route} has no hero CTA by design`).toBe(0);
      expect(metrics.h1Top, `${route} H1 starts in the initial viewport`).toBeLessThan(height);
      expect(metrics.entryGap, `${route} entry gap`).toBeLessThanOrEqual(width <= 640 ? 40 : 48);
      expect(metrics.documentWidth, `${route} horizontal overflow`).toBeLessThanOrEqual(width);
    }
  }
});

test("homepage hero layout remains outside the subpage spacing rule", async ({ page }) => {
  for (const route of ["/", "/en/"]) {
    await page.setViewportSize({ width: 1366, height: 768 });
    await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });

    const state = await page.evaluate(() => {
      const hero = document.querySelector<HTMLElement>(".hero");
      return {
        bodyClass: document.body.className,
        heroPaddingBottom: hero && getComputedStyle(hero).paddingBottom,
        heroPaddingTop: hero && getComputedStyle(hero).paddingTop,
      };
    });

    expect(state.bodyClass).toContain("home-page");
    expect(state.heroPaddingTop).toBe("0px");
    expect(state.heroPaddingBottom).toBe("0px");
  }
});
