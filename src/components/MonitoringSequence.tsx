import { useEffect, useRef, useState } from "react";
import { Activity, CircleCheck, Search, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CheckItem {
  label: string;
  detail: string;
  status: "clear" | "review" | "open";
}

interface SceneItem {
  metric: string;
  label: string;
  items: readonly string[];
}

interface MonitoringSequenceProps {
  checks: readonly CheckItem[];
  scenes: readonly SceneItem[];
  labels: {
    field: string;
    live: string;
    stable: string;
    review: string;
    act: string;
  };
}

const statusIcons = { clear: CircleCheck, review: Search, open: TriangleAlert };

export default function MonitoringSequence({ checks, scenes, labels }: MonitoringSequenceProps) {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rows = Array.from(rootRef.current?.querySelectorAll<HTMLElement>("[data-monitor-row]") ?? []);
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (current) setActive(Number((current.target as HTMLElement).dataset.monitorRow));
    }, { rootMargin: "-42% 0px -42% 0px" });
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const scene = scenes[active] ?? scenes[0];

  return (
    <div ref={rootRef} className="dark grid grid-cols-1 border border-solid border-border lg:grid-cols-2">
      <ol className="m-0 list-none p-0">
        {checks.map((item, index) => {
          const Icon = statusIcons[item.status];
          const status = item.status === "clear" ? labels.stable : item.status === "review" ? labels.review : labels.act;
          return (
            <li key={item.label} data-monitor-row={index} className="m-0 border-b border-solid border-border p-0 last:border-b-0">
              <Button
                type="button"
                variant="ghost"
                className={`h-auto min-h-64 w-full items-start justify-start rounded-none px-6 py-12 text-left whitespace-normal ${active === index ? "bg-muted" : "bg-transparent"}`}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                aria-pressed={active === index}
              >
                <span className="flex w-full gap-6">
                  <span className="text-xs text-muted-foreground">{index + 1}</span>
                  <span className="grid min-w-0 flex-1 gap-3">
                    <span className="flex items-center justify-between gap-6">
                      <strong className="text-card-title font-medium text-foreground">{item.label}</strong>
                      <span className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className="size-4" aria-hidden="true" />{status}</span>
                    </span>
                    <span className="text-base font-normal leading-copy text-muted-foreground">{item.detail}</span>
                  </span>
                </span>
              </Button>
            </li>
          );
        })}
      </ol>

      <div className="border-t border-solid border-border lg:border-l lg:border-t-0">
        <Card className="sticky top-24 min-h-0 rounded-none border-0 bg-card shadow-none">
          <CardHeader className="flex-row items-center justify-between border-b border-solid border-border p-6">
            <span className="text-xs text-muted-foreground">{labels.field}</span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground"><Activity className="size-4" aria-hidden="true" />{labels.live}</span>
          </CardHeader>
          <CardContent className="grid gap-12 p-12">
            <div className="grid gap-3">
              <CardTitle className="text-display font-medium tracking-tight">{scene.metric}</CardTitle>
              <CardDescription>{scene.label}</CardDescription>
            </div>
            <ul className="m-0 grid list-none grid-cols-1 p-0 md:grid-cols-2">
              {scene.items.map((item) => <li key={item} className="m-0 flex min-h-20 items-center justify-between border-t border-solid border-border px-3 py-6 text-base"><span>{item}</span><CircleCheck className="size-4 text-primary" aria-hidden="true" /></li>)}
            </ul>
            <div className="grid gap-3">
              <span className="text-xs text-muted-foreground">{active + 1} / {checks.length}</span>
              <progress className="h-1 w-full accent-primary" max={checks.length} value={active + 1}>{active + 1} / {checks.length}</progress>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
