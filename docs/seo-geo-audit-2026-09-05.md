# PATERNOGA SEO/GEO-Audit – Verifikation und Projektkontext

Stand: 2026-09-05
Scope: Repository-Prüfung des SEO-/GEO-Audits vom 2026-09-05 inklusive Scanner-, Formular-, Entity-, International-SEO-, Crawl-Control- und interner Verlinkungsprüfung.

Dieses Dokument ist der dauerhafte technische Kontext für spätere Agenten-Sessions. Die bestehende flache Informationsarchitektur, das visuelle System und die bewusste Trennung der Leistungsseiten bleiben verbindlich. Es handelt sich nicht um einen Relaunch- oder Redesign-Auftrag.

## 1. Bewusste Architektur

- `/geo-optimierung/` bleibt der thematische GEO-Hub mit den bestehenden Diagnose-, AI-Visibility-, Technik-/Content- und laufenden Optimierungsleistungen.
- `AI-Crawlability` und `Technische GEO-Optimierung` bleiben getrennt: Abrufbarkeit/Bots/Responses einerseits, breitere technische Semantik und maschinelle Verständlichkeit andererseits.
- `GEO Content` und `Content-Optimierung für AI-Suche` bleiben getrennt: neue Inhalte entwickeln (CREATE) gegenüber bestehende Inhalte verbessern (REFRESH).
- Die flache URL-Struktur und die DE/EN-Pendants werden nicht zugunsten einer tieferen URL-Hierarchie ersetzt.
- Breadcrumbs und interne Links folgen weiterhin der logischen Root-/Subtopic-/Leaf-Taxonomie aus `design.md`, auch wenn die öffentlichen URLs flach bleiben.

## 2. Tatsächlich bestätigte Befunde

### KI-Scanner

Der ursprüngliche Befund war im Code vorhanden. `src/components/AiCheck.astro` server-renderte Start-, Scan- und Ergebnisansicht gleichzeitig; Scan- und Ergebnisbereiche waren nur per `hidden` bzw. visueller Darstellung inaktiv. Ein `<template>` als Zwischenlösung war für Browser-/Accessibility-DOM sauber, wurde aber durch den konkreten einfachen HTML-/Text-Extractor ebenfalls als Textquelle gelesen. Damit war der Befund noch nicht vollständig behoben.

Die endgültige Lösung ist deshalb:

- Im initial ausgelieferten HTML befindet sich nur die Startansicht.
- Scan- und Ergebnisansicht werden aus der lokalisierten Konfiguration erst beim jeweiligen Client-State-Übergang erzeugt.
- Die Zustandsumschaltung ersetzt den Screen-Host mit genau einem aktiven Screen.
- Fehlertexte werden erst beim tatsächlichen Fehler in den DOM geschrieben.
- Die Submit-Delegation bleibt erhalten, damit die dynamisch erzeugten Formulare funktionieren.
- Die bestehende Reduced-Motion-Logik und die Fokusübergänge bleiben erhalten.

### Honeypot

Das Feld wurde zuvor mit dem sichtbaren maschinenlesbaren Begriff `Company fax` beschriftet. Der Spam-Schutz bleibt bestehen, aber das öffentliche Feld ist nun ein leeres, neutrales `formGuard`-Feld in einem `hidden`-/`aria-hidden`-Container mit `tabindex="-1"` und ohne sichtbare Beschriftung. Der API-Guard prüft weiterhin, ob ein Bot dieses Feld füllt.

### Search Intent und H1

Die Einstiegssemantik wurde nur an den betroffenen Seiten differenziert:

- GEO Audit: Messung/Diagnose der Sichtbarkeit in AI-Antworten.
- Prompt-Recherche: Fragen und Prompts, die potenzielle Kunden an AI-Systeme stellen.
- KI-Markenwahrnehmung: Beschreibung, Narrative und Wahrnehmung einer Marke durch AI-Systeme.

