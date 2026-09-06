import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface LinkButtonProps {
  href: string;
  label: string;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  icon?: "down" | "right" | "external";
  revenueCta?: string;
  offer?: "geo_audit" | "page_sprint";
}

export default function LinkButton({ href, label, variant = "default", icon, revenueCta, offer }: LinkButtonProps) {
  const Icon = icon === "down" ? ArrowDown : icon === "external" ? ArrowUpRight : icon === "right" ? ArrowRight : null;
  return (
    <Button asChild variant={variant}>
      <a href={href} data-revenue-cta={revenueCta} data-offer={offer}>{label}{Icon && <Icon aria-hidden="true" />}</a>
    </Button>
  );
}
