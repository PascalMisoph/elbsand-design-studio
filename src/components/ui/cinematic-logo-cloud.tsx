"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type LogoCloudClient = {
  name: string;
  src: string;
  className?: string;
  invertDark?: boolean;
};

export interface CinematicLogoCloudProps {
  clients: LogoCloudClient[];
  className?: string;
}

export function CinematicLogoCloud({ clients, className }: CinematicLogoCloudProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("w-full bg-transparent py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-0 text-center">
        <motion.div
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
            hidden: {},
          }}
          className="grid grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-12"
        >
          {clients.map((brand) => (
            <motion.div
              key={brand.name}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: reduceMotion
                    ? { duration: 0 }
                    : { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="flex min-w-0 items-center justify-center gap-4 px-2"
            >
              <img
                src={brand.src}
                alt=""
                width="40"
                height="40"
                className={cn("size-9 shrink-0 object-contain md:size-10", brand.invertDark && "invert", brand.className)}
                loading="lazy"
                decoding="async"
              />
              <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-white md:text-xl">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CinematicLogoCloud;
