# ELBSAND Design Reference

Status: approved direction, 2026-08-08

This document is the required visual reference for all future ELBSAND frontend work. Read it together with `AGENTS.md` before changing layout, typography, motion, page structure, or reusable components.

## Reference hierarchy

1. ELBSAND brand, content, accessibility, and business rules in `AGENTS.md`.
2. The public Profound marketing site (`https://www.tryprofound.com/`) as the primary reference for perceived quality, grid discipline, spacing, component proportions, content depth, page flow, motion, and internal-link architecture.
3. The measured crawl data in `.codex-tmp/profound-core-crawl.json` and `.codex-tmp/profound-responsive-audit.json`.
4. The existing ELBSAND palette, real references, bilingual content, and service model.

The target is very high perceptual similarity in craft and behavior, not reuse of Profound's copyrighted copy or media. Do not download, republish, trace, or embed Profound-owned images, videos, illustrations, product screenshots, or written copy. Create ELBSAND-native equivalents with the same functional role, visual weight, density, and motion quality.

## Design objective

The final site should immediately evoke the confidence, precision, technical clarity, and motion polish of Profound while remaining recognizably ELBSAND. Avoid shallow imitation. Every reference pattern must be rebuilt as a coherent system with production-grade responsive behavior, accessibility, performance, and bilingual parity.

Visual quality is the highest implementation priority after correctness and accessibility. Do not simplify signature layouts or motion merely because a generic component would be easier to code.

## Measured Profound system

### Layout

- Desktop content width: primarily `1056px`; selected shells use `1088px`.
- Desktop grid: four recurring columns of about `264px`.
- Wide-page side space at 1440px: roughly `176–192px`.
- Mobile gutter: `20px` target, never less than `16px`.
- Header height: approximately `56px` on desktop.
- Major section padding: primarily `100–120px` on desktop.
- Secondary section padding: `80–104px`.
- Dense local spacing: `8`, `12`, `16`, `24`, `32`, `48`, and `80px`.
- Use fine vertical rhythm lines or a subtle technical grid in signature sections. Lines must guide alignment, not become decoration.
- Prefer full-width section bands with a constrained inner grid. Avoid stacked outer cards.
- On the homepage, major narrative sections use `112px` top/bottom padding on desktop and `80px` on mobile unless a documented visual transition requires a deliberate exception.
- The transition from the final service story into Projects is one continuous narrative boundary: Projects adds no top padding because the preceding Services section already supplies the complete `112px`/`80px` transition space.
- The homepage explainer video is supporting evidence, not the dominant hero. Keep it centered at a maximum width of `920px` on desktop and fluid on mobile.

### Typography

- Primary family: self-hosted **Inter Variable**, licensed under the SIL Open Font License.
- Desktop H1 baseline: `56px / 64px`, tight negative tracking.
- Mobile H1 baseline: `40px / 45px`.
- Body baseline: `16px / 24px` for Profound-like technical sections.
- Use weights deliberately: regular/medium for display, medium/semibold for controls and labels.
- Keep hero headlines to one to three lines.
- Preserve readable line lengths: approximately `32–46rem` for explanatory copy.
- Sequence labels use natural numbers without leading zeroes: `1`, `2`, `3`. This applies consistently to steps, cards, projects, demos, and navigation indicators.
- ELBSAND Editorial/Baskerville may remain as a restrained accent, but the new product/GEO system is Inter-led.

### UI descriptions

UI descriptions: Do not add subtitles, helper text, or descriptive copy beneath headings, labels, cards, or settings by default. Prefer one concise, self-explanatory heading or label. Only add supporting copy when the user explicitly asks for it or when it is necessary to prevent misunderstanding or error, and never use it to restate the heading.

### ELBSAND palette translation

- Paper: `#f4f0e8`
- Paper soft: `#fbf8f2`
- Ink: `#1b1a17`
- Muted: `#625f58`
- Line: `rgba(27, 26, 23, 0.16)`
- Control line: `#89857d`
- Accent: `#b74622`
- Accent dark: `#7b2f18`
- Surface: `#ebe3d7`
- Dark analysis field: derive from ELBSAND charcoal near `#11110f` or `#171714`, not generic blue-black.
- Dark field text: warm near-white, derived from `#fbf8f2`.
- Use one restrained signal color per data context. Avoid rainbow dashboards.

### Cards and surfaces

