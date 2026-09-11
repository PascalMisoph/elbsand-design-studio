# PATERNOGA entity-recognition baseline

**Run date:** 11 September 2026
**Purpose:** repeatable observation of PATERNOGA brand recognition across classic and AI search surfaces.
**Canonical production domain:** `https://www.paternoga-seo-geo.de`

This is a measurement protocol and a dated starting point, not a ranking or AI-visibility guarantee. Search and generated answers are dynamic. Mention, citation, click and business outcome must be recorded separately.

## Fixed query panel

Run the same panel for each measurement wave and record the product, locale, device/session state, date and result URLs. `Not measured` is intentional; it must not be converted into a zero or a positive result.

| Query | Google organic result | Google AI Overview | ChatGPT Search | Perplexity | Gemini | Entity/domain/citation notes |
| --- | --- | --- | --- | --- | --- | --- |
| `paternoga` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Record surname or unrelated-entity results separately. |
| `paternoga agentur` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Check whether PATERNOGA is classified as an agency. |
| `paternoga seo` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Record the returned category and cited domain. |
| `paternoga geo` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Record whether GEO is connected to PATERNOGA. |
| `paternoga seo geo agentur` | User-supplied baseline: `/seo-dresden/` observed near the top with the title “SEO Agentur Dresden für Dienstleister - paternoga” | User-supplied baseline: an answer approximately stated that no known SEO/GEO agency named “Paternoga” exists; not independently reproduced in this run | Not measured | Not measured | Not measured | Re-test the exact wording and capture sources, entity, category and canonical domain. |
| `paternoga dresden` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Record local/map results separately from organic results. |
| `seo agentur paternoga dresden` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Record whether `/seo-dresden/` is returned and how the agency is described. |
| `geo agentur paternoga dresden` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Record whether GEO and Dresden are associated with the same entity. |
| `was ist paternoga` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Record the first entity definition and all citations. |
| `wer ist paternoga` | Not measured in this run | Not measured | Not measured | Not measured | Not measured | Distinguish the agency from unrelated people with the surname. |

## Current technical/entity observations

- The live site permanently redirects the apex host to the established `www` origin and emits that same origin in canonical, hreflang, Open Graph, JSON-LD, sitemap and robots URLs. This architecture is intentionally preserved; the `.de` production domain remains correct, while the `.com` domain remains out of scope and must not appear.
- The repository contains one shared Organization identity with stable `#organization` references. WebSite publisher, WebPage about, Service provider, founder and offer relationships should continue to point to that identity.
- The verified public [PATERNOGA LinkedIn company profile](https://www.linkedin.com/company/paternoga-seo-geo/) is the first controlled external identity link included in the onsite graph. It links to the canonical website and describes the organization as an SEO/GEO/AI Visibility provider based in Dresden.
- Public web-search results also contain unrelated people and surname references for “Paternoga”. Those results are an ambiguity signal, not evidence about the agency’s performance.

## Prioritized root causes

- **P1 — Thin independent corroboration and entity disambiguation.** The exact surname is shared by unrelated people and organizations, while the agency currently has limited externally visible corroboration beyond its own site and controlled LinkedIn profile.
- **P1 — Missing onsite connection to the strongest controlled external identity.** The verified LinkedIn company profile was not previously connected through `Organization.sameAs`.
- **P2 — Organization description was distributed rather than concentrated.** The homepage needed one concise, visible statement that directly connects PATERNOGA, SEO/GEO, Dresden and Germany-wide work in both languages.
- **P2 — External profile consistency remains an owner task.** The LinkedIn profile uses “Agentur” in its title but “Studio” in its About copy; the profile owner should align that wording and continue to verify the Google Business Profile.
- **P3 — AI answer selection is dynamic and unmeasured here.** No onsite change can guarantee a Google AI Overview or another platform’s answer.

The established `www` canonical architecture is internally consistent and is not a root cause in this audit. No `.com` production signal was found.

## Repeat protocol

For every wave, save:

1. exact query and language;
2. platform/product, logged-in state and location/device context;
3. organic result URLs and displayed titles;
4. AI answer text as a short paraphrase, not an invented quote;
5. whether PATERNOGA is recognized as the same SEO/GEO agency;
6. category, Dresden/location, canonical domain and cited sources;
7. incorrect or ambiguous claims;
8. test date and the change wave being compared.

Do not treat one answer as a permanent platform state, and do not attribute a later change to onsite work without repeated observations and a documented comparison period.
