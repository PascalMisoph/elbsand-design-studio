export type ScanLocale = "de" | "en";
export type CheckStatus = "pass" | "warning" | "fail";
export type CategoryKey = "ai" | "data" | "tech";
export type OpportunityKind = "action" | "potential" | "context";

export interface ScanCheck {
  slug: string;
  score: number;
  maxScore: number;
  status: CheckStatus;
  passed: boolean;
  title: string;
  detail: string;
}

export interface ScanCategory {
  key: CategoryKey;
  title: string;
  score: number;
  maxScore: number;
  status: CheckStatus;
  checks: ScanCheck[];
}

export interface ScanResultCore {
  requestedUrl: string;
  finalUrl: string;
  scannedAt: string;
  scanId: string;
  score: number;
  grade: string;
  criticalIssues: number;
  categories: Record<CategoryKey, ScanCategory>;
}

export interface InterpretedFinding {
  slug: string;
  category: CategoryKey;
  title: string;
  text: string;
  status: CheckStatus;
  score: number;
  maxScore: number;
  kind?: OpportunityKind;
}

export interface CategorySummary {
  key: CategoryKey;
  title: string;
  score: number;
  maxScore: number;
  ratio: number;
}

export type ScoreBand = "very-high" | "high" | "medium" | "low" | "very-low";

export interface ScanInterpretation {
  scoreBand: ScoreBand;
  readinessLabel: string;
  overallHeadline: string;
  overallSummary: string;
  strongestCategory: CategorySummary;
  weakestCategory: CategorySummary;
  strengthsHeading: string;
  opportunitiesHeading: string;
  strengths: InterpretedFinding[];
  opportunities: InterpretedFinding[];
}

export interface ScanSnapshot extends ScanResultCore {
  locale: ScanLocale;
  interpretation: ScanInterpretation;
}

export interface ScanApiResult extends ScanSnapshot {
  ok: true;
  resultToken: string;
  resultUrl: string;
}

type FindingCopy = {
  priority: number;
  kind: OpportunityKind;
  strength: Record<ScanLocale, string>;
  opportunity: Record<ScanLocale, string>;
};

