// Local SEO money page. Headings follow researched buyer questions where a real
// query exists; each question section answers itself in its first sentence.
import { offers } from "./offers";

export type LocalLocale = "de" | "en";

export const localSeoContent = {
  de: {
    meta: {
      title: "SEO Agentur Dresden für Dienstleister | PATERNOGA",
      description:
        "SEO aus Dresden für Dienstleister: technische Basis, wichtige Leistungsseiten, lokale Auffindbarkeit und KI-Suche. Einstiegspreise ab 1.500 € netto."
    },
    breadcrumb: { home: "Start", current: "SEO Agentur Dresden" },
    eyebrow: "SEO Agentur Dresden",
    title: "SEO Agentur Dresden für Dienstleister",
    lead: "Für Dienstleister, die über ihre Website mehr passende Anfragen brauchen. Wir arbeiten an den wenigen Seiten, über die das tatsächlich entsteht: gefunden bei Google, korrekt wiedergegeben in KI-Antworten wie ChatGPT und klar genug, dass passende Kunden anfragen.",
    primaryCta: "SEO-Projekt in Dresden anfragen",
    secondaryCta: "Leistungen ansehen",
    visual: {
      label: "Wo eine Dresdner Suche endet",
      note: "Schematische Darstellung der drei Ergebnisflächen. Keine Messwerte, keine Kundendaten.",
      steps: [
        { tag: "Google-Ergebnisse", title: "Organische Treffer", text: "Ihre Leistungsseite konkurriert mit Agenturportalen und etablierten Anbietern." },
        { tag: "Lokale Ergebnisse", title: "Kartenbereich", text: "Unternehmensprofil, Entfernung, Bewertungen und Kategorien entscheiden mit." },
        { tag: "KI-Antwort", title: "Antwortsystem", text: "Ein Antwortsystem fasst wenige Quellen zusammen und nennt einzelne Anbieter." }
      ]
    },
    sections: {
      fit: {
        heading: "Für welche Unternehmen in Dresden passt das?",
        answer: "Für Dienstleister, deren Leistung vor dem Kauf erklärt werden muss und deren Geschäft an einer überschaubaren Zahl wichtiger Seiten hängt.",
        body: "Typisch sind Beratungen, Kanzleien, Planungs- und Ingenieurbüros, technische Dienstleister, Gesundheits- und Praxisangebote sowie spezialisierte B2B-Anbieter aus Dresden und Sachsen. Vorausgesetzt werden eine bestehende erreichbare Website, eine Ansprechperson, die das Projekt freigeben und Fachaussagen bestätigen kann, und ein Angebot, das tatsächlich verkauft werden soll.",
        notFor: "Weniger sinnvoll ist der Ansatz ohne bestehende Website, ohne Budget für Umsetzung oder wenn ausschließlich kurzfristige Rankingversprechen gesucht werden."
      },
      problem: {
        heading: "Warum bringt eine Website mit guten Rankings trotzdem zu wenige Anfragen?",
        answer: "Weil Sichtbarkeit und Anfrage zwei verschiedene Dinge sind: Eine Seite kann gefunden werden und trotzdem weder verstanden noch überzeugend genug sein.",
        body: "In der Praxis scheitert es selten an allen drei Ebenen gleichzeitig. Mal fehlt die technische Grundlage, mal beantwortet die Seite die eigentliche Kaufentscheidung nicht, mal ist der nächste Schritt unklar. Wir prüfen die drei Ebenen deshalb getrennt, bevor wir etwas ändern.",
        points: [
          ["Suchmaschine", "Die Seite ist nicht auffindbar, langsam, dünn oder konkurriert mit einer zweiten eigenen Seite um dieselbe Suchanfrage."],
          ["Antwortsystem", "Leistung, Standort und Zuständigkeit sind nicht eindeutig genug hinterlegt, um korrekt zusammengefasst zu werden."],
          ["Mensch", "Der Nutzen ist beschrieben, aber Belege, Abgrenzung und der nächste Schritt fehlen."]
        ]
      },
      services: {
        heading: "Was macht eine SEO-Agentur in Dresden konkret?",
        answer: "Wir arbeiten an technischer Basis, an den wichtigen Leistungsseiten, an der lokalen Auffindbarkeit und an der internen Verlinkung – in einem vorher festgelegten Umfang.",
        items: [
          { title: "Technisches SEO", text: "Indexierung, Statuscodes, Canonicals, Ladezeit, Rendering und strukturierte Daten entlang konkreter URLs statt als Sammelbericht." },
          { title: "Wichtige Leistungsseiten", text: "Suchintention, Angebotsklarheit, Informationsstruktur, fachliche Belege und der Anfrageweg auf den Seiten, über die Ihr Geschäft läuft." },
          { title: "Lokale Auffindbarkeit", text: "Google-Unternehmensprofil, konsistente Unternehmensdaten, lokale Relevanz auf der Website und die passenden lokalen Suchanfragen." },
          { title: "Interne Verlinkung", text: "Fachinhalte werden mit den kaufnahen Seiten verbunden, damit Relevanz nicht in Unterseiten versickert." },
          { title: "Search Intent", text: "Jede wichtige Seite bekommt genau eine Hauptsuchintention, damit zwei eigene Seiten nicht gegeneinander ranken." },
          { title: "Conversion", text: "Angebot, Belege, Abgrenzung und der nächste Schritt werden so geschärft, dass passende Besucher tatsächlich anfragen." }
        ]
      },
      geo: {
        heading: "Was hat SEO in Dresden mit ChatGPT und KI-Suche zu tun?",
        answer: "SEO und GEO teilen viele Grundlagen: Zugänglichkeit, klare Struktur und eindeutige Unternehmensangaben helfen Google ebenso wie den eigenen Crawlern von ChatGPT oder Perplexity.",
        body: "Diese Systeme arbeiten unabhängig vom Google-Index und wählen Quellen anders aus. Deshalb ist KI-Sichtbarkeit kein Nebenprodukt guter Rankings, sondern eine eigene Prüfebene. In Dresden bleibt klassisches SEO der Einstieg, weil die etablierte Nachfrage dort liegt. GEO kommt dazu, wenn geklärt werden soll, wie Antwortsysteme Ihr Unternehmen einordnen.",
        linkLabel: "KI-Sichtbarkeit im GEO Audit prüfen"
      },
      pricing: {
        heading: "Was kostet SEO in Dresden?",
        answer: "Bei PATERNOGA beginnt die Zusammenarbeit bei 1.500 € netto für einen einmaligen GEO Audit, bei 2.500 € netto für einen Seiten-Sprint und bei 1.250 € netto pro Monat für die laufende Betreuung.",
        body: "Es gelten dieselben Einstiegspreise wie deutschlandweit. Es gibt keine lokalen Sonderpakete und keine Rabatte. Der tatsächliche Umfang wird vor dem Start abgestimmt und anschließend verbindlich angeboten.",
        note: "Welcher Einstieg passt, hängt davon ab, ob die Ursache bekannt ist, ob ein konkretes Seitenproblem vorliegt oder ob die Arbeit wiederkehrt."
      },
      process: {
        heading: "Wie läuft die Zusammenarbeit ab?",
        answer: "In vier Schritten: Rahmen klären, Bestand prüfen, Arbeit priorisieren, Änderungen umsetzen und nachmessen.",
        steps: [
          ["Rahmen klären", "Domain, Zielgruppe, Einzugsgebiet, wichtigste Leistungen und die Seiten, über die Anfragen entstehen sollen."],
          ["Bestand prüfen", "Technik, Inhalte, lokale Signale und vorhandene Suchdaten werden entlang konkreter URLs untersucht."],
          ["Priorisieren", "Befunde werden nach Wirkung, Aufwand und Abhängigkeit geordnet, statt als lange Mängelliste übergeben."],
          ["Umsetzen und prüfen", "Der vereinbarte Umfang wird umgesetzt, dokumentiert und gegen den Ausgangsstand nachgemessen."]
        ]
      },
      local: {
        heading: "Warum eine SEO-Agentur aus Dresden?",
        answer: "Weil der Standort echte Zusammenarbeit vor Ort möglich macht – nicht, weil ein Ort allein ein Ranking verbessert.",
        body: "PATERNOGA sitzt tatsächlich in Dresden. Ein Termin vor Ort ist möglich, Abstimmungen sind kurz, und die Umsetzung übernimmt Pascal persönlich statt einer wechselnden Projektbesetzung. Google nennt Relevanz, Entfernung und Bekanntheit als lokale Faktoren; der Standort ersetzt Bekanntheit nicht, macht die Zusammenarbeit aber praktikabler.",
        proofLabel: "Woran wir uns messen lassen",
        proof: [
          ["Nachvollziehbare Arbeitsproben", "Ein bestehendes Dresdner Projekt mit lokaler Suchoptimierung und direkter Terminbuchung ist öffentlich einsehbar."],
          ["Offengelegter Ausgangsstand", "Wir zeigen den eigenen Suchdaten-Ausgangsstand einschließlich kleiner Zahlen und benennen, was nicht messbar ist."],
          ["Eigene technische Erhebung", "Für die DAX-40-Unternehmen haben wir öffentlich ausgewertet, welche KI-Crawler zugelassen sind – 33 von 40 robots.txt-Dateien waren verwertbar."]
        ],
        disclaimer: "Kundenzahlen und Ergebnisdaten veröffentlichen wir nur mit ausdrücklicher Freigabe. Wir versprechen keine Platzierung, keine Top-3-Position und keine bestimmte Zahl an Anfragen."
      },
      retainer: {
        heading: "Wann lohnt sich eine laufende SEO-Betreuung statt eines einmaligen Projekts?",
        answer: "Sobald die Arbeit wiederkehrt: wenn regelmäßig Seiten dazukommen, sich das Angebot ändert oder Suchdaten monatlich ausgewertet und in Maßnahmen übersetzt werden sollen.",
        body: "Ein einmaliger Audit oder ein Seiten-Sprint klärt einen Zustand. Er ersetzt aber keine kontinuierliche Priorisierung. In der laufenden Betreuung entscheiden wir jeden Monat anhand tatsächlicher Such-, KI- und Anfragesignale, welche wichtige Seite oder welches Sichtbarkeitshindernis als Nächstes bearbeitet wird – inklusive Umsetzung im vereinbarten Umfang.",
        note: "Wenn nach einem Audit oder Sprint objektiv kein wiederkehrender Bedarf besteht, empfehlen wir auch keine Betreuung.",
        linkLabel: "Laufende Betreuung ansehen"
      }
    },
    faq: {
      heading: "Häufige Fragen zu SEO in Dresden",
      items: [
        { question: "Wie lange dauert es, bis SEO in Dresden wirkt?", answer: "Das hängt vom Ausgangszustand ab. Technische Korrekturen und Verbesserungen an bestehenden Seiten können sich innerhalb weniger Wochen in Suchdaten zeigen, der Aufbau von Relevanz für umkämpfte lokale Suchanfragen dauert deutlich länger. Wir nennen bewusst keine garantierte Frist bis zu einer bestimmten Position, weil externe Rankingfaktoren nicht kontrollierbar sind." },
        { question: "Arbeiten Sie nur mit Unternehmen aus Dresden?", answer: "Nein. Der Standort ist Dresden, der Markt ist Deutschland. Für lokale Anbieter aus Dresden und Sachsen kommt die lokale Auffindbarkeit als eigenes Arbeitsfeld dazu; national gelten dieselben Leistungen ohne den lokalen Teil." },
        { question: "Braucht mein Unternehmen SEO oder GEO?", answer: "In der Regel beides, aber nicht gleichzeitig und nicht in derselben Reihenfolge. Wenn etablierte Suchnachfrage vorhanden ist, beginnt die Arbeit bei SEO. Wenn unklar ist, wie Antwortsysteme das Unternehmen einordnen, klärt das ein GEO Audit. Beide Ebenen arbeiten an denselben Seiten." },
        { question: "Übernehmen Sie auch die Umsetzung oder nur die Beratung?", answer: "Wir setzen um. Der Seiten-Sprint enthält die Änderungen an bis zu drei bestehenden Seiten einschließlich der notwendigen begrenzten Technik. Fachliche Aussagen und Freigaben bleiben bei Ihnen." },
        { question: "Was kostet eine SEO-Beratung in Dresden?", answer: "Es gibt keine gesonderte Stundenberatung als Produkt. Der Einstieg erfolgt über einen der drei Wege: GEO Audit ab 1.500 € netto, Seiten-Sprint ab 2.500 € netto oder laufende Betreuung ab 1.250 € netto pro Monat. Ein Erstgespräch zur Einordnung ist kostenfrei und unverbindlich." },
        { question: "Kümmern Sie sich auch um das Google-Unternehmensprofil?", answer: "Ja, als Teil der lokalen Auffindbarkeit. Dazu gehören korrekte Kategorien, konsistente Unternehmensdaten, sinnvolle Leistungen und die Verbindung zur Website. Bewertungen werden ausschließlich echt erzeugt; wir kaufen oder erzeugen keine Rezensionen." }
      ]
    },
    closing: {
      heading: "Nächster Schritt",
      text: "Schicken Sie uns die Seiten, über die Ihre Anfragen kommen sollen. Wir sagen Ihnen, welcher der drei Einstiege wirklich passt – auch wenn das der kleinste ist.",
      cta: "SEO-Projekt in Dresden anfragen"
    },
    relatedLabel: "Passende Leistungen"
  },
  en: {
    meta: {
      title: "SEO Agency Dresden for Service Businesses | PATERNOGA",
      description:
        "SEO from Dresden for service businesses: technical foundations, key service pages, local discovery and AI search. Entry prices from €1,500 net."
    },
    breadcrumb: { home: "Home", current: "SEO agency Dresden" },
    eyebrow: "SEO agency Dresden",
    title: "SEO agency in Dresden for service businesses",
    lead: "For service businesses that need more relevant enquiries from their website. We work on the few pages that actually produce them: found by Google, relayed correctly in AI answers like ChatGPT, and clear enough that the right clients get in touch.",
    primaryCta: "Discuss an SEO project in Dresden",
    secondaryCta: "See the services",
    visual: {
      label: "Where a Dresden search ends",
      note: "Schematic view of the three result surfaces. No measurements, no client data.",
      steps: [
        { tag: "Google results", title: "Organic listings", text: "Your service page competes with agency directories and established providers." },
        { tag: "Local results", title: "Map section", text: "Business profile, distance, reviews and categories all play a part." },
        { tag: "AI answer", title: "Answer system", text: "An answer system condenses a few sources and names individual providers." }
      ]
    },
    sections: {
      fit: {
        heading: "Which companies in Dresden is this for?",
        answer: "Service businesses whose offer needs explaining before anyone buys, and whose business rests on a manageable number of important pages.",
        body: "Typical clients are consultancies, law and tax practices, planning and engineering offices, technical service providers, health and clinic services and specialist B2B suppliers in Dresden and Saxony. It requires an existing, accessible website, a contact who can approve the project and confirm subject-matter claims, and an offer you genuinely want to sell.",
        notFor: "The approach makes less sense without an existing website, without an implementation budget, or when only short-term ranking promises are wanted."
      },
      problem: {
        heading: "Why does a website with decent rankings still produce too few enquiries?",
        answer: "Because visibility and enquiry are two different things: a page can be found and still be neither understood nor convincing enough.",
        body: "In practice it rarely fails on all three levels at once. Sometimes the technical foundation is missing, sometimes the page never answers the actual buying decision, sometimes the next step is unclear. That is why we review the three levels separately before changing anything.",
        points: [
          ["Search engine", "The page is not discoverable, is slow or thin, or competes with a second page of your own for the same query."],
          ["Answer system", "Service, location and responsibility are not stated clearly enough to be summarised correctly."],
          ["Human", "The benefit is described, but evidence, boundaries and the next step are missing."]
        ]
      },
      services: {
        heading: "What does an SEO agency in Dresden actually do?",
        answer: "We work on the technical foundation, the important service pages, local discoverability and internal linking — within a scope agreed in advance.",
        items: [
          { title: "Technical SEO", text: "Indexing, status codes, canonicals, load time, rendering and structured data checked against concrete URLs rather than as a generic report." },
          { title: "Key service pages", text: "Search intent, clarity of the offer, information structure, expert evidence and the enquiry path on the pages your business runs on." },
          { title: "Local discoverability", text: "Google Business Profile, consistent business data, local relevance on the website and the matching local queries." },
          { title: "Internal linking", text: "Specialist content is connected to the commercial pages so relevance does not drain into subpages." },
          { title: "Search intent", text: "Each important page gets exactly one primary search intent, so two of your own pages do not compete." },
          { title: "Conversion", text: "Offer, evidence, boundaries and the next step are sharpened so that relevant visitors actually enquire." }
        ]
      },
      geo: {
        heading: "What does SEO in Dresden have to do with ChatGPT and AI search?",
        answer: "SEO and GEO share many foundations: accessibility, clear structure and unambiguous company information help Google as well as the dedicated crawlers of ChatGPT or Perplexity.",
        body: "Those systems operate independently of the Google index and select sources differently. AI visibility is therefore not a by-product of good rankings but a review level of its own. In Dresden, classic SEO remains the entry point because that is where established demand sits. GEO is added when you need to know how answer systems classify your business.",
        linkLabel: "Review AI visibility with a GEO audit"
      },
      pricing: {
        heading: "What does SEO in Dresden cost?",
        answer: "At PATERNOGA, work starts at €1,500 net for a one-off GEO audit, €2,500 net for a page sprint and €1,250 net per month for ongoing support.",
        body: "The same entry prices apply as nationwide. There are no local packages and no discounts. The actual scope is agreed before the start and then quoted bindingly.",
        note: "Which entry point fits depends on whether the cause is known, whether a specific page problem exists, or whether the work recurs."
      },
      process: {
        heading: "How does the engagement work?",
        answer: "In four steps: define the frame, review what exists, prioritise the work, then implement and measure again.",
        steps: [
          ["Define the frame", "Domain, audience, service area, core services and the pages that should generate enquiries."],
          ["Review what exists", "Technology, content, local signals and available search data are examined against concrete URLs."],
          ["Prioritise", "Findings are ordered by impact, effort and dependency instead of handed over as a long defect list."],
          ["Implement and verify", "The agreed scope is implemented, documented and measured against the starting point."]
        ]
      },
      local: {
        heading: "Why an SEO agency based in Dresden?",
        answer: "Because the location makes real on-site collaboration possible — not because a location alone improves a ranking.",
        body: "PATERNOGA is genuinely based in Dresden. On-site meetings are possible, decisions are short, and Pascal delivers the work personally rather than a rotating project team. Google names relevance, distance and prominence as local factors; a location does not replace prominence, but it does make working together more practical.",
        proofLabel: "What we can be measured on",
        proof: [
          ["Verifiable work samples", "An existing Dresden project with local search optimisation and direct appointment booking is publicly visible."],
          ["Disclosed starting point", "We show our own search-data baseline including small numbers and state what cannot be measured."],
          ["Our own technical study", "For the DAX 40 companies we publicly assessed which AI crawlers are allowed — 33 of 40 robots.txt files were usable."]
        ],
        disclaimer: "Client figures and result data are published only with explicit approval. We promise no placement, no top-three position and no particular number of enquiries."
      },
      retainer: {
        heading: "When is ongoing SEO support worth more than a one-off project?",
        answer: "As soon as the work recurs: when pages are added regularly, the offer changes, or search data should be reviewed monthly and translated into action.",
        body: "A one-off audit or page sprint clarifies a state. It does not replace continuous prioritisation. In ongoing support we decide each month, based on actual search, AI and enquiry signals, which important page or which visibility obstacle to work on next — including implementation within the agreed scope.",
        note: "If there is objectively no recurring need after an audit or sprint, we do not recommend ongoing support either.",
        linkLabel: "See ongoing support"
      }
    },
    faq: {
      heading: "Common questions about SEO in Dresden",
      items: [
        { question: "How long does SEO in Dresden take to work?", answer: "It depends on the starting point. Technical corrections and improvements to existing pages can show up in search data within a few weeks, while building relevance for contested local queries takes considerably longer. We deliberately give no guaranteed deadline for a specific position, because external ranking factors are not controllable." },
        { question: "Do you only work with companies from Dresden?", answer: "No. The location is Dresden, the market is Germany. For local providers in Dresden and Saxony, local discoverability becomes an additional field of work; nationally the same services apply without the local part." },
        { question: "Does my company need SEO or GEO?", answer: "Usually both, but not at the same time and not in the same order. Where established search demand exists, the work starts with SEO. Where it is unclear how answer systems classify the business, a GEO audit clarifies it. Both levels work on the same pages." },
        { question: "Do you implement the changes or only advise?", answer: "We implement. The page sprint includes the changes to up to three existing pages including the limited technical work required. Subject-matter claims and approvals stay with you." },
        { question: "What does SEO consulting in Dresden cost?", answer: "There is no separate hourly consulting product. Work starts through one of three routes: GEO audit from €1,500 net, page sprint from €2,500 net or ongoing support from €1,250 net per month. An initial conversation to establish fit is free and without obligation." },
        { question: "Do you also look after the Google Business Profile?", answer: "Yes, as part of local discoverability. That includes correct categories, consistent business data, sensible services and the connection to the website. Reviews are only ever generated genuinely; we neither buy nor manufacture them." }
      ]
    },
    closing: {
      heading: "Next step",
      text: "Send us the pages your enquiries should come from. We will tell you which of the three entry points actually fits — even when that is the smallest one.",
      cta: "Discuss an SEO project in Dresden"
    },
    relatedLabel: "Related services"
  }
} as const;

export const localOfferOrder = ["geo_audit", "page_sprint", "geo_support"] as const;
export const localOffers = (lang: LocalLocale) => localOfferOrder.map((id) => ({ id, ...offers[lang][id] }));
