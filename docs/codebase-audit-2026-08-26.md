# Senior codebase audit — 2026-08-26

## Baseline

- Stack: Astro 7.1.3, React 19.2.3 islands, TypeScript 6.0.3 (`astro/tsconfigs/strict`), Tailwind CSS 4.3.3, Node standalone adapter, npm lockfile v3.
- Repository state: the worktree already contained extensive modified and untracked redesign work. It was preserved; no reset or revert was used.
- Baseline checks: `npm run check`, `npm run static:check`, `npm run build`, the 48-test Playwright suite, and `npm run lint` in `remotion-video` all passed.
- Baseline dependency audit: three high and one moderate transitive advisories were present.

## Priorities

### P0 — correctness and security

| Severity | Files | Finding | Why it matters | Recommendation | Regression risk | Disposition |
| --- | --- | --- | --- | --- | --- | --- |
| high | `package-lock.json` | Vulnerable transitive versions of `fast-uri`, `js-yaml`, `nanoid`, and `postcss`. | Known denial-of-service, path handling, and host-confusion weaknesses should not ship. | Apply the compatible lockfile updates and re-audit. | low | Fixed now. |
| high | `src/pages/api/contact.ts` | Enquiries are appended to local `.data` storage. In a serverless deployment this is ephemeral and not a reliable delivery mechanism. | A successful response can outlive the local record, causing silent lead loss. | Choose and configure a durable approved store or transactional mail provider before production. | high because it changes infrastructure and data handling | Left for later; do not treat the endpoint as production-ready until resolved. |
| high | `src/pages/api/scan.ts` | DNS is checked before native `fetch`, leaving a theoretical DNS-rebinding time-of-check/time-of-use gap. Redirects and private ranges are otherwise validated and response size/time are bounded. | An exposed URL fetcher needs defence in depth against SSRF. | Enforce outbound egress at infrastructure level or use a fetch client that pins the validated address while preserving TLS SNI. | high | Left for later; not safely solvable as a small dependency-free refactor. |

### P1 — high-value maintainability

| Severity | Files | Finding | Why it matters | Recommendation | Regression risk | Disposition |
| --- | --- | --- | --- | --- | --- | --- |
| medium | `src/pages/api/contact.ts`, `src/pages/api/scan.ts` | Two copied in-memory rate limiters retained unbounded client keys and were process-local. | Repetition invites drift; unbounded keys permit memory growth. | Share a bounded implementation and document that it is only process-local. | low | Fixed now in `src/lib/server/rate-limit.ts`; distributed enforcement remains later work. |
| medium | `src/components/TechnicalArtifactCircuit.tsx`, `src/components/TechnicalFoundationBeam.tsx`, `src/components/SourceRoutingIndicator.tsx` | Repeated interval, timeout, hidden-tab, and reduced-motion lifecycle code. | Subtle cleanup and preference-change behaviour can diverge across visuals. | Share behaviour, not illustration markup. | medium because timing is visual | Fixed now with unchanged intervals and fade durations. |
| medium | `src/components/TechnicalArtifactCircuit.tsx`, `src/components/TechnicalFoundationBeam.tsx` | Identical AI-system logo metadata was duplicated. | Asset or naming changes could drift. | Keep one typed metadata source. | low | Fixed now. |
| medium | `src/components/EditorialFeatureList.tsx`, `src/components/BrandPerceptionRadarChart.tsx`, `src/components/TechnicalGeoMacbook.tsx` | Repeated `matchMedia` subscriptions; the editorial observer did not restart if reduced motion was disabled after mount. | Duplicate lifecycle code increases leak and state-sync risk. | Use one small media-query hook and make the observer depend on the preference. | low | Fixed now. |
| medium | `src/components/GeoHubPage.astro`, `src/content/geo.ts` | The last explicit `any` and two compensating assertions bypassed the inferred content schema. | Content shape regressions would reach templates unchecked. | Export the inferred locale content union and type the prop directly. | low | Fixed now. |
| medium | `src/components/GeoCta.astro`, `GeoHero.astro`, `GeoMethod.astro`, `GeoPackages.astro`, `GeoProcess.astro`, `GeoServiceNetwork.astro` | Six tracked components had no import or route consumer after the GEO hub rebuild. | Dead implementations enlarge navigation and invite accidental reuse of obsolete visuals. | Delete after usage and build verification. | low | Fixed now. |
| medium | `package.json`, `astro.config.mjs` | Root Remotion runtime/player packages and their Vite dedupe entries had no root source import; the actual video project has its own manifest. | They increased install and maintenance surface without serving the site. | Remove only the root copies; preserve `remotion-video`. | low | Fixed now. |
| medium | `package.json` | Core tool versions used `latest`, and type/build-only tooling was listed as production runtime dependencies. | Fresh installs could cross major versions despite an unchanged manifest. | Pin detected versions and move check/TypeScript tooling to dev dependencies. | low | Fixed now. |

