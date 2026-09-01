# Paternoga SEO & GEO Studio

Bilingual Astro website for Paternoga SEO & GEO Studio. The project contains 40 validated German and English routes, a national GEO service architecture, technical knowledge content, transparent original research and bilingual legal information.

## Local workflow

```bash
npm install
npm run dev
```

The complete production regression suite is:

```bash
npm run verify
```

It runs static accessibility/performance checks, crawler-policy validation, Astro check and build, route/SEO validation and Playwright browser tests.

## Production configuration

The contact and AI-check forms use Resend in production and local NDJSON storage only during development. Copy `.env.example` to a private local environment file for testing. Configure these server-only variables in Vercel before launch:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` — a sender on a domain verified by the mail provider
- `CONTACT_TO_EMAIL`
- `PUBLIC_GA_MEASUREMENT_ID` — the public `G-…` identifier; GA4 remains blocked until analytics opt-in

Validate the production values with:

```bash
npm run deploy:check
```

Never expose `RESEND_API_KEY` through an Astro `PUBLIC_*` variable. Google advertising consent and personalisation remain disabled. The implemented privacy and imprint content reflects the providers currently present in this repository and still requires factual human/legal approval before launch.

## Discovery operations

- `npm run crawler:check` validates all canonical routes against the intended search-crawler policy.
- `npm run indexnow -- --dry-run` previews IndexNow submissions.
- `npm run indexnow -- /changed-route/` submits only genuinely changed URLs after deployment.
- `npm run research:dax-crawlers` repeats the versioned public crawler-policy study when a substantive update is due.

See [docs/prelaunch-organic-readiness.md](docs/prelaunch-organic-readiness.md) and [docs/geo-visibility-baseline.md](docs/geo-visibility-baseline.md) for the controlled launch and measurement process.
