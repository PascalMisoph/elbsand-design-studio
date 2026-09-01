import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";
const fidelityWidths = [320, 375, 430, 768, 1024, 1280, 1440, 1728] as const;
const acquisitionRoutes = [
  "/geo-agentur-deutschland/",
  "/en/geo-agency-germany/",
  "/wissen/ki-crawler-robots-txt/",
  "/en/knowledge/ai-crawlers-robots-txt/",
  "/research/ki-crawler-readiness-dax-40-2026/",
  "/en/research/dax-40-ai-crawler-readiness-2026/",
] as const;

const subpageEntryRoutes = [
  "/geo-agentur-deutschland/",
  "/geo-audit/",
  "/wissen/ki-crawler-robots-txt/",
  "/research/ki-crawler-readiness-dax-40-2026/",
  "/impressum/",
  "/datenschutz/",
  "/en/geo-agency-germany/",
  "/en/privacy/",
] as const;

test("subpage content starts on the shared landing offset", async ({ page }) => {
  for (const [width, expectedGap] of [[375, 48], [1440, 72]] as const) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of subpageEntryRoutes) {
      await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "domcontentloaded" });
      const gap = await page.evaluate(() => {
        const header = document.querySelector<HTMLElement>(".site-header");
        const main = document.querySelector<HTMLElement>("main#main-content");
        const firstContent = [...(main?.querySelectorAll<HTMLElement>("nav, [class*=crumb], .eyebrow, [class*=kicker], [class*=label], h1") ?? [])]
          .filter((element) => {
            const box = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            return box.height > 0 && style.display !== "none" && style.visibility !== "hidden";
          })
          .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];

        if (!header || !firstContent) throw new Error("Missing shared header or subpage entry content");
        return Math.round(firstContent.getBoundingClientRect().top - header.getBoundingClientRect().bottom);
      });
      expect(gap, `${route} at ${width}px`).toBe(expectedGap);
    }
  }
});

for (const route of acquisitionRoutes) {
  test(`${route} keeps its composition across the supported width matrix`, async ({ page }) => {
    for (const width of fidelityWidths) {
      await page.setViewportSize({ width, height: width <= 430 ? 844 : 900 });
      await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
      const geometry = await page.evaluate(() => {
        const h1 = document.querySelector("main h1");
        const box = h1?.getBoundingClientRect();
        return {
          viewport: innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          h1: box ? { left: box.left, right: box.right, width: box.width } : null,
          bodyFont: getComputedStyle(document.body).fontFamily,
        };
      });
      expect(geometry.documentWidth).toBe(geometry.viewport);
      expect(geometry.h1).not.toBeNull();
      expect(geometry.h1?.left).toBeGreaterThanOrEqual(-1);
      expect(geometry.h1?.right).toBeLessThanOrEqual(width + 1);
      expect(geometry.bodyFont).toContain("Inter Variable");
    }
  });
}

test("shared contact flow uses the PATERNOGA type system and visible keyboard focus", async ({ page }) => {
  for (const route of ["/", "/en/"]) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
      await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
      await page.locator("#kontakt").scrollIntoViewIfNeeded();
      await page.locator('[data-contact-path="form"]').click();
      const flow = page.locator("[data-contact-flow]");
      await expect(flow).toBeVisible();
      const typography = await flow.evaluate((element) => {
        const legend = element.querySelector("legend");
        const input = element.querySelector("input");
        return {
          legendFamily: legend && getComputedStyle(legend).fontFamily,
          inputFamily: input && getComputedStyle(input).fontFamily,
        };
      });
      expect(typography.legendFamily).toContain("Inter Variable");
      expect(typography.inputFamily).toContain("Inter Variable");
      const firstChoice = flow.locator('.contact-choice input[name="intent"]').first();
      await page.keyboard.press("Tab");
      await expect(firstChoice).toBeFocused();
      expect(await firstChoice.locator("..").evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe("none");
    }
  }
});

