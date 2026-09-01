"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import openAiLogo from "@lobehub/icons-static-svg/icons/openai.svg?url";
import anthropicLogo from "@lobehub/icons-static-svg/icons/anthropic.svg?url";
import perplexityLogo from "@lobehub/icons-static-svg/icons/perplexity-color.svg?url";

import { useVisibleInterval } from "@/lib/use-visible-interval";

interface FeatureItem {
  title: string;
  text: string;
}

interface CrawlabilityFeatureGridProps {
  items: readonly FeatureItem[];
  lang: "de" | "en";
}

const spring = { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.82 };

function RotatingBotTabs({ lang }: { lang: "de" | "en" }) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const bots = React.useMemo(
    () => [
      { brand: "OpenAI", bot: "GPTBot", status: "200", result: lang === "de" ? "Zugriff erlaubt" : "Access allowed", logo: openAiLogo, blocked: false },
      { brand: "Anthropic", bot: "ClaudeBot", status: "200", result: lang === "de" ? "Zugriff erlaubt" : "Access allowed", logo: anthropicLogo, blocked: false },
      { brand: "Perplexity", bot: "PerplexityBot", status: "403", result: lang === "de" ? "Zugriff blockiert" : "Access blocked", logo: perplexityLogo, blocked: true },
    ],
    [lang],
  );

  useVisibleInterval(() => setActiveIndex((index) => (index + 1) % bots.length), 3000, Boolean(reduceMotion));

  return (
    <div className="relative mx-auto h-[176px] w-full max-w-[470px]" aria-hidden="true">
      {bots.map((bot, index) => {
        const depth = (index - activeIndex + bots.length) % bots.length;
        return (
          <motion.div
            key={bot.bot}
            className="absolute inset-x-0 top-5 flex min-h-[88px] items-center gap-4 rounded-[16px] border border-solid border-black/8 bg-[#f4f3ef] px-5 text-[#171715] shadow-[0_18px_44px_rgba(0,0,0,.34)] sm:px-6"
            animate={{
              y: depth * 17,
              scale: 1 - depth * 0.05,
              opacity: depth === 0 ? 1 : depth === 1 ? 0.6 : 0.3,
              zIndex: bots.length - depth,
            }}
            transition={reduceMotion ? { duration: 0 } : spring}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-white shadow-[0_1px_2px_rgba(0,0,0,.09)]">
              <img className="size-6 object-contain" src={bot.logo} alt="" width="24" height="24" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-medium text-black/45">{bot.brand}</span>
              <strong className="block truncate text-[15px] font-semibold tracking-[-.015em]">{bot.bot}</strong>
            </span>
            <span className="grid shrink-0 grid-cols-[auto_1fr] items-center gap-x-2 text-right">
              <span className={`size-1.5 rounded-full ${bot.blocked ? "bg-[#b74622]" : "bg-[#16805d]"}`} />
              <strong className="text-[13px] font-semibold tabular-nums">{bot.status}</strong>
              <span className="col-span-2 mt-0.5 text-[11px] text-black/50">{bot.result}</span>
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

const beamPaths = [
  "M 158 111 C 236 111, 245 43, 328 43",
  "M 158 111 C 236 111, 245 111, 328 111",
  "M 158 111 C 236 111, 245 179, 328 179",
];

function AnimatedPurposeBeam({ lang }: { lang: "de" | "en" }) {
  const reduceMotion = useReducedMotion();
  const labels = lang === "de" ? ["Indexierung", "Training", "Retrieval"] : ["Indexing", "Training", "Retrieval"];

  return (
    <div className="relative mx-auto h-[224px] w-full max-w-[490px]" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 490 224" fill="none">
        <defs>
          <linearGradient id="crawl-purpose-beam" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#b74622" stopOpacity="0" />
            <stop offset="0.42" stopColor="#b74622" />
            <stop offset="0.75" stopColor="#e19476" />
            <stop offset="1" stopColor="#e19476" stopOpacity="0" />
          </linearGradient>
          <filter id="crawl-purpose-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
        </defs>
        {beamPaths.map((path, index) => (
          <React.Fragment key={path}>
            <path d={path} stroke="#77736c" strokeWidth="1.2" strokeDasharray="2 7" strokeLinecap="round" opacity=".5" />
            <>
              <motion.path
                d={path}
                pathLength="1"
                stroke="url(#crawl-purpose-beam)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#crawl-purpose-glow)"
                initial={{ pathLength: 0.12, pathOffset: 0 }}
                animate={{ pathOffset: reduceMotion ? 0 : [0, 0.88] }}
                transition={reduceMotion ? { duration: 0 } : { duration: 2.8, delay: index * 0.42, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d={path}
                pathLength="1"
                stroke="url(#crawl-purpose-beam)"
                strokeWidth="1.8"
                strokeLinecap="round"
                initial={{ pathLength: 0.12, pathOffset: 0 }}
                animate={{ pathOffset: reduceMotion ? 0 : [0, 0.88] }}
                transition={reduceMotion ? { duration: 0 } : { duration: 2.8, delay: index * 0.42, repeat: Infinity, ease: "linear" }}
              />
            </>
          </React.Fragment>
        ))}
      </svg>
      <div className="absolute left-2 top-1/2 grid h-[106px] w-[150px] -translate-y-1/2 content-center rounded-[14px] border border-solid border-white/12 bg-[#191917] px-5 shadow-[0_16px_36px_rgba(0,0,0,.28)]">
        <span className="text-[11px] font-medium text-[#8e8980]">HTTPS</span>
        <strong className="mt-1 truncate text-[14px] font-semibold text-[#f2eee8]">{lang === "de" ? "Unternehmenswebsite" : "Company website"}</strong>
        <span className="mt-3 h-1.5 w-20 rounded-full bg-white/9" />
        <span className="mt-2 h-1.5 w-14 rounded-full bg-white/6" />
      </div>
      <div className="absolute right-0 top-0 grid gap-3">
        {labels.map((label, index) => (
          <div key={label} className="flex h-14 w-[154px] items-center gap-3 rounded-[13px] border border-solid border-white/12 bg-[#191917] px-4 shadow-[0_12px_28px_rgba(0,0,0,.24)]">
            <span className={`size-2 rounded-full ${index === 1 ? "bg-[#b74622]" : "bg-[#8c8880]"}`} />
            <span className="text-[13px] font-medium text-[#e9e4dc]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const responseStates = Array.from({ length: 45 }, (_, index) => {
  const degraded = [4, 12, 13, 27, 38].includes(index);
  const blocked = [19, 40].includes(index);
  return {
    status: blocked ? 403 : 200,
    latency: blocked ? 118 : degraded ? 620 : 284 + ((index * 17) % 92),
    rendered: !blocked,
    tone: blocked ? "#b74622" : degraded ? "#a97b36" : "#16805d",
    height: blocked ? 30 : degraded ? 42 : 52 + ((index * 7) % 16),
  };
});

function CrawlResponseStatus({ lang }: { lang: "de" | "en" }) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(44);
  const active = responseStates[activeIndex];

  return (
    <div className="mx-auto w-full max-w-[510px] rounded-[18px] border border-solid border-white/10 bg-[#f2f1ed] px-5 py-5 text-[#181816] shadow-[0_18px_44px_rgba(0,0,0,.3)] sm:px-6" aria-label={lang === "de" ? "Interaktive Übersicht der Crawl-Antworten" : "Interactive crawl response history"}>
      <div className="flex min-h-11 items-start justify-between gap-6">
        <span>
          <span className="block text-[11px] font-medium text-black/45">{lang === "de" ? "Crawl-Antwort" : "Crawl response"}</span>
          <strong className="mt-0.5 block text-[14px] font-semibold">/ai-crawlability/</strong>
        </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activeIndex}
            className="text-right"
            initial={reduceMotion ? false : { opacity: 0, filter: "blur(5px)", y: 4 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, filter: "blur(5px)", y: -4 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <strong className="block text-[18px] font-semibold tabular-nums">{active.status}</strong>
            <span className="block text-[10px] text-black/45 tabular-nums">{active.latency} ms</span>
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="mt-5 grid h-[72px] grid-cols-[repeat(45,minmax(0,1fr))] items-end gap-[2px]" onMouseLeave={() => setActiveIndex(44)}>
        {responseStates.map((state, index) => (
          <motion.button
            key={index}
            type="button"
            className="min-w-0 appearance-none rounded-full border-0 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b74622] focus-visible:ring-offset-1"
            style={{ backgroundColor: state.tone }}
            initial={false}
            animate={{ height: activeIndex === index ? Math.min(72, state.height + 9) : state.height, opacity: activeIndex === index ? 1 : 0.82 }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 22 }}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            aria-label={`${lang === "de" ? "Messpunkt" : "Sample"} ${index + 1}: ${state.status}, ${state.latency} ms`}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 border-t border-solid border-black/10 pt-4 text-[11px] font-medium">
        <span className="flex items-center gap-2"><i className="size-1.5 rounded-full bg-[#16805d] not-italic" />Status 200</span>
        <span className="text-center tabular-nums">{lang === "de" ? "Latenz 340 ms" : "Latency 340 ms"}</span>
        <span className="text-right">{lang === "de" ? "HTML gerendert" : "HTML rendered"}</span>
      </div>
    </div>
  );
}

function PriorityCardStack({ lang }: { lang: "de" | "en" }) {
  const reduceMotion = useReducedMotion();
  const cards = lang === "de"
    ? ["robots.txt blockiert", "Rendering abhängig", "Crawl-Pfad zu tief"]
    : ["robots.txt blocked", "Rendering dependent", "Crawl path too deep"];
  const [order, setOrder] = React.useState([0, 1, 2]);

  useVisibleInterval(
    () => setOrder((current) => {
      const next = [...current];
      next.unshift(next.pop() as number);
      return next;
    }),
    5000,
    Boolean(reduceMotion),
  );

  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[430px]" aria-hidden="true">
      {order.map((cardIndex, depth) => (
        <motion.div
          key={cards[cardIndex]}
          className="absolute inset-x-0 top-[54px] flex h-[90px] items-center gap-4 rounded-[15px] border border-solid border-black/8 bg-[#f3f2ee] px-5 text-[#171715] shadow-[0_18px_44px_rgba(0,0,0,.32)]"
          initial={false}
          animate={{ y: depth * 15, scale: 1 - depth * 0.055, zIndex: cards.length - depth, opacity: 1 - depth * 0.18 }}
          transition={reduceMotion ? { duration: 0 } : spring}
        >
          <span className={`grid size-8 shrink-0 place-items-center rounded-full border border-solid text-[12px] font-semibold ${cardIndex === 0 ? "border-[#b74622] text-[#b74622]" : "border-black/15 text-black/48"}`}>{cardIndex + 1}</span>
          <span className="min-w-0 flex-1">
            <strong className="block truncate text-[14px] font-semibold tracking-[-.01em]">{cards[cardIndex]}</strong>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[.08em] text-black/42">{lang === "de" ? "Technischer Befund" : "Technical finding"}</span>
          </span>
          <span className={`size-2 rounded-full ${cardIndex === 0 ? "bg-[#b74622]" : "bg-black/18"}`} />
        </motion.div>
      ))}
    </div>
  );
}

const visuals = [RotatingBotTabs, AnimatedPurposeBeam, CrawlResponseStatus, PriorityCardStack];

export default function CrawlabilityFeatureGrid({ items, lang }: CrawlabilityFeatureGridProps) {
  return (
    <div>
      <p className="m-0 mb-4 text-xs leading-5 text-muted-foreground">
        {lang === "de" ? "Illustratives Beispiel · Pfade und Werte stammen nicht aus einer Kundenseite." : "Illustrative example · paths and values are not taken from a client website."}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2" role="list">
      {items.map((item, index) => {
        const Visual = visuals[index];
        return (
          <article
            key={item.title}
            className={`min-w-0 border-0 border-solid py-12 md:min-h-[620px] md:px-12 md:py-14 ${index < items.length - 1 ? "border-b border-white/10" : ""} ${index % 2 === 0 ? "md:border-r" : ""} ${index === 2 ? "md:border-b-0" : ""}`}
            role="listitem"
          >
            <div className="flex min-h-[290px] items-center justify-center overflow-hidden px-1 sm:px-5 md:px-0">
              <Visual lang={lang} />
            </div>
            <div className="mt-10 max-w-[440px]">
              <span className="text-[13px] font-medium text-[#8d887f]">{index + 1}</span>
              <h2 className="m-0 mt-5 text-[clamp(24px,2.2vw,31px)] font-medium leading-[1.12] tracking-[-.035em] text-[#f5f0e9]">{item.title}</h2>
              <p className="m-0 mt-4 text-base leading-copy text-[#a9a39a]">{item.text}</p>
            </div>
          </article>
        );
      })}
      </div>
    </div>
  );
}
