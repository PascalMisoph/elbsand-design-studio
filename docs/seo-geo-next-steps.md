# PATERNOGA SEO/GEO – nächste Schritte

Stand: 2026-09-06
Status: laufender Projektkontext
Revenue Sprint 1: Angebote, direkte Formulare und Attribution sind implementiert; Release-Validierung läuft. Nachweise und aktueller Deploymentstatus: [revenue-sprint-1-2026-09-06.md](revenue-sprint-1-2026-09-06.md). Dresden bleibt nächster Seiten-Sprint, Research `PRIORITIZED_NOT_STARTED`.
Quelle: priorisierte nächste Schritte nach dem Production-Deployment des SEO-/GEO-Audit-Fixes.

Dieses Dokument ist die fortlaufend zu pflegende Arbeitsroadmap. Es beschreibt die Themen, die PATERNOGA als Nächstes abarbeiten will. Es ist kein Auftrag, alle Punkte in einer Session auszuführen.

## Aktueller Production-Kontext

- Der verifizierte Audit-Fix ist auf Production deployed.
- Release-Commit: `61f1c04` (`fix: harden scanner and entity signals`).
- Die Live-Domain `https://www.paternoga-seo-geo.de/` antwortet weiterhin erfolgreich über Vercel.
- Der Scanner-P0-Fix ist auf der Live-Auslieferung bestätigt: initial nur Startzustand; Scan-, Fehler- und Ergebniszustände entstehen erst im Client-State.
- Der externe Re-Crawl ist inzwischen abgeschlossen: `docs/seo-geo-live-crawl.json` und `docs/seo-geo-project-state.json` dokumentieren am 05.09.2026 um 20:41 UTC 40 Routen ohne Seiten-/Scanner-/Alt-Entity-Fund. Der Nutzer hat den technischen Audit ausdrücklich geschlossen. Kein erneuter Voll-Audit als Growth-Voraussetzung.

## Aktive Growth-Reihenfolge ab 06.09.2026

Die beauftragte Market-/Buyer-/Revenue-Recherche ist in [growth-strategy-2026-09-06.md](growth-strategy-2026-09-06.md) abgeschlossen; Matrizen, 18 Experimente, Evidenzgrenzen und maschinenlesbarer Status sind dort verlinkt. Die folgende Reihenfolge ersetzt die ältere Priorisierung für Growth. Revenue Sprint 1 setzt die ersten beiden Blöcke um; externe Kommunikation ist weiterhin nicht erfolgt. Der verbindliche Release-Status steht im oben verlinkten Sprintbericht.

| Reihenfolge | nächster Arbeitsblock | Status | Abnahme / Abhängigkeit |
|---|---|---|---|
| 1 | Attribution und kommerziellen T0 vervollständigen | `IMPLEMENTED_T0_PARTIAL` | Angebots-/Quellenkontext bis zur internen Lead-Mail; kein neues CRM. Reale Leads, Umsatz, GBP und Consumer-AI bleiben ungemessen. |
| 2 | begrenztes Audit-/Seiten-Sprint-Angebot und direkten Audit-CTA umsetzen | `IMPLEMENTED` | direkte DE/EN-Angebote und eigene Arbeitsprobe; Release-Nachweis im Sprintbericht. Öffentliche Preise weiter auf Anfrage. |
| 3 | warme Käufer-/Partnerbeziehungen und fünf manuelle Snapshots | `PLANNED` | nur bei gesondertem Ausführungsauftrag; begrenzte Lieferzeit und echtes Buyer-Signal. |
| 4 | eine SEO-Dresden-Kaufseite, nationale Kaufseite und Anbieterprofile | `PLANNED` | Design-/DE-EN-Parität, echter Standort, keine GEO-Dresden-Duplikatroute. |
| 5 | bezahlten Sprint liefern, Proof und passende Betreuung entwickeln | `PLANNED` | reale Daten, Liefermarge, Freigabe für jede öffentliche Fallbeschreibung. |
| 6 | vorhandene DAX-Daten und Pilot distribuieren | `PLANNED` | technische Konfiguration nicht als AI-Sichtbarkeit ausgeben; zuerst kleiner Distributionstest. |
| 7 | Messwellen und ausgewählte Buyer-Source-Studie | `PLANNED_CONDITIONAL` | fixes Panel, reale Zugänge; Studie erst nach gesondertem Auftrag und Distributions-Gate. |

