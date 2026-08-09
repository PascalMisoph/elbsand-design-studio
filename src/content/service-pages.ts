export type ServiceLocale = "de" | "en";
export type ServiceDemoVariant =
  | "audit"
  | "visibility-index"
  | "source-map"
  | "competitor-split"
  | "perception-orbit"
  | "factcheck-tilt"
  | "prompt-constellation"
  | "technical-graph"
  | "crawl-path"
  | "citation-document"
  | "content-refresh"
  | "monitoring-timeline"
  | "action-queue";

export interface ServicePageContent {
  lang: ServiceLocale;
  slug: string;
  alternateDePath: string;
  alternateEnPath: string;
  meta: { title: string; description: string };
  breadcrumb: {
    home: string;
    hub: string;
    current: string;
    parent?: { label: string; href: string };
  };
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  outcomes: readonly { label: string; title: string; text: string }[];
  demo: {
    variant: ServiceDemoVariant;
    eyebrow: string;
    title: string;
    note: string;
    scoreLabel: string;
    score: string;
    checks: readonly { label: string; detail: string; status: "clear" | "review" | "open" }[];
  };
  narratives: readonly { eyebrow: string; title: string; text: string; points: readonly string[] }[];
  method: {
    eyebrow: string;
    title: string;
    steps: readonly { title: string; text: string }[];
    visual: {
      frameLabel: string;
      statusLabel: string;
      scenes: readonly {
        metric: string;
        label: string;
        items: readonly string[];
      }[];
    };
  };
  related: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; text: string; href: string; image?: string; imagePosition?: string }[];
  };
  faq: { eyebrow: string; title: string; items: readonly { question: string; answer: string }[] };
  closing: { eyebrow: string; title: string; text: string; cta: string };
}

