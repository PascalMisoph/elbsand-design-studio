# PATERNOGA national search acquisition report

Date: 30 August 2026  
Market: Germany  
Physical location: Dresden  
Scope: research-first, selective implementation

## 1. Executive summary

The strongest demonstrated gap was not route quantity. PATERNOGA already had a broad, differentiated GEO service network, but it lacked a page for the national supplier-selection job and a public evidence layer connecting technical knowledge to its commercial services.

This wave therefore added six paired DE/EN URLs around three defensible concepts:

1. a national commercial page for companies selecting a Germany-wide GEO specialist;
2. one consolidated technical guide explaining AI crawler policy without conflating search discovery and model training;
3. one reproducible DAX 40 crawler-readiness study based on a real public sample, with raw JSON and CSV.

The implementation also made the Dresden-headquarters/Germany-service-area relationship explicit, connected the new pages to the existing service graph, added IndexNow tooling and automated crawler-policy checks, and retained all existing routes and design behavior.

No city pages, keyword variants, self-serving agency ranking, invented search volume or synthetic research were published.

## 2. Research sources

Primary documentation checked on 30 August 2026:

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features): standard Search eligibility, supporting-link behavior and query fan-out.
- [Google: generative AI optimisation guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): useful, accessible, text-based and well-linked content remains the controllable foundation.
- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): original reporting, research, sourcing and added value.
- [Google: spam policies](https://developers.google.com/search/docs/essentials/spam-policies): doorway abuse, scaled-content abuse and link spam as hard constraints.
- [Google: common crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers): Googlebot and Google-Extended purposes.
- [OpenAI: publishers and developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq): OAI-SearchBot and GPTBot are separate policy decisions.
- [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers): PerplexityBot search/discovery purpose.
- [Bing: AI Performance in Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview): citations, cited pages and sampled grounding queries as post-launch feedback.
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) and [Bing crawler documentation](https://www.bing.com/webmasters/help/help/which-crawlers-does-bing-use-8c184ec0).
- [IndexNow protocol](https://www.indexnow.org/documentation) and [IndexNow FAQ](https://www.indexnow.org/faq): changed-URL notification, key verification and receipt limitations.
- [DAX 40 constituents](https://www.finanzen.net/index/dax/40-werte), checked against the [Deutsche Börse June 2026 index announcement](https://live.deutsche-boerse.com/nachrichten/auswahlindizes-neuzusammensetzung-der-dax-blue-chip-indizes).

SERP observations covered German commercial, measurement, problem-aware, educational, crawler-policy, platform and regional queries. These observations indicate page-type and intent patterns; they are not search-volume measurements. No reliable first-party volume/CPC dataset was available, so none is reported or inferred.

## 3. German query graph

| Layer | Coherent cluster | Intended page owner |
| --- | --- | --- |
| Commercial | GEO agency, GEO consulting, AI Search agency, Germany-wide provider | National GEO agency page |
| Commercial investigation | scope, provider fit, methodology, costs | National page plus existing GEO hub; pricing remains inquiry-based |
| Problem-aware | visible in ChatGPT, competitors mentioned, company in AI answers | Existing AI visibility, source, competitor and content pages |
| Measurement | AI visibility measurement, Share of Model, monitoring, citations | Existing AI visibility and monitoring pages |
| Educational | what GEO is, GEO vs SEO, how GEO works | Existing GEO optimisation hub |
| Technical | OAI-SearchBot, GPTBot, PerplexityBot, robots.txt, llms.txt | New consolidated crawler guide plus technical service pages |
| Platform-specific | ChatGPT Search, Google AI features, Perplexity | Relevant sections in the guide and existing services; no thin platform routes |
| Research | German company crawler readiness | New DAX 40 study |
| Regional | GEO agency by city | Rejected until unique, buyer-relevant local evidence exists |

## 4. Search demand ledger

| Query cluster | Intent | Demand evidence | Current/new coverage | Action | Confidence |
| --- | --- | --- | --- | --- | --- |
| GEO Agentur Deutschland | Select a national specialist | Coherent commercial SERP dominated by supplier pages | New national page | New route | High |
| AI Search / KI-Sichtbarkeit Agentur | Select adjacent service terminology | Strong SERP overlap with GEO agencies | National page | Merge; no variant URLs | High |
| GEO Audit | Establish baseline and priorities | Distinct commercial audit SERP | Existing GEO audit | Strengthen graph | High |
| KI-Sichtbarkeit messen / GEO Monitoring | Validate presence and change | Distinct method/service results | Existing AI visibility and monitoring | Retain separate buyer jobs | High |
| Was ist GEO / GEO vs SEO | Understand the discipline | Mature informational SERPs | Existing GEO hub | Improve ownership, no new page | High |
| OAI-SearchBot / GPTBot / robots.txt KI-Crawler | Decide crawler policy | Current technical SERPs; frequent purpose confusion | New crawler guide | New consolidated route | High |
| llms.txt sinnvoll | Assess an experimental file | Active technical discussion | Crawler guide subsection | Merge | Medium |
| GEO Agentur Kosten | Build budget expectations | Commercial-investigation results | Existing hub and inquiry flow | Human review backlog | Medium |
| beste GEO Agentur / Vergleich | Compare suppliers | Directories and self-authored rankings | No neutral dataset | Reject for now | High |
| GEO agency city variants | Find local provider | City SERPs exist, often as cloned agency pages | No real PATERNOGA presence/data outside Dresden | Reject | High |
| AI crawler readiness Germany | Understand technical baseline | Adjacent studies and a defensible public-company sample | New DAX 40 research | Measured research asset | Medium-high |

## 5. Existing route mapping

- `/geo-optimierung/` remains the service and discipline hub; it was not duplicated by the national page.
- `/geo-audit/` remains the baseline diagnosis and prioritisation service.
- `/ai-sichtbarkeit/` and `/geo-monitoring/` retain separate measurement and ongoing-observation jobs.
- `/ki-quellenanalyse/`, `/ki-wettbewerbsanalyse/`, `/ki-markenwahrnehmung/`, `/ki-faktencheck/` and `/prompt-recherche/` retain specialised diagnostic ownership.
- `/technische-geo-optimierung/` and `/ai-crawlability/` remain commercial implementation pages and now connect to the technical guide and research evidence.
- `/geo-content/`, `/content-optimierung-ai-suche/` and `/geo-betreuung/` retain content and continuity ownership.

## 6. New routes

### `/geo-agentur-deutschland/` and `/en/geo-agency-germany/`

- Intent: national commercial supplier selection.
- Buyer job: decide whether PATERNOGA can support a company anywhere in Germany and understand the engagement model.
- Independent value: makes service scope, digital collaboration from Dresden, buyer fit, methodology and service paths explicit.
- Difference: the GEO hub explains the discipline and portfolio; this page enables provider selection.
- Commercial bridge: GEO audit, technical GEO, GEO content, monitoring and project contact.

### `/wissen/ki-crawler-robots-txt/` and `/en/knowledge/ai-crawlers-robots-txt/`

- Intent: make a correct robots.txt and crawler-policy decision.
- Buyer job: distinguish discovery crawlers from training controls and avoid accidental blocking.
- Independent value: consolidated comparison, policy method, examples, validation checklist, official sources and explicit llms.txt limits.
- Difference: it teaches a technical decision rather than selling crawlability work.
- Commercial bridge: AI crawlability and the DAX study.

### `/research/ki-crawler-readiness-dax-40-2026/` and `/en/research/dax-40-ai-crawler-readiness-2026/`

- Intent: inspect a current German public-company crawler-policy baseline.
- Buyer job: evaluate concrete market observations and the method behind them.
- Independent value: dated 40-company sample, reproducible collection logic, limitations, company-level observations and raw data.
- Difference: it reports measured public configuration rather than restating documentation.
- Commercial bridge: crawler guide and AI crawlability service.

## 7. National architecture

PATERNOGA is modelled as one real entity:

- headquarters/location: Dresden, Germany;
- service area: Germany;
- no additional offices, coordinates, branches or local-business entities;
- visible wording uses the national relationship only where it resolves a buyer question;
- Organization and Service schema use `areaServed: Deutschland` while retaining Dresden as the actual location.

Homepage metadata and the location line now communicate the same relationship. The hero's approved primary message remains unchanged.

## 8. Regional strategy

Berlin, Hamburg, Munich, Frankfurt, Cologne, Düsseldorf, Stuttgart, Hanover and Leipzig were investigated through current SERP patterns. City demand exists unevenly, but PATERNOGA presently has neither a physical presence nor unique buyer-relevant data for those markets.

City pages created: **zero**.

Reason: keyword-swapped pages would fail the distinct-intent/data/method/context threshold and risk doorway architecture. A future regional route requires real regional research, industry context or another defensible local dataset. No tourism facts or generic city business copy should be used as substitute differentiation.

## 9. Original research

Research question: how do the public websites of the DAX 40 declare crawler access and expose selected discovery signals on 30 August 2026?

Method:

- transparent sample of 40 named DAX companies;
- public homepage, robots.txt, llms.txt and root sitemap observations only;
- sequential domains, bounded parallel requests per domain, 900 ms delay, 8-second timeout and 1.5 MB response limit;
- no authentication, private endpoints, security probing or bot impersonation;
- policy parsing for Googlebot, Bingbot, OAI-SearchBot, GPTBot and PerplexityBot.

Measured results:

- 33/40 readable robots.txt responses;
- 28/40 declared a sitemap in robots.txt;
- 20/40 exposed a reachable root sitemap URL;
- 6/40 exposed a usable llms.txt response;
- 16/40 homepages contained JSON-LD syntax;
- among readable policies, no tested crawler was blocked from `/`; seven domains remain unknown due to timeout or 403 responses;
- explicit named rules were uncommon: 2 for OAI-SearchBot, 3 for GPTBot and 3 for PerplexityBot.

Limitations:

- configuration is not evidence of actual crawling, indexing, ranking, citation or training;
- HTTP 403 and timeouts remain unknown, not blocked;
- homepage access does not imply access to every path;
- DAX 40 companies are not representative of all German companies;
- results are a dated snapshot and may change.

## 10. Technical authority

One broad technical topic node was chosen instead of many thin articles. It establishes stable terminology for OAI-SearchBot, GPTBot, PerplexityBot, Googlebot, Bingbot and Google-Extended, explains rule grouping and policy validation, and places llms.txt in its supplementary—not ranking—role. The page relies on primary crawler documentation and links into the relevant service and evidence nodes.

## 11. Internal topic graph

The new graph follows a human research sequence:

`National provider selection → GEO hub/services → technical guide → measured research → crawlability service/contact`

The header and footer expose the national page, guide and research. The GEO hub owns the commercial page within its service network. Technical service content links to the guide. The guide and research link to each other and to AI crawlability. Descriptive anchors are used; no keyword-stuffed sitewide blocks were added.

## 12. Discovery infrastructure

- Sitemap expanded from 30 to 36 intended routes with reciprocal DE/EN alternates and truthful `lastmod` for the new URLs.
- Canonical, hreflang, Open Graph, Twitter, headings, breadcrumbs and structured data use the existing central SEO architecture.
- Research pages use TechArticle and a real Dataset/DataDownload entity; the commercial page uses Service; the guide uses TechArticle.
- `llms.txt` and `llms-full.txt` were aligned with the new public content but are treated as supplementary.
- A native-fetch IndexNow script submits only explicit changed paths and supports dry-run mode.
- A public IndexNow key file is present. Actual submission must wait until both the key and target pages are deployed.
- Automated policy validation checks that Googlebot, Bingbot, OAI-SearchBot and PerplexityBot can access representative public paths.
- Google's general Indexing API was not used.

## 13. AI retrieval readiness

The new pages increase legitimate retrieval surface through direct definitions, comparison tables, numbered processes, dated observations, inspectable primary sources, explicit limitations and connected entity/schema relationships. The research page exposes machine-readable raw data and clear provenance.

These changes improve eligibility, extractability and attribution. They do not guarantee inclusion, citations, ranking or recommendation by any external system.

## 14. Spam-safety review

Confirmed:

- no doorway pages;
- no city keyword swapping;
- no route per query variation;
- no scaled content system;
- no hidden crawler copy or cloaking;
- no fake locations, offices, data, rankings, proof or customer results;
- no self-serving best-agency ranking;
- no purchased/link-network activity;
- no general-content use of Google's Indexing API;
- no repeated blind IndexNow submission.

## 15. Search backlog

### Next wave

- Improve the existing GEO hub's answer-first ownership for “Was ist GEO?” and “GEO vs SEO” only if Search Console shows those queries landing elsewhere.
- Evaluate a transparent scope/cost decision guide after PATERNOGA's commercial boundaries are stable; merge into the national page if the buyer job is not distinct.
- Add an update log to technical guidance when primary crawler documentation materially changes.

### Research required

- A neutral, non-ranked German GEO provider market map with conflict disclosure.
- Sector-specific GEO for B2B/Mittelstand only after query and buyer-job evidence shows that general pages cannot satisfy the need.
- Regional pages only after a reproducible regional dataset provides independent value.

### Future data asset

- Repeat the DAX study quarterly using the same methodology and publish a change comparison.
- AI-visibility benchmarks only through approved APIs or permitted manual protocols with fully recorded prompts, dates and limitations.

### Reject or merge

- “best agency” self-ranking;
- individual ChatGPT visibility synonym pages;
- standalone llms.txt page unless demand and depth materially outgrow the current guide;
- cloned city routes.

## 16. Earned authority opportunities

High-fit recipients include German SEO/search publications, B2B marketing media, web-development communities, digital associations and journalists covering AI-search infrastructure. The legitimate pitch is the measured finding—not “PATERNOGA published an article.”

Potential citation angles:

- how rarely major German corporate sites explicitly name search/training AI crawlers;
- the difference between declared access and actual retrieval;
- llms.txt adoption in a defined public-company sample;
- quarter-over-quarter policy changes after a repeat wave.

Link-worthy assets are the transparent method, raw dataset, change log and crawler-policy explainer. Directory spam, paid links, mass guest posts, syndicated keyword articles and fake press are explicitly excluded.

## 17. Measurement plan

After deployment, separate each acquisition stage:

1. **Eligibility:** sitemap processing, indexed URLs, robots/canonical issues.
2. **Search visibility:** impressions, query, page, country, device, clicks and position in Google Search Console and Bing Webmaster Tools.
3. **Generative retrieval:** Bing AI citations, cited pages and sampled grounding queries; observable ChatGPT/Perplexity referrals; available server-log crawler activity.
4. **Engagement:** landing page, internal next page and contact-path use when approved analytics exist.
5. **Commercial:** inquiry source, qualified lead, eventual win/loss and recurring objections.

Visibility, traffic, inquiry, qualified lead and customer must remain distinct measures. New query evidence should first be mapped to an existing owner; only a genuinely distinct buyer job should trigger route evaluation.

## 18. Validation

Final local production validation on 30 August 2026:

- `npm run verify`: passed;
- Astro check: 151 files, 0 errors, 0 warnings, 0 hints;
- production Astro build: passed;
- SEO validator: 36 routes, unique metadata, canonical/hreflang, H1/headings, JSON-LD, images and internal links passed;
- crawler-policy validator: four search crawlers across five representative public paths passed;
- static research integrity: declared 40-company sample and synchronised JSON/CSV passed;
- Playwright: 55/55 tests passed;
- responsive coverage: 320, 375, 430, 768, 1024, 1280, 1440 and 1728 px;
- keyboard focus, mobile navigation, reduced motion and existing interactive service visuals passed;
- `git diff --check`: passed; line-ending notices are repository-level Windows warnings, not whitespace errors.

## 90-day operating model

### Weekly

- Review new Search Console and Bing queries/pages after sufficient data accumulates.
- Note SERP composition changes for the small set of core commercial and technical clusters.
- Assign each useful query to an existing page before considering a new one.
- Correct factual crawler documentation changes promptly and record substantive updates.

### Monthly

- Improve one existing topic node where real query evidence exposes an unanswered buyer question.
- Review national-page paths into the audit, crawlability, content and contact routes.
- Inspect Bing AI cited pages/grounding queries and legitimate generative referrals where available.
- Pursue a small number of editorial conversations around a real finding, not routine article promotion.

### Quarterly

- Repeat the DAX 40 collection with the same sample/method, publish changes and retain the prior snapshot.
- Reassess the commercial query graph, cannibalisation and the cost/scope information gap.
- Re-evaluate regional or sector pages only if new demand and unique data satisfy the page-eligibility rule.
- Retire or merge weak pages if future first-party evidence shows overlapping buyer jobs.

The cadence is evidence-led, not a publishing quota. A substantive update or one reproducible research wave is preferable to a high-volume content treadmill.
