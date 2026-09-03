import assert from "node:assert/strict";
import test from "node:test";

import {
  interpretScanResult,
  type CategoryKey,
  type CheckStatus,
  type ScanCategory,
  type ScanCheck,
  type ScanLocale,
  type ScanSnapshot,
} from "../src/lib/ai-readiness.ts";
import {
  createScanHistoryRecord,
  renderInternalAiCheckEmail,
  renderUserAiCheckEmail,
} from "../src/lib/server/ai-check-email.ts";
import { createScanResultToken, verifyScanResultToken } from "../src/lib/server/scan-result-token.ts";

process.env.SCAN_RESULT_SIGNING_SECRET = "test-only-signing-secret-with-more-than-32-characters";

const definitions: Record<CategoryKey, Array<[string, number]>> = {
  ai: [["llmstxt", 5], ["llmsfull", 3], ["gptbot", 7], ["perplexity", 6], ["claudebot", 5], ["headings", 4], ["multimodal", 5]],
  data: [["schemaorg", 7], ["schemalocal", 7], ["eeat", 4], ["sitemap", 4], ["jsonld", 4], ["nap", 5], ["citability", 4]],
  tech: [["https", 6], ["hsts", 4], ["xcontent", 3], ["xframe", 3], ["csp", 4], ["referrer", 3], ["ttfb", 7]],
};

const categoryTitles: Record<ScanLocale, Record<CategoryKey, string>> = {
  de: { ai: "AI-Readiness & Crawling", data: "Daten-Architektur & Vertrauenssignale", tech: "Technische Basis & Security" },
  en: { ai: "AI readiness & crawling", data: "Data architecture & trust signals", tech: "Technical foundation & security" },
};

const createCategory = (
  key: CategoryKey,
  score: number,
  locale: ScanLocale,
  overrides: Record<string, CheckStatus> = {},
): ScanCategory => {
  const maxScore = key === "tech" ? 30 : 35;
  const checks: ScanCheck[] = definitions[key].map(([slug, max]) => {
    const status = overrides[slug] ?? (score / maxScore >= .75 ? "pass" : score / maxScore >= .4 ? "warning" : "fail");
    return {
      slug,
      maxScore: max,
      score: status === "pass" ? max : status === "warning" ? Math.ceil(max / 2) : 0,
      status,
      passed: status === "pass",
      title: `${slug} check`,
      detail: `${slug} measured detail`,
    };
  });
  return {
    key,
    title: categoryTitles[locale][key],
    score,
    maxScore,
    status: score / maxScore >= .75 ? "pass" : score / maxScore >= .4 ? "warning" : "fail",
    checks,
  };
};

const snapshotFor = (
  score: number,
  categoryScores: [number, number, number],
  locale: ScanLocale = "de",
  overrides: Partial<Record<CategoryKey, Record<string, CheckStatus>>> = {},
): ScanSnapshot => {
  const categories = {
    ai: createCategory("ai", categoryScores[0], locale, overrides.ai),
    data: createCategory("data", categoryScores[1], locale, overrides.data),
    tech: createCategory("tech", categoryScores[2], locale, overrides.tech),
  };
  const core = {
    requestedUrl: "example.com",
    finalUrl: "https://example.com/",
    scannedAt: "2026-09-03T12:00:00.000Z",
    scanId: "06f88864-83e3-48bf-9f23-143c756d9635",
    score,
    grade: score >= 85 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : score >= 40 ? "D" : "E",
    criticalIssues: Object.values(categories).flatMap((category) => category.checks).filter((check) => check.status === "fail").length,
    categories,
  };
  return { ...core, locale, interpretation: interpretScanResult(core, locale) };
};

const lead = {
  name: "Pascal Beispiel",
  email: "pascal@example.com",
  createdAt: "2026-09-03T12:01:00.000Z",
  source: "ai-check",
  inquiryType: "improve",
};

test("score bands produce diagnostic copy for 93, 60, 40 and 20", () => {
  const strong = snapshotFor(93, [33, 33, 27]);
  const medium = snapshotFor(60, [23, 20, 17]);
  const low = snapshotFor(40, [15, 14, 11]);
  const veryLow = snapshotFor(20, [8, 7, 5]);

  assert.equal(strong.interpretation.scoreBand, "very-high");
  assert.match(strong.interpretation.overallSummary, /sehr starke technische Grundlage/);
  assert.equal(medium.interpretation.scoreBand, "medium");
  assert.match(medium.interpretation.overallSummary, /Grundlagen sind vorhanden/);
  assert.equal(low.interpretation.scoreBand, "low");
  assert.match(low.interpretation.overallSummary, /deutliche technische Lücken/);
  assert.equal(veryLow.interpretation.scoreBand, "very-low");
  assert.doesNotMatch(veryLow.interpretation.overallSummary, /sehr gut|starke technische Grundlage/i);
});

