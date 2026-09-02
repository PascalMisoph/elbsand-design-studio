# AGENTS.md

This file defines durable project guidance for coding agents working inside this website project. Keep changes aligned with these rules unless the user explicitly overrides them.

## Project

- Official brand: Paternoga SEO & GEO Studio.
- Logo/header wordmark: PATERNOGA with `SEO & GEO Studio` as its descriptor.
- Product: bilingual specialist website for SEO, GEO, AI Search and AI visibility.
- Primary market: local businesses in Germany, with Dresden/Saxony as the first local SEO anchor and Germany/DACH as the broader scale path.
- Public positioning: personal-led premium design studio for web design, web development, redesigns, concept, launch, SEO, and modern AI/GEO visibility.
- Tone: German-first, polished `du`, calm, confident, not loud, not overly technical.
- Hero headline direction: `Websites, die Form, Funktion und Sichtbarkeit verbinden.`
- Hero explanation direction: `PATERNOGA entwickelt individuelle digitale Auftritte für lokale Unternehmen - von Strategie und Design bis Entwicklung, SEO und moderner AI-Sichtbarkeit.`
- Primary CTA: `Website-Check anfragen`.
- Secondary CTA: `Referenzen ansehen`.
- Pricing: inquiry-only.
- Public contact email: kontakt@paternoga-seo-geo.de.
- Core claim: `Be the brand AI thinks of first.`

## Brand And Content Rules

- Treat `Paternoga SEO & GEO Studio` as the organization brand; do not conflate it with any unrelated person entity sharing the surname.
- Use `PATERNOGA` as the strong wordmark in logo/header contexts.
- Use `Paternoga SEO & GEO Studio` in metadata, footer, imprint, and suitable explanatory contexts.
- Include Pascal's personal name for credibility, preferably in About/team context rather than making the hero depend on him.
- Pauline may appear as `Studio Support & Editorial Operations`; she should not be presented as client-facing or as a core delivery lead.
- Zula and Nali may appear as a small humanizing detail in the team/footer area only.
- Avoid explicit claims like `premium wirken`; the visual design should communicate quality indirectly.
- Avoid awkward generic claims such as `Websites, die gefunden und gewaehlt werden`. Positioning must sound like a real studio, not AI-generated marketing copy.
- Visible interface sequences never use leading zeroes. Write `1`, `2`, `3`, not `01`, `02`, `03`, across cards, projects, steps, demos, carousels, and page content. Dates, phone numbers, technical codes, and source data are exempt.
- GEO must not dominate the hero. It should be explained later as part of modern visibility and the next step in search behavior.
- Mention ChatGPT, Claude, and Perplexity only in a restrained GEO explainer area.
- Do not create fake case studies. Use only real references supplied by the user: Eurosummer, Pauline Paternoga, Paw & Sage, Ochre & Chrome.
- If project details are unknown, use minimal honest placeholders and label them as coming soon or in progress.

## Visual Direction

- `design.md` is the required detailed visual and motion reference for all frontend work. Read it before changing shared styles, layout, cards, typography, animation, GEO pages, or marketing-page structure.
- The public Profound marketing site is the primary reference for grid discipline, spacing, component proportions, content depth, page flow, motion quality, and internal-link architecture. Translate these qualities into the PATERNOGA palette and service model; do not reuse Profound-owned copy or media.
- Use self-hosted Inter Variable as the primary type family for the new Profound-referenced product/GEO system. Retain editorial serif usage only where it remains an intentional PATERNOGA accent.
- Motion is a first-class design requirement. Signature areas must implement the timing, blur/reveal, focus, stacking, and reduced-motion rules documented in `design.md`; do not substitute generic fade-ins.
- Every new service page must include at least one original, content-relevant signature visual and a purposeful motion behavior. Text-only sections, generic icon cards, or decorative filler do not satisfy this requirement; the visual must explain a relationship, state, comparison, path, source, or outcome and must receive its own mobile composition.
- Do not push every service route through one identical long-scroll template. Keep the Profound-derived global shell consistent, but assign route-specific hero/media placement, module count, section order, scroll mechanism, and page length from the closest Profound feature reference. Sibling pages may share primitives; they may not feel like copy-swapped clones.
- A generic dark dashboard, orbit, node graph, metric card, or line animation is not a valid substitute for a measured Profound reference visual. Reconstruct the actual visible object hierarchy, panel overlap, interface density, crop, scale, typography, and mobile order from the assigned page. If a side-by-side comparison reads as generic AI/SaaS artwork, the route fails review even when its colors and topic are correct.
- The homepage AI-system switcher must remain fully visible in the first viewport on desktop and mobile. Treat it as part of the hero message, not as the next section.
- The landing page uses the continuous PATERNOGA charcoal material system documented in `design.md`; do not reintroduce alternating large light page bands without an explicit reason.
- Reference mood: aurum-design.de inspired luxury-agency feel, but do not clone assets, exact brand identity, copy, or protected design.
- Overall feel: minimalist, editorial, warm, spacious, sophisticated, internationally polished with a quiet Dresden/Saxony root.
- Apple-like means disciplined craft, not copying apple.com. Use clear hierarchy, exact spacing, refined materials, calm motion, excellent image art direction, and high component consistency.
- Avoid brutalism, dark-heavy themes, generic tech startup styling, neon gradients, dense SaaS dashboards, and overdecorated card grids.
- Avoid common AI-generated UI tells: purple/blue gradients, glass cards everywhere, boxed sections inside boxed sections, generic centered hero plus three-card feature row, decorative blobs, random dashboard mockups, meaningless charts, hollow buzzwords, and interchangeable stock imagery.
- Prefer warm off-white backgrounds, charcoal text, refined neutral surfaces, and one restrained accent color.
- Use premium editorial image crops from freely usable stock sources for the first mock-up.
- Possible local-root imagery: Dresden Frauenkirche, Saxony wine region, studio/work details. Keep this subtle and avoid tourist-brochure treatment.

