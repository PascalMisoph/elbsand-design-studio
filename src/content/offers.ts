// Single source of truth for the three commercial offers.
// Visible copy, hub package cards and JSON-LD all read from here so that the
// structured data can never assert a price or scope the page does not show.

export type OfferId = "geo_audit" | "page_sprint" | "geo_support";
export type OfferLocale = "de" | "en";

export interface OfferPricing {
  minPrice: number;
  currency: "EUR";
  /** Monthly retainer rather than a one-off engagement. */
  recurring: boolean;
}

export interface OfferCopy {
  name: string;
  /** Buyer state this offer is for; the separation criterion between the paths. */
  fitFor: string;
  /** Rendered next to the price, e.g. "ab 1.500 €". */
  price: string;
  /** Rendered after the price, e.g. "netto, einmalig". */
  priceSuffix: string;
  priceNote: string;
  duration: string;
  scope: string;
  deliverables: string;
  limits: string;
  cta: string;
  ctaHref: string;
  /** Route the hub package card links to. */
  cardHref: string;
}

export const offerPricing: Record<OfferId, OfferPricing> = {
  geo_audit: { minPrice: 1500, currency: "EUR", recurring: false },
  page_sprint: { minPrice: 2500, currency: "EUR", recurring: false },
  geo_support: { minPrice: 1250, currency: "EUR", recurring: true },
};

