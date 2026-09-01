import type { ServiceLocale, ServicePageContent } from "../service-pages";

type DemoVariant = "prompt-constellation" | "monitoring-timeline" | "action-queue";
type ResearchSupportContent = Omit<ServicePageContent, "demo"> & {
  demo: ServicePageContent["demo"] & { variant: DemoVariant };
};

export const promptResearchPages: Record<ServiceLocale, ResearchSupportContent> = {
  de: {
    lang: "de",
    slug: "prompt-recherche",
    alternateDePath: "/prompt-recherche/",
    alternateEnPath: "/en/prompt-research/",
    meta: {
      title: "Prompt-Recherche für KI-Sichtbarkeit | PATERNOGA",
      description: "Ordne echte Kundenfragen, Suchintentionen und Themenfelder, damit GEO-Maßnahmen an relevanten Entscheidungen ansetzen. Prompt-Recherche anfragen."
    },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", current: "Prompt-Recherche" },
    eyebrow: "Prompt-Recherche",
    title: "Die Fragen finden, die dein Unternehmen in KI-Suchen beantworten muss.",
    lead: "Wir übersetzen reale Entscheidungssituationen in ein priorisiertes Prompt-Set. So wird sichtbar, welche Themen, Formulierungen und Belege für deine Zielgruppe wirklich zählen.",
    primaryCta: "Prompt-Recherche anfragen",
    secondaryCta: "Methode ansehen",
    outcomes: [
      { label: "Fragenbild", title: "Kundenintention verstehen", text: "Wir ordnen Fragen nach Anlass, Nähe zur Entscheidung und benötigter Information." },
      { label: "Themenfokus", title: "Relevanz priorisieren", text: "Aus vielen möglichen Fragen entsteht eine klare Reihenfolge für Analyse und Inhalte." },
      { label: "Arbeitsgrundlage", title: "Prompts sinnvoll nutzen", text: "Dokumentierte Prompts machen spätere Checks vergleichbar, nachvollziehbar und wiederholbar." }
    ],
    demo: {
      variant: "prompt-constellation",
      eyebrow: "Illustrative Prompt-Landkarte",
      title: "Vom Kundenanlass zur Themenbahn",
      note: "Illustrative Arbeitsansicht – keine echten Such- oder Kundendaten.",
      scoreLabel: "Fragefelder priorisiert",
      score: "18 / 32",
      checks: [
        { label: "Entscheidungssituationen", detail: "Fragen sind nach Orientierung, Vergleich und Auswahl gruppiert.", status: "clear" },
        { label: "Lokale Kontexte", detail: "Standort, Erreichbarkeit und regionale Besonderheiten sind teilweise offen.", status: "review" },
        { label: "Belegbedarf", detail: "Einige Antworten benötigen überprüfbare Leistungs- oder Quellenangaben.", status: "open" },
        { label: "Prompt-Set", detail: "Fragen können als wiederholbare Ausgangsbasis dokumentiert werden.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "Fragen statt Schlagwörter",
        title: "Was Menschen wissen wollen, ist selten ein einzelnes Keyword.",
        text: "Vor einer Anfrage wechseln Kundinnen und Kunden zwischen Orientierung, Abwägung und konkreten Einwänden. Wir erfassen diese Bewegung und formulieren Fragen so, dass sie echte Situationen abbilden – inklusive lokaler und fachlicher Unterschiede.",
        points: ["Orientierung: Welche Lösung passt?", "Vergleich: Woran lässt sie sich prüfen?", "Auswahl: Warum ist dieses Angebot plausibel?"]
      },
      {
        eyebrow: "Verbindliche Grundlage",
        title: "Ein Prompt ist erst nützlich, wenn sein Zweck klar ist.",
        text: "Jede Frage erhält Kontext, Suchintention und einen erwartbaren Informationsbedarf. Dadurch bleibt später erkennbar, ob eine Antwort tatsächlich hilfreicher, korrekter oder nur anders formuliert ist.",
        points: ["Kontext und Zielgruppe festhalten", "Antwortkriterien nachvollziehbar machen", "Themen für Audit und Content anschlussfähig ordnen"]
      }
    ],
    method: {
      eyebrow: "Arbeitsweise",
      title: "Vier Schritte von der Frage zum Prioritätenfeld",
      steps: [
        { title: "Entscheidungssituationen sammeln", text: "Wir sprechen über Angebote, Zielgruppen und die Momente, in denen Orientierung oder Vertrauen fehlen." },
        { title: "Fragen formulieren", text: "Aus Sprache, Website, Wettbewerb und Kundenwissen entsteht ein klar abgegrenztes Prompt-Set." },
        { title: "Intentionen clustern", text: "Fragen werden nach Bedarf, Nähe zur Entscheidung, Ort und Beleganforderung verbunden." },
        { title: "Prioritäten übergeben", text: "Du erhältst eine sortierte Forschungs- und Inhaltsgrundlage für Audit, Optimierung und laufende Checks." }
      ],
      visual: {
        frameLabel: "Illustrative Prompt-Forschung",
        statusLabel: "Fragefelder aktiv",
        scenes: [
          { metric: "32", label: "Rohfragen aus Kundensprache", items: ["Orientierung", "Problem", "Vergleich", "Auswahl"] },
          { metric: "4", label: "Intent-Felder verbunden", items: ["Bedarf", "Ort", "Beleg", "Entscheidung"] },
          { metric: "9", label: "Themenbahnen mit Belegbedarf", items: ["Leistung", "Ablauf", "Vertrauen", "Kontext"] },
          { metric: "6", label: "Prioritäten für den nächsten Zyklus", items: ["Prüfen", "Ergänzen", "Belegen", "Beobachten"] }
        ]
      }
    },
    related: {
      eyebrow: "Weiterführend",
      title: "Von den richtigen Fragen zur sichtbaren Grundlage",
      items: [
        { title: "GEO Audit", text: "Die KI-Präsenz einordnen. Wir spiegeln die recherchierten Prompts gegen führende Sprachmodelle, decken Lücken auf und lokalisieren die Quellen, auf die die Systeme zurückgreifen.", href: "/geo-audit/" },
        { title: "GEO Content", text: "Digitale Autorität aufbauen. Wir verwandeln identifizierte Informationslücken in klar strukturierte, belegbare Inhalte, die als nachvollziehbare Quelle dienen können.", href: "/geo-content/" },
        { title: "AI-Sichtbarkeit", text: "Markenwahrnehmung einordnen. Wir analysieren plattformübergreifend wiederkehrende Antwortmuster und zeigen, wo Inhalte, Fakten oder Quellen deine Position in relevanten Abwägungen klarer tragen müssen.", href: "/ai-sichtbarkeit/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Fragen zur Prompt-Recherche",
      items: [
        { question: "Sind die Prompts für alle Unternehmen gleich?", answer: "Nein. Wir leiten sie aus Angebot, Zielgruppe, Standort, Entscheidungssituationen und vorhandenen Fragen ab. Eine Bäckerei, Praxis oder Beratungsfirma braucht jeweils andere Fragebilder." },
        { question: "Ersetzt Prompt-Recherche eine Keyword-Recherche?", answer: "Sie erfüllt einen anderen Zweck. Keywords helfen bei Suchsprache und Nachfrage; Prompt-Recherche bildet zusätzlich mehrteilige Fragen, Abwägungen und den Informationsbedarf in KI-Antworten ab." },
        { question: "Garantiert das bessere Antworten in KI-Systemen?", answer: "Nein. Das Set schafft eine nachvollziehbare Forschungsgrundlage. Ob ein System später bestimmte Inhalte nennt oder empfiehlt, hängt von externen Daten, Quellen und Modellverhalten ab." },
        { question: "Was braucht ihr und was erhalten wir?", answer: "Wir brauchen einen Überblick über Angebot, Zielgruppe, Markt oder Region und die Fragen, die im Verkauf oder in Beratungsgesprächen tatsächlich auftauchen. Du erhältst ein priorisiertes Prompt-Set mit Intent, Themenbezug und Anschluss an Audit, Content oder Monitoring. PATERNOGA strukturiert die Recherche; du prüfst, ob Fragen und fachlicher Kontext zur Realität deines Angebots passen." }
      ]
    },
    closing: { eyebrow: "Prompt-Recherche starten", title: "Beginne mit den Fragen, die wirklich auf dem Tisch liegen.", text: "Wir machen aus diffusem Interesse ein klares Fragenbild und zeigen, welche nächste GEO-Maßnahme daraus sinnvoll folgt.", cta: "Prompt-Recherche besprechen" }
  },
  en: {
    lang: "en",
    slug: "prompt-research",
    alternateDePath: "/prompt-recherche/",
    alternateEnPath: "/en/prompt-research/",
    meta: {
      title: "Prompt Research for AI Visibility | PATERNOGA",
      description: "Map real customer questions, intent and topic priorities so GEO work starts from meaningful decisions. Request prompt research."
    },
    breadcrumb: { home: "Home", hub: "GEO optimisation", current: "Prompt research" },
    eyebrow: "Prompt research",
    title: "Find the questions your business needs to answer in AI search.",
    lead: "We turn real decision moments into a prioritised prompt set. You see which topics, wording and evidence matter to your audience before research and content work begin.",
    primaryCta: "Request prompt research",
    secondaryCta: "View the method",
    outcomes: [
      { label: "Question map", title: "Understand customer intent", text: "Questions are grouped by context, decision proximity and the information needed." },
      { label: "Topic focus", title: "Prioritise relevance", text: "A clear order emerges from the many questions a business could investigate." },
      { label: "Working basis", title: "Use prompts consistently", text: "Documented prompts make later checks comparable, traceable and repeatable." }
    ],
    demo: {
      variant: "prompt-constellation",
      eyebrow: "Illustrative prompt map",
      title: "From customer context to topic paths",
      note: "Illustrative working view – no real search or client data.",
      scoreLabel: "Question fields prioritised",
      score: "18 / 32",
      checks: [
        { label: "Decision moments", detail: "Questions are grouped into orientation, comparison and choice.", status: "clear" },
        { label: "Local contexts", detail: "Location, access and regional specifics still need review.", status: "review" },
        { label: "Evidence needs", detail: "Some answers require verifiable service or source information.", status: "open" },
        { label: "Prompt set", detail: "Questions can be documented as a repeatable research baseline.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "Questions over keywords",
        title: "What people need to know is rarely one keyword.",
        text: "Before making an enquiry, customers move between orientation, trade-offs and specific objections. We capture that movement and write questions that reflect real situations, including local and specialist differences.",
        points: ["Orientation: Which solution fits?", "Comparison: What can I assess?", "Choice: Why is this offer credible?"]
      },
      {
        eyebrow: "A dependable baseline",
        title: "A prompt only helps when its purpose is clear.",
        text: "Each question receives context, intent and an expected information need. Later, it remains possible to tell whether an answer became more useful and accurate, rather than simply different.",
        points: ["Record context and audience", "Make answer criteria traceable", "Connect topics to audit and content work"]
      }
    ],
    method: {
      eyebrow: "How we work",
      title: "Four steps from question to priority field",
      steps: [
        { title: "Gather decision moments", text: "We discuss your offer, audience and the moments where orientation or trust breaks down." },
        { title: "Formulate questions", text: "Language, website, competitors and customer knowledge shape a focused prompt set." },
        { title: "Cluster intent", text: "Questions are connected by need, decision proximity, location and evidence requirement." },
        { title: "Hand over priorities", text: "You receive a sorted research and content basis for audits, optimisation and ongoing checks." }
      ],
      visual: {
        frameLabel: "Illustrative prompt research",
        statusLabel: "Question fields active",
        scenes: [
          { metric: "32", label: "raw questions from customer language", items: ["Orientation", "Problem", "Comparison", "Choice"] },
          { metric: "4", label: "intent fields connected", items: ["Need", "Location", "Evidence", "Decision"] },
          { metric: "9", label: "topic paths with evidence needs", items: ["Service", "Process", "Trust", "Context"] },
          { metric: "6", label: "priorities for the next cycle", items: ["Review", "Add", "Support", "Observe"] }
        ]
      }
    },
    related: {
      eyebrow: "Continue exploring",
      title: "From the right questions to a visible foundation",
      items: [
        { title: "GEO audit", text: "Assess your AI presence. We test the researched prompts against leading language models, expose gaps and identify the sources the systems draw on.", href: "/en/geo-audit/" },
        { title: "GEO content", text: "Build digital authority. We turn identified information gaps into clearly structured, evidenced content that can serve as a traceable source.", href: "/en/geo-content/" },
        { title: "AI visibility", text: "Assess brand perception. We analyse recurring answer patterns across platforms and show where content, facts or sources need to support your position more clearly in relevant decisions.", href: "/en/ai-visibility/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions about prompt research",
      items: [
        { question: "Are the prompts the same for every business?", answer: "No. We derive them from your offer, audience, location, decision moments and existing questions. A bakery, practice or consultancy each needs a different question map." },
        { question: "Does prompt research replace keyword research?", answer: "It serves a different purpose. Keywords describe search language and demand; prompt research also captures multi-part questions, trade-offs and the information AI answers need." },
        { question: "Does it guarantee better AI answers?", answer: "No. The set creates a traceable research baseline. Whether an external system later cites or recommends specific content depends on data, sources and model behaviour." },
        { question: "What do you need and what do we receive?", answer: "We need an overview of the offer, audience, market or region and the questions that genuinely arise in sales or advisory conversations. You receive a prioritised prompt set with intent, topic relationship and a clear connection to audit, content or monitoring. PATERNOGA structures the research; you confirm that the questions and subject context match the reality of your offer." }
      ]
    },
    closing: { eyebrow: "Start prompt research", title: "Start with the questions that are genuinely on the table.", text: "We turn vague interest into a clear question map and show which GEO action makes sense next.", cta: "Discuss prompt research" }
  }
};

export const geoMonitoringPages: Record<ServiceLocale, ResearchSupportContent> = {
  de: {
    lang: "de",
    slug: "geo-monitoring",
    alternateDePath: "/geo-monitoring/",
    alternateEnPath: "/en/geo-monitoring/",
    meta: {
      title: "GEO Monitoring für laufende KI-Sichtbarkeit | PATERNOGA",
      description: "Beobachte wichtige KI-Antworten, Quellen und Veränderungen über Zeit und leite klare nächste Schritte ab. GEO Monitoring besprechen."
    },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", parent: { label: "GEO-Betreuung", href: "/geo-betreuung/" }, current: "GEO Monitoring" },
    eyebrow: "GEO Monitoring",
    title: "Veränderungen sehen, bevor sie zur falschen Gewissheit werden",
    lead: "Wir beobachten vereinbarte Fragen, Antwortsysteme und Quellen in einem festen Rhythmus. Du erkennst, was stabil bleibt, was sich verschiebt und wo eine Prüfung sinnvoll ist.",
    primaryCta: "Monitoring besprechen",
    secondaryCta: "Monitoring-Methode ansehen",
    outcomes: [
      { label: "Verlauf", title: "Signale über Zeit lesen", text: "Wiederholte Checks machen Veränderungen sichtbar, ohne einzelne Antworten zu überbewerten." },
      { label: "Einordnung", title: "Relevantes von Zufall trennen", text: "Wir markieren Muster, Abweichungen und offene Fragen mit nachvollziehbarem Kontext." },
      { label: "Reaktion", title: "Im richtigen Moment handeln", text: "Beobachtung mündet in eine kleine, priorisierte Aufgabenliste statt in Alarmismus." }
    ],
    demo: {
      variant: "monitoring-timeline",
      eyebrow: "Illustrative Monitoring-Ansicht",
      title: "Ein Verlauf mit Kontext statt ein Momentbild",
      note: "Illustrative Zeitreihe – keine echten Kundenwerte oder Systemresultate.",
      scoreLabel: "Beobachtungspunkte im Verlauf",
      score: "6 / 8",
      checks: [
        { label: "Antwortstabilität", detail: "Kernaussage bleibt über mehrere Prüftermine ähnlich.", status: "clear" },
        { label: "Quellenwechsel", detail: "Eine Antwort stützt sich auf eine neu aufgetauchte Drittquelle.", status: "review" },
        { label: "Faktenalter", detail: "Öffnungszeiten und Leistungsdetails benötigen einen aktuellen Abgleich.", status: "open" },
        { label: "Trendnotiz", detail: "Die Abweichung wird mit Frage, Zeitpunkt und Quelle dokumentiert.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "Nicht jede Schwankung ist ein Signal",
        title: "Monitoring braucht Gedächtnis, nicht nur einen Screenshot",
        text: "Antwortsysteme können sich verändern, Fragen können anders interpretiert werden und Quellen können wechseln. Wir halten Prüflogik und Kontext fest, damit eine Abweichung nicht vorschnell als Trend gilt.",
        points: ["Frage und Zeitpunkt vergleichen", "Quellenwechsel sichtbar machen", "Wiederholung vor Bewertung"]
      },
      {
        eyebrow: "Ruhige Entscheidungsbasis",
        title: "Du bekommst Orientierung, nicht mehr Benachrichtigungen.",
        text: "Ein Monitoring-Zyklus endet mit einer verständlichen Einordnung: stabil, prüfen oder handeln. Nur Befunde mit echter Relevanz werden in die nächste Arbeitsrunde übernommen.",
        points: ["Stabile Antwortbilder festhalten", "Neue Risiken mit Beleg prüfen", "Aufgaben nach Wirkung bündeln"]
      }
    ],
    method: {
      eyebrow: "Arbeitsweise",
      title: "Vier Schritte für verlässliche Beobachtung",
      steps: [
        { title: "Beobachtungsfeld definieren", text: "Wir wählen Fragen, Systeme, Quellen und Frequenzen passend zu deinem Angebot und deinen Risiken." },
        { title: "Baseline dokumentieren", text: "Der Ausgangspunkt hält Antwort, Quellenbezug und offene Unsicherheiten nachvollziehbar fest." },
        { title: "Verläufe prüfen", text: "Wiederholte Durchläufe werden nach Stabilität, Abweichung und möglicher Ursache gelesen." },
        { title: "Aktionen einordnen", text: "Du erhältst eine kurze Empfehlung, was beobachtet, geprüft oder als Arbeit gestartet werden sollte." }
      ],
      visual: {
        frameLabel: "Illustrativer Monitoring-Verlauf",
        statusLabel: "Zyklus 6 aktiv",
        scenes: [
          { metric: "8", label: "Fragen im Beobachtungsfeld", items: ["Leistung", "Ort", "Preis", "Vertrauen"] },
          { metric: "6", label: "Prüftermine mit Kontext", items: ["Baseline", "Woche 2", "Woche 4", "Woche 6"] },
          { metric: "3", label: "Veränderungen eingeordnet", items: ["Stabil", "Quellenwechsel", "Faktenprüfung", "Offen"] },
          { metric: "2", label: "Aktionen für die nächste Runde", items: ["Abgleichen", "Ergänzen", "Beobachten", "Schließen"] }
        ]
      }
    },
    related: {
      eyebrow: "Im Netzwerk",
      title: "Monitoring als Teil deiner GEO-Betreuung",
      items: [
        { title: "GEO-Betreuung", text: "Priorisierte laufende Umsetzung mit einem festen Arbeitsrhythmus.", href: "/geo-betreuung/" },
        { title: "GEO Audit", text: "Eine klare Ausgangslage für Fragen, Quellen, Fakten und Zugänglichkeit.", href: "/geo-audit/" },
        { title: "AI-Sichtbarkeit", text: "Antwortmuster und Plattformen als Teil eines größeren Sichtbarkeitsbildes verstehen.", href: "/ai-sichtbarkeit/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Fragen zum GEO Monitoring",
      items: [
        { question: "Wie oft wird geprüft?", answer: "Das hängt von Thema, Veränderungsrisiko und Arbeitsrhythmus ab. Wir vereinbaren eine Frequenz, die Vergleichbarkeit schafft, ohne aus jeder täglichen Schwankung eine Maßnahme abzuleiten." },
        { question: "Kann Monitoring Sichtbarkeit garantieren?", answer: "Nein. Monitoring beobachtet externe Antworten und Quellen. Es kann Veränderungen dokumentieren und Handlungen vorbereiten, aber keine Nennung, Position oder Empfehlung garantieren." },
        { question: "Was passiert bei einem auffälligen Verlauf?", answer: "Wir prüfen zuerst Frage, Zeitpunkt, Quelle und Kontext. Erst danach wird entschieden, ob ein Faktencheck, eine inhaltliche Ergänzung oder nur weitere Beobachtung sinnvoll ist." },
        { question: "Welche Grundlage und welche Auswertung gehören dazu?", answer: "Wir vereinbaren ein stabiles Fragenfeld, relevante Systeme, Vergleichszeitpunkte und die Veränderungen, die eine Entscheidung auslösen sollen. Du erhältst eine verständliche Verlaufsansicht mit eingeordneten Abweichungen und priorisierten nächsten Schritten. Freigaben für Inhalt oder Technik bleiben bei dir." }
      ]
    },
    closing: { eyebrow: "Monitoring einrichten", title: "Beobachte die Entwicklung, ohne ihr hinterherzulaufen.", text: "Wir bauen einen ruhigen, verständlichen Monitoring-Zyklus auf, der Veränderungen in konkrete Entscheidungen übersetzt.", cta: "GEO Monitoring besprechen" }
  },
  en: {
    lang: "en",
    slug: "geo-monitoring",
    alternateDePath: "/geo-monitoring/",
    alternateEnPath: "/en/geo-monitoring/",
    meta: {
      title: "GEO Monitoring for Ongoing AI Visibility | PATERNOGA",
      description: "Track important AI answers, sources and changes over time, then turn them into clear next actions. Discuss GEO monitoring."
    },
    breadcrumb: { home: "Home", hub: "GEO optimisation", parent: { label: "GEO support", href: "/en/geo-support/" }, current: "GEO monitoring" },
    eyebrow: "GEO monitoring",
    title: "See change before it becomes false certainty",
    lead: "We observe agreed questions, answer systems and sources on a consistent rhythm. You can see what stays stable, what shifts and where a review is worth your time.",
    primaryCta: "Discuss monitoring",
    secondaryCta: "View the monitoring method",
    outcomes: [
      { label: "Trajectory", title: "Read signals over time", text: "Repeated checks reveal change without overinterpreting a single answer." },
      { label: "Context", title: "Separate relevance from noise", text: "Patterns, deviations and open questions are marked with traceable context." },
      { label: "Response", title: "Act at the right moment", text: "Observation becomes a small, prioritised task list rather than alarmism." }
    ],
    demo: {
      variant: "monitoring-timeline",
      eyebrow: "Illustrative monitoring view",
      title: "A trajectory with context, not a snapshot",
      note: "Illustrative timeline – no real client values or system results.",
      scoreLabel: "Observation points in the trajectory",
      score: "6 / 8",
      checks: [
        { label: "Answer stability", detail: "The core answer remains similar across several review dates.", status: "clear" },
        { label: "Source change", detail: "An answer now draws on a newly surfaced third-party source.", status: "review" },
        { label: "Fact age", detail: "Opening hours and service details need a current check.", status: "open" },
        { label: "Trend note", detail: "The deviation is recorded with question, time and source.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "Not every fluctuation is a signal",
        title: "Monitoring needs memory, not only a screenshot",
        text: "Answer systems change, questions can be interpreted differently and sources can move. We keep the review logic and context so a deviation is not prematurely treated as a trend.",
        points: ["Compare question and date", "Make source changes visible", "Repeat before assessing"]
      },
      {
        eyebrow: "A calm decision basis",
        title: "You get orientation, not more notifications.",
        text: "Each monitoring cycle ends with a readable classification: stable, review or act. Only findings with genuine relevance move into the next work round.",
        points: ["Record stable answer patterns", "Check new risks against evidence", "Group actions by impact"]
      }
    ],
    method: {
      eyebrow: "How we work",
      title: "Four steps for dependable observation",
      steps: [
        { title: "Define the observation field", text: "We select questions, systems, sources and frequency around your offer and risk profile." },
        { title: "Document the baseline", text: "The starting point records answer, source context and open uncertainty in a traceable way." },
        { title: "Review trajectories", text: "Repeated runs are read for stability, deviation and possible cause." },
        { title: "Classify actions", text: "You receive a short recommendation on what to watch, verify or start working on." }
      ],
      visual: {
        frameLabel: "Illustrative monitoring trajectory",
        statusLabel: "Cycle 6 active",
        scenes: [
          { metric: "8", label: "questions in the observation field", items: ["Service", "Location", "Price", "Trust"] },
          { metric: "6", label: "review dates with context", items: ["Baseline", "Week 2", "Week 4", "Week 6"] },
          { metric: "3", label: "changes classified", items: ["Stable", "Source change", "Fact check", "Open"] },
          { metric: "2", label: "actions for the next round", items: ["Compare", "Add", "Observe", "Close"] }
        ]
      }
    },
    related: {
      eyebrow: "In the network",
      title: "Monitoring as part of GEO support",
      items: [
        { title: "GEO support", text: "Prioritised ongoing execution with a dependable working rhythm.", href: "/en/geo-support/" },
        { title: "GEO audit", text: "A clear baseline for questions, sources, facts and accessibility.", href: "/en/geo-audit/" },
        { title: "AI visibility", text: "Understand answer patterns and platforms as part of a wider visibility picture.", href: "/en/ai-visibility/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions about GEO monitoring",
      items: [
        { question: "How often are reviews run?", answer: "It depends on the topic, change risk and working rhythm. We choose a frequency that supports comparison without turning every daily fluctuation into an action." },
        { question: "Can monitoring guarantee visibility?", answer: "No. Monitoring observes external answers and sources. It can document change and prepare action, but cannot guarantee a mention, position or recommendation." },
        { question: "What happens when a trajectory looks unusual?", answer: "We first check question, date, source and context. Only then do we decide whether a fact check, content addition or further observation makes sense." },
        { question: "What baseline and output are included?", answer: "We agree a stable question field, relevant systems, comparison dates and the changes that should trigger a decision. You receive a readable trajectory with interpreted deviations and prioritised next steps. Approval for content or technical changes remains with you." }
      ]
    },
    closing: { eyebrow: "Set up monitoring", title: "Track the development without chasing it.", text: "We establish a calm, readable monitoring cycle that turns changes into concrete decisions.", cta: "Discuss GEO monitoring" }
  }
};

export const geoSupportPages: Record<ServiceLocale, ResearchSupportContent> = {
  de: {
    lang: "de",
    slug: "geo-betreuung",
    alternateDePath: "/geo-betreuung/",
    alternateEnPath: "/en/geo-support/",
    meta: {
      title: "GEO-Betreuung für laufende Optimierung | PATERNOGA",
      description: "Verbinde Monitoring, Faktenpflege, Content und technische Verbesserungen in einer priorisierten laufenden Zusammenarbeit. Betreuung besprechen."
    },
    breadcrumb: { home: "Start", hub: "GEO-Optimierung", current: "GEO-Betreuung" },
    eyebrow: "GEO-Betreuung",
    title: "GEO wird wirksam, wenn aus Beobachtung verlässliche Arbeit wird.",
    lead: "Wir begleiten dich nach Audit oder Startpunkt mit einer klaren Reihenfolge: beobachten, prüfen, verbessern und wieder einordnen. Ohne starre Pakete und ohne Versprechen, die externe Systeme nicht halten können.",
    primaryCta: "GEO-Betreuung anfragen",
    secondaryCta: "Betreuungsmodell ansehen",
    outcomes: [
      { label: "Fokus", title: "Wichtige Hebel zuerst bearbeiten", text: "Eine laufende Liste bündelt Themen nach Relevanz, Aufwand und Abhängigkeiten." },
      { label: "Kontinuität", title: "Signale und Fakten pflegen", text: "Änderungen an Angebot, Website und Quellen bleiben Teil der GEO-Arbeit." },
      { label: "Zusammenarbeit", title: "Entscheidungen gemeinsam tragen", text: "Du weißt, was als Nächstes ansteht und welche Annahme hinter einer Maßnahme steht." }
    ],
    demo: {
      variant: "action-queue",
      eyebrow: "Illustratives GEO-Arbeitsboard",
      title: "Prioritäten, die in Arbeit übergehen",
      note: "Illustrative Aufgabenansicht – keine echten Kundenaufträge oder Leistungswerte.",
      scoreLabel: "Maßnahmen im aktuellen Zyklus",
      score: "5 / 9",
      checks: [
        { label: "Faktenpflege", detail: "Angebot, Standort und zentrale Unternehmensdaten sind als Aufgabe markiert.", status: "review" },
        { label: "Content-Hebel", detail: "Eine priorisierte Frage braucht eine klare, belegte Seite.", status: "open" },
        { label: "Technischer Pfad", detail: "Semantik, interne Verweise und erreichbare Inhalte sind eingeordnet.", status: "clear" },
        { label: "Nächste Runde", detail: "Monitoring und Rückprüfung sind an die erledigte Arbeit gekoppelt.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "Laufende Arbeit ohne Aktionismus",
        title: "Nicht alles muss gleichzeitig optimiert werden.",
        text: "GEO-Betreuung macht aus Befunden eine überschaubare Arbeitsfolge. Wir prüfen, welche Änderung eine Grundlage verbessert, welche Information belegt werden muss und was zunächst weiter beobachtet werden kann.",
        points: ["Fakten und Grundlagen pflegen", "Inhalte mit echtem Bedarf ergänzen", "Technik und Quellen in Verbindung halten"]
      },
      {
        eyebrow: "Persönlich abgestimmt",
        title: "Die Arbeit bleibt an deinem Angebot, nicht an einem Dashboard.",
        text: "PATERNOGA übersetzt Analyse in verständliche Entscheidungen und arbeitet dort mit, wo dein Team Zeit oder Perspektive braucht. Umfang und Rhythmus richten sich nach der Situation, nicht nach einer künstlichen Paketlogik.",
        points: ["Prioritäten gemeinsam entscheiden", "Änderungen nachvollziehbar dokumentieren", "Wirkung und offene Fragen regelmäßig prüfen"]
      }
    ],
    method: {
      eyebrow: "Betreuungsrhythmus",
      title: "Vier Schritte, die aus GEO eine Arbeitsroutine machen",
      steps: [
        { title: "Ausgangslage und Ziel klären", text: "Wir nehmen Audit, Website, Angebot und aktuelle Fragen als gemeinsame Arbeitsgrundlage." },
        { title: "Backlog ordnen", text: "Befunde werden nach Bedeutung, Aufwand und Abhängigkeiten in eine realistische Reihenfolge gebracht." },
        { title: "Maßnahmen umsetzen", text: "Wir entwickeln, überarbeiten oder begleiten konkrete Inhalte, Fakten- und Technikaufgaben." },
        { title: "Rückprüfen und nachjustieren", text: "Monitoring, neue Fragen und interne Änderungen entscheiden, was in die nächste Runde gehört." }
      ],
      visual: {
        frameLabel: "Illustrative GEO-Arbeitsfolge",
        statusLabel: "Zyklus aktiv",
        scenes: [
          { metric: "9", label: "Befunde im gemeinsamen Backlog", items: ["Fakt", "Content", "Technik", "Quelle"] },
          { metric: "5", label: "Aufgaben nach Wirkung gewählt", items: ["Wichtig", "Abhängigkeit", "Aufwand", "Termin"] },
          { metric: "3", label: "Arbeitsstränge in Umsetzung", items: ["Pflegen", "Erstellen", "Verbessern", "Prüfen"] },
          { metric: "1", label: "Rückblick für den nächsten Zyklus", items: ["Erledigt", "Offen", "Lernen", "Weiter"] }
        ]
      }
    },
    related: {
      eyebrow: "Betreuung aufbauen",
      title: "Der passende nächste Schritt für deine laufende Arbeit",
      items: [
        { title: "GEO Monitoring", text: "Antworten, Quellen und Fakten in einem ruhigen Rhythmus beobachten.", href: "/geo-monitoring/" },
        { title: "GEO Audit", text: "Eine belastbare Ausgangslage schaffen, bevor Prioritäten gesetzt werden.", href: "/geo-audit/" },
        { title: "Content für KI-Suche", text: "Bestehende Inhalte anhand echter Informationslücken weiterentwickeln.", href: "/content-optimierung-ai-suche/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Fragen zur GEO-Betreuung",
      items: [
        { question: "Brauche ich vorab ein GEO Audit?", answer: "Nicht zwingend. Ein Audit kann die Zusammenarbeit fokussieren, wir können aber auch mit einer Website, konkreten Fragen oder einem bestehenden Monitoring starten und die Ausgangslage gemeinsam schärfen." },
        { question: "Was umfasst die laufende Betreuung?", answer: "Je nach Bedarf gehören Monitoring, Faktenpflege, Content- und Strukturarbeit, technische Abstimmungen sowie die Priorisierung der nächsten Schritte dazu. Der konkrete Umfang wird transparent vereinbart." },
        { question: "Gibt es eine Sichtbarkeitsgarantie?", answer: "Nein. Wir verbessern nachvollziehbare Voraussetzungen und beobachten externe Antworten. Nennungen, Rankings oder Empfehlungen durch KI-Systeme können nicht zugesagt werden." }
      ]
    },
    closing: { eyebrow: "Zusammenarbeit starten", title: "Eine gute GEO-Routine beginnt mit einer realistischen nächsten Aufgabe.", text: "Erzähl uns, wo dein Angebot, deine Inhalte oder deine Sichtbarkeit gerade stehen. Wir schlagen einen passenden ersten Arbeitszyklus vor.", cta: "GEO-Betreuung besprechen" }
  },
  en: {
    lang: "en",
    slug: "geo-support",
    alternateDePath: "/geo-betreuung/",
    alternateEnPath: "/en/geo-support/",
    meta: {
      title: "GEO Support for Ongoing Optimisation | PATERNOGA",
      description: "Connect monitoring, fact maintenance, content and technical improvements in a prioritised ongoing collaboration. Discuss GEO support."
    },
    breadcrumb: { home: "Home", hub: "GEO optimisation", current: "GEO support" },
    eyebrow: "GEO support",
    title: "GEO becomes useful when observation turns into dependable work.",
    lead: "After an audit or initial review, we help you move through a clear sequence: observe, verify, improve and review again. No rigid packages and no promises that external systems cannot keep.",
    primaryCta: "Request GEO support",
    secondaryCta: "View the support model",
    outcomes: [
      { label: "Focus", title: "Work on the important levers first", text: "An ongoing list groups topics by relevance, effort and dependencies." },
      { label: "Continuity", title: "Maintain signals and facts", text: "Changes to your offer, website and sources remain part of GEO work." },
      { label: "Collaboration", title: "Carry decisions together", text: "You know what comes next and which assumption supports each action." }
    ],
    demo: {
      variant: "action-queue",
      eyebrow: "Illustrative GEO workboard",
      title: "Priorities that turn into work",
      note: "Illustrative task view – no real client tasks or performance values.",
      scoreLabel: "Actions in the current cycle",
      score: "5 / 9",
      checks: [
        { label: "Fact maintenance", detail: "Offer, location and core business data are marked for review.", status: "review" },
        { label: "Content lever", detail: "A priority question needs a clear, supported page.", status: "open" },
        { label: "Technical path", detail: "Semantics, internal links and reachable content are classified.", status: "clear" },
        { label: "Next round", detail: "Monitoring and review are connected to completed work.", status: "clear" }
      ]
    },
    narratives: [
      {
        eyebrow: "Ongoing work without overreaction",
        title: "Not everything needs optimising at once.",
        text: "GEO support turns findings into a manageable sequence. We identify which change improves a foundation, which information needs evidence and what can simply remain under observation.",
        points: ["Maintain facts and foundations", "Add content where a real need exists", "Keep technology and sources connected"]
      },
      {
        eyebrow: "Personally aligned",
        title: "The work stays close to your offer, not a dashboard.",
        text: "PATERNOGA translates analysis into understandable decisions and contributes where your team needs time or perspective. Scope and rhythm follow the situation, not an artificial package model.",
        points: ["Decide priorities together", "Document changes clearly", "Review impact and open questions regularly"]
      }
    ],
    method: {
      eyebrow: "Support rhythm",
      title: "Four steps that make GEO a working routine",
      steps: [
        { title: "Clarify baseline and goal", text: "We use your audit, website, offer and current questions as a shared working basis." },
        { title: "Order the backlog", text: "Findings are placed in a realistic sequence by importance, effort and dependencies." },
        { title: "Implement actions", text: "We develop, revise or support concrete content, fact and technical tasks." },
        { title: "Review and adjust", text: "Monitoring, new questions and internal changes decide what enters the next round." }
      ],
      visual: {
        frameLabel: "Illustrative GEO work sequence",
        statusLabel: "Cycle active",
        scenes: [
          { metric: "9", label: "findings in the shared backlog", items: ["Fact", "Content", "Technical", "Source"] },
          { metric: "5", label: "actions chosen by impact", items: ["Importance", "Dependency", "Effort", "Timing"] },
          { metric: "3", label: "workstreams in progress", items: ["Maintain", "Create", "Improve", "Review"] },
          { metric: "1", label: "retrospective for the next cycle", items: ["Done", "Open", "Learn", "Continue"] }
        ]
      }
    },
    related: {
      eyebrow: "Build the support path",
      title: "The right next step for ongoing work",
      items: [
        { title: "GEO monitoring", text: "Observe answers, sources and facts on a calm, consistent rhythm.", href: "/en/geo-monitoring/" },
        { title: "GEO audit", text: "Build a dependable baseline before choosing priorities.", href: "/en/geo-audit/" },
        { title: "Content for AI search", text: "Develop existing content around real information gaps.", href: "/en/content-optimization-ai-search/" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions about GEO support",
      items: [
        { question: "Do I need a GEO audit first?", answer: "Not necessarily. An audit can focus the collaboration, but we can also start with a website, specific questions or existing monitoring and sharpen the baseline together." },
        { question: "What does ongoing support include?", answer: "Depending on your needs, it can include monitoring, fact maintenance, content and structure work, technical coordination and prioritising the next actions. The exact scope is agreed transparently." },
        { question: "Is there a visibility guarantee?", answer: "No. We improve traceable prerequisites and observe external answers. Mentions, rankings or recommendations by AI systems cannot be promised." }
      ]
    },
    closing: { eyebrow: "Start working together", title: "A useful GEO routine begins with one realistic next task.", text: "Tell us where your offer, content or visibility stands today. We will suggest a suitable first working cycle.", cta: "Discuss GEO support" }
  }
};