- Primary radii: `8px`, `12px`, and `16px`.
- Buttons: compact `6–9px` radius; avoid excessive pill styling except filters/status.
- Most feature groups should be grid cells separated by one-pixel lines, not isolated floating cards.
- Signature evidence panels may use `12–16px` radius and subtle contact shadows.
- No nested cards.
- Desktop four-up outcome cells should align to the 264px column rhythm.
- Pricing/service columns should share a common baseline and CTA position.
- Use shadows only for focus, depth ordering, or tactile stacked-card motion.

## Signature homepage motif

Build a large AI-system switching statement inspired by Profound's homepage behavior.

Required behavior:

- The complete active system name and icon must be visible inside the first viewport on every supported desktop and mobile size. This is part of the hero message, not the next section.
- A stable first line states the ELBSAND outcome.
- A second, visually dominant line cycles through `ChatGPT`, `Claude`, `Perplexity`, `Gemini`, and `Google AI Overviews` with the corresponding recognizable brand icon.
- The changing line must remain centered and dimensionally stable despite different word lengths.
- Transition: outgoing text blurs and moves slightly upward; incoming text starts blurred below, sharpens, and settles.
- Recommended transition duration: `300–450ms`.
- Hold each system for `1800–2600ms`.
- Use width interpolation or a fixed measured stage to avoid layout shift.
- Pause when the tab is hidden. Do not run timers unnecessarily.
- With `prefers-reduced-motion`, show one static phrase or change without spatial motion.
- Mobile scale must remain prominent, not collapse into a badge.
- The motif must connect directly to an original ELBSAND audit/workflow visual below it.

The landing page uses a continuous charcoal field. Hierarchy comes from borders, restrained surface shifts, media, typography, and motion rather than alternating large light and dark page bands.

## Motion system

Motion is part of layout and storytelling, not a decorative afterthought.

### Timing vocabulary

- Micro interaction: `160–220ms`.
- Hero blur/fade reveal: about `300ms`.
- Section reveal: `600–1000ms`.
- Stagger interval: `60–120ms`.
- Card focus transition: `500–800ms`.
- Cursor or gentle float loop: `3000–4000ms`.
- Progress narrative: approximately `5000ms`.
- Ambient gradient/background loop: `6000–8000ms`.

### Preferred movement

- Blur-to-sharp with small translate and opacity changes.
- Staggered grid-cell reveals.
- Sequential activation of product/audit steps.
- Stacked cards with a clear focused plane.
- Progress lines connecting signal, analysis, and action.
- Small cursor demonstrations where they clarify interaction.
- Product-like demos that show a real service artifact changing state.

### Motion constraints

- Never animate all sections simultaneously.
- Keep normal solution pages calmer than signature homepage/GEO pages.
- Animate transforms, opacity, filters, and SVG drawing where possible.
- Do not animate layout-critical dimensions unless the container remains stable.
- Every animation needs a reduced-motion alternative.
- All essential content must exist in crawlable HTML before animation.
- Do not accept motion that causes CLS, input delay, unreadable intermediate states, or mobile jank.

## Page-flow templates

### Signature feature/service page

1. Header and optional announcement line.
2. Focused hero with category label, one strong H1, short promise, and one or two CTAs.
3. Three or four immediate outcome cells.
4. Large original evidence/demo panel.
5. Real proof or honest methodology statement.
6. Alternating analysis and outcome narratives.
7. Technical credibility/method section.
8. Related services or next-step workflow.
9. Real references or clearly labelled examples; never fake case studies.
10. FAQ.
11. Strong closing CTA.

### Short solution page

1. Outcome-led hero.
2. Three customer outcomes.
3. Relevant service modules.
4. Process or proof.
5. Related services.
6. CTA.

## GEO service network

The complete topic set should be represented as substantive ELBSAND services, not thin doorway pages. Final route splitting is determined by unique search intent and deliverable differentiation.

German working routes:

