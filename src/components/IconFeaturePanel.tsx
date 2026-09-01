import { CircleCheck, FileSearch, Link, ListChecks, Search, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface IconFeatureItem {
  title: string;
  text: string;
}

interface IconFeaturePanelProps {
  items: readonly IconFeatureItem[];
  label: string;
  theme?: "light" | "dark";
}

const icons = [FileSearch, Link, ShieldCheck, Search, ListChecks, CircleCheck];

export default function IconFeaturePanel({ items, label, theme = "dark" }: IconFeaturePanelProps) {
  return (
    <Card className={`${theme === "dark" ? "dark" : ""} shadow-none`} aria-label={label}>
      <CardHeader className="border-b border-solid border-border p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      </CardHeader>
      <CardContent className="grid grid-cols-1 p-0 md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div key={item.title} className="grid min-h-48 content-between gap-8 border-b border-solid border-border p-6 md:border-r md:even:border-r-0">
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <div className="grid gap-4">
                <CardTitle className="text-card-title font-medium">{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
