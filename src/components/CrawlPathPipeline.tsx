"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useVisibleInterval } from "@/lib/use-visible-interval";

interface CrawlPathStage {
  title: string;
  text: string;
}

interface CrawlPathPipelineProps {
  stages: readonly CrawlPathStage[];
  lang: "de" | "en";
}

const accent = "#b74622";
const metadata = {
  de: ["request", "200 · 340 ms", "HTML verfügbar", "Priorität 1"],
  en: ["request", "200 · 340 ms", "HTML available", "Priority 1"],
};
const categories = ["BOT", "SERVER", "CONTENT", "ACTION"];

function AnimatedDot({ path, duration, delay, size, opacity }: { path: string; duration: number; delay: number; size: number; opacity: number }) {
  return (
    <circle className="motion-reduce:hidden" r={size} fill={accent} opacity={opacity}>
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
    </circle>
  );
}

function StatusDot({ cx, cy, active, reduced }: { cx: number; cy: number; active: boolean; reduced: boolean }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="2.8"
      fill={active ? accent : "#514e49"}
      animate={active && !reduced ? { opacity: [0.25, 1, 0.25] } : { opacity: active ? 1 : 0.55 }}
      transition={{ duration: 1.2, repeat: active && !reduced ? Infinity : 0, ease: "easeInOut" }}
    />
  );
}

const horizontalNodes = [
  { x: 16, y: 66, width: 116, height: 44, center: 74, categoryY: 83, titleY: 100, metaY: 122 },
  { x: 170, y: 66, width: 120, height: 44, center: 230, categoryY: 83, titleY: 100, metaY: 122 },
  { x: 328, y: 53, width: 120, height: 70, center: 388, categoryY: 78, titleY: 97, metaY: 139 },
  { x: 496, y: 66, width: 138, height: 44, center: 565, categoryY: 83, titleY: 100, metaY: 122 },
];
const horizontalPaths = ["M132,88 L170,88", "M290,88 L328,88", "M448,88 L496,88"];

