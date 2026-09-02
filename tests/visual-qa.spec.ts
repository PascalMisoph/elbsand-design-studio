import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";

const sizes = [
  ["mobile-320", 320, 700],
  ["mobile-375", 375, 812],
  ["mobile-430", 430, 932],
  ["tablet-768", 768, 1024],
  ["tablet-1024", 1024, 768],
  ["laptop-1280", 1280, 800],
  ["desktop-1440", 1440, 900],
  ["wide-1728", 1728, 1000],
] as const;

for (const [name, width, height] of sizes) {
  test(`${name}: layout, images and primary flow`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => message.type() === "error" && errors.push(message.text()));
    await page.setViewportSize({ width, height });
    await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });

    const geometry = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      h1Count: document.querySelectorAll("h1").length,
      proofTop: document.querySelector(".proof-strip")?.getBoundingClientRect().top,
      cookie: Boolean(document.querySelector('[class*="cookie" i], [id*="cookie" i]')),
      missingAnchor: [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
        .map((anchor) => anchor.getAttribute("href"))
        .filter((href): href is string => Boolean(href && href !== "#" && !document.querySelector(href))),
      overflowers: [...document.querySelectorAll<HTMLElement>("body *")]
        .filter((element) => !element.closest(".marquee-window, .contact-honeypot"))
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            selector: `${element.tagName.toLowerCase()}.${element.className}`,
            parent: `${element.parentElement?.tagName.toLowerCase()}.${element.parentElement?.className}`,
            text: element.textContent?.trim().slice(0, 60),
            left: rect.left,
            right: rect.right,
            width: rect.width,
          };
        })
        .filter((item) => item.right > innerWidth + 1 || item.left < -1),
    }));

    expect({ widths: [geometry.scrollWidth, geometry.clientWidth], overflowers: geometry.overflowers }).toEqual({
      widths: [geometry.clientWidth, geometry.clientWidth],
      overflowers: [],
    });
    expect(geometry.h1Count).toBe(1);
    expect(geometry.cookie).toBe(false);
    expect(geometry.missingAnchor).toEqual([]);
    if (width >= 1280) expect(geometry.proofTop).toBeLessThan(height * 2);

    for (const image of await page.locator('img[loading="lazy"]').all()) {
      await image.scrollIntoViewIfNeeded();
    }
    await page.locator("footer").scrollIntoViewIfNeeded();
    // The brand lockup is semantic text; this count covers the remaining content imagery.
    expect(await page.locator("img").count()).toBeGreaterThanOrEqual(24);
    await expect(page.locator(".hero-media video")).toHaveCount(1);
    await expect(page.locator('.hero-media source[type="video/mp4"]')).toHaveAttribute(
      "src",
      "/video/paternoga-search-shift-de.mp4"
    );
    await page.waitForFunction(() => [...document.images].every((image) => image.complete));
    const brokenImages = await page.locator("img").evaluateAll((images) => {
      const imageElements = images as HTMLImageElement[];
      return imageElements.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src);
    });
    expect(brokenImages).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("keyboard focus, reduced motion and mobile menu", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  const focusStyle = await page.locator(".skip-link").evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(focusStyle).not.toBe("none");
  await page.locator(".mobile-menu > summary").click();
  await expect(page.locator(".mobile-menu nav")).toBeVisible();
  await expect(page.locator(".mobile-menu nav .button")).toBeVisible();
  await expect(page.locator(".proof-list")).toHaveCSS("animation-name", "none");
  await expect(page.locator('.marquee-group[aria-hidden="true"]')).toBeHidden();
  await expect(page.locator("html")).not.toHaveClass(/offer-check-animation/);
  await expect(page.locator(".offer-check-mark").first()).toHaveCSS("stroke-dashoffset", "0px");
  await expect(page.locator(".process")).not.toHaveClass(/has-process-motion/);
  await expect(page.locator(".process-step").first()).toHaveCSS("opacity", "1");
});

