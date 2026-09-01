import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, Circle, LockKeyhole, RotateCw } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export interface EditorialBriefItem {
  id: string;
  title: string;
  text: string;
}

interface EditorialBriefBrowserProps {
  panelLabel: string;
  address: string;
  items: readonly EditorialBriefItem[];
  preview: readonly { heading: string; intro: string; section: string; body: string; source: string }[];
}

function BrowserPreview({ address, children }: { address: string; children: ReactNode }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-[#0d0d0c] shadow-[0_28px_80px_rgba(0,0,0,.28)]" data-browser-preview>
      <div className="grid min-h-12 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-3 sm:px-4">
        <div className="flex gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-[#d6654d]" /><span className="size-2.5 rounded-full bg-[#d9a83c]" /><span className="size-2.5 rounded-full bg-[#6a9c55]" /></div>
        <div className="mx-auto flex h-7 w-full max-w-[340px] items-center justify-center gap-2 rounded-md bg-white/[.07] px-3 text-[11px] text-muted-foreground"><LockKeyhole className="size-3" aria-hidden="true" /><span className="truncate">{address}</span></div>
        <RotateCw className="size-3.5 text-muted-foreground" aria-hidden="true" />
      </div>
      <div className="aspect-auto min-h-[420px] bg-[#f4f0e8] text-[#1b1a17] sm:aspect-[16/10] sm:min-h-[320px]">{children}</div>
    </div>
  );
}

export default function EditorialBriefBrowser({ panelLabel, address, items, preview }: EditorialBriefBrowserProps) {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const page = preview[active] ?? preview[0];

  return (
    <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(280px,.72fr)_36px_minmax(0,1.45fr)]" data-editorial-brief-browser>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border px-5 py-4 text-[11px] font-semibold uppercase tracking-[.12em] text-muted-foreground">{panelLabel}</div>
        <div>
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`relative grid w-full grid-cols-[24px_minmax(0,1fr)_20px] gap-3 border-0 bg-transparent px-5 py-5 text-left transition-colors focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring ${index ? "border-t border-solid border-border" : ""} ${active === index ? "bg-secondary/35" : "hover:bg-secondary/20"}`}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              {active === index && <motion.span layoutId="brief-focus" className="absolute inset-y-0 left-0 w-0.5 bg-primary" transition={{ duration: reducedMotion ? 0 : .3 }} />}
              <span className={`text-[13px] font-semibold tabular-nums ${active === index ? "text-primary" : "text-muted-foreground"}`}>{item.id}</span>
              <span className="min-w-0"><strong className="block text-[14px] font-semibold tracking-tight text-foreground">{item.title}</strong><span className="mt-1.5 block text-[14px] leading-5 text-muted-foreground">{item.text}</span></span>
              <Circle className={`mt-0.5 size-4 ${active === index ? "fill-primary text-primary" : "text-muted-foreground"}`} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div className="hidden items-center justify-center lg:flex" aria-hidden="true"><ArrowRight className="size-5 text-primary" /></div>

      <BrowserPreview address={address}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={active}
            className="flex h-full w-full min-w-0 flex-col overflow-hidden px-6 py-6 sm:px-9 sm:py-8"
            initial={reducedMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -5, filter: "blur(3px)" }}
            transition={{ duration: reducedMotion ? 0 : .3, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex items-center justify-between border-b border-[#1b1a17]/15 pb-4"><span className="text-[11px] font-bold tracking-[.24em]">PATERNOGA</span><span className="text-[9px] text-[#625f58]">Entwurf · Inhalt</span></header>
            <div className="max-w-[540px] pt-8 sm:pt-10">
              <h3 className="m-0 max-w-full whitespace-normal break-words text-[clamp(28px,4vw,46px)] font-medium leading-[1.02] tracking-[-.055em] text-[#1b1a17]">{page.heading}</h3>
              <p className="m-0 mt-5 max-w-full whitespace-normal break-words text-[13px] leading-5 text-[#625f58]">{page.intro}</p>
              <div className="mt-7 border-t border-[#1b1a17]/16 pt-5"><h4 className="m-0 whitespace-normal break-words text-[11px] font-semibold uppercase tracking-[.12em] text-[#b74622]">{page.section}</h4><p className="m-0 mt-3 max-w-full whitespace-normal break-words text-[13px] leading-5 text-[#1b1a17]/75">{page.body}</p></div>
            </div>
            <span className="mt-auto pt-5 text-[9px] text-[#625f58]">{page.source}</span>
          </motion.article>
        </AnimatePresence>
      </BrowserPreview>
    </div>
  );
}
