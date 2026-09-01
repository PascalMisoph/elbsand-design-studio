"use client";

import * as React from "react";

import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  icon?: React.ReactNode;
  linkHref?: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

const ExpandingCards = React.forwardRef<HTMLUListElement, ExpandingCardsProps>(
  ({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(
      defaultActiveIndex,
    );
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const gridStyle = React.useMemo<React.CSSProperties>(() => {
      if (activeIndex === null) return {};

      return isDesktop
        ? {
            gridTemplateColumns: items
              .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
              .join(" "),
          }
        : {
            gridTemplateRows: items
              .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
              .join(" "),
          };
    }, [activeIndex, items.length, isDesktop]);

    const handleInteraction = (index: number) => {
      setActiveIndex(index);
    };

    return (
      <ul
        className={cn(
          "grid h-[600px] w-full max-w-6xl gap-2",
          "transition-[grid-template-columns,grid-template-rows] duration-500 ease-out motion-reduce:transition-none md:h-[500px]",
          className,
        )}
        style={{
          ...gridStyle,
          ...(isDesktop
            ? { gridTemplateRows: "1fr" }
            : { gridTemplateColumns: "1fr" }),
        }}
        ref={ref}
        {...props}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              "group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-lg border border-white/15 bg-card text-card-foreground shadow-sm",
              "md:min-w-[80px]",
            )}
            onMouseEnter={() => handleInteraction(index)}
            onFocus={() => handleInteraction(index)}
            onClick={() => handleInteraction(index)}
            tabIndex={0}
            data-active={activeIndex === index}
          >
            <img
              src={item.imgSrc}
              alt=""
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full scale-110 object-cover grayscale transition-all duration-300 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 motion-reduce:transition-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
            <article className="absolute inset-0 flex flex-col justify-end gap-2 p-4">
              <p className="absolute bottom-4 left-1/2 m-0 hidden -translate-x-1/2 rotate-180 whitespace-nowrap text-[13px] font-light uppercase tracking-wider text-white/90 opacity-100 transition-all duration-300 ease-out [overflow-wrap:normal] [word-break:normal] [writing-mode:vertical-rl] group-data-[active=true]:opacity-0 motion-reduce:transition-none md:block">
                <span className="mb-3 text-[#d37a5c]">{index + 1}</span>
                <span>{item.title}</span>
              </p>
              <p className="absolute inset-x-4 bottom-4 m-0 flex min-w-0 items-center gap-2 whitespace-nowrap text-xs font-medium text-white/90 opacity-100 transition-all duration-300 ease-out group-data-[active=true]:opacity-0 motion-reduce:transition-none md:hidden">
                <span className="shrink-0 text-[#d37a5c]">{index + 1}</span>
                <span className="min-w-0 overflow-hidden text-ellipsis">{item.title}</span>
              </p>
              <div className="text-[#d37a5c] opacity-0 transition-all delay-75 duration-300 ease-out group-data-[active=true]:opacity-100 motion-reduce:transition-none">
                {item.icon}
              </div>
              <p className="m-0 max-w-md text-xl font-bold leading-tight text-white opacity-0 transition-all delay-150 duration-300 ease-out group-data-[active=true]:opacity-100 motion-reduce:transition-none">
                {item.title}
              </p>
              <p className="w-full max-w-xs text-sm leading-6 text-white/85 opacity-0 transition-all delay-225 duration-300 ease-out group-data-[active=true]:opacity-100 motion-reduce:transition-none">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    );
  },
);

ExpandingCards.displayName = "ExpandingCards";

export { ExpandingCards };