test("Profound-style header keeps the service network simple and accessible", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  const desktopNav = page.locator(".desktop-nav");
  expect(await desktopNav.locator(":scope > .header-menu > summary").allTextContents()).toEqual([
    "Leistungen",
    "Ressourcen",
    "Lösungen",
  ]);
  expect(await desktopNav.locator(":scope > .header-direct-link").allTextContents()).toEqual([
    "Referenzen",
    "Ablauf",
    "Kontakt",
  ]);

  await desktopNav.locator(".header-menu > summary").first().click();
  await expect(desktopNav.locator(".header-menu").first()).toHaveAttribute("open", "");
  await expect(desktopNav.locator(".header-menu").first().getByRole("link")).toHaveCount(15);
  await desktopNav.locator(".header-menu > summary").nth(1).click();
  await expect(desktopNav.locator(".header-menu").first()).not.toHaveAttribute("open", "");
  await expect(desktopNav.locator(".header-menu").nth(1)).toHaveAttribute("open", "");
  await page.keyboard.press("Escape");
  await expect(desktopNav.locator(".header-menu[open]")).toHaveCount(0);

  await page.setViewportSize({ width: 320, height: 700 });
  await page.locator(".mobile-menu > summary").click();
  const mobileNav = page.locator(".mobile-menu > nav");
  await expect(mobileNav).toBeVisible();
  expect(await mobileNav.locator(":scope > .mobile-nav-group > summary").allTextContents()).toEqual([
    "Leistungen⌄",
    "Ressourcen⌄",
    "Lösungen⌄",
  ]);
  const mobileGeometry = await mobileNav.evaluate((element) => {
    const box = element.getBoundingClientRect();
    return { top: box.top, right: box.right, bottom: box.bottom, left: box.left, scrollWidth: element.scrollWidth };
  });
  expect(mobileGeometry).toEqual({ top: 66, right: 320, bottom: 700, left: 0, scrollWidth: 320 });
});

test("selected projects marquee moves", async ({ page }) => {
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  const marquee = page.locator(".proof-list");
  await expect(marquee).toHaveCSS("animation-name", "marquee");
  const primaryLogos = page.locator(".marquee-group").first();
  await expect(primaryLogos.locator("img")).toHaveCount(5);
  expect(await primaryLogos.locator("img").evaluateAll((images) => images.map((image) => image.getAttribute("alt")))).toEqual([
    "Kuzikus Wildlife Reserve Logo",
    "Rays of Hope Logo",
    "Pauline Paternoga Logo",
    "Paw & Sage Logo",
    "Ochre & Chrome Logo",
  ]);
  expect(await primaryLogos.locator("a").evaluateAll((links) => links.map((link) => link.getAttribute("href")))).toEqual([
    "https://www.kuzikus-namibia.com/",
    "https://rays-of-hope.de",
    "https://www.sprechen-paulinepaternoga.de/",
    "https://pawandsage.com",
    "https://ochreandchrome.com",
  ]);
  await expect(page.locator(".marquee-group").nth(1).locator("img")).toHaveCount(5);
  await expect(page.locator(".marquee-group").nth(1).locator("img").first()).toHaveAttribute("alt", "");
  const start = await marquee.evaluate((element) => getComputedStyle(element).transform);
  await page.waitForTimeout(350);
  const end = await marquee.evaluate((element) => getComputedStyle(element).transform);
  expect(end).not.toBe(start);
});

test("project section uses the final real-image selection", async ({ page }) => {
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  expect(await page.locator(".featured-project, .project-card").locator("h3").allTextContents()).toEqual([
    "Rays of Hope",
    "Eurosummer",
    "Pauline Paternoga",
    "Kuzikus",
  ]);
  expect(await page.locator(".featured-art img, .project-art img").evaluateAll((images) =>
    images.map((image) => new URL((image as HTMLImageElement).src).pathname)
  )).toEqual([
    "/images/projects/rays-of-hope-homepage.webp",
    "/images/projects/eurosummer-homepage.webp",
    "/images/projects/pauline-paternoga-homepage.webp",
    "/images/projects/kuzikus-baumzertifikate.webp",
  ]);
  await expect(page.locator('.featured-art source[media="(max-width: 640px)"]')).toHaveAttribute(
    "srcset",
    "/images/projects/rays-of-hope-homepage-mobile.webp"
  );
});