- `/geo-optimierung/` — hub and overview.
- `/geo-audit/` — baseline, mentions, answers, facts, sources.
- `/ai-sichtbarkeit/` — visibility, platforms, share of voice, reporting.
- `/prompt-recherche/` — customer questions, intent, topic prioritization.
- `/ki-quellenanalyse/` — citations, source authority, content gaps.
- `/ki-wettbewerbsanalyse/` — comparative visibility and opportunities.
- `/ki-markenwahrnehmung/` — sentiment, themes, narrative accuracy.
- `/ki-faktencheck/` — incorrect or outdated AI claims and remediation.
- `/ai-crawlability/` — bot access, server delivery, page reachability.
- `/technische-geo-optimierung/` — semantic HTML, performance, structured facts, crawl paths.
- `/geo-content/` — new citation-ready pages and factual content systems.
- `/content-optimierung-ai-suche/` — refresh and restructure existing content.
- `/geo-monitoring/` — recurring observation and reporting.
- `/geo-betreuung/` — prioritized ongoing agency execution.

Exact English route mapping:

- `/en/geo-optimization/` — hub and overview.
- `/en/geo-audit/` — baseline audit, mentions, answers, facts, and sources.
- `/en/ai-visibility/` — platforms, share of voice, and reporting.
- `/en/prompt-research/` — customer questions, intent, and topic prioritization.
- `/en/ai-source-analysis/` — citations, source authority, and content gaps.
- `/en/ai-competitor-analysis/` — comparative visibility and opportunities.
- `/en/ai-brand-perception/` — themes, sentiment, and narrative accuracy.
- `/en/ai-fact-checking/` — incorrect or outdated AI claims and remediation.
- `/en/ai-crawlability/` — bot access, server delivery, and page reachability.
- `/en/technical-geo-optimization/` — semantic HTML, performance, structured facts, and crawl paths.
- `/en/geo-content/` — new citation-ready pages and factual content systems.
- `/en/content-optimization-ai-search/` — refresh and restructure existing content.
- `/en/geo-monitoring/` — recurring observation and reporting.
- `/en/geo-support/` — prioritized ongoing agency execution.

Rollout count:

- `14` German GEO/service routes.
- `14` English GEO/service routes.
- `28` localized service pages in total.
- The DE and EN GEO hubs already exist; the complete rollout therefore adds `26` new routes.
- Together with the DE and EN homepages, this stage contains `30` public pages. API endpoints are not counted as public pages.

## Internal-link architecture

- Homepage links to the GEO hub and the most relevant entry service.
- GEO hub links to every first-level subtopic and may also expose high-intent leaves where that improves discovery.
- Every first-level subtopic links to its own leaves. Every leaf links back to its parent and to two to four genuinely related leaves or sibling services.
- Use contextual links inside explanatory copy, not only footer cards.
- Include accessible breadcrumbs and `BreadcrumbList` structured data. Breadcrumbs represent the logical user path through the taxonomy; they do not need to duplicate the physical URL path.
- Article/research content links to the relevant service and vice versa.
- Closing CTAs must match intent: audit pages lead to an audit request; execution pages lead to an implementation conversation.
- Avoid orphan pages, generic `learn more` labels, and excessive exact-match anchor repetition.

### Binding GEO taxonomy

Keep the information architecture shallow: one root, first-level subtopics, and at most one leaf level. Do not add a fourth logical level merely to create more landing pages.

- Root: `/geo-optimierung/` and `/en/geo-optimization/`.
- Root-level diagnostic/research services: GEO Audit and Prompt Research.
- Parent `AI-Sichtbarkeit` / `AI visibility`: Source Analysis, Competitor Analysis, Brand Perception, and Fact Checking.
- Parent `Technische GEO-Optimierung` / `Technical GEO Optimization`: AI Crawlability.
- Parent `GEO-Content` / `GEO Content`: Content Optimization for AI Search.
- Parent `GEO-Betreuung` / `GEO Support`: GEO Monitoring.
- Breadcrumbs follow this logical hierarchy even though the approved public URLs remain short and flat.
- A page may be mentioned in several contextual modules, but it has one canonical taxonomy parent so breadcrumbs, metadata, analytics, and navigation remain unambiguous.

### Metadata by taxonomy level

- Root pages target the broad category and explain the complete field. Example title pattern: `GEO-Optimierung: Sichtbarkeit in KI-Suchen | ELBSAND`.
- First-level subtopics target one medium-width service intent and state the service outcome in a unique, concise title and H1.
- Leaf pages target one focused problem or deliverable and link their promise back to the parent service without repeating parent-page boilerplate.
- Every localized route receives its own descriptive title, meta description, canonical, hreflang pair, and one clear H1. Titles and H1s may differ when that improves clarity, but they must describe the same page intent.
- Do not reuse a title template so aggressively that pages become hard to distinguish. Do not stuff synonyms, locations, or platform names.

