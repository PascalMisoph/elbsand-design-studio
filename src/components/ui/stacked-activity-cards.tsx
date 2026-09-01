"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

export interface StackedActivityItem {
  title: string;
  text: string;
}

interface StackedActivityCardsProps {
  items: readonly StackedActivityItem[];
  showLabel: string;
  hideLabel: string;
  className?: string;
}

export function StackedActivityCards({
  items,
  showLabel,
  hideLabel,
  className,
}: StackedActivityCardsProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const compact = useMediaQuery("(max-width: 639px)");
  const reduceMotion = useReducedMotion();

  const collapsedHeight = compact ? 306 : 210;
  const orderedItems = React.useMemo(
    () => [items[activeIndex], ...items.filter((_, index) => index !== activeIndex)],
    [activeIndex, items],
  );

  return (
    <div className={cn("mx-auto flex w-full max-w-[680px] flex-col items-center", className)}>
      <motion.div
        className={cn("relative w-full", expanded && "flex flex-col gap-3")}
        animate={{ height: expanded ? "auto" : collapsedHeight }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 170, damping: 22, mass: 0.85 }}
      >
        {orderedItems.map((item, visualIndex) => {
          const originalIndex = items.indexOf(item);
          const collapsedOffset = visualIndex * 18;
          return (
            <motion.article
              layout="position"
              key={item.title}
              data-active={visualIndex === 0}
              className={cn(
                "min-h-60 rounded-[22px] border border-solid border-white/10 bg-[#171714] px-6 py-6 text-left shadow-[0_18px_45px_rgba(0,0,0,.34)] sm:min-h-40 sm:px-8",
                expanded ? "relative w-full" : "absolute inset-x-0 top-0",
              )}
              animate={{
                y: expanded ? 0 : collapsedOffset,
                scale: expanded ? 1 : 1 - visualIndex * 0.04,
                rotate: expanded ? 0 : visualIndex * 0.16,
                opacity: expanded ? 1 : 1 - visualIndex * 0.12,
                zIndex: items.length - visualIndex,
              }}
              transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 180, damping: 22, mass: 0.82 }}
            >
              <button
                type="button"
                className="block w-full appearance-none border-0 bg-transparent p-0 text-left text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d37a5c]"
                onClick={() => {
                  if (!expanded || visualIndex === 0) return;
                  setActiveIndex(originalIndex);
                  setExpanded(false);
                }}
                aria-label={`${originalIndex + 1}: ${item.title}`}
              >
                <span className="text-sm font-semibold text-[#d37a5c]">{originalIndex + 1}</span>
                <h3 className="m-0 mt-4 text-2xl font-semibold leading-tight tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="m-0 mt-3 max-w-[590px] text-base leading-copy text-[#b9b4aa]">
                  {item.text}
                </p>
              </button>
            </motion.article>
          );
        })}
      </motion.div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="relative z-10 mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-solid border-white/12 bg-[#171714] px-7 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,.28)] transition-colors hover:bg-[#24231f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d37a5c]"
        aria-expanded={expanded}
      >
        {expanded ? hideLabel : showLabel}
        <ChevronDown className={cn("size-4 transition-transform duration-300", expanded && "rotate-180")} aria-hidden="true" />
      </button>
    </div>
  );
}

export default StackedActivityCards;