test("service checks replace numbers and animate once in view", async ({ page }) => {
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  await expect(page.locator(".offer-item .offer-check")).toHaveCount(3);
  expect(await page.locator(".offer-item").evaluateAll((items) =>
    items.map((item) => item.querySelector(":scope > span")?.textContent?.trim())
  )).toEqual(["1", "2", "3"]);
  await page.waitForTimeout(1100);
  await expect(page.locator(".offer-item.is-visible")).toHaveCount(0);
  await expect(page.locator(".offer-check-circle").first()).toHaveCSS("stroke-dashoffset", "1px");
  await expect(page.locator(".offer-check-mark").first()).toHaveCSS("stroke-dashoffset", "1px");

  for (const row of await page.locator(".offer-item").all()) {
    await row.scrollIntoViewIfNeeded();
    await expect(row).toHaveClass(/is-visible/);
  }

  await expect(page.locator(".offer-check-circle").first()).toHaveCSS("stroke-dashoffset", "0px");
  await expect(page.locator(".offer-check-mark").first()).toHaveCSS("stroke-dashoffset", "0px");
});

test("homepage keeps the AI check boundary and offer heading readable", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });

  await expect(page.locator(".ai-check")).toHaveCSS("border-bottom-width", "1px");
  await expect(page.locator(".ai-check")).toHaveCSS("border-bottom-style", "solid");
  await expect(page.locator(".offer-heading-line")).toHaveCount(2);
  await expect(page.locator(".offer-heading h2")).toHaveText("Dein digitaler Erfolg. Unsere Leistungen für dich");
  await expect(page.locator(".offer-heading-line").nth(1)).toHaveText("Unsere Leistungen für dich");

  const headingLines = await page.locator(".offer-heading-line").evaluateAll((lines) =>
    lines.map((line) => {
      const box = line.getBoundingClientRect();
      return { top: box.top, bottom: box.bottom };
    })
  );
  expect(headingLines[1].top).toBeGreaterThanOrEqual(headingLines[0].bottom - 1);

  await page.setViewportSize({ width: 375, height: 812 });
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.locator(".offer-heading h2")).toHaveText("Dein digitaler Erfolg. Unsere Leistungen für dich");
});

test("SEO and GEO uses an accessible responsive Bento grid", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });

  const section = page.locator(".visibility-band");
  const desktopNav = page.locator(".desktop-nav");
  await desktopNav.locator(".header-menu > summary").first().click();
  await expect(desktopNav.locator(".header-mega-feature").first()).toHaveAttribute("href", "/geo-optimierung/");
  await expect(section.locator("h2")).toHaveText("Gefunden werden verändert sich");
  await expect(section.locator(".visibility-tile")).toHaveCount(5);
  await expect(section.getByRole("link", { name: "Mehr über SEO & GEO erfahren" })).toHaveAttribute("href", "/geo-optimierung/");
  await expect(page.locator(".offer-detail-link")).toHaveAttribute("href", "/geo-optimierung/");
  await expect(page.locator(".site-footer").getByRole("link", { name: "GEO-Optimierung" })).toHaveAttribute("href", "/geo-optimierung/");
  expect(await section.locator(".visibility-tile h3").allTextContents()).toEqual([
    "Technisches SEO",
    "Lokale Auffindbarkeit",
    "Strukturierte Informationen",
    "GEO-Optimierung",
  ]);
  expect(await section.locator(".visibility-systems li span").allTextContents()).toEqual([
    "Google",
    "ChatGPT",
    "Claude",
    "Perplexity",
  ]);
  await expect(section.locator(".visibility-sources a")).toHaveCount(2);
  await expect(section.locator('.visibility-sources a[href*="/2025/07/22/"]')).toBeVisible();
  await expect(section.locator('.visibility-sources a[href*="/2026/06/17/"]')).toBeVisible();
  await expect(section.locator(".visibility-note")).toContainText("kann nicht garantiert werden");
  await expect(section.locator(".visibility-geo-image")).toHaveAttribute("src", "/images/geo-visibility-stock.webp");

  const desktopLayout = await section.evaluate((element) => {
    const tiles = [...element.querySelectorAll<HTMLElement>(".visibility-tile")].map((tile) => tile.getBoundingClientRect());
    const geo = element.querySelector<HTMLElement>(".visibility-tile--geo")!.getBoundingClientRect();
    return { first: tiles[0], second: tiles[1], structured: tiles[2], statistic: tiles[3], geo };
  });
  expect(desktopLayout.second.left).toBeGreaterThan(desktopLayout.first.right);
  expect(desktopLayout.geo.right).toBeLessThan(desktopLayout.first.left);
  expect(desktopLayout.geo.width).toBeGreaterThan(desktopLayout.first.width * 1.9);
  expect(desktopLayout.geo.height).toBeGreaterThan(desktopLayout.first.height * 1.9);
  expect(Math.abs(desktopLayout.structured.height - desktopLayout.statistic.height)).toBeLessThan(1);
  expect(Math.abs(desktopLayout.structured.bottom - desktopLayout.statistic.bottom)).toBeLessThan(1);
  expect(Math.abs(desktopLayout.geo.bottom - desktopLayout.statistic.bottom)).toBeLessThan(1);

  await page.setViewportSize({ width: 375, height: 812 });
  const mobileLayout = await section.evaluate((element) => {
    const tiles = [...element.querySelectorAll<HTMLElement>(".visibility-tile")].map((tile) => tile.getBoundingClientRect());
    return tiles.map(({ top, right, bottom, left, width }) => ({ top, right, bottom, left, width }));
  });
  expect(mobileLayout.every((tile) => tile.width <= 335)).toBe(true);
  expect(mobileLayout.every((tile, index) => index === 0 || tile.top > mobileLayout[index - 1].bottom)).toBe(true);
});

