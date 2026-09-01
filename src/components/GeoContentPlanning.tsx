import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  Loader2,
} from "lucide-react";

export type PlanningStepStatus = "pending" | "active" | "success";

export interface PlanningStep {
  id: string;
  title: string;
  text: string;
  status: PlanningStepStatus;
}

interface GeoContentPlanningProps {
  title: string;
  steps: readonly PlanningStep[];
}

export default function GeoContentPlanning({ title, steps }: GeoContentPlanningProps) {
  const initialOpen = steps.find((step) => step.status === "active")?.id ?? steps[0]?.id;
  const [isExpanded, setIsExpanded] = useState(true);
  const [openStep, setOpenStep] = useState<string | undefined>(initialOpen);

  return (
    <div className="mx-auto w-full max-w-3xl font-sans text-foreground" data-geo-planning>
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,.18)]">
        <button
          type="button"
          className="flex min-h-14 w-full items-center justify-between gap-4 border-0 bg-secondary/25 px-4 py-3.5 text-left text-foreground transition-colors hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((value) => !value)}
        >
          <span className="flex min-w-0 items-center gap-3">
            <Loader2 className="size-4 shrink-0 animate-spin text-primary motion-reduce:animate-none" aria-hidden="true" />
            <span className="truncate text-[15px] font-semibold tracking-tight">{title}</span>
          </span>
          <span className="grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary" aria-hidden="true">
            {isExpanded ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
          </span>
        </button>

        <div className={`grid bg-card transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col p-5 sm:p-6">
              {steps.map((step, index) => {
                const isOpen = openStep === step.id;
                const isLast = index === steps.length - 1;
                const isPending = step.status === "pending";
                return (
                  <div
                    key={step.id}
                    className={`relative flex gap-4 opacity-0 animate-[geo-plan-in_500ms_ease-out_forwards] motion-reduce:animate-none motion-reduce:opacity-100 ${isPending ? "text-muted-foreground" : "text-foreground"}`}
                    style={{ animationDelay: `${index * 80}ms` }}
                    data-status={step.status}
                  >
                    {!isLast && <span className="absolute bottom-[-10px] left-[11px] top-7 z-0 w-px bg-border" aria-hidden="true" />}
                    <span className="relative z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-card ring-4 ring-card" aria-hidden="true">
                      <span className={`grid size-6 place-items-center rounded-full border ${step.status === "active" ? "border-primary bg-primary/15 text-primary" : step.status === "success" ? "border-primary/55 bg-primary/10 text-primary" : "border-border bg-secondary/40 text-muted-foreground"}`}>
                        {step.status === "success" ? <Check className="size-3.5" /> : step.status === "active" ? <Loader2 className="size-3.5 animate-spin motion-reduce:animate-none" /> : <Circle className="size-2 fill-current" />}
                      </span>
                    </span>

                    <div className="min-w-0 flex-1 pb-6">
                      <button
                        type="button"
                        className="group -mx-2 flex min-h-9 w-[calc(100%+1rem)] items-center justify-between gap-4 rounded-md border-0 bg-transparent px-2 py-1 text-left hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-expanded={isOpen}
                        onClick={() => setOpenStep((current) => current === step.id ? undefined : step.id)}
                      >
                        <span className="flex min-w-0 items-baseline gap-3">
                          <span className="w-4 shrink-0 text-[12px] font-semibold tabular-nums text-primary">{step.id}</span>
                          <span className={`text-[14px] tracking-tight ${step.status === "active" ? "font-semibold text-foreground" : "font-medium text-foreground/85"}`}>{step.title}</span>
                        </span>
                        <span className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true">
                          {isOpen ? <ChevronDown className="size-4" /> : <ChevronRight className="size-4" />}
                        </span>
                      </button>
                      <div className={`grid transition-[grid-template-rows,opacity,margin] duration-400 ease-out motion-reduce:transition-none ${isOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                        <div className="overflow-hidden">
                          <div className="ml-5 border-l border-border px-4 py-2 text-[14px] leading-6 text-muted-foreground">
                            {step.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
