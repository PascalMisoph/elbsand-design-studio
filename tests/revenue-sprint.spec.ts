import { expect, test } from "@playwright/test";
const origin = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";

for (const reducedMotion of ["reduce", "no-preference"] as const) {
  test(`homepage footer to audit keeps rendering and direct CTA usable (${reducedMotion})`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion });
    await page.goto(origin);
    await page.locator("[data-consent-reject]").first().click();
    await page.locator('.site-footer a[href="/geo-audit/"]').click();
    await page.waitForURL(`${origin}/geo-audit/`);
    const frameRuns = await page.evaluate(() => Promise.race([
      new Promise<boolean>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve(true)))),
      new Promise<boolean>(resolve => setTimeout(() => resolve(false), 2000)),
    ]));
    expect(frameRuns).toBe(true);
    await page.locator('[data-revenue-cta="audit_hero"]').click();
    await expect(page.locator("[data-contact-flow]")).toBeVisible();
  });
}

for (const entry of [
  { path: "/geo-audit/", offer: "geo_audit", cta: "audit_hero", intent: "advice" },
  { path: "/en/geo-audit/", offer: "geo_audit", cta: "audit_hero", intent: "advice" },
  { path: "/content-optimierung-ai-suche/", offer: "page_sprint", cta: "sprint_hero", intent: "improve" },
  { path: "/en/content-optimization-ai-search/", offer: "page_sprint", cta: "sprint_hero", intent: "improve" },
]) {
  test(`direct revenue path and consented attribution ${entry.path}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 1440, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.route("https://www.googletagmanager.com/**", (route) => route.fulfill({ body: "", contentType: "application/javascript" }));
    await page.goto(`${origin}/?utm_source=test&utm_medium=referral&utm_campaign=revenue_sprint`);
    await page.locator("[data-consent-details]").click();
    await page.locator("[data-consent-analytics]").check();
    await page.locator("[data-consent-save]").click();
    if (entry.path === "/geo-audit/") {
      await page.locator('.header-menu').first().locator('summary').click();
      await page.locator('.header-menu').first().locator('a[href="/geo-audit/"]').click();
      await page.waitForURL(`${origin}/geo-audit/`);
    } else await page.goto(`${origin}${entry.path}`);
    await page.locator(`[data-revenue-cta="${entry.cta}"]`).click();
    const form = page.locator("[data-contact-flow]");
    await expect(form).toBeVisible();
    await expect(page.locator(".contact-paths")).toBeHidden();
    await expect(page.locator(".site-header [data-revenue-cta=header_desktop]")).toHaveAttribute("href", "#kontakt");
    await expect(form.locator('[data-flow-step="0"]')).toBeHidden();
    await form.locator('[name="details"]').fill("https://example.invalid/ – QA request, no delivery");
    await form.locator("[data-flow-next]").click();
    await form.locator('[name="name"]').fill("QA Fixture");
    await form.locator('[name="email"]').fill("qa@example.invalid");
    let payload: Record<string, unknown> = {};
    await page.route("**/api/contact", async (route) => {
      payload = route.request().postDataJSON();
      await route.fulfill({ status: 201, json: { ok: true, reference: "QAONLY", lead_id: "00000000-0000-4000-8000-000000000001" } });
    });
    await form.locator('button[type="submit"]').click();
    await expect(form.locator("[data-flow-success]")).toBeVisible();
    expect(payload).toMatchObject({ offer_type: entry.offer, source_page: entry.path, landing_page: "/", cta_id: entry.cta, utm_source: "test", utm_medium: "referral", utm_campaign: "revenue_sprint", intent: entry.intent, attribution_mode: "consented_session" });
    expect(payload.details).toContain("QA request");
    const commands = await page.evaluate(() => (window as Window & { dataLayer?: unknown[] }).dataLayer);
    const events = (commands ?? []).filter((item) => Array.isArray(item) && item[0] === "event");
    expect(JSON.stringify(events)).toContain("contact_form_submit_success");
    expect(JSON.stringify(events)).toContain(entry.offer === "geo_audit" ? "audit_inquiry_success" : "page_sprint_inquiry_success");
    expect(JSON.stringify(events)).not.toMatch(/qa@example|QA Fixture|QA request|00000000|revenue_sprint/);
    expect(errors).toEqual([]);
  });
}

test("rejected consent keeps direct offer context, stores no journey and sends no events", async ({ page }) => {
  await page.goto(`${origin}/geo-audit/?utm_campaign=test`);
  await page.locator("[data-consent-reject]").first().click();
  await page.locator('[data-revenue-cta="audit_hero"]').click();
  await page.locator('[name="details"]').fill("https://example.invalid/ – test");
  await page.locator("[data-flow-next]").click();
  await page.locator('[data-contact-flow] [name="name"]').fill("QA Fixture");
  await page.locator('[data-contact-flow] [name="email"]').fill("qa@example.invalid");
  let payload: Record<string, unknown> = {};
  await page.route("**/api/contact", async (route) => {
    payload = route.request().postDataJSON();
    await route.fulfill({ status: 201, json: { ok: true, reference: "QAONLY" } });
  });
  await page.locator('[data-contact-flow] button[type="submit"]').click();
  await expect(page.locator("[data-flow-success]")).toBeVisible();
  expect(payload).toMatchObject({ offer_type: "geo_audit", source_page: "/geo-audit/", cta_id: "audit_hero", attribution_mode: "current_request" });
  expect(await page.evaluate(() => sessionStorage.getItem("paternoga-revenue-session-v1"))).toBeNull();
  const events = await page.evaluate(() => ((window as Window & { dataLayer?: unknown[] }).dataLayer ?? []).filter((item) => Array.isArray(item) && item[0] === "event"));
  expect(events).toEqual([]);
});

test("offer pages preserve mobile layout and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const path of ["/geo-audit/", "/en/geo-audit/", "/content-optimierung-ai-suche/", "/en/content-optimization-ai-search/"]) {
    await page.goto(`${origin}${path}`);
    for (const width of [320, 375, 430, 768, 1024, 1280, 1440, 1728]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    }
  }
});

test("withdrawing analytics removes the journey and blocks later funnel events", async ({ page }) => {
  await page.route("https://www.googletagmanager.com/**", (route) => route.fulfill({ body: "", contentType: "application/javascript" }));
  await page.goto(`${origin}/geo-audit/?utm_campaign=test`);
  await page.locator("[data-consent-details]").click();
  await page.locator("[data-consent-analytics]").check();
  await page.locator("[data-consent-save]").click();
  expect(await page.evaluate(() => sessionStorage.getItem("paternoga-revenue-session-v1"))).not.toBeNull();
  await page.locator("[data-open-consent-settings]").last().click();
  await page.locator("[data-consent-analytics]").uncheck();
  await page.locator("[data-consent-save]").click();
  const count = await page.evaluate(() => ((window as Window & { dataLayer?: unknown[] }).dataLayer ?? []).length);
  await page.locator('[data-revenue-cta="audit_hero"]').click();
  expect(await page.evaluate(() => sessionStorage.getItem("paternoga-revenue-session-v1"))).toBeNull();
  expect(await page.evaluate(() => ((window as Window & { dataLayer?: unknown[] }).dataLayer ?? []).length)).toBe(count);
});

test("general contact retains completed steps and does not count a failed delivery", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${origin}/`);
  await page.locator("[data-consent-reject]").first().click();
  await page.locator('[data-contact-path="form"]').click();
  const form = page.locator("[data-contact-flow]");
  await form.locator('label.contact-choice').filter({ has: page.locator('[name="intent"][value="improve"]') }).click();
  await form.locator('[name="details"]').fill("Synthetic completed-step regression");
  await form.locator("[data-flow-next]").click();
  await form.locator('[name="name"]').fill("QA Fixture");
  await form.locator('[name="email"]').fill("qa@example.invalid");
  await page.route("**/api/contact", async (route) => {
    expect(route.request().postDataJSON()).toMatchObject({ intent: "improve", details: "Synthetic completed-step regression", offer_type: "general", source_page: "/" });
    await route.fulfill({ status: 503, json: { ok: false, error: "delivery_failed" } });
  });
  await form.locator('button[type="submit"]').click();
  await expect(form.locator("[data-flow-error]")).toBeVisible();
  await expect(form.locator("[data-flow-success]")).toBeHidden();
  await expect(form.locator('[name="email"]')).toHaveValue("qa@example.invalid");
});