test("process contact card is responsive and directly actionable", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  const section = page.locator(".process");
  const card = section.locator(".process-contact-card");
  await expect(card).toHaveCount(1);
  await expect(card.locator("h3")).toHaveText("Pascal Misoph");
  await expect(card.locator('a[href="tel:+4917634374543"]')).toBeVisible();
  await expect(card.locator('a[href="tel:+4917634374543"]')).toContainText("0176 34374543");
  await expect(card.locator('a[href="https://wa.me/4917634374543"]')).toHaveAttribute("rel", "noreferrer");
  await expect(card.locator('a[href="mailto:pascal.misoph@gmail.com"]')).toBeVisible();
  await expect(card.locator("img")).toHaveAttribute("src", "/images/pascal-misoph-contact.webp");
  await expect(section.locator(".process-timeline")).toHaveCount(1);
  await expect(section.locator(".process-step")).toHaveCount(5);
  expect(await section.locator(".process-step h3").allTextContents()).toEqual([
    "Wunschtermin wählen",
    "Bestand prüfen",
    "Struktur & Seiten planen",
    "Design & User Experience festlegen",
    "Website bauen & veröffentlichen",
  ]);
  await expect(section.locator(".process-step").first()).toHaveClass(/is-current/);

  const desktopOrder = await section.evaluate((element) => {
    const heading = element.querySelector(".process-heading")!.getBoundingClientRect();
    const card = element.querySelector(".process-contact-card")!.getBoundingClientRect();
    const timeline = element.querySelector(".process-timeline")!.getBoundingClientRect();
    return { headingTop: heading.top, headingBottom: heading.bottom, cardTop: card.top, cardLeft: card.left, timelineTop: timeline.top, timelineRight: timeline.right };
  });
  expect(Math.abs(desktopOrder.headingTop - desktopOrder.cardTop)).toBeLessThan(12);
  expect(desktopOrder.timelineTop).toBeGreaterThan(desktopOrder.headingBottom);
  expect(desktopOrder.cardLeft).toBeGreaterThan(desktopOrder.timelineRight);

  await page.setViewportSize({ width: 375, height: 812 });
  const mobileOrder = await section.evaluate((element) => {
    const heading = element.querySelector(".process-heading")!.getBoundingClientRect();
    const card = element.querySelector(".process-contact-card")!.getBoundingClientRect();
    const timeline = element.querySelector(".process-timeline")!.getBoundingClientRect();
    return { headingBottom: heading.bottom, timelineTop: timeline.top, timelineBottom: timeline.bottom, cardTop: card.top };
  });
  expect(mobileOrder.timelineTop).toBeGreaterThan(mobileOrder.headingBottom);
  expect(mobileOrder.cardTop).toBeGreaterThan(mobileOrder.timelineBottom);
});

