import { Area, AreaChart, CartesianGrid } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

export interface FlatAreaDatum {
  label: string;
  value: number;
}

interface FlatAreaChartProps {
  data: FlatAreaDatum[];
  label: string;
  className?: string;
  tone?: "light" | "dark";
}

const config = {
  value: { label: "Score", color: "var(--ui-chart-1)" }
} satisfies ChartConfig;

export default function FlatAreaChart({ data, label, className, tone = "dark" }: FlatAreaChartProps) {
  return (
    <figure className={`${tone === "dark" ? "dark " : ""}m-0 w-full`} aria-label={label}>
      <ChartContainer config={config} className={className}>
        <AreaChart accessibilityLayer data={data} margin={{ top: 12, right: 0, bottom: 4, left: 0 }}>
          <CartesianGrid vertical={false} stroke="var(--ui-border)" />
          <Area dataKey="value" type="monotone" fill="var(--color-value)" fillOpacity={0.14} stroke="var(--color-value)" strokeWidth={2} isAnimationActive />
        </AreaChart>
      </ChartContainer>
      <ul className="sr-only">
        {data.map((item) => <li key={item.label}>{item.label}: {item.value}</li>)}
      </ul>
    </figure>
  );
}
