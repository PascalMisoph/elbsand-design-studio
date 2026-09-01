import { ArrowUpRight } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedLinkItem {
  href: string;
  title: string;
  text: string;
}

interface RelatedLinkGridProps {
  items: readonly RelatedLinkItem[];
  theme?: "light" | "dark";
}

export default function RelatedLinkGrid({ items, theme = "dark" }: RelatedLinkGridProps) {
  return (
    <div className={`${theme === "dark" ? "dark" : ""} grid grid-cols-1 gap-6 md:grid-cols-3`}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className="block no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Card className="min-h-64 transition-colors hover:bg-muted">
            <CardHeader className="h-full content-between gap-12 p-6">
              <ArrowUpRight className="size-5 justify-self-end text-primary" aria-hidden="true" />
              <div className="grid gap-3">
                <CardTitle className="text-card-title font-medium">{item.title}</CardTitle>
                <CardDescription>{item.text}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </a>
      ))}
    </div>
  );
}