const findingCopy: Record<string, FindingCopy> = {
  gptbot: {
    priority: 100,
    kind: "action",
    strength: { de: "GPTBot kann die Website grundsätzlich erreichen.", en: "GPTBot can access the website in principle." },
    opportunity: { de: "Die robots.txt blockiert GPTBot vollständig. Diese Regel sollte bewusst geprüft werden.", en: "The robots.txt file blocks GPTBot entirely. This rule should be reviewed deliberately." },
  },
  perplexity: {
    priority: 98,
    kind: "action",
    strength: { de: "PerplexityBot kann die Website grundsätzlich erreichen.", en: "PerplexityBot can access the website in principle." },
    opportunity: { de: "Die robots.txt blockiert PerplexityBot vollständig. Diese Regel sollte bewusst geprüft werden.", en: "The robots.txt file blocks PerplexityBot entirely. This rule should be reviewed deliberately." },
  },
  claudebot: {
    priority: 96,
    kind: "action",
    strength: { de: "Claude-Crawler werden nicht vollständig per robots.txt ausgesperrt.", en: "Claude crawlers are not blocked site-wide by robots.txt." },
    opportunity: { de: "Die robots.txt blockiert die geprüften Claude-Crawler vollständig. Diese Regel sollte bewusst geprüft werden.", en: "The robots.txt file blocks the tested Claude crawlers entirely. This rule should be reviewed deliberately." },
  },
  schemaorg: {
    priority: 95,
    kind: "action",
    strength: { de: "Strukturierte Unternehmensdaten wurden erkannt.", en: "Structured organisation data was detected." },
    opportunity: { de: "Ein maschinenlesbares Unternehmens-Schema wurde nicht erkannt. Die vorhandenen Unternehmensdaten sollten strukturiert geprüft werden.", en: "No machine-readable organisation schema was detected. The existing organisation details should be reviewed for structured markup." },
  },
  https: {
    priority: 94,
    kind: "action",
    strength: { de: "Die geprüfte Seite wird verschlüsselt über HTTPS ausgeliefert.", en: "The tested page is delivered securely over HTTPS." },
    opportunity: { de: "Die finale Website-Adresse nutzt kein HTTPS. Eine verschlüsselte Auslieferung ist eine technische Grundvoraussetzung.", en: "The final website address does not use HTTPS. Encrypted delivery is a technical baseline requirement." },
  },
  csp: {
    priority: 92,
    kind: "action",
    strength: { de: "Eine Content-Security-Policy schützt die Auslieferung zusätzlich.", en: "A Content Security Policy adds another layer of delivery protection." },
    opportunity: { de: "Keine Content-Security-Policy wurde erkannt. Eine auf die realen Ressourcen abgestimmte Policy sollte geprüft werden.", en: "No Content Security Policy was detected. A policy tailored to the resources actually used should be considered." },
  },
  sitemap: {
    priority: 91,
    kind: "action",
    strength: { de: "Eine valide Sitemap macht wichtige URLs maschinenlesbar auffindbar.", en: "A valid sitemap makes important URLs discoverable to machines." },
    opportunity: { de: "Keine valide Sitemap wurde erkannt. Wichtige URLs sollten über eine konsistente Sitemap auffindbar sein.", en: "No valid sitemap was detected. Important URLs should be discoverable through a consistent sitemap." },
  },
  eeat: {
    priority: 90,
    kind: "potential",
    strength: { de: "Personen-, Autoren- oder Gründerinformationen schaffen nachvollziehbare Vertrauenssignale.", en: "Person, author or founder information provides traceable trust signals." },
    opportunity: { de: "Eindeutige Personen- oder Autorensignale wurden nicht erkannt. Sachlich passende Verantwortlichkeits- und Vertrauenssignale können die Einordnung verbessern.", en: "No clear person or author signals were detected. Factually appropriate responsibility and trust signals may improve interpretation." },
  },
  citability: {
    priority: 89,
    kind: "potential",
    strength: { de: "Eigenständige Textblöcke unterstützen die maschinelle Zitierbarkeit.", en: "Self-contained text passages support machine-readable citability." },
    opportunity: { de: "Nur wenige eigenständige, substanziell zitierfähige Textblöcke wurden erkannt. Klare Definitionen und in sich verständliche Aussagen können helfen.", en: "Few substantial, self-contained passages were detected. Clear definitions and statements that stand on their own may help." },
  },
  jsonld: {
    priority: 88,
    kind: "action",
    strength: { de: "Die erkannten JSON-LD-Blöcke sind syntaktisch valide.", en: "The detected JSON-LD blocks are syntactically valid." },
    opportunity: { de: "JSON-LD fehlt oder enthält syntaktische Probleme. Bestehendes Markup sollte validiert werden, bevor neue Schemas ergänzt werden.", en: "JSON-LD is missing or contains syntax issues. Existing markup should be validated before adding new schema types." },
  },
  hsts: {
    priority: 84,
    kind: "action",
    strength: { de: "HSTS stärkt die konsequente HTTPS-Nutzung.", en: "HSTS reinforces consistent HTTPS use." },
    opportunity: { de: "Der HSTS-Header fehlt. Nach Prüfung aller Subdomains sollte eine passende HSTS-Policy erwogen werden.", en: "The HSTS header is missing. After reviewing all subdomains, an appropriate HSTS policy should be considered." },
  },
  xcontent: {
    priority: 82,
    kind: "action",
    strength: { de: "`X-Content-Type-Options: nosniff` ist aktiv.", en: "`X-Content-Type-Options: nosniff` is active." },
    opportunity: { de: "`X-Content-Type-Options: nosniff` wurde nicht erkannt und sollte ergänzt werden.", en: "`X-Content-Type-Options: nosniff` was not detected and should be added." },
  },
  xframe: {
    priority: 81,
    kind: "action",
    strength: { de: "Ein technischer Schutz gegen fremde Frame-Einbettung ist aktiv.", en: "Technical protection against third-party framing is active." },
    opportunity: { de: "Kein eindeutiger Frame-Schutz wurde erkannt. `frame-ancestors` oder X-Frame-Options sollte passend zur Website geprüft werden.", en: "No clear framing protection was detected. `frame-ancestors` or X-Frame-Options should be reviewed for the site." },
  },
  referrer: {
    priority: 78,
    kind: "action",
    strength: { de: "Eine Referrer-Policy begrenzt unnötige URL-Informationen bei externen Aufrufen.", en: "A Referrer Policy limits unnecessary URL information on outbound requests." },
    opportunity: { de: "Keine Referrer-Policy wurde erkannt. Eine zum Nutzungskontext passende Policy sollte ergänzt werden.", en: "No Referrer Policy was detected. A policy suited to the site's usage should be added." },
  },
  llmstxt: {
    priority: 76,
    kind: "potential",
    strength: { de: "Eine öffentlich erreichbare llms.txt stellt zusätzliche Orientierung für unterstützende Systeme bereit.", en: "A public llms.txt provides additional guidance for systems that support it." },
    opportunity: { de: "Keine verwertbare llms.txt wurde erkannt. Sie kann als ergänzendes Orientierungssignal sinnvoll sein, ist aber kein allgemeiner Crawling-Standard.", en: "No usable llms.txt was detected. It may provide supplementary guidance, but it is not a universal crawling standard." },
  },
  ttfb: {
    priority: 74,
    kind: "potential",
    strength: { de: "Die gemessene Server-Antwortzeit liegt im soliden Bereich.", en: "The measured server response time is within a solid range." },
    opportunity: { de: "Die gemessene Server-Antwortzeit ist erhöht. Wiederholte Messungen sollten klären, ob ein belastbares Performance-Problem vorliegt.", en: "The measured server response time is elevated. Repeated measurements should establish whether this is a persistent performance issue." },
  },
  llmsfull: {
    priority: 68,
    kind: "potential",
    strength: { de: "Eine ausführliche llms-full.txt ist öffentlich erreichbar.", en: "A detailed llms-full.txt is publicly available." },
    opportunity: { de: "Keine ausführliche llms-full.txt wurde erkannt. Sie ist eine optionale Ergänzung und sollte nur mit gepflegten, konsistenten Inhalten eingesetzt werden.", en: "No detailed llms-full.txt was detected. It is optional and should only be used with maintained, consistent content." },
  },
  headings: {
    priority: 64,
    kind: "potential",
    strength: { de: "Fragebasierte Überschriften machen zentrale Antworten direkt auffindbar.", en: "Question-led headings make key answers easier to locate." },
    opportunity: { de: "Wenige oder keine fragebasierten Überschriften wurden erkannt. Sie können dort helfen, wo sie echte Nutzerfragen präzise abbilden.", en: "Few or no question-led headings were detected. They may help where they accurately reflect real user questions." },
  },
  multimodal: {
    priority: 60,
    kind: "potential",
    strength: { de: "Beschriftete Medien liefern zusätzliche maschinenlesbare Kontextsignale.", en: "Labelled media provides additional machine-readable context." },
    opportunity: { de: "Nur wenige aussagekräftig beschriftete Medien wurden erkannt. Zusätzliche Medien sind nur sinnvoll, wenn sie den Inhalt tatsächlich erklären.", en: "Few meaningfully labelled media elements were detected. Additional media is only useful when it genuinely explains the content." },
  },
  nap: {
    priority: 58,
    kind: "context",
    strength: { de: "Name, Adresse und Kontaktangabe sind strukturiert miteinander verknüpft.", en: "Name, address and contact details are linked in structured data." },
    opportunity: { de: "Vollständig verknüpfte NAP-Daten wurden nicht erkannt. Ob sie erforderlich sind, hängt vom Geschäftsmodell und einem tatsächlichen lokalen Standortbezug ab.", en: "Fully linked NAP data was not detected. Whether it is appropriate depends on the business model and a genuine local presence." },
  },
  schemalocal: {
    priority: 56,
    kind: "context",
    strength: { de: "Ein passender lokaler Unternehmenstyp ist strukturiert ausgezeichnet.", en: "An appropriate local business type is represented in structured data." },
    opportunity: { de: "LocalBusiness-Markup wurde nicht erkannt. Ob diese Auszeichnung sinnvoll ist, hängt vom Geschäftsmodell und lokalen Bezug des Unternehmens ab.", en: "LocalBusiness markup was not detected. Whether this is appropriate depends on the organisation's business model and genuine local relevance." },
  },
};

