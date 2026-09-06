import { campaignKeys, normalizeLeadContext, safeLabel, safePath, safeReferrer, type OfferType } from "./lead-context";

type RevenueWindow = Window & {
  paternogaConsent?: { analytics: boolean };
  gtag?: (...args: unknown[]) => void;
};
const STORAGE_KEY = "paternoga-revenue-session-v1";
let initialized = false;
let ctaId = "";
const allowedEvents = ["geo_audit_cta_click", "page_sprint_cta_click", "contact_form_start", "contact_form_submit_success", "technical_ai_check_start", "technical_ai_check_complete", "audit_inquiry_success", "page_sprint_inquiry_success", "technical_ai_check_lead_success"] as const;
type RevenueEvent = typeof allowedEvents[number];
const consented = () => (window as RevenueWindow).paternogaConsent?.analytics === true;

function currentContext() {
  const params = new URLSearchParams(location.search);
  return normalizeLeadContext({
    landing_page: location.pathname,
    referrer: safeReferrer(document.referrer),
    ...Object.fromEntries(campaignKeys.map((key) => [key, safeLabel(params.get(key))])),
    funnel_path: [safePath(location.pathname)],
  });
}

function sessionContext() {
  const current = currentContext();
  if (!consented()) return current;
  try {
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "null");
    const context = stored ? normalizeLeadContext(stored) : current;
    const pathname = safePath(location.pathname);
    if (pathname && context.funnel_path.at(-1) !== pathname) context.funnel_path.push(pathname);
    context.funnel_path = context.funnel_path.slice(-8);
    context.attribution_mode = "consented_session";
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context));
    return context;
  } catch { return current; }
}

export function leadContext(offer: OfferType, fallbackCta = "contact_form") {
  return normalizeLeadContext({
    ...sessionContext(), offer_type: offer, source_page: location.pathname,
    cta_id: ctaId || fallbackCta,
  });
}

export function trackRevenue(event: RevenueEvent, offer: OfferType) {
  if (!consented() || !allowedEvents.includes(event)) return;
  // Deliberately exclude campaign values, input values, scan URLs and lead IDs.
  (window as RevenueWindow).gtag?.("event", event, {
    offer_type: offer,
    page_path: safePath(location.pathname),
    page_location: `${location.origin}${safePath(location.pathname) || "/"}`,
    page_referrer: safeReferrer(document.referrer),
    cta_id: safeLabel(ctaId),
    locale: document.documentElement.lang === "en" ? "en" : "de",
  });
}

export function initializeRevenue() {
  if (initialized) return;
  initialized = true;
  if (!consented()) { try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* No storage access. */ } }
  sessionContext();
  window.addEventListener("paternoga:consent", () => {
    if (consented()) sessionContext();
    else { try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* Storage may be unavailable. */ } }
  });
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-revenue-cta]") : null;
    if (!target) return;
    ctaId = safeLabel(target.dataset.revenueCta);
    const offer = target.dataset.offer;
    if (offer === "geo_audit") trackRevenue("geo_audit_cta_click", offer);
    if (offer === "page_sprint") trackRevenue("page_sprint_cta_click", offer);
  });
}
