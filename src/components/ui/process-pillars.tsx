"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export interface ProcessPillarStep {
  title: string;
  text: string;
}

interface ProcessPillarsProps {
  steps: readonly ProcessPillarStep[];
  className?: string;
}

const fillLevels = [26, 50, 74, 100] as const;

export function ProcessPillars({ steps, className }: ProcessPillarsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("w-full", className)} data-slot="process-pillars">
      <div className="mx-auto flex h-[190px] w-full max-w-[720px] items-end gap-2 md:h-[230px]" aria-hidden="true">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group relative flex h-full min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-md border border-solid border-white/14 bg-[#0d0d0c] transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:border-[#b74622]/55 hover:bg-[#12110f] hover:shadow-[0_18px_38px_rgba(0,0,0,.24)] motion-reduce:transform-none motion-reduce:transition-none"
          >
            <motion.div
              className="relative flex w-full items-start justify-center rounded-b-md border-x-0 border-b-0 border-t border-solid border-[#b74622]/70 bg-gradient-to-t from-[#191816] via-[#24211e] to-[#38251e] shadow-[0_-8px_24px_rgba(183,70,34,.08)] transition-[filter,box-shadow] duration-300 group-hover:brightness-125 group-hover:shadow-[0_-12px_30px_rgba(183,70,34,.14)] motion-reduce:transition-none"
              style={{ height: `${fillLevels[index] ?? 100}%`, transformOrigin: "center bottom" }}
              initial={reduceMotion ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.72, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="pt-3 text-[11px] font-semibold text-[#f2a181] sm:text-xs md:pt-4"
                initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: 0.32 + index * 0.13 }}
              >
                Schritt {index + 1}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>

      <ol className="mx-auto mt-8 grid w-full max-w-[720px] list-none grid-cols-1 border-x-0 border-y border-solid border-white/12 p-0 md:mt-10 md:grid-cols-4">
        {steps.map((step) => (
          <li className="min-w-0 border-x-0 border-b-0 border-t border-solid border-white/12 px-0 py-6 first:border-t-0 md:min-h-[230px] md:border-y-0 md:border-r-0 md:border-l md:px-6 md:py-7 md:first:border-l-0" key={step.title}>
            <h3 className="m-0 text-xl font-medium leading-[1.15] tracking-[-.035em] text-[#f8f5ef]">{step.title}</h3>
            <p className="m-0 mt-3 text-base leading-[1.58] text-[#aaa49a]">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProcessPillars;
