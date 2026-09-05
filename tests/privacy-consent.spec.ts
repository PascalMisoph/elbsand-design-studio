import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";

test.beforeEach(async ({ context }) => {
  await context.clearCookies();
  await context.addInitScript(() => {
    if (sessionStorage.getItem("paternoga-consent-test-ready")) return;
    localStorage.removeItem("paternoga-consent-v1");
    sessionStorage.setItem("paternoga-consent-test-ready", "true");
  });
});

test("optional providers make no request before consent and Calendly stays blocked after rejection", async ({ page }) => {
  const thirdPartyRequests: string[] = [];
  page.on("request", (request) => {
    if (/googletagmanager\.com|google-analytics\.com|assets\.calendly\.com|calendly\.com\/assets/.test(request.url())) thirdPartyRequests.push(request.url());
  });

  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  expect(thirdPartyRequests).toEqual([]);
  await expect(page.locator("[data-consent-banner]")).toBeVisible();
  await page.locator("[data-consent-reject]").first().click();

  await page.getByRole("tab", { name: "Erstgespräch zur Sichtbarkeit buchen" }).click();
  await expect(page.locator("[data-calendly-consent]")).toBeVisible();
  await expect(page.locator(".calendly-inline-widget")).toBeHidden();
  expect(thirdPartyRequests).toEqual([]);

  const choice = await page.evaluate(() => JSON.parse(localStorage.getItem("paternoga-consent-v1") ?? "null"));
  expect(choice).toMatchObject({ analytics: false, external: false, version: 1 });

  await page.locator("[data-calendly-consent] [data-open-consent-settings]").click();
  await page.locator("[data-consent-external]").check();
  await page.locator("[data-consent-save]").click();
  await expect.poll(() => thirdPartyRequests.filter((url) => url.includes("assets.calendly.com")).length).toBeGreaterThan(0);
  await expect(page.locator(".calendly-inline-widget")).toBeVisible();
});