function HorizontalPipeline({ stages, lang, activeStage, reduced }: CrawlPathPipelineProps & { activeStage: number; reduced: boolean }) {
  return (
    <svg viewBox="0 0 650 172" className="hidden w-full sm:block" aria-hidden="true">
      <defs>
        <marker id="crawl-path-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M2 1.5L7.5 5L2 8.5" fill="none" stroke="rgba(183,70,34,.58)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      {horizontalPaths.map((path) => <path key={path} d={path} fill="none" stroke="rgba(183,70,34,.28)" strokeWidth="1.5" strokeDasharray="3 5" markerEnd="url(#crawl-path-arrow)" />)}
      <AnimatedDot path={horizontalPaths[0]} duration={1.05} delay={0} size={2.5} opacity={1} />
      <AnimatedDot path={horizontalPaths[0]} duration={1.05} delay={0.35} size={1.8} opacity={0.65} />
      <AnimatedDot path={horizontalPaths[1]} duration={0.88} delay={0.18} size={2.5} opacity={1} />
      <AnimatedDot path={horizontalPaths[1]} duration={0.88} delay={0.62} size={1.8} opacity={0.65} />
      <AnimatedDot path={horizontalPaths[2]} duration={1.15} delay={0.28} size={2.2} opacity={0.9} />
      <AnimatedDot path={horizontalPaths[2]} duration={1.15} delay={0.85} size={1.5} opacity={0.55} />
      {horizontalNodes.map((node, index) => {
        const active = activeStage === index;
        return (
          <g key={stages[index].title}>
            <motion.rect
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              rx={index === 2 ? 10 : 8}
              animate={{ fill: active ? "#160d09" : "#141414", stroke: active ? accent : "rgba(255,255,255,.09)" }}
              transition={{ duration: reduced ? 0 : 0.28 }}
              strokeWidth={active ? 1 : 0.5}
            />
            {index === 2 && <rect x="340" y="53.5" width="96" height="1" rx="0.5" fill="rgba(183,70,34,.55)" />}
            <text x={node.center} y={node.categoryY} textAnchor="middle" fontSize="9.5" fill={active ? "rgba(225,148,118,.8)" : "rgba(255,255,255,.28)"} fontFamily="Inter, system-ui" letterSpacing=".07em">{categories[index]}</text>
            <text x={node.center} y={node.titleY} textAnchor="middle" fontSize={index === 3 ? "10.5" : "11.5"} fill={active ? "#fff" : "rgba(255,255,255,.82)"} fontFamily="Inter, system-ui" fontWeight={active ? "550" : "450"}>{index + 1} {stages[index].title}</text>
            <text x={node.center} y={node.metaY} textAnchor="middle" fontSize="8.5" fill={active ? "rgba(183,70,34,.62)" : "rgba(255,255,255,.18)"} fontFamily="ui-monospace, monospace">{metadata[lang][index]}</text>
          </g>
        );
      })}
      <StatusDot cx={376} cy={113} active={activeStage === 2} reduced={reduced} />
      <StatusDot cx={388} cy={113} active={activeStage === 2} reduced={reduced} />
      <StatusDot cx={400} cy={113} active={activeStage === 2} reduced={reduced} />
    </svg>
  );
}

const mobileNodes = [20, 128, 236, 344];
const mobilePaths = ["M160,92 L160,128", "M160,200 L160,236", "M160,308 L160,344"];

function MobilePipeline({ stages, lang, activeStage, reduced }: CrawlPathPipelineProps & { activeStage: number; reduced: boolean }) {
  return (
    <svg viewBox="0 0 320 436" className="block w-full sm:hidden" aria-hidden="true">
      {mobilePaths.map((path) => <path key={path} d={path} fill="none" stroke="rgba(183,70,34,.3)" strokeWidth="1.5" strokeDasharray="3 5" />)}
      <AnimatedDot path={mobilePaths[0]} duration={1.05} delay={0} size={2.5} opacity={1} />
      <AnimatedDot path={mobilePaths[1]} duration={0.88} delay={0.22} size={2.5} opacity={1} />
      <AnimatedDot path={mobilePaths[2]} duration={1.15} delay={0.42} size={2.3} opacity={0.9} />
      {mobileNodes.map((y, index) => {
        const active = activeStage === index;
        return (
          <g key={stages[index].title}>
            <motion.rect x="54" y={y} width="212" height="72" rx="10" animate={{ fill: active ? "#160d09" : "#141414", stroke: active ? accent : "rgba(255,255,255,.09)" }} transition={{ duration: reduced ? 0 : 0.28 }} strokeWidth={active ? 1 : 0.5} />
            <text x="160" y={y + 21} textAnchor="middle" fontSize="9" fill={active ? "rgba(225,148,118,.8)" : "rgba(255,255,255,.28)"} fontFamily="Inter, system-ui" letterSpacing=".07em">{categories[index]}</text>
            <text x="160" y={y + 43} textAnchor="middle" fontSize="14" fill={active ? "#fff" : "rgba(255,255,255,.82)"} fontFamily="Inter, system-ui" fontWeight={active ? "550" : "450"}>{index + 1} {stages[index].title}</text>
            <text x="160" y={y + 61} textAnchor="middle" fontSize="9.5" fill={active ? "rgba(183,70,34,.62)" : "rgba(255,255,255,.18)"} fontFamily="ui-monospace, monospace">{metadata[lang][index]}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function CrawlPathPipeline({ stages, lang }: CrawlPathPipelineProps) {
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = React.useState(0);
  useVisibleInterval(() => setActiveStage((stage) => (stage + 1) % stages.length), 2700, Boolean(reduceMotion));

  return (
    <div className="mx-auto w-full max-w-[760px] overflow-hidden rounded-[14px] border border-solid border-white/8 bg-[#090909] font-sans shadow-[0_24px_64px_rgba(0,0,0,.26)]">
      <div className="flex min-h-11 items-center justify-between gap-4 border-b border-solid border-white/6 px-[18px] py-[11px]">
        <div className="flex min-w-0 items-center gap-[7px]">
          <motion.span className="inline-block size-1.5 shrink-0 rounded-full bg-[#b74622]" animate={reduceMotion ? undefined : { opacity: [1, 0.25, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          <span className="truncate font-mono text-[10px] tracking-[.1em] text-white/35">{lang === "de" ? "CRAWL-PFAD · LIVE" : "CRAWL PATH · LIVE"}</span>
        </div>
        <span className="shrink-0 font-mono text-[10px] text-white/20">1 request · 0 errors</span>
      </div>
      <div className="px-1 sm:px-4">
        <HorizontalPipeline stages={stages} lang={lang} activeStage={activeStage} reduced={Boolean(reduceMotion)} />
        <MobilePipeline stages={stages} lang={lang} activeStage={activeStage} reduced={Boolean(reduceMotion)} />
      </div>
      <div className="min-h-[74px] border-t border-solid border-white/6 px-[18px] py-3 sm:min-h-[58px] sm:py-[9px]">
        <div className="flex h-full items-start gap-2">
          <span className="shrink-0 font-mono text-[13px] leading-[1.5] text-[#d06a47]">›</span>
          <div className="relative min-h-[46px] flex-1 overflow-hidden sm:min-h-[36px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={activeStage}
                className="absolute inset-0 m-0 font-mono text-[11px] leading-[1.55] text-white/48"
                initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
              >
                {activeStage + 1} · {stages[activeStage].title}: {stages[activeStage].text}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <ol className="sr-only">
        {stages.map((stage, index) => <li key={stage.title}>{index + 1}. {stage.title}. {stage.text}</li>)}
      </ol>
    </div>
  );
}