Die übergeordnete Seite `AI-Sichtbarkeit` war bereits als Sichtbarkeits-/Präsenzleistung erkennbar und wurde nicht unnötig umgeschrieben.

### Title-Suffixe

Die uneinheitlichen Suffixe wurden an den geprüften Ausnahmen auf `| PATERNOGA` vereinheitlicht, ohne die individuellen Primary Topics zu ersetzen. Der ausgeschriebene Organisationsname bleibt in Beschreibungen, Footer, Open Graph und Structured Data erhalten.

### Kontextuelle Links

Die bestehende Fachlink-Struktur war weitgehend vorhanden. Ergänzt wurde nur die natürliche Verbindung von `KI-Quellenanalyse` zu `GEO Content` und `Content-Optimierung für AI-Suche`, weil Quellenbefunde für beide nächsten Arbeitsschritte relevant sind. Bestehende Verknüpfungen zwischen GEO Audit, AI Visibility, Quellen-/Fakten-/Wahrnehmungsanalyse, Crawlability/Technik sowie Knowledge/Research wurden beibehalten.

## 3. Entity-Verifikation

Aktuelle zentrale Quelle: `src/content/contact-details.ts` und die zentrale SEO-Konfiguration.

- Organisation: `PATERNOGA / Paternoga SEO & GEO Studio`
- E-Mail: `kontakt@paternoga-seo-geo.de`
- Telefon: `+49 176 34374543`
- Standort und weitere Unternehmensangaben: ausschließlich aus den bereits vorhandenen aktuellen Projektquellen.

Die alten Werte `pascal.misoph@gmail.com` und `+49 152 06398390` wurden im relevanten Repository nicht gefunden – weder in Seiteninhalt, DE-/EN-Metadaten, JSON-LD, Organization-/Service-Schema, Open Graph, zentralen Kontaktdaten, Manifest-/Static-Quellen noch in den Crawl-Control-Dateien. Es wurde daher nichts künstlich geändert. Der Befund ist nach aktuellem Code-Stand sehr wahrscheinlich altes externes Index-/Cache-Lag.

## 4. Bereits korrekt – bewusst nicht umgebaut

- Service-Hub, flache Routen und DE/EN-Netzwerk sind vorhanden und logisch differenziert.
- `BreadcrumbList` ist in den zentralen Service-, Artikel- und Research-Schema-Generatoren vorhanden.
- JSON-LD enthält zentral verknüpfte `Organization`, `WebSite`, `WebPage`; Service-Seiten verwenden `Service`, Artikel/Knowledge `TechArticle`, die DAX-Studie zusätzlich `Dataset`.
- `BaseLayout.astro` emittiert Canonical, self-referential DE/EN-hreflang und `x-default` sowie konsistente Locale-Metadaten.
- `public/sitemap.xml` enthält den vollständigen geprüften DE/EN-Routenbestand; Canonicals und tatsächliche Routen stimmen damit überein.
- `public/robots.txt`, `public/llms.txt` und `public/llms-full.txt` sind vorhanden, aktuell und enthalten keine alten Entity-Daten. AI-Crawler werden nicht pauschal blockiert; die bestehende Content-Signal-Policy ist bewusst auf Such- und AI-Eingang/-Training ausgerichtet.
- Die Markdown-Content-Negotiation verwirft `template`, `script`, Formulare, versteckte Inhalte und weitere nicht redaktionelle DOM-Quellen.
- Die bestehende Research-/Knowledge-Verknüpfung zwischen Crawler-Guide, DAX-Studie und `AI-Crawlability` war bereits sinnvoll und wurde nicht künstlich erweitert.

## 5. Persistenter Research-Backlog (P2B)

**Nur Backlog. Keine Recherche, keine Studie, keine Datenerhebung und keine neuen Research-Seiten wurden im Rahmen des Audits gestartet oder veröffentlicht.** Ohne einen späteren expliziten Auftrag darf daraus keine Research-Arbeit abgeleitet werden.

