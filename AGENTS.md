# AGENTS.md

This file defines durable project guidance for coding agents working inside this website project. Keep changes aligned with these rules unless the user explicitly overrides them.

## Project

- Official brand: ELBSAND Design Studio.
- Logo/header wordmark: ELBSAND only.
- Product: bilingual boutique web studio website.
- Primary market: local businesses in Germany, with Dresden/Saxony as the first local SEO anchor and Germany/DACH as the broader scale path.
- Public positioning: personal-led premium design studio for web design, web development, redesigns, concept, launch, SEO, and modern AI/GEO visibility.
- Tone: German-first, polished `du`, calm, confident, not loud, not overly technical.
- Hero headline direction: `Websites, die Form, Funktion und Sichtbarkeit verbinden.`
- Hero explanation direction: `ELBSAND entwickelt individuelle digitale Auftritte für lokale Unternehmen - von Strategie und Design bis Entwicklung, SEO und moderner AI-Sichtbarkeit.`
- Primary CTA: `Website-Check anfragen`.
- Secondary CTA: `Referenzen ansehen`.
- Pricing: inquiry-only.
- Temporary contact email: pascal.misoph@gmail.com.

## Brand And Content Rules

- Do not use the founder surname in the brand name.
- Use `ELBSAND` as the strong wordmark in logo/header contexts.
- Use `ELBSAND Design Studio` in metadata, footer, imprint, and suitable explanatory contexts.
- Include Pascal's personal name for credibility, preferably in About/team context rather than making the hero depend on him.
- Pauline may appear as `Studio Support & Editorial Operations`; she should not be presented as client-facing or as a core delivery lead.
- Zula and Nali may appear as a small humanizing detail in the team/footer area only.
- Avoid explicit claims like `premium wirken`; the visual design should communicate quality indirectly.
- Avoid awkward generic claims such as `Websites, die gefunden und gewaehlt werden`. Positioning must sound like a real studio, not AI-generated marketing copy.
- GEO must not dominate the hero. It should be explained later as part of modern visibility and the next step in search behavior.
- Mention ChatGPT, Claude, and Perplexity only in a restrained GEO explainer area.
- Do not create fake case studies. Use only real references supplied by the user: Eurosummer, Pauline Paternoga, Paw & Sage, Ochre & Chrome.
- If project details are unknown, use minimal honest placeholders and label them as coming soon or in progress.

## Visual Direction

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

## Bilingual Requirements

- German is the primary language.
- English must be fully functional, not partial placeholder content.
- Use a clear header language switcher: `DE | EN`.
- German and English pages should preserve equivalent structure and intent, but translations may be idiomatic rather than literal.
- Use locale-appropriate metadata, `lang` attributes, canonical URLs, and hreflang once routing exists.

## SEO And GEO Requirements

- Build for technical SEO from the start: semantic HTML landmarks, one clear H1 per page, descriptive titles and meta descriptions, clean URLs, accessible internal links, optimized images with dimensions and alt text, sitemap and robots support once the site has routes.
- Prepare for structured data: Organization or ProfessionalService, LocalBusiness where legally/strategically appropriate, WebSite, BreadcrumbList for multi-page routes, and Article for future insights.
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
- Comments should explain non-obvious decisions, not restate code.
- Keep generated content, legal copy, and placeholder content clearly identifiable.
- Do not commit secrets, API keys, analytics tokens, or private contact credentials.

## Verification

Before calling work complete, run the relevant checks available in the project: formatting/linting, type checks, production build, responsive visual inspection, accessibility smoke checks, and link/route checks.

For frontend changes, use browser inspection or screenshots where possible. Specifically verify header and language switcher, hero framing, CTA visibility, image loading, no text overflow, no incoherent overlaps, reduced-motion behavior, and keyboard focus visibility.

## Git And Deployment

- GitHub target user: PascalMisoph.
- Deployment target: Vercel, later.
- Do not configure deployment until requested.
- Keep commits focused and descriptive once Git is initialized.
- Do not publish private work, legal address details, or contact details without explicit confirmation.
- Do not publish private legal address details in public repository files. Add imprint/legal address content only in dedicated legal pages after explicit review.

## Decision Log

- 2026-07-22: Brand set to `ELBSAND Design Studio`; header wordmark set to `ELBSAND`.
- 2026-07-22: Chosen stack direction `Astro + TypeScript`.
- 2026-07-22: Primary CTA changed to `Website-Check anfragen`.
- 2026-07-22: Secondary CTA changed to `Referenzen ansehen`.
- 2026-07-22: Hero direction set to `Websites, die Form, Funktion und Sichtbarkeit verbinden.`
- 2026-07-22: GEO stays out of the hero focus and gets its own explanatory section.
- 2026-07-22: Avoid explicit `premium wirken` phrasing.
