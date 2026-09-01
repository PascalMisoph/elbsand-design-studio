import { Card, CardDescription, CardHeader } from "@/components/ui/card";

interface FeatureCardItem {
  title: string;
  text: string;
}

interface FeatureCardGridProps {
  items: readonly FeatureCardItem[];
  columns?: 2 | 3 | 4;
  theme?: "light" | "dark";
  headingLevel?: 2 | 3;
}

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4"
};

export default function FeatureCardGrid({ items, columns = 3, theme = "dark", headingLevel = 2 }: FeatureCardGridProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className={`${theme === "dark" ? "dark" : ""} grid grid-cols-1 gap-6 ${columnClasses[columns]}`}>
      {items.map((item, index) => (
        <Card key={item.title} className="min-h-64 shadow-none">
          <CardHeader className="h-full content-between gap-12 p-6">
            <span className="text-xs text-muted-foreground">{index + 1}</span>
            <div className="grid gap-4">
              <Heading data-slot="card-title" className="m-0 text-card-title font-medium leading-none text-card-foreground">{item.title}</Heading>
              <CardDescription>{item.text}</CardDescription>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