### Technische Zugänglichkeit und Markt

- AI-Crawler Readiness Mittelstand – Benchmark der technischen AI-Crawler-Zugänglichkeit deutscher mittelständischer Unternehmen.
- GEO-Agenturen Deutschland – Markt-/Methodenvergleich zu angebotenen GEO-Leistungen, Methoden und Claims.

### Quellen, Zitate und Antwortsysteme

- AI Citation Source Study – Vergleich, wie häufig ChatGPT, Perplexity und andere Systeme Unternehmenswebsites gegenüber Drittquellen verwenden.
- Google AI Overviews B2B Deutschland – deutsche B2B-Suchanfragen, Auftreten von AI Overviews und genutzte Quellen.
- Citation Gap Study – zitierte Quellen einer Marke gegenüber relevanten, aber fehlenden Quellen.

### Branchen, lokale Unternehmen und Prompts

- GEO Visibility Benchmark deutscher SaaS-Unternehmen.
- AI Search Local Business Study.
- Prompt Landscape Studies für konkrete Branchen und AI-Search-Fragen.

### Wahrnehmung und Markenbeschreibung

- Brand Perception Benchmarks – Konsistenz, Narrative und Unterschiede in der Beschreibung von Unternehmen durch verschiedene AI-Systeme.

### Leitplanken für eine spätere Beauftragung

Eine spätere Studie braucht eine explizite Forschungsfrage, dokumentierte Stichprobe, Methodik, Erhebungszeitpunkt, Primärquellen, Rohdaten, Limitierungen sowie eine klare Trennung von Beobachtung und Interpretation. Keine generischen SEO-Artikel, synthetischen Ergebnisse oder selbstbegünstigenden Rankings als Ersatz veröffentlichen.

## 6. Validierung am 2026-09-05

Die finale Ausführung war erfolgreich:

- `npm run verify` – bestanden: Static Smoke, Crawler-Policy, Security-Header, Production Build, SEO-Validator und **121/121** Browser-/Content-Tests.
- `npm run test:unit` – bestanden: **9/9** Unit-Tests.
- Der Raw-HTML-Test prüft DE und EN direkt auf fehlende inaktive Screens und widersprüchliche Start-/Fehler-/Ergebnistexte.
- Der Browser-Test prüft initialen Startzustand, absichtlichen Fehler mit Rückfokus, laufenden Scan und Ergebniszustand jeweils exklusiv sowie Ergebnisfokus und keine Page-Runtime-Fehler.

Die geprüften Kriterien waren:

- Astro-/Type-Check, Static Smoke Check, Production Build und vorhandene Unit-Tests.
- Crawler-Policy, SEO-Routen-/Metadata-/Canonical-/hreflang-Prüfung und Security-Header-Prüfung.
- DE- und EN-Homepage: Raw HTML ohne inaktive Scannerzustände; normaler Text-Extractor initial nur Startzustand; Markdown ohne Scanner-Rauschen.
- Browser: Fehler-, Scan- und Ergebniszustand jeweils exklusiv; kein Hydration-/Runtime-Fehler; Fokus auf URL-Feld, Ergebnis-E-Mail und Freischaltungsbestätigung; Formularfluss und Ergebnisfreischaltung.
- Responsive/Reduced-Motion-Prüfung der angefassten Scanner- und Formularbereiche ohne Layout- oder Animationsregression.

## 7. Noch offen nach dieser Arbeit

- Nach dem späteren Deployment sollte der konkrete externe Audit-/Text-Extractor erneut gegen die Live-Auslieferung laufen. Dabei ist insbesondere zu prüfen, dass kein CDN-/Caching-Layer altes HTML ausliefert.
- Falls alte E-Mail-/Telefonwerte extern weiter auftauchen, sollte die Bereinigung über die jeweiligen Index-/Cache-Aktualisierungswege erfolgen; im aktuellen Repository gibt es dafür keinen technischen Fund.
