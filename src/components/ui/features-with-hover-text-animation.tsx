"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export interface HoverTextFeature {
  title: string;
  text: string;
}

interface FeaturesWithHoverTextAnimationProps {
  items: readonly HoverTextFeature[];
  className?: string;
}

export function FeaturesWithHoverTextAnimation({
  items,
  className,
}: FeaturesWithHoverTextAnimationProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reduceMotion = useReducedMotion();
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <div className={cn("w-full", className)}>
      <div className="flex min-h-14 items-end md:min-h-16">
        <AnimatePresence initial={false} mode="wait">
          <motion.h2
            key={activeItem.title}
            initial={reduceMotion ? false : { opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="brand-hover-active-title m-0 max-w-3xl font-medium text-[#f8f5ef]"
            aria-live="polite"
          >
            {activeItem.title}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-px border border-solid border-white/12 bg-white/12 md:mt-12 md:grid-cols-2">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.title}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              className="group relative flex min-h-[220px] appearance-none flex-col items-start justify-between gap-10 overflow-hidden border-0 bg-[#0b0b0a] p-5 text-left font-sans text-inherit shadow-none outline-none transition-shadow duration-200 hover:shadow-[0_20px_45px_rgba(0,0,0,.3)] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d37a5c] md:min-h-[250px] md:p-8"
            >
              {isActive && (
                <motion.span
                  layoutId="active-hover-feature"
                  className="pointer-events-none absolute inset-0 bg-[#b74622]/[.055]"
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                  aria-hidden="true"
                />
              )}
              <p className="relative z-10 m-0 max-w-[500px] text-base leading-[1.62] text-[#918c84] md:text-[17px]">
                <span className={cn("font-medium transition-colors duration-200", isActive ? "text-[#f8f5ef]" : "text-[#c8c2b8] group-hover:text-[#f8f5ef]")}>
                  {item.title}
                </span>{" "}
                {item.text}
              </p>
              <span className={cn("relative z-10 text-lg font-medium transition-colors duration-200", isActive ? "text-[#d37a5c]" : "text-[#6e6962] group-hover:text-[#d37a5c]") }>
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturesWithHoverTextAnimation;
