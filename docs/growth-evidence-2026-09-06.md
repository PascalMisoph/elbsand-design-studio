# PATERNOGA Growth: Evidenzregister und offene Messungen

Recherchestand: 05.09.2026 UTC / Abschluss 06.09.2026 Europe/Berlin. Dies ist eine kommerzielle Desk-Research, kein neuer technischer Audit und keine veröffentlichte Marktstudie. [Entscheidungsdokument](growth-strategy-2026-09-06.md).

## First-Party und Website

| ID | Quelle / Methode | festgestellter Sachverhalt | Grenze |
|---|---|---|---|
| F1 | [GSC-Rohexport](growth-gsc-t0-2026-09-05.json), read-only Connector, `sc-domain:paternoga-seo-geo.de`, 28 Tage, date/page/query+page | drei unveränderte Antwortdatensätze; 42 Property-Impressions, 6 Klicks; 96 Seiten-Impressions; 19 offengelegte Query-/Seiten-Impressions | Abruf einschließlich aktueller Tage; kein vollständiger Brand-/Nonbrand-Split |
| F2 | [Live-Content-Crawl](growth-live-content-2026-09-05.json), Headless Chromium/de-DE, DOM nach `domcontentloaded` | acht ausgewählte Live-Seiten HTTP 200; H1, Links und Main-Text erfasst | kein Interaktionstest; anfangs geschlossene FAQ-Antworten nicht vollständig in `innerText` |
| F3 | `src/components/NationalGeoAgencyPage.astro` | bisher allgemeiner Fit für erklärungsbedürftige Leistungen; nationale Zusammenarbeit | keine konkrete Branchen- oder Umsatzkompetenz ableitbar |
| F4 | `src/pages/api/contact.ts:264–265`, `ContactRecord` | nur `ai-check`/`geo-audit` bleiben spezielle Quellen; andere Sources werden `contact-form`; kein eigenes Landing-/UTM-Feld im betrachteten Record | keine vollständige Analyse externer CRM-/Analytics-Systeme |
| F5 | `src/content/service-pages.ts`, Live `/geo-audit/` | Audit-Hero führt zum kostenlosen technischen Check; Auditmethodik und Illustrationshinweis vorhanden | keine Behauptung, dass die Anfrage funktional defekt ist |
| F6 | `src/components/AiCheck.astro`, `src/lib/ai-readiness.ts` | vorhandener Check mit technischem Ergebnis und Ergebnisfreischaltung | keine echte AI-Reply-Stichprobe durch diesen Scanner |
| F7 | [DAX-Studie](https://www.paternoga-seo-geo.de/research/ki-crawler-readiness-dax-40-2026/) per Browser und Projektquellen | publiziertes eigenes Datenasset mit Rohdaten/Methodik/Limitierungen; Erhebung 30.08.2026 | keine neue Erhebungswelle gestartet; keine tatsächliche Bot-/Citation-Messung |
| F8 | `AGENTS.md`, Audit-/Next-Steps-/Visibility-/National-Acquisition-Dokumente, `seo-geo-project-state.json` | abgeschlossene 40-Routen-Verifikation bereits dokumentiert; alte Next-Steps-Datei hielt Re-Crawl noch für NEXT | Roadmap wird mit vorhandenem Abschlussnachweis konsistent gemacht |

## Nachfrage- und Preisquellen

| ID | direktes Dokument | Beobachtung | Gewichtung |
|---|---|---|---|
| D1 | [OSG GEO Agentur](https://www.performance-suite.io/keyword-db/de-de/GEO-Agentur/) | aktuelle Tabelle und älterer Erklärungstext widersprechen sich; Zahlen im Hauptdokument | Toolanbieter mit Agenturinteresse; Erklärung nicht als Rohdaten auswerten |
| D2 | [OSG SEO Agentur Dresden](https://www.performance-suite.io/keyword-db/de-de/SEO-Agentur-Dresden/) | 480 / 8,50 € öffentlich; Juni-Datum; Ads-/Local-Features markiert | primäre Veröffentlichung dieser Toolwerte, keine Google-Planner-Eigenabfrage |
| D3 | [OSG Varianten](https://www.performance-suite.io/keyword-db/de-de/seo-agentur-dresden/) | lokale Synonyme vorhanden; abweichender CPC bei SEO Dresden | gemeinsame Datenfamilie mit D2, keine unabhängige Bestätigung |
| D4 | [OSG Beratung Dresden](https://www.performance-suite.io/keyword-db/de-de/seo-beratung-dresden/) | Difficulty 6; Tabelle nennt mehrere etablierte lokale Anbieter | Difficulty ist keine Abschluss-/Rankingwahrscheinlichkeit |
| D5 | [OSG SEO Dresden](https://www.performance-suite.io/keyword-db/de-de/SEO-Dresden/) | ältere Erklärung liefert 320 / 8,94 € | Datum/Generierung uneinheitlich; keine saisonale Prognose übernehmen |
| D6 | [AUTIMA](https://autima.de/blog/geo-agentur) | nennt DataForSEO/Google-Ads-Zahlen zu drei Begriffen, Mai 2026 | vermittelte Datenquelle; eigene Kausal-/Zeithorizontclaims nicht übernommen |
| D7 | [EchoWi Marktbeobachtung](https://echowi.ai/de/blog/wer-schreibt-die-geo-agentur-rankings/) | veröffentlicht eigene Google-/AIO-Messungen zu Agenturqueries; nennt 1.000 Volumen / Difficulty 5 | verkauft selbst GEO; Fremdmessung, kein PATERNOGA-T0; Plattform-/Quellenstand kann wechseln |
| D8 | [Peilwerk Preise](https://peilwerk.de/leistungen/preise), [Leistungsumfang](https://peilwerk.de/leistungen) | konkrete Preis-/Scope-/Dauerangaben | Eigenpreise brauchbar; aggregierte „Marktpreise“ nicht als repräsentativ übernommen |
| D9 | [experics Pricing](https://www.experics.de/pricing) | Beratungs-/Umsetzungspakete mit Mindestlaufzeit | Listenangebot, keine Transaktionsdaten |
| D10 | [siteway Audit](https://www.siteway.de/expertise/geo-audit/) | eigenständig buchbare Diagnose, Lieferzeit und Ergebnis benannt | zeigt Angebotsform, keine eigene Nachfragezahl |
| D11 | [Ready2GEO](https://ready2geo.com/de/geo-audit), [SEOmator](https://seomator.com/de/ai-brand-visibility-checker) | kostenlose technische/aggregierte Prüftools als Substitute | Datenumfang und Märkte unterscheiden sich; nicht als DE-Käufermessung verwenden |

## Wettbewerber, Käuferquellen und Distribution

| ID | Quelle | Bedeutung für die Entscheidung | Bias / Grenze |
|---|---|---|---|
| C1 | [Engine Native](https://www.geoagenturen.de/), [Einreichung](https://www.geoagenturen.de/submit) | Anbieter plus Marktquelle, Aufnahmeweg vorhanden | selbst Anbieter; Profil ist kein unabhängiger Qualitätsbeweis |
| C2 | [getSichtbar](https://www.getsichtbar.com/) | öffentlich benannte Projekte und Zeiträume als Proofbenchmark | eigener Outcomebericht, nicht von uns über Kundenanalytics validiert |
| C3 | [getSichtbar Dresden](https://www.getsichtbar.com/geo-agentur/dresden) | Öffnen führte zur allgemeinen Agenturübersicht | Abweichung zu Suchsnippet; keine dauerhafte Redirectursache diagnostiziert |
| C4 | [Sichtlabs](https://sichtlabs.de/) | dokumentierte B2B-/Boutique-Positionierung | methodische und quantitative Eigenclaims nicht als Marktfakten genutzt |
| C5 | [Suchhelden](https://www.suchhelden.de/geo-agentur.php) | breite Anbieter-/Proof-Präsenz | Testimonials oft kanalübergreifend; keine isolierte GEO-Wirkung belegt |
| C6 | [DREIKON Dresden](https://www.dreikon.de/lp/geo-agentur-dresden/) | lokale Suchintention wird von externem Standort bedient | Footer nennt Münster; Seite allein beweist keinen lokalen Rank |
| C7 | [WEBneo SEO Dresden](https://www.webneo.de/seo-dresden/), [clicks](https://clicks.digital/seo-dresden) | tatsächliche lokale etablierte Angebotskonkurrenz | Team-/Projekterfahrung sind Eigendarstellungen; nicht nachgeprüfte Erfolgsclaims |
| C8 | [onFire](https://www.onfiredigital.de/suchmaschinenoptimierung/), [Self-Selling-Solutions](https://self-selling-solutions.de/seo-agentur-dresden/), [Pallax](https://pallax-media.de/seo-agentur-dresden/) | weitere lokale Beratung, Umsetzung und Anfragewege | keine quantifizierten Marktanteile |
| C9 | [Gerlach](https://gerlach.media/geo-agentur/) | Industrie-/B2B-Spezialist als zusätzlicher Wettbewerber | Eigenpositionierung; nicht als AI-Empfehlung protokolliert |
| C10 | [Agenturtipp Dresden](https://www.agenturtipp.de/seo-agenturen/dresden/) | konkrete Auswahloberfläche mit Anbieter-/Bewertungsinformationen | Portalaggregation und eigene Methodik; „Dresden“ nicht mit Büro vor Ort gleichsetzen |
| C11 | [SEO-united Dresden](https://www.seo-united.de/seo-agenturen/stadt/dresden/), [Eintrag](https://www.seo-united.de/seo-agenturen/eintragen/basic/) | stadtspezifische Providerpräsenz und klare Tarifunterschiede | Profil ist selbst eingereicht; Kosten und Websiteumfang beachten |
| C12 | [OMR WEBneo](https://omr.com/de/reviews/service/webneo) | externer Anbieterbeleg im Zielmarkt | Bewertungen können aus anderen Quellen aggregiert sein |
| C13 | [OMR/duwerk Research](https://omr.com/de/reviews/b2b/growthhub/wie-weit-sind-b2b-saas-unternehmen-in-dach-wirklich-mit-geo) | Originalinterviews, Partnerdistribution und B2B-Problemhinweise | kleine qualitative Auswahl, Anbieterkooperation; Prozentzahlen nicht auf DACH hochrechnen |
| C14 | [OMR GEO-Redaktion](https://omr.com/de/reviews/contenthub/category/generative-engine-optimization-geo) | konkrete Plattform für Fach-/Case-Inhalte | enthält auch Sponsored-Beiträge; redaktionell und bezahlt trennen |
| C15 | [Handelsblatt](https://www.handelsblatt.com/adv/firmen/beste-geo-agentur.html) | externe werbliche Anbieterpräsenz | Anzeige, keine unabhängige Empfehlung; kein Kauf empfohlen |
| C16 | [marktforschung-Vergleich](https://www.marktforschung.de/marktforschung/a/die-besten-geo-agenturen-2026-welche-spezialisierungen-setzen-sich-durch/) | Anbieterübersicht im Suchindex; Kennzeichnung vor Beitrag | keine gesicherte neutrale Vergleichsmethodik; Zahlung/Autorenschaft nicht separat nachgewiesen |
| C17 | [Silicon Saxony Kommunikation](https://silicon-saxony.de/arbeitskreise/kommunikation/) | konkreter Zugang zu Kommunikations-/Marketingthemen im regionalen Netzwerk | keine Mitgliedschaft/Einladung für PATERNOGA behauptet |
| C18 | [Richard Roth](https://richard-roth.com/fuer-agenturen/), [Contunda](https://contunda.de/leistungen/white-label-agentur/), [TechGlanz](https://techglanz.de/partner/) | kommerzielle Partner-/Zuliefererangebote existieren | Käuferreaktion und Marge für PATERNOGA unbewiesen |
| C19 | [Wingmen](https://wngmn.com/de/seo-geo/tech-audit/), [Aufgesang](https://www.aufgesang.de/seo/seo-audit/) | technisches SEO kann expliziter Kaufintent sein | keine generische Headterm-Erfolgschance ableiten |

## Primärquellen für Mess- und Wirkungsgrenzen

| ID | Quelle | verwendete Aussage |
|---|---|---|
| M1 | [Google: AI features](https://developers.google.com/search/docs/appearance/ai-features) | SEO-Grundlagen bleiben relevant, keine speziellen Zusatzdateien nötig; AI-Funktionen im Web-Performancebericht |
| M2 | [Google: Local ranking](https://support.google.com/business/answer/7091?hl=en) | Relevanz, Distanz, Bekanntheit; vollständige reale Angaben und Reviews können lokale Auswahl stützen |
| M3 | [Google: Aggregation](https://support.google.com/webmasters/answer/17011364?hl=en) | Seiten- und Propertyaggregat dürfen differieren; jüngste Daten können vorläufig sein |
| M4 | [Google: Queries](https://support.google.com/webmasters/answer/17011259?hl=en) | anonymisierte Queries fehlen in Tabellen; verbleibende Zeilen sind nicht die gesamte Nachfrage |
| M5 | [Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) | Zitationsdaten eigener unterstützter AI-Erfahrungen, keine plattformübergreifende Vollmessung |
| M6 | [Ahrefs: 75.000 Marken](https://ahrefs.com/blog/ai-brand-visibility-correlations/) | Korrelationen, selektierte etablierte Marken, keine Kausalgarantie für neue kleine Anbieter |

## Suchprotokoll: tatsächliche Abdeckung

Suchzugang: integrierter Web-Suchindex mit geöffneten Primärseiten. Deutsch formulierte Queries, aber keine kontrollierte Dresden-Geolokalisierung. Die Reihenfolge der gelieferten Ergebnisse wird nicht als Google-Ranking gespeichert. Querygruppen können mehrere Formulierungen enthalten; sie sind keine wiederholbare Ranking-Stichprobe.

| Gruppe | ausgeführte Formulierungen (Auswahl, exakt oder im selben Suchauftrag) | ausgewerteter Befund |
|---|---|---|
| National | `GEO Agentur Deutschland Audit Preise`; `GEO Agentur getSichtbar experics Engine Native`; `GEO Agentur DREIKON Suchhelden WEBneo` | Anbieter-/Angebotslandschaft |
| Lokal | `"SEO Agentur Dresden"`; `"SEO Beratung Dresden"`; `"GEO Agentur Dresden"`; `SEO Agentur Dresden WEBneo clicks digital` | lokale Konkurrenz plus Aggregatoren |
| Fachcluster | `GEO Optimierung`; `GEO Audit KI Sichtbarkeitsanalyse`; `KI Sichtbarkeit AI Visibility`; `KI SEO Agentur GEO SEO Generative Engine Optimization` | gemischte Information, Tools, Diagnose und Anbieterwahl |
| Baselinezahlen | `"GEO Agentur" "Suchvolumen"`; `"SEO Agentur Dresden" "480"`; `"GEO Audit" "243"`; gezielte OSG-Domainqueries | einzelne Bestätigungen/Widersprüche, keine unabhängige vollständige Keywordmatrix |
| Buyer | `Welche Agentur verbindet SEO und GEO für B2B Unternehmen Deutschland`; `Warum nennt ChatGPT mein Unternehmen nicht Agentur Analyse`; `GEO Audit Anbieter Deutschland Kosten Festpreis` | Auswahl-/Diagnose-Seitentypen; nicht AI-Antworten |
| Alternativen | `SEO GEO White Label Partner Agentur Deutschland`; `"Technisches SEO" Agentur Audit`; `"Website Relaunch" "SEO" Dresden`; `"SEO Agentur" Deutschland` | Partnerkanal, anlassbezogener SEO-Kauf |
| Entity | `"Paternoga" SEO GEO -site:paternoga-seo-geo.de`; `"Paternoga SEO" -site:paternoga-seo-geo.de` | keine eindeutige Studio-Fremdbestätigung im betrachteten Output; viele Namenskollisionen |
| Quellen | Handelsblatt/marktforschung/OMR, SEO-united Aufnahme, Agenturtipp, Silicon Saxony Kommunikation | konkrete erreichbare Plattformen und Bias |

## Offene Messaufträge, kein verdeckter Ersatz durch Schätzwerte

| Feld | hier versucht / verfügbar | fehlender Nachweis | begrenzter nächster Abruf |
|---|---|---|---|
| Google Organic, Ads, Local Pack | Chromium-Abfragen mit hl=de/gl=de/pws=0 → Bot-Prüfung | aktuelle neutrale SERP samt echtem Standort | interaktive zulässige Sitzung: Dresden Innenstadt und zwei weitere reale Messpunkte, Mobil/Desktop; fünf Kaufqueries |
| ChatGPT | öffentliche Oberfläche → 403 | gültige Antworten | zugängliche Consumer-Suche, fixes Panel, Export |
| Perplexity | öffentliche Oberfläche → Challenge | gültige Antworten | zulässiger interaktiver Zugang, fixes Panel |
| Gemini | frühe DOM-Auslesung leer | weder Antwort noch abschließend geklärter Login-/Interaktionsstatus | App laden/zulässige Sitzung prüfen, dann erst Panel |
| Keyword Planner / zweite Rohdatenquelle | keine direkte Toolanbindung | vergleichbare aktuelle DE-Monatszeitreihen, CPC/Biddefinition | Export der priorisierten Cluster mit Zeitraum/Markt/Match/Quelle |
| Trends | öffentlich behauptetes Wachstum, keine eigene belastbare Zeitreihe | Trendrichtung/Stärke | identische Begriffe, Markt DE, monatlich, Datenart getrennt |
| Backlinks | einzelne verlinkende Seiten bekannt | Referring-Domain-/Linkqualitätsbestand | begrenzter Export der vier bis fünf wichtigsten direkten Konkurrenten |
| GBP/Reviews | öffentliche Anbieter-/Portalhinweise | eigenes Profil, aktuelle Google-Reviewzahlen | read-only Profilstatus und Vergleichsprofile, danach reale Pflege |
| GA4 / CRM / Revenue | Code-/GSC-Basis, kein Datenexport | Sessions, Anfragen, Qualifizierung, Umsatz | eigene Auswertungen mit datensparsamen aggregierten Werten |

Die Vollständigkeit dieser Research betrifft die Entscheidung und belegte Abdeckung der verfügbaren Quellen. Sie ersetzt keine nicht zugängliche Messung. Nachlieferbare Daten können Prioritäten verändern, insbesondere wenn ein warmer Vertriebskanal fehlt oder ein anderer ICP bereits nachweislich Umsatz erzeugt.

## Drei Durchläufe

1. **Market Map:** nationale GEO-Auswahl, Audit, lokal SEO, B2B-Positionierung, Authority und Research untersucht.
2. **Red Team:** aktuelle Seiten statt Snippets geöffnet; Zahlen und Datenstände gegengeprüft; Software-/Agenturintent, Werbequellen und etablierte Marken in Studien erkannt; eigene Funnel-/Attribution-Lücken sowie Partner-/Sprintpfad ergänzt.
3. **Improved Strategy:** vier Kaufseiten, ein kleiner Snapshot, begrenzter Umsetzungsauftrag, lokale Akquisition und externe Validierung priorisiert. Forschungsproduktion und Vertikalisierung an Beweise/Distribution gebunden. Nur diese verbesserte Fassung gilt als Handlungsempfehlung.

## Dokumentationsprüfung

- Alle vier neuen JSON-Dateien und der aktualisierte Projektstatus erfolgreich geparst.
- Relative Dateiverweise der Growth-Markdown-Dateien geprüft: keine fehlenden Ziele.
- 20 Buyer-Prompt-Zeilen und 18 Experiment-Zeilen bestätigt; elf Opportunities mit 13 Faktoren, Gewichtsumme 100.
- `git diff --check` ohne Whitespacefehler; beide read-only Capture-Skripte mit `node --check` geprüft.
- Kein Produktionscode geändert, daher kein neuer Astro-Build oder Frontend-Regressionslauf erforderlich. Keine Nachricht, Formularanfrage, Profilanlage, Indexierungsanfrage oder Publikation ausgelöst.