test("boundary cases at 25 and 10 remain factual", () => {
  const score25 = snapshotFor(25, [10, 9, 6]);
  const score10 = snapshotFor(10, [4, 3, 3]);
  assert.equal(score25.interpretation.scoreBand, "low");
  assert.equal(score10.interpretation.scoreBand, "very-low");
  assert.doesNotMatch(`${score25.interpretation.overallSummary} ${score10.interpretation.overallSummary}`, /KI-Sichtbarkeit (?:ist|bleibt)|empfiehlt Ihre Marke/i);
});

test("high overall score calls out one weak category", () => {
  const result = snapshotFor(80, [35, 35, 10]);
  assert.equal(result.interpretation.weakestCategory.key, "tech");
  assert.match(result.interpretation.overallSummary, /technischen Basis und Security.*Handlungsbedarf/i);
});

test("low overall score acknowledges one strong category", () => {
  const result = snapshotFor(45, [35, 6, 4]);
  assert.equal(result.interpretation.strongestCategory.key, "ai");
  assert.match(result.interpretation.overallSummary, /KI-Crawler ist bereits sehr gut/);
});

test("context-dependent findings are labelled without calling them errors", () => {
  const result = snapshotFor(82, [30, 25, 27], "de", {
    data: { schemalocal: "fail", nap: "warning" },
  });
  const localBusiness = result.interpretation.opportunities.find((item) => item.slug === "schemalocal");
  if (localBusiness) {
    assert.equal(localBusiness.kind, "context");
    assert.match(localBusiness.text, /hängt vom Geschäftsmodell/);
    assert.doesNotMatch(localBusiness.text, /Fehler/);
  }
});

test("no failed checks yields no fabricated opportunities", () => {
  const result = snapshotFor(100, [35, 35, 30]);
  assert.equal(result.interpretation.opportunities.length, 0);
  assert.ok(result.interpretation.strengths.length >= 2);
});

test("German and English user mails use the same snapshot without claiming measured AI visibility", () => {
  const weak = snapshotFor(20, [8, 7, 5]);
  const token = createScanResultToken(weak);
  const deMail = renderUserAiCheckEmail(lead, weak, token);
  const enSnapshot = snapshotFor(60, [23, 20, 17], "en");
  const enMail = renderUserAiCheckEmail(lead, enSnapshot, createScanResultToken(enSnapshot));

  assert.equal(deMail.subject, "Ihr PATERNOGA KI-Readiness Check ist fertig");
  assert.doesNotMatch(deMail.subject, /20|Note|Scan/i);
  assert.match(deMail.preheader, /technisch/);
  assert.match(deMail.html, /paternoga-email-logo\.png/);
  assert.match(deMail.html, /beantwortet noch nicht, ob ChatGPT, Gemini oder Perplexity/);
  assert.doesNotMatch(deMail.html, /bereits sehr gut für KI-Suche vorbereitet/i);
  assert.doesNotMatch(deMail.html, /Was bereits vorhanden ist/);
  assert.equal(enMail.subject, "Your PATERNOGA AI Readiness Check is ready");
  assert.match(enMail.html, /does not yet answer whether ChatGPT, Gemini or Perplexity actually mention/);
});

test("signed result snapshot is PII-free and detects tampering", () => {
  const snapshot = snapshotFor(60, [23, 20, 17]);
  const token = createScanResultToken(snapshot);
  const verified = verifyScanResultToken(token);
  assert.equal(verified.scanId, snapshot.scanId);
  assert.doesNotMatch(JSON.stringify(verified), /pascal@example\.com|Pascal Beispiel/);
  assert.throws(() => verifyScanResultToken(`${token.slice(0, -1)}x`), /invalid/);
});

test("internal history contains the required lead and result fields", () => {
  const snapshot = snapshotFor(40, [15, 14, 11]);
  const token = createScanResultToken(snapshot);
  const history = createScanHistoryRecord(lead, snapshot);
  const internal = renderInternalAiCheckEmail(lead, snapshot, token);
  assert.deepEqual(Object.keys(history.category_scores), ["ai", "data", "tech"]);
  assert.equal(history.email, lead.email);
  assert.equal(history.readiness_band, "low");
  assert.ok(history.failed_or_partial_checks.length > 0);
  assert.match(internal.text, /STRUKTURIERTER HISTORIEN-DATENSATZ/);
  assert.doesNotMatch(internal.subject, /40\/100|Note D/);
});
