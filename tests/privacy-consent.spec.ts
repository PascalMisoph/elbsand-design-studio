import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";

test.beforeEach(async ({ context }) => {
  await context.clearCookies();
  await context.addInitScript(() => localStorage.removeItem("paternoga-consent-v1"));
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
  const googleRequests: string[] = [];
  await page.route("https://www.googletagmanager.com/**", async (route) => {
    googleRequests.push(route.request().url());
    await route.fulfill({ status: 200, contentType: "application/javascript", body: "" });
  });

  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "networkidle" });
  await page.locator("[data-consent-manager]").evaluate((element) => {
    (element as HTMLElement).dataset.analyticsId = "G-TEST123456";
  });
  expect(googleRequests).toEqual([]);

  await page.locator("[data-consent-details]").click();
  await page.locator("[data-consent-analytics]").check();
  await page.locator("[data-consent-save]").click();
  await expect.poll(() => googleRequests.length).toBe(1);
  expect(googleRequests[0]).toContain("id=G-TEST123456");

  const consentCommands = await page.evaluate(() => (window as Window & { dataLayer?: unknown[] }).dataLayer);
  expect(JSON.stringify(consentCommands)).toContain('"analytics_storage":"denied"');
  expect(JSON.stringify(consentCommands)).toContain('"analytics_storage":"granted"');
  expect(JSON.stringify(consentCommands)).toContain('"ad_storage":"denied"');
  expect(JSON.stringify(consentCommands)).toContain('"ad_user_data":"denied"');
  expect(JSON.stringify(consentCommands)).toContain('"ad_personalization":"denied"');

  await page.locator("[data-open-consent-settings]").last().click();
  await page.locator("[data-consent-analytics]").uncheck();
  await page.locator("[data-consent-save]").click();
  const withdrawn = await page.evaluate(() => (window as Window & { paternogaConsent?: { analytics: boolean } }).paternogaConsent);
  expect(withdrawn?.analytics).toBe(false);
});

test("legal routes and privacy information are reachable in both languages", async ({ page }) => {
  for (const [route, lang] of [["/impressum/", "de"], ["/datenschutz/", "de"], ["/en/legal-notice/", "en"], ["/en/privacy/", "en"]] as const) {
    const response = await page.goto(`${TEST_ORIGIN}${route}`, { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(`footer a[href='${lang === "de" ? "/datenschutz/" : "/en/privacy/"}']`)).toHaveCount(1);
  }

  await page.goto(`${TEST_ORIGIN}/`, { waitUntil: "domcontentloaded" });
  await expect(page.locator("[data-ai-lead-form] a[href='/datenschutz/']")).toHaveText("Datenschutzhinweise");
  await expect(page.locator("[data-contact-flow] a[href='/datenschutz/']")).toHaveText("Datenschutzhinweise");
  await expect(page.locator("[data-ai-lead-form] input[type='checkbox']")).toHaveCount(0);
});
