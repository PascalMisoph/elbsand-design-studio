"use client";

import { FeaturesWithHoverTextAnimation } from "@/components/ui/features-with-hover-text-animation";

interface BrandPerceptionHoverFeaturesProps {
  items: readonly { title: string; text: string }[];
}

export default function BrandPerceptionHoverFeatures({ items }: BrandPerceptionHoverFeaturesProps) {
  return <FeaturesWithHoverTextAnimation items={items} />;
}
