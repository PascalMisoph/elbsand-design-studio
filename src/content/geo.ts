export const geoContent = {
  de: {
    meta: {
      title: "GEO-Optimierung & AI-Sichtbarkeit | PATERNOGA",
      description:
        "GEO-Audit, Umsetzung und laufende Betreuung für klare Sichtbarkeit in KI-Antworten. Quellen, Technik und Content jetzt systematisch prüfen lassen."
    },
    nav: ["Leistungen", "Projekte", "Sichtbarkeit", "Ablauf", "Kontakt"],
    headerCta: "Projekt anfragen",
    hero: {
      eyebrow: "GEO & KI-Sichtbarkeit",
      title: "Wie werde ich in KI-Antworten sichtbar?",
      body: "Durch klare Inhalte, eindeutige Unternehmenssignale und eine technisch zugängliche Website. SEO und GEO teilen viele dieser Grundlagen: Zugänglichkeit, klare Struktur und eindeutige Unternehmensangaben helfen Google ebenso wie den eigenen Crawlern von ChatGPT oder Perplexity, die unabhängig vom Google-Index arbeiten.",
      primaryCta: "GEO Audit anfragen",
      primaryHref: "/geo-audit/",
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
      title: "Klare Pakete. Individuell im Umfang",
      scopeNote: "Die genannten Preise sind Einstiegspreise für den jeweils beschriebenen Basisumfang. Den tatsächlichen Umfang stimmen wir vor dem Start gemeinsam ab und halten ihn als verbindliches Angebot fest. Fremd- und Toolkosten werden nur nach Freigabe separat berechnet."
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
    headerCta: "Start a project",
    hero: {
      eyebrow: "GEO & AI visibility",
      title: "Become visible in AI answers",
      body: "We create the technical and editorial conditions that help AI systems understand your business clearly. SEO and GEO share many of these foundations: accessibility, clear structure and unambiguous company information help Google as well as the dedicated crawlers of ChatGPT or Perplexity, which operate independently of Google's index.",
      primaryCta: "Request a GEO audit",
      primaryHref: "/en/geo-audit/",
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
      title: "Clear packages. Individual in scope",
      scopeNote: "These are entry prices for the base scope described on each offer page. We agree the actual scope with you before we start and record it as a binding quote. Third-party and tool costs are billed separately only after approval."
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