test("editorial support bridges process and contact with responsive portraits", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });

  const support = page.locator(".editorial-support");
  await expect(support).toHaveCount(1);
  await expect(support.locator(".editorial-support-inner")).toHaveCSS("border-bottom-width", "0px");
  await expect(page.locator(".contact-section")).toHaveCSS("border-top-width", "1px");
  await expect(support.locator(".eyebrow")).toHaveText("Editorial Support");
  await expect(support.locator(".editorial-support-person")).toHaveCount(3);
  expect(await support.locator("h3").allTextContents()).toEqual(["Pauline", "Zula", "Nali"]);
  expect(await support.locator(".editorial-support-copy p").allTextContents()).toEqual([
    "Redaktion & Organisation",
    "Studiobegleitung",
    "Ruhepol & Qualitätskontrolle",
  ]);
  expect(await support.locator("img").evaluateAll((images) =>
    images.map((image) => new URL((image as HTMLImageElement).src).pathname)
  )).toEqual([
    "/images/support/pauline-vineyard.webp",
    "/images/support/zula-basket.webp",
    "/images/support/nali-resting.webp",
  ]);
  const firstPortrait = support.locator(".editorial-support-person").first();
  await expect(firstPortrait.locator("img")).toHaveCSS("filter", "none");
  await firstPortrait.hover();
  await expect(firstPortrait.locator("img")).toHaveCSS("filter", "none");
  const desktopAlignment = await support.locator(".editorial-support-person").evaluateAll((people) =>
    people.map((person) => {
      const personBox = person.getBoundingClientRect();
      const portraitBox = person.querySelector(".editorial-support-portrait")!.getBoundingClientRect();
      return Math.abs(
        (portraitBox.top + portraitBox.height / 2) - (personBox.top + personBox.height / 2)
      );
    })
  );
  expect(desktopAlignment.every((difference) => difference <= 8)).toBe(true);

  const order = await page.locator("main > section").evaluateAll((sections) =>
    sections.map((section) => section.className)
  );
  const processIndex = order.findIndex((className) => className.includes("process"));
  const supportIndex = order.findIndex((className) => className.includes("editorial-support"));
  const contactIndex = order.findIndex((className) => className.includes("contact-section"));
  expect(supportIndex).toBe(processIndex + 1);
  expect(contactIndex).toBe(supportIndex + 1);

  await page.setViewportSize({ width: 375, height: 812 });
  const mobileGeometry = await support.locator(".editorial-support-person").evaluateAll((people) =>
    people.map((person) => {
      const portrait = person.querySelector(".editorial-support-portrait")!.getBoundingClientRect();
      const copy = person.querySelector(".editorial-support-copy")!.getBoundingClientRect();
      return { portraitRight: portrait.right, copyLeft: copy.left };
    })
  );
  expect(mobileGeometry.every(({ portraitRight, copyLeft }) => copyLeft > portraitRight)).toBe(true);
});

