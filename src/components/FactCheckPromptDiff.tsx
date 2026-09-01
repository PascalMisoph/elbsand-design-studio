"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { AiPromptDiff, AiPromptDiffContent, AiPromptDiffHeader, AiPromptDiffViewToggle } from "./ui/prompt-diff";

export interface FactCheckDiffCase {
  label: string;
  before: string;
  after: string;
}

interface FactCheckPromptDiffProps {
  cases: readonly FactCheckDiffCase[];
  unifiedLabel?: string;
  selectorLabel: string;
}

export default function FactCheckPromptDiff({ cases, unifiedLabel = "Unified", selectorLabel }: FactCheckPromptDiffProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reduceMotion = useReducedMotion();
  const activeCase = cases[activeIndex] ?? cases[0];

  if (!activeCase) return null;

  return (
    <div className="mx-auto w-full max-w-2xl" data-slot="fact-check-prompt-diff">
      <div className="mb-3 flex max-w-full gap-1 overflow-x-auto rounded-lg border border-solid border-white/10 bg-[#11110f] p-1" role="tablist" aria-label={selectorLabel}>
        {cases.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`min-h-8 min-w-0 flex-1 whitespace-nowrap rounded-md border-0 px-1.5 text-[10px] font-medium transition-colors sm:px-3 sm:text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d37a5c] ${isActive ? "bg-white/[.09] text-[#f8f5ef]" : "bg-transparent text-[#8f8980] hover:bg-white/[.045] hover:text-[#ded8cf]"}`}
              style={{ fontSize: "10px" }}
              onClick={() => setActiveIndex(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeCase.label}
          initial={reduceMotion ? false : { opacity: 0, y: 4, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -3, filter: "blur(2px)" }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <AiPromptDiff before={activeCase.before} after={activeCase.after}>
            <AiPromptDiffHeader title={activeCase.label}>
              <AiPromptDiffViewToggle label={unifiedLabel} />
            </AiPromptDiffHeader>
            <AiPromptDiffContent />
          </AiPromptDiff>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
