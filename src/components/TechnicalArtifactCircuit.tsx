import { type ComponentType } from "react";
import { FileCode2, PanelTop, Search, Sparkles } from "lucide-react";

import { CircuitBoard } from "@/components/ui/circuit-board";
import { cn } from "@/lib/utils";
import { technicalAiSystems } from "@/lib/technical-ai-systems";
import { useFadedRotation } from "@/lib/use-faded-rotation";

interface TechnicalArtifactCircuitProps {
  lang: "de" | "en";
}

const inputIcons: ComponentType<{ className?: string; "aria-hidden"?: boolean }>[] = [FileCode2, PanelTop, Search, Sparkles];

export default function TechnicalArtifactCircuit({ lang }: TechnicalArtifactCircuitProps) {
  const { activeIndex, isVisible } = useFadedRotation({ itemCount: technicalAiSystems.length, intervalMs: 1700, transitionMs: 220 });

  const labels = lang === "de"
    ? ["Quellstruktur", "Gerenderte Bedeutung", "Fakten & Kontext", "AI-readable"]
    : ["Source structure", "Rendered meaning", "Facts & context", "AI-readable"];
  const active = technicalAiSystems[activeIndex];
  const nodes = [
    { id: "source", x: 60, y: 168 },
    { id: "rendered", x: 180, y: 168 },
    { id: "facts", x: 300, y: 168 },
    { id: "readable", x: 420, y: 168 },
    { id: "ai", x: 540, y: 168 },
  ];

  return (
    <figure className="relative m-0 min-h-[360px] w-full overflow-hidden" aria-label={`${labels.join(", ")}; ${technicalAiSystems.map((system) => system.name).join(", ")}`} data-technical-circuit>
      <CircuitBoard
        className="absolute inset-x-0 top-1/2 hidden -translate-y-1/2 opacity-80 md:block"
        nodes={nodes.map((node) => ({ ...node, size: "sm" as const }))}
        connections={nodes.slice(0, -1).map((node, index) => ({ from: node.id, to: nodes[index + 1].id, animated: true }))}
        width={600}
        height={336}
        showGrid={false}
        renderNodes={false}
        traceColor="var(--ui-muted-foreground)"
        pulseColor="var(--ui-primary)"
        traceWidth={1}
        pulseSpeed={3.5}
        variant="dark"
        aria-hidden={true}
      />

      <div className="relative z-10 hidden min-h-[360px] grid-cols-5 gap-0 md:grid">
        {labels.map((label, index) => {
          const Icon = inputIcons[index];
          return (
            <div key={label} className="flex min-w-0 flex-col items-center pt-[142px] text-center">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-solid border-border bg-background lg:size-14">
                <Icon className="size-5 text-primary lg:size-6" aria-hidden={true} />
              </div>
              <span className="mt-4 max-w-full whitespace-nowrap px-1 text-xs font-medium leading-tight text-foreground lg:text-sm">
                {index === 1 ? <><span className="md:inline lg:hidden">{lang === "de" ? "Rendering" : "Rendered"}</span><span className="hidden lg:inline">{label}</span></> : label}
              </span>
            </div>
          );
        })}
        <div className="flex min-w-0 flex-col items-center pt-[142px] text-center" aria-live="polite">
          <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-full border border-solid border-primary/70 bg-background transition duration-300 ease-out lg:size-14", isVisible ? "translate-y-0 scale-100 opacity-100 blur-none" : "translate-y-1 scale-95 opacity-0 blur-sm")}>
            <img className={cn("size-5 object-contain lg:size-6", active.inverse && "brightness-0 invert")} src={active.logo} alt="" width="24" height="24" />
          </div>
          <span data-circuit-output className={cn("mt-4 max-w-full whitespace-nowrap px-1 text-xs font-medium leading-tight text-foreground transition duration-300 ease-out lg:text-sm", isVisible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0")}>{active.name}</span>
        </div>
      </div>

      <div className="relative z-10 grid gap-0 py-8 md:hidden">
        {[...labels, active.name].map((label, index) => {
          const Icon = index < inputIcons.length ? inputIcons[index] : null;
          return (
            <div key={`${label}-${index}`} className="relative flex min-h-[64px] items-center gap-4 pl-3">
              {index < 4 && <span className="absolute left-[34px] top-12 h-8 border-l border-dashed border-border" aria-hidden="true" />}
              <div className={cn("relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-solid bg-background", index === 4 ? "border-primary/70" : "border-border")}>
                {Icon ? <Icon className="size-5 text-primary" aria-hidden={true} /> : <img className={cn("size-5 object-contain", active.inverse && "brightness-0 invert")} src={active.logo} alt="" width="20" height="20" />}
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-foreground">{label}</span>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