## UX And Conversion

- First screen must immediately answer who the studio helps, what it does, why it is credible, and what action to take next.
- The hero should be subtle but immediately understandable; avoid agency boilerplate like `Webdesign, SEO & GEO fuer lokale Unternehmen`.
- Keep CTAs clear and concrete. Primary CTA should lead toward a short website check/request flow.
- Navigation must be predictable: Services, Referenzen, Prozess, About, Kontakt, language switcher.
- Do not make users hunt for contact. Header CTA and final CTA are required.
- Design for scanning. Use meaningful headings, short paragraphs, and information-rich labels.
- Avoid feature-explaining filler inside the UI. The content should sell outcomes and clarity, not describe the interface.
- UI descriptions: Do not add subtitles, helper text, or descriptive copy beneath headings, labels, cards, or settings by default. Prefer one concise, self-explanatory heading or label. Only add supporting copy when the user explicitly asks for it or when it is necessary to prevent misunderstanding or error, and never use it to restate the heading.

## Bilingual Requirements

- German is the primary language.
- English must be fully functional, not partial placeholder content.
- Use a clear header language switcher: `DE | EN`.
- German and English pages should preserve equivalent structure and intent, but translations may be idiomatic rather than literal.
- Use locale-appropriate metadata, `lang` attributes, canonical URLs, and hreflang once routing exists.
- The binding GEO route inventory and exact DE/EN slug mapping live in `design.md`. The complete localized network contains 28 service pages; do not create alternative English slugs ad hoc.

## SEO And GEO Requirements

- Build for technical SEO from the start: semantic HTML landmarks, one clear H1 per page, descriptive titles and meta descriptions, clean URLs, accessible internal links, optimized images with dimensions and alt text, sitemap and robots support once the site has routes.
- Prepare for structured data: Organization or ProfessionalService, LocalBusiness where legally/strategically appropriate, WebSite, BreadcrumbList for multi-page routes, and Article for future insights.
- Use the binding root/subtopic/leaf GEO taxonomy in `design.md`. Root pages link to their subtopics; parent subtopics link to their leaves; leaves link back to their canonical parent and to genuinely related siblings. Breadcrumbs reflect this logical path even when public URLs remain flat.
- Give every page one canonical taxonomy parent. Avoid excessive depth, overlapping ownership, inconsistent route naming, and breadcrumbs that contradict the visible information architecture.
- Metadata must reflect taxonomy level and unique page intent; do not generate indistinguishable title/description boilerplate across the service network.
- GEO visibility should be supported through crawlable, well-structured, factual content, not hidden prompt-style text or manipulative snippets.
- Future local SEO landing pages may include `/webdesign-dresden/`, `/webdesign-sachsen/`, `/seo-dresden/`, `/website-relaunch/`, and `/geo-optimierung/`.
- Do not over-niche the homepage. Keep it useful for local businesses broadly.

## Accessibility

- Meet WCAG 2.2 AA as the baseline.
- Maintain sufficient color contrast for text, controls, focus rings, and link states.
- All interactive elements must be keyboard accessible and visible on focus.
- Do not rely on hover-only behavior for important content.
- Use real buttons for actions and real links for navigation.
- Respect `prefers-reduced-motion`.
- Form controls must have labels, clear error states, and accessible descriptions when forms are added.

## Responsive Design