const scoreBandFor = (score: number): ScoreBand => {
  if (score >= 90) return "very-high";
  if (score >= 75) return "high";
  if (score >= 50) return "medium";
  if (score >= 25) return "low";
  return "very-low";
};

const bandCopy: Record<ScanLocale, Record<ScoreBand, { label: string; summary: string }>> = {
  de: {
    "very-high": { label: "Sehr hohe technische Readiness", summary: "Ihre Website verfügt bereits über eine sehr starke technische Grundlage für AI Search." },
    high: { label: "Gute technische Readiness", summary: "Ihre Website bringt bereits viele wichtige technische Voraussetzungen für AI Search mit. In einigen Bereichen besteht noch gezieltes Optimierungspotenzial." },
    medium: { label: "Mittlere technische Readiness", summary: "Wichtige Grundlagen sind vorhanden. Gleichzeitig können mehrere technische Signale für AI Search noch verbessert werden." },
    low: { label: "Geringe technische Readiness", summary: "Bei Ihrer Website bestehen noch deutliche technische Lücken für AI Search. Einige grundlegende Voraussetzungen sind vorhanden, mehrere zentrale Signale fehlen jedoch." },
    "very-low": { label: "Sehr geringe technische Readiness", summary: "Der Check zeigt grundlegenden technischen Handlungsbedarf. Mehrere Voraussetzungen für Crawlbarkeit, Maschinenlesbarkeit oder Vertrauenssignale sind aktuell noch nicht ausreichend vorhanden." },
  },
  en: {
    "very-high": { label: "Very high technical readiness", summary: "Your website already has a very strong technical foundation for AI search." },
    high: { label: "Good technical readiness", summary: "Your website already meets many important technical requirements for AI search. A few areas still offer focused room for improvement." },
    medium: { label: "Moderate technical readiness", summary: "Important foundations are in place. At the same time, several technical signals for AI search can still be improved." },
    low: { label: "Low technical readiness", summary: "Your website still has notable technical gaps for AI search. Some foundations are present, but several important signals are missing." },
    "very-low": { label: "Very low technical readiness", summary: "The check indicates fundamental technical work is needed. Several requirements for crawlability, machine readability or trust signals are not yet sufficiently in place." },
  },
};

