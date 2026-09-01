import { useState } from "react";
import { ArrowRight, ClipboardCheck, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SupportWorkspaceProps {
  tabs: readonly string[];
  data: readonly (readonly [string, string, string, string])[];
  labels: readonly [string, string, string];
  note: string;
}

export default function SupportWorkspace({ tabs, data, labels, note }: SupportWorkspaceProps) {
  const [active, setActive] = useState(0);
  const item = data[active] ?? data[0];
  return (
    <div className="dark grid gap-6">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Support areas">
        {tabs.map((tab, index) => <Button key={tab} type="button" role="tab" aria-selected={index === active} variant={index === active ? "default" : "outline"} onClick={() => setActive(index)}>{tab}</Button>)}
      </div>
      <Card className="shadow-none">
        <CardHeader className="border-b border-solid border-border p-6"><span className="text-xs text-muted-foreground">{active + 1} / {tabs.length}</span><CardTitle className="text-section-title font-medium">{item[0]}</CardTitle><CardDescription>{item[1]}</CardDescription></CardHeader>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">
          <div className="grid gap-3 border border-solid border-border p-6"><ClipboardCheck className="size-5 text-primary" aria-hidden="true" /><span className="text-xs text-muted-foreground">{labels[1]}</span><strong className="text-card-title font-medium">{item[2]}</strong><ArrowRight className="size-4 text-primary" aria-hidden="true" /></div>
          <div className="grid gap-3 border border-solid border-border p-6"><UserRound className="size-5 text-primary" aria-hidden="true" /><span className="text-xs text-muted-foreground">{labels[2]}</span><strong className="text-card-title font-medium">{item[3]}</strong></div>
          <p className="m-0 text-sm leading-copy text-muted-foreground md:col-span-2">{note}</p>
        </CardContent>
      </Card>
    </div>
  );
}