test("English route and form semantics", async ({ page }) => {
  await page.goto(`${TEST_ORIGIN}/en/`, { waitUntil: "networkidle" });
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  const calendarTab = page.getByRole("tab", { name: "Book a visibility consultation" });
  const formTab = page.getByRole("tab", { name: "Enquire about SEO & GEO" });
  await expect(calendarTab).toHaveAttribute("aria-selected", "false");
  await expect(page.locator('[data-contact-panel="calendar"]')).toBeHidden();
  await expect(page.locator('form[data-contact-panel="form"]')).toBeHidden();
  await calendarTab.click();
  await expect(calendarTab).toHaveAttribute("aria-selected", "true");
  await expect(page.locator('[data-contact-panel="calendar"]')).toBeVisible();
  await expect(page.locator('script[src="https://assets.calendly.com/assets/external/widget.js"]')).toHaveCount(0);
  await formTab.click();
  await expect(formTab).toHaveAttribute("aria-selected", "true");
  await expect(page.locator('[data-contact-panel="calendar"]')).toBeHidden();
  await expect(page.locator('form[data-contact-panel="form"]')).toBeVisible();
  await expect(page.locator('input[name="intent"]')).toHaveCount(3);
  await expect(page.locator('input[name="intent"]').first()).toHaveAttribute("required", "");
  await expect(page.locator('form[data-contact-flow] input[name="email"]')).toHaveAttribute("type", "email");
  await expect(page.locator('textarea[name="details"]')).toHaveAttribute("required", "");
  await page.locator(".contact-choice").first().click();
  await expect(page.locator('[data-flow-step="1"]')).toBeVisible();
  await page.locator('textarea[name="details"]').fill("A new studio website");
  await page.locator("[data-flow-next]").click();
  await expect(page.locator('[data-flow-step="2"]')).toBeVisible();
  await expect(page.locator('form[data-contact-flow] input[name="email"]')).toBeVisible();
  await expect(page.locator('.calendly-inline-widget[data-url="https://calendly.com/pascal-misoph/erstgespraech"]')).toHaveCount(1);
  await calendarTab.click();
  await expect(page.locator('[data-calendly-consent]')).toBeVisible();
  await expect(page.locator('script[src="https://assets.calendly.com/assets/external/widget.js"]')).toHaveCount(0);
  await page.locator('[data-calendly-consent] [data-open-consent-settings]').click();
  await page.locator('[data-consent-external]').check();
  await page.locator('[data-consent-save]').click();
  await expect(page.locator('script[src="https://assets.calendly.com/assets/external/widget.js"]')).toHaveCount(1);
  await expect(page.locator('a[hreflang="en"]')).toHaveAttribute("aria-current", "page");
});

