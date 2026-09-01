# National search acquisition evidence ledger

Research date: 2026-08-30  
Primary market: Germany  
Physical location: Dresden  

This document records the evidence and route decisions behind the first national acquisition wave. It is intentionally conservative: observed search-result patterns are demand signals, not keyword-volume measurements or ranking guarantees.

## Evidence hierarchy

- **A — official/primary:** current documentation from Google, OpenAI, Microsoft/Bing, Perplexity and IndexNow.
- **B — observed SERP:** current result composition for explicit German queries. This supports intent and page-type decisions, not traffic forecasts.
- **C — adjacent market evidence:** current pages from agencies, publishers and tools. This reveals terminology and conventions, not causal performance.
- **D — hypothesis:** plausible opportunity requiring Search Console, Bing Webmaster Tools or commercial data after launch.

## Primary evidence ledger

| Evidence | Date checked | Supported finding | Transferability | Limitation | Strength |
| --- | --- | --- | --- | --- | --- |
| [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | 2026-08-30 | AI Overviews and AI Mode use normal Search eligibility; no special AI markup or files are required. Query fan-out can retrieve supporting pages across subtopics. | Direct | Google-only; does not describe all generative systems. | A |
| [Google: Generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | 2026-08-30 | Established SEO remains relevant; useful, accessible, text-based and well-linked content is the controllable foundation. | Direct | Does not guarantee inclusion or ranking. | A |
| [Google: spam policies](https://developers.google.com/search/docs/essentials/spam-policies) | 2026-08-30 | Near-duplicate city/query pages can be doorway or scaled-content abuse; link spam and hidden crawler copy are prohibited. | Direct | Policy definitions are qualitative. | A |
| [Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | 2026-08-30 | Original reporting, research and analysis with clear sourcing add value; mass summaries do not. | Direct | Self-assessment guidance, not a scoring formula. | A |
| [OpenAI publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) | 2026-08-30 | OAI-SearchBot controls discovery for ChatGPT search; GPTBot governs potential training use and is a separate policy decision. | Direct | Inclusion remains discretionary. | A |
| [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) | 2026-08-30 | PerplexityBot supports search discovery/linking and is distinct from foundation-model training. | Direct | A robots rule does not prove successful crawling. | A |
| [Bing Webmaster AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) | 2026-08-30 | Bing exposes citations, cited pages and sampled grounding queries; these are feedback signals, not rankings. | Direct after launch | Requires verified Webmaster Tools access; public preview may change. | A |
| [IndexNow protocol](https://www.indexnow.org/documentation) | 2026-08-30 | A verified key can notify participating engines about genuinely changed URLs; a 200 response confirms receipt, not indexing. | Direct | Requires deployed key file and deliberate submission. | A |

## Search demand ledger

No reliable first-party keyword-volume source was available in this run. “Observed SERP” means the query produced a coherent current German result set with a stable dominant page type on 2026-08-30.

| Query cluster | Intent / buyer job | Demand evidence | Dominant SERP type | Existing PATERNOGA coverage | Decision | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| GEO Agentur / GEO Agentur Deutschland / Generative Engine Optimization Agentur | Select a specialist provider serving Germany | Repeated national commercial SERPs; specialist and SEO-agency service pages dominate | Commercial service page | GEO hub explains the discipline but does not answer the national supplier-selection job | New DE/EN national commercial route | High |
| KI-Sichtbarkeit Agentur / AI Search Agentur / ChatGPT SEO Agentur | Find implementation help under adjacent terminology | Overlapping commercial SERPs and overlapping providers | Commercial service page | Same service family as national GEO agency intent | Merge into the national page; no separate URLs | High |
| GEO Audit | Establish baseline and prioritise work | Clear commercial audit SERPs | Service/audit page | `/geo-audit/` already matches | Strengthen internal links; no new page | High |
| KI-/ChatGPT-Sichtbarkeit messen / GEO Monitoring | Measure mentions, sources and change | Multiple method and service SERPs | Guide plus monitoring service | `/ai-sichtbarkeit/` and `/geo-monitoring/` already divide diagnosis and continuity | Improve graph; do not duplicate | High |
| Was ist GEO / GEO vs SEO | Understand the discipline | Mature informational SERPs, including publishers and glossaries | Definition/guide | `/geo-optimierung/` already explains mechanisms and relationship to SEO | Strengthen answer-first framing; no new route | High |
| Bei ChatGPT gefunden werden / Unternehmen in ChatGPT sichtbar | Solve a problem without knowing the service label | Mixed guides, checks and commercial pages | Guide/service hybrid | `/ai-sichtbarkeit/`, `/ai-crawlability/`, `/geo-content/` cover distinct causes | Route through the existing hub; no phrase pages | High |
| OAI-SearchBot / GPTBot vs OAI-SearchBot / robots.txt KI-Crawler | Make an informed crawler-policy decision | Current German technical SERPs, but terminology and crawler purposes are often conflated | Technical guide | Service pages mention bots but do not fully answer policy semantics | One consolidated German technical guide | High |
| llms.txt sinnvoll | Decide whether the experimental file matters | Active informational SERP with growing sceptical/technical coverage | Technical guide | Existing files exist; no explanatory page | Cover as a bounded subsection of crawler guide, not a standalone page | Medium |
| GEO Agentur Kosten / Preise | Budget and compare scope | Clear commercial-investigation SERPs | Pricing/selection guides | PATERNOGA has verified package prices on the GEO hub | Backlog: strengthen existing pricing explanation after commercial review; no new page now | Medium |
| GEO Agentur Vergleich / beste GEO Agentur | Compare providers | Directory and self-authored ranking SERPs | Directory/comparison | No neutral market dataset | Reject current implementation; research required and conflict must be disclosed | High |
| GEO Agentur Berlin/Hamburg/München | Find local provider | Visible city SERPs; many pages are locally branded service clones | Local commercial page | PATERNOGA has a real Dresden location but no offices elsewhere | Reject city pages: no unique local evidence or presence | High |
| GEO Agentur Frankfurt/Cologne/Stuttgart/Hanover/Leipzig | Find local provider | Uneven or ambiguous results, some collision with geoscience/local SEO | Mixed | No legitimate local differentiation | Reject/monitor | High |
| AI crawler readiness Germany / German companies | Understand the technical market baseline | Current studies exist, but a transparent DAX-40 sample is a distinct, reproducible segment | Research report | No PATERNOGA original data | Produce one real DAX-40 robots-policy study with raw data | Medium-high |

## Query graph and page ownership

1. **Commercial root:** national GEO agency page owns supplier-selection intent.
2. **Service hub:** GEO optimisation owns the discipline, method and service-network overview.
3. **Diagnosis:** GEO audit, prompt research, AI visibility, sources, competitors, perception and factual accuracy retain separate buyer jobs.
4. **Implementation:** technical GEO, crawlability, GEO content and content optimisation retain separate operational jobs.
5. **Continuity:** monitoring and ongoing support own repeated measurement and execution.
6. **Technical authority:** one crawler-policy guide answers search-vs-training access, robots.txt and llms.txt boundaries.
7. **Evidence node:** the DAX-40 study reports observations from a dated public sample and links to the technical guide and relevant services.

## Route decisions

- **Create:** `/geo-agentur-deutschland/` and `/en/geo-agency-germany/`. Distinct buyer job, commercial parity, not a duplicate of the GEO hub.
- **Create:** `/wissen/ki-crawler-robots-txt/` and `/en/knowledge/ai-crawlers-robots-txt/`. The German route owns the acquisition intent; the English counterpart preserves the site's promised language parity and documents the same crawler-policy decision accurately.
- **Create after measured data exists:** `/research/ki-crawler-readiness-dax-40-2026/` and `/en/research/dax-40-ai-crawler-readiness-2026/` with raw JSON/CSV, method, collection time and limitations. The measured dataset was collected before either route was published.
- **Do not create:** city routes, “best agency” rankings, isolated keyword-variant pages, an llms.txt-only page, or speculative pricing benchmarks.

## National entity decision

PATERNOGA remains located in Dresden. Commercial service scope is Germany-wide. Organization and service schema may use Germany as `areaServed`; no additional places, coordinates or branches are introduced. Visible copy uses “Sitz in Dresden” and “deutschlandweite Zusammenarbeit” only where it answers a buyer question.

## Measurement limitations

- SERP observations do not provide search volume, click-through rate or conversion probability.
- Search results are personalised and time-sensitive.
- A crawler policy shows declared access intent, not whether a bot has actually fetched, indexed or cited a page.
- IndexNow submission confirms notification, not indexing.
- AI citations and grounding queries require post-launch Bing Webmaster Tools data; Google and OpenAI visibility require their own available reporting and referral/log evidence.

## Operational discovery workflow

- Re-run `npm run research:dax-crawlers` only for a deliberate new study wave. It performs live public requests and replaces the dated research data files.
- Before deployment, preview an IndexNow notification with `npm run indexnow -- --dry-run /geo-agentur-deutschland/` and add only genuinely new or substantively updated paths.
- After the key file and target pages are live, submit the explicit paths with `npm run indexnow -- /geo-agentur-deutschland/`. A successful response records receipt only; it does not prove crawling or indexing.
- Use `npm run crawler:check` to validate local robots-policy intent for Googlebot, Bingbot, OAI-SearchBot and PerplexityBot. This validates configuration, not external crawler activity.
- After launch, verify the domain separately in Google Search Console and Bing Webmaster Tools. Feed observed queries, cited pages and sampled grounding queries back into this ledger before creating more routes.
