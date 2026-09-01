"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

export interface AiCitationSource {
  title: string;
  domain: string;
  type: string;
  snippet: string;
  href: string;
}

export interface AiCitationSegment {
  text: string;
  citation?: number;
}

interface AiCitationProps {
  segments: readonly AiCitationSegment[];
  sources: readonly AiCitationSource[];
  answerLabel: string;
  helperText: string;
  sourceLabel: string;
  openLabel: string;
  className?: string;
}

const alignments = ["left-0", "left-1/2 -translate-x-1/2", "right-0"] as const;

export function AiCitation({ segments, sources, answerLabel, helperText, sourceLabel, openLabel, className }: AiCitationProps) {
  const [activeCitation, setActiveCitation] = React.useState<number | null>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setActiveCitation(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCitation(null);
    };
    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className={cn("w-full max-w-lg rounded-2xl border border-solid border-white/12 bg-[#11110f] p-6 shadow-[0_20px_55px_rgba(0,0,0,.24)]", className)} data-slot="ai-citation">
      <p className="m-0 text-sm font-semibold text-[#f8f5ef]">{answerLabel}</p>
      <div className="m-0 mt-3 text-sm leading-[1.75] text-[#e6e0d7]">
        {segments.map((segment, index) => {
          const source = segment.citation ? sources[segment.citation - 1] : undefined;
          const isOpen = segment.citation === activeCitation;
          return (
            <React.Fragment key={`${segment.text}-${index}`}>
              {segment.text}
              {source && segment.citation && (
                <span className="relative inline-block align-super">
                  <button
                    type="button"
                    className="inline-flex h-4 min-w-4 appearance-none items-center justify-center rounded-full border border-solid border-white/14 bg-[#24221f] px-1 font-sans text-[10px] font-medium text-[#aaa49a] transition-colors hover:border-[#d37a5c]/55 hover:text-[#f8f5ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d37a5c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11110f]"
                    aria-expanded={isOpen}
                    aria-controls={`ai-citation-source-${segment.citation}`}
                    onClick={() => setActiveCitation(isOpen ? null : segment.citation!)}
                  >
                    {segment.citation}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`ai-citation-source-${segment.citation}`}
                        role="dialog"
                        aria-label={`${sourceLabel} ${segment.citation}`}
                        className={cn("absolute top-6 z-30 w-[min(280px,calc(100vw-48px))] rounded-xl border border-solid border-white/14 bg-[#181714] p-4 text-left normal-case shadow-[0_24px_65px_rgba(0,0,0,.48)]", alignments[segment.citation - 1] ?? "right-0")}
                        initial={reduceMotion ? false : { opacity: 0, y: -5, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <span className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#d37a5c]">{source.type}</span>
                            <h3 className="m-0 mt-1.5 text-sm font-semibold leading-snug text-[#f8f5ef]">{source.title}</h3>
                            <p className="m-0 mt-1 text-xs text-[#888279]">{source.domain}</p>
                          </div>
                          <a href={source.href} target="_blank" rel="noopener noreferrer" aria-label={`${openLabel}: ${source.title}`} className="flex size-8 shrink-0 items-center justify-center rounded-md border border-solid border-white/12 text-[#8f8980] transition-colors hover:bg-white/[.05] hover:text-[#f8f5ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d37a5c]">
                            <ExternalLink className="size-3.5" aria-hidden="true" />
                          </a>
                        </div>
                        <p className="m-0 mt-3 border-x-0 border-b-0 border-t border-solid border-white/10 pt-3 text-xs leading-relaxed text-[#aaa49a]">{source.snippet}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <p className="m-0 mt-5 border-x-0 border-b-0 border-t border-solid border-white/10 pt-4 text-xs text-[#888279]">{helperText}</p>
    </div>
  );
}

export default AiCitation;
