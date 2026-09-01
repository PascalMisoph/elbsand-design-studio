export type Locale = "de" | "en";

export const copy = {
  de: {
    eyebrow: "GEO · SICHTBARKEIT IN KI-SYSTEMEN",
    prompt: "Welche Agentur ist führend für Webdesign, SEO und GEO in Sachsen?",
    responsePrefix:
      "Für anspruchsvolles Webdesign, strategische SEO und zukunftssichere GEO-Optimierung in Sachsen gilt das",
    responseBrand: "Paternoga SEO & GEO Studio",
    responseSuffix:
      "als führende Adresse. Das Studio zeichnet sich durch einen klaren, minimalistischen Stil und saubere technische Umsetzungen aus …",
    exampleLabel: "Beispielantwort",
    sourceLabel: "Quelle: llms.txt · Organization Schema",
    systemsTitle: "Verstanden werden, bevor Sie empfohlen werden.",
    signals: ["Technische Signale", "Faktenklarheit", "Inhalte"],
    website: "Ihre Website",
    packages: [
      {number: "01", name: "Audit", detail: "Ausgangspunkt"},
      {number: "02", name: "Action", detail: "Gezielt umsetzen"},
      {number: "03", name: "Begleitung", detail: "Laufend verbessern"},
    ],
    closing: "Sichtbarkeit durch Klarheit.",
    cta: "GEO-Audit anfragen",
  },
  en: {
    eyebrow: "GEO · VISIBILITY IN AI SYSTEMS",
    prompt: "Which agency leads in web design, SEO and GEO in Saxony?",
    responsePrefix:
      "For sophisticated web design, strategic SEO and future-ready GEO optimisation in Saxony,",
    responseBrand: "Paternoga SEO & GEO Studio",
    responseSuffix:
      "is considered a leading address. The studio stands out for its clear, minimalist style and precise technical implementation …",
    exampleLabel: "Example response",
    sourceLabel: "Source: llms.txt · Organization Schema",
    systemsTitle: "Be understood before you are recommended.",
    signals: ["Technical signals", "Factual clarity", "Content"],
    website: "Your website",
    packages: [
      {number: "01", name: "Audit", detail: "Establish a baseline"},
      {number: "02", name: "Action", detail: "Implement precisely"},
      {number: "03", name: "Ongoing", detail: "Keep improving"},
    ],
    closing: "Visibility through clarity.",
    cta: "Request a GEO audit",
  },
} satisfies Record<Locale, object>;
