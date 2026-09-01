"use client";

import * as React from "react";
import { Bot, CodeXml, Flag, Gauge, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { useVisibleInterval } from "@/lib/use-visible-interval";

interface DiagnosticItem {
  title: string;
  text: string;
}

interface DiagnosticWorkflowProps {
  items: readonly DiagnosticItem[];
  lang: "de" | "en";
}

const ACCENT = "#b74622";
const desktopNodes = [
  { x: 20, y: 70 },
  { x: 245, y: 225 },
  { x: 470, y: 70 },
  { x: 695, y: 225 },
  { x: 920, y: 70 },
];
const desktopPaths = [
  "M200 134 C225 134 220 289 245 289",
  "M425 289 C450 289 445 134 470 134",
  "M650 134 C675 134 670 289 695 289",
  "M875 289 C900 289 895 134 920 134",
];

function Signal({ path, active }: { path: string; active: boolean }) {
  if (!active) return null;
  return (
    <circle r="4" fill={ACCENT} className="drop-shadow-[0_0_5px_rgba(183,70,34,.8)] motion-reduce:hidden">
      <animateMotion dur="1.15s" repeatCount="indefinite" path={path} />
    </circle>
  );
}

export default function DiagnosticWorkflow({ items, lang }: DiagnosticWorkflowProps) {
  const reduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = React.useState(0);
  useVisibleInterval(() => setActiveNode((current) => (current + 1) % 5), 1850, Boolean(reduceMotion));

  const nodes = [
    {
      type: "trigger",
      title: "Bot-Signal / Request",
      text: lang === "de" ? "Verifizierter Request" : "Verified request",
      state: "allowed / blocked",
      icon: Bot,
    },
    {
      type: lang === "de" ? "prüfung" : "check",
      title: `1 ${items[0].title}`,
      text: items[0].text,
      state: "allowed / blocked",
      icon: ShieldCheck,
    },
    {
      type: lang === "de" ? "messung" : "measure",
      title: `2 ${items[1].title}`,
      text: items[1].text,
      state: "200 · 340 ms",
      icon: Gauge,
    },
    {
      type: "render",
      title: `3 ${items[2].title}`,
      text: items[2].text,
      state: lang === "de" ? "HTML verfügbar" : "HTML available",
      icon: CodeXml,
    },
    {
      type: lang === "de" ? "ergebnis" : "output",
      title: lang === "de" ? "Priorisierte Änderung" : "Prioritised change",
      text: lang === "de" ? "robots.txt korrigieren" : "Correct robots.txt",
      state: lang === "de" ? "Aktion bereit" : "Action ready",
      icon: Flag,
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-solid border-white/10 bg-[#0b0b0a] font-sans shadow-[0_24px_70px_rgba(0,0,0,.22)] xl:-mx-20">
      <div className="flex min-h-[58px] items-center justify-between gap-4 border-b border-solid border-white/8 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="inline-flex min-h-7 items-center gap-2 rounded-full border border-solid border-[#b74622]/45 bg-[#b74622]/8 px-3 text-[10px] font-semibold uppercase tracking-[.2em] text-[#d97552]">
            <motion.span className="size-1.5 rounded-full bg-[#b74622]" animate={reduceMotion ? undefined : { opacity: [1, 0.25, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
            {lang === "de" ? "Aktiv" : "Active"}
          </span>
          <span className="truncate text-[11px] uppercase tracking-[.24em] text-white/38">Diagnostic workflow</span>
        </div>
        <span className="hidden font-mono text-[10px] uppercase tracking-[.15em] text-white/25 sm:block">crawl → action</span>
      </div>

      <div className="relative hidden h-[430px] xl:block" aria-hidden="true">
        <svg viewBox="0 0 1120 420" preserveAspectRatio="none" className="absolute inset-0 size-full">
          {desktopPaths.map((path) => <path key={path} d={path} fill="none" stroke="rgba(255,255,255,.24)" strokeWidth="2" strokeDasharray="8 7" strokeLinecap="round" />)}
          {desktopPaths.map((path, index) => <Signal key={`signal-${path}`} path={path} active={activeNode === index || activeNode === index + 1} />)}
        </svg>
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const active = index === activeNode;
          return (
            <button
              type="button"
              key={node.title}
              onClick={() => setActiveNode(index)}
              className={`absolute h-32 w-[180px] cursor-default overflow-hidden rounded-xl border border-solid bg-[#111110] p-3 text-left text-white shadow-[0_8px_20px_rgba(0,0,0,.22)] transition-[border-color,box-shadow,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d97552] ${active ? "border-[#b74622]/75 shadow-[0_10px_28px_rgba(183,70,34,.12)] -translate-y-0.5" : "border-white/14 hover:border-white/24"}`}
              style={{ left: `${(desktopNodes[index].x / 1120) * 100}%`, top: desktopNodes[index].y }}
              aria-pressed={active}
            >
              <span className="flex items-start gap-2">
                <span className={`grid size-8 shrink-0 place-items-center rounded-lg border border-solid ${active ? "border-[#b74622]/65 bg-[#b74622]/10 text-[#df7a57]" : "border-white/14 bg-white/[.025] text-white/55"}`}><Icon size={15} strokeWidth={1.7} aria-hidden="true" /></span>
                <span className="min-w-0 pt-px">
                  <span className="block text-[9px] font-semibold uppercase tracking-[.16em] text-white/36">{node.type}</span>
                  <strong className="mt-0.5 block text-[13px] font-semibold leading-[1.18] tracking-[-.01em] text-white/90">{node.title}</strong>
                </span>
              </span>
              <span className="mt-2 line-clamp-2 block text-[11px] leading-[1.35] text-white/50">{node.text}</span>
              <span className={`mt-1.5 block font-mono text-[10px] ${active ? "text-[#d97552]" : "text-white/28"}`}>→ {node.state}</span>
            </button>
          );
        })}
      </div>

      <div className="relative grid gap-0 px-4 py-7 xl:hidden">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const active = index === activeNode;
          return (
            <React.Fragment key={node.title}>
              <button
                type="button"
                onClick={() => setActiveNode(index)}
                className={`relative z-10 mx-auto w-full max-w-[520px] cursor-default rounded-xl border border-solid bg-[#111110] p-4 text-left text-white transition-[border-color,box-shadow,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d97552] ${active ? "border-[#b74622]/75 shadow-[0_10px_28px_rgba(183,70,34,.12)]" : "border-white/14"}`}
                aria-pressed={active}
              >
                <span className="flex items-start gap-3">
                  <span className={`grid size-9 shrink-0 place-items-center rounded-lg border border-solid ${active ? "border-[#b74622]/65 bg-[#b74622]/10 text-[#df7a57]" : "border-white/14 text-white/55"}`}><Icon size={16} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-semibold uppercase tracking-[.16em] text-white/36">{node.type}</span>
                    <strong className="mt-0.5 block text-sm font-semibold leading-tight text-white/90">{node.title}</strong>
                    <span className="mt-2 block text-sm leading-[1.45] text-white/50">{node.text}</span>
                    <span className={`mt-2 block font-mono text-[10px] ${active ? "text-[#d97552]" : "text-white/28"}`}>→ {node.state}</span>
                  </span>
                </span>
              </button>
              {index < nodes.length - 1 && (
                <span className="relative mx-auto block h-9 w-px border-l border-dashed border-white/25" aria-hidden="true">
                  {activeNode === index && <motion.span className="absolute -left-[3px] top-0 size-[7px] rounded-full bg-[#b74622] shadow-[0_0_8px_rgba(183,70,34,.7)] motion-reduce:hidden" animate={reduceMotion ? { y: 0 } : { y: [0, 32] }} transition={{ duration: reduceMotion ? 0 : 1.05, repeat: reduceMotion ? 0 : Infinity, ease: "linear" }} />}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="flex min-h-[48px] items-center justify-between gap-4 border-t border-solid border-white/8 px-4 sm:px-6">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[.14em] text-white/38">
          <span className="flex items-center gap-2"><i className="size-1.5 rounded-full bg-[#b74622]" />5 {lang === "de" ? "Knoten" : "nodes"}</span>
          <span className="flex items-center gap-2"><i className="size-1.5 rounded-full bg-white/45" />4 {lang === "de" ? "Verbindungen" : "connections"}</span>
        </div>
        <span className="hidden text-[9px] uppercase tracking-[.2em] text-white/22 sm:block">{lang === "de" ? "Diagnose wird ausgeführt" : "Diagnosis running"}</span>
      </div>
    </div>
  );
}
