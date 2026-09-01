import { forwardRef, useRef, type ComponentType, type ReactNode } from "react";
import { FileCode2, Gauge, Link2, Search } from "lucide-react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { technicalAiSystems } from "@/lib/technical-ai-systems";
import { useFadedRotation } from "@/lib/use-faded-rotation";

interface FoundationItem {
  title: string;
}

interface TechnicalFoundationBeamProps {
  items: readonly FoundationItem[];
  label: string;
}

interface BeamNodeProps {
  children: ReactNode;
  className?: string;
}

const BeamNode = forwardRef<HTMLDivElement, BeamNodeProps>(({ children, className }, ref) => (
  <div
    ref={ref}
    className={cn("relative z-10 box-border flex min-h-12 items-center gap-3 rounded-md border border-solid border-border bg-background px-4 py-3", className)}
  >
    {children}
  </div>
));

BeamNode.displayName = "BeamNode";

const inputIcons: ComponentType<{ className?: string; "aria-hidden"?: boolean }>[] = [FileCode2, Link2, Gauge, Search];
const curvatures = [-54, -18, 18, 54];
export default function TechnicalFoundationBeam({ items, label }: TechnicalFoundationBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const outputRef = useRef<HTMLDivElement>(null);
  const { activeIndex, isVisible } = useFadedRotation({ itemCount: technicalAiSystems.length, intervalMs: 1520, transitionMs: 220 });
  const active = technicalAiSystems[activeIndex];

  return (
    <figure className="m-0 py-8 lg:-translate-x-8" aria-label={label} data-technical-beam>
      <div ref={containerRef} className="relative mx-auto flex min-h-96 w-full max-w-2xl items-center justify-center gap-10 overflow-hidden sm:gap-20">
        <div className="relative z-10 flex w-36 flex-col gap-4 sm:w-44 sm:gap-6">
          {items.slice(0, 4).map((item, index) => {
            const Icon = inputIcons[index];
            return (
              <BeamNode key={item.title} ref={inputRefs[index]}>
                <Icon className="size-5 shrink-0 text-primary" aria-hidden={true} />
                <span className="text-sm font-medium leading-tight text-foreground" data-beam-input>{item.title}</span>
              </BeamNode>
            );
          })}
        </div>

        <div ref={outputRef} className="relative z-10 flex min-h-32 w-28 shrink-0 flex-col items-center justify-center border-y border-solid border-border bg-background px-3 text-center sm:w-32">
          <div className={cn("flex flex-col items-center gap-4 transition duration-300 ease-out", isVisible ? "translate-y-0 scale-100 opacity-100 blur-none" : "translate-y-1 scale-95 opacity-0 blur-sm")} aria-hidden="true">
            <img className={cn("size-8 object-contain sm:size-10", active.inverse && "brightness-0 invert")} src={active.logo} alt="" width="40" height="40" />
            <span className="text-sm font-medium leading-tight text-foreground" data-beam-output>{active.name}</span>
          </div>
          <span className="sr-only">ChatGPT, Perplexity, Claude, Google AI</span>
        </div>

        {inputRefs.map((inputRef, index) => (
          <AnimatedBeam
            key={items[index]?.title ?? index}
            containerRef={containerRef}
            fromRef={inputRef}
            toRef={outputRef}
            curvature={curvatures[index]}
            duration={4.5}
            delay={index * 0.24}
            pathColor="var(--ui-border)"
            pathWidth={1}
            pathOpacity={0.32}
            gradientStartColor="var(--ui-primary)"
            gradientStopColor="var(--ui-ring)"
          />
        ))}
      </div>
    </figure>
  );
}
