# PATERNOGA SEO/GEO – nächste Schritte

Stand: 2026-09-05
Status: laufender Projektkontext
Quelle: priorisierte nächste Schritte nach dem Production-Deployment des SEO-/GEO-Audit-Fixes.

Dieses Dokument ist die fortlaufend zu pflegende Arbeitsroadmap. Es beschreibt die Themen, die PATERNOGA als Nächstes abarbeiten will. Es ist kein Auftrag, alle Punkte in einer Session auszuführen.

## Aktueller Production-Kontext

- Der verifizierte Audit-Fix ist auf Production deployed.
- Release-Commit: `61f1c04` (`fix: harden scanner and entity signals`).
- Die Live-Domain `https://www.paternoga-seo-geo.de/` antwortet weiterhin erfolgreich über Vercel.
- Der Scanner-P0-Fix ist auf der Live-Auslieferung bestätigt: initial nur Startzustand; Scan-, Fehler- und Ergebniszustände entstehen erst im Client-State.
- Der unabhängige externe Re-Crawl ist der nächste fachliche Abschlusscheck und wurde mit dieser Roadmap noch nicht ausgeführt.

## Pflege-Regel für künftige Agenten-Sessions

1. Zu Beginn einer SEO-/GEO-Arbeit diese Datei und `docs/geo-visibility-baseline.md` lesen.
2. Immer nur den nächsten freigegebenen Arbeitsblock bearbeiten, sofern der Nutzer keinen anderen Punkt ausdrücklich priorisiert.
3. Nach Abschluss eines Blocks hier Status, Datum, relevante URLs/Queries, Ergebnis, offene Punkte und – bei Codeänderungen – Commit oder Deployment ergänzen.
4. Einen Punkt erst auf `DONE` setzen, wenn die dafür genannten Nachweise vorliegen. Bei externer Abhängigkeit `BLOCKED` mit dem konkreten Zugang oder fehlenden Nachweis eintragen.
5. Keine Ergebnisse, Rankings, AI-Erwähnungen, Zitationen oder Research-Daten schätzen oder ausfüllen. Nicht ausgeführte Punkte bleiben sichtbar.
6. Zugriffe auf GSC, externe AI-Systeme, Outreach oder andere externe Konten nur mit passender Autorisierung und einem konkreten Auftrag durchführen.

## Priorisierte Reihenfolge

| Nr. | Arbeitsblock | Status | Ziel / Nachweis |
|---:|---|---|---|
| 1 | Unabhängiger Post-Deployment-Re-Crawl | `NEXT` | Externer Crawl der Live-Seite mit Scanner-, H1-, Title-, Link- und Entity-Prüfung. |
| 2 | Indexierung beschleunigen und alten Cache bereinigen | `PLANNED` | GSC-URL-Prüfung und gezielte erneute Indexierungsanfragen für die wichtigsten geänderten DE-/EN-URLs; anschließend Index-/Cache-Status dokumentieren. |
| 3 | GEO-/SEO-T0-Baseline | `PLANNED` | Versioniertes Query-/Prompt-Panel, heutiger Ranking-/Mention-/Citation-Stand und definierte Messpunkte nach 2, 4 und 8 Wochen. |
| 4 | Einen Research-Case auswählen und die Research-Roadmap aktivieren | `PLANNED` | Nach T0 eine Studie auswählen, sauber abgrenzen und separat beauftragen; keine Forschung im Rahmen dieses Roadmap-Eintrags. |
| 5 | Commercial Content gegen echte Suchintention prüfen | `PLANNED` | Chirurgischer SERP-/Content-Gap-Audit für ungefähr 58 wichtigste Money Pages, ohne pauschale Umschreibungen. |
| 6 | Distribution aufbauen | `PLANNED` | Nach einem realen Research-Asset Website-, LinkedIn-, Video-, Chart- und Outreach-Formate aus einem freigegebenen Datensatz ableiten. |
| 7 | Monitoring automatisieren | `PLANNED` | Nach T0 und Query-Definition regelmäßige Messung von Rankings, Indexierung, AI-Zitationen, Mentions und Veränderungen gegenüber T0. |

