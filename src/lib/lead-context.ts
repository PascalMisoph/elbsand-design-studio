export const offerTypes = ["geo_audit", "page_sprint", "technical_ai_check", "geo_support", "general"] as const;
export type OfferType = typeof offerTypes[number];
export const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

// Only public route-shaped paths and short campaign labels; never query strings,
// fragments, credentials or arbitrary referral paths in the lead context.
export const safePath = (value: unknown): string => {
  if (typeof value !== "string" || value.length > 180) return "";
  return /^\/(?:[a-z0-9-]+\/)*$/.test(value) ? value : "";
};
export const safeLabel = (value: unknown): string =>
  typeof value === "string" && /^[a-zA-Z0-9_-]{1,80}$/.test(value) ? value : "";
export const safeReferrer = (value: unknown): string => {
  if (typeof value !== "string") return "";
  try {
    const url = new URL(value);
    return /^https?:$/.test(url.protocol) && !url.username && !url.password ? url.origin : "";
  } catch { return ""; }
};
export const safeOffer = (value: unknown): OfferType =>
  offerTypes.includes(value as OfferType) ? value as OfferType : "general";

export function normalizeLeadContext(input: Record<string, unknown>) {
  return {
    offer_type: safeOffer(input.offer_type),
    source_page: safePath(input.source_page),
    landing_page: safePath(input.landing_page),
    referrer: safeReferrer(input.referrer),
    utm_source: safeLabel(input.utm_source),
    utm_medium: safeLabel(input.utm_medium),
    utm_campaign: safeLabel(input.utm_campaign),
    utm_content: safeLabel(input.utm_content),
    cta_id: safeLabel(input.cta_id),
    funnel_path: Array.isArray(input.funnel_path)
      ? input.funnel_path.filter((item): item is string => Boolean(safePath(item))).slice(-8) : [],
    attribution_mode: input.attribution_mode === "consented_session" ? "consented_session" : "current_request",
  };
}
export type LeadContext = ReturnType<typeof normalizeLeadContext>;
