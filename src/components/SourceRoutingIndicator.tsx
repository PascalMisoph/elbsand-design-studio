"use client";

import * as React from "react";

import { AiRoutingIndicator } from "@/components/ui/routing-indicator";
import { useMediaQuery } from "@/lib/use-media-query";
import { useVisibleInterval } from "@/lib/use-visible-interval";

type SourceRoutingIndicatorProps = {
  lang: "de" | "en";
};

const cases = {
  de: [
    ["Bezüge nachvollziehen", "Quelle identifiziert", "Bezug bestätigt"],
    ["Belege einordnen", "klar / veraltet / vermutet", "Beleg bewerten"],
    ["Quellenarbeit planen", "externer Beleg fehlt", "Beleg ergänzen"],
  ],
  en: [
    ["Trace references", "Source identified", "Reference confirmed"],
    ["Classify evidence", "clear / outdated / assumed", "Evaluate evidence"],
    ["Plan source work", "external evidence missing", "Add evidence"],
  ],
} as const;

const labels = {
  de: {
    header: "Quellenprüfung",
    routing: "Prüfung aktiv",
    input: "Quelle",
    pattern: "Einordnung",
    target: "Entscheidung",
  },
  en: {
    header: "Source review",
    routing: "Review active",
    input: "Source",
    pattern: "Classification",
    target: "Decision",
  },
} as const;

export default function SourceRoutingIndicator({
  lang,
}: SourceRoutingIndicatorProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useVisibleInterval(
    () => setActiveIndex((current) => (current + 1) % cases[lang].length),
    2000,
    reduceMotion,
  );

  const [input, matchedPattern, targetAgent] = cases[lang][activeIndex];
  const copy = labels[lang];

  return (
    <div className="dark mx-auto w-full max-w-[800px]">
      <AiRoutingIndicator
        input={input}
        matchedPattern={matchedPattern}
        targetAgent={targetAgent}
        isRouting
        header={copy.header}
        routingLabel={copy.routing}
        inputLabel={copy.input}
        patternLabel={copy.pattern}
        targetLabel={copy.target}
      />
    </div>
  );
}
