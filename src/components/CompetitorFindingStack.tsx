"use client";

import { StackedActivityCards } from "@/components/ui/stacked-activity-cards";

interface CompetitorFindingStackProps {
  lang: "de" | "en";
}

const germanItems = [
  {
    title: "Fragenlücke",
    text: "Eine relevante Entscheidungssituation wird von allgemeinen Wettbewerbserklärungen besetzt, während der eigene Unterschied unsichtbar bleibt.",
  },
  {
    title: "Quellenvorteil",
    text: "Externe Quellen beschreiben vergleichbare Angebote konsistenter und geben ihren Aussagen einen klareren Kontext.",
  },
  {
    title: "Inhaltsrichtung",
    text: "Eine präzise Leistungsseite kann die Lücke glaubwürdiger schließen als eine große Menge allgemeiner neuer Inhalte.",
  },
] as const;

const englishItems = [
  {
    title: "Question gap",
    text: "A relevant decision question is occupied by broad competitor explanations while the own difference stays invisible.",
  },
  {
    title: "Source advantage",
    text: "External sources describe competing offers more consistently and give their claims clearer context.",
  },
  {
    title: "Content direction",
    text: "One precise service page can close the gap more credibly than a volume of generic new content.",
  },
] as const;

export default function CompetitorFindingStack({ lang }: CompetitorFindingStackProps) {
  const german = lang === "de";
  return (
    <StackedActivityCards
      items={german ? germanItems : englishItems}
      showLabel={german ? "Alle zeigen" : "Show all"}
      hideLabel={german ? "Stapel schließen" : "Collapse stack"}
    />
  );
}
