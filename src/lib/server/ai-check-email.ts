import type { InterpretedFinding, ScanSnapshot } from "../ai-readiness";
import { scanResultPath } from "./scan-result-token";

const SITE_URL = "https://www.paternoga-seo-geo.de";
const LOGO_URL = `${SITE_URL}/images/paternoga-email-logo.png`;
const CONTACT_EMAIL = "kontakt@paternoga-seo-geo.de";
const CONSULTATION_URL = "https://calendly.com/pascal-misoph/erstgespraech";

export interface AiCheckLead {
  name: string;
  email: string;
  createdAt: string;
  source: string;
  inquiryType: string;
}

export interface ScanHistoryRecord {
  scan_id: string;
  created_at: string;
  name: string;
  email: string;
  submitted_url: string;
  final_url: string;
  language: ScanSnapshot["locale"];
  inquiry_type: string;
  source: string;
  score: number;
  grade: string;
  category_scores: Record<string, { score: number; max_score: number }>;
  strongest_category: string;
  weakest_category: string;
  failed_or_partial_checks: Array<{
    slug: string;
    status: "warning" | "fail";
    score: number;
    max_score: number;
  }>;
  readiness_band: string;
  result_interpretation: string;
}

const escapeHtml = (value: string | number) =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character);

const plainName = (name: string) => name.trim().split(/\s+/)[0] || name.trim();

const findingRows = (findings: InterpretedFinding[], locale: ScanSnapshot["locale"]) =>
  findings.map((finding) => {
    const kind = finding.kind
      ? ({
          action: locale === "de" ? "Handlungsbedarf" : "Action",
          potential: locale === "de" ? "Optimierungssignal" : "Improvement signal",
          context: locale === "de" ? "Kontextabhängig" : "Context-dependent",
        } as const)[finding.kind]
      : "";
    return `<tr>
      <td style="padding:0 0 18px 0;vertical-align:top;width:22px;color:#b74622;font-size:17px;line-height:22px;">${finding.status === "pass" ? "✓" : "•"}</td>
      <td style="padding:0 0 18px 0;vertical-align:top;">
        <strong style="display:block;color:#1b1a17;font-size:15px;line-height:21px;">${escapeHtml(finding.title)}</strong>
        ${kind ? `<span style="display:block;margin:3px 0 5px;color:#7b2f18;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;">${escapeHtml(kind)}</span>` : ""}
        <span style="display:block;color:#625f58;font-size:14px;line-height:21px;">${escapeHtml(finding.text)}</span>
      </td>
    </tr>`;
  }).join("");

const categoryRows = (snapshot: ScanSnapshot) =>
  [snapshot.categories.ai, snapshot.categories.data, snapshot.categories.tech].map((category) => {
    const ratio = category.maxScore ? category.score / category.maxScore : 0;
    const color = ratio >= .75 ? "#4d552d" : ratio >= .5 ? "#8a5b26" : "#9b2c1f";
    return `<tr>
      <td style="padding:14px 0;border-top:1px solid #ded8ce;color:#1b1a17;font-size:14px;line-height:20px;">${escapeHtml(category.title)}</td>
      <td style="padding:14px 0;border-top:1px solid #ded8ce;color:${color};font-size:15px;font-weight:700;line-height:20px;text-align:right;white-space:nowrap;">${category.score}/${category.maxScore}</td>
    </tr>`;
  }).join("");

