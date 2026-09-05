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
- `CONTACT_REPLY_TO_EMAIL` — the real PATERNOGA address used for replies to result emails
- `SCAN_RESULT_SIGNING_SECRET` — an independent random secret with at least 32 characters
- `PUBLIC_GA_MEASUREMENT_ID` — the public `G-…` identifier; GA4 remains blocked until analytics opt-in

Validate the production values with:

```bash
npm run deploy:check
```

Never expose `RESEND_API_KEY` through an Astro `PUBLIC_*` variable. Google advertising consent and personalisation remain disabled. The implemented privacy and imprint content reflects the providers currently present in this repository and still requires factual human/legal approval before launch.

AI-check result links contain a compressed, signed, PII-free scan snapshot and expire after 30 days. Lead identity and the structured scan history are sent separately to the configured internal mailbox. Local development additionally writes `.data/ai-check-history.ndjson`. This mailbox trail is intentionally not presented as a queryable production database; durable lookup, individual revocation and retention automation require a separately provisioned managed store.

## Discovery operations

- `npm run crawler:check` validates all canonical routes against the intended search-crawler policy.
- `npm run indexnow -- --dry-run` previews IndexNow submissions.
- `npm run indexnow -- /changed-route/` submits only genuinely changed URLs after deployment.
- `npm run research:dax-crawlers` repeats the versioned public crawler-policy study when a substantive update is due.

See [docs/prelaunch-organic-readiness.md](docs/prelaunch-organic-readiness.md), [docs/geo-visibility-baseline.md](docs/geo-visibility-baseline.md) and [docs/seo-geo-next-steps.md](docs/seo-geo-next-steps.md) for the controlled launch, measurement process and living post-deployment roadmap.
