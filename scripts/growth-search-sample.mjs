import { chromium } from '@playwright/test';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ locale: 'de-DE' });
for (const url of [
  'https://www.google.com/search?q=SEO+Agentur+Dresden&hl=de&gl=de&pws=0',
  'https://www.google.com/search?q=GEO+Agentur+Deutschland&hl=de&gl=de&pws=0',
  'https://www.perplexity.ai/',
]) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    const text = (await page.locator('body').innerText()).replace(/IP-Adresse:[^\n]*/g, 'IP-Adresse: [redacted]');
    const observed = new URL(page.url());
    console.log(JSON.stringify({ observed_at: new Date().toISOString(), requested_url: url, final_location: observed.origin + observed.pathname, text: text.slice(0, 18000) }));
  } catch (error) { console.log(JSON.stringify({ url, error: String(error) })); }
}
await browser.close();