## 1. Unabhängiger Post-Deployment-Re-Crawl

Der Crawl soll von einem unabhängigen externen/textbasierten Weg erfolgen, nicht nur über lokale Tests oder den Browser. Zu prüfen und zu archivieren sind mindestens:

- Homepage DE und EN als Raw HTML und als normal extrahierter Text.
- Markdown-/Content-Negotiation.
- `Wartet`/`Waiting`, `0 / 100`, Fehler-, Scan-, Ergebnis- und Freischaltungstexte im initialen HTML.
- Scanner-Zustandswechsel im Browser, Fokusführung, Formularfluss und mögliche Runtime-/Hydration-Fehler.
- H1, Title, Canonical und hreflang auf den geänderten Leistungsseiten.
- Kontextuelle interne Links innerhalb der Fachinhalte.
- Aktuelle PATERNOGA-E-Mail, Telefonnummer und Organisationssignale; keine alten Entity-Werte.
- `robots.txt`, `sitemap.xml`, `llms.txt` und `llms-full.txt` inklusive Cache-/Response-Headern.

Der Re-Crawl soll Werkzeug, User-Agent, Datum/Uhrzeit, Content-Negotiation, Cache-Header und relevante Auszüge dokumentieren. Bei einem Widerspruch zuerst CDN-/Cache-Layer und Auslieferung prüfen; keine vorschnellen Inhaltsänderungen vornehmen.

## 2. Indexierung und Cache-Bereinigung

Nach verfügbarem Zugang zu Google Search Console die URL Inspection für folgende geänderte Kernseiten ausführen und nur dort eine erneute Indexierung anstoßen, wo der Status dies sinnvoll unterstützt:

- DE: `/`, `/geo-audit/`, `/prompt-recherche/`, `/ki-markenwahrnehmung/`, `/impressum/`, `/datenschutz/`
- EN: `/en/`, `/en/geo-audit/`, `/en/prompt-research/`, `/en/ai-brand-perception/`, `/en/legal-notice/`, `/en/privacy/`

Dabei Indexierungsstatus, zuletzt gecrawlte Version, erkannte Canonical-URL und eventuelle alte E-Mail-/Telefonwerte protokollieren. Wiederholte Anfragen sind kein Ersatz für stabile Inhalte; keine Garantie auf sofortige Indexaktualisierung behaupten.

## 3. GEO-/SEO-T0-Baseline

Die bestehende Methodik in `docs/geo-visibility-baseline.md` ist die Grundlage. Das dortige Panel wird um die neue Zielsetzung ergänzt, nicht durch einen unkontrollierten zweiten Messstandard ersetzt.

Für T0 ist ein versioniertes Panel von ungefähr 20–30 Suchanfragen und Prompts vorgesehen, darunter beispielsweise:

- `GEO Agentur Deutschland`
- `GEO Agentur Dresden`
- `AI Visibility Agentur`
- `Generative Engine Optimization Deutschland`
- `KI Sichtbarkeit Unternehmen`
- problemorientierte Fragen zur Messung, zu Quellen, zu ChatGPT-Sichtbarkeit und zu AI-Crawlern

Pro Beobachtung festhalten: Datum, Sprache/Markt, Plattform und Modus, exakte Anfrage, PATERNOGA-Erwähnung, PATERNOGA-URL/Zitation, zitierte Quelle und Kontext, genannte Wettbewerber, Reproduzierbarkeit und zulässiger Screenshot/Export. Google-Ranking, AI-Erwähnung, Quelle/Zitation und qualifizierte Anfrage bleiben getrennte Messgrößen; kein künstlicher Universal-Score.

Die Folgemessungen sind als feste Vergleichspunkte nach 2, 4 und 8 Wochen vorgesehen. Änderungen zunächst als Beobachtung behandeln und nicht ohne First-Party-Evidenz kausal erklären.