const categoryFocus: Record<ScanLocale, Record<CategoryKey, { strong: string; weak: string }>> = {
  de: {
    ai: { strong: "Die Zugänglichkeit und Einordnung für KI-Crawler ist bereits sehr gut gelöst.", weak: "Bei AI-Readiness und Crawling besteht noch konkreter Handlungsbedarf." },
    data: { strong: "Datenarchitektur und Vertrauenssignale sind bereits sehr gut aufgestellt.", weak: "Bei Datenarchitektur und Vertrauenssignalen besteht noch konkreter Handlungsbedarf." },
    tech: { strong: "Die technische Basis und Absicherung ist bereits sehr gut aufgestellt.", weak: "Bei der technischen Basis und Security besteht noch konkreter Handlungsbedarf." },
  },
  en: {
    ai: { strong: "Access and interpretation for AI crawlers are already handled very well.", weak: "AI readiness and crawling still require focused attention." },
    data: { strong: "Data architecture and trust signals are already in very good shape.", weak: "Data architecture and trust signals still require focused attention." },
    tech: { strong: "The technical foundation and security are already in very good shape.", weak: "The technical foundation and security still require focused attention." },
  },
};

const asCategorySummary = (category: ScanCategory): CategorySummary => ({
  key: category.key,
  title: category.title,
  score: category.score,
  maxScore: category.maxScore,
  ratio: category.maxScore > 0 ? category.score / category.maxScore : 0,
});

