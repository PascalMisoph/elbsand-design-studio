import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const baseUrl = process.env.PREVIEW_URL ?? "http://localhost:4321";
const allRoutes = [
  "/geo-optimierung/",
  "/ki-quellenanalyse/",
  "/ki-wettbewerbsanalyse/",
  "/ki-markenwahrnehmung/",
  "/ki-faktencheck/",
  "/ai-crawlability/",
  "/technische-geo-optimierung/",
  "/geo-content/",
  "/content-optimierung-ai-suche/",
  "/geo-monitoring/",
  "/geo-betreuung/",
  "/en/geo-optimization/",
  "/en/ai-source-analysis/",
  "/en/ai-competitor-analysis/",
  "/en/ai-brand-perception/",
  "/en/ai-fact-checking/",
  "/en/ai-crawlability/",
  "/en/technical-geo-optimization/",
  "/en/geo-content/",
  "/en/content-optimization-ai-search/",
  "/en/geo-monitoring/",
  "/en/geo-support/",
];
const routeFilter = process.env.VERIFY_ROUTES?.split(",").filter(Boolean);
const routes = routeFilter?.length ? allRoutes.filter((route) => routeFilter.includes(route)) : allRoutes;
const protectedRoutes = ["/", "/geo-audit/", "/prompt-recherche/", "/ai-sichtbarkeit/"];
const requiredWidths = process.env.VERIFY_WIDTHS?.split(",").map(Number).filter(Boolean) ?? [320, 375, 430, 768, 1024, 1280, 1440, 1728];
const representativeRoutes = ["/geo-optimierung/", "/ki-faktencheck/", "/geo-content/", "/geo-monitoring/"];
const chartRoutes = ["/geo-monitoring/", "/en/geo-monitoring/"];
const screenshotDir = ".codex-artifacts/shadcn-migration";

await mkdir(screenshotDir, { recursive: true });
const browser = await chromium.launch();
const failures = [];

async function inspect(route, width, takeScreenshot = false) {
  const page = await browser.newPage({ viewport: { width, height: width <= 430 ? 812 : 1000 } });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  if (chartRoutes.includes(route)) {
    await page.locator('[data-slot="chart"]').scrollIntoViewIfNeeded();
    await page.locator('[data-slot="chart"] svg').waitFor({ state: "visible", timeout: 3000 });
  }
  const result = await page.evaluate(() => {
    const h1 = document.querySelector("main h1");
    const button = document.querySelector('[data-slot="button"]');
    const accordion = document.querySelector('details[name="page-faq"]');
    const chart = document.querySelector('[data-slot="chart"]');
    const h1Rect = h1?.getBoundingClientRect();
    const buttonRect = button?.getBoundingClientRect();
    return {
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      overflowElements: [...document.querySelectorAll("body *")]
        .filter((element) => {
          const styles = window.getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return styles.display !== "none" && styles.visibility !== "hidden" && rect.width > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1);
        })
        .slice(0, 6)
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return `${element.tagName.toLowerCase()}.${element.className || ""} [${Math.round(rect.left)}, ${Math.round(rect.right)}]`;
        }),
      contentContainers: [...document.querySelectorAll(".max-w-content")].slice(0, 3).map((element) => {
        const rect = element.getBoundingClientRect();
        const styles = window.getComputedStyle(element);
        return `[${Math.round(rect.left)}, ${Math.round(rect.right)}] width=${styles.width} max=${styles.maxWidth} padding=${styles.paddingLeft}/${styles.paddingRight} box=${styles.boxSizing}`;
      }),
      main: Boolean(document.querySelector("main#main-content")),
      h1: Boolean(h1 && h1Rect && h1Rect.width > 0 && h1Rect.left >= -1 && h1Rect.right <= window.innerWidth + 1),
      buttonHeight: buttonRect?.height ?? 0,
      accordion: Boolean(accordion),
      chart: Boolean(chart?.querySelector("svg")),
    };
  });
  if (takeScreenshot) {
    const slug = route.replace(/^\/+|\/+$/g, "").replaceAll("/", "-") || "home";
    await page.screenshot({ path: `${screenshotDir}/${slug}-${width}.png`, fullPage: true });
  }
  if (response?.status() !== 200) failures.push(`${route} @ ${width}: HTTP ${response?.status()}`);
  if (!result.main) failures.push(`${route} @ ${width}: missing main target`);
  if (!result.h1) failures.push(`${route} @ ${width}: H1 missing or outside viewport`);
  if (result.overflow) failures.push(`${route} @ ${width}: horizontal overflow (${result.overflowElements.join(" | ")}); containers: ${result.contentContainers.join(" | ")}`);
  if (result.buttonHeight && result.buttonHeight < 44) failures.push(`${route} @ ${width}: control below 44px`);
  if (consoleErrors.length) failures.push(`${route} @ ${width}: console ${consoleErrors.join(" | ")}`);
  if (chartRoutes.includes(route) && !result.chart) failures.push(`${route} @ ${width}: chart did not hydrate`);
  if (result.accordion) {
    const disclosure = page.locator('details[name="page-faq"]').first();
    const trigger = disclosure.locator("summary");
    await trigger.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await trigger.click();
    await page.waitForTimeout(100);
    if (!(await disclosure.evaluate((element) => element.open))) failures.push(`${route} @ ${width}: accordion did not open`);
  }
  await page.close();
}

for (const route of routes) {
  await inspect(route, 375, representativeRoutes.includes(route));
  await inspect(route, 1440, representativeRoutes.includes(route));
}
for (const route of representativeRoutes.filter((route) => routes.includes(route))) {
  for (const width of requiredWidths.filter((value) => value !== 375 && value !== 1440)) await inspect(route, width);
}
for (const route of protectedRoutes) await inspect(route, 375);

await browser.close();
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`visual migration verification passed: ${routes.length} migrated routes, ${protectedRoutes.length} protected routes`);