## 4. Research-Roadmap aktivieren

Die Research-Ebene ist als nächste strategische Arbeitsphase vorgemerkt. Im Auswahlprozess stehen insbesondere:

1. `AI Citation Source Study Deutschland` – bevorzugter Kandidat: Welche Quellen werden von verschiedenen AI-Systemen für Unternehmensinformationen verwendet?
2. `GEO Visibility Benchmark deutscher B2B-Unternehmen` – Alternative mit Benchmark-/Segmentfokus.

Weitere dokumentierte Themen bleiben im Research-Backlog des Audits: AI-Crawler Readiness Mittelstand, GEO-Agenturen Deutschland, Google AI Overviews B2B Deutschland, Citation Gap, SaaS-, Local-Business-, Prompt-Landscape- und Brand-Perception-Benchmarks.

**Wichtig:** In dieser Aktualisierung wurden keine Studien gestartet, keine Daten erhoben, keine externen Recherchen durchgeführt und keine Research-Seiten veröffentlicht. „Roadmap aktivieren“ bedeutet hier: als nächsten auswählbaren Arbeitsblock priorisieren. Die tatsächliche Ausführung braucht später einen expliziten Auftrag für einen ausgewählten Case mit Forschungsfrage, Scope, Methodik, Stichprobe, Quellen, Rohdaten, Limitierungen und Publikationsfreigabe.

## 5. Commercial Content / SERP- und Content-Gap-Audit

Nach T0 wird jede der ungefähr 58 wichtigsten Money Pages einzeln gegen ihre tatsächliche Zielintention geprüft:

- Für welche konkrete Suchanfrage und welchen Buyer Job soll die URL gewinnen?
- Was rankt aktuell und welcher Seitentyp dominiert?
- Welche Antwort, Evidenz, Entität, interne Verbindung oder Conversion-Information fehlt gegenüber relevanten Gewinnern?
- Ist eine präzise Ergänzung ausreichend oder wäre eine URL-/Intent-Entscheidung nötig?

Die bestehende Architektur, flache URL-Struktur und Trennung der Leistungsseiten bleiben die Ausgangsbasis. Keine massenhaften Text-Rewrites, kein Keyword-Stuffing und keine neue Route ohne eigenständige Suchintention.

## 6. Distribution

Distribution beginnt erst nach einem realen, freigegebenen Research-Asset. Aus einer Studie sollen – passend zu den Daten – abgeleitet werden:

- eine zitierfähige Website-Research-Seite,
- LinkedIn-Posts und gegebenenfalls ein Longtail-Test,
- YouTube-/Short-Form-Varianten,
- klare Zitate, Tabellen oder Charts,
- gezieltes Outreach an relevante Quellen und Branchenmedien.

Keine synthetischen Charts, Testimonials, Cases, Zahlen oder Research-Ergebnisse als Platzhalter erzeugen.

## 7. Monitoring

Nach T0 und einem definierten Query-/Prompt-Panel soll das Monitoring schrittweise automatisiert werden. Der Messplan soll mindestens Rankings/Impressions, neue Indexierung, AI-Mentions, AI-Zitationen/Quellen, Brand-Nennungen, Landing Pages und die Veränderung gegenüber T0 trennen. Erst danach werden Frequenz, Datenquellen, Benachrichtigungen und ein wiederholbarer 2-/4-/8-Wochen-Lauf festgelegt.

## Änderungslog

| Datum | Änderung | Nachweis |
|---|---|---|
| 2026-09-05 | Die vom Nutzer priorisierte Reihenfolge wurde als lebende Roadmap aufgenommen. Post-Deployment-Re-Crawl ist `NEXT`; T0, Research-Auswahl, Commercial Content, Distribution und Monitoring sind geplant. | Keine Research-, Indexierungs- oder Outreach-Aktion in dieser Aktualisierung. |
