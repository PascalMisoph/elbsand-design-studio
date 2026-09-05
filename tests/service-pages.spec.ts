import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";

const serviceRoutes = [
  ["/geo-audit/", "de"], ["/en/geo-audit/", "en"],
  ["/ai-sichtbarkeit/", "de"], ["/en/ai-visibility/", "en"],
  ["/ki-quellenanalyse/", "de"], ["/en/ai-source-analysis/", "en"],
  ["/ki-wettbewerbsanalyse/", "de"], ["/en/ai-competitor-analysis/", "en"],
  ["/ki-markenwahrnehmung/", "de"], ["/en/ai-brand-perception/", "en"],
  ["/ki-faktencheck/", "de"], ["/en/ai-fact-checking/", "en"],
  ["/prompt-recherche/", "de"], ["/en/prompt-research/", "en"],
  ["/technische-geo-optimierung/", "de"], ["/en/technical-geo-optimization/", "en"],
  ["/ai-crawlability/", "de"], ["/en/ai-crawlability/", "en"],
  ["/geo-content/", "de"], ["/en/geo-content/", "en"],
  ["/content-optimierung-ai-suche/", "de"], ["/en/content-optimization-ai-search/", "en"],
  ["/geo-monitoring/", "de"], ["/en/geo-monitoring/", "en"],
  ["/geo-betreuung/", "de"], ["/en/geo-support/", "en"],
] as const;

const acquisitionRoutes = [
  ["/geo-agentur-deutschland/", "de"],
  ["/en/geo-agency-germany/", "en"],
  ["/wissen/ki-crawler-robots-txt/", "de"],
  ["/en/knowledge/ai-crawlers-robots-txt/", "en"],
  ["/research/ki-crawler-readiness-dax-40-2026/", "de"],
  ["/en/research/dax-40-ai-crawler-readiness-2026/", "en"],
] as const;

for (const [route, lang] of acquisitionRoutes) {
  test(`${route} acquisition route is responsive and semantic`, async ({ page }) => {
    for (const width of [320, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main")).toHaveCount(1);
      const widths = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
      expect(widths[0]).toBe(widths[1]);
    }
  });
}

for (const [route, lang] of serviceRoutes) {
  test(`${route} is structurally sound`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    const response = await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
    expect(await page.locator("main section").count()).toBeGreaterThanOrEqual(4);
    await expect(page.locator('main img[src*="project-logos"], main img[src*="/projects/"]')).toHaveCount(0);
    await expect(page.locator("main > .subpage-contact")).toHaveCount(1);
    await expect(page.locator("main > .subpage-contact .contact-path")).toHaveCount(2);
    expect(await page.locator("main").evaluate((main) => main.lastElementChild?.classList.contains("subpage-contact"))).toBe(true);
    await expect(page.locator(".site-footer-column")).toHaveCount(4);
    if (route === "/geo-audit/") {
      await expect(page.locator("h1")).toHaveText("GEO Audit: Wie sichtbar ist dein Unternehmen in ChatGPT & Co.?");
      await expect(page.locator(".a-hero-copy > p:not(.a-kicker)")).toContainText("Verfolge deine KI-Sichtbarkeit");
      await expect(page.locator(".a-presence-grid h3")).toHaveText(["Sichtbarkeits-Scores", "Stimmung & Themen", "Quellenautorität", "Faktencheck deiner Marke", "Wettbewerbsvergleich", "Plattformvergleich"]);
      await expect(page.locator(".a-presence h2")).toHaveText("Verstehe und ordne deine KI-Präsenz ein");
      await expect(page.locator('.score-visual-image img[src="/images/geo-audit-visibility-scores-graph.webp"]')).toHaveJSProperty("naturalWidth", 1254);
      await expect(page.locator('.sentiment-visual-image img[src="/images/geo-audit-sentiment-insights.webp"]')).toHaveJSProperty("naturalWidth", 1254);
      const citationVisual = page.locator('.citation-visual-image img[src="/images/geo-audit-citation-authority-v2.webp"]');
      await expect(citationVisual).toHaveJSProperty("naturalWidth", 1254);
      await expect(citationVisual).toHaveJSProperty("naturalHeight", 792);
      await expect(page.locator('.fact-visual-image img[src="/images/geo-audit-brand-factcheck-v2.webp"]')).toHaveJSProperty("naturalWidth", 1254);
      await expect(page.locator('.benchmark-visual-image img[src="/images/geo-audit-competitive-benchmarking.webp"]')).toHaveJSProperty("naturalWidth", 1254);
      const platformVisual = page.locator('.platform-visual-image img[src="/images/geo-audit-platform-comparisons.webp"]');
      await platformVisual.scrollIntoViewIfNeeded();
      await expect(platformVisual).toHaveJSProperty("naturalWidth", 1254);
      await expect(page.locator(".a-actions")).toHaveCount(1);
      await expect(page.locator(".a-actions a")).toHaveCount(2);
      await expect(page.locator(".a-report-strip")).toHaveCount(0);
      await expect(page.getByText("Illustrative Auditansicht", { exact: true })).toHaveCount(0);
      await expect(page.locator("#audit-story .a-story-copy > .a-kicker")).toHaveCount(0);
      await expect(page.locator("#audit-story .a-step-icon")).toHaveCount(4);
      expect(await page.locator("#audit-story [data-a-step]").evaluateAll((steps) => steps.every((step) => getComputedStyle(step).opacity === "1"))).toBe(true);
      await expect(page.locator(".a-faq details")).toHaveCount(9);
      await expect(page.locator(".a-faq summary").first()).toHaveText(/Welche KI-Systeme werden geprüft/);
    }
    if (route === "/en/geo-audit/") {
      await expect(page.locator("h1")).toHaveText("GEO audit: How visible is your business in AI answers?");
      await expect(page.locator(".a-hero-copy > p:not(.a-kicker)")).toHaveText("Track your AI visibility, see where and how AI mentions your brand, and uncover insights to enhance your presence.");
      await expect(page.locator(".a-presence-grid h3")).toHaveText(["Visibility Scores", "Sentiment & Keyword Insights", "Citation Authority", "FactCheck what AI says about your brand", "Competitive Benchmarking", "Platform Comparisons"]);
      await expect(page.locator(".a-presence h2")).toHaveText("Understand and assess your AI presence");
      await expect(page.locator(".a-faq details")).toHaveCount(9);
      await expect(page.locator(".a-faq summary").first()).toHaveText(/Which AI systems are reviewed/);
    }

    const geometry = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      overflowers: [...document.querySelectorAll<HTMLElement>("body *")]
        .filter((element) => !element.closest(".skip-link, .mobile-menu"))
        .map((element) => {
          const box = element.getBoundingClientRect();
          return { tag: element.tagName, className: element.className, left: box.left, right: box.right };
        })
        .filter((box) => box.right > innerWidth + 1 || box.left < -1),
    }));
    expect(geometry.scrollWidth).toBe(geometry.clientWidth);
    expect(geometry.overflowers).toEqual([]);
  });
}

