import type { ServiceLocale, ServicePageContent } from "../service-pages";

type DemoVariant =
  | "visibility-index"
  | "source-map"
  | "competitor-split"
  | "perception-orbit"
  | "factcheck-tilt";

type AiVisibilityPageContent = ServicePageContent & {
  demo: ServicePageContent["demo"] & { variant: DemoVariant };
};

type AiVisibilityPair = Record<ServiceLocale, AiVisibilityPageContent>;

const aiVisibilityDePath = "/ai-sichtbarkeit/";
const aiVisibilityEnPath = "/en/ai-visibility/";

export const aiVisibilityPages: AiVisibilityPair = {
  de: {
    lang: "de",
    slug: "ai-sichtbarkeit",
    alternateDePath: aiVisibilityDePath,
    alternateEnPath: aiVisibilityEnPath,
    meta: {
      title: "AI-Sichtbarkeit für Unternehmen | ELBSAND Design Studio",
      description: "ELBSAND macht sichtbar, wie dein Unternehmen in KI-Antworten auftaucht, welche Themen fehlen und welche Signale als Nächstes gestärkt werden sollten."
    },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", current: "AI-Sichtbarkeit" },
    eyebrow: "AI-Sichtbarkeit",
    title: "Wird dein Unternehmen in KI-Antworten richtig eingeordnet?",
    lead: "Wir beobachten relevante Fragen, Antworten und Quellen über mehrere Systeme hinweg. So wird aus einem schwer greifbaren Eindruck eine nachvollziehbare Sicht auf Präsenz, Kontext und nächste Schritte.",
    primaryCta: "Website-Check anfragen",
    secondaryCta: "Methode ansehen",
    outcomes: [
      { label: "Präsenz", title: "Sichtbarkeit einordnen", text: "Erkenne, bei welchen Fragen dein Angebot auftaucht und wo es übersehen wird." },
      { label: "Kontext", title: "Antworten verstehen", text: "Sieh, ob Systeme Leistung, Standort und Besonderheiten korrekt verbinden." },
      { label: "Richtung", title: "Arbeit priorisieren", text: "Erhalte eine ruhige, begründete Reihenfolge für Inhalte, Quellen und Technik." }
    ],
    demo: {
      variant: "visibility-index",
      eyebrow: "Illustrativer Sichtbarkeitsindex",
      title: "Ein Antwortbild statt einer einzelnen Zahl",
      note: "Illustrative Darstellung – keine echten Kundendaten oder garantierten Rankings.",
      scoreLabel: "Beobachtete Antwortsignale",
      score: "21 / 32",
      checks: [
        { label: "Antwortpräsenz", detail: "Das Unternehmen erscheint in relevanten Fragen, aber nicht durchgehend.", status: "review" },
        { label: "Kontexttreue", detail: "Leistung und Zielgruppe werden überwiegend passend beschrieben.", status: "clear" },
        { label: "Quellenbezug", detail: "Die Antwort stützt sich nur teilweise auf überprüfbare Quellen.", status: "review" },
        { label: "Nächster Hebel", detail: "Klar belegte Leistungsseiten bieten den stärksten Startpunkt.", status: "open" }
      ]
    },
    narratives: [
      {
        eyebrow: "Sichtbarkeit mit Kontext",
        title: "Nicht nur auftauchen. Richtig vorkommen.",
        text: "Eine Erwähnung kann positiv klingen und trotzdem am eigentlichen Angebot vorbeigehen. Wir lesen Antwortmuster deshalb als Zusammenspiel aus Frage, Positionierung, Beleg und Standort.",
        points: ["Fragen mit echter Kaufnähe", "Angebot und lokale Einordnung", "Quellen hinter der Antwort"]
      },
      {
        eyebrow: "Vom Signal zur Entscheidung",
        title: "Was sichtbar wird, braucht eine nächste Handlung.",
        text: "Der Bericht trennt Beobachtung und Interpretation. Du siehst, welche Aussage stabil ist, welche geprüft werden muss und welcher kleine Eingriff eine größere Klarheit schaffen kann.",
        points: ["Antworten nach Themen bündeln", "Unsichere Fakten zuerst prüfen", "Seiten und Quellen gezielt stärken"]
      }
    ],
    method: {
      eyebrow: "Arbeitsweise",
      title: "Vier Schritte von der Beobachtung zum Plan",
      steps: [
        { title: "Fragen auswählen", text: "Wir definieren die Situationen, in denen Menschen nach deiner Leistung, deinem Ort oder deiner Marke fragen." },
        { title: "Antworten sammeln", text: "Ein konsistenter Fragenkatalog macht Systeme und Zeitpunkte vergleichbar, ohne eine Momentaufnahme zu überhöhen." },
        { title: "Muster ordnen", text: "Präsenz, Kontext, Quellen und Abweichungen werden in einem gemeinsamen Antwortbild gelesen." },
        { title: "Hebel bestimmen", text: "Wir übersetzen die Beobachtung in konkrete nächste Arbeit an Seiten, Fakten oder Quellen." }
      ],
      visual: {
        frameLabel: "Illustrativer Antwortindex",
        statusLabel: "Beobachtung aktiv",
        scenes: [
          { metric: "32", label: "Beispielfragen im Index", items: ["Leistung", "Standort", "Vergleich", "Vertrauen"] },
          { metric: "4", label: "Systeme als Vergleichsfläche", items: ["ChatGPT", "Claude", "Perplexity", "Google AI"] },
          { metric: "3", label: "Antwortachsen verbunden", items: ["Präsenz", "Kontext", "Quelle", "Abweichung"] },
          { metric: "5", label: "Prioritäten für die nächste Runde", items: ["Fakten", "Leistungsseite", "Quelle", "Struktur"] }
        ]
      }
    },
    related: {
      eyebrow: "Im Themenfeld weitergehen",
      title: "Die passende Vertiefung zur AI-Sichtbarkeit",
      items: [
        { title: "KI-Quellenanalyse", text: "Welche Belege Antworten tragen und wo Quellenlücken entstehen.", href: "/ki-quellenanalyse/" },
        { title: "KI-Wettbewerbsanalyse", text: "Wie vergleichbare Angebote in denselben Fragen erscheinen.", href: "/ki-wettbewerbsanalyse/" },
        { title: "KI-Markenwahrnehmung", text: "Welche Themen und Töne mit deiner Marke verbunden werden.", href: "/ki-markenwahrnehmung/" },
        { title: "KI-Faktencheck", text: "Welche Aussagen veraltet, unklar oder sachlich falsch sind.", href: "/ki-faktencheck/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Fragen zur AI-Sichtbarkeit",
      items: [
        { question: "Was bedeutet AI-Sichtbarkeit bei ELBSAND?", answer: "Wir beobachten, ob und wie ein Unternehmen in Antworten auf relevante Kundenfragen auftaucht. Dabei zählen Präsenz, Kontext und Quellen – nicht nur die Tatsache, dass ein Name genannt wird." },
        { question: "Welche Systeme werden betrachtet?", answer: "Die Auswahl richtet sich nach Zielgruppe und Thema. Je nach Projekt können unter anderem ChatGPT, Claude, Perplexity und Google AI Overviews in einer einheitlichen Fragelogik einbezogen werden." },
        { question: "Kann ELBSAND eine Empfehlung durch KI garantieren?", answer: "Nein. Externe Antwortsysteme verändern sich und liegen nicht in unserer Kontrolle. Wir schaffen bessere, überprüfbare Grundlagen und machen Veränderungen nachvollziehbar." },
        { question: "Brauche ich dafür neue Inhalte?", answer: "Nicht automatisch. Zuerst prüfen wir vorhandene Seiten, Fakten und Quellen. Neue Inhalte entstehen nur dort, wo eine relevante Frage noch keine klare und belastbare Antwort findet." }
      ]
    },
    closing: { eyebrow: "Nächster Schritt", title: "Mach aus KI-Sichtbarkeit eine klare Arbeitsgrundlage.", text: "Wir starten mit den Fragen, die für dein Unternehmen wirklich zählen, und zeigen dir, was bereits trägt und was als Nächstes verdient, geschärft zu werden.", cta: "AI-Sichtbarkeit besprechen" }
  },
  en: {
    lang: "en",
    slug: "ai-visibility",
    alternateDePath: aiVisibilityDePath,
    alternateEnPath: aiVisibilityEnPath,
    meta: {
      title: "AI Visibility for Businesses | ELBSAND Design Studio",
      description: "ELBSAND shows how your business appears in AI answers, which topics are missing and which signals should be strengthened next."
    },
    breadcrumb: { home: "Home", hub: "GEO optimisation", current: "AI visibility" },
    eyebrow: "AI visibility",
    title: "Is your business being placed correctly in AI answers?",
    lead: "We observe relevant questions, answers and sources across several systems. The result is a grounded view of presence, context and next actions rather than an opaque impression.",
    primaryCta: "Request a website check",
    secondaryCta: "View the method",
    outcomes: [
      { label: "Presence", title: "Classify visibility", text: "See which relevant questions include your offer and where it is overlooked." },
      { label: "Context", title: "Understand answers", text: "Check whether systems connect your service, location and difference correctly." },
      { label: "Direction", title: "Prioritise the work", text: "Receive a calm, reasoned sequence for content, sources and technical foundations." }
    ],
    demo: {
      variant: "visibility-index",
      eyebrow: "Illustrative visibility index",
      title: "An answer picture, not a single score",
      note: "Illustrative interface – no real client data or guaranteed rankings.",
      scoreLabel: "Observed answer signals",
      score: "21 / 32",
      checks: [
        { label: "Answer presence", detail: "The business appears for relevant questions, but not consistently.", status: "review" },
        { label: "Context accuracy", detail: "Service and audience are described in a mostly fitting way.", status: "clear" },
        { label: "Source support", detail: "The answer relies only partly on sources that can be checked.", status: "review" },
        { label: "Next lever", detail: "Clearly evidenced service pages offer the strongest starting point.", status: "open" }
      ]
    },
    narratives: [
      {
        eyebrow: "Visibility with context",
        title: "Do not only appear. Appear correctly.",
        text: "A mention can sound positive and still miss the actual offer. We therefore read answer patterns as a combination of question, positioning, evidence and location.",
        points: ["Questions close to a decision", "Offer and local context", "Sources behind the answer"]
      },
      {
        eyebrow: "From signal to decision",
        title: "A visible signal needs a next action.",
        text: "The report separates observation from interpretation. You can see what is stable, what needs review and which small change could create greater clarity.",
        points: ["Group answers by topic", "Review uncertain facts first", "Strengthen pages and sources deliberately"]
      }
    ],
    method: {
      eyebrow: "How we work",
      title: "Four steps from observation to a plan",
      steps: [
        { title: "Select questions", text: "We define the situations in which people ask about your service, your location or your brand." },
        { title: "Collect answers", text: "A consistent question set makes systems and time points comparable without overstating a snapshot." },
        { title: "Arrange patterns", text: "Presence, context, sources and deviations are read as one answer picture." },
        { title: "Set the levers", text: "We translate the observation into concrete next work on pages, facts or sources." }
      ],
      visual: {
        frameLabel: "Illustrative answer index",
        statusLabel: "Observation active",
        scenes: [
          { metric: "32", label: "sample questions in the index", items: ["Service", "Location", "Comparison", "Trust"] },
          { metric: "4", label: "systems as a comparison field", items: ["ChatGPT", "Claude", "Perplexity", "Google AI"] },
          { metric: "3", label: "answer axes connected", items: ["Presence", "Context", "Source", "Deviation"] },
          { metric: "5", label: "priorities for the next round", items: ["Facts", "Service page", "Source", "Structure"] }
        ]
      }
    },
    related: {
      eyebrow: "Continue in the topic",
      title: "A focused next step for AI visibility",
      items: [
        { title: "AI source analysis", text: "Which evidence supports answers and where source gaps appear.", href: "/en/ai-source-analysis/" },
        { title: "AI competitor analysis", text: "How comparable offers appear for the same questions.", href: "/en/ai-competitor-analysis/" },
        { title: "AI brand perception", text: "Which themes and tones become associated with your brand.", href: "/en/ai-brand-perception/" },
        { title: "AI fact checking", text: "Which statements are outdated, unclear or factually wrong.", href: "/en/ai-fact-checking/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions about AI visibility",
      items: [
        { question: "What does AI visibility mean at ELBSAND?", answer: "We observe whether and how a business appears in answers to relevant customer questions. Presence, context and sources matter, not simply whether a name is mentioned." },
        { question: "Which systems do you consider?", answer: "The selection follows your audience and topic. Depending on the project, ChatGPT, Claude, Perplexity and Google AI Overviews can be included in a consistent question set." },
        { question: "Can ELBSAND guarantee an AI recommendation?", answer: "No. External answer systems change and are outside our control. We build stronger, checkable foundations and make changes easier to understand." },
        { question: "Do I need to publish new content?", answer: "Not automatically. We first assess existing pages, facts and sources. New content is only useful where a relevant question still lacks a clear, supported answer." }
      ]
    },
    closing: { eyebrow: "Next step", title: "Turn AI visibility into a clear working basis.", text: "We begin with the questions that actually matter for your business and show what already holds up and what deserves to be sharpened next.", cta: "Discuss AI visibility" }
  }
};

export const aiSourceAnalysisPages: AiVisibilityPair = {
  de: {
    lang: "de", slug: "ki-quellenanalyse", alternateDePath: "/ki-quellenanalyse/", alternateEnPath: "/en/ai-source-analysis/",
    meta: { title: "KI-Quellenanalyse für Websites | ELBSAND", description: "Die KI-Quellenanalyse zeigt, welche Quellen AI-Antworten über dein Unternehmen stützen, wo Belege fehlen und welche Inhalte Vertrauen aufbauen können." },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", parent: { label: "AI-Sichtbarkeit", href: aiVisibilityDePath }, current: "KI-Quellenanalyse" },
    eyebrow: "KI-Quellenanalyse", title: "Welche Quellen tragen das Bild deines Unternehmens?", lead: "Wir verfolgen, worauf KI-Antworten verweisen und wie belastbar diese Bezüge sind. Daraus entsteht eine Quellenkarte für Inhalte, Fakten und externe Erwähnungen.", primaryCta: "Quellenanalyse anfragen", secondaryCta: "Arbeitsweise ansehen",
    outcomes: [
      { label: "Herkunft", title: "Bezüge nachvollziehen", text: "Verstehe, welche Seiten und externen Quellen in Antworten Gewicht bekommen." },
      { label: "Qualität", title: "Belege einordnen", text: "Trenne klare, veraltete und nur vermutete Quellen voneinander." },
      { label: "Lücke", title: "Quellenarbeit planen", text: "Erkenne, welche Aussage einen besseren eigenen oder externen Beleg braucht." }
    ],
    demo: { variant: "source-map", eyebrow: "Illustrative Quellenkarte", title: "Von der Erwähnung zurück zum Beleg", note: "Illustratives Quellenmodell – keine echten Zitate, Links oder Kundenergebnisse.", scoreLabel: "Belegpfade eingeordnet", score: "8 / 14", checks: [
      { label: "Eigene Leistungsseite", detail: "Der Bezug ist direkt und inhaltlich passend.", status: "clear" },
      { label: "Branchenverzeichnis", detail: "Die Information ist vorhanden, aber nicht vollständig aktuell.", status: "review" },
      { label: "Redaktionelle Erwähnung", detail: "Ein relevanter Kontext fehlt noch als überprüfbarer Beleg.", status: "open" },
      { label: "Standortsignal", detail: "Ort und Leistungsbezug sind in mehreren Quellen konsistent.", status: "clear" }
    ] },
    narratives: [
      { eyebrow: "Quellen sind mehr als Links", title: "Beleg, Kontext und Aktualität zusammen lesen.", text: "Eine Quelle kann vorhanden sein und trotzdem die falsche Aussage stützen. Wir prüfen deshalb Herkunft, Inhalt, Aktualität und die Verbindung zur konkreten Kundenfrage.", points: ["Direkte eigene Quelle", "Externer Kontext", "Aktualität des Belegs"] },
      { eyebrow: "Lücken sichtbar machen", title: "Wo kein Beleg ist, entsteht Interpretationsraum.", text: "Die Analyse zeigt nicht nur fehlende Verweise. Sie macht sichtbar, welche wichtige Aussage noch keinen klaren Anker hat und welche redaktionelle oder technische Arbeit diesen Anker schaffen kann.", points: ["Aussage ohne eindeutige Quelle", "Quelle ohne klare Leistungsseite", "Beleg mit Aktualitätsrisiko"] }
    ],
    method: { eyebrow: "Arbeitsweise", title: "Vier Schritte für eine belastbare Quellenkarte", steps: [
      { title: "Aussagen sammeln", text: "Wir halten relevante Antworten und die darin erkennbaren Bezüge strukturiert fest." },
      { title: "Quellen verfolgen", text: "Eigene Seiten, Profile und externe Erwähnungen werden bis zum konkreten Ursprung gelesen." },
      { title: "Belege bewerten", text: "Passung, Aktualität und redaktionelle Qualität werden getrennt voneinander betrachtet." },
      { title: "Quellen stärken", text: "Du erhältst priorisierte Vorschläge für Fakten, Seitenstruktur und passende externe Kontexte." }
    ], visual: { frameLabel: "Illustrative Quellenkarte", statusLabel: "Quellenpfad aktiv", scenes: [
      { metric: "14", label: "Beispielbezüge erfasst", items: ["Antwort", "Zitat", "Link", "Kontext"] },
      { metric: "4", label: "Quellentypen getrennt", items: ["Eigene Seite", "Profil", "Verzeichnis", "Redaktion"] },
      { metric: "3", label: "Belegachsen geprüft", items: ["Passung", "Aktualität", "Nähe", "Vertrauen"] },
      { metric: "6", label: "Quellenhebel priorisiert", items: ["Fakt", "Seite", "Profil", "Kontext"] }
    ] } },
    related: { eyebrow: "Im Themenfeld weitergehen", title: "Quellen im Kontext der AI-Sichtbarkeit", items: [
      { title: "AI-Sichtbarkeit", text: "Die übergeordnete Sicht auf Präsenz, Kontext und Quellen.", href: aiVisibilityDePath },
      { title: "KI-Faktencheck", text: "Aussagen prüfen, die ohne belastbaren Beleg zirkulieren.", href: "/ki-faktencheck/" },
      { title: "KI-Markenwahrnehmung", text: "Quellen und Themen hinter dem Markenbild einordnen.", href: "/ki-markenwahrnehmung/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Fragen zur KI-Quellenanalyse", items: [
      { question: "Prüft ihr nur Links, die in Antworten sichtbar sind?", answer: "Nein. Sichtbare Verweise sind ein Ausgangspunkt. Wir betrachten auch die Informationsstruktur und externe Kontexte, die eine Aussage plausibel oder unklar machen." },
      { question: "Ist eine eigene Website automatisch die beste Quelle?", answer: "Nicht für jede Frage. Eine eigene Seite kann das Angebot am klarsten erklären, während externe Quellen bei Einordnung und Vertrauen helfen. Entscheidend ist die passende Kombination." },
      { question: "Kann eine Quellenanalyse neue Erwähnungen garantieren?", answer: "Nein. Wir können Quellenqualität und Klarheit verbessern, aber nicht kontrollieren, welche externen Systeme welche Bezüge künftig verwenden." },
      { question: "Was erhalte ich am Ende?", answer: "Eine nachvollziehbare Quellenkarte mit Befunden, Lücken und priorisierten Maßnahmen für bestehende Seiten, Fakten und redaktionelle Kontexte." }
    ] },
    closing: { eyebrow: "Nächster Schritt", title: "Baue Quellen, auf die Antworten sich stützen können.", text: "Wir verfolgen die Wege hinter relevanten Aussagen und zeigen dir, wo ein klarerer Beleg den größten Unterschied machen kann.", cta: "Quellenanalyse besprechen" }
  },
  en: {
    lang: "en", slug: "ai-source-analysis", alternateDePath: "/ki-quellenanalyse/", alternateEnPath: "/en/ai-source-analysis/",
    meta: { title: "AI Source Analysis for Websites | ELBSAND", description: "AI source analysis shows which sources support answers about your business, where evidence is missing and which content can build trust." },
    breadcrumb: { home: "Home", hub: "GEO optimisation", parent: { label: "AI visibility", href: aiVisibilityEnPath }, current: "AI source analysis" },
    eyebrow: "AI source analysis", title: "Which sources carry the picture of your business?", lead: "We trace what AI answers refer to and how dependable those references are. The outcome is a source map for content, facts and external mentions.", primaryCta: "Request source analysis", secondaryCta: "View the approach",
    outcomes: [
      { label: "Origin", title: "Trace the references", text: "Understand which pages and external sources carry weight in answers." },
      { label: "Quality", title: "Classify evidence", text: "Separate clear, outdated and only assumed sources." },
      { label: "Gap", title: "Plan source work", text: "See which statement needs a stronger owned or external reference." }
    ],
    demo: { variant: "source-map", eyebrow: "Illustrative source map", title: "Trace a mention back to its evidence", note: "Illustrative source model – no real citations, links or client results.", scoreLabel: "Evidence paths classified", score: "8 / 14", checks: [
      { label: "Owned service page", detail: "The reference is direct and fits the statement.", status: "clear" },
      { label: "Industry directory", detail: "The information exists but is not fully current.", status: "review" },
      { label: "Editorial mention", detail: "A relevant context is still missing as checkable evidence.", status: "open" },
      { label: "Location signal", detail: "Place and service relationship are consistent across sources.", status: "clear" }
    ] },
    narratives: [
      { eyebrow: "Sources are more than links", title: "Read evidence, context and freshness together.", text: "A source can exist and still support the wrong statement. We therefore review origin, meaning, freshness and its relationship to the actual customer question.", points: ["Direct owned source", "External context", "Evidence freshness"] },
      { eyebrow: "Make gaps visible", title: "Without evidence, interpretation has room to drift.", text: "The analysis does more than list missing references. It shows which important statement has no clear anchor and what editorial or technical work could create one.", points: ["Statement without a clear source", "Source without a clear service page", "Evidence with a freshness risk"] }
    ],
    method: { eyebrow: "How we work", title: "Four steps to a dependable source map", steps: [
      { title: "Collect statements", text: "We capture relevant answers and the references that can be recognised inside them." },
      { title: "Trace sources", text: "Owned pages, profiles and external mentions are read back to the specific origin." },
      { title: "Assess evidence", text: "Fit, freshness and editorial quality are considered as separate dimensions." },
      { title: "Strengthen sources", text: "You receive prioritised suggestions for facts, page structure and useful external context." }
    ], visual: { frameLabel: "Illustrative source map", statusLabel: "Source path active", scenes: [
      { metric: "14", label: "sample references captured", items: ["Answer", "Quote", "Link", "Context"] },
      { metric: "4", label: "source types separated", items: ["Owned page", "Profile", "Directory", "Editorial"] },
      { metric: "3", label: "evidence axes reviewed", items: ["Fit", "Freshness", "Proximity", "Trust"] },
      { metric: "6", label: "source levers prioritised", items: ["Fact", "Page", "Profile", "Context"] }
    ] } },
    related: { eyebrow: "Continue in the topic", title: "Sources in the context of AI visibility", items: [
      { title: "AI visibility", text: "The wider view of presence, context and sources.", href: aiVisibilityEnPath },
      { title: "AI fact checking", text: "Review statements circulating without solid evidence.", href: "/en/ai-fact-checking/" },
      { title: "AI brand perception", text: "Classify the sources and themes behind your brand picture.", href: "/en/ai-brand-perception/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Questions about AI source analysis", items: [
      { question: "Do you only check links visible in answers?", answer: "No. Visible references are a starting point. We also consider information structure and external contexts that make a statement clearer or less dependable." },
      { question: "Is an owned website automatically the best source?", answer: "Not for every question. An owned page can explain the offer most clearly, while external sources can add context and trust. The right combination matters." },
      { question: "Can source analysis guarantee new mentions?", answer: "No. We can improve source quality and clarity, but cannot control which references external systems use in the future." },
      { question: "What do I receive?", answer: "A traceable source map with findings, gaps and prioritised actions for existing pages, facts and editorial contexts." }
    ] },
    closing: { eyebrow: "Next step", title: "Build sources that answers can stand on.", text: "We trace the paths behind relevant statements and show where clearer evidence could make the greatest difference.", cta: "Discuss source analysis" }
  }
};

export const aiCompetitorAnalysisPages: AiVisibilityPair = {
  de: {
    lang: "de", slug: "ki-wettbewerbsanalyse", alternateDePath: "/ki-wettbewerbsanalyse/", alternateEnPath: "/en/ai-competitor-analysis/",
    meta: { title: "KI-Wettbewerbsanalyse für Unternehmen | ELBSAND", description: "Die KI-Wettbewerbsanalyse vergleicht, wie ähnliche Angebote in relevanten Antworten erscheinen und wo deine eigene Position klarer werden kann." },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", parent: { label: "AI-Sichtbarkeit", href: aiVisibilityDePath }, current: "KI-Wettbewerbsanalyse" },
    eyebrow: "KI-Wettbewerbsanalyse", title: "Was wird im gleichen Antwortfeld über andere Angebote gesagt?", lead: "Wir vergleichen nicht bloß Namen oder Rankings. Wir untersuchen, welche Fragen, Merkmale und Belege vergleichbare Unternehmen in KI-Antworten besetzen – und wo eine eigene, ehrliche Differenz sichtbar werden kann.", primaryCta: "Wettbewerbsanalyse anfragen", secondaryCta: "Vergleichsmethode ansehen",
    outcomes: [
      { label: "Vergleich", title: "Antwortfelder erkennen", text: "Sieh, bei welchen Fragen ähnliche Angebote bereits als Referenz auftauchen." },
      { label: "Differenz", title: "Eigene Stärke schärfen", text: "Finde Merkmale, die dein Angebot verständlich von Alternativen unterscheiden." },
      { label: "Chance", title: "Lücken sinnvoll nutzen", text: "Priorisiere Themen, bei denen Klarheit statt lauter Behauptungen fehlt." }
    ],
    demo: { variant: "competitor-split", eyebrow: "Illustrativer Vergleichsrahmen", title: "Zwei Antwortbilder, ein gemeinsames Thema", note: "Illustrative Vergleichsansicht – keine echten Marktanteile, Rankings oder Kundendaten.", scoreLabel: "Vergleichsfelder mit Signal", score: "6 / 11", checks: [
      { label: "Gemeinsames Thema", detail: "Beide Angebote werden bei derselben Leistungsfrage genannt.", status: "clear" },
      { label: "Eigene Differenz", detail: "Ein konkretes Merkmal wird im eigenen Antwortbild nicht zuverlässig erklärt.", status: "open" },
      { label: "Quellenmuster", detail: "Vergleichbare Anbieter werden häufiger über externe Kontexte eingeordnet.", status: "review" },
      { label: "Frage mit Potenzial", detail: "Eine lokale Entscheidungssituation ist noch wenig besetzt.", status: "review" }
    ] },
    narratives: [
      { eyebrow: "Vergleich ohne Lautstärke", title: "Wettbewerb ist ein Antwortkontext, kein Pokal.", text: "Wir behaupten keine Marktführerschaft aus einer Momentaufnahme. Stattdessen zeigen wir, welche Eigenschaften im selben Themenfeld wiederkehren und wie verständlich dein eigenes Angebot daneben erscheint.", points: ["Gemeinsame Kundenfrage", "Wiederkehrendes Merkmal", "Eigener Unterschied"] },
      { eyebrow: "Strategisch nutzbar", title: "Eine Lücke ist nur dann eine Chance, wenn sie passt.", text: "Aus dem Vergleich entstehen keine künstlichen Versprechen. Wir suchen nach einer präzisen Frage, einer belegbaren Stärke oder einem Inhalt, der deine Entscheidungshilfe besser macht.", points: ["Relevanz vor Reichweite", "Belegbare Differenz", "Nächster Inhaltsschritt"] }
    ],
    method: { eyebrow: "Arbeitsweise", title: "Vier Schritte für einen fairen Vergleich", steps: [
      { title: "Vergleichsfeld wählen", text: "Wir grenzen Thema, Region und Entscheidungssituation ein, damit der Vergleich nicht beliebig wird." },
      { title: "Antwortbilder sammeln", text: "Ein einheitlicher Fragenrahmen macht Unterschiede in Präsenz, Beschreibung und Belegen lesbar." },
      { title: "Muster trennen", text: "Gemeinsame Merkmale, echte Differenzen und reine Datenlücken werden nicht vermischt." },
      { title: "Chance formulieren", text: "Du erhältst eine klare Richtung für Positionierung, Seitenstruktur und Quellenarbeit." }
    ], visual: { frameLabel: "Illustrativer Antwortvergleich", statusLabel: "Vergleich aktiv", scenes: [
      { metric: "11", label: "Beispielfragen im Feld", items: ["Auswahl", "Preis", "Ort", "Vertrauen"] },
      { metric: "2", label: "Antwortbilder nebeneinander", items: ["Eigenes Angebot", "Vergleich A", "Gemeinsam", "Unklar"] },
      { metric: "4", label: "Differenzsignale getrennt", items: ["Merkmal", "Beleg", "Ton", "Lücke"] },
      { metric: "3", label: "Chancen für die nächste Runde", items: ["Schärfen", "Belegen", "Erklären", "Beobachten"] }
    ] } },
    related: { eyebrow: "Im Themenfeld weitergehen", title: "Vergleich als Teil der AI-Sichtbarkeit", items: [
      { title: "AI-Sichtbarkeit", text: "Präsenz und Kontext im gesamten Antwortfeld einordnen.", href: aiVisibilityDePath },
      { title: "KI-Quellenanalyse", text: "Die Belege hinter dem Vergleich nachvollziehen.", href: "/ki-quellenanalyse/" },
      { title: "KI-Markenwahrnehmung", text: "Verstehen, welcher Ton und welche Themen hängen bleiben.", href: "/ki-markenwahrnehmung/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Fragen zur KI-Wettbewerbsanalyse", items: [
      { question: "Vergleicht ihr konkrete Wettbewerber?", answer: "Nur, wenn sie für die definierte Kundenfrage und Region tatsächlich relevant sind. Die Analyse kann auch mit einem anonymisierten Vergleichsfeld arbeiten." },
      { question: "Ist das Ergebnis ein Marktanteilsbericht?", answer: "Nein. Wir liefern eine qualitative und nachvollziehbare Sicht auf Antwortmuster, Merkmale und Quellen – keine Hochrechnung realer Marktanteile." },
      { question: "Kann ich dadurch Wettbewerber überholen?", answer: "Das lässt sich nicht versprechen. Der Vergleich zeigt, wo dein Angebot klarer, belegbarer oder hilfreicher erklärt werden kann." },
      { question: "Welche Vorarbeit braucht ihr?", answer: "Ein kurzer Überblick über Angebot, Region und wichtige Entscheidungssituationen reicht für den Start. Die Fragen und Vergleichskriterien schärfen wir gemeinsam." }
    ] },
    closing: { eyebrow: "Nächster Schritt", title: "Finde deine faire Differenz im Antwortfeld.", text: "Wir vergleichen mit Ruhe und klaren Kriterien, damit aus Wettbewerbsbeobachtung eine glaubwürdige nächste Entscheidung wird.", cta: "Wettbewerbsanalyse besprechen" }
  },
  en: {
    lang: "en", slug: "ai-competitor-analysis", alternateDePath: "/ki-wettbewerbsanalyse/", alternateEnPath: "/en/ai-competitor-analysis/",
    meta: { title: "AI Competitor Analysis for Businesses | ELBSAND", description: "AI competitor analysis compares how similar offers appear in relevant answers and where your own position can become clearer." },
    breadcrumb: { home: "Home", hub: "GEO optimisation", parent: { label: "AI visibility", href: aiVisibilityEnPath }, current: "AI competitor analysis" },
    eyebrow: "AI competitor analysis", title: "What is said about other offers in the same answer field?", lead: "We do not compare names or rankings alone. We study which questions, traits and evidence comparable businesses occupy in AI answers – and where an honest difference can become clearer.", primaryCta: "Request competitor analysis", secondaryCta: "View comparison method",
    outcomes: [
      { label: "Comparison", title: "See the answer field", text: "Understand which questions already place similar offers in a reference position." },
      { label: "Difference", title: "Sharpen your strength", text: "Find traits that make your offer understandable beside alternatives." },
      { label: "Opportunity", title: "Use gaps carefully", text: "Prioritise topics where clarity is missing instead of making louder claims." }
    ],
    demo: { variant: "competitor-split", eyebrow: "Illustrative comparison frame", title: "Two answer pictures, one shared topic", note: "Illustrative comparison view – no real market shares, rankings or client data.", scoreLabel: "Comparison fields with a signal", score: "6 / 11", checks: [
      { label: "Shared topic", detail: "Both offers appear for the same service question.", status: "clear" },
      { label: "Own difference", detail: "One concrete trait is not explained reliably in the own answer picture.", status: "open" },
      { label: "Source pattern", detail: "Comparable providers are more often placed through external context.", status: "review" },
      { label: "Question with potential", detail: "A local decision moment is not yet strongly occupied.", status: "review" }
    ] },
    narratives: [
      { eyebrow: "Comparison without noise", title: "Competition is an answer context, not a trophy.", text: "We do not claim market leadership from a snapshot. Instead, we show which traits recur in the topic and how clearly your own offer appears alongside them.", points: ["Shared customer question", "Recurring trait", "Own difference"] },
      { eyebrow: "Useful strategy", title: "A gap only matters when it fits.", text: "The comparison does not produce artificial promises. We look for a precise question, a provable strength or content that can improve the decision help you offer.", points: ["Relevance before reach", "Provable difference", "Next content move"] }
    ],
    method: { eyebrow: "How we work", title: "Four steps to a fair comparison", steps: [
      { title: "Choose the field", text: "We define topic, region and decision moment so the comparison stays meaningful." },
      { title: "Collect answer pictures", text: "A consistent question frame makes differences in presence, description and evidence readable." },
      { title: "Separate patterns", text: "Shared traits, real differences and simple data gaps are not mixed together." },
      { title: "Form the opportunity", text: "You receive a clear direction for positioning, page structure and source work." }
    ], visual: { frameLabel: "Illustrative answer comparison", statusLabel: "Comparison active", scenes: [
      { metric: "11", label: "sample questions in the field", items: ["Choice", "Price", "Location", "Trust"] },
      { metric: "2", label: "answer pictures side by side", items: ["Own offer", "Comparison A", "Shared", "Unclear"] },
      { metric: "4", label: "difference signals separated", items: ["Trait", "Evidence", "Tone", "Gap"] },
      { metric: "3", label: "opportunities for the next round", items: ["Sharpen", "Evidence", "Explain", "Observe"] }
    ] } },
    related: { eyebrow: "Continue in the topic", title: "Comparison as part of AI visibility", items: [
      { title: "AI visibility", text: "Classify presence and context across the answer field.", href: aiVisibilityEnPath },
      { title: "AI source analysis", text: "Trace the evidence behind the comparison.", href: "/en/ai-source-analysis/" },
      { title: "AI brand perception", text: "Understand which tone and themes remain associated.", href: "/en/ai-brand-perception/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Questions about AI competitor analysis", items: [
      { question: "Do you compare named competitors?", answer: "Only when they are genuinely relevant to the defined customer question and region. The work can also use an anonymised comparison field." },
      { question: "Is this a market share report?", answer: "No. We provide a qualitative, traceable view of answer patterns, traits and sources, not an estimate of real market share." },
      { question: "Can this help me outrank competitors?", answer: "That cannot be promised. The comparison shows where your offer could be explained more clearly, credibly or helpfully." },
      { question: "What do you need to begin?", answer: "A short view of your offer, region and key decision moments is enough. We refine questions and comparison criteria together." }
    ] },
    closing: { eyebrow: "Next step", title: "Find your fair difference in the answer field.", text: "We compare with calm and clear criteria so competitor observation can become a credible next decision.", cta: "Discuss competitor analysis" }
  }
};

export const aiBrandPerceptionPages: AiVisibilityPair = {
  de: {
    lang: "de", slug: "ki-markenwahrnehmung", alternateDePath: "/ki-markenwahrnehmung/", alternateEnPath: "/en/ai-brand-perception/",
    meta: { title: "KI-Markenwahrnehmung analysieren | ELBSAND", description: "Die KI-Markenwahrnehmung zeigt, welche Themen, Eigenschaften und Stimmungen mit deiner Marke verbunden werden und wo die Erzählung unklar bleibt." },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", parent: { label: "AI-Sichtbarkeit", href: aiVisibilityDePath }, current: "KI-Markenwahrnehmung" },
    eyebrow: "KI-Markenwahrnehmung", title: "Welche Geschichte erzählt KI über deine Marke?", lead: "Wir ordnen wiederkehrende Themen, Tonalität und Zuschreibungen in AI-Antworten. So erkennst du, ob die Außenwahrnehmung zu deinem tatsächlichen Angebot passt.", primaryCta: "Markenwahrnehmung anfragen", secondaryCta: "Analyse ansehen",
    outcomes: [
      { label: "Themen", title: "Wiederholungen erkennen", text: "Sieh, welche Eigenschaften und Leistungen in Antworten immer wieder auftauchen." },
      { label: "Tonalität", title: "Wirkung einordnen", text: "Verstehe, ob deine Marke sachlich, persönlich, spezialisiert oder beliebig beschrieben wird." },
      { label: "Klarheit", title: "Erzählung schärfen", text: "Arbeite dort nach, wo Wahrnehmung und tatsächliches Angebot auseinanderdriften." }
    ],
    demo: { variant: "perception-orbit", eyebrow: "Illustratives Wahrnehmungsbild", title: "Themen kreisen um einen Markenkern", note: "Illustrative Themenansicht – keine echten Sentiment-Messungen oder Kundenergebnisse.", scoreLabel: "Wahrnehmungssignale gebündelt", score: "9 / 15", checks: [
      { label: "Leistung", detail: "Das Kernangebot wird in den Antworten wiedererkennbar benannt.", status: "clear" },
      { label: "Persönlichkeit", detail: "Ein menschlicher Ton ist vorhanden, aber nicht in jeder Antwort stabil.", status: "review" },
      { label: "Spezialisierung", detail: "Die besondere Perspektive bleibt gegenüber allgemeinen Begriffen zu leise.", status: "open" },
      { label: "Vertrauenssignal", detail: "Belege und konkrete Beispiele stützen die Einordnung teilweise.", status: "review" }
    ] },
    narratives: [
      { eyebrow: "Wahrnehmung ist ein Muster", title: "Einzelne Wörter erklären noch keine Marke.", text: "Wir betrachten, welche Themen gemeinsam auftreten und welche Aussage dadurch entsteht. So wird aus verstreuten Beschreibungen ein Bild, das du prüfen kannst.", points: ["Wiederkehrendes Thema", "Verbundene Eigenschaft", "Ausgelassene Besonderheit"] },
      { eyebrow: "Passung statt Imagepflege", title: "Die passende Erzählung ist belegbar.", text: "Ziel ist keine künstliche Stimmung. Wir suchen nach klaren Formulierungen, Fakten und Seiten, die deine tatsächliche Arbeitsweise verständlich machen.", points: ["Angebot konkret benennen", "Eigenschaften mit Belegen verbinden", "Unklare Begriffe ersetzen"] }
    ],
    method: { eyebrow: "Arbeitsweise", title: "Vier Schritte zur klaren Markenwahrnehmung", steps: [
      { title: "Markenfragen definieren", text: "Wir wählen Fragen, in denen deine Marke und ihre Besonderheiten für Entscheidungen relevant werden." },
      { title: "Antwortmuster lesen", text: "Themen, Ton und Zuschreibungen werden über mehrere Antwortkontexte hinweg gesammelt." },
      { title: "Kern und Drift trennen", text: "Stabile Aussagen werden von unklaren, widersprüchlichen oder zu allgemeinen Bildern getrennt." },
      { title: "Klarheit verankern", text: "Wir priorisieren Seiten, Fakten und Formulierungen, die das echte Angebot besser tragen." }
    ], visual: { frameLabel: "Illustrativer Wahrnehmungskern", statusLabel: "Muster aktiv", scenes: [
      { metric: "15", label: "Beispielzuschreibungen gesammelt", items: ["Leistung", "Ton", "Ort", "Haltung"] },
      { metric: "4", label: "Themenfelder getrennt", items: ["Kern", "Beleg", "Drift", "Lücke"] },
      { metric: "3", label: "Wahrnehmungsachsen verbunden", items: ["Sachlich", "Persönlich", "Spezifisch", "Unklar"] },
      { metric: "4", label: "Klarheitsschritte priorisiert", items: ["Benennen", "Belegen", "Ordnen", "Beobachten"] }
    ] } },
    related: { eyebrow: "Im Themenfeld weitergehen", title: "Markenwahrnehmung im Antwortkontext", items: [
      { title: "AI-Sichtbarkeit", text: "Die übergeordnete Sicht auf Präsenz und Kontext.", href: aiVisibilityDePath },
      { title: "KI-Quellenanalyse", text: "Prüfen, worauf die Markenerzählung sich stützt.", href: "/ki-quellenanalyse/" },
      { title: "KI-Faktencheck", text: "Unklare Aussagen aus der Erzählung herausarbeiten.", href: "/ki-faktencheck/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Fragen zur KI-Markenwahrnehmung", items: [
      { question: "Messt ihr Stimmung wie ein Social-Listening-Tool?", answer: "Nicht im Sinn einer repräsentativen Sentiment-Messung. Wir analysieren Antwortmuster und ihre Themen, Tonalität und Belege im definierten Nutzungskontext." },
      { question: "Was passiert, wenn das Bild nicht zu uns passt?", answer: "Wir trennen Missverständnis, fehlenden Kontext und tatsächliche Unschärfe. Danach priorisieren wir die Stellen, an denen eine klare Seite oder ein Fakt helfen kann." },
      { question: "Kann man eine gewünschte Markenwahrnehmung erzwingen?", answer: "Nein. Wahrnehmung entsteht aus vielen Signalen. Wir können nur daran arbeiten, dass dein tatsächliches Angebot konsistent, verständlich und belegbar erscheint." },
      { question: "Ist die Analyse auch für kleine Unternehmen sinnvoll?", answer: "Ja. Gerade bei lokalen Unternehmen helfen wenige, gut gewählte Themen und Quellen oft mehr als eine große Menge allgemeiner Kommunikation." }
    ] },
    closing: { eyebrow: "Nächster Schritt", title: "Sorge dafür, dass deine Marke verständlich bleibt.", text: "Wir lesen das Antwortbild mit dir gemeinsam und übersetzen es in klare, belegbare Signale für dein tatsächliches Angebot.", cta: "Markenwahrnehmung besprechen" }
  },
  en: {
    lang: "en", slug: "ai-brand-perception", alternateDePath: "/ki-markenwahrnehmung/", alternateEnPath: "/en/ai-brand-perception/",
    meta: { title: "AI Brand Perception Analysis | ELBSAND", description: "AI brand perception analysis shows which themes, traits and tones become associated with your brand and where the story remains unclear." },
    breadcrumb: { home: "Home", hub: "GEO optimisation", parent: { label: "AI visibility", href: aiVisibilityEnPath }, current: "AI brand perception" },
    eyebrow: "AI brand perception", title: "What story does AI tell about your brand?", lead: "We classify recurring themes, tone and associations in AI answers. You can see whether the outside picture fits the offer you actually deliver.", primaryCta: "Request brand perception analysis", secondaryCta: "View the analysis",
    outcomes: [
      { label: "Themes", title: "Recognise repetition", text: "See which traits and services keep appearing in answers." },
      { label: "Tone", title: "Classify the effect", text: "Understand whether your brand is described as factual, personal, specialist or generic." },
      { label: "Clarity", title: "Sharpen the story", text: "Work where perception and the actual offer drift apart." }
    ],
    demo: { variant: "perception-orbit", eyebrow: "Illustrative perception picture", title: "Themes orbit a brand core", note: "Illustrative theme view – no real sentiment measurement or client results.", scoreLabel: "Perception signals grouped", score: "9 / 15", checks: [
      { label: "Service", detail: "The core offer is named recognisably in answers.", status: "clear" },
      { label: "Personality", detail: "A human tone is present but not stable in every answer.", status: "review" },
      { label: "Specialism", detail: "The distinctive point of view stays too quiet beside general terms.", status: "open" },
      { label: "Trust signal", detail: "Evidence and specific examples partly support the classification.", status: "review" }
    ] },
    narratives: [
      { eyebrow: "Perception is a pattern", title: "A few words do not explain a brand.", text: "We look at which themes appear together and what statement that combination creates. Scattered descriptions become a picture you can examine.", points: ["Recurring theme", "Connected trait", "Missing distinction"] },
      { eyebrow: "Fit over image work", title: "The right story can be evidenced.", text: "The goal is not an artificial mood. We look for clear language, facts and pages that make the way you actually work understandable.", points: ["Name the offer precisely", "Connect traits to evidence", "Replace unclear terms"] }
    ],
    method: { eyebrow: "How we work", title: "Four steps to a clearer brand perception", steps: [
      { title: "Define brand questions", text: "We choose questions where your brand and its difference matter to a decision." },
      { title: "Read answer patterns", text: "Themes, tone and associations are captured across several answer contexts." },
      { title: "Separate core and drift", text: "Stable statements are separated from unclear, conflicting or overly general pictures." },
      { title: "Anchor clarity", text: "We prioritise pages, facts and wording that can carry the real offer more clearly." }
    ], visual: { frameLabel: "Illustrative perception core", statusLabel: "Pattern active", scenes: [
      { metric: "15", label: "sample associations captured", items: ["Service", "Tone", "Place", "Position"] },
      { metric: "4", label: "theme fields separated", items: ["Core", "Evidence", "Drift", "Gap"] },
      { metric: "3", label: "perception axes connected", items: ["Factual", "Personal", "Specific", "Unclear"] },
      { metric: "4", label: "clarity moves prioritised", items: ["Name", "Evidence", "Order", "Observe"] }
    ] } },
    related: { eyebrow: "Continue in the topic", title: "Brand perception in the answer context", items: [
      { title: "AI visibility", text: "The wider view of presence and context.", href: aiVisibilityEnPath },
      { title: "AI source analysis", text: "Review what the brand story is built on.", href: "/en/ai-source-analysis/" },
      { title: "AI fact checking", text: "Surface unclear statements inside the story.", href: "/en/ai-fact-checking/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Questions about AI brand perception", items: [
      { question: "Do you measure sentiment like a social listening tool?", answer: "Not as a representative sentiment measurement. We analyse answer patterns, themes, tone and evidence in a defined usage context." },
      { question: "What if the picture does not fit us?", answer: "We separate misunderstanding, missing context and genuine ambiguity. We then prioritise where a clearer page or fact could help." },
      { question: "Can you force a desired brand perception?", answer: "No. Perception grows from many signals. We can work towards a consistent, understandable and evidenced presentation of the offer you actually provide." },
      { question: "Is this useful for small businesses?", answer: "Yes. For local businesses, a few well-chosen themes and sources can often help more than a large volume of generic communication." }
    ] },
    closing: { eyebrow: "Next step", title: "Keep your brand understandable in the answer field.", text: "We read the answer picture with you and translate it into clear, evidenced signals for the offer you actually deliver.", cta: "Discuss brand perception" }
  }
};

export const aiFactCheckingPages: AiVisibilityPair = {
  de: {
    lang: "de", slug: "ki-faktencheck", alternateDePath: "/ki-faktencheck/", alternateEnPath: "/en/ai-fact-checking/",
    meta: { title: "KI-Faktencheck für Unternehmensangaben | ELBSAND", description: "Der KI-Faktencheck findet veraltete, unklare oder falsche Unternehmensangaben in AI-Antworten und ordnet die passende Korrekturquelle." },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", parent: { label: "AI-Sichtbarkeit", href: aiVisibilityDePath }, current: "KI-Faktencheck" },
    eyebrow: "KI-Faktencheck", title: "Stimmen die Fakten, die KI über dich nennt?", lead: "Wir prüfen Aussagen zu Angebot, Ort, Erfahrung und Rahmenbedingungen gegen nachvollziehbare Quellen. So werden sachliche Fehler dort sichtbar, wo sie Entscheidungen beeinflussen können.", primaryCta: "Faktencheck anfragen", secondaryCta: "Prüfschritte ansehen",
    outcomes: [
      { label: "Genauigkeit", title: "Aussagen verifizieren", text: "Trenne belastbare Angaben von Sätzen, die nur plausibel klingen." },
      { label: "Aktualität", title: "Änderungen finden", text: "Erkenne veraltete Leistungen, Orte, Zeiten oder Zuständigkeiten." },
      { label: "Korrektur", title: "Quelle festlegen", text: "Ordne jedem Befund eine klare, gepflegte Referenz für die weitere Arbeit zu." }
    ],
    demo: { variant: "factcheck-tilt", eyebrow: "Illustrative Faktenansicht", title: "Ein großer Genauigkeits-Check für kleine Aussagen", note: "Illustratives redaktionelles Fakt-Interface – keine echten Kundendaten. Die dunkle Split-Komposition und das geneigte Accuracy-Panel sind eine interne Szenenrichtung für eine spätere ELBSAND-Grafik.", scoreLabel: "Aussagen mit Prüfstatus", score: "7 / 12", checks: [
      { label: "Leistungsumfang", detail: "Die aktuelle Angebotsseite bestätigt die Aussage.", status: "clear" },
      { label: "Standortangabe", detail: "Eine ältere Drittquelle nennt noch eine frühere Adresse.", status: "review" },
      { label: "Erfahrungswert", detail: "Die Zahl ist nicht mit einer gepflegten Quelle verknüpft.", status: "open" },
      { label: "Kontaktweg", detail: "Die primäre Kontaktmöglichkeit ist eindeutig auffindbar.", status: "clear" }
    ] },
    narratives: [
      { eyebrow: "Fakten statt Bauchgefühl", title: "Eine kleine Ungenauigkeit kann große Verwirrung stiften.", text: "Wir prüfen nicht jede Formulierung auf Stil. Im Fokus stehen Angaben, die Vertrauen, Auswahl oder den nächsten Kontakt beeinflussen – mit einer Quelle, die du selbst pflegen kannst.", points: ["Leistung und Umfang", "Ort und Zuständigkeit", "Zahl und Zeitpunkt"] },
      { eyebrow: "Korrektur mit Herkunft", title: "Jeder Befund braucht einen verantwortlichen Anker.", text: "Eine Korrektur ist erst dauerhaft hilfreich, wenn klar ist, welche Seite oder Quelle künftig maßgeblich sein soll. Deshalb dokumentieren wir neben dem Fehler auch seinen besten Pflegeort.", points: ["Aussage markieren", "Quelle bestimmen", "Änderung beobachten"] }
    ],
    method: { eyebrow: "Arbeitsweise", title: "Vier Schritte für verlässliche Fakten", steps: [
      { title: "Faktenfragen wählen", text: "Wir beginnen mit Angaben, die für Kundinnen und Kunden wirklich entscheidungsrelevant sind." },
      { title: "Aussagen prüfen", text: "Antworten und verfügbare Quellen werden auf Übereinstimmung, Aktualität und Eindeutigkeit gelesen." },
      { title: "Risiko einordnen", text: "Ein alter Kontaktweg ist anders zu behandeln als eine falsche Leistungs- oder Sicherheitsaussage." },
      { title: "Korrektur verankern", text: "Wir legen fest, wo die richtige Information gepflegt und später erneut kontrolliert wird." }
    ], visual: { frameLabel: "Illustrativer Accuracy Check", statusLabel: "Faktenprüfung aktiv", scenes: [
      { metric: "12", label: "Beispielaussagen gesammelt", items: ["Leistung", "Ort", "Zeit", "Kontakt"] },
      { metric: "4", label: "Quellentypen abgeglichen", items: ["Website", "Profil", "Verzeichnis", "Antwort"] },
      { metric: "3", label: "Genauigkeitsrisiken getrennt", items: ["Veraltet", "Unklar", "Falsch", "Belegt"] },
      { metric: "5", label: "Korrekturen nach Risiko", items: ["Sofort", "Quelle", "Seite", "Beobachten"] }
    ] } },
    related: { eyebrow: "Im Themenfeld weitergehen", title: "Faktenpflege als Teil der AI-Sichtbarkeit", items: [
      { title: "AI-Sichtbarkeit", text: "Antwortpräsenz und Kontext im Ganzen betrachten.", href: aiVisibilityDePath },
      { title: "KI-Quellenanalyse", text: "Den Herkunftspfad einer Aussage nachvollziehen.", href: "/ki-quellenanalyse/" },
      { title: "KI-Markenwahrnehmung", text: "Verstehen, welche Eigenschaften aus Fakten entstehen.", href: "/ki-markenwahrnehmung/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Fragen zum KI-Faktencheck", items: [
      { question: "Was gilt bei euch als Fakt?", answer: "Wir betrachten konkrete, überprüfbare Angaben wie Leistungen, Orte, Zeiten, Zuständigkeiten oder Zahlen – nicht subjektive Geschmacksurteile." },
      { question: "Könnt ihr falsche Antworten direkt korrigieren?", answer: "Nein. Wir können die maßgeblichen Quellen und Korrekturen vorbereiten. Wie externe Systeme diese Änderungen aufnehmen, liegt nicht in unserer Kontrolle." },
      { question: "Muss jede Abweichung sofort geändert werden?", answer: "Nicht zwingend. Wir ordnen Befunde nach möglichem Schaden, Relevanz und Aufwand, damit zuerst die Angaben mit echter Entscheidungswirkung sauber werden." },
      { question: "Ist der Faktencheck einmalig?", answer: "Er kann einmalig als Ausgangspunkt oder wiederkehrend für sensible Angaben eingesetzt werden. Das passende Intervall hängt von Änderungsfrequenz und Thema ab." }
    ] },
    closing: { eyebrow: "Nächster Schritt", title: "Halte die Fakten hinter deiner Sichtbarkeit sauber.", text: "Wir prüfen die Aussagen, bei denen Genauigkeit zählt, und machen Korrektur und Pflege für dich nachvollziehbar.", cta: "Faktencheck besprechen" }
  },
  en: {
    lang: "en", slug: "ai-fact-checking", alternateDePath: "/ki-faktencheck/", alternateEnPath: "/en/ai-fact-checking/",
    meta: { title: "AI Fact Checking for Business Information | ELBSAND", description: "AI fact checking finds outdated, unclear or incorrect business statements in AI answers and assigns the right source for correction." },
    breadcrumb: { home: "Home", hub: "GEO optimisation", parent: { label: "AI visibility", href: aiVisibilityEnPath }, current: "AI fact checking" },
    eyebrow: "AI fact checking", title: "Are the facts AI gives about you correct?", lead: "We check statements about your offer, location, experience and practical details against traceable sources. This makes factual errors visible where they can influence a decision.", primaryCta: "Request fact checking", secondaryCta: "View the checks",
    outcomes: [
      { label: "Accuracy", title: "Verify statements", text: "Separate supported information from sentences that merely sound plausible." },
      { label: "Freshness", title: "Find changes", text: "Spot outdated services, locations, opening details or responsibilities." },
      { label: "Correction", title: "Assign a source", text: "Give each finding a clear, maintained reference for the work ahead." }
    ],
    demo: { variant: "factcheck-tilt", eyebrow: "Illustrative fact view", title: "A large accuracy check for small statements", note: "Illustrative editorial fact interface – no real client data. The dark split composition and tilted accuracy panel are an internal scene direction for a future ELBSAND graphic.", scoreLabel: "Statements with a review status", score: "7 / 12", checks: [
      { label: "Service scope", detail: "The current service page supports the statement.", status: "clear" },
      { label: "Location detail", detail: "An older third-party source still lists a former address.", status: "review" },
      { label: "Experience figure", detail: "The number is not connected to a maintained source.", status: "open" },
      { label: "Contact path", detail: "The primary way to get in touch is clearly findable.", status: "clear" }
    ] },
    narratives: [
      { eyebrow: "Facts over instinct", title: "A small inaccuracy can create real confusion.", text: "We do not style-check every sentence. We focus on details that influence trust, choice or the next contact, with a source you can maintain yourself.", points: ["Service and scope", "Place and responsibility", "Number and date"] },
      { eyebrow: "Correction with origin", title: "Every finding needs a responsible anchor.", text: "A correction only remains useful when it is clear which page or source should become authoritative. We therefore document the best maintenance point alongside the issue.", points: ["Mark the statement", "Assign the source", "Observe the change"] }
    ],
    method: { eyebrow: "How we work", title: "Four steps to dependable facts", steps: [
      { title: "Choose fact questions", text: "We start with details that genuinely matter to customer decisions." },
      { title: "Check statements", text: "Answers and available sources are read for agreement, freshness and clarity." },
      { title: "Classify risk", text: "An old contact path needs a different response from a wrong service or safety statement." },
      { title: "Anchor correction", text: "We decide where the right information should be maintained and reviewed again." }
    ], visual: { frameLabel: "Illustrative accuracy check", statusLabel: "Fact check active", scenes: [
      { metric: "12", label: "sample statements collected", items: ["Service", "Place", "Time", "Contact"] },
      { metric: "4", label: "source types compared", items: ["Website", "Profile", "Directory", "Answer"] },
      { metric: "3", label: "accuracy risks separated", items: ["Outdated", "Unclear", "Wrong", "Supported"] },
      { metric: "5", label: "corrections ordered by risk", items: ["Immediate", "Source", "Page", "Observe"] }
    ] } },
    related: { eyebrow: "Continue in the topic", title: "Fact maintenance as part of AI visibility", items: [
      { title: "AI visibility", text: "Consider answer presence and context as a whole.", href: aiVisibilityEnPath },
      { title: "AI source analysis", text: "Trace where a statement originally comes from.", href: "/en/ai-source-analysis/" },
      { title: "AI brand perception", text: "Understand which traits facts create around a brand.", href: "/en/ai-brand-perception/" }
    ] },
    faq: { eyebrow: "FAQ", title: "Questions about AI fact checking", items: [
      { question: "What counts as a fact in your work?", answer: "We focus on concrete, checkable information such as services, locations, dates, responsibilities or numbers, not subjective taste judgements." },
      { question: "Can you correct a wrong answer directly?", answer: "No. We can prepare the authoritative sources and corrections. How external systems absorb those changes is outside our control." },
      { question: "Does every mismatch need an immediate fix?", answer: "Not necessarily. We order findings by possible harm, relevance and effort so details with real decision impact are handled first." },
      { question: "Is fact checking a one-time service?", answer: "It can be a one-time baseline or a recurring check for sensitive details. The right interval depends on how often the information and topic change." }
    ] },
    closing: { eyebrow: "Next step", title: "Keep the facts behind your visibility clean.", text: "We check the statements where accuracy matters and make correction and maintenance understandable.", cta: "Discuss fact checking" }
  }
};
