"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useReducedMotion } from "motion/react";

import { useMediaQuery } from "@/lib/use-media-query";

interface PerceptionDimension {
  title: string;
  text: string;
}

interface BrandPerceptionRadarChartProps {
  items: readonly PerceptionDimension[];
  lang: "de" | "en";
}

interface RadarDatum extends PerceptionDimension {
  ai: number;
  reality: number;
}

interface TooltipEntry {
  name: string;
  value: number;
  color: string;
  payload: RadarDatum;
}

interface AxisTickProps {
  x?: number | string;
  y?: number | string;
  textAnchor?: string;
  payload?: { value: string };
  compact: boolean;
}

function AxisTick({ x = 0, y = 0, textAnchor = "middle", payload, compact }: AxisTickProps) {
  const xPosition = Number(x);
  const yPosition = Number(y);
  const value = payload?.value ?? "";
  const compactLines: Record<string, string[]> = {
    "Tonalitätsverlauf": ["Tonalitäts", "verlauf"],
    "Realitätsprüfung": ["Realitäts", "prüfung"],
    "Tone development": ["Tone", "development"],
    "Reality check": ["Reality", "check"],
  };
  const lines = compact ? compactLines[value] ?? [value] : [value];
  const normalizedAnchor: "start" | "middle" | "end" = textAnchor === "start" || textAnchor === "end" ? textAnchor : "middle";
  const inwardAnchor: "start" | "middle" | "end" = normalizedAnchor === "start" ? "end" : normalizedAnchor === "end" ? "start" : normalizedAnchor;
  const inwardX = textAnchor === "start" ? xPosition - 8 : textAnchor === "end" ? xPosition + 8 : xPosition;

  return (
    <text x={inwardX} y={yPosition} textAnchor={inwardAnchor} fill="#c9c2b8" fontFamily="Inter, system-ui, sans-serif" fontSize={compact ? 10 : 13} fontWeight={550}>
      {lines.map((line, index) => <tspan key={line} x={inwardX} dy={index === 0 ? 0 : 12}>{line}</tspan>)}
    </text>
  );
}

function RadarTooltip({ active, payload }: { active?: boolean; payload?: readonly TooltipEntry[] }) {
  if (!active || !payload?.length) return null;
  const dimension = payload[0].payload;

  return (
    <div className="w-[min(280px,calc(100vw-48px))] rounded-lg border border-solid border-white/12 bg-[#11110f]/95 px-4 py-3 text-left shadow-[0_18px_50px_rgba(0,0,0,.48)] backdrop-blur-md">
      <p className="m-0 text-sm font-semibold text-[#f8f5ef]">{dimension.title}</p>
      <p className="m-0 mt-1.5 text-sm leading-[1.5] text-[#aaa49a]">{dimension.text}</p>
      <div className="mt-3 grid gap-1.5">
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center justify-between gap-6 text-xs text-[#d0c9bf]">
            <span className="flex items-center gap-2"><i className="size-1.5 rounded-full" style={{ background: entry.color }} />{entry.name}</span>
            <span className="font-mono text-[#f8f5ef]">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandPerceptionRadarChart({ items, lang }: BrandPerceptionRadarChartProps) {
  const reduceMotion = useReducedMotion();
  const compact = useMediaQuery("(max-width: 639px)");

  const series = lang === "de"
    ? { ai: "KI-Wahrnehmung", reality: "Angebotsrealität" }
    : { ai: "AI perception", reality: "Offer reality" };
  const values = [
    { ai: 82, reality: 74 },
    { ai: 66, reality: 81 },
    { ai: 76, reality: 63 },
    { ai: 58, reality: 86 },
  ];
  const data: RadarDatum[] = items.map((item, index) => ({ ...item, ...values[index % values.length] }));

  return (
    <div className="mx-auto w-full max-w-[780px]" aria-label={lang === "de" ? "Vergleich der Markenwahrnehmung" : "Brand perception comparison"}>
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-[#b7b0a5]">
        <span className="inline-flex items-center gap-2"><i className="h-0.5 w-6 rounded-full bg-[#d36b45] shadow-[0_0_12px_rgba(211,107,69,.7)]" />{series.ai}</span>
        <span className="inline-flex items-center gap-2"><i className="h-0.5 w-6 rounded-full bg-[#9caf97] shadow-[0_0_10px_rgba(156,175,151,.45)]" />{series.reality}</span>
      </div>

      <div className="mt-5 h-[390px] w-full md:mt-7 md:h-[540px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius={compact ? "84%" : "86%"} margin={compact ? { top: 30, right: 10, bottom: 30, left: 10 } : { top: 42, right: 80, bottom: 42, left: 80 }}>
            <Tooltip cursor={false} content={<RadarTooltip />} wrapperStyle={{ outline: "none", zIndex: 20 }} />
            <PolarAngleAxis
              dataKey="title"
              tick={(props) => <AxisTick {...props} compact={compact} />}
              tickLine={false}
            />
            <PolarGrid stroke="rgba(255,250,244,.16)" strokeDasharray="3 3" radialLines />
            <Radar
              name={series.ai}
              dataKey="ai"
              stroke="#d36b45"
              strokeWidth={2}
              fill="none"
              filter="url(#perception-multi-stroke-line-glow)"
              isAnimationActive={!reduceMotion}
              animationDuration={900}
              animationEasing="ease-out"
              dot={{ r: compact ? 2 : 3, fill: "#d36b45", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#f2a181", stroke: "#11110f", strokeWidth: 2 }}
            />
            <Radar
              name={series.reality}
              dataKey="reality"
              stroke="#9caf97"
              strokeWidth={2}
              fill="none"
              filter="url(#perception-multi-stroke-line-glow)"
              isAnimationActive={!reduceMotion}
              animationDuration={1100}
              animationEasing="ease-out"
              dot={{ r: compact ? 2 : 3, fill: "#9caf97", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#c9dbc4", stroke: "#11110f", strokeWidth: 2 }}
            />
            <defs>
              <filter id="perception-multi-stroke-line-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <ul className="sr-only">
        {items.map((item) => <li key={item.title}><strong>{item.title}</strong>: {item.text}</li>)}
      </ul>
    </div>
  );
}
