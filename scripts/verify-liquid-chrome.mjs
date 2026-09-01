import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const baseUrl = process.env.PREVIEW_URL ?? "http://127.0.0.1:4321";
const route = "/";
const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1728];
const screenshotDir = ".codex-artifacts/liquid-chrome";
const failures = [];

await mkdir(screenshotDir, { recursive: true });
const browser = await chromium.launch();

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: width <= 430 ? 812 : 1000 } });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  const canvas = page.locator("main section canvas").first();
  await canvas.waitFor({ state: "visible" });
  await page.waitForTimeout(500);

  const state = await page.evaluate(() => {
    const canvasElement = document.querySelector("main section canvas");
    const rect = canvasElement?.getBoundingClientRect();
    return {
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      canvasWidth: rect?.width ?? 0,
      canvasHeight: rect?.height ?? 0,
      backingWidth: canvasElement instanceof HTMLCanvasElement ? canvasElement.width : 0,
      backingHeight: canvasElement instanceof HTMLCanvasElement ? canvasElement.height : 0,
    };
  });

  if (response?.status() !== 200) failures.push(`${width}px: HTTP ${response?.status()}`);
  if (state.overflow) failures.push(`${width}px: horizontal overflow`);
  if (!state.canvasWidth || !state.canvasHeight || !state.backingWidth || !state.backingHeight) failures.push(`${width}px: canvas has no rendered size`);
  if (state.backingWidth / state.canvasWidth < 0.95 || state.backingHeight / state.canvasHeight < 0.95) {
    failures.push(`${width}px: canvas backing resolution is below its rendered size`);
  }
  if (consoleErrors.length) failures.push(`${width}px: ${consoleErrors.join(" | ")}`);

  if (width === 375 || width === 1440) {
    const frameOne = await canvas.evaluate((element) => element.__liquidFrame ?? 0);
    await page.waitForTimeout(700);
    const frameTwo = await canvas.evaluate((element) => element.__liquidFrame ?? 0);
    if (frameOne === frameTwo) failures.push(`${width}px: animation frame did not change`);
    await page.screenshot({ path: `${screenshotDir}/homepage-${width}.png`, fullPage: true });
  }

  await page.close();
}

const reducedPage = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await reducedPage.emulateMedia({ reducedMotion: "reduce" });
await reducedPage.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
const reducedCanvas = reducedPage.locator("main section canvas").first();
await reducedCanvas.waitFor({ state: "visible" });
let previousSize = "";
let stableMeasurements = 0;
for (let attempt = 0; attempt < 12 && stableMeasurements < 3; attempt += 1) {
  const currentSize = await reducedCanvas.evaluate((element) => `${element.width}x${element.height}`);
  stableMeasurements = currentSize === previousSize ? stableMeasurements + 1 : 0;
  previousSize = currentSize;
  await reducedPage.waitForTimeout(150);
}
const reducedFrameOne = await reducedCanvas.evaluate((element) => element.__liquidFrame ?? 0);
await reducedPage.waitForTimeout(700);
const reducedFrameTwo = await reducedCanvas.evaluate((element) => element.__liquidFrame ?? 0);
const reducedMotionActive = await reducedPage.evaluate(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
if (!reducedMotionActive) failures.push("reduced motion: browser preference was not active");
if (reducedFrameOne !== reducedFrameTwo) failures.push("reduced motion: canvas continued animating");
await reducedPage.close();

await browser.close();

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`liquid chrome verification passed at ${widths.length} widths and reduced motion`);