### Taxonomy analytics

- When analytics is added, expose stable dimensions for locale, taxonomy level (`root`, `subtopic`, `leaf`), canonical parent, service family, and page intent.
- Treat performance comparisons such as root versus leaf, guide versus service, or one topic family versus another as analysis segments, not as claims before real ELBSAND data exists.
- Keep taxonomy identifiers independent of display copy so headings can improve without breaking longitudinal reporting.

## Asset production

### Dashboard visual quality baseline

- The supplied `geo-audit-visibility-scores-graph.webp` and `geo-audit-sentiment-insights.webp` establish the minimum visual finish for analytical graphics: near-black compositing, subtle structural lines, restrained glow, precise focal values, and carefully framed interface states.
- Do not substitute signature analytics visuals with a basic polyline, a few generic bars, decorative circles, or an empty metric card. New visuals must match this reference in density, tonal control, crop quality, and focal clarity while remaining specific to the subject of their module.
- Analytical screenshots and generated visual assets must blend into their parent surface without visible gray rectangles, corner bleed, halos, or mismatched black values. Verify the final composited result at desktop and mobile sizes.
- When a supplied visual is used inside a grid module, preserve its focal data point and graph silhouette through intentional `object-position` and crop behavior; never stretch the source or hide the meaningful part of the chart.

- Produce original ELBSAND audit screens, prompt maps, source views, comparison views, fact checks, and action briefs.
- Use real ELBSAND data where appropriate or clearly label illustrative examples.
- Never present an illustrative screen as a real client result.
- Use existing permitted brand icons only in accordance with their licenses and brand guidelines.
- Complex deterministic demonstrations may be rendered with Remotion; lightweight interactive states should remain native HTML/CSS/TypeScript.
- Give every media asset dimensions, a stable aspect ratio, an accessible label or alt text, and an optimized delivery format.

### Reserved AI visibility reference

- Internal reference file: `.codex-tmp/references/ai-visibility-index-reference.jpg`.
- Assigned routes: `/ai-sichtbarkeit/` and `/en/ai-visibility/`.
- Preserve its compositional idea: one large response-index summary, two immediately comparable system totals, and a compact platform table with response counts, page counts, and directional deltas.
- Rebuild the module as an original ELBSAND interface in semantic HTML/CSS/SVG. Do not publish the supplied screenshot as page media or reproduce its exact data, labels, or third-party interface treatment.
- Any demonstration values must be explicitly labelled as illustrative and must remain visually distinguishable from verified client results.

### Reserved fact-check composition reference

- Internal reference file: `.codex-tmp/references/factcheck-tilted-interface-reference.jpg`.
- Assigned routes: `/ki-faktencheck/` and `/en/ai-fact-checking/`.
- Preserve the composition principle: concise editorial copy on one side, substantial negative space, and one oversized interface plane entering the frame at an oblique angle with selective data highlights.
- Rebuild the scene as an original ELBSAND fact-check artifact. Do not publish the supplied screenshot, its copy, its exact score, or the referenced third-party interface.
- The interface plane needs a meaningful entrance and settled state, subtle depth/parallax on capable devices, stable clipping, and a static reduced-motion composition.

### Profound flow differentiation

- Shared tokens and navigation should make the network coherent, but no single eight-section scroll skeleton is permitted across every route.
- `/ki-wettbewerbsanalyse/` and `/en/ai-competitor-analysis/` use `https://www.tryprofound.com/features/answer-engine-insights/competitors` as the primary flow reference: focused hero, compact four-capability strip, one long multi-state benchmarking story, one shorter methodology/proof area, FAQ, and close. The locally measured desktop reference was approximately `7028px` high with major bands near `687`, `379`, `2029`, `842`, and `658px`.
- `/ki-faktencheck/` and `/en/ai-fact-checking/` also use `https://www.tryprofound.com/features/answer-engine-insights/factcheck` for page rhythm: visual-led hero, short trust transition, three substantial claim/source/action scenes, then FAQ. The locally measured reference was approximately `4878px` high with major bands near `1088`, `418`, `1779`, and `732px`.
- Source, sentiment, prompt, dashboard/monitoring, and crawlability routes must likewise inherit the closest relevant Profound feature flow rather than the order of the previous ELBSAND page.
- Page-length variation is intentional. A focused diagnostic leaf may be materially shorter than a broad benchmarking or prompt-research page when that matches the reference and search intent.