- The site must feel intentionally designed on mobile, tablet, laptop, desktop, and wide desktop.
- Do not simply shrink desktop layouts. Recompose sections for small screens.
- Avoid viewport-width font scaling. Use stable type scales with responsive breakpoints or clamp only where carefully controlled.
- No horizontal scrolling at 320px and above.
- Text must not overlap, overflow buttons, or collide with media at any supported viewport.
- Use stable dimensions for fixed-format UI elements such as headers, logos, buttons, image frames, cards, and icon rows.
- Test target widths at minimum: 320, 375, 430, 768, 1024, 1280, 1440, and 1728.

## Frontend Engineering Standards

- Preferred stack: Astro + TypeScript + plain CSS or scoped component CSS.
- Keep JavaScript minimal. Add framework islands only for real interaction.
- Favor semantic, maintainable components over decorative abstraction.
- Reuse before recreating: before implementing a repeated visual structure, search the existing components, templates, and styles for the canonical implementation.
- A repeated visual structure must have one source of truth. New content variants must consume the existing component or a shared primitive through typed data/props; do not copy its markup and approximate its CSS in a second route.
- If a matching structure is still embedded in a page, extract it into a reusable component before adding another consumer. The extraction must preserve the existing canonical consumer visually and behaviorally.
- Introduce a component variant only for a real semantic or interaction difference. Keep shared layout, typography, spacing, divider, responsive, motion, and token rules in the shared component; document intentional exceptions.
- Use CSS custom properties for color, spacing, typography, borders, and z-index.
- Do not nest cards inside cards. Use cards only for individual repeated items, modals, or framed tools.
- Keep section layouts full-width or unframed with a constrained inner wrapper.
- Use optimized image formats and lazy-load non-critical images.
- Avoid layout shift by specifying image dimensions, aspect ratios, and stable component sizes.
- No one-note palettes. The page should not be dominated by a single hue family.
- Use icons only where they clarify controls or recognizable brands. Do not invent unnecessary UI symbols.
- Shadows and depth must be intentional: subtle elevation, soft contact shadows, and material contrast only where they clarify interaction or composition.

## Performance

- Target excellent Lighthouse performance on mobile and desktop.
- Keep first-page JavaScript small.
- Fonts must be chosen and loaded carefully; prefer self-hosted or well-supported open-license fonts.
- Use font-display strategies that avoid invisible text.
- Avoid render-blocking scripts.
- Optimize images before shipping.
- Keep animations subtle and inexpensive.

## Code Quality

- Use TypeScript for typed code.
- Keep files organized by purpose: components, layouts, pages, styles, content, assets.
- Prefer explicit names over clever abbreviations.
- Avoid large monolithic components once sections become complex.
- Follow DRY and single-source-of-truth principles for UI code: duplicated section markup or CSS is a defect when the sections share structure, behavior, and visual rules.
- Before expanding a page with a familiar section, compare the new consumer with the canonical component at desktop, mobile, hover/focus, active, and reduced-motion states. The existing consumer must remain unchanged unless the user explicitly requests a redesign of the canonical component.
- When related duplicate implementations are discovered outside the current task, report their locations and defer unrelated refactors rather than silently widening scope.
- Comments should explain non-obvious decisions, not restate code.
- Keep generated content, legal copy, and placeholder content clearly identifiable.
- Do not commit secrets, API keys, analytics tokens, or private contact credentials.

## Verification

Before calling work complete, run the relevant checks available in the project: formatting/linting, type checks, production build, responsive visual inspection, accessibility smoke checks, and link/route checks.

For frontend changes, use browser inspection or screenshots where possible. Specifically verify header and language switcher, hero framing, CTA visibility, image loading, no text overflow, no incoherent overlaps, reduced-motion behavior, and keyboard focus visibility.

For every new service route, follow the binding Visual Parity Protocol in `design.md`. Assign a concrete Profound page reference, measure its composition and motion, reconstruct an original PATERNOGA equivalent, and require desktop/mobile/state comparison before approval. Shared templates do not waive route-specific visual review.
- Finish and compare one assigned Profound route at a time. Do not mass-propagate an unapproved visual abstraction to sibling pages.

### Theme And Interaction Regression Rules