test("AI check gates blurred findings behind first name and email", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.route("**/api/scan", async (route) => {
    const checks = (prefix: string, count: number, maxScore: number) =>
      Array.from({ length: count }, (_, index) => ({
        slug: `${prefix}-${index + 1}`,
        score: index % 3 === 0 ? 0 : maxScore,
        maxScore,
        status: index % 3 === 0 ? "fail" : "pass",
        passed: index % 3 !== 0,
        title: `${prefix} Prüfung ${index + 1}`,
        detail: `Messbarer Befund ${index + 1}.`,
      }));
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        scanId: "test-scan-id",
        finalUrl: "https://example.com/",
        score: 42,
        grade: "D",
        criticalIssues: 2,
        categories: {
          ai: { key: "ai", title: "AI-Readiness & Crawling", score: 18, maxScore: 35, status: "warning", checks: checks("AI", 7, 5) },
          data: { key: "data", title: "Daten-Architektur & Vertrauenssignale", score: 10, maxScore: 35, status: "fail", checks: checks("Daten", 7, 5) },
          tech: { key: "tech", title: "Technische Basis & Security", score: 14, maxScore: 30, status: "warning", checks: checks("Technik", 7, 4) },
        },
      }),
    });
  });
  let submittedLead: Record<string, unknown> | undefined;
  await page.route("**/api/contact", async (route) => {
    submittedLead = route.request().postDataJSON();
    await route.fulfill({ contentType: "application/json", body: JSON.stringify({ ok: true }) });
  });

  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  const compactStart = await page.locator("#ki-check .ai-check-surface").evaluate((surface) => {
    const phases = surface.querySelector(".ai-check-phases")!;
    const row = surface.querySelector(".ai-check-url-row")!.getBoundingClientRect();
    const note = surface.querySelector(".ai-check-start small")!.getBoundingClientRect();
    return {
      height: surface.getBoundingClientRect().height,
      phasesInsideSurface: phases.parentElement === surface,
      noteGap: note.top - row.bottom,
    };
  });
  expect(compactStart.phasesInsideSurface).toBe(true);
  expect(compactStart.height).toBeLessThan(300);
  expect(compactStart.noteGap).toBeLessThanOrEqual(10);
  await page.locator("#ki-check input[name='url']").fill("example.com");
  await page.locator("#ki-check [data-scan-form]").getByRole("button").click();

  const result = page.locator("#ki-check [data-ai-screen='3']");
  await expect(result).toBeVisible();
  await expect(result.locator("[data-ai-score]")).toHaveText("42");
  await expect(result.locator("[data-ai-grade]")).toHaveText("D");
  await expect(result.locator(".ai-audit-category li")).toHaveCount(21);
  await expect(result.locator("[data-result-checks]")).toHaveClass(/is-locked/);
  await expect(result.locator(".ai-result-checks-grid")).toHaveCSS("filter", "blur(7px)");
  await expect(result.locator("[data-lead-gate] h3")).toHaveText("Technischer Scan abgeschlossen");
  await expect(result.locator(".ai-lead-intro")).toHaveText("Deine Ergebnisse und Optimierungspotenziale sind jetzt verfügbar.");
  await expect(result.locator("[data-ai-lead-form] button")).toHaveText("Ergebnisse im Detail ansehen");
  await expect(result.locator("input[name='name']")).toBeVisible();
  await expect(result.locator("input[name='email']")).toBeVisible();
  await expect(result.locator("input[name='tel']")).toHaveCount(0);
  await expect(result.locator("[data-live-cta]")).toBeHidden();

  await result.locator("input[name='name']").fill("Pascal");
  await result.locator("input[name='email']").fill("pascal@example.invalid");
  await result.locator("[data-ai-lead-form]").getByRole("button").click();

  await expect(result.locator("[data-result-checks]")).not.toHaveClass(/is-locked/);
  await expect(result.locator("[data-result-grid]")).not.toHaveAttribute("aria-hidden");
  const failedRows = result.locator('.ai-audit-category li[data-status="fail"]');
  await expect(failedRows).toHaveCount(9);
  const failedIcon = failedRows.first().locator(".ai-audit-marker svg");
  await expect(failedIcon).toHaveAttribute("viewBox", "0 0 24 24");
  await expect(failedIcon.locator("line")).toHaveCount(2);
  await expect(failedIcon.locator("line").first()).toHaveAttribute("x1", "6");
  await expect(failedIcon.locator("line").first()).toHaveAttribute("y1", "6");
  await expect(failedIcon.locator("line").first()).toHaveAttribute("x2", "18");
  await expect(failedIcon.locator("line").first()).toHaveAttribute("y2", "18");
  await expect(failedRows.first()).toHaveCSS("display", "flex");
  await expect(failedRows.first()).toHaveCSS("align-items", "flex-start");
  await expect(failedRows.first().locator(".ai-audit-marker")).toHaveCSS("color", "rgb(255, 255, 255)");
  await expect(failedRows.first().locator(".ai-audit-marker")).toHaveCSS("background-color", "rgb(220, 38, 38)");
  await expect(failedRows.first().locator(".ai-audit-marker")).toHaveCSS("flex-shrink", "0");
  await expect(failedRows.first().locator(".ai-audit-marker svg")).toHaveCSS("stroke-width", "2.25px");
  await expect(failedRows.first().locator("strong")).toHaveCSS("color", "rgb(185, 28, 28)");
  await expect(result.locator("[data-live-cta]")).toBeVisible();
  await expect(result.locator(".ai-recommendation h4")).toHaveText("Deine größten Potenziale");
  await expect(result.locator(".ai-recommendation-copy")).toContainText("welche technischen und inhaltlichen Voraussetzungen");
  await expect(result.locator("[data-recommendation-cta]")).toHaveCount(0);
  await expect(result.locator("[data-live-cta]")).toHaveText("Kostenlose Auswertung vereinbaren");
  await expect(result.locator("[data-live-cta]")).toHaveAttribute("href", "#kontakt");
  expect(submittedLead).toMatchObject({ name: "Pascal", email: "pascal@example.invalid", source: "ai-check" });

  await page.setViewportSize({ width: 320, height: 900 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(320);
  await expect(result.locator(".ai-audit-category")).toHaveCount(3);
});