export const offers: Record<OfferLocale, Record<OfferId, OfferCopy>> = {
  de: {
    geo_audit: {
      name: "GEO Audit",
      fitFor: "Die Ursache für geringe oder unklare KI-Sichtbarkeit ist noch nicht bekannt.",
      price: "ab 1.500 €",
      priceSuffix: "netto, einmalig",
      priceNote: "Der Einstiegspreis gilt für den beschriebenen Basisumfang. Vor Projektstart stimmen wir den konkreten Umfang ab und halten ihn als verbindliches Angebot fest.",
      duration: "Rund 7 Arbeitstage nach vollständigem Briefing und bestätigtem Messzugang, anschließend 45 Minuten gemeinsame Übergabe.",
      scope: "Eine Marke, ein Angebot und eine vereinbarte Sprache mit deutschem Basisumfang. Untersucht werden rund 20 gemeinsam bestätigte kaufnahe Käuferfragen auf drei verfügbaren Such- und Antwortoberflächen mit wiederholten Beobachtungen, bis zu drei Wettbewerber und bis zu zehn priorisierte URLs.",
      deliverables: "Dokumentierte Antworten und Beobachtungen mit Datum und Modus, Markennennungen, verwendete Quellen und Verlinkungen, ein Wettbewerbsvergleich, belegte Quellen- und Inhaltslücken, priorisierte Maßnahmen, die drei wichtigsten nächsten Schritte, eine Zusammenfassung für die Geschäftsführung und eine 45-minütige Übergabe.",
      limits: "Keine Ranking-, Citation- oder Lead-Garantie. Fehlgeschlagene Abrufe werden ausgewiesen und nicht als fehlende Sichtbarkeit gezählt; API- und Nutzeransichten bleiben getrennt.",
      cta: "GEO Audit anfragen",
      ctaHref: "#kontakt",
      cardHref: "/geo-audit/#kontakt",
    },
    page_sprint: {
      name: "Seiten-Sprint",
      fitFor: "Das Problem liegt bereits auf konkreten kaufnahen Seiten und soll direkt umgesetzt werden.",
      price: "ab 2.500 €",
      priceSuffix: "netto, einmalig",
      priceNote: "Der Einstiegspreis gilt für den beschriebenen Basisumfang. Vor Projektstart stimmen wir den konkreten Umfang ab und halten ihn als verbindliches Angebot fest.",
      duration: "Rund 10 Arbeitstage nach vollständigem Briefing, Zugang und fachlicher Freigabe.",
      scope: "Bis zu drei bestehende wichtige Leistungsseiten für ein Angebot in einer vereinbarten Sprache. Bearbeitet werden Suchintention und Käuferjob, Angebotsklarheit, Informationsstruktur, fachliche Belege, interne Verlinkung, CTA und Anfrageweg sowie notwendige begrenzte technische Anpassungen. Die Umsetzung erfolgt direkt auf der bestehenden Website, soweit vereinbart.",
      deliverables: "Umgesetzte Seitenänderungen, Qualitätsprüfung, ein dokumentierter Vorher- und Nachher-Stand, eine nachvollziehbare Änderungslogik und die nächsten Prioritäten. Fachliche Aussagen und Freigaben kommen von dir.",
      limits: "Kein kompletter Relaunch, keine unbegrenzte Content-Produktion oder Entwicklung, kein Branding, keine PR-Kampagne und keine vollständige Mehrsprachigkeit. Keine Zusage zu Rankings, KI-Nennungen oder einer bestimmten Zahl an Anfragen.",
      cta: "Seiten-Sprint anfragen",
      ctaHref: "#kontakt",
      cardHref: "/content-optimierung-ai-suche/#kontakt",
    },
    geo_support: {
      name: "Laufende Betreuung",
      fitFor: "SEO-, Content- und GEO-Arbeit fällt regelmäßig an und soll nachgemessen werden.",
      price: "ab 1.250 €",
      priceSuffix: "netto / Monat",
      priceNote: "Der Einstiegspreis gilt für den beschriebenen monatlichen Basisumfang. Vor Beginn stimmen wir Kapazität und Schwerpunkte ab und halten sie als verbindliches Angebot fest.",
      duration: "Zunächst drei Monate, danach monatlich kündbar. Nach drei Monaten entscheiden wir gemeinsam anhand der Messwerte, ob die Betreuung fortgesetzt, angepasst oder beendet wird.",
      scope: "Jeden Monat entscheiden wir anhand tatsächlicher Such-, KI- und Anfragesignale, welche wichtige Seite oder welches Sichtbarkeitshindernis als Nächstes bearbeitet wird. Dazu gehören ein definierter monatlicher Prioritätsblock, ein festes Messpanel sowie SEO-, Content- und GEO-Maßnahmen, die innerhalb der vereinbarten Kapazität umgesetzt und geprüft werden.",
      deliverables: "Umgesetzte Maßnahmen im vereinbarten Umfang, eine monatliche Einordnung der Messwerte, ein nachvollziehbares Änderungsprotokoll und die dokumentierte nächste Priorität.",
      limits: "Vereinbarte Kapazität statt unbegrenzter Aufgaben. Keine Zusage zu Rankings, KI-Nennungen oder Leadzahlen. Betreuung ist sinnvoll, wenn tatsächlich wiederkehrende Arbeit anfällt.",
      cta: "Betreuung anfragen",
      ctaHref: "#kontakt",
      cardHref: "/geo-betreuung/#kontakt",
    },
  },
  en: {
    geo_audit: {
      name: "GEO audit",
      fitFor: "The cause of weak or unclear AI visibility is not yet known.",
      price: "from €1,500",
      priceSuffix: "net, one-off",
      priceNote: "The entry price covers the base scope described here. We agree the actual scope before the project starts and record it as a binding quote.",
      duration: "Around 7 working days after a complete briefing and confirmed measurement access, followed by a 45-minute handover.",
      scope: "One brand, one offering and one agreed language with a German base scope. We review around 20 jointly confirmed purchase-relevant buyer questions across three available search and answer surfaces with repeated observations, up to three competitors and up to ten priority URLs.",
      deliverables: "Documented answers and observations with date and mode, brand mentions, the sources and links used, a competitor comparison, evidenced source and content gaps, prioritised actions, the three most important next steps, a summary for management and a 45-minute handover.",
      limits: "No ranking, citation or lead guarantee. Failed observations are disclosed and never counted as missing visibility; API and consumer experiences remain separate.",
      cta: "Request a GEO audit",
      ctaHref: "#kontakt",
      cardHref: "/en/geo-audit/#kontakt",
    },
    page_sprint: {
      name: "Page sprint",
      fitFor: "The problem already sits on specific commercial pages and should be implemented directly.",
      price: "from €2,500",
      priceSuffix: "net, one-off",
      priceNote: "The entry price covers the base scope described here. We agree the actual scope before the project starts and record it as a binding quote.",
      duration: "Around 10 working days after a complete briefing, access and subject-matter approval.",
      scope: "Up to three existing commercial pages for one offering in one agreed language. We work on search intent and buyer job, clarity of the offering, information structure, expert evidence, internal linking, calls to action and the enquiry path, plus the limited technical changes required. Implementation happens directly on your existing website where agreed.",
      deliverables: "Implemented page changes, quality checks, a documented before-and-after record, a traceable rationale for each change and the next priorities. You provide and approve subject-matter claims.",
      limits: "No complete relaunch, unlimited content or development, branding, PR campaign or full multilingual rollout. No commitment to rankings, AI mentions or a particular number of enquiries.",
      cta: "Request a page sprint",
      ctaHref: "#kontakt",
      cardHref: "/en/content-optimization-ai-search/#kontakt",
    },
    geo_support: {
      name: "Ongoing support",
      fitFor: "SEO, content and GEO work comes up regularly and should be measured over time.",
      price: "from €1,250",
      priceSuffix: "net / month",
      priceNote: "The entry price covers the monthly base scope described here. We agree capacity and focus before we start and record them as a binding quote.",
      duration: "Three months to begin with, then cancellable monthly. After three months we decide together, based on the measurements, whether support continues, changes or ends.",
      scope: "Each month we decide, based on actual search, AI and enquiry signals, which important page or which visibility obstacle to work on next. That includes a defined monthly priority block, a fixed measurement panel and SEO, content and GEO measures implemented and reviewed within the agreed capacity.",
      deliverables: "Implemented measures within the agreed scope, a monthly interpretation of the measurements, a traceable change log and the documented next priority.",
      limits: "Agreed capacity rather than unlimited tasks. No commitment to rankings, AI mentions or lead numbers. Support makes sense when there is genuine recurring work.",
      cta: "Request ongoing support",
      ctaHref: "#kontakt",
      cardHref: "/en/geo-support/#kontakt",
    },
  },
};
