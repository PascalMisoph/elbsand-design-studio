export const geoContent = {
  de: {
    meta: {
      title: "GEO-Optimierung & AI-Sichtbarkeit | PATERNOGA",
      description:
        "GEO-Audit, Umsetzung und laufende Betreuung für klare Sichtbarkeit in KI-Antworten. Quellen, Technik und Content jetzt systematisch prüfen lassen."
    },
    nav: ["Leistungen", "Projekte", "Sichtbarkeit", "Ablauf", "Kontakt"],
    headerCta: "Kostenfreier KI-Check",
    hero: {
      eyebrow: "GEO & KI-Sichtbarkeit",
      title: "Wie werde ich in KI-Antworten sichtbar?",
      body: "Durch klare Inhalte, eindeutige Unternehmenssignale und eine technisch zugängliche Website. So können Google, ChatGPT und Perplexity dein Angebot korrekt einordnen und als Quelle berücksichtigen.",
      primaryCta: "Kostenfreien KI-Check starten",
      primaryHref: "/#ki-check",
      secondaryCta: "Pakete ansehen",
      imageAlt: "Pascal Misoph im PATERNOGA Studio bei der Arbeit an einer Sichtbarkeitsanalyse"
    },
    method: {
      eyebrow: "Was GEO sichtbar macht",
      title: "Wie KI-Systeme dein Unternehmen einordnen",
      body: "Generative Suchsysteme verbinden Suchindizes, Webquellen und Sprachmodelle. Sichtbarkeit entsteht deshalb nicht durch einen einzelnen GEO-Trick, sondern durch hilfreiche Inhalte, eindeutige Fakten und technisch erreichbare Seiten.",
      leadTitle: "Einordnen, bevor empfohlen wird",
      leadBody: "Wir prüfen nicht nur, ob dein Unternehmen genannt wird. Wir untersuchen, welche Antwort dafür ausschlaggebend war, welche Quelle verwendet wurde und ob Leistungen, Standort und Expertise korrekt wiedergegeben werden.",
      systems: [
        {
          name: "Quellen",
          detail: "Quellenfähig statt nur keywordreich: Inhalte beantworten konkrete Fragen, zeigen eigene Erfahrung und machen Aussagen überprüfbar.",
          checksLabel: "Darauf achten wir",
          checks: [
            "Direkte Antworten auf reale Entscheidungsfragen",
            "Eigene Beispiele, Daten und Prozesswissen",
            "Sichtbare Autoren, Aktualisierung und Primärquellen"
          ],
          evidence: "Die grundlegende GEO-Studie zeigte in einem kontrollierten Benchmark, dass Zitate, Statistiken und relevante Quellen die Sichtbarkeit erhöhen können. Die Wirkung unterschied sich jedoch je nach Thema – sie ist kein Rankingversprechen.",
          sourcesLabel: "Quellen",
          sources: [
            ["GEO-Studie · KDD 2024", "https://arxiv.org/abs/2311.09735"],
            ["Google · Inhalte für KI-Suche", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"]
          ]
        },
        {
          name: "Unternehmenssignale",
          detail: "Name, Angebot, Standort und Expertise müssen auf der Website und in relevanten Profilen dasselbe Unternehmen beschreiben.",
          checksLabel: "Darauf achten wir",
          checks: [
            "Konsistente Kontakt-, Standort- und Leistungsdaten",
            "Nachvollziehbare Personen, Referenzen und Expertise",
            "Passendes Organization- oder LocalBusiness-Markup"
          ],
          evidence: "Strukturierte Daten machen vorhandene Fakten eindeutiger, ersetzen sie aber nicht. Google verlangt, dass Markup den sichtbaren Seiteninhalt korrekt abbildet, und nennt für Organisationen unter anderem Name, Adresse, Kontakt, URL und Logo.",
          sourcesLabel: "Offizielle Dokumentation",
          sources: [
            ["Google · Organization Markup", "https://developers.google.com/search/docs/appearance/structured-data/organization"],
            ["Google · LocalBusiness Markup", "https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=de"]
          ]
        },
        {
          name: "Technische Zugänglichkeit",
          detail: "Eine gute Aussage kann nur gefunden und zitiert werden, wenn Crawler die richtige URL erreichen und den relevanten Inhalt verarbeiten können.",
          checksLabel: "Darauf achten wir",
          checks: [
            "Indexierung, Statuscodes, Canonicals und Sitemaps",
            "robots.txt, noindex, JavaScript und WAF-Regeln",
            "Zugriff für Googlebot, OAI-SearchBot und PerplexityBot"
          ],
          evidence: "Google nennt Crawl- und Indexierbarkeit als technische Grundlage seiner generativen Suche. OpenAI und Perplexity dokumentieren eigene Such-Crawler; Suchsichtbarkeit und Modelltraining lassen sich dabei getrennt steuern.",
          sourcesLabel: "Crawler-Dokumentation",
          sources: [
            ["Google · Technische Grundlagen", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"],
            ["OpenAI · OAI-SearchBot", "https://help.openai.com/de-de/articles/12627856-publishers-and-developers-faq"],
            ["Perplexity · Crawler", "https://docs.perplexity.ai/docs/resources/perplexity-crawlers"]
          ]
        }
      ],
      systemsIntro: "Relevant für",
      systemsLabel: "Google, ChatGPT, Claude und Perplexity",
      note: "GEO ergänzt gutes SEO. Es ersetzt es nicht."
    },
    packages: {
      eyebrow: "GEO-Pakete",
      title: "Der passende Einstieg für deinen aktuellen Stand",
      intro: "",
      items: [
        {
          number: "1",
          name: "GEO Deep Dive Audit",
          descriptor: "Klarheit über Sichtbarkeit, Quellen und Potenziale.",
          price: "1.450 €",
          priceSuffix: "einmalig",
          duration: "ca. 10 Werktage",
          features: [
            "Analyse deiner KI-Sichtbarkeit und Quellen",
            "Priorisierte Handlungsfelder und Quick Wins",
            "Konkrete Roadmap für die nächsten Schritte",
            "Technischer Crawl- und Schema-Check",
            "60 Min. Workshop mit Top-5-Maßnahmenplan"
          ],
          cta: "Audit anfragen"
        },
        {
          number: "2",
          name: "GEO Action & Fix",
          descriptor: "Die wichtigsten Potenziale gezielt umsetzen.",
          price: "ab 3.900 €",
          priceSuffix: "Projektpreis",
          duration: "ca. 4–6 Wochen",
          features: [
            "Zugriff, Indexierung und Schema-Markup optimieren",
            "Bis zu 3 Kernseiten strukturell überarbeiten",
            "Klare Unternehmens- und Entity-Signale",
            "Bis zu 5 relevante Drittprofile prüfen",
            "Kontrollmessung nach etwa 6 Wochen"
          ],
          cta: "Umsetzung besprechen"
        },
        {
          number: "3",
          name: "AI Visibility Begleitung",
          descriptor: "Sichtbarkeit laufend messen und weiterentwickeln.",
          price: "ab 1.850 €",
          priceSuffix: "pro Monat",
          duration: "Mindestlaufzeit 6 Monate",
          features: [
            "20 Kernfragen und 50 Long-Tail-Prompts monitoren",
            "Monatlicher Share-of-Voice- und Quellenreport",
            "1 Fokus-Inhalt oder 2 Content-Module pro Monat",
            "Laufende Quellen- und Entity-Arbeit",
            "45 Min. Strategie-Call mit nächsten Maßnahmen"
          ],
          cta: "Retainer prüfen"
        }
      ],
      priceNote: "Alle Preise zzgl. MwSt. Fremd-, Tool- und Veröffentlichungskosten werden nur nach Freigabe separat berechnet.",
      scopeNote: "Für größere Websites, mehrere Märkte oder zusätzliche Sprachen erstellen wir ein individuelles Angebot.",
      recommendedLabel: "Empfohlener Einstieg",
      detailsLabel: "Alle Details anzeigen"
    },
    process: {
      eyebrow: "Ablauf",
      title: "Von der Analyse zur messbaren Verbesserung",
      steps: [
        ["1", "Messen", "Sichtbarkeit, Quellen und Wettbewerber erfassen.", "Transparenz"],
        ["2", "Priorisieren", "Die wichtigsten Hebel nach Wirkung und Aufwand ordnen.", "Klarer Fahrplan"],
        ["3", "Umsetzen", "Technik, Inhalte und Unternehmenssignale verbessern.", "Gezielte Verbesserung"],
        ["4", "Nachmessen", "Veränderungen dokumentieren und weiter optimieren.", "Messbarer Vergleich"]
      ],
      disclaimerTitle: "Klare Grundlagen lassen sich gezielt verbessern und nachvollziehbar prüfen.",
      disclaimer: "PATERNOGA schafft nachvollziehbare Voraussetzungen, misst Veränderungen in definierten Stichproben und optimiert auf Basis der Ergebnisse."
    },
    cta: {
      eyebrow: "Kontakt",
      title: "Wie möchtest du starten?",
      quickOption: "Direkt Erstgespräch buchen",
      detailOption: "GEO-Audit anfragen",
      valueLine: "Von der ersten Messung bis zur sichtbaren Verbesserung.",
      note: "Die Anfrage wird direkt und sicher übermittelt.",
      formLabel: "Geführte Anfrage für ein GEO-Audit",
      sectionId: "geo-anfrage",
      source: "geo-audit",
      flow: {
        stepLabel: "Schritt",
        ofLabel: "von",
        back: "Zurück",
        intentQuestion: "Wo stehst du gerade?",
        intentOptions: [
          { value: "new", label: "Noch keine KI-Sichtbarkeit geprüft" },
          { value: "improve", label: "Erste Nennungen oder Auffälligkeiten gesehen" },
          { value: "advice", label: "Bereits ein konkretes GEO-Ziel" }
        ],
        detailQuestions: {
          new: "Welche Website sollen wir prüfen?",
          improve: "Was ist dir bisher aufgefallen?",
          advice: "Was möchtest du mit dem Audit erreichen?"
        },
        detailPlaceholders: {
          new: "Die Website-Adresse genügt.",
          improve: "Website-Adresse plus ein kurzer Hinweis.",
          advice: "Website-Adresse und ein bis zwei Sätze zu deinem Ziel."
        },
        contactQuestion: "Wie dürfen wir dich erreichen?",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        next: "Weiter",
        submit: "GEO-Audit anfragen",
        summaryLabel: "Dein Ausgangspunkt",
        privacy: "Persönlich gelesen · unverbindlich · keine Weitergabe",
        sending: "Wird gesendet …",
        errorMessage: "Das hat gerade nicht funktioniert. Bitte versuche es noch einmal.",
        successEyebrow: "Anfrage gesendet",
        successTitle: "Danke für deine Audit-Anfrage.",
        successBody: "Deine Angaben sind angekommen. Pascal sieht sie sich persönlich an und meldet sich bei dir.",
        successAgain: "Weitere Anfrage starten"
      }
    },
    footer: { legal: "Paternoga SEO & GEO Studio", imprint: "Impressum", privacy: "Datenschutz" }
  },
  en: {
    meta: {
      title: "GEO Optimisation & AI Visibility | PATERNOGA",
      description:
        "GEO audits, implementation and ongoing support for clearer visibility in AI answers. Review sources, technology and content with PATERNOGA."
    },
    nav: ["Services", "Projects", "Visibility", "Process", "Contact"],
    headerCta: "Start your free AI check",
    hero: {
      eyebrow: "GEO & AI visibility",
      title: "Become visible in AI answers",
      body: "We create the technical and editorial conditions that help AI systems understand your business clearly and classify it as a relevant source.",
      primaryCta: "Start your free AI check",
      primaryHref: "/en/#ki-check",
      secondaryCta: "View packages",
      imageAlt: "Pascal Misoph at the PATERNOGA studio working on a visibility analysis"
    },
    method: {
      eyebrow: "What makes GEO visible",
      title: "How AI systems classify your business",
      body: "Generative search systems combine search indexes, web sources and language models. Visibility therefore comes from useful content, unambiguous facts and technically accessible pages—not from a single GEO trick.",
      leadTitle: "Classification comes before recommendation",
      leadBody: "We do not only record whether your business is mentioned. We examine which answer triggered the mention, which source supported it and whether services, location and expertise were represented correctly.",
      systems: [
        {
          name: "Sources",
          detail: "Citation-ready rather than merely keyword-rich: content answers specific questions, demonstrates first-hand experience and makes claims verifiable.",
          checksLabel: "What we review",
          checks: [
            "Direct answers to real decision-making questions",
            "Original examples, data and process knowledge",
            "Visible authors, update dates and primary sources"
          ],
          evidence: "The foundational GEO study found that citations, statistics and relevant sources could improve visibility in a controlled benchmark. Effects varied by domain, so this is evidence—not a ranking promise.",
          sourcesLabel: "Sources",
          sources: [
            ["GEO paper · KDD 2024", "https://arxiv.org/abs/2311.09735"],
            ["Google · Content for AI search", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"]
          ]
        },
        {
          name: "Business signals",
          detail: "Your name, offer, location and expertise should describe the same organisation across your website and relevant profiles.",
          checksLabel: "What we review",
          checks: [
            "Consistent contact, location and service details",
            "Traceable people, references and expertise",
            "Appropriate Organization or LocalBusiness markup"
          ],
          evidence: "Structured data clarifies existing facts; it does not replace them. Google requires markup to represent visible page content accurately and lists details such as name, address, contact information, URL and logo for organisations.",
          sourcesLabel: "Official documentation",
          sources: [
            ["Google · Organization markup", "https://developers.google.com/search/docs/appearance/structured-data/organization"],
            ["Google · LocalBusiness markup", "https://developers.google.com/search/docs/appearance/structured-data/local-business"]
          ]
        },
        {
          name: "Technical access",
          detail: "A useful statement can only be found and cited when crawlers can reach the correct URL and process its relevant content.",
          checksLabel: "What we review",
          checks: [
            "Indexing, status codes, canonicals and sitemaps",
            "robots.txt, noindex, JavaScript and WAF rules",
            "Access for Googlebot, OAI-SearchBot and PerplexityBot"
          ],
          evidence: "Google identifies crawlability and index eligibility as technical foundations for generative search. OpenAI and Perplexity document separate search crawlers, allowing search visibility and model-training controls to be handled independently.",
          sourcesLabel: "Crawler documentation",
          sources: [
            ["Google · Technical foundations", "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"],
            ["OpenAI · OAI-SearchBot", "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq"],
            ["Perplexity · Crawlers", "https://docs.perplexity.ai/docs/resources/perplexity-crawlers"]
          ]
        }
      ],
      systemsIntro: "Relevant for",
      systemsLabel: "Google, ChatGPT, Claude and Perplexity",
      note: "GEO complements good SEO. It does not replace it."
    },
    packages: {
      eyebrow: "GEO packages",
      title: "The right GEO starting point",
      intro: "",
      items: [
        {
          number: "1",
          name: "GEO Deep Dive Audit",
          descriptor: "Clarity about visibility, sources and opportunities.",
          price: "€1,450",
          priceSuffix: "one-off",
          duration: "approx. 10 working days",
          features: [
            "Analysis of your AI visibility and sources",
            "Prioritised opportunities and quick wins",
            "A clear roadmap for the next steps",
            "Technical crawl and schema review",
            "60-minute workshop with a top-five action plan"
          ],
          cta: "Request the audit"
        },
        {
          number: "2",
          name: "GEO Action & Fix",
          descriptor: "Implement the strongest opportunities with focus.",
          price: "from €3,900",
          priceSuffix: "project price",
          duration: "approx. 4–6 weeks",
          features: [
            "Optimise access, indexing and schema markup",
            "Restructure up to 3 priority pages",
            "Clear business and entity signals",
            "Review up to 5 relevant third-party profiles",
            "Control measurement after around 6 weeks"
          ],
          cta: "Discuss implementation"
        },
        {
          number: "3",
          name: "AI Visibility Support",
          descriptor: "Measure visibility and keep improving it.",
          price: "from €1,850",
          priceSuffix: "per month",
          duration: "6-month minimum term",
          features: [
            "Monitor 20 core questions and 50 long-tail prompts",
            "Monthly share-of-voice and source report",
            "1 focus article or 2 content modules per month",
            "Ongoing source and entity work",
            "45-minute strategy call with next actions"
          ],
          cta: "Review the retainer"
        }
      ],
      priceNote: "All prices exclude VAT. Third-party, tool and publication costs are charged separately only after approval.",
      scopeNote: "For larger websites, multiple markets or additional languages, we prepare a tailored proposal.",
      recommendedLabel: "Recommended starting point",
      detailsLabel: "Show all details"
    },
    process: {
      eyebrow: "Process",
      title: "From analysis to measurable improvement",
      steps: [
        ["1", "Measure", "Capture visibility, sources and competitors.", "Transparency"],
        ["2", "Prioritise", "Order the strongest opportunities by impact and effort.", "Clear roadmap"],
        ["3", "Implement", "Improve technology, content and business signals.", "Focused improvement"],
        ["4", "Measure again", "Document change and continue improving.", "Measurable comparison"]
      ],
      disclaimerTitle: "Clear foundations can be improved deliberately and reviewed transparently.",
      disclaimer: "PATERNOGA creates transparent conditions, measures change in defined samples and improves the work based on the results."
    },
    cta: {
      eyebrow: "Contact",
      title: "How would you like to start?",
      quickOption: "Book an initial consultation",
      detailOption: "Request a GEO audit",
      valueLine: "From the first measurement to visible improvement.",
      note: "Your request is submitted directly and securely.",
      formLabel: "Guided request for a GEO audit",
      sectionId: "geo-anfrage",
      source: "geo-audit",
      flow: {
        stepLabel: "Step",
        ofLabel: "of",
        back: "Back",
        intentQuestion: "Where are you right now?",
        intentOptions: [
          { value: "new", label: "AI visibility has not been reviewed yet" },
          { value: "improve", label: "We have noticed initial mentions or issues" },
          { value: "advice", label: "We already have a specific GEO goal" }
        ],
        detailQuestions: {
          new: "Which website should we review?",
          improve: "What have you noticed so far?",
          advice: "What would you like the audit to achieve?"
        },
        detailPlaceholders: {
          new: "The website address is enough.",
          improve: "Website address plus a short note.",
          advice: "Website address and one or two sentences about your goal."
        },
        contactQuestion: "How can we reach you?",
        nameLabel: "Name",
        emailLabel: "Email",
        next: "Continue",
        submit: "Request the GEO audit",
        summaryLabel: "Your starting point",
        privacy: "Read personally · no obligation · never shared",
        sending: "Sending …",
        errorMessage: "That did not work. Please try again.",
        successEyebrow: "Request sent",
        successTitle: "Thank you for your audit request.",
        successBody: "Your details have arrived. Pascal will review them personally and get back to you.",
        successAgain: "Start another request"
      }
    },
    footer: { legal: "Paternoga SEO & GEO Studio", imprint: "Imprint", privacy: "Privacy" }
  }
} as const;

export type GeoContent = (typeof geoContent)[keyof typeof geoContent];