for (const route of ["/geo-optimierung/", "/en/geo-optimization/"]) {
  test(`${route} network remains contained at mobile and desktop widths`, async ({ page }) => {
    for (const width of [320, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "networkidle" });
      await expect(page.locator(".h-services")).toHaveCount(1);
      await expect(page.locator("main > .subpage-contact")).toHaveCount(1);
      await expect(page.locator(".site-footer-column")).toHaveCount(4);
      const widths = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
      expect(widths[0]).toBe(widths[1]);
    }
  });
}

test("GEO audit presence grid keeps its desktop heading on one line and reference visuals interactive", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${TEST_ORIGIN}/geo-audit/`, { waitUntil: "networkidle" });
  await expect(page.locator(".a-presence-grid > article")).toHaveCount(6);
  await expect(page.locator(".a-presence-grid > article.has-reference-image")).toHaveCount(6);
  await expect(page.locator(".a-method [data-platform-panel]")).toHaveCount(3);
  await expect(page.locator(".a-method-board, .a-board-head, .a-board-row")).toHaveCount(0);
  await expect(page.locator(".site-header .button-small")).toHaveText("Kostenfreier KI-Check");
  expect(await page.locator(".a-method-copy").evaluate((element) => getComputedStyle(element).position)).toBe("sticky");
  expect(await page.locator(".site-header .button-small").evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
  const dividerPositions = await page.evaluate(() => ({
    presence: document.querySelector(".a-presence-grid > article")?.getBoundingClientRect().right,
    story: document.querySelector(".a-story-list")?.getBoundingClientRect().left,
    platforms: document.querySelector(".a-platform-stack")?.getBoundingClientRect().left,
  }));
  expect(dividerPositions.presence).toBeDefined();
  expect(Math.abs((dividerPositions.presence ?? 0) - (dividerPositions.story ?? 0))).toBeLessThanOrEqual(.5);
  expect(Math.abs((dividerPositions.presence ?? 0) - (dividerPositions.platforms ?? 0))).toBeLessThanOrEqual(.5);
  const headingGeometry = await page.locator(".a-presence h2").evaluate((heading) => {
    const style = getComputedStyle(heading);
    return { height: heading.getBoundingClientRect().height, lineHeight: Number.parseFloat(style.lineHeight) };
  });
  expect(headingGeometry.height).toBeLessThanOrEqual(headingGeometry.lineHeight + 1);
  const firstReferenceCard = page.locator(".a-presence-grid > article.has-reference-image").first();
  const firstReferenceImage = firstReferenceCard.locator("img");
  await firstReferenceCard.hover();
  await expect.poll(() => firstReferenceImage.evaluate((image) => getComputedStyle(image).transform)).not.toBe("none");
});

test("Prompt research hero begins inside the first viewport", async ({ page }) => {
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${TEST_ORIGIN}/prompt-recherche/`, { waitUntil: "networkidle" });
    const heroPosition = await page.locator(".pv-hero h1").evaluate((heading) => ({
      top: heading.getBoundingClientRect().top,
      viewportHeight: innerHeight,
    }));
    expect(heroPosition.top).toBeLessThan(heroPosition.viewportHeight * .5);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${TEST_ORIGIN}/prompt-recherche/`, { waitUntil: "networkidle" });
  await expect(page.locator(".pv-flow h2")).toHaveText("Entdecken, verfolgen, verbessern");
  const discoverVisual = page.locator('.pv-flow-grid article').first().locator('img[src="/images/prompt-research-discover-trends-v2.webp"]');
  await expect(discoverVisual).toHaveJSProperty("naturalWidth", 1254);
  await expect(discoverVisual).toHaveJSProperty("naturalHeight", 464);
  const relevanceVisual = page.locator('.pv-flow-grid article').nth(1).locator('img[src="/images/prompt-research-relevance-v2.webp"]');
  await expect(relevanceVisual).toHaveJSProperty("naturalWidth", 1254);
  await expect(relevanceVisual).toHaveJSProperty("naturalHeight", 464);
  const trackingVisual = page.locator('.pv-flow-grid article').nth(2).locator('img[src="/images/prompt-research-track-prompts-v2.webp"]');
  await expect(trackingVisual).toHaveJSProperty("naturalWidth", 1254);
  await expect(trackingVisual).toHaveJSProperty("naturalHeight", 464);
  const actionVisual = page.locator('.pv-flow-grid article').nth(3).locator('img[src="/images/prompt-research-action.webp"]');
  await expect(actionVisual).toHaveJSProperty("naturalWidth", 1254);
  await expect(actionVisual).toHaveJSProperty("naturalHeight", 464);
  const flowGeometry = await page.locator(".pv-flow").evaluate((section) => {
    const heading = section.querySelector("h2") as HTMLElement;
    const header = section.querySelector(".pv-flow-inner > header") as HTMLElement;
    const grid = section.querySelector(".pv-flow-grid") as HTMLElement;
    const inner = section.querySelector(".pv-flow-inner") as HTMLElement;
    const headingStyle = getComputedStyle(heading);
    const cards = [...section.querySelectorAll<HTMLElement>(".pv-flow-grid article")].map((card) => card.getBoundingClientRect());
    const rect = (element: HTMLElement) => {
      const { left, right, width } = element.getBoundingClientRect();
      return { left, right, width };
    };
    return {
      headingHeight: heading.getBoundingClientRect().height,
      headingLineHeight: Number.parseFloat(headingStyle.lineHeight),
      header: rect(header),
      grid: rect(grid),
      inner: rect(inner),
      cards: cards.map(({ width, height, left, right, top, bottom }) => ({ width, height, left, right, top, bottom })),
    };
  });
  expect(flowGeometry.headingHeight).toBeLessThanOrEqual(flowGeometry.headingLineHeight + 1);
  expect(flowGeometry.cards).toHaveLength(4);
  expect(flowGeometry.header).toEqual(flowGeometry.inner);
  expect(flowGeometry.grid).toEqual(flowGeometry.inner);
  expect(new Set(flowGeometry.cards.map((card) => Math.round(card.width * 10) / 10)).size).toBe(1);
  expect(new Set(flowGeometry.cards.map((card) => Math.round(card.height * 10) / 10)).size).toBe(1);
  expect(Math.abs(flowGeometry.cards[0].right + 1 - flowGeometry.cards[1].left)).toBeLessThanOrEqual(.5);
  expect(Math.abs(flowGeometry.cards[0].right + .5 - (flowGeometry.grid.left + flowGeometry.grid.width / 2))).toBeLessThanOrEqual(.5);
  expect(Math.abs(flowGeometry.cards[0].bottom + 1 - flowGeometry.cards[2].top)).toBeLessThanOrEqual(.5);
});

test("shared FAQ keeps single-open native disclosure behavior", async ({ page }) => {
  await page.goto(`${TEST_ORIGIN}/content-optimierung-ai-suche/`);

  const questions = page.locator("main details[name='page-faq']");
  await expect(questions).toHaveCount(5);
  await questions.nth(0).locator("summary").click();
  await expect(questions.nth(0)).toHaveAttribute("open", "");

  await questions.nth(1).locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(questions.nth(1)).toHaveAttribute("open", "");
  await expect(questions.nth(0)).not.toHaveAttribute("open", "");
  await expect(page.locator("main astro-island")).toHaveCount(0);
});