export const createScanHistoryRecord = (
  lead: AiCheckLead,
  snapshot: ScanSnapshot,
): ScanHistoryRecord => ({
  scan_id: snapshot.scanId,
  created_at: lead.createdAt,
  name: lead.name,
  email: lead.email,
  submitted_url: snapshot.requestedUrl,
  final_url: snapshot.finalUrl,
  language: snapshot.locale,
  inquiry_type: lead.inquiryType,
  source: lead.source,
  score: snapshot.score,
  grade: snapshot.grade,
  category_scores: Object.fromEntries(
    Object.values(snapshot.categories).map((category) => [category.key, {
      score: category.score,
      max_score: category.maxScore,
    }]),
  ),
  strongest_category: snapshot.interpretation.strongestCategory.key,
  weakest_category: snapshot.interpretation.weakestCategory.key,
  failed_or_partial_checks: Object.values(snapshot.categories).flatMap((category) =>
    category.checks
      .filter((check) => check.status !== "pass")
      .map((check) => ({
        slug: check.slug,
        status: check.status as "warning" | "fail",
        score: check.score,
        max_score: check.maxScore,
      })),
  ),
  readiness_band: snapshot.interpretation.scoreBand,
  result_interpretation: snapshot.interpretation.overallSummary,
});

export const renderUserAiCheckEmail = (
  lead: AiCheckLead,
  snapshot: ScanSnapshot,
  resultToken: string,
) => {
  const en = snapshot.locale === "en";
  const resultUrl = new URL(scanResultPath(snapshot.locale, resultToken), SITE_URL).toString();
  const auditUrl = `${SITE_URL}${en ? "/en/geo-audit/" : "/geo-audit/"}`;
  const subject = en
    ? "Your PATERNOGA AI Readiness Check is ready"
    : "Ihr PATERNOGA KI-Readiness Check ist fertig";
  const preheader = en
    ? "We reviewed your website's technical foundations for AI search."
    : "Wir haben Ihre Website technisch auf ihre Voraussetzungen für AI Search geprüft.";
  const strengths = snapshot.interpretation.strengths;
  const opportunities = snapshot.interpretation.opportunities;

  const html = `<!doctype html>
<html lang="${en ? "en" : "de"}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#eee9e0;color:#1b1a17;font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eee9e0;">
    <tr><td align="center" style="padding:24px 12px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#fbf8f2;border:1px solid #ded8ce;">
        <tr><td style="background:#000000;padding:22px 32px;">
          <img src="${LOGO_URL}" width="244" height="63" alt="PATERNOGA SEO &amp; GEO" style="display:block;width:244px;max-width:100%;height:auto;border:0;color:#ffffff;font-size:18px;font-weight:700;line-height:24px;">
        </td></tr>
        <tr><td style="padding:38px 32px 10px;">
          <p style="margin:0 0 18px;color:#1b1a17;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:600;line-height:25px;">${en ? "Hello" : "Hallo"} ${escapeHtml(plainName(lead.name))},</p>
          <p style="margin:0;color:#625f58;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:400;line-height:25px;">${en ? "we reviewed" : "wir haben"} <strong style="color:#1b1a17;">${escapeHtml(new URL(snapshot.finalUrl).hostname)}</strong> ${en ? "for its technical foundations for AI search." : "auf ihre technischen Voraussetzungen für AI Search geprüft."}</p>
        </td></tr>
        <tr><td style="padding:26px 32px 32px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#1b1a17;">
            <tr><td style="padding:28px 28px 8px;color:#fbf8f2;font-size:54px;font-weight:700;letter-spacing:-2px;line-height:58px;">${snapshot.score}<span style="font-size:22px;font-weight:400;letter-spacing:0;">/100</span></td></tr>
            <tr><td style="padding:0 28px 4px;color:#d9d1c4;font-size:15px;line-height:22px;">${en ? "Grade" : "Note"} ${escapeHtml(snapshot.grade)} · ${escapeHtml(snapshot.interpretation.readinessLabel)}</td></tr>
            <tr><td style="padding:0 28px 28px;color:#ffffff;font-size:13px;font-weight:700;letter-spacing:.08em;line-height:20px;text-transform:uppercase;">${en ? "AI Readiness Score" : "KI-Readiness Score"}</td></tr>
          </table>
          <h1 style="margin:26px 0 10px;color:#1b1a17;font-size:24px;font-weight:600;line-height:30px;">${escapeHtml(snapshot.interpretation.overallHeadline)}</h1>
          <p style="margin:0;color:#625f58;font-size:15px;line-height:24px;">${escapeHtml(snapshot.interpretation.overallSummary)}</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:26px;">${categoryRows(snapshot)}</table>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:28px;"><tr><td style="background:#b74622;border-radius:7px;"><a href="${escapeHtml(resultUrl)}" style="display:inline-block;padding:14px 20px;color:#ffffff;font-size:15px;font-weight:700;line-height:20px;text-decoration:none;">${en ? "View full result" : "Vollständiges Ergebnis ansehen"}</a></td></tr></table>
        </td></tr>
        ${strengths.length ? `<tr><td style="padding:30px 32px 12px;border-top:1px solid #ded8ce;"><h2 style="margin:0 0 22px;font-size:21px;line-height:27px;">${escapeHtml(snapshot.interpretation.strengthsHeading)}</h2><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${findingRows(strengths, snapshot.locale)}</table></td></tr>` : ""}
        ${opportunities.length ? `<tr><td style="padding:30px 32px 12px;border-top:1px solid #ded8ce;"><h2 style="margin:0 0 22px;font-size:21px;line-height:27px;">${escapeHtml(snapshot.interpretation.opportunitiesHeading)}</h2><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${findingRows(opportunities, snapshot.locale)}</table></td></tr>` : ""}
        <tr><td style="padding:32px;border-top:1px solid #ded8ce;background:#f3eee5;">
          <h2 style="margin:0 0 12px;font-size:21px;line-height:27px;">${en ? "Technical readiness is only the first step." : "Technische Readiness ist nur der erste Schritt."}</h2>
          <p style="margin:0 0 20px;color:#625f58;font-size:15px;line-height:24px;">${en ? "This check shows how well your website meets the technical requirements for AI search. It does not yet answer whether ChatGPT, Gemini or Perplexity actually mention, cite or recommend your brand for relevant questions." : "Dieser Check zeigt, wie gut die technischen Voraussetzungen Ihrer Website für AI Search sind. Er beantwortet noch nicht, ob ChatGPT, Gemini oder Perplexity Ihre Marke bei relevanten Fragen tatsächlich nennen, zitieren oder empfehlen."}</p>
          <p style="margin:0 0 20px;color:#1b1a17;font-size:15px;font-weight:700;line-height:24px;">${en ? "That actual AI visibility is what we examine in a complete GEO audit." : "Genau diese tatsächliche KI-Sichtbarkeit untersuchen wir im vollständigen GEO Audit."}</p>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:4px;">
            <tr><td><a href="${auditUrl}" style="color:#7b2f18;font-size:15px;font-weight:700;line-height:22px;text-decoration:underline;text-underline-offset:3px;">${en ? "Learn about the GEO audit" : "GEO Audit kennenlernen"}</a></td></tr>
            <tr><td style="padding-top:12px;"><a href="${CONSULTATION_URL}" style="color:#7b2f18;font-size:15px;font-weight:700;line-height:22px;text-decoration:underline;text-underline-offset:3px;">${en ? "Book an initial consultation" : "Erstgespräch vereinbaren"}</a></td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:24px 32px;color:#777168;font-size:12px;line-height:19px;">Paternoga SEO &amp; GEO Studio · <a href="mailto:${CONTACT_EMAIL}" style="color:#625f58;">${CONTACT_EMAIL}</a><br>${en ? "This technical result link is valid for 30 days." : "Dieser technische Ergebnis-Link ist 30 Tage gültig."}</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    `${en ? "Hello" : "Hallo"} ${plainName(lead.name)},`,
    "",
    en
      ? `We reviewed ${new URL(snapshot.finalUrl).hostname} for its technical foundations for AI search.`
      : `wir haben ${new URL(snapshot.finalUrl).hostname} auf ihre technischen Voraussetzungen für AI Search geprüft.`,
    "",
    `${snapshot.score}/100 · ${en ? "Grade" : "Note"} ${snapshot.grade} · ${snapshot.interpretation.readinessLabel}`,
    snapshot.interpretation.overallSummary,
    "",
    ...Object.values(snapshot.categories).map((category) => `${category.title}: ${category.score}/${category.maxScore}`),
    "",
    `${en ? "Full result" : "Vollständiges Ergebnis"}: ${resultUrl}`,
    "",
    en ? "Technical readiness is only the first step." : "Technische Readiness ist nur der erste Schritt.",
    en
      ? "This check does not measure whether ChatGPT, Gemini or Perplexity actually mention, cite or recommend your brand. A complete GEO audit examines that actual AI visibility."
      : "Dieser Check misst nicht, ob ChatGPT, Gemini oder Perplexity Ihre Marke tatsächlich nennen, zitieren oder empfehlen. Diese tatsächliche KI-Sichtbarkeit untersucht ein vollständiger GEO Audit.",
    `${en ? "GEO audit" : "GEO Audit"}: ${auditUrl}`,
    `${en ? "Initial consultation" : "Erstgespräch"}: ${CONSULTATION_URL}`,
  ].join("\n");

  return { subject, preheader, html, text, resultUrl };
};

export const renderInternalAiCheckEmail = (
  lead: AiCheckLead,
  snapshot: ScanSnapshot,
  resultToken: string,
) => {
  const history = createScanHistoryRecord(lead, snapshot);
  const domain = new URL(snapshot.finalUrl).hostname.replace(/^www\./, "");
  const resultUrl = new URL(scanResultPath(snapshot.locale, resultToken), SITE_URL).toString();
  const failedOrPartial = history.failed_or_partial_checks
    .map((check) => `${check.slug} (${check.status}, ${check.score}/${check.max_score})`)
    .join(", ") || "Keine";
  const categories = Object.values(snapshot.categories)
    .map((category) => `${category.title}: ${category.score}/${category.maxScore}`)
    .join("\n");
  const subject = `Neuer KI-Check · ${domain} · ${lead.name}`;
  const text = [
    "NEUER KI-CHECK",
    "",
    "Lead",
    lead.name,
    lead.email,
    "",
    "Website",
    snapshot.requestedUrl,
    "",
    "Finale Scan-URL",
    snapshot.finalUrl,
    "",
    "Ergebnis",
    `${snapshot.score}/100 · Note ${snapshot.grade}`,
    snapshot.interpretation.overallSummary,
    "",
    "Kategorien",
    categories,
    "",
    "Wichtigster Handlungsbereich",
    `${snapshot.interpretation.weakestCategory.title}: ${snapshot.interpretation.weakestCategory.score}/${snapshot.interpretation.weakestCategory.maxScore}`,
    "",
    "Fehlende oder partielle Checks",
    failedOrPartial,
    "",
    "Scan-Metadaten",
    `- Scan-ID: ${snapshot.scanId}`,
    `- Zeitpunkt: ${lead.createdAt}`,
    `- Sprache: ${snapshot.locale}`,
    `- Quelle: ${lead.source}`,
    `- Anfrageart: ${lead.inquiryType}`,
    `- Readiness-Band: ${snapshot.interpretation.scoreBand}`,
    `- Stärkste Kategorie: ${snapshot.interpretation.strongestCategory.key}`,
    `- Schwächste Kategorie: ${snapshot.interpretation.weakestCategory.key}`,
    "",
    "Aktionen",
    `Ergebnis öffnen: ${resultUrl}`,
    `Website öffnen: ${snapshot.finalUrl}`,
    `Lead kontaktieren: mailto:${lead.email}`,
    "",
    "STRUKTURIERTER HISTORIEN-DATENSATZ",
    JSON.stringify(history),
  ].join("\n");
  return { subject, text, history, resultUrl };
};
