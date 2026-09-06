import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
const origin = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4399";
await mkdir(".codex-tmp/revenue-review", { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ reducedMotion: "reduce" });
  await page.addInitScript(() => localStorage.setItem("paternoga-consent-v1", JSON.stringify({ version: 1, analytics: false, external: false, updatedAt: new Date().toISOString() })));
  for (const [name, route] of [["audit", "/geo-audit/"], ["sprint-en", "/en/content-optimization-ai-search/"]]) {
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 950 });
      await page.goto(`${origin}${route}`, { waitUntil: "networkidle" });
      await page.screenshot({ path: `.codex-tmp/revenue-review/${name}-${width}-hero.png` });
      await page.locator(".offer-scope").scrollIntoViewIfNeeded();
      await page.screenshot({ path: `.codex-tmp/revenue-review/${name}-${width}-scope.png` });
      await page.locator("[data-contact-flow]").scrollIntoViewIfNeeded();
      await page.screenshot({ path: `.codex-tmp/revenue-review/${name}-${width}-form.png` });
    }
  }
  console.log("12 revenue review screenshots captured; no submissions.");
} finally { await browser.close(); }
