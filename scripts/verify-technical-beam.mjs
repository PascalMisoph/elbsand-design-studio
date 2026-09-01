import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const baseUrl = process.env.PREVIEW_URL ?? "http://127.0.0.1:4321";
const route = "/technische-geo-optimierung/";
const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1728];
const screenshotDir = ".codex-artifacts/technical-beam";
const expectedInputs = ["Semantisches HTML", "Antwortpfad", "Performance", "Faktenstruktur"];
const expectedSystems = ["ChatGPT", "Perplexity", "Claude", "Google AI"];
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
  const beam = page.locator("[data-technical-beam]");
  await beam.scrollIntoViewIfNeeded();
  await beam.waitFor({ state: "visible" });
  await page.locator('[data-slot="animated-beam"]').first().waitFor({ state: "attached" });
  await page.waitForTimeout(1000);

  const state = await page.evaluate((inputs) => {
    const section = document.querySelector("#technical-foundations");
    const labels = [...document.querySelectorAll("[data-beam-input]")].map((element) => element.textContent?.trim());
    return {
      status: Boolean(section),
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      beams: document.querySelectorAll('[data-slot="animated-beam"]').length,
      beamDimensions: [...document.querySelectorAll('[data-slot="animated-beam"]')].map((element) => [Number(element.getAttribute("width")), Number(element.getAttribute("height"))]),
      output: document.querySelector("[data-beam-output]")?.textContent?.trim(),
      labelsMatch: inputs.every((input) => labels.includes(input)),
      hasInnerHeader: [...document.querySelectorAll("[data-technical-beam] *")].some((element) => element.textContent?.trim() === "Technische Grundlage"),
      technicalHeroCanvas: Boolean(document.querySelector("main > section:first-child canvas")),
    };
  }, expectedInputs);

  if (response?.status() !== 200) failures.push(`${width}px: HTTP ${response?.status()}`);
  if (!state.status) failures.push(`${width}px: missing technical foundation section`);
  if (state.overflow) failures.push(`${width}px: horizontal overflow`);
  if (state.beams !== 4) failures.push(`${width}px: expected 4 beams, found ${state.beams}`);
  if (state.beamDimensions.some(([beamWidth, beamHeight]) => beamWidth <= 0 || beamHeight <= 0)) failures.push(`${width}px: beam geometry was not measured (${JSON.stringify(state.beamDimensions)})`);
  if (!state.labelsMatch) failures.push(`${width}px: input labels do not match`);
  if (!expectedSystems.includes(state.output ?? "")) failures.push(`${width}px: unexpected AI-system output`);
  if (state.hasInnerHeader) failures.push(`${width}px: obsolete inner header remains`);
  if (state.technicalHeroCanvas) failures.push(`${width}px: liquid chrome still exists in technical hero`);
  if (consoleErrors.length) failures.push(`${width}px: ${consoleErrors.join(" | ")}`);

  if (width === 375 || width === 1440) {
    await page.screenshot({ path: `${screenshotDir}/technical-beam-${width}.png`, fullPage: true });
  }

  if (width === 1440) {
    const states = [state.output];
    await page.waitForTimeout(1900);
    states.push(await page.locator("[data-beam-output]").textContent());
    await page.waitForTimeout(1900);
    states.push(await page.locator("[data-beam-output]").textContent());
    if (new Set(states).size !== 3) failures.push(`1440px: expected three consecutive logo states, found ${states.join(", ")}`);
  }

  await page.close();
}

const reducedPage = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await reducedPage.emulateMedia({ reducedMotion: "reduce" });
await reducedPage.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
const reducedBeam = reducedPage.locator("[data-technical-beam]");
await reducedBeam.scrollIntoViewIfNeeded();
await reducedPage.locator('[data-slot="animated-beam"]').first().waitFor({ state: "attached" });
await reducedPage.waitForTimeout(300);
const movingPathDisplays = await reducedPage.locator('[data-slot="animated-beam"] path:nth-of-type(2)').evaluateAll((paths) => paths.map((path) => window.getComputedStyle(path).display));
const reducedMotionActive = await reducedPage.evaluate(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
if (!reducedMotionActive) failures.push("reduced motion: browser preference was not active");
if (movingPathDisplays.some((display) => display !== "none")) failures.push(`reduced motion: animated beam remained visible (${movingPathDisplays.join(", ")})`);
const reducedInitialSystem = await reducedPage.locator("[data-beam-output]").textContent();
await reducedPage.waitForTimeout(2800);
const reducedSettledSystem = await reducedPage.locator("[data-beam-output]").textContent();
if (reducedInitialSystem !== reducedSettledSystem) failures.push("reduced motion: AI-system logo continued switching");
await reducedPage.close();

await browser.close();

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`technical beam verification passed at ${widths.length} widths and reduced motion`);
