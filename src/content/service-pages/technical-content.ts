import type { ServiceLocale, ServicePageContent } from "../service-pages";

export type TechnicalDemoVariant = Extract<
  ServicePageContent["demo"]["variant"],
  "technical-graph" | "crawl-path" | "citation-document" | "content-refresh"
>;

const technicalGeoOptimizationDe: ServicePageContent = {
  lang: "de",
  slug: "technische-geo-optimierung",
  alternateDePath: "/technische-geo-optimierung/",
  alternateEnPath: "/en/technical-geo-optimization/",
  meta: {
    title: "Technische GEO-Optimierung für klare KI-Signale | ELBSAND",
    description: "Technische GEO-Optimierung verbindet semantische HTML-Strukturen, schnelle Auslieferung, strukturierte Fakten und nachvollziehbare Crawlpfade für KI-Suchsysteme."
  },
  breadcrumb: { home: "Start", hub: "GEO-Optimierung", current: "Technische GEO-Optimierung" },
  eyebrow: "Technische GEO-Optimierung",
  title: "Eine Website, deren Inhalte Maschinen sauber lesen können.",
  lead: "Wir ordnen Struktur, Geschwindigkeit und Fakten so, dass Suchmaschinen und KI-Systeme dein Angebot zuverlässig erreichen und einordnen können. Ohne technische Showeffekte, mit nachvollziehbaren Änderungen im bestehenden System.",
  primaryCta: "Technischen Check anfragen",
  secondaryCta: "Methode ansehen",
  outcomes: [
    { label: "Struktur", title: "Zusammenhänge sichtbar machen", text: "Semantik, Überschriften und interne Verbindungen geben jeder Seite eine klare Aufgabe." },
    { label: "Zugriff", title: "Erreichbarkeit prüfen", text: "Serverantworten, robots-Regeln und Crawlpfade zeigen, wo Inhalte ankommen oder abbrechen." },
    { label: "Grundlage", title: "Fakten anschlussfähig halten", text: "Strukturierte Daten und konsistente Unternehmensangaben unterstützen eine belastbare Einordnung." }
  ],
  demo: {
    variant: "technical-graph",
    eyebrow: "Illustrative Strukturansicht",
    title: "Eine technische Graphik für Inhalt, Quelle und Kontext",
    note: "Illustratives Beispiel – keine echte Website-Prüfung und kein Kundenergebnis.",
    scoreLabel: "Beziehungen mit klarer Zuordnung",
    score: "18 / 24",
    checks: [
      { label: "Semantische Seitenstruktur", detail: "H1, Abschnitte und Services folgen einer verständlichen Inhaltslogik.", status: "clear" },
      { label: "Strukturierte Fakten", detail: "Kontakt-, Standort- und Leistungsdaten sind teilweise maschinenlesbar verknüpft.", status: "review" },
      { label: "Technischer Antwortweg", detail: "Eine Weiterleitungskette verlängert den Weg zu einer zentralen Leistungsseite.", status: "open" },
      { label: "Interne Kontextpfade", detail: "Verwandte Leistungs- und Wissensseiten verweisen nachvollziehbar aufeinander.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "Technik mit redaktioneller Wirkung",
      title: "Semantik ist die Ordnung hinter der sichtbaren Seite.",
      text: "Eine KI kann den Text einer Seite sehen und trotzdem den Zusammenhang verfehlen, wenn Überschriften, Abschnitte und Links keine eindeutige Hierarchie bilden. Wir übersetzen deine fachliche Struktur in sauberes HTML und lesbare interne Pfade.",
      points: ["Eine H1 mit klarer Seitenaufgabe", "Abschnitte, die Fragen vollständig beantworten", "Links zwischen Eltern-, Detail- und Kontaktseiten"]
    },
    {
      eyebrow: "Technische Zugänglichkeit",
      title: "Schnelle Auslieferung bleibt ein Vertrauenssignal.",
      text: "GEO beginnt nicht mit einem Texttrick. Es beginnt damit, dass relevante Inhalte ohne unnötige Barrieren ausgeliefert, gerendert und gefunden werden können. Wir prüfen Ladewege, Statuscodes, Indexierbarkeit und strukturierte Daten als zusammenhängendes System.",
      points: ["Server- und Rendering-Signale", "robots.txt, Canonicals und erreichbare URLs", "Schema-Markup mit Fakten statt dekorativer Felder"]
    }
  ],
  method: {
    eyebrow: "Methode",
    title: "Vier Schritte vom technischen Befund zur sauberen Struktur",
    steps: [
      { title: "System kartieren", text: "Wir erfassen zentrale Templates, URLs, Statuscodes und die Wege, über die Inhalte ausgeliefert werden." },
      { title: "Semantik schärfen", text: "Überschriften, Landmarken, Links und Inhaltsblöcke erhalten eine klare, redaktionell verständliche Hierarchie." },
      { title: "Fakten verknüpfen", text: "Strukturierte Daten und sichtbare Unternehmensangaben werden auf Konsistenz und Belegbarkeit geprüft." },
      { title: "Änderungen verifizieren", text: "Wir testen Rendering, Geschwindigkeit, Crawlpfade und die Wirkung der Änderungen anhand definierter Prüffragen." }
    ],
    visual: {
      frameLabel: "Illustrativer Technik-Graph",
      statusLabel: "Struktur wird geprüft",
      scenes: [
        { metric: "32", label: "Seitenknoten im Beispiel", items: ["Startseite", "Leistung", "Standort", "Kontakt"] },
        { metric: "4", label: "technische Ebenen verbunden", items: ["HTML", "Server", "Schema", "Links"] },
        { metric: "11", label: "Faktenbeziehungen geprüft", items: ["Angebot", "Ort", "Person", "Quelle"] },
        { metric: "6", label: "Änderungen zur Verifikation", items: ["Rendern", "Antwort", "Crawl", "Recheck"] }
      ]
    }
  },
  related: {
    eyebrow: "Weiterführend",
    title: "Technik im GEO-Zusammenhang weiterdenken",
    items: [
      { title: "AI-Crawlability", text: "Bot-Zugriff, Serverantworten und erreichbare Inhaltswege als fokussierte Prüfung.", href: "/ai-crawlability/" },
      { title: "GEO Audit", text: "Antworten, Quellen und technische Voraussetzungen in einer gemeinsamen Ausgangslage betrachten.", href: "/geo-audit/" },
      { title: "GEO Monitoring", text: "Technische und inhaltliche Veränderungen regelmäßig beobachten und dokumentieren.", href: "/geo-monitoring/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen zur technischen GEO-Optimierung",
    items: [
      { question: "Ist technische GEO-Optimierung nur SEO mit einem neuen Namen?", answer: "Nein. SEO-Grundlagen wie HTML, Performance und Indexierbarkeit bleiben wichtig. Die technische GEO-Perspektive ergänzt sie um die Frage, ob Inhalte, Fakten und Zusammenhänge für antwortende Systeme klar zugänglich sind." },
      { question: "Muss die Website komplett neu gebaut werden?", answer: "Nicht automatisch. Wir prüfen zuerst Templates, CMS und bestehende Pfade. Oft lassen sich die wichtigsten Verbesserungen gezielt in Struktur, Auslieferung und Markup umsetzen." },
      { question: "Arbeitet ihr auch mit bestehenden CMS?", answer: "Ja. Der Ansatz richtet sich nach dem vorhandenen System und seinen Möglichkeiten. Die Empfehlungen bleiben nachvollziehbar, auch wenn einzelne technische Änderungen durch ein CMS begrenzt sind." },
      { question: "Garantiert die Optimierung Erwähnungen in KI-Antworten?", answer: "Nein. Sie verbessert technische Voraussetzungen und Klarheit, kann aber keine bestimmte Antwort, Position oder Empfehlung eines externen Systems garantieren." }
    ]
  },
  closing: {
    eyebrow: "Technik besprechen",
    title: "Klarheit für die nächste technische Entscheidung.",
    text: "Schick uns deine Website und die Frage, an der du gerade festhängst. Wir ordnen ein, welche technische Arbeit für dein GEO-Ziel sinnvoll ist und welche nicht.",
    cta: "Technischen Check anfragen"
  }
};

const technicalGeoOptimizationEn: ServicePageContent = {
  lang: "en",
  slug: "technical-geo-optimization",
  alternateDePath: "/technische-geo-optimierung/",
  alternateEnPath: "/en/technical-geo-optimization/",
  meta: {
    title: "Technical GEO Optimization for Clear AI Signals | ELBSAND",
    description: "Technical GEO optimization connects semantic HTML, fast delivery, structured facts and traceable crawl paths so AI search systems can access and interpret your website."
  },
  breadcrumb: { home: "Home", hub: "GEO optimisation", current: "Technical GEO optimization" },
  eyebrow: "Technical GEO optimization",
  title: "A website whose content machines can read clearly.",
  lead: "We align structure, speed and facts so search engines and AI systems can reach and interpret your offer reliably. No technical theatre, just traceable changes within the system you already use.",
  primaryCta: "Request a technical check",
  secondaryCta: "See the method",
  outcomes: [
    { label: "Structure", title: "Make relationships visible", text: "Semantics, headings and internal connections give every page a clear job." },
    { label: "Access", title: "Verify reachability", text: "Server responses, robots rules and crawl paths show where content arrives or stops." },
    { label: "Foundation", title: "Keep facts connected", text: "Structured data and consistent business details support a dependable interpretation." }
  ],
  demo: {
    variant: "technical-graph",
    eyebrow: "Illustrative structure view",
    title: "A technical graph for content, source and context",
    note: "Illustrative example – not a real website review or client result.",
    scoreLabel: "Relationships mapped clearly",
    score: "18 / 24",
    checks: [
      { label: "Semantic page structure", detail: "H1, sections and services follow an understandable content logic.", status: "clear" },
      { label: "Structured facts", detail: "Contact, location and service details are partly connected for machines.", status: "review" },
      { label: "Technical response path", detail: "A redirect chain lengthens the route to a central service page.", status: "open" },
      { label: "Internal context paths", detail: "Related service and knowledge pages point to one another with intent.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "Technical with editorial impact",
      title: "Semantics are the order behind the visible page.",
      text: "An AI system can see a page’s text and still miss the relationship when headings, sections and links lack a clear hierarchy. We translate your expertise into clean HTML and readable internal paths.",
      points: ["One H1 with a clear page job", "Sections that answer questions completely", "Links between parent, detail and contact pages"]
    },
    {
      eyebrow: "Technical accessibility",
      title: "Fast delivery remains a trust signal.",
      text: "GEO does not begin with a copy trick. It begins when relevant content can be delivered, rendered and reached without unnecessary barriers. We review loading paths, status codes, indexability and structured data as one system.",
      points: ["Server and rendering signals", "robots.txt, canonicals and reachable URLs", "Schema markup with facts instead of decorative fields"]
    }
  ],
  method: {
    eyebrow: "Method",
    title: "Four steps from technical finding to clear structure",
    steps: [
      { title: "Map the system", text: "We capture key templates, URLs, status codes and the routes through which content is delivered." },
      { title: "Sharpen semantics", text: "Headings, landmarks, links and content blocks receive a clear, editorially understandable hierarchy." },
      { title: "Connect facts", text: "Structured data and visible business details are checked for consistency and support." },
      { title: "Verify changes", text: "We test rendering, speed, crawl paths and the effect of changes against defined review questions." }
    ],
    visual: {
      frameLabel: "Illustrative technical graph",
      statusLabel: "Structure under review",
      scenes: [
        { metric: "32", label: "page nodes in the example", items: ["Homepage", "Service", "Location", "Contact"] },
        { metric: "4", label: "technical layers connected", items: ["HTML", "Server", "Schema", "Links"] },
        { metric: "11", label: "fact relationships reviewed", items: ["Offer", "Place", "Person", "Source"] },
        { metric: "6", label: "changes to verify", items: ["Render", "Response", "Crawl", "Recheck"] }
      ]
    }
  },
  related: {
    eyebrow: "Further reading",
    title: "Place technical work in the GEO context",
    items: [
      { title: "AI crawlability", text: "A focused review of bot access, server responses and reachable content paths.", href: "/en/ai-crawlability/" },
      { title: "GEO audit", text: "Review answers, sources and technical prerequisites as one baseline.", href: "/en/geo-audit/" },
      { title: "GEO monitoring", text: "Observe and document technical and content changes over time.", href: "/en/geo-monitoring/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions about technical GEO optimization",
    items: [
      { question: "Is technical GEO optimization just SEO under a new name?", answer: "No. SEO fundamentals such as HTML, performance and indexability still matter. A technical GEO view adds the question of whether content, facts and relationships are clearly accessible to answer systems." },
      { question: "Does the website need to be rebuilt?", answer: "Not automatically. We first review templates, CMS and existing paths. The most important improvements can often be made selectively in structure, delivery and markup." },
      { question: "Do you work with existing CMS platforms?", answer: "Yes. The approach follows the system you already have and its constraints. Recommendations remain understandable even when a CMS limits a specific change." },
      { question: "Does optimization guarantee AI mentions?", answer: "No. It improves technical conditions and clarity, but cannot guarantee a particular answer, position or recommendation by an external system." }
    ]
  },
  closing: {
    eyebrow: "Discuss the technical layer",
    title: "Clarity for your next technical decision.",
    text: "Send us your website and the question you are currently stuck on. We will clarify which technical work supports your GEO goal and which work does not.",
    cta: "Request a technical check"
  }
};

const aiCrawlabilityDe: ServicePageContent = {
  lang: "de",
  slug: "ai-crawlability",
  alternateDePath: "/ai-crawlability/",
  alternateEnPath: "/en/ai-crawlability/",
  meta: {
    title: "AI-Crawlability: Zugängliche Inhalte für KI-Suche | ELBSAND",
    description: "AI-Crawlability prüft, ob Bots relevante Seiten erreichen, ausliefern und in einem klaren technischen Kontext lesen können – von robots-Regeln bis Rendering."
  },
  breadcrumb: {
    home: "Start",
    hub: "GEO-Optimierung",
    parent: { label: "Technische GEO-Optimierung", href: "/technische-geo-optimierung/" },
    current: "AI-Crawlability"
  },
  eyebrow: "AI-Crawlability",
  title: "Wenn wichtige Seiten erreichbar sein sollen, bevor sie verstanden werden.",
  lead: "Wir verfolgen den Weg vom Bot-Aufruf bis zum sichtbaren Inhalt. So wird klar, ob Regeln, Rendering, Antworten oder interne Verbindungen deine wichtigsten Seiten unnötig ausbremsen.",
  primaryCta: "Crawlability prüfen lassen",
  secondaryCta: "Ablauf ansehen",
  outcomes: [
    { label: "Zugriff", title: "Blockaden sichtbar machen", text: "Robots-Regeln, Statuscodes und Weiterleitungen werden aus Sicht relevanter Crawler gelesen." },
    { label: "Auslieferung", title: "Gerenderte Inhalte prüfen", text: "Wir unterscheiden zwischen einer erfolgreichen HTTP-Antwort und dem Inhalt, den ein Bot tatsächlich erhält." },
    { label: "Reichweite", title: "Wichtige Pfade schützen", text: "Leistungs-, Standort- und Wissensseiten werden entlang ihrer internen Verbindungen bewertet." }
  ],
  demo: {
    variant: "crawl-path",
    eyebrow: "Illustrative Crawl-Ansicht",
    title: "Ein Crawlpfad mit sichtbaren Abzweigungen",
    note: "Illustratives Beispiel – Pfade und Werte sind nicht aus einer Kundenseite entnommen.",
    scoreLabel: "Schritte bis zum Kerninhalt",
    score: "5 / 8",
    checks: [
      { label: "Start bei robots.txt", detail: "Die wichtigsten Verzeichnisse sind grundsätzlich zugänglich.", status: "clear" },
      { label: "Weiterleitung zur Leistung", detail: "Eine alte URL führt über zwei Sprünge zur aktuellen Seite.", status: "review" },
      { label: "Clientseitige Inhaltsladung", detail: "Ein zentraler Textblock erscheint erst nach einer JavaScript-Ausführung.", status: "open" },
      { label: "Interner Rückweg", detail: "Von der Detailseite führt ein klarer Link zurück zum Leistungscluster.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "Der Weg zählt",
      title: "Nicht jede erreichbare URL ist schon ein erreichbarer Inhalt.",
      text: "Ein Crawler kann eine Adresse öffnen und dennoch an Weiterleitungen, clientseitigem Rendering oder fehlenden Textbeziehungen hängen bleiben. Wir dokumentieren den Pfad bis zum Inhalt, statt nur eine einzelne Antwortzeit zu betrachten.",
      points: ["Robots- und Sitemap-Signale", "Statuscodes und Weiterleitungsketten", "Server- versus Client-Rendering"]
    },
    {
      eyebrow: "Priorität im Pfad",
      title: "Crawlability folgt deiner Angebotslogik.",
      text: "Die technisch kürzeste Route ist nicht automatisch die wichtigste. Wir prüfen, ob zentrale Leistungen, lokale Relevanz und Belege über interne Links erreichbar sind und ob die Navigation einen sinnvollen Kontext mitliefert.",
      points: ["Wichtige Einstiegs- und Leistungsseiten", "Kontext zwischen Standort und Angebot", "Verwaiste oder zu tief liegende Inhalte"]
    }
  ],
  method: {
    eyebrow: "Methode",
    title: "Vier Schritte vom Bot-Aufruf bis zum Inhalt",
    steps: [
      { title: "Bot-Sicht definieren", text: "Wir legen fest, welche Seitentypen und Crawler für dein Ziel relevant sind und welche Fragen sie beantworten sollen." },
      { title: "Zugriff verfolgen", text: "Robots-Regeln, Sitemaps, Statuscodes und Weiterleitungen werden entlang konkreter URLs geprüft." },
      { title: "Rendering vergleichen", text: "Wir vergleichen die erste Serverantwort mit dem gerenderten Inhalt und markieren kritische Abweichungen." },
      { title: "Pfade verbessern", text: "Blockaden, Umwege und fehlende Verbindungen werden in einer umsetzbaren Reihenfolge dokumentiert." }
    ],
    visual: {
      frameLabel: "Illustrativer Crawlpfad",
      statusLabel: "Pfad wird verfolgt",
      scenes: [
        { metric: "8", label: "Startpunkte im Beispiel", items: ["Robots", "Sitemap", "Link", "Request"] },
        { metric: "5", label: "Antwortstationen erreicht", items: ["200", "301", "Cache", "Render"] },
        { metric: "3", label: "Abzweigungen bewertet", items: ["Service", "Location", "Evidence", "Contact"] },
        { metric: "4", label: "Pfade für Umsetzung", items: ["Freigeben", "Kürzen", "Rendern", "Verknüpfen"] }
      ]
    }
  },
  related: {
    eyebrow: "Im Kontext",
    title: "Nach dem Crawl den Kontext verbessern",
    items: [
      { title: "Technische GEO-Optimierung", text: "Die übergeordnete Struktur aus HTML, Performance, Fakten und Crawlpfaden.", href: "/technische-geo-optimierung/" },
      { title: "GEO Audit", text: "Crawlability mit Antworten, Quellen und Fakten in einer Ausgangsanalyse verbinden.", href: "/geo-audit/" },
      { title: "GEO-Content", text: "Neue Inhalte so planen, dass sie über erreichbare, nachvollziehbare Pfade auffindbar sind.", href: "/geo-content/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen zur AI-Crawlability",
    items: [
      { question: "Sind KI-Crawler dasselbe wie klassische Suchmaschinen-Bots?", answer: "Nicht zwingend. Zugriffsregeln und technische Anforderungen können sich unterscheiden. Wir betrachten den relevanten Bot-Kontext, ohne aus einem einzelnen User-Agent eine allgemeine Garantie abzuleiten." },
      { question: "Was passiert, wenn wichtige Inhalte per JavaScript geladen werden?", answer: "Das hängt von Rendering, Auslieferung und Inhalt ab. Wir prüfen, ob der relevante Text bereits in der Antwort vorhanden ist und ob die gerenderte Version konsistent bleibt." },
      { question: "Ist eine XML-Sitemap allein ausreichend?", answer: "Nein. Eine Sitemap hilft bei der Entdeckung, ersetzt aber keine erreichbare Seite, klare interne Links oder korrekte Statuscodes." },
      { question: "Kann Crawlability eine Empfehlung in KI-Antworten garantieren?", answer: "Nein. Sie ist eine technische Voraussetzung unter mehreren. Die konkrete Auswahl und Formulierung eines externen Systems bleibt nicht steuerbar." }
    ]
  },
  closing: {
    eyebrow: "Crawlpfad klären",
    title: "Zeig den Bots den Weg zu deinem wichtigsten Inhalt.",
    text: "Wir verfolgen einen konkreten Seitentyp durch deine Website und zeigen, an welcher Stelle Zugriff, Rendering oder Kontext verbessert werden sollte.",
    cta: "Crawlability prüfen lassen"
  }
};

const aiCrawlabilityEn: ServicePageContent = {
  lang: "en",
  slug: "ai-crawlability",
  alternateDePath: "/ai-crawlability/",
  alternateEnPath: "/en/ai-crawlability/",
  meta: {
    title: "AI Crawlability: Accessible Content for AI Search | ELBSAND",
    description: "AI crawlability reviews whether bots can reach, receive and read important pages in a clear technical context, from robots rules to rendering."
  },
  breadcrumb: {
    home: "Home",
    hub: "GEO optimisation",
    parent: { label: "Technical GEO optimization", href: "/en/technical-geo-optimization/" },
    current: "AI crawlability"
  },
  eyebrow: "AI crawlability",
  title: "Important pages should be reachable before they can be understood.",
  lead: "We follow the path from a bot request to the visible content. You see whether rules, rendering, responses or internal connections unnecessarily slow down the pages that matter.",
  primaryCta: "Review crawlability",
  secondaryCta: "See the process",
  outcomes: [
    { label: "Access", title: "Make blockers visible", text: "Robots rules, status codes and redirects are read from the perspective of relevant crawlers." },
    { label: "Delivery", title: "Review rendered content", text: "We distinguish a successful HTTP response from the content a bot actually receives." },
    { label: "Reach", title: "Protect important paths", text: "Service, location and knowledge pages are assessed along their internal connections." }
  ],
  demo: {
    variant: "crawl-path",
    eyebrow: "Illustrative crawl view",
    title: "A crawl path with visible branches",
    note: "Illustrative example – paths and values are not taken from a client website.",
    scoreLabel: "Steps to the core content",
    score: "5 / 8",
    checks: [
      { label: "Start at robots.txt", detail: "The important directories are broadly accessible.", status: "clear" },
      { label: "Redirect to service", detail: "An old URL takes two jumps to reach the current page.", status: "review" },
      { label: "Client-side content load", detail: "A central text block appears only after JavaScript runs.", status: "open" },
      { label: "Internal return path", detail: "The detail page links clearly back to the service cluster.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "The path matters",
      title: "A reachable URL is not always reachable content.",
      text: "A crawler can open an address and still get stuck at redirects, client-side rendering or missing text relationships. We document the path to the content rather than looking at one response time in isolation.",
      points: ["Robots and sitemap signals", "Status codes and redirect chains", "Server versus client rendering"]
    },
    {
      eyebrow: "Priority in the path",
      title: "Crawlability follows your offer logic.",
      text: "The technically shortest route is not automatically the most important. We check whether core services, local relevance and evidence are reachable through internal links and whether navigation carries useful context.",
      points: ["Important entry and service pages", "Context between location and offer", "Orphaned or deeply nested content"]
    }
  ],
  method: {
    eyebrow: "Method",
    title: "Four steps from bot request to content",
    steps: [
      { title: "Define the bot view", text: "We set which page types and crawlers matter for your goal and which questions they should answer." },
      { title: "Trace access", text: "Robots rules, sitemaps, status codes and redirects are checked along concrete URLs." },
      { title: "Compare rendering", text: "We compare the initial server response with rendered content and mark critical differences." },
      { title: "Improve paths", text: "Blockers, detours and missing connections are documented in an actionable sequence." }
    ],
    visual: {
      frameLabel: "Illustrative crawl path",
      statusLabel: "Tracing path",
      scenes: [
        { metric: "8", label: "starting points in the example", items: ["Robots", "Sitemap", "Link", "Request"] },
        { metric: "5", label: "response stations reached", items: ["200", "301", "Cache", "Render"] },
        { metric: "3", label: "branches assessed", items: ["Service", "Location", "Evidence", "Contact"] },
        { metric: "4", label: "paths for implementation", items: ["Allow", "Shorten", "Render", "Connect"] }
      ]
    }
  },
  related: {
    eyebrow: "In context",
    title: "Improve context after the crawl",
    items: [
      { title: "Technical GEO optimization", text: "The wider structure of HTML, performance, facts and crawl paths.", href: "/en/technical-geo-optimization/" },
      { title: "GEO audit", text: "Connect crawlability with answers, sources and facts in one baseline review.", href: "/en/geo-audit/" },
      { title: "GEO content", text: "Plan new content so it can be found through reachable, understandable paths.", href: "/en/geo-content/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions about AI crawlability",
    items: [
      { question: "Are AI crawlers the same as classic search bots?", answer: "Not necessarily. Access rules and technical requirements can differ. We review the relevant bot context without turning one user agent into a blanket guarantee." },
      { question: "What if important content loads through JavaScript?", answer: "It depends on rendering, delivery and the content itself. We check whether relevant text is present in the response and whether the rendered version remains consistent." },
      { question: "Is an XML sitemap enough?", answer: "No. A sitemap helps discovery, but it does not replace a reachable page, clear internal links or correct status codes." },
      { question: "Can crawlability guarantee an AI recommendation?", answer: "No. It is one technical prerequisite among several. The selection and wording of an external system remain outside direct control." }
    ]
  },
  closing: {
    eyebrow: "Clarify the crawl path",
    title: "Show bots the way to your most important content.",
    text: "We follow one concrete page type through your website and show where access, rendering or context should improve.",
    cta: "Review crawlability"
  }
};

const geoContentDe: ServicePageContent = {
  lang: "de",
  slug: "geo-content",
  alternateDePath: "/geo-content/",
  alternateEnPath: "/en/geo-content/",
  meta: {
    title: "GEO-Content für belastbare Antworten und Quellen | ELBSAND",
    description: "GEO-Content entwickelt klare, belegte Seiten und Inhaltsstrukturen, die Kundenfragen beantworten und als nachvollziehbare Quelle in KI-Suchen dienen können."
  },
  breadcrumb: { home: "Start", hub: "GEO-Optimierung", current: "GEO-Content" },
  eyebrow: "GEO-Content",
  title: "Inhalte, die eine echte Frage vollständig beantworten.",
  lead: "Wir entwickeln neue Seiten und Content-Systeme aus den Fragen deiner Zielgruppe. Jede Aussage bekommt Kontext, eine passende Struktur und – wo sinnvoll – eine sichtbare Quelle.",
  primaryCta: "GEO-Content besprechen",
  secondaryCta: "Content-Methode ansehen",
  outcomes: [
    { label: "Relevanz", title: "Fragen statt Fülltexte", text: "Themen entstehen aus echten Entscheidungssituationen, nicht aus einer Liste austauschbarer Keywords." },
    { label: "Belege", title: "Aussagen nachvollziehbar machen", text: "Fakten, Definitionen und Quellen werden so angeordnet, dass Leser und Systeme sie einordnen können." },
    { label: "System", title: "Ein Netz aus nützlichen Seiten", text: "Neue Inhalte ergänzen Leistungsseiten und verweisen aufeinander, ohne künstliche Doorway-Strukturen." }
  ],
  demo: {
    variant: "citation-document",
    eyebrow: "Illustrative Quellenansicht",
    title: "Ein Inhaltsdokument mit sichtbarer Belegkette",
    note: "Illustratives Beispiel – Quellen, Texte und Kennzahlen sind frei erfunden und keine Kundendaten.",
    scoreLabel: "Aussagen mit Kontext und Quelle",
    score: "9 / 12",
    checks: [
      { label: "Kernfrage beantwortet", detail: "Der Einstieg benennt Problem, Zielgruppe und Entscheidungspunkt.", status: "clear" },
      { label: "Begriff erklärt", detail: "Ein Fachbegriff benötigt eine kurze Definition statt vorausgesetztem Wissen.", status: "review" },
      { label: "Quelle zugeordnet", detail: "Eine externe Referenz ist genannt, aber noch nicht im passenden Absatz verankert.", status: "open" },
      { label: "Weiterführender Kontext", detail: "Leistungsseite, Beispiel und Kontaktmöglichkeit bilden einen klaren nächsten Schritt.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "Vom Thema zur Antwort",
      title: "Eine gute Seite beginnt mit der Entscheidung dahinter.",
      text: "Menschen suchen selten nach einem einzelnen Fachbegriff. Sie wollen einschätzen, vergleichen oder eine nächste Handlung wählen. Wir bauen Inhalte um diese Situation herum und geben jeder Seite einen überprüfbaren Zweck.",
      points: ["Frage und Entscheidungssituation", "Kurze, eindeutige Begriffe", "Antwort, Einordnung und nächster Schritt"]
    },
    {
      eyebrow: "Quellen mit Haltung",
      title: "Belege sollen helfen, nicht nur seriös aussehen.",
      text: "Eine Quellenliste am Ende ersetzt keine nachvollziehbare Aussage. Wir ordnen Daten, Definitionen und externe Referenzen dort ein, wo sie eine Behauptung stützen, und markieren eigene Erfahrung als solche.",
      points: ["Quelle direkt an der Aussage", "Eigene Position klar gekennzeichnet", "Aktualität und Verantwortlichkeit sichtbar"]
    }
  ],
  method: {
    eyebrow: "Methode",
    title: "Vier Schritte von der Kundenfrage zur Quelle",
    steps: [
      { title: "Fragen priorisieren", text: "Wir sammeln typische Fragen, Einwände und Entscheidungsmomente und wählen die Themen mit echtem Informationsbedarf." },
      { title: "Antwortarchitektur bauen", text: "Aus der Frage entsteht eine klare Gliederung mit Definition, Kontext, Beleg und sinnvoller Handlung." },
      { title: "Inhalt belegen", text: "Wir prüfen Daten, Quellen und Verantwortlichkeiten und schreiben in einer Sprache, die fachlich präzise bleibt." },
      { title: "Im System verankern", text: "Die neue Seite wird mit passenden Leistungen, Beispielen und Kontaktwegen verbunden und technisch veröffentlicht." }
    ],
    visual: {
      frameLabel: "Illustratives Quellen-Dokument",
      statusLabel: "Belegkette wird gebaut",
      scenes: [
        { metric: "16", label: "Fragen aus dem Beispiel", items: ["Verstehen", "Vergleichen", "Kosten", "Vertrauen"] },
        { metric: "4", label: "Antwortteile je Thema", items: ["Definition", "Kontext", "Beleg", "Handlung"] },
        { metric: "9", label: "Aussagen mit Quellenbezug", items: ["Primärquelle", "Fachdaten", "Eigene Arbeit", "Datum"] },
        { metric: "5", label: "Seiten sinnvoll verbunden", items: ["Frage", "Leistung", "Beispiel", "FAQ"] }
      ]
    }
  },
  related: {
    eyebrow: "Nächster Kontext",
    title: "Content zwischen Analyse und Pflege",
    items: [
      { title: "Content-Optimierung für AI-Suche", text: "Bestehende Inhalte auf Antwortlogik, Quellen und Aktualität prüfen.", href: "/content-optimierung-ai-suche/" },
      { title: "KI-Quellenanalyse", text: "Erkennen, welche Quellen bereits prägen und wo belastbare Lücken liegen.", href: "/ki-quellenanalyse/" },
      { title: "AI-Crawlability", text: "Sicherstellen, dass neue Content-Seiten technisch erreichbar und verknüpft sind.", href: "/ai-crawlability/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen zu GEO-Content",
    items: [
      { question: "Ist GEO-Content einfach ein Blog mit KI-Keywords?", answer: "Nein. Im Mittelpunkt stehen echte Fragen, klare Antworten, belastbare Quellen und eine sinnvolle Verbindung zu deinem Angebot. Keywords können dabei helfen, ersetzen aber keine inhaltliche Aufgabe." },
      { question: "Müssen alle Aussagen externe Quellen haben?", answer: "Nein. Eigene Leistungen, Prozesse und Erfahrungen können aus deiner Organisation stammen. Wichtig ist, dass Herkunft, Aktualität und Geltungsbereich einer Aussage nicht missverständlich bleiben." },
      { question: "Könnt ihr auch Themen entwickeln, zu denen noch keine Seite existiert?", answer: "Ja. Wir priorisieren Themen aus Kundenfragen, bestehenden Quellen und deinem Angebot und legen offen, wenn ein Thema zunächst Recherche oder fachliche Freigabe benötigt." },
      { question: "Garantiert eine zitierfähige Seite eine Nennung?", answer: "Nein. Sie schafft eine klarere, überprüfbare Grundlage. Ob ein externes System eine Seite nutzt oder zitiert, hängt von vielen Faktoren ab und ist nicht garantierbar." }
    ]
  },
  closing: {
    eyebrow: "Content planen",
    title: "Aus einer Kundenfrage wird eine belastbare Seite.",
    text: "Bring uns ein Thema, das deine Zielgruppe immer wieder fragt. Wir prüfen, welche Antwort fehlt, welche Quelle sie trägt und wie sie in dein Angebot passt.",
    cta: "GEO-Content besprechen"
  }
};

const geoContentEn: ServicePageContent = {
  lang: "en",
  slug: "geo-content",
  alternateDePath: "/geo-content/",
  alternateEnPath: "/en/geo-content/",
  meta: {
    title: "GEO Content for Dependable Answers and Sources | ELBSAND",
    description: "GEO content develops clear, supported pages and content systems that answer customer questions and can serve as understandable sources in AI search."
  },
  breadcrumb: { home: "Home", hub: "GEO optimisation", current: "GEO content" },
  eyebrow: "GEO content",
  title: "Content that answers a real question completely.",
  lead: "We develop new pages and content systems from the questions your audience actually asks. Every statement receives context, a fitting structure and, where useful, a visible source.",
  primaryCta: "Discuss GEO content",
  secondaryCta: "See the content method",
  outcomes: [
    { label: "Relevance", title: "Questions over filler", text: "Topics come from real decision moments, not a list of interchangeable keywords." },
    { label: "Evidence", title: "Make statements traceable", text: "Facts, definitions and sources are arranged so readers and systems can place them in context." },
    { label: "System", title: "Build a useful set of pages", text: "New content supports service pages and points between related questions without doorway patterns." }
  ],
  demo: {
    variant: "citation-document",
    eyebrow: "Illustrative source view",
    title: "A content document with a visible evidence chain",
    note: "Illustrative example – sources, copy and figures are invented, not client data.",
    scoreLabel: "Statements with context and source",
    score: "9 / 12",
    checks: [
      { label: "Core question answered", detail: "The opening names the problem, audience and decision point.", status: "clear" },
      { label: "Term explained", detail: "A specialist term needs a short definition instead of assumed knowledge.", status: "review" },
      { label: "Source assigned", detail: "An external reference is named but not yet anchored to the right paragraph.", status: "open" },
      { label: "Further context", detail: "Service page, example and contact path create a clear next step.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "From topic to answer",
      title: "A useful page starts with the decision behind the question.",
      text: "People rarely search for one specialist term in isolation. They want to assess, compare or choose a next action. We build content around that situation and give every page a verifiable job.",
      points: ["Question and decision moment", "Short, unambiguous terms", "Answer, context and next step"]
    },
    {
      eyebrow: "Sources with intent",
      title: "Evidence should help, not merely look serious.",
      text: "A source list at the bottom does not replace a traceable statement. We place data, definitions and external references where they support a claim, and label first-hand experience as such.",
      points: ["Source next to the statement", "Own position clearly marked", "Currency and responsibility visible"]
    }
  ],
  method: {
    eyebrow: "Method",
    title: "Four steps from customer question to source",
    steps: [
      { title: "Prioritise questions", text: "We collect common questions, objections and decision moments, then choose topics with genuine information need." },
      { title: "Build answer architecture", text: "The question becomes a clear structure with definition, context, evidence and a useful action." },
      { title: "Support the content", text: "We check data, sources and responsibility while keeping the language precise and readable." },
      { title: "Connect the system", text: "The new page is connected to relevant services, examples and contact paths before publication." }
    ],
    visual: {
      frameLabel: "Illustrative source document",
      statusLabel: "Building evidence chain",
      scenes: [
        { metric: "16", label: "questions in the example", items: ["Understand", "Compare", "Cost", "Trust"] },
        { metric: "4", label: "answer parts per topic", items: ["Definition", "Context", "Evidence", "Action"] },
        { metric: "9", label: "statements with source context", items: ["Primary", "Research", "Own work", "Date"] },
        { metric: "5", label: "pages connected with intent", items: ["Question", "Service", "Example", "FAQ"] }
      ]
    }
  },
  related: {
    eyebrow: "Next context",
    title: "Content between analysis and care",
    items: [
      { title: "Content optimization for AI search", text: "Review existing content for answer logic, sources and currency.", href: "/en/content-optimization-ai-search/" },
      { title: "AI source analysis", text: "See which sources already shape the topic and where dependable gaps remain.", href: "/en/ai-source-analysis/" },
      { title: "AI crawlability", text: "Make sure new content pages are technically reachable and connected.", href: "/en/ai-crawlability/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions about GEO content",
    items: [
      { question: "Is GEO content simply a blog with AI keywords?", answer: "No. The focus is on real questions, clear answers, dependable sources and a useful connection to your offer. Keywords can support that work, but cannot replace a content job." },
      { question: "Does every statement need an external source?", answer: "No. Your services, processes and experience can come from your organisation. The important thing is that origin, currency and scope are not misleading." },
      { question: "Can you develop topics for pages that do not exist yet?", answer: "Yes. We prioritise topics from customer questions, existing sources and your offer, and make clear when a topic needs research or expert approval first." },
      { question: "Does a citation-ready page guarantee a mention?", answer: "No. It creates a clearer, more verifiable foundation. Whether an external system uses or cites it depends on many factors and cannot be guaranteed." }
    ]
  },
  closing: {
    eyebrow: "Plan content",
    title: "Turn a customer question into a dependable page.",
    text: "Bring us a topic your audience asks again and again. We will identify the missing answer, the evidence behind it and how it belongs in your offer.",
    cta: "Discuss GEO content"
  }
};

const contentOptimizationDe: ServicePageContent = {
  lang: "de",
  slug: "content-optimierung-ai-suche",
  alternateDePath: "/content-optimierung-ai-suche/",
  alternateEnPath: "/en/content-optimization-ai-search/",
  meta: {
    title: "Content-Optimierung für AI-Suche: Bestehendes verbessern | ELBSAND",
    description: "Content-Optimierung für AI-Suche prüft vorhandene Seiten auf Antwortklarheit, Quellen, Aktualität und interne Verbindungen – mit konkreten, priorisierten Überarbeitungen."
  },
  breadcrumb: {
    home: "Start",
    hub: "GEO-Optimierung",
    parent: { label: "GEO-Content", href: "/geo-content/" },
    current: "Content-Optimierung für AI-Suche"
  },
  eyebrow: "Content-Optimierung für AI-Suche",
  title: "Bestehende Inhalte klarer, aktueller und hilfreicher machen.",
  lead: "Nicht jede GEO-Maßnahme braucht eine neue Seite. Wir lesen deine bestehenden Inhalte wie eine Antwort: Was ist sofort klar, was fehlt, was ist veraltet und welche Überarbeitung bringt wirklich mehr Orientierung?",
  primaryCta: "Content-Check anfragen",
  secondaryCta: "Refresh-Methode ansehen",
  outcomes: [
    { label: "Klarheit", title: "Antworten schneller finden", text: "Struktur und Einstieg werden auf die reale Frage hinter einer Suchanfrage ausgerichtet." },
    { label: "Aktualität", title: "Veraltetes sauber markieren", text: "Zeitbezug, Zahlen, Beispiele und Zuständigkeiten werden sichtbar geprüft statt still überschrieben." },
    { label: "Wirkung", title: "Bestehendes sinnvoll nutzen", text: "Gute Passagen bleiben erhalten, während Lücken und Wiederholungen einer klaren Priorität folgen." }
  ],
  demo: {
    variant: "content-refresh",
    eyebrow: "Illustrative Refresh-Ansicht",
    title: "Ein Inhalts-Refresh mit nachvollziehbaren Entscheidungen",
    note: "Illustratives Beispiel – keine Analyse einer realen ELBSAND- oder Kundenseite.",
    scoreLabel: "Abschnitte für den Refresh markiert",
    score: "7 / 11",
    checks: [
      { label: "Einstieg auf Nutzerfrage", detail: "Der erste Absatz führt direkt zur Entscheidung, die der Inhalt unterstützen soll.", status: "clear" },
      { label: "Zeitbezug prüfen", detail: "Eine Zahl ist ohne Veröffentlichungs- oder Aktualisierungsdatum nicht einzuordnen.", status: "review" },
      { label: "Wiederholung entfernen", detail: "Zwei Abschnitte erklären denselben Begriff mit leicht anderer Formulierung.", status: "open" },
      { label: "Nächste Seite verknüpft", detail: "Ein passender Service- oder Kontaktweg schließt die Antwort sinnvoll ab.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "Bestehendes ernst nehmen",
      title: "Ein Refresh beginnt mit dem, was schon funktioniert.",
      text: "Überarbeitung ist keine automatische Verlängerung und kein kompletter Neustart. Wir markieren starke Passagen, fehlende Antworten, unnötige Wiederholungen und Stellen, an denen Leser oder KI-Systeme ins Raten geraten.",
      points: ["Starke Belege und klare Passagen", "Fehlende Antworten und Begriffe", "Wiederholungen, Umwege und Übergänge"]
    },
    {
      eyebrow: "Aktualisierung mit Verantwortung",
      title: "Aktuell heißt nicht beliebig neu geschrieben.",
      text: "Bei Zahlen, Preisen, Leistungen oder lokalen Details muss erkennbar sein, worauf eine Aussage beruht und wann sie geprüft wurde. Wir trennen belegte Aktualisierung von inhaltlicher Neupositionierung.",
      points: ["Datum und Gültigkeitsbereich", "Quellen und fachliche Freigabe", "Änderungslogik für spätere Pflege"]
    }
  ],
  method: {
    eyebrow: "Methode",
    title: "Vier Schritte vom Inhaltsbefund zum sicheren Refresh",
    steps: [
      { title: "Bestand lesen", text: "Wir betrachten Seiten, Abschnitte und interne Verbindungen im Kontext deiner Zielgruppe und deines Angebots." },
      { title: "Antwortlücken markieren", text: "Fehlende Definitionen, unklare Einstiege, Wiederholungen und unbelegte Aussagen werden getrennt erfasst." },
      { title: "Refresh entscheiden", text: "Jeder Abschnitt erhält eine konkrete Entscheidung: behalten, präzisieren, belegen, verschieben oder neu schreiben." },
      { title: "Änderung pflegen", text: "Die überarbeitete Seite wird verknüpft, datiert und mit einem praktikablen Prüfintervall dokumentiert." }
    ],
    visual: {
      frameLabel: "Illustrativer Content-Refresh",
      statusLabel: "Änderungen werden priorisiert",
      scenes: [
        { metric: "14", label: "Abschnitte im Beispiel", items: ["Einstieg", "Definition", "Beleg", "CTA"] },
        { metric: "6", label: "Antwortlücken gefunden", items: ["Fehlt", "Veraltet", "Doppelt", "Unklar"] },
        { metric: "8", label: "Änderungsentscheidungen", items: ["Behalten", "Präzisieren", "Belegen", "Verschieben"] },
        { metric: "3", label: "Pflegepunkte dokumentiert", items: ["Datum", "Owner", "Recheck", "Link"] }
      ]
    }
  },
  related: {
    eyebrow: "Nächster Schritt",
    title: "Aus einem Refresh wird ein verlässliches Content-System",
    items: [
      { title: "GEO-Content", text: "Neue Seiten entwickeln, wenn eine Frage im Bestand noch keine gute Antwort hat.", href: "/geo-content/" },
      { title: "KI-Faktencheck", text: "Prüfen, ob externe KI-Antworten veraltete oder ungenaue Angaben über dein Angebot enthalten.", href: "/ki-faktencheck/" },
      { title: "GEO Monitoring", text: "Veränderungen an Antworten, Quellen und relevanten Seiten regelmäßig beobachten.", href: "/geo-monitoring/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen zur Content-Optimierung für AI-Suche",
    items: [
      { question: "Wann ist eine Überarbeitung besser als eine neue Seite?", answer: "Wenn die bestehende Seite bereits passende Autorität, Inhalte oder interne Verbindungen hat, aber Antworten, Aktualität oder Struktur nicht mehr sauber trägt. Die Entscheidung treffen wir anhand des konkreten Bestands." },
      { question: "Wie geht ihr mit alten Zahlen und Beispielen um?", answer: "Wir prüfen Zeitbezug, Quelle und Gültigkeitsbereich. Was nicht mehr belastbar ist, wird nicht still verlängert, sondern ersetzt, eingeordnet oder entfernt." },
      { question: "Kann ich die redaktionellen Änderungen selbst umsetzen?", answer: "Ja. Du kannst eine klare Änderungsgrundlage erhalten oder ELBSAND mit Redaktion und Veröffentlichung beauftragen. Umfang und Verantwortlichkeiten werden vorher festgelegt." },
      { question: "Verbessert ein Refresh automatisch die AI-Sichtbarkeit?", answer: "Nein. Ein klarerer und aktuellerer Inhalt verbessert die Grundlage, aber externe Systeme entscheiden weiterhin selbst, welche Quellen sie verwenden und wie sie antworten." }
    ]
  },
  closing: {
    eyebrow: "Refresh planen",
    title: "Erhalte mehr Klarheit aus dem Inhalt, den du schon hast.",
    text: "Wir markieren zuerst die Stellen, an denen eine kleine präzise Änderung mehr Orientierung schafft als eine komplett neue Seite.",
    cta: "Content-Check anfragen"
  }
};

const contentOptimizationEn: ServicePageContent = {
  lang: "en",
  slug: "content-optimization-ai-search",
  alternateDePath: "/content-optimierung-ai-suche/",
  alternateEnPath: "/en/content-optimization-ai-search/",
  meta: {
    title: "Content Optimization for AI Search: Improve What Exists | ELBSAND",
    description: "Content optimization for AI search reviews existing pages for answer clarity, sources, currency and internal connections, with concrete, prioritised revisions."
  },
  breadcrumb: {
    home: "Home",
    hub: "GEO optimisation",
    parent: { label: "GEO content", href: "/en/geo-content/" },
    current: "Content optimization for AI search"
  },
  eyebrow: "Content optimization for AI search",
  title: "Make existing content clearer, current and more useful.",
  lead: "Not every GEO task needs a new page. We read your existing content like an answer: what is immediately clear, what is missing, what has aged and which revision genuinely adds orientation?",
  primaryCta: "Request a content check",
  secondaryCta: "See the refresh method",
  outcomes: [
    { label: "Clarity", title: "Find answers sooner", text: "Structure and opening are aligned with the real question behind a search." },
    { label: "Currency", title: "Mark what has aged", text: "Dates, figures, examples and ownership are checked visibly rather than silently overwritten." },
    { label: "Value", title: "Use existing work well", text: "Strong passages stay in place while gaps and repetition receive a clear priority." }
  ],
  demo: {
    variant: "content-refresh",
    eyebrow: "Illustrative refresh view",
    title: "A content refresh with traceable decisions",
    note: "Illustrative example – not an analysis of an ELBSAND or client page.",
    scoreLabel: "Sections marked for refresh",
    score: "7 / 11",
    checks: [
      { label: "Opening matches user question", detail: "The first paragraph goes straight to the decision the content should support.", status: "clear" },
      { label: "Review time context", detail: "A figure has no publication or update date to make it understandable.", status: "review" },
      { label: "Remove repetition", detail: "Two sections explain the same term with slightly different wording.", status: "open" },
      { label: "Connect the next page", detail: "A relevant service or contact path completes the answer naturally.", status: "clear" }
    ]
  },
  narratives: [
    {
      eyebrow: "Respect what exists",
      title: "A refresh begins with what already works.",
      text: "Revision is not automatic expansion or a complete restart. We mark strong passages, missing answers, unnecessary repetition and the moments where readers or AI systems are left guessing.",
      points: ["Strong evidence and clear passages", "Missing answers and terms", "Repetition, detours and transitions"]
    },
    {
      eyebrow: "Responsible updating",
      title: "Current does not mean rewritten without context.",
      text: "For figures, prices, services or local details, it should be clear what supports a statement and when it was checked. We separate supported updates from a change in positioning.",
      points: ["Date and scope of validity", "Sources and expert approval", "A maintenance logic for later care"]
    }
  ],
  method: {
    eyebrow: "Method",
    title: "Four steps from content finding to safe refresh",
    steps: [
      { title: "Read the inventory", text: "We review pages, sections and internal connections in the context of your audience and offer." },
      { title: "Mark answer gaps", text: "Missing definitions, unclear openings, repetition and unsupported statements are recorded separately." },
      { title: "Decide the refresh", text: "Each section receives a concrete decision: keep, sharpen, support, move or rewrite." },
      { title: "Maintain the change", text: "The revised page is connected, dated and documented with a practical review interval." }
    ],
    visual: {
      frameLabel: "Illustrative content refresh",
      statusLabel: "Prioritising changes",
      scenes: [
        { metric: "14", label: "sections in the example", items: ["Opening", "Definition", "Evidence", "CTA"] },
        { metric: "6", label: "answer gaps found", items: ["Missing", "Aged", "Repeated", "Unclear"] },
        { metric: "8", label: "change decisions", items: ["Keep", "Sharpen", "Support", "Move"] },
        { metric: "3", label: "maintenance points logged", items: ["Date", "Owner", "Recheck", "Link"] }
      ]
    }
  },
  related: {
    eyebrow: "Next step",
    title: "Turn a refresh into a dependable content system",
    items: [
      { title: "GEO content", text: "Develop new pages when an existing question still has no useful answer.", href: "/en/geo-content/" },
      { title: "AI fact checking", text: "Check whether external AI answers contain outdated or inaccurate details about your offer.", href: "/en/ai-fact-checking/" },
      { title: "GEO monitoring", text: "Observe changes in answers, sources and relevant pages over time.", href: "/en/geo-monitoring/" }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions about content optimization for AI search",
    items: [
      { question: "When is a revision better than a new page?", answer: "When the existing page already has useful authority, content or internal connections, but no longer carries answers, currency or structure well. We decide from the actual inventory." },
      { question: "How do you handle old figures and examples?", answer: "We check time context, source and scope. Anything no longer dependable is not silently extended; it is replaced, qualified or removed." },
      { question: "Can I implement the editorial changes myself?", answer: "Yes. You can receive a clear revision brief or ask ELBSAND to handle editing and publication. Scope and ownership are agreed beforehand." },
      { question: "Does a refresh automatically improve AI visibility?", answer: "No. Clearer and more current content improves the foundation, but external systems still decide which sources they use and how they answer." }
    ]
  },
  closing: {
    eyebrow: "Plan a refresh",
    title: "Get more clarity from the content you already have.",
    text: "We first mark the places where one precise change creates more orientation than an entirely new page.",
    cta: "Request a content check"
  }
};

export const technicalGeoOptimizationPages: Record<ServiceLocale, ServicePageContent> = {
  de: technicalGeoOptimizationDe,
  en: technicalGeoOptimizationEn
};

export const aiCrawlabilityPages: Record<ServiceLocale, ServicePageContent> = {
  de: aiCrawlabilityDe,
  en: aiCrawlabilityEn
};

export const geoContentPages: Record<ServiceLocale, ServicePageContent> = {
  de: geoContentDe,
  en: geoContentEn
};

export const contentOptimizationAiSearchPages: Record<ServiceLocale, ServicePageContent> = {
  de: contentOptimizationDe,
  en: contentOptimizationEn
};