### P2 — lean-code improvements

| Severity | Files | Finding | Why it matters | Recommendation | Regression risk | Disposition |
| --- | --- | --- | --- | --- | --- | --- |
| medium | root project configuration | There is no root ESLint configuration or lint script. Astro/type checks are strong but do not cover hook/style rules comprehensively. | React hook misuse and dead imports can escape type checking. | Add a focused Astro/React ESLint setup in a separate change with an agreed warning baseline. | medium due to broad churn | Documented for later. No dependency added solely for this audit. |
| medium | `src/pages/api/contact.ts`, `src/pages/api/scan.ts` | Server endpoints have no direct automated request/abuse tests. | Browser UI tests do not exercise malformed origins, oversized payloads, rate limits, redirects, or private hosts comprehensively. | Add endpoint-level tests once the deployment runtime and durable services are selected. | low | Later. |
| medium | `src/components/TechnicalGeoMacbook.tsx` | Three visual logos load from `assets.aceternity.com`. | Availability, caching, and privacy depend on a third party. | Vendor approved copies locally, preserving exact dimensions and appearance. | medium visual/copyright review | Later. |
| medium | `src/components/Hero.astro`, `public/video/paternoga-search-shift-*.mp4` | The first-view hero preloads a roughly 3.2 MiB video with `preload="auto"`. | This is a deliberate signature asset but can materially affect mobile transfer and contention with critical resources. | Measure LCP and transfer on production hosting; consider connection-aware loading or a smaller encode only if visual parity is retained. | high visual/motion | Later; not changed without performance evidence. |
| medium | generated client bundle | The largest raw chunks are the shared client runtime (~176.5 KiB), global/site CSS (~180.5 KiB), and a route-specific Recharts chunk (~263 KiB). The chart chunk is already isolated behind a visible island. | These are useful bundle-budget baselines and potential future regression points. | Add bundle budgets or route-level measurements before splitting more code; do not add speculative dynamic imports. | medium | Later. |
| low | Legacy wordmark assets; `public/images/geo-audit-brand-factcheck.webp`, `...-v2.webp` | Byte-identical assets existed under different names. | Minor repository and asset-navigation noise. | The obsolete wordmark assets were removed during the Paternoga brand migration; the fact-check variants remain pending visual review. | low | Partially resolved. |
| low | `src/components/ui/chart.tsx` | A vendor-derived chart primitive emits trusted CSS variables with `dangerouslySetInnerHTML`. | It would become an injection surface if configuration became user-controlled. | Keep configuration internal or validate CSS colour values before accepting external data. | medium vendor fidelity | Later; current inputs are static and trusted. |

### P3 — optional architectural ideas

| Severity | Files | Finding | Why it matters | Recommendation | Regression risk | Disposition |
| --- | --- | --- | --- | --- | --- | --- |
| low | `src/styles/global.css`, `src/pages/api/scan.ts`, `src/components/PromptResearchPage.astro`, large content modules | Several files are large, but their responsibilities are mostly cohesive or vendor/content-specific. | Size alone can slow navigation, but speculative splitting creates more indirection. | Split only when a concrete independently testable domain emerges. | high | Intentionally not implemented. |
| low | React product visuals and `src/components/ui` | Both `framer-motion` and `motion` import paths are used by different vendor-derived components. | There may be theoretical package/API consolidation. | Revisit only with bundle evidence and visual parity tests; do not normalize vendor internals for aesthetics. | high | Intentionally not implemented. |
| low | `public/sitemap.xml` | The sitemap is complete today but manually maintained. | Future routes can be omitted accidentally. | Consider generated sitemap output when routing stabilises. | medium SEO behaviour | Later. |

## Areas verified without corrective changes

- Primary page content is server-rendered by Astro; interactive React is isolated with `client:visible`/`client:load` according to interaction needs.
- All 30 localized public routes are represented in `public/sitemap.xml`; `robots.txt`, canonicals, hreflang, breadcrumbs, and route-level structured data are present.
- `llms.txt` and `llms-full.txt` are absent. They remain non-standard and were not invented solely to satisfy the site's own illustrative scanner.
- No broken internal route was found by the existing route/browser suite.
- Interactive product visuals expose keyboard focus or native controls, and reduced-motion handling is present in the signature areas checked.
- External `_blank` links inspected include appropriate `rel` protection.
- `set:html` in `BaseLayout.astro` serializes internal JSON-LD data; no user-provided HTML path was found.
- No secret or client-exposed environment value was found in source. Existing user-created screenshots and worktree artifacts were not deleted.