export const geoAuditPages: Record<ServiceLocale, ServicePageContent> = {
  de: {
    lang: "de",
    slug: "geo-audit",
    alternateDePath: "/geo-audit/",
    alternateEnPath: "/en/geo-audit/",
    meta: {
      title: "GEO Audit für Unternehmen | ELBSAND Design Studio",
      description: "Ein GEO Audit prüft, wie KI-Suchsysteme dein Unternehmen einordnen, welche Quellen sie nutzen und wo konkrete Optimierungspotenziale liegen."
    },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", current: "GEO Audit" },
    eyebrow: "GEO Audit",
    title: "Wie spricht KI über dein Unternehmen?",
    lead: "Verfolge deine KI-Sichtbarkeit, erkenne, wo und wie KI deine Marke erwähnt, und gewinne Erkenntnisse, mit denen du deine Präsenz gezielt verbessern kannst.",
    primaryCta: "Kostenfreien KI-Check starten",
    secondaryCta: "Audit-Methode ansehen",
    outcomes: [
      { label: "Ausgangslage", title: "Sichtbarkeit einordnen", text: "Relevante Fragen und Antwortsysteme werden systematisch betrachtet." },
      { label: "Fehlerbilder", title: "Lücken erkennen", text: "Falsche Fakten, fehlende Quellen und unklare Signale werden sichtbar." },
      { label: "Priorisierung", title: "Nächste Schritte festlegen", text: "Du erhältst eine nachvollziehbare Reihenfolge statt einer langen Mängelliste." }
    ],
    demo: {
      variant: "audit",
      eyebrow: "Illustrative Auditansicht",
      title: "Von der Antwort zur Ursache",
      note: "Beispielhafte Darstellung – keine echten Kundendaten.",
      scoreLabel: "Prüffelder eingeordnet",
      score: "12 / 16",
      checks: [
        { label: "Unternehmensprofil", detail: "Angebot und Standort sind eindeutig zuordenbar.", status: "clear" },
        { label: "Antwortabdeckung", detail: "Wichtige Kundenfragen werden nur teilweise beantwortet.", status: "review" },
        { label: "Quellenlage", detail: "Externe Belege und konsistente Erwähnungen fehlen.", status: "open" },
        { label: "Technischer Zugriff", detail: "Crawlpfade und zentrale Seiten sind erreichbar.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "Mehr als ein Sichtbarkeitscheck",
        title: "Nicht nur prüfen, ob du genannt wirst.",
        text: "Eine einzelne Nennung sagt wenig darüber aus, ob ein System dein Angebot korrekt verstanden hat. Deshalb betrachten wir Antworten, Begründungen, Quellen und wiederkehrende Muster gemeinsam.",
        points: ["Marke, Angebot und Standort", "Antworten auf reale Kundenfragen", "Verwendete und fehlende Quellen"]
      },
      {
        eyebrow: "Handlungsorientiert",
        title: "Von Beobachtung zu konkreter Arbeit.",
        text: "Jeder Befund wird einem umsetzbaren Hebel zugeordnet: Technik, Seitenstruktur, Fakten, vorhandene Inhalte oder neue Themen. So wird aus Analyse eine belastbare Reihenfolge.",
        points: ["Sofort behebbare Grundlagen", "Inhaltliche Lücken mit hoher Relevanz", "Mittelfristige Autoritäts- und Quellensignale"]
      }
    ],
    method: {
      eyebrow: "Methode",
      title: "Vier Schritte zu einem belastbaren Audit",
      steps: [
        { title: "Fragen festlegen", text: "Wir definieren die Themen und Entscheidungssituationen, in denen dein Unternehmen sichtbar sein sollte." },
        { title: "Antworten prüfen", text: "Mehrere relevante Such- und KI-Systeme werden mit konsistenten Fragestellungen betrachtet." },
        { title: "Ursachen analysieren", text: "Quellen, Fakten, Inhalte, Crawlability und Wettbewerbsumfeld werden miteinander verbunden." },
        { title: "Maßnahmen priorisieren", text: "Die Ergebnisse werden nach Wirkung, Aufwand und Abhängigkeiten geordnet." }
      ],
      visual: {
        frameLabel: "Illustrativer Auditablauf",
        statusLabel: "Analyse aktiv",
        scenes: [
          { metric: "24", label: "relevante Kundenfragen", items: ["Lokale Suche", "Leistungswahl", "Vergleich", "Vertrauen"] },
          { metric: "4", label: "Antwortsysteme im Vergleich", items: ["ChatGPT", "Claude", "Perplexity", "Google AI"] },
          { metric: "18", label: "Signale miteinander verbunden", items: ["Eigene Website", "Drittquellen", "Unternehmensdaten", "Crawlpfade"] },
          { metric: "7", label: "Maßnahmen nach Wirkung geordnet", items: ["Sofort", "Als Nächstes", "Aufbau", "Monitoring"] }
        ]
      }
    },
    related: {
      eyebrow: "Nächster Schritt",
      title: "Vom Audit in die passende Umsetzung",
      items: [
        { title: "GEO-Optimierung", text: "Überblick über Methode, Leistungen und Betreuungsmodelle.", href: "/geo-optimierung/", image: "/images/geo-visibility-stock.webp", imagePosition: "center 44%" },
        { title: "Kostenfreier KI-Check", text: "Eine kompakte erste technische Einordnung deiner Website.", href: "/#ki-check", image: "/images/contact/project-enquiry.webp", imagePosition: "center 54%" },
        { title: "Projekt besprechen", text: "Audit, Relaunch oder laufende Optimierung persönlich einordnen.", href: "/#kontakt", image: "/images/contact/consultation.webp", imagePosition: "center 42%" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen zum GEO Audit",
      items: [
        { question: "Welche KI-Systeme werden geprüft?", answer: "Je nach Zielgruppe und Auditumfang betrachten wir die sichtbaren Nutzererlebnisse von ChatGPT, Perplexity, Claude, Microsoft Copilot, Google AI Overviews und AI Mode sowie Gemini. Grok oder DeepSeek beziehen wir ein, wenn sie für dein Thema relevant sind. Entscheidend ist nicht die größtmögliche Anzahl, sondern die Systeme, die deine Kunden tatsächlich nutzen." },
        { question: "Was lässt sich mit einem GEO Audit untersuchen?", answer: "Wir prüfen, wie häufig und in welchem Zusammenhang dein Unternehmen erscheint, wie dein Angebot beschrieben wird, welche Quellen Antworten prägen, wo Fakten falsch oder unvollständig sind und wie du gegenüber relevanten Wettbewerbern eingeordnet wirst. Zeiträume, Regionen oder Zielgruppen lassen sich bei Bedarf als eigener Prüfrahmen ergänzen." },
        { question: "Wie viele Marken oder Angebote kann ich prüfen lassen?", answer: "Ein klar abgegrenzter Audit konzentriert sich meist auf ein Unternehmen, ein Angebot und ein passendes Wettbewerbsumfeld. Mehrere Produktlinien, Standorte oder unterschiedliche Wettbewerbsgruppen können wir in getrennten Prüffeldern abbilden und vorab sinnvoll eingrenzen." },
        { question: "Wie viele Fragen werden untersucht?", answer: "ELBSAND arbeitet nicht mit starren Prompt-Paketen. Der Fragenumfang richtet sich nach deinem Angebot, den wichtigsten Entscheidungssituationen und dem vereinbarten Audit-Tiefgang. So prüfen wir lieber eine relevante Auswahl konsistent als viele beliebige Fragen ohne geschäftlichen Bezug." },
        { question: "Wie verbessere ich meine Sichtbarkeit in der KI-Suche?", answer: "Der Audit zeigt, bei welchen Fragen Wettbewerber oder andere Quellen bevorzugt werden und warum. Daraus priorisieren wir konkrete Verbesserungen an Fakten, Inhalten, Quellen, Seitenstruktur und technischer Erreichbarkeit. ELBSAND kann diese Maßnahmen anschließend mit dir planen oder direkt umsetzen." },
        { question: "Welche Regionen und Sprachen lassen sich berücksichtigen?", answer: "Der Schwerpunkt liegt auf Deutschland und dem DACH-Markt, bei lokalen Unternehmen zusätzlich auf ihrem tatsächlichen Einzugsgebiet. Regionale und mehrsprachige Prüfungen sind möglich, wenn Angebot, Website und Zielgruppe dafür eine belastbare Grundlage bieten." },
        { question: "Garantiert ein Audit spätere Nennungen?", answer: "Nein. Ein Audit macht Voraussetzungen, Lücken und mögliche Hebel sichtbar. Eine konkrete Nennung oder Empfehlung durch ein externes System kann nicht garantiert werden." },
        { question: "Brauche ich bereits viele Inhalte?", answer: "Nein. Der Audit zeigt gerade, welche bestehenden Inhalte verwendbar sind und wo neue, klar belegte Inhalte sinnvoll wären." }
      ]
    },
    closing: { eyebrow: "Audit anfragen", title: "Klarheit vor der nächsten Maßnahme.", text: "Wir schauen zuerst, was bereits funktioniert, was Systeme missverstehen und welcher nächste Schritt wirklich sinnvoll ist.", cta: "GEO Audit besprechen" }
  },
  en: {
    lang: "en",
    slug: "geo-audit",
    alternateDePath: "/geo-audit/",
    alternateEnPath: "/en/geo-audit/",
    meta: {
      title: "GEO Audit for Businesses | ELBSAND Design Studio",
      description: "A GEO audit reviews how AI search systems understand your business, which sources they use and where specific optimisation opportunities exist."
    },
    breadcrumb: { home: "Home", hub: "GEO optimisation", current: "GEO audit" },
    eyebrow: "GEO audit",
    title: "How does AI talk about your business?",
    lead: "Track your AI visibility, see where and how AI mentions your brand, and uncover insights to enhance your presence.",
    primaryCta: "Start your free AI check",
    secondaryCta: "View audit method",
    outcomes: [
      { label: "Baseline", title: "Classify visibility", text: "Relevant questions and answer systems are reviewed systematically." },
      { label: "Failure patterns", title: "Identify gaps", text: "Incorrect facts, missing sources and unclear signals become visible." },
      { label: "Priorities", title: "Define next actions", text: "You receive a clear sequence instead of a long defect list." }
    ],
    demo: {
      variant: "audit",
      eyebrow: "Illustrative audit view",
      title: "From the answer to its cause",
      note: "Illustrative example – no real client data.",
      scoreLabel: "Review fields classified",
      score: "12 / 16",
      checks: [
        { label: "Business profile", detail: "Offer and location can be classified clearly.", status: "clear" },
        { label: "Answer coverage", detail: "Important customer questions are only partly answered.", status: "review" },
        { label: "Source landscape", detail: "External evidence and consistent mentions are missing.", status: "open" },
        { label: "Technical access", detail: "Crawl paths and central pages are reachable.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "More than a visibility check",
        title: "Do not only check whether you are mentioned.",
        text: "A single mention says little about whether a system understood your offer correctly. We therefore review answers, reasoning, sources and recurring patterns together.",
        points: ["Brand, offer and location", "Answers to real customer questions", "Used and missing sources"]
      },
      {
        eyebrow: "Action oriented",
        title: "Turn observations into concrete work.",
        text: "Every finding is connected to an actionable lever: technology, page structure, facts, existing content or new topics. Analysis becomes a dependable sequence.",
        points: ["Foundations that can be fixed immediately", "High-relevance content gaps", "Longer-term authority and source signals"]
      }
    ],
    method: {
      eyebrow: "Method",
      title: "Four steps to a dependable audit",
      steps: [
        { title: "Define questions", text: "We establish the topics and decision moments where your business should be visible." },
        { title: "Review answers", text: "Relevant search and AI systems are assessed using a consistent question set." },
        { title: "Analyse causes", text: "Sources, facts, content, crawlability and the competitive landscape are connected." },
        { title: "Prioritise actions", text: "Findings are ordered by impact, effort and dependencies." }
      ],
      visual: {
        frameLabel: "Illustrative audit workflow",
        statusLabel: "Analysis active",
        scenes: [
          { metric: "24", label: "relevant customer questions", items: ["Local search", "Service choice", "Comparison", "Trust"] },
          { metric: "4", label: "answer systems compared", items: ["ChatGPT", "Claude", "Perplexity", "Google AI"] },
          { metric: "18", label: "signals connected", items: ["Owned website", "Third-party sources", "Business data", "Crawl paths"] },
          { metric: "7", label: "actions ordered by impact", items: ["Immediate", "Next", "Build", "Monitoring"] }
        ]
      }
    },
    related: {
      eyebrow: "Next step",
      title: "Move from the audit into the right implementation",
      items: [
        { title: "GEO optimisation", text: "Overview of the method, services and support models.", href: "/en/geo-optimization/", image: "/images/geo-visibility-stock.webp", imagePosition: "center 44%" },
        { title: "Free AI check", text: "A compact first technical assessment of your website.", href: "/en/#ki-check", image: "/images/contact/project-enquiry.webp", imagePosition: "center 54%" },
        { title: "Discuss your project", text: "Put an audit, relaunch or ongoing optimisation into context.", href: "/en/#kontakt", image: "/images/contact/consultation.webp", imagePosition: "center 42%" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions about a GEO audit",
      items: [
        { question: "Which AI systems are reviewed?", answer: "Depending on your audience and audit scope, we review the visible consumer experiences of ChatGPT, Perplexity, Claude, Microsoft Copilot, Google AI Overviews and AI Mode, and Gemini. Grok or DeepSeek can be included when relevant to your topic. The goal is not the longest platform list, but the systems your customers actually use." },
        { question: "What can a GEO audit examine?", answer: "We assess how often and in which context your business appears, how your offer is described, which sources shape answers, where facts are incomplete or wrong and how you compare with relevant competitors. Time periods, regions or audience groups can be added as a defined review frame when useful." },
        { question: "How many brands or offers can I review?", answer: "A clearly scoped audit usually focuses on one business, one offer and a relevant competitive set. Multiple product lines, locations or distinct competitor groups can be handled as separate review areas and scoped sensibly before work begins." },
        { question: "How many questions are examined?", answer: "ELBSAND does not use rigid prompt plans. The question set follows your offer, the most important decision moments and the agreed audit depth. A relevant selection tested consistently is more useful than a large set of arbitrary prompts with little business context." },
        { question: "How can I improve my visibility in AI search?", answer: "The audit shows where competitors or other sources are preferred and why. We turn those findings into prioritised improvements to facts, content, sources, page structure and technical accessibility. ELBSAND can then plan those measures with you or implement them directly." },
        { question: "Which regions and languages can be considered?", answer: "The core focus is Germany and the DACH market, with local businesses reviewed in their actual service area. Regional and multilingual reviews are possible when the offer, website and audience provide a sound basis for them." },
        { question: "Does an audit guarantee future mentions?", answer: "No. An audit identifies prerequisites, gaps and potential levers. A mention or recommendation by an external system cannot be guaranteed." },
        { question: "Do I already need a large content library?", answer: "No. The audit shows which existing content can be used and where new, clearly supported content would be valuable." }
      ]
    },
    closing: { eyebrow: "Request an audit", title: "Clarity before the next measure.", text: "We first establish what already works, what systems misunderstand and which next step actually makes sense.", cta: "Discuss a GEO audit" }
  }
};
