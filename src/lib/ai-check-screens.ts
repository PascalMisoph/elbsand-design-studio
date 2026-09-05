export interface AiCheckScreenCopy {
  phases: readonly string[];
  scanItems: readonly string[];
  scanningTitle: string;
  scanningBody: string;
  preliminary: string;
  scoreNote: string;
  scoreLabel: string;
  resultTitle: string;
  leadTitle: string;
  leadBody: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  unlock: string;
  privacy: string;
  sending: string;
  scanError: string;
  leadError: string;
  unlockedEyebrow: string;
  unlocked: string;
  unlockedBody: string;
  lockedLabel: string;
  grade: string;
  contact: string;
  geoTitle: string;
  geoBody: string;
  geoAudit: string;
  geoCta: string;
  categoryTitles: Record<"ai" | "data" | "tech", string>;
}

export interface AiCheckScreenConfig {
  lang: string;
  privacyPath: string;
  copy: AiCheckScreenCopy;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const createFragment = (markup: string) => {
  const template = document.createElement("template");
  template.innerHTML = markup;
  return template.content;
};

export const createAiCheckScreens = ({ lang, privacyPath, copy }: AiCheckScreenConfig) => {
  const isEnglish = lang === "en";
  const text = escapeHtml;
  const scanItems = copy.scanItems
    .map((item, index) =>
      [
        '<li data-scan-item="',
        String(index),
        '"><span class="ai-scan-marker" aria-hidden="true"></span><span>',
        text(item),
        '</span><small data-scan-state>',
        isEnglish ? "Waiting" : "Wartet",
        "</small></li>",
      ].join(""),
    )
    .join("");

  const scanningMarkup = [
    '<section class="ai-check-screen ai-check-scanning" data-ai-screen="2" aria-live="polite">',
    "<div><p class=\"eyebrow\">",
    text(copy.phases[1]),
    "</p><h3>",
    text(copy.scanningTitle),
    "</h3><p>",
    text(copy.scanningBody),
    "</p></div><ul class=\"ai-scan-list\">",
    scanItems,
    "</ul></section>",
  ].join("");

  const categoryMarkup = (["ai", "data", "tech"] as const)
    .map((key, index) =>
      [
        '<section class="ai-audit-category" data-audit-category="',
        key,
        '"><header><p>',
        String(index + 1),
        "</p><h4>",
        text(copy.categoryTitles[key]),
        '</h4><small data-category-score>0 / ',
        key === "tech" ? "30" : "35",
        "</small></header><ul data-category-checks></ul></section>",
      ].join(""),
    )
    .join("");

  const summaryMarkup = (["ai", "data", "tech"] as const)
    .map((key) =>
      [
        '<div data-summary-category="',
        key,
        '"><span>',
        text(copy.categoryTitles[key]),
        '</span><strong>0/',
        key === "tech" ? "30" : "35",
        "</strong></div>",
      ].join(""),
    )
    .join("");

  const resultMarkup = [
    '<section class="ai-check-screen ai-check-result" data-ai-screen="3">',
    '<div class="ai-score-column"><p>',
    text(copy.preliminary),
    '</p><p class="ai-score"><strong data-ai-score>0</strong><span>/ 100</span></p><p class="ai-grade"><span>',
    text(copy.grade),
    '</span> <strong data-ai-grade>–</strong></p><p class="ai-score-label">',
    text(copy.scoreLabel),
    '</p><p class="ai-score-note">',
    text(copy.scoreNote),
    "</p></div>",
    '<div class="ai-lead-column"><div class="ai-result-summary" aria-live="polite"><h3 data-result-headline></h3><p data-result-summary></p></div>',
    '<div class="ai-category-summary" data-category-summary>',
    summaryMarkup,
    '</div><div data-lead-gate><h3>',
    text(copy.leadTitle),
    '</h3><p class="ai-lead-intro">',
    text(copy.leadBody),
    '</p><form action="/api/contact" method="post" data-ai-lead-form><div class="ai-lead-fields"><div><label for="ai-check-name-',
    text(lang),
    '">',
    text(copy.firstNameLabel),
    '</label><input id="ai-check-name-',
    text(lang),
    '" name="name" type="text" autocomplete="given-name" placeholder="',
    text(copy.firstNamePlaceholder),
    '" required /></div><div><label for="ai-check-email-',
    text(lang),
    '">',
    text(copy.emailLabel),
    '</label><input id="ai-check-email-',
    text(lang),
    '" name="email" type="email" autocomplete="email" placeholder="',
    text(copy.emailPlaceholder),
    '" required /></div></div><button class="button" type="submit">',
    text(copy.unlock),
    '</button><small>',
    text(copy.privacy),
    ' · <a href="',
    text(privacyPath),
    '">',
    isEnglish ? "Privacy information" : "Datenschutzhinweise",
    '</a></small><p class="ai-check-error" role="alert" data-lead-error hidden></p></form></div>',
    '<div class="ai-unlocked" data-ai-unlocked hidden tabindex="-1"><p class="eyebrow">',
    text(copy.unlockedEyebrow),
    "</p><h3>",
    text(copy.unlocked),
    "</h3><p>",
    text(copy.unlockedBody),
    "</p></div></div>",
    '<div class="ai-result-checks is-locked" aria-labelledby="ai-result-title-',
    text(lang),
    '" data-result-checks><h3 id="ai-result-title-',
    text(lang),
    '">',
    text(copy.resultTitle),
    '</h3><div class="ai-result-checks-grid ai-audit-content" data-result-grid aria-hidden="true"><section class="ai-interpretation-panel" data-strengths-panel hidden><h4 data-strengths-heading></h4><ul data-strengths-list></ul></section><section class="ai-interpretation-panel" data-opportunities-panel hidden><h4 data-opportunities-heading></h4><ul data-opportunities-list></ul></section>',
    categoryMarkup,
    '<section class="ai-recommendation ai-geo-transition"><h4>',
    text(copy.geoTitle),
    '</h4><p class="ai-recommendation-copy">',
    text(copy.geoBody),
    "</p><p><strong>",
    text(copy.geoAudit),
    '</strong></p><a href="',
    isEnglish ? "/en/geo-audit/" : "/geo-audit/",
    '">',
    text(copy.geoCta),
    '</a></section></div><div class="ai-result-lock" data-result-lock><span aria-hidden="true"></span><p>',
    text(copy.lockedLabel),
    '</p></div></div><a class="button ai-live-cta" href="#kontakt" data-live-cta hidden>',
    text(copy.contact),
    "</a></section>",
  ].join("");

  return {
    createScanningScreen: () => createFragment(scanningMarkup),
    createResultScreen: () => createFragment(resultMarkup),
  };
};