const selectStrengths = (categories: ScanCategory[], locale: ScanLocale) => {
  const candidates = categories.flatMap((category) =>
    category.checks
      .filter((check) => check.status === "pass" && findingCopy[check.slug])
      .map((check) => ({ check, category: category.key, copy: findingCopy[check.slug] })),
  ).sort((a, b) => b.copy.priority - a.copy.priority || b.check.maxScore - a.check.maxScore);

  const selected: typeof candidates = [];
  const categoryCounts = new Map<CategoryKey, number>();
  for (const candidate of candidates) {
    if ((categoryCounts.get(candidate.category) ?? 0) >= 2) continue;
    selected.push(candidate);
    categoryCounts.set(candidate.category, (categoryCounts.get(candidate.category) ?? 0) + 1);
    if (selected.length === 4) break;
  }

  return selected.map(({ check, category, copy }) => ({
    slug: check.slug,
    category,
    title: check.title,
    text: copy.strength[locale],
    status: check.status,
    score: check.score,
    maxScore: check.maxScore,
  } satisfies InterpretedFinding));
};

const selectOpportunities = (categories: ScanCategory[], locale: ScanLocale) => {
  const statusWeight: Record<CheckStatus, number> = { fail: 2, warning: 1, pass: 0 };
  const kindWeight: Record<OpportunityKind, number> = { action: 3, potential: 2, context: 1 };
  return categories.flatMap((category) =>
    category.checks
      .filter((check) => check.status !== "pass" && findingCopy[check.slug])
      .map((check) => ({ check, category: category.key, copy: findingCopy[check.slug] })),
  ).sort((a, b) =>
    statusWeight[b.check.status] - statusWeight[a.check.status]
    || kindWeight[b.copy.kind] - kindWeight[a.copy.kind]
    || b.check.maxScore - a.check.maxScore
    || b.copy.priority - a.copy.priority,
  ).slice(0, 3).map(({ check, category, copy }) => ({
    slug: check.slug,
    category,
    title: check.title,
    text: copy.opportunity[locale],
    status: check.status,
    score: check.score,
    maxScore: check.maxScore,
    kind: copy.kind,
  } satisfies InterpretedFinding));
};

export const interpretScanResult = (
  scan: Pick<ScanResultCore, "score" | "categories">,
  locale: ScanLocale,
): ScanInterpretation => {
  const score = Math.max(0, Math.min(100, Math.round(scan.score)));
  const scoreBand = scoreBandFor(score);
  const categories = ([scan.categories.ai, scan.categories.data, scan.categories.tech] as ScanCategory[])
    .map(asCategorySummary);
  const strongestCategory = [...categories].sort((a, b) => b.ratio - a.ratio)[0];
  const weakestCategory = [...categories].sort((a, b) => a.ratio - b.ratio)[0];
  const overallRatio = score / 100;
  const base = bandCopy[locale][scoreBand];
  const clauses = [base.summary];

  if (overallRatio < 0.5 && strongestCategory.ratio >= 0.75) {
    clauses.push(categoryFocus[locale][strongestCategory.key].strong);
  }
  if (
    weakestCategory.ratio < 0.5
    && (overallRatio >= 0.65 || overallRatio - weakestCategory.ratio >= 0.18)
  ) {
    clauses.push(categoryFocus[locale][weakestCategory.key].weak);
  }

  return {
    scoreBand,
    readinessLabel: base.label,
    overallHeadline: base.label,
    overallSummary: clauses.join(" "),
    strongestCategory,
    weakestCategory,
    strengthsHeading: locale === "de"
      ? (score < 50 ? "Was bereits vorhanden ist" : "Was bereits gut funktioniert")
      : (score < 50 ? "What is already in place" : "What is already working well"),
    opportunitiesHeading: locale === "de" ? "Wo noch Potenzial besteht" : "Where there is room to improve",
    strengths: selectStrengths([scan.categories.ai, scan.categories.data, scan.categories.tech], locale),
    opportunities: selectOpportunities([scan.categories.ai, scan.categories.data, scan.categories.tech], locale),
  };
};

export const gradeForScore = (score: number) =>
  score >= 85 ? "A" : score >= 70 ? "B" : score >= 55 ? "C" : score >= 40 ? "D" : "E";