test("section separators do not double at corrected boundaries", async ({ page }) => {
  const routes = [
    ["/ki-markenwahrnehmung/", "main > section:nth-of-type(1)", "main > section:nth-of-type(2)"],
    ["/ki-faktencheck/", "main > section:nth-of-type(1)", "main > section:nth-of-type(2)"],
    ["/geo-audit/", ".a-method", ".a-faq"],
  ] as const;
  for (const [route, previousSelector, nextSelector] of routes) {
    await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
    const widths = await page.evaluate(([previous, next]) => {
      const previousStyle = getComputedStyle(document.querySelector(previous)!);
      const nextStyle = getComputedStyle(document.querySelector(next)!);
      return [previousStyle.borderBottomWidth, nextStyle.borderTopWidth];
    }, [previousSelector, nextSelector]);
    expect(widths).toEqual(["1px", "0px"]);
  }
});

for (const reducedMotion of ["no-preference", "reduce"] as const) {
  test(`crawlability islands hydrate without structural errors (${reducedMotion})`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.emulateMedia({ reducedMotion });
    for (const route of ["/ai-crawlability/", "/en/ai-crawlability/"]) {
      await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
      await page.locator("#crawl-path").scrollIntoViewIfNeeded();
      await page.locator("#diagnostic-workflow").scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
    }
    expect(errors).toEqual([]);
  });
}

test("research tables retain numeric and keyboard-readable publication treatment", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${TEST_ORIGIN}/research/ki-crawler-readiness-dax-40-2026/`, { waitUntil: "networkidle" });
  const region = page.locator(".research-table-region");
  await region.focus();
  await expect(region).toBeFocused();
  await expect(region.locator('th[scope="col"]')).toHaveCount(7);
  await expect(region.locator('th[scope="row"]')).toHaveCount(40);
  expect(await region.locator("table").evaluate((table) => getComputedStyle(table).fontVariantNumeric)).toContain("tabular-nums");
});

test("technical GEO visual motion remains active after hydration", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(`${TEST_ORIGIN}/technische-geo-optimierung/`, { waitUntil: "networkidle" });

  const macLid = page.locator("[data-technical-macbook] > div > div:nth-child(2)");
  await expect.poll(() => macLid.evaluate((element) => getComputedStyle(element).transform), { timeout: 2_500 }).toContain("0.939");

  const beam = page.locator("[data-technical-beam]");
  await beam.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const gradient = beam.locator("linearGradient").first();
  const firstGradientPosition = await gradient.getAttribute("x1");
  const firstBeamOutput = await beam.locator("[data-beam-output]").textContent();
  await page.waitForTimeout(2200);
  expect(await gradient.getAttribute("x1")).not.toBe(firstGradientPosition);
  expect(await beam.locator("[data-beam-output]").textContent()).not.toBe(firstBeamOutput);

  const circuit = page.locator("[data-technical-circuit]");
  await circuit.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const firstCircuitOutput = await circuit.locator("[data-circuit-output]").textContent();
  await page.waitForTimeout(2200);
  expect(await circuit.locator("[data-circuit-output]").textContent()).not.toBe(firstCircuitOutput);
});

test("homepage smoke canvas remains visible and animated", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  const canvas = page.locator(".hero-liquid-chrome canvas");
  await expect(canvas).toBeVisible();
  await expect(page.locator(".hero-liquid-chrome")).toHaveCSS("opacity", "0.78");
  const resolution = await canvas.evaluate((element) => {
    const canvasElement = element as HTMLCanvasElement;
    const box = canvasElement.getBoundingClientRect();
    return {
      widthRatio: canvasElement.width / box.width,
      heightRatio: canvasElement.height / box.height,
    };
  });
  expect(resolution.widthRatio).toBeGreaterThanOrEqual(0.95);
  expect(resolution.heightRatio).toBeGreaterThanOrEqual(0.95);
  const firstFrame = await canvas.evaluate((element) => (element as HTMLCanvasElement & { __liquidFrame?: number }).__liquidFrame ?? 0);
  await page.waitForTimeout(700);
  const secondFrame = await canvas.evaluate((element) => (element as HTMLCanvasElement & { __liquidFrame?: number }).__liquidFrame ?? 0);
  expect(firstFrame).not.toBe(secondFrame);
});