## Visual parity protocol for new service pages

The target is near-reference parity in composition, proportions, visual density, hierarchy, interaction, and motion while keeping every ELBSAND graphic original. Do not interpret "original" as permission to simplify a signature reference visual into a generic card or static placeholder.

Every service route requires at least one named, content-bearing signature visual plus meaningful motion. A route is visually incomplete when its distinguishing idea exists only as prose, bullets, a generic card grid, or a decorative background. The visual must model the page's actual subject—such as a source path, answer pattern, comparison, audit state, content relationship, or prioritized action—and mobile must recompose the relationship rather than merely scale the desktop scene.

### Reference assignment

- Every new service route receives one named primary Profound page reference and, when needed, one secondary reference for a specific module or motion behavior.
- Before implementation, record the reference URL, desktop screenshot, mobile screenshot, section order, media aspect ratios, component bounding boxes, and observed animation states.
- Map every reference module to an ELBSAND service artifact with the same narrative function and comparable visual weight.

### Graphic decomposition

For every major reference graphic, measure and document:

- outer aspect ratio and maximum width;
- internal grid, padding, gutters, alignment axes, and empty-space distribution;
- number of visible objects and their relative scale;
- surface hierarchy, borders, radii, shadows, overlays, and clipping;
- typography size, weight, line height, and label density;
- foreground/background contrast and accent distribution;
- initial, intermediate, hover/focus, and final motion states;
- animation duration, hold time, stagger, easing, blur, opacity, and travel distance;
- mobile recomposition rather than mere proportional shrinking.

Reject generic substitutions during decomposition. A collection of dark cards, glowing circles, abstract connector lines, or dashboard-like metrics does not count as parity unless those exact objects, scales, relationships, and crops are visible in the assigned Profound reference. The comparison is made against the reference screenshot, not against a general memory of “premium SaaS”.

### Route-by-route reconstruction loop

1. Select exactly one Profound source page for the ELBSAND route.
2. Capture the complete page at `1440px` and `375px`, plus every meaningful animated state.
3. Record exact section heights, content width, H1 size/line-height, column splits, UI panel bounds, overlap, and mobile order.
4. Rebuild the same visual hierarchy with ELBSAND branding, palette, truthful agency content, and original interface data.
5. Trigger all in-view states, then capture the ELBSAND page at the same viewports.
6. Compare both pages side by side. Reject generic substitute visuals, excess sections, missing interface layers, incorrect typography, or materially different page length.
7. Only after that route passes, start the next source-page reconstruction.

The `/ki-faktencheck/` correction is the baseline example: reference section heights `1088 / 418 / 1779 / 732px`; accepted ELBSAND reconstruction `1088 / 418 / 1781 / 732px`, with `56px / 64px` desktop H1 and the same overlapping overview panels, four-logo band, three split product rows, FAQ grid, and expanded footer rhythm.

### Original ELBSAND reconstruction

- Rebuild deterministic graphics in semantic HTML/CSS/SVG/TypeScript whenever possible. Use Remotion only when a real timeline/video is the correct medium.
- Preserve the reference composition and motion grammar, but replace Profound product data, interface labels, imagery, and proprietary motifs with truthful ELBSAND service artifacts.
- Keep comparable object counts, layer depth, crop behavior, visual density, and focal position. Do not replace a layered animated scene with one icon, one stock image, or a generic dashboard.
- Clearly label illustrative data or interfaces as examples when they could otherwise be mistaken for real client results.

### Measurable parity gate

A service page is not ready for rollout until:

- major section and media bounding boxes are within approximately `4%` of the assigned reference proportions at `1440px` and `375px`;
- signature media aspect ratios are within `2%` of the reference;
- repeated spacing and alignment axes differ by no more than `4px` where the same grid role applies;
- cross-column supporting content aligns to the corresponding semantic row (for example body copy to body copy), with a target top-edge difference of no more than `4px` in both DE and EN;
- motion duration and major keyframe timing are within `10%` of the observed reference behavior unless accessibility or performance requires a documented change;
- all meaningful reference states have an ELBSAND equivalent: default, hover/focus, in-view, completed, mobile, and reduced motion;
- overlay comparison shows the same focal balance, whitespace distribution, and reading order even though copy, colors, and graphic content are ELBSAND-native;
- no generic placeholder remains where the reference uses a meaningful explanatory or motion asset.

