"use client";

import * as React from "react";
import { motion, MotionConfig } from "motion/react";

import { cn } from "@/lib/utils";

export interface HowItWorksStep {
  title: string;
  text: string;
}

interface HowItWorksTimelineProps {
  steps: readonly HowItWorksStep[];
  className?: string;
}

export default function HowItWorksTimeline({ steps, className }: HowItWorksTimelineProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={cn("mx-auto w-full max-w-2xl", className)} data-slot="how-it-works-timeline">
        <ol className="m-0 flex list-none flex-col p-0">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <motion.li
                key={step.title}
                className="flex gap-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.48, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col items-center" aria-hidden="true">
                  <motion.span
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-solid border-white/14 bg-white/[.045] text-sm font-semibold tabular-nums text-[#d37a5c] shadow-[0_8px_22px_rgba(0,0,0,.14)]"
                    initial={{ scale: 0.88 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.38, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {index + 1}
                  </motion.span>
                  {!isLast && (
                    <span className="relative mt-1 w-px flex-1 overflow-hidden bg-white/10">
                      <motion.span
                        className="absolute inset-0 origin-top bg-[#b74622]/55"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.62, delay: index * 0.09 + 0.16, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                  )}
                </div>

                <div className={isLast ? "pb-0" : "pb-10"}>
                  <h3 className="m-0 text-base font-semibold leading-snug text-[#f8f5ef]">{step.title}</h3>
                  <p className="m-0 mt-1.5 max-w-xl text-sm leading-relaxed text-[#aaa49a]">{step.text}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </MotionConfig>
  );
}
