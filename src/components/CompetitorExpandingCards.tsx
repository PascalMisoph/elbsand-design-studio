"use client";

import { ExpandingCards, type CardItem } from "@/components/ui/expanding-cards";

interface CompetitorExpandingCardsProps {
  lang: "de" | "en";
}

const cards = {
  de: [
    {
      id: "answer-fields",
      title: "Antwortfelder erkennen",
      description:
        "Sieh, bei welchen Fragen ähnliche Angebote bereits als Referenz auftauchen.",
      imgSrc: "/images/competitor-answer-fields.webp",
    },
    {
      id: "own-strength",
      title: "Eigene Stärke schärfen",
      description:
        "Finde Merkmale, die dein Angebot verständlich von Alternativen unterscheiden.",
      imgSrc: "/images/competitor-distinction.webp",
    },
    {
      id: "answer-systems",
      title: "Antwortsysteme vergleichen",
      description:
        "Vergleichbare Anbieter werden häufiger über externe Kontexte eingeordnet.",
      imgSrc: "/images/competitor-systems.webp",
    },
    {
      id: "use-gaps",
      title: "Lücken sinnvoll nutzen",
      description:
        "Priorisiere Themen, bei denen Klarheit statt lauter Behauptungen fehlt.",
      imgSrc: "/images/competitor-gaps.webp",
    },
  ],
  en: [
    {
      id: "answer-fields",
      title: "Recognise answer fields",
      description:
        "See which questions already feature comparable offers as references.",
      imgSrc: "/images/competitor-answer-fields.webp",
    },
    {
      id: "own-strength",
      title: "Sharpen your strength",
      description:
        "Find the qualities that distinguish your offer clearly from alternatives.",
      imgSrc: "/images/competitor-distinction.webp",
    },
    {
      id: "answer-systems",
      title: "Compare answer systems",
      description:
        "Comparable providers are more often framed through external context.",
      imgSrc: "/images/competitor-systems.webp",
    },
    {
      id: "use-gaps",
      title: "Use gaps meaningfully",
      description:
        "Prioritise topics where clarity is missing rather than louder claims.",
      imgSrc: "/images/competitor-gaps.webp",
    },
  ],
} satisfies Record<"de" | "en", Omit<CardItem, "icon">[]>;

export default function CompetitorExpandingCards({
  lang,
}: CompetitorExpandingCardsProps) {
  const items: CardItem[] = cards[lang].map((card, index) => ({
    ...card,
    icon: (
      <span className="text-sm font-medium" aria-hidden="true">
        {index + 1}
      </span>
    ),
  }));

  return <ExpandingCards items={items} defaultActiveIndex={0} />;
}
