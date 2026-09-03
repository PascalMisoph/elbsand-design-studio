import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { interpretScanResult, type CategoryKey, type ScanCategory, type ScanLocale, type ScanSnapshot } from "../src/lib/ai-readiness";
import { renderUserAiCheckEmail } from "../src/lib/server/ai-check-email";
import { createScanResultToken } from "../src/lib/server/scan-result-token";

process.env.SCAN_RESULT_SIGNING_SECRET ||= "local-preview-signing-secret-with-more-than-32-characters";

const definitions: Record<CategoryKey, Array<[string, number]>> = {
  ai: [["llmstxt", 5], ["llmsfull", 3], ["gptbot", 7], ["perplexity", 6], ["claudebot", 5], ["headings", 4], ["multimodal", 5]],
  data: [["schemaorg", 7], ["schemalocal", 7], ["eeat", 4], ["sitemap", 4], ["jsonld", 4], ["nap", 5], ["citability", 4]],
  tech: [["https", 6], ["hsts", 4], ["xcontent", 3], ["xframe", 3], ["csp", 4], ["referrer", 3], ["ttfb", 7]],
};

const titles: Record<ScanLocale, Record<CategoryKey, string>> = {
  de: { ai: "AI-Readiness & Crawling", data: "Daten-Architektur & Vertrauenssignale", tech: "Technische Basis & Security" },
  en: { ai: "AI readiness & crawling", data: "Data architecture & trust signals", tech: "Technical foundation & security" },
};

const makeCategory = (key: CategoryKey, score: number, locale: ScanLocale): ScanCategory => {
  const maxScore = key === "tech" ? 30 : 35;
  const passCount = Math.floor((score / maxScore) * 7);
  const checks = definitions[key].map(([slug, max], index) => {
    const status = index < passCount ? "pass" : index === passCount ? "warning" : "fail";
    return {
      slug,
      maxScore: max,
      score: status === "pass" ? max : status === "warning" ? Math.ceil(max / 2) : 0,
      status,
      passed: status === "pass",
      title: slug,
      detail: locale === "de" ? "Technischer Messwert aus dem simulierten Scan." : "Technical measurement from the simulated scan.",
    } as const;
  });
  return { key, title: titles[locale][key], score, maxScore, status: score / maxScore >= .75 ? "pass" : score / maxScore >= .4 ? "warning" : "fail", checks };
};

const makeSnapshot = (score: number, scores: [number, number, number], locale: ScanLocale): ScanSnapshot => {
  const categories = {
    ai: makeCategory("ai", scores[0], locale),
    data: makeCategory("data", scores[1], locale),
    tech: makeCategory("tech", scores[2], locale),
  };
  const core = {
    requestedUrl: "beispiel-unternehmen.de",
    finalUrl: "https://beispiel-unternehmen.de/",
    scannedAt: "2026-09-03T12:00:00.000Z",
    scanId: `preview-${score}`,
    score,
    grade: score >= 85 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : score >= 40 ? "D" : "E",
    criticalIssues: Object.values(categories).flatMap((category) => category.checks).filter((check) => check.status === "fail").length,
    categories,
  };
  return { ...core, locale, interpretation: interpretScanResult(core, locale) };
};

const outputDirectory = path.join(process.cwd(), ".tmp", "ai-check-mail-previews");
await mkdir(outputDirectory, { recursive: true });
for (const [score, scores] of [[93, [33, 33, 27]], [60, [23, 20, 17]], [40, [15, 14, 11]], [20, [8, 7, 5]]] as const) {
  for (const locale of ["de", "en"] as const) {
    const snapshot = makeSnapshot(score, [...scores], locale);
    const mail = renderUserAiCheckEmail(
      { name: locale === "de" ? "Pascal" : "Alex", email: "preview@example.com", createdAt: snapshot.scannedAt, source: "ai-check", inquiryType: "improve" },
      snapshot,
      createScanResultToken(snapshot),
    );
    const html = mail.html.replace(
      "https://www.paternoga-seo-geo.de/images/paternoga-email-logo.png",
      new URL("../../public/images/paternoga-email-logo.png", `file:///${outputDirectory.replace(/\\/g, "/")}/`).toString(),
    );
    await writeFile(path.join(outputDirectory, `${locale}-${score}.html`), html, "utf8");
    await writeFile(path.join(outputDirectory, `${locale}-${score}.txt`), mail.text, "utf8");
  }
}
console.log(`AI-check mail previews written to ${outputDirectory}`);
