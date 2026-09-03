import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";
const calendlyUrl = "https://calendly.com/pascal-misoph/erstgespraech";

test("booking landing page reuses the direct Calendly flow and stays consent-gated", async ({ page, request }) => {
  const thirdPartyRequests: string[] = [];
  page.on("request", (requestEvent) => {
    if (/calendly\.com|googletagmanager\.com|google-analytics\.com/.test(requestEvent.url())) {
      thirdPartyRequests.push(requestEvent.url());
    }
  });
  await page.addInitScript(() => localStorage.removeItem("paternoga-consent-v1"));

  await page.setViewportSize({ width: 1440, height: 900 });
  const response = await page.goto(`${TEST_ORIGIN}/erstgespraech`, { waitUntil: "networkidle" });
  expect(response?.status()).toBe(200);

  const initial = await page.evaluate(() => {
    const calendarPanel = document.querySelector<HTMLElement>(".calendly-panel");
    const preCalendarControls = [...document.querySelectorAll<HTMLElement>("main a, main button")]
      .filter((element) => !calendarPanel?.contains(element));
    return {
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
      consentVisible: Boolean(document.querySelector<HTMLElement>("[data-calendly-consent]")?.offsetParent),
      h1: document.querySelector("main h1")?.textContent?.trim(),
      lead: document.querySelector(".booking-intro > p")?.textContent?.trim(),
      panelVisible: Boolean(calendarPanel && !calendarPanel.hidden),
      preCalendarControls: preCalendarControls.length,
      robots: document.querySelector('meta[name="robots"]')?.getAttribute("content"),
      scriptCount: document.querySelectorAll('script[data-calendly-loader]').length,
      tabs: document.querySelectorAll("[data-contact-path]").length,
      url: document.querySelector<HTMLElement>(".calendly-inline-widget")?.dataset.url,
      widgetHidden: document.querySelector<HTMLElement>(".calendly-inline-widget")?.hidden,
      width: document.documentElement.scrollWidth,
    };
  });

  expect(initial.h1).toBe("Kostenloses Erstgespräch zur Sichtbarkeit");
  expect(initial.lead).toBe("30 Minuten für eine erste Einschätzung zu SEO, GEO, Website und digitaler Sichtbarkeit.");
  expect(initial.canonical).toBe("https://www.paternoga-seo-geo.de/erstgespraech");
  expect(initial.robots).toBe("noindex,follow");
  expect(initial.url).toBe(calendlyUrl);
  expect(initial.panelVisible).toBe(true);
  expect(initial.consentVisible).toBe(true);
  expect(initial.widgetHidden).toBe(true);
  expect(initial.scriptCount).toBe(0);
  expect(initial.tabs).toBe(0);
  expect(initial.preCalendarControls).toBe(0);
  expect(initial.width).toBe(1440);
  expect(thirdPartyRequests).toEqual([]);

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: "networkidle" });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);

  await page.locator("[data-calendly-consent] [data-open-consent-settings]").click();
  await page.locator("[data-consent-external]").check();
  await page.locator("[data-consent-save]").click();
  await expect(page.locator('script[data-calendly-loader][src="https://assets.calendly.com/assets/external/widget.js"]')).toHaveCount(1);
  await expect(page.locator(".calendly-inline-widget")).toBeVisible();
  await expect(page.locator("[data-calendly-consent]")).toBeHidden();

  const sitemap = await request.get(`${TEST_ORIGIN}/sitemap.xml`);
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).not.toContain("/erstgespraech");
});
