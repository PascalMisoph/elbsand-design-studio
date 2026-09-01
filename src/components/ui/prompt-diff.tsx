"use client";

import * as React from "react";
import { AlignJustify, FileText } from "lucide-react";

import { cn } from "@/lib/utils";

interface PromptDiffContextValue {
  before: string;
  after: string;
}

const PromptDiffContext = React.createContext<PromptDiffContextValue | null>(null);

function usePromptDiff() {
  const context = React.useContext(PromptDiffContext);
  if (!context) throw new Error("Prompt diff parts must be used within AiPromptDiff.");
  return context;
}

interface AiPromptDiffProps {
  before: string;
  after: string;
  children: React.ReactNode;
  className?: string;
}

function AiPromptDiff({ before, after, children, className }: AiPromptDiffProps) {
  return (
    <PromptDiffContext.Provider value={{ before, after }}>
      <div data-slot="ai-prompt-diff" className={cn("overflow-hidden rounded-xl border border-solid border-white/12 bg-[#11110f]", className)}>
        {children}
      </div>
    </PromptDiffContext.Provider>
  );
}

interface AiPromptDiffHeaderProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

function AiPromptDiffHeader({ title, children, className }: AiPromptDiffHeaderProps) {
  return (
    <div data-slot="ai-prompt-diff-header" className={cn("flex min-h-14 flex-wrap items-center gap-3 border-x-0 border-b border-t-0 border-solid border-white/10 px-4 py-3", className)}>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#b74622]/16 text-[#d37a5c]">
        <FileText className="size-4" aria-hidden="true" />
      </span>
      <h3 className="m-0 min-w-0 text-sm font-semibold text-[#f8f5ef]">{title}</h3>
      <span className="text-xs font-medium text-emerald-400">+1</span>
      <span className="text-xs font-medium text-rose-400">−1</span>
      {children && <div className="ml-auto flex items-center">{children}</div>}
    </div>
  );
}

function AiPromptDiffViewToggle({ label = "Unified" }: { label?: string }) {
  return (
    <span className="inline-flex h-8 items-center gap-2 rounded-lg border border-solid border-white/12 bg-white/[.045] px-3 text-xs font-medium text-[#e8e2d9]">
      <AlignJustify className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}

function DiffLine({ kind, number, children }: { kind: "removed" | "added"; number: number; children: React.ReactNode }) {
  const added = kind === "added";
  return (
    <div
      className={cn(
        "grid min-h-9 grid-cols-[2.25rem_1.75rem_minmax(0,1fr)] border-x-0 border-b border-t-0 border-solid border-white/[.045] font-mono text-[13px] leading-5 last:border-b-0",
        added ? "bg-emerald-500/[.075] text-emerald-200" : "bg-rose-500/[.075] text-rose-200",
      )}
    >
      <span className="flex items-start justify-end border-x-0 border-b-0 border-l-0 border-r border-t-0 border-solid border-white/[.07] px-2 py-2 text-[#77726a]">{number}</span>
      <span className={cn("px-2 py-2 text-center", added ? "text-emerald-400" : "text-rose-400")} aria-hidden="true">{added ? "+" : "−"}</span>
      <span className="min-w-0 break-words py-2 pr-3">{children}</span>
    </div>
  );
}

function AiPromptDiffContent({ className }: { className?: string }) {
  const { before, after } = usePromptDiff();
  return (
    <div data-slot="ai-prompt-diff-content" className={className}>
      <DiffLine kind="removed" number={1}>{before}</DiffLine>
      <DiffLine kind="added" number={1}>{after}</DiffLine>
    </div>
  );
}

export { AiPromptDiff, AiPromptDiffHeader, AiPromptDiffViewToggle, AiPromptDiffContent };
