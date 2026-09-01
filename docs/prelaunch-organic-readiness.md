# PATERNOGA pre-launch organic readiness

Status date: 1 September 2026

This checklist covers controllable launch prerequisites. It does not imply or promise a particular ranking, citation or lead volume.

## Observed production baseline

At the status date, DNS still points to GoDaddy Website Builder (`DPS/2.0.0`). The apex homepage returns 200, `www` redirects to the apex host, and representative new routes such as `/geo-agentur-deutschland/`, `/geo-audit/`, `/wissen/ki-crawler-robots-txt/` and the DAX-40 research route return 404. The release is therefore not live yet; this state must be replaced and re-tested during the Vercel/domain step.

## Before the first production deployment

- Keep `https://www.paternoga-seo-geo.de` as the preferred canonical host.
- Deploy the Astro server build through the official Vercel adapter during the deployment step; the site contains server-rendered API routes and is not a purely static export.
- Configure `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` and `PUBLIC_GA_MEASUREMENT_ID` in Vercel and run `npm run deploy:check` with those values.
- Verify the sending domain with the email provider and test one German and one English inquiry end to end.
- Add factual, human-approved Impressum and Datenschutz pages and link them from the footer. Do not publish invented legal details.
- Run `npm run verify` on the exact release commit.

## Domain connection at GoDaddy and Vercel

- Add both the apex domain and `www` to the Vercel project.
- Use `www` as the primary production domain because the site’s canonical, sitemap and structured-data URLs already use it.
- Configure a permanent apex-to-`www` redirect in Vercel.
- In GoDaddy, use the exact DNS values shown by Vercel’s domain inspector; remove only records that Vercel identifies as conflicting.
- Preserve any unrelated MX/TXT records used for email or verification.
- Wait for TLS and DNS propagation, then verify HTTP, HTTPS, apex and `www` response chains before announcing the site.

## Immediately after launch

- Verify the domain property in Google Search Console via DNS and submit `/sitemap.xml`.
- Verify the site in Bing Webmaster Tools, submit the same sitemap and confirm IndexNow ownership.
- Run the live-domain crawl test for all 40 canonical routes, `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt` and the IndexNow key file.
- Test Googlebot, Bingbot, OAI-SearchBot and PerplexityBot user agents for status, redirects and actual HTML delivery. Configuration tests do not prove indexing or citation.
- Submit only the genuinely new launch URLs through IndexNow.
- Record the first Search Console and Bing coverage state; do not repeatedly request indexing as a substitute for content quality.

## Positioning guardrails

- Use “Paternoga SEO & GEO Studio” consistently as the organization entity; PATERNOGA remains the visual wordmark.
- Describe Dresden as the real location and Germany as the service market.
- Do not publish “beste GEO-Agentur” as a self-awarded fact.
- Do not create keyword-swapped city pages, artificial comparison rankings or duplicate service routes.
- Keep the DAX-40 study’s date, method, limitations and raw data attached to its findings.

## Launch blockers requiring human input

- Final legal text and publishable business/address details for Impressum and Datenschutz.
- A verified production sender address for Resend.
- Access to the Vercel project, GoDaddy DNS, Google Search Console and Bing Webmaster Tools.
- Final approval of the release commit and production contact-form test.
