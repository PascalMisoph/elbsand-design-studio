"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { useMediaQuery } from "@/lib/use-media-query";

interface TechnicalGeoMacbookProps {
  lang: "de" | "en";
}

const logos = [
  { src: "https://assets.aceternity.com/logos/perplexity.webp", alt: "Perplexity", rotate: 4 },
  { src: "https://assets.aceternity.com/logos/openai.webp", alt: "OpenAI", rotate: -3 },
  { src: "https://assets.aceternity.com/logos/anthropic.webp", alt: "Anthropic", rotate: 2 },
];

const lidVariants: Variants = {
  initial: { rotateX: -60 },
  animate: { rotateX: 20 },
};

const screenVariants: Variants = {
  initial: { opacity: 0, filter: "blur(8px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
};

const iconVariants: Variants = {
  initial: { y: "93.75%", scale: 0.4, filter: "blur(10px)", opacity: 0, rotate: 0 },
  animate: (rotate: number) => ({ y: "-31.25%", scale: 1, filter: "blur(0px)", opacity: 1, rotate }),
};

export default function TechnicalGeoMacbook({ lang }: TechnicalGeoMacbookProps) {
  const reduceMotion = useReducedMotion();
  const touchOpen = useMediaQuery("(hover: none)");

  const settled = Boolean(reduceMotion) || touchOpen;
  const labels = lang === "de"
    ? ["Semantik erkannt", "Server-rendered", "Fakten strukturiert", "AI-readable"]
    : ["Semantics detected", "Server-rendered", "Facts structured", "AI-readable"];

  return (
    <motion.figure
      className="relative m-0 flex min-h-[330px] w-full items-center justify-center rounded-lg outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b74622] lg:min-h-[430px]"
      initial={settled ? "animate" : "initial"}
      animate="animate"
      whileHover={reduceMotion ? undefined : "animate"}
      whileFocus={reduceMotion ? undefined : "animate"}
      whileTap={reduceMotion ? undefined : "animate"}
      tabIndex={0}
      aria-label={lang === "de" ? "Technische GEO-Prüfung auf einem MacBook mit OpenAI, Anthropic und Perplexity" : "Technical GEO review on a MacBook with OpenAI, Anthropic and Perplexity"}
      data-technical-macbook
    >
      <figcaption className="absolute right-0 top-0 z-40 text-right text-[11px] leading-4 text-white/45">
        {lang === "de" ? "Illustratives Technik-Beispiel · keine Kundendaten" : "Illustrative technical example · no client data"}
      </figcaption>
      <div className="relative aspect-[256/140] w-full max-w-[500px] [perspective:1200px]">
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center gap-[12.5%]" aria-hidden="true">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              custom={logo.rotate}
              variants={iconVariants}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.18, ease: "easeOut", delay: 0.24 + 0.04 * index }}
              className="flex aspect-square w-1/4 items-center justify-center rounded-lg bg-[#f7f5f0] shadow-[0_10px_18px_-5px_rgba(0,0,0,.34),0_3px_5px_-2px_rgba(0,0,0,.18),0_0_0_1px_rgba(255,255,255,.2),0_-1px_2px_0_rgba(255,255,255,.8)_inset]"
            >
              <img src={logo.src} alt="" className="size-[62.5%] object-contain" width="80" height="80" loading="eager" />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={lidVariants}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.62, ease: [0.901, 0.016, 0, 1.032] }}
          className="absolute bottom-[8.57%] left-[5%] h-[91.43%] w-[90%] rounded-t-lg bg-[#31312f] p-[1.6%] shadow-[0_8px_24px_rgba(0,0,0,.32)] ring-1 ring-white/12"
          style={{ transformOrigin: "center bottom", transformStyle: "preserve-3d" }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-t-[6px] rounded-b-sm bg-[#0d0d0c] ring-1 ring-black/50">
            <motion.div
              variants={screenVariants}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut", delay: 0.22 }}
              className="absolute inset-0 flex flex-col bg-[#10100f] p-[5%] text-[#fbf8f2]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-solid border-white/10 pb-[4%] font-mono text-[clamp(8px,.65vw,10px)] text-white/42">
                <span className="truncate">{lang === "de" ? "Website /leistungen/geo" : "Website /services/geo"}</span>
                <span className="shrink-0 text-[#c76240]">GEO</span>
              </div>
              <div className="grid flex-1 grid-cols-2 content-end gap-x-[4%] gap-y-[2%] py-[3%]">
                {labels.map((label, index) => (
                  <div key={label} className="flex min-h-7 items-center justify-between gap-2 border-t border-solid border-white/8 px-[2%] text-sm font-medium tracking-[-.01em] text-white/82">
                    <span className="flex min-w-0 items-center gap-1.5"><i className={`size-1 shrink-0 rounded-full ${index === 3 ? "bg-[#b74622]" : "bg-white/32"}`} />{label}</span>
                    <Check className="hidden size-3.5 shrink-0 text-[#c76240] xl:block" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 h-[8.57%] rounded-t-md rounded-b-[999px] bg-gradient-to-b from-[#62625f] to-[#242423] shadow-[0_1px_0_rgba(255,255,255,.18)_inset,0_12px_24px_rgba(0,0,0,.25)]">
          <div className="absolute inset-x-0 top-0 mx-auto h-1/2 w-[15.6%] rounded-b-sm bg-[#454542] shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]" />
        </div>
      </div>
    </motion.figure>
  );
}
