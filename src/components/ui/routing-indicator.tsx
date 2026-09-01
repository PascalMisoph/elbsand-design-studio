"use client";

import * as React from "react";

import {
  ArrowRight,
  Bot,
  CircleDashed,
  Route,
  Sparkles,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface AiRoutingIndicatorProps {
  input: string;
  matchedPattern?: string;
  targetAgent?: string;
  confidence?: number;
  isRouting?: boolean;
  header?: React.ReactNode;
  routingLabel?: string;
  inputLabel?: string;
  patternLabel?: string;
  targetLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

function AiRoutingIndicator({
  input,
  matchedPattern,
  targetAgent,
  confidence,
  isRouting = false,
  header,
  routingLabel,
  inputLabel,
  patternLabel,
  targetLabel,
  children,
  className,
}: AiRoutingIndicatorProps) {
  return (
    <div
      data-slot="ai-routing-indicator"
      data-routing={isRouting}
      className={cn(
        "rounded-lg border bg-card text-card-foreground overflow-hidden transition-all",
        isRouting
          ? "border-[#b74622]/55 shadow-lg shadow-[#b74622]/10"
          : "border-border",
        className,
      )}
    >
      {children || (
        <>
          <AiRoutingIndicatorHeader
            isRouting={isRouting}
            routingLabel={routingLabel}
          >
            {header}
          </AiRoutingIndicatorHeader>
          <AiRoutingIndicatorContent
            input={input}
            matchedPattern={matchedPattern}
            targetAgent={targetAgent}
            confidence={confidence}
            isRouting={isRouting}
            inputLabel={inputLabel}
            patternLabel={patternLabel}
            targetLabel={targetLabel}
          />
        </>
      )}
    </div>
  );
}

interface AiRoutingIndicatorHeaderProps {
  isRouting?: boolean;
  routingLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

function AiRoutingIndicatorHeader({
  isRouting,
  routingLabel = "Routing...",
  children,
  className,
}: AiRoutingIndicatorHeaderProps) {
  return (
    <div
      data-slot="ai-routing-indicator-header"
      className={cn(
        "flex items-center gap-2 border-b px-4 py-3 transition-colors",
        isRouting ? "border-[#b74622]/35" : "border-border",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-md transition-colors",
          isRouting ? "bg-[#b74622]/15" : "bg-muted",
        )}
      >
        {isRouting ? (
          <Sparkles className="size-4 text-[#d37a5c] animate-pulse" />
        ) : (
          <Route className="size-4 text-muted-foreground" />
        )}
      </div>
      <div className="flex-1">
        <h3
          className={cn(
            "font-semibold text-sm",
            isRouting && "text-[#e8a188]",
          )}
        >
          {children || "Message Routing"}
          {isRouting && (
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-[#b74622]/15 px-2 py-0.5 text-xs font-medium text-[#e8a188]">
              {routingLabel}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
}

interface AiRoutingIndicatorContentProps {
  input: string;
  matchedPattern?: string;
  targetAgent?: string;
  confidence?: number;
  isRouting?: boolean;
  inputLabel?: string;
  patternLabel?: string;
  targetLabel?: string;
  className?: string;
}

function AiRoutingIndicatorContent({
  input,
  matchedPattern,
  targetAgent,
  confidence,
  isRouting,
  inputLabel,
  patternLabel,
  targetLabel,
  className,
}: AiRoutingIndicatorContentProps) {
  return (
    <div
      data-slot="ai-routing-indicator-content"
      className={cn(
        "p-4 space-y-4 relative",
        isRouting && "overflow-hidden",
        className,
      )}
    >
      {isRouting && (
        <div className="pointer-events-none absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-[#b74622]/10 to-transparent animate-shimmer" />
      )}
      <AiRoutingInput
        input={input}
        matchedPattern={matchedPattern}
        label={inputLabel}
      />
      {(matchedPattern || targetAgent || isRouting) && (
        <AiRoutingFlow
          matchedPattern={matchedPattern}
          targetAgent={targetAgent}
          confidence={confidence}
          isRouting={isRouting}
          patternLabel={patternLabel}
          targetLabel={targetLabel}
        />
      )}
    </div>
  );
}

interface AiRoutingInputProps {
  input: string;
  matchedPattern?: string;
  label?: string;
  className?: string;
}

function AiRoutingInput({
  input,
  matchedPattern,
  label = "Input",
  className,
}: AiRoutingInputProps) {
  const highlightedText = React.useMemo(() => {
    if (!matchedPattern || !input) return null;

    try {
      const regex = new RegExp(`(${matchedPattern})`, "gi");
      const parts = input.split(regex);

      return parts.map((part, index) => {
        const isMatch = regex.test(part);
        regex.lastIndex = 0;
        return isMatch ? (
          <mark
            key={index}
            className="bg-[#b74622]/25 text-[#fff7ed] rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        );
      });
    } catch {
      return null;
    }
  }, [input, matchedPattern]);

  return (
    <div data-slot="ai-routing-input" className={cn("space-y-1.5", className)}>
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <div className="rounded-md bg-muted/50 p-3 text-sm">
        {highlightedText || input}
      </div>
    </div>
  );
}

interface AiRoutingFlowProps {
  matchedPattern?: string;
  targetAgent?: string;
  confidence?: number;
  isRouting?: boolean;
  patternLabel?: string;
  targetLabel?: string;
  className?: string;
}

function AiRoutingFlow({
  matchedPattern,
  targetAgent,
  confidence,
  isRouting,
  patternLabel = "Pattern",
  targetLabel = "Target Agent",
  className,
}: AiRoutingFlowProps) {
  return (
    <div
      data-slot="ai-routing-flow"
      className={cn(
        "flex items-center gap-3 max-[560px]:flex-col max-[560px]:items-stretch",
        className,
      )}
    >
      {matchedPattern && (
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">
            {patternLabel}
          </span>
          <div className="inline-flex max-w-full items-center gap-1.5 rounded-md bg-amber-100 dark:bg-amber-950 px-2.5 py-1.5 text-xs font-mono text-amber-700 dark:text-amber-300">
            <Zap className="size-3" />
            {matchedPattern}
          </div>
        </div>
      )}

      {(matchedPattern || isRouting) && (targetAgent || isRouting) && (
        <div className="flex items-center justify-center py-4 max-[560px]:py-0">
          <div
            className={cn(
              "relative flex items-center max-[560px]:rotate-90",
              isRouting && "animate-pulse",
            )}
          >
            <div
              className={cn(
                "h-0.5 w-8 rounded-full",
                isRouting ? "bg-[#b74622]/65" : "bg-muted-foreground/30",
              )}
            />
            <ArrowRight
              className={cn(
                "size-4 -ml-1",
                isRouting ? "text-[#d37a5c]" : "text-muted-foreground/50",
              )}
            />
          </div>
        </div>
      )}

      {(targetAgent || isRouting) && (
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">
            {targetLabel}
          </span>
          {isRouting && !targetAgent ? (
            <div className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
              <CircleDashed className="size-3.5 animate-spin" />
              Determining...
            </div>
          ) : (
            <div className="inline-flex max-w-full items-center gap-1.5 rounded-md bg-green-100 dark:bg-green-950 px-2.5 py-1.5 text-xs font-medium text-green-700 dark:text-green-300">
              <Bot className="size-3.5" />
              {targetAgent}
              {confidence !== undefined && (
                <span className="ml-1 rounded bg-green-200 dark:bg-green-900 px-1 py-0.5 text-[10px] font-mono">
                  {Math.round(confidence * 100)}%
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface AiRoutingIndicatorEmptyProps {
  children?: React.ReactNode;
  className?: string;
}

function AiRoutingIndicatorEmpty({
  children,
  className,
}: AiRoutingIndicatorEmptyProps) {
  return (
    <div
      data-slot="ai-routing-indicator-empty"
      className={cn(
        "flex flex-col items-center justify-center py-8 text-center",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full bg-muted mb-3">
        <Route className="size-6 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground">
        {children || "No routing information"}
      </p>
    </div>
  );
}

interface AiRoutingMatchProps {
  pattern: string;
  text: string;
  className?: string;
}

function AiRoutingMatch({ pattern, text, className }: AiRoutingMatchProps) {
  return (
    <div
      data-slot="ai-routing-match"
      className={cn(
        "flex items-center gap-2 rounded-md bg-muted/50 px-2.5 py-1.5 text-xs",
        className,
      )}
    >
      <span className="font-mono text-amber-600 dark:text-amber-400">
        {pattern}
      </span>
      <ArrowRight className="size-3 text-muted-foreground" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

export {
  AiRoutingIndicator,
  AiRoutingIndicatorHeader,
  AiRoutingIndicatorContent,
  AiRoutingInput,
  AiRoutingFlow,
  AiRoutingIndicatorEmpty,
  AiRoutingMatch,
};
export type { AiRoutingIndicatorProps };

export default AiRoutingIndicator;