- Do not reuse the current portfolio placeholders as customer proof, logos, case studies, trust bands, or routine CTA destinations on GEO/AI service pages. Keep them in the dedicated reference context only until explicitly approved as real publishable cases.
- Do not copy Profound CTA color or micro-typography into PATERNOGA pages. The default primary CTA is PATERNOGA `#b74622`, Inter, `15px / 650`, with a `48px` minimum control height at every viewport.
- When the assigned Profound reference uses a sticky reading column and sequentially activated list rows, preserve that scroll relationship; a static enumeration is a regression even when its screenshot looks similar.
- Never apply blanket `filter`, `opacity`, `mix-blend-mode`, grayscale, inversion, or recoloring rules to logos or supplied project media during a theme conversion. Preserve original brand colors unless an asset-specific treatment has been intentionally reviewed.
- Do not approve a dark-theme conversion from static screenshots alone. For every affected interactive component, verify default, hover, keyboard focus, active/selected where applicable, mobile, and `prefers-reduced-motion` states.
- Re-test existing image zoom, overlay, arrow, card elevation, link, and button transitions after shared color/token/background changes. A visual redesign must not silently remove previously working interaction feedback.
- Check text contrast against the final composited background, including translucent badges and cards. Never infer contrast from token names or raw foreground colors.
- Statistic cards within a repeated grid must use the same typography family, scale logic, alignment, padding, border, radius, and surface hierarchy as sibling cards unless the deliberate exception is documented in `design.md`.
- Check every edited heading at 320, 375, 430, 768, 1024, 1280, 1440, and 1728px. Remove forced `white-space: nowrap` whenever translated or real copy can exceed its measured container.
- For timed UI such as system rotators, verify at least three consecutive states in a real browser. Also verify behavior with the tab hidden and with reduced motion enabled.
- Keep the homepage explainer video centered and subordinate to the hero message (`920px` maximum desktop width unless `design.md` is intentionally revised).
- Maintain the homepage major-section rhythm at `112px` desktop and `80px` mobile. Any exception must be intentional and visually verified against both adjacent sections.
- In multi-column narrative sections, align related secondary lists, facts, or controls to the exact content baseline they support, normally the start of the corresponding body copy. Do not use generic `align-self: end/center` when adjacent text height is variable; verify bounding-box alignment in both languages.
- Do not present a signature method or process as a static equal-column text grid. Use a stateful service artifact with distinct scroll-, focus-, or selection-driven states, and verify that the active visual always matches the active semantic step.
- Keep essential product/demo UI text at `14px` or larger and explanatory process copy at `16–17px` or larger. Smaller type is limited to short, non-essential metadata.
- Do not leave a detached three-point bullet list beside major narrative copy on signature service pages. Encode the relationship as a meaningful signal, source, comparison, or action visual, with an intentionally recomposed mobile presentation.
- Treat the supplied GEO Audit visibility-score graph as the minimum quality bar for future analytical visuals: controlled near-black compositing, meaningful data geometry, subtle grid structure, a precise focal state, and no generic placeholder charts. Match its density and finish without stretching assets or introducing background bleed at card edges.

## Git And Deployment

- GitHub target user: PascalMisoph.
- Deployment target: Vercel, later.
- Do not configure deployment until requested.
- Keep commits focused and descriptive once Git is initialized.
- Do not publish private work, legal address details, or contact details without explicit confirmation.
- Do not publish private legal address details in public repository files. Add imprint/legal address content only in dedicated legal pages after explicit review.

## Decision Log

- 2026-08-08: Replaced the GEO Audit four-column method grid with a scroll-driven sticky audit artifact containing four distinct visual states and a deliberate mobile recomposition.
- 2026-08-09: Established the supplied GEO Audit visibility-score graph as the binding minimum visual-quality reference for future analytical graphics and dashboard modules.
- 2026-08-08: Installed the MotionSites MCP connector in the local Codex host configuration; newly launched Codex sessions can load it after the client refreshes its MCP inventory.
- 2026-08-08: Adopted a shallow root/subtopic/leaf taxonomy for the GEO network, with logical breadcrumbs, level-specific metadata, and taxonomy-aware internal linking.
- 2026-08-08: Reserved the supplied AI response-index screenshot as a non-shipping composition reference for the localized AI Visibility pages; implementation must be an original, clearly illustrative PATERNOGA interface.
- 2026-08-08: UI descriptions are omitted by default and are only added when they prevent real ambiguity or error without restating the heading.
- 2026-08-08: Added `design.md` as the binding Profound-referenced visual, motion, page-flow, and internal-link specification for the PATERNOGA redesign.
- 2026-08-08: Inter Variable selected as the primary family for the new product/GEO design system; PATERNOGA editorial serif remains optional and restrained.
- 2026-08-08: Approved a complete GEO service topic network in DE and EN, subject to unique-intent/content-quality checks before splitting routes.
- 2026-07-22: Brand set to `Paternoga SEO & GEO Studio`; header wordmark set to `PATERNOGA`.
- 2026-07-22: Chosen stack direction `Astro + TypeScript`.
- 2026-07-22: Primary CTA changed to `Website-Check anfragen`.
- 2026-07-22: Secondary CTA changed to `Referenzen ansehen`.
- 2026-07-22: Hero direction set to `Websites, die Form, Funktion und Sichtbarkeit verbinden.`
- 2026-07-22: GEO stays out of the hero focus and gets its own explanatory section.
- 2026-07-22: Avoid explicit `premium wirken` phrasing.
