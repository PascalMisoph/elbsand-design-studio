// Read-only public content capture for the dated growth decision, not a technical audit.
import { chromium } from '@playwright/test';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ locale: 'de-DE' });
const paths = process.argv.slice(2).length ? process.argv.slice(2) : ['/', '/geo-agentur-deutschland/', '/geo-audit/', '/geo-optimierung/', '/ai-sichtbarkeit/', '/geo-betreuung/', '/content-optimierung-ai-suche/', '/research/ki-crawler-readiness-dax-40-2026/'];
for (const path of paths) {
  const page = await context.newPage();
  try {
    const response = await page.goto(path.startsWith('https://') ? path : `https://www.paternoga-seo-geo.de${path}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    const record = await page.evaluate(() => ({
      url: location.href,
      title: document.title,
      headings: [...document.querySelectorAll('main h1, main h2')].map(e => e.textContent.trim()),
      links: [...document.querySelectorAll('main a')].map(e => ({ text: e.textContent.trim(), href: e.getAttribute('href') })).filter(e => e.text),
      text: (document.querySelector('main') ?? document.body).innerText,
    }));
    console.log(JSON.stringify({ observed_at: new Date().toISOString(), status: response?.status(), ...record }));
  } catch (error) { console.log(JSON.stringify({ path, error: String(error) })); }
  await page.close();
}
await browser.close();
