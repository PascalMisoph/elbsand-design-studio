import { useEffect, useRef, useState } from "react";
import { Check, FileText, Loader2, RefreshCw } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type BriefStatus = "completed" | "syncing" | "updates-found";

export interface BriefInput {
  id: string;
  title: string;
  text: string;
  status: BriefStatus;
}

interface ContentBriefStatusListProps {
  title: string;
  subtitle: string;
  resultTitle: string;
  resultSummary: string;
  items: readonly BriefInput[];
  labels: Record<BriefStatus, string>;
}

export default function ContentBriefStatusList({ title, subtitle, resultTitle, resultSummary, items, labels }: ContentBriefStatusListProps) {
  const reducedMotion = useReducedMotion();
  const [statuses, setStatuses] = useState<Record<string, BriefStatus>>(() => Object.fromEntries(items.map((item) => [item.id, item.status])));
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach((timer) => window.clearTimeout(timer)), []);

  const synchronize = (id: string) => {
    if (statuses[id] !== "updates-found") return;
    setStatuses((current) => ({ ...current, [id]: "syncing" }));
    timers.current.push(window.setTimeout(() => setStatuses((current) => ({ ...current, [id]: "completed" })), reducedMotion ? 0 : 900));
  };

  return (
    <motion.div
      className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,.16)]"
      initial={reducedMotion ? false : { opacity: 1, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      data-content-brief
    >
      <div className="flex items-start gap-3 border-b border-border px-5 py-5">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/35 bg-primary/10 text-primary"><FileText className="size-4" aria-hidden="true" /></span>
        <div className="min-w-0">
          <h3 className="m-0 text-[17px] font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="m-0 mt-1 text-[14px] text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <div className="overflow-hidden rounded-lg border border-border/80">
          {items.map((item, index) => {
            const status = statuses[item.id];
            return (
              <motion.div
                key={item.id}
                className={`group grid min-h-[76px] grid-cols-[24px_minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 transition-colors hover:bg-secondary/30 ${index ? "border-t border-border/80" : ""}`}
                initial={reducedMotion ? false : { opacity: 1, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.36, delay: index * 0.07 }}
                data-status={status}
              >
                <span className="text-[12px] font-semibold tabular-nums text-primary">{item.id}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h4 className="m-0 text-[14px] font-semibold tracking-tight text-foreground">{item.title}</h4>
                    <span className={`text-[11px] font-medium ${status === "completed" ? "text-muted-foreground" : "text-primary"}`}>{labels[status]}</span>
                  </div>
                  <p className="m-0 mt-1 text-[14px] leading-5 text-muted-foreground">{item.text}</p>
                </div>
                <button
                  type="button"
                  className={`grid size-8 shrink-0 place-items-center rounded-md border border-transparent text-muted-foreground transition-all hover:border-border hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${status === "updates-found" ? "opacity-100" : "pointer-events-none opacity-60"}`}
                  onClick={() => synchronize(item.id)}
                  aria-label={`${labels[status]}: ${item.title}`}
                  disabled={status !== "updates-found"}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {status === "completed" ? <motion.span key="done" initial={{ scale: .7 }} animate={{ scale: 1 }}><Check className="size-4" aria-hidden="true" /></motion.span> : status === "syncing" ? <motion.span key="sync"><Loader2 className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" /></motion.span> : <motion.span key="update" whileHover={reducedMotion ? undefined : { rotate: 24 }}><RefreshCw className="size-4" aria-hidden="true" /></motion.span>}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-border bg-secondary/20 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-2 text-[15px] font-semibold text-foreground"><span className="grid size-6 place-items-center rounded-full border border-primary/60 text-primary"><Check className="size-3.5" aria-hidden="true" /></span>{resultTitle}</span>
        <span className="text-[13px] text-muted-foreground">{resultSummary}</span>
      </div>
    </motion.div>
  );
}
