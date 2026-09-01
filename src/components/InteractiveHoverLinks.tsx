import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface InteractiveHoverLinkItem {
  href: string;
  title: string;
  text: string;
}

interface InteractiveHoverLinksProps {
  items: readonly InteractiveHoverLinkItem[];
}

export default function InteractiveHoverLinks({ items }: InteractiveHoverLinksProps) {
  const reducedMotion = useReducedMotion();

  return (
    <nav className="border-b border-border" aria-label="Related services" data-interactive-hover-links>
      {items.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          className="group relative grid min-h-[150px] grid-cols-[minmax(0,1fr)_auto] items-center gap-8 overflow-hidden border-t border-border py-7 text-foreground no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring md:grid-cols-[minmax(0,1.15fr)_minmax(260px,.75fr)_56px] md:py-9"
          initial="idle"
          whileHover="hover"
          whileFocus="hover"
        >
          <motion.span
            className="absolute inset-y-0 left-0 w-0.5 origin-top bg-primary"
            variants={{ idle: { scaleY: 0 }, hover: { scaleY: 1 } }}
            transition={{ duration: reducedMotion ? 0 : .28, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <motion.span
            className="block text-[clamp(24px,3.2vw,40px)] font-medium leading-[1.05] tracking-[-.05em]"
            variants={{ idle: { x: 0 }, hover: { x: reducedMotion ? 0 : 8 } }}
            transition={{ duration: reducedMotion ? 0 : .34, ease: [0.22, 1, 0.36, 1] }}
          >{item.title}</motion.span>
          <span className="col-start-1 m-0 max-w-xl text-[15px] leading-6 text-muted-foreground md:col-start-2 md:row-start-1">{item.text}</span>
          <motion.span
            className="col-start-2 row-span-2 row-start-1 grid size-11 place-items-center justify-self-end rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/55 group-hover:text-primary md:col-start-3 md:row-span-1"
            variants={{ idle: { x: 0, y: 0 }, hover: { x: reducedMotion ? 0 : 4, y: reducedMotion ? 0 : -4 } }}
            transition={{ duration: reducedMotion ? 0 : .3, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          ><ArrowUpRight className="size-5" /></motion.span>
        </motion.a>
      ))}
    </nav>
  );
}

