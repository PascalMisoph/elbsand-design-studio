"use client";

import openAiLogo from "@lobehub/icons-static-svg/icons/openai.svg?url";
import perplexityLogo from "@lobehub/icons-static-svg/icons/perplexity-color.svg?url";
import claudeLogo from "@lobehub/icons-static-svg/icons/claude-color.svg?url";
import googleAiLogo from "@lobehub/icons-static-svg/icons/google-color.svg?url";

import { CinematicLogoCloud } from "@/components/ui/cinematic-logo-cloud";

const systems = [
  { name: "ChatGPT", src: openAiLogo, invertDark: true },
  { name: "Perplexity", src: perplexityLogo },
  { name: "Claude", src: claudeLogo },
  { name: "Google AI", src: googleAiLogo },
];

export default function CompetitorLogoCloud() {
  return <CinematicLogoCloud clients={systems} />;
}