GSC-Beobachtung: 42 Property-Impressionen / 6 Klicks im Export bis 05.09.; AI-Mentions/Citations sind `null`, nicht null Prozent. Research-Auswahl: kleine Buyer-Source-Studie und dokumentierter realer Interventionscase. Keine neue Forschungsdatenerhebung in dieser Phase.

## Pflege-Regel für künftige Agenten-Sessions

1. Zu Beginn einer SEO-/GEO-Arbeit diese Datei und `docs/geo-visibility-baseline.md` lesen.
2. Immer nur den nächsten freigegebenen Arbeitsblock bearbeiten, sofern der Nutzer keinen anderen Punkt ausdrücklich priorisiert.
3. Nach Abschluss eines Blocks hier Status, Datum, relevante URLs/Queries, Ergebnis, offene Punkte und – bei Codeänderungen – Commit oder Deployment ergänzen.
4. Einen Punkt erst auf `DONE` setzen, wenn die dafür genannten Nachweise vorliegen. Bei externer Abhängigkeit `BLOCKED` mit dem konkreten Zugang oder fehlenden Nachweis eintragen.
5. Keine Ergebnisse, Rankings, AI-Erwähnungen, Zitationen oder Research-Daten schätzen oder ausfüllen. Nicht ausgeführte Punkte bleiben sichtbar.
6. Zugriffe auf GSC, externe AI-Systeme, Outreach oder andere externe Konten nur mit passender Autorisierung und einem konkreten Auftrag durchführen.

## Historische Audit-Reihenfolge (durch Growth-Reihenfolge oben ergänzt)

| Nr. | Arbeitsblock | Status | Ziel / Nachweis |
|---:|---|---|---|
| 1 | Unabhängiger Post-Deployment-Re-Crawl | `DONE` | Vorhandener 40-Routen-Live-Crawl vom 05.09.2026; technische Phase vom Nutzer geschlossen. |
| 2 | Indexierung beschleunigen und alten Cache bereinigen | `PLANNED` | GSC-URL-Prüfung und gezielte erneute Indexierungsanfragen für die wichtigsten geänderten DE-/EN-URLs; anschließend Index-/Cache-Status dokumentieren. |
| 3 | GEO-/SEO-T0-Baseline | `PARTIAL` | GSC-Export und erweitertes Panel vorhanden; direkte Consumer-AI-/Google-Local-Messung offen. |
| 4 | Einen Research-Case auswählen und die Research-Roadmap aktivieren | `PRIORITIZED_NOT_STARTED` | Auswahl im Growth-Dokument; keine neue Studie erhoben oder veröffentlicht. |
| 5 | Commercial Content gegen echte Suchintention prüfen | `RESEARCH_DONE` | Acht Live-Einstiege geprüft, vier priorisierte Kaufseiten plus Delivery-Netz definiert; keine Produktionsänderung. |
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

Die neue Growth-Recherche ersetzt den unscharfen früheren Umfang durch vier priorisierte Kaufseiten; fachliche Delivery-Module bleiben erhalten. Vor Umsetzung wird jede betroffene Seite einzeln gegen ihre tatsächliche Zielintention geprüft:

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
| 2026-09-06 | Growth-Research abgeschlossen, Ausführungsreihenfolge nach Umsatznähe neu geordnet; vorhandenen Re-Crawl-Abschluss nachgetragen. GSC-T0 teilweise belegt, Consumer-AI-/Local-/Revenue-Daten offen. | `growth-strategy-2026-09-06.md`, `growth-gsc-t0-2026-09-05.json`, `growth-state-2026-09-06.json`; keine Produktion/Outreach/Studienpublikation. |
| 2026-09-05 | Die vom Nutzer priorisierte Reihenfolge wurde als lebende Roadmap aufgenommen. Post-Deployment-Re-Crawl ist `NEXT`; T0, Research-Auswahl, Commercial Content, Distribution und Monitoring sind geplant. | Keine Research-, Indexierungs- oder Outreach-Aktion in dieser Aktualisierung. |
