import { chromium } from "@playwright/test";
import fs from "node:fs/promises";

const baseUrl = process.env.PREVIEW_URL ?? "http://127.0.0.1:4321";
const route = "/technische-geo-optimierung/";
const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1728];
const artifactDir = ".codex-artifacts/technical-circuit";

await fs.mkdir(artifactDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const failures = [];

const check = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  check(response?.status() === 200, `${width}px: expected HTTP 200, got ${response?.status()}`);

  const circuit = page.locator("[data-technical-circuit]");
  await circuit.scrollIntoViewIfNeeded();
  await circuit.waitFor({ state: "visible" });
  await page.waitForTimeout(350);

  const labels = ["Quellstruktur", width >= 768 && width < 1024 ? "Rendering" : "Gerenderte Bedeutung", "Fakten & Kontext", "AI-readable"];
  for (const label of labels) {
    const visibleMatches = circuit.getByText(label, { exact: true }).filter({ visible: true });
    check(await visibleMatches.count() > 0, `${width}px: missing visible node ${label}`);
  }

  const svg = circuit.locator(":scope > div").first().locator("svg");
  check((await svg.count()) === 1, `${width}px: expected one circuit SVG`);
  check((await svg.locator("path").count()) >= 6, `${width}px: expected circuit traces and pulses`);
  check(!(await circuit.innerText()).includes("TECHNISCHE GEO-OPTIMIERUNG"), `${width}px: stale internal header remains`);
  check(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${width}px: horizontal overflow detected`);
  check(consoleErrors.length === 0, `${width}px: browser console errors: ${consoleErrors.join(" | ")}`);

  await page.screenshot({ path: `${artifactDir}/technical-circuit-${width}.png` });

  await page.close();
}

const rotatingPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await rotatingPage.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
const rotatingCircuit = rotatingPage.locator("[data-technical-circuit]");
await rotatingCircuit.scrollIntoViewIfNeeded();
await rotatingCircuit.waitFor({ state: "visible" });
await rotatingPage.waitForTimeout(450);
const firstSystem = await rotatingCircuit.locator("img").filter({ visible: true }).getAttribute("src");
await rotatingPage.waitForTimeout(2300);
const secondSystem = await rotatingCircuit.locator("img").filter({ visible: true }).getAttribute("src");
check(firstSystem !== secondSystem, "1440px: AI output logo did not rotate after 2.3s");
await rotatingPage.close();

const reducedPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await reducedPage.emulateMedia({ reducedMotion: "reduce" });
await reducedPage.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
const reducedCircuit = reducedPage.locator("[data-technical-circuit]");
await reducedCircuit.scrollIntoViewIfNeeded();
await reducedCircuit.waitFor({ state: "visible" });
await reducedPage.waitForTimeout(350);
const reducedFirstSystem = await reducedCircuit.locator("img").filter({ visible: true }).getAttribute("src");
await reducedPage.waitForTimeout(2000);
const reducedSecondSystem = await reducedCircuit.locator("img").filter({ visible: true }).getAttribute("src");
check(reducedFirstSystem === reducedSecondSystem, "reduced motion: AI output logo should remain stable");
await reducedPage.close();

await browser.close();

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Technical circuit verification passed at ${widths.length} viewport widths.`);
}