### Review artifacts

- Save desktop and mobile implementation screenshots for each route.
- Save a short state sequence or timestamped screenshots for each signature animation.
- Record any intentional deviation with its accessibility, performance, content, or brand reason.
- Do not mass-approve sibling pages merely because they share a template; each route receives its own content, graphic, responsive, and motion review.

## Senior implementation workflow

1. Maintain this reference and the Profound-to-ELBSAND page/content matrix.
2. Establish Inter, tokens, grid, header, buttons, surfaces, and motion utilities first.
3. Prototype the AI-system switcher, evidence demo, and stacked action cards before scaling.
4. Complete `/geo-optimierung/` in DE and EN as the gold-standard page.
5. Compare reference and implementation at 320, 375, 430, 768, 1024, 1280, 1440, and 1728px.
6. Review motion at start, 25%, 50%, 75%, and settled states.
7. Approve the gold-standard system before propagating it to the service network.
8. Build subpages in analysis, trust/source, implementation, and ongoing-care batches.
9. Add the complete internal-link graph, metadata, hreflang, schema, sitemap, and route tests.
10. Run build, responsive screenshots, keyboard/focus testing, reduced-motion checks, accessibility smoke tests, link checks, and Lighthouse.

## Acceptance criteria

- The implementation has the same level of visual discipline and motion polish as the reference, without looking like a generic SaaS template.
- Grid, type, cards, spacing, and motion use documented tokens rather than one-off guesses.
- Original ELBSAND assets have equivalent visual weight and explanatory value to the reference assets.
- Mobile is intentionally recomposed and has no overflow at 320px or above.
- DE and EN have equivalent content depth and page structure.
- No copied Profound media or verbatim copy ships in the repository.
- No fake client proof ships.
- Reduced-motion, keyboard navigation, contrast, performance, and semantic HTML remain production quality.

### Regression lessons from the dark-theme rollout

- Supplied portfolio references currently function as placeholders and do not belong in GEO/AI service-page trust bands, case-study modules, proof cards, or repeated closing CTAs. Use them only in the dedicated homepage/reference context until the user approves them as publishable case studies.
- Profound supplies composition, spacing, hierarchy, and motion references; it does not replace ELBSAND brand tokens. Primary CTAs always use ELBSAND `#b74622`, the project Inter family, `15px / 650`, and a `48px` minimum height on desktop and mobile unless a reviewed component token explicitly says otherwise.
- Long Profound-style two-column enumerations retain their scroll behavior: the explanatory column stays sticky on desktop while the reading-side rows reveal sequentially and communicate the current row. A static left heading plus already-visible right list is not parity.
- Preserve supplied logo colors. Theme adaptation belongs on the surrounding surface, not as a global filter on brand assets.
- Repeated cards must share one typographic and spatial grammar. A statistic is content inside the system, not permission to reintroduce an unrelated display style.
- Theme changes must preserve interaction quality. Project-media zoom, image treatment, overlays, arrows, buttons, links, focus rings, and card feedback are individually checked after every shared-token change.
- Translucent labels and badges require contrast checks against their composited background.
- Animated components are tested as sequences, not screenshots: observe multiple states, reduced motion, visibility changes, and layout stability.
- Responsive approval includes real-copy overflow checks at all required project widths; headings do not use forced single-line behavior without measured proof.
- Number-to-check transitions use one shared circular position: the number remains readable until the check drawing begins, then crossfades without an empty intermediate state.
- Signature method and process sections must not default to a static equal-column card grid. Pair the narrative with one meaningful service artifact whose state changes as the visitor scrolls, focuses, or selects the corresponding step.
- A process visualization needs materially different states, not the same card with swapped copy. Each state should change composition, data relationships, or task progress while retaining one stable visual frame.
- Product/demo UI uses at least `14px` for information that must be read and `16–17px` for explanatory body copy. `10–11px` is reserved for short, non-essential metadata such as uppercase frame labels or status markers.
- Sticky process scenes are inspected at every state on desktop and mobile. The active narrative and active visual must agree, and the visual may not obscure the step copy or create horizontal overflow.
- On signature service pages, three supporting points must not remain a detached bullet list beside editorial copy. Their relationship becomes part of a meaningful artifact such as a signal map, source trace, comparison, or prioritised action sequence; mobile receives its own unboxed recomposition.