test("analytics is loaded only after opt-in and can be withdrawn", async ({ page }) => {
  const tagRequests: string[] = [];
  const analyticsHits: string[] = [];
  await page.route(`${TEST_ORIGIN}/`, async (route) => {
    const response = await route.fetch();
    const body = (await response.text()).replace(/data-analytics-id="[^"]*"/, 'data-analytics-id="G-TEST123456"');
    await route.fulfill({ response, body });
  });
  await page.route("https://www.googletagmanager.com/**", async (route) => {
    tagRequests.push(route.request().url());
    await route.fulfill({ status: 200, contentType: "application/javascript", body: "window.__paternogaGaLoaded = true;" });
  });
  await page.route(/https:\/\/(?:www\.)?google-analytics\.com\/.*/, async (route) => {
    analyticsHits.push(route.request().url());
    await route.fulfill({ status: 204, body: "" });
  });

  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  await expect.poll(() => page.evaluate(() => Array.isArray((window as Window & { dataLayer?: unknown[] }).dataLayer))).toBe(true);
  expect(tagRequests).toEqual([]);
  expect(analyticsHits).toEqual([]);

  const initialConsent = await page.evaluate(() => (window as Window & { dataLayer?: unknown[] }).dataLayer);
  const initialConsentJson = JSON.stringify(initialConsent);
  expect(initialConsentJson).toContain('"analytics_storage":"denied"');
  expect(initialConsentJson).toContain('"ad_storage":"denied"');
  expect(initialConsentJson).toContain('"ad_user_data":"denied"');
  expect(initialConsentJson).toContain('"ad_personalization":"denied"');

  await page.locator("[data-consent-details]").click();
  await page.locator("[data-consent-analytics]").check();
  await page.locator("[data-consent-save]").click();
  await expect.poll(() => tagRequests.length).toBe(1);
  expect(tagRequests[0]).toContain("id=G-TEST123456");
  await expect(page.locator("script[data-paternoga-ga4]")).toHaveCount(1);

  const consentCommands = await page.evaluate(() => (window as Window & { dataLayer?: unknown[] }).dataLayer);
  expect(JSON.stringify(consentCommands)).toContain('"analytics_storage":"denied"');
  expect(JSON.stringify(consentCommands)).toContain('"analytics_storage":"granted"');
  expect(JSON.stringify(consentCommands)).toContain('"ad_storage":"denied"');
  expect(JSON.stringify(consentCommands)).toContain('"ad_user_data":"denied"');
  expect(JSON.stringify(consentCommands)).toContain('"ad_personalization":"denied"');

  await page.reload({ waitUntil: "networkidle" });
  expect(tagRequests.length).toBe(2);
  await expect(page.locator("script[data-paternoga-ga4]")).toHaveCount(1);
  const persisted = await page.evaluate(() => (window as Window & { paternogaConsent?: { analytics: boolean; external: boolean } }).paternogaConsent);
  expect(persisted).toMatchObject({ analytics: true, external: false });

  await page.locator("[data-open-consent-settings]").last().click();
  await page.locator("[data-consent-analytics]").uncheck();
  await page.locator("[data-consent-save]").click();
  const withdrawn = await page.evaluate(() => (window as Window & { paternogaConsent?: { analytics: boolean } }).paternogaConsent);
  expect(withdrawn?.analytics).toBe(false);
  const disabled = await page.evaluate(() => (window as unknown as Record<string, unknown>)["ga-disable-G-TEST123456"]);
  expect(disabled).toBe(true);
  const hitsBeforeSyntheticEvent = analyticsHits.length;
  await page.evaluate(() => (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.("event", "post_withdrawal_test"));
  await page.waitForTimeout(250);
  expect(analyticsHits.length).toBe(hitsBeforeSyntheticEvent);

  await page.reload({ waitUntil: "networkidle" });
  expect(tagRequests.length).toBe(2);
  const persistedWithdrawal = await page.evaluate(() => (window as Window & { paternogaConsent?: { analytics: boolean } }).paternogaConsent);
  expect(persistedWithdrawal?.analytics).toBe(false);
});

test("legal routes and privacy information are reachable in both languages", async ({ page }) => {
  for (const [route, lang] of [["/impressum/", "de"], ["/datenschutz/", "de"], ["/en/legal-notice/", "en"], ["/en/privacy/", "en"]] as const) {
    const response = await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(`footer a[href='${lang === "de" ? "/datenschutz/" : "/en/privacy/"}']`)).toHaveCount(1);
  }

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.route("**/api/scan", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        scanId: "privacy-test-scan",
        requestedUrl: "example.com",
        finalUrl: "https://example.com/",
        scannedAt: "2026-09-05T12:00:00.000Z",
        locale: "de",
        resultToken: "privacy-test-token",
        resultUrl: "https://www.paternoga-seo-geo.de/ki-readiness-ergebnis/?result=privacy-test-token",
        score: 50,
        grade: "C",
        criticalIssues: 0,
        categories: {
          ai: { key: "ai", title: "AI-Readiness & Crawling", score: 18, maxScore: 35, status: "warning", checks: [] },
          data: { key: "data", title: "Daten-Architektur & Vertrauenssignale", score: 18, maxScore: 35, status: "warning", checks: [] },
          tech: { key: "tech", title: "Technische Basis & Security", score: 14, maxScore: 30, status: "warning", checks: [] },
        },
        interpretation: {
          scoreBand: "medium",
          readinessLabel: "Mittlere technische Readiness",
          overallHeadline: "Mittlere technische Readiness",
          overallSummary: "Die wichtigsten technischen Signale sind teilweise vorhanden.",
          strongestCategory: { key: "ai", title: "AI-Readiness & Crawling", score: 18, maxScore: 35, ratio: 0.514 },
          weakestCategory: { key: "tech", title: "Technische Basis & Security", score: 14, maxScore: 30, ratio: 0.467 },
          strengthsHeading: "Was bereits vorhanden ist",
          opportunitiesHeading: "Wo noch Potenzial besteht",
          strengths: [],
          opportunities: [],
        },
      }),
    });
  });
  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  await page.locator("#ki-check input[name='url']").fill("example.com");
  await page.locator("#ki-check [data-scan-form]").getByRole("button").click();
  await expect(page.locator("[data-ai-lead-form] a[href='/datenschutz/']")).toHaveText("Datenschutzhinweise");
  await expect(page.locator("[data-contact-flow] a[href='/datenschutz/']")).toHaveText("Datenschutzhinweise");
  await expect(page.locator("[data-ai-lead-form] input[type='checkbox']")).toHaveCount(0);
});
