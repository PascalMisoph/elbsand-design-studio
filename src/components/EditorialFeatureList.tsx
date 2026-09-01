"use client";

import * as React from "react";

import { useMediaQuery } from "@/lib/use-media-query";

interface EditorialFeatureItem {
  title: string;
  text: string;
}

interface EditorialFeatureListProps {
  items: readonly EditorialFeatureItem[];
  label: string;
}

export default function EditorialFeatureList({
  items,
  label,
}: EditorialFeatureListProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  React.useEffect(() => {
    if (reduceMotion || !rootRef.current) return;

    const rows = [...rootRef.current.querySelectorAll("[data-editorial-feature]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!current) return;
        setActiveIndex(Number(current.target.getAttribute("data-editorial-feature")));
      },
      { threshold: [0.28, 0.6], rootMargin: "-24% 0px -42%" },
    );
    rows.forEach((row) => observer.observe(row));

    return () => {
      observer.disconnect();
    };
  }, [reduceMotion]);

  return (
    <div
      ref={rootRef}
      className="border-0"
      aria-label={label}
    >
      <p className="m-0 px-0 py-5 text-xs font-medium uppercase tracking-wider text-primary lg:px-14">
        {label}
      </p>
      {items.map((item, index) => (
        <article
          key={item.title}
          data-editorial-feature={index}
          data-active={reduceMotion || activeIndex === index}
          className="block border-0 px-0 py-10 opacity-100 transition-[transform,background-color] duration-500 ease-out data-[active=true]:translate-x-1.5 data-[active=true]:bg-white/[.018] motion-reduce:translate-x-0 motion-reduce:transition-none lg:px-14 lg:py-12"
        >
          <span className="mb-3 block text-sm font-medium text-primary">
            {index + 1}
          </span>
          <div>
            <h3 className="m-0 text-2xl font-medium leading-tight tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="m-0 mt-3 max-w-[460px] text-base leading-copy text-muted-foreground">
              {item.text}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
