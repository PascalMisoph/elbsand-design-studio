import claudeLogo from "@lobehub/icons-static-svg/icons/claude-color.svg?url";
import googleLogo from "@lobehub/icons-static-svg/icons/google-color.svg?url";
import openAiLogo from "@lobehub/icons-static-svg/icons/openai.svg?url";
import perplexityLogo from "@lobehub/icons-static-svg/icons/perplexity-color.svg?url";

export const technicalAiSystems = [
  { name: "ChatGPT", logo: openAiLogo, inverse: true },
  { name: "Perplexity", logo: perplexityLogo, inverse: false },
  { name: "Claude", logo: claudeLogo, inverse: false },
  { name: "Google AI", logo: googleLogo, inverse: false },
] as const;
