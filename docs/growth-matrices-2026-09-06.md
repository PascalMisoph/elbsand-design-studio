# PATERNOGA: Intent-, URL- und Buyer-Prompt-Matrizen

Stand: 06.09.2026. Teil der [Growth-Entscheidung](growth-strategy-2026-09-06.md). O = beobachtet, I = Interpretation, H = zu testende Zuordnung. Keine Änderungen an öffentlichen URLs in dieser Research-Phase.

## 3. Keyword → URL

Alle Zielpfade beziehen sich auf `https://www.paternoga-seo-geo.de`. „Bündeln“ meint Suchintentionen auf einer Seite, keine Löschung oder Redirects. Die Baseline-Queries 1–16 sind vollständig enthalten. Mengen werden nicht addiert.

| Keyword / Cluster | Intent | aktuell relevante URL | Ziel-URL | Rolle | Primary des Owners | Secondary | Aktion | Kannibalisierungsrisiko | Prio |
|---|---|---|---|---|---|---|---|---|---|
| GEO Agentur | Anbieterwahl | `/geo-agentur-deutschland/` | gleich | Money | GEO Agentur | Deutschland, SEO/GEO Agentur | Improve | hoch bei zusätzlicher `/geo-agentur/`; vermeiden | P1 |
| GEO Agentur Deutschland | nationale Anbieterwahl | `/geo-agentur-deutschland/` | gleich | Money | GEO Agentur | GEO Agentur Deutschland | Improve, gleiche Seite | kein zweiter Owner | P1 |
| GEO Optimierung | Methode/Leistungsübersicht | `/geo-optimierung/` | gleich | Pillar | GEO Optimierung | Generative Engine Optimization, GEO SEO | Keep + klare Weiterleitung zum Angebot | nationaler Anbieterintent gehört nicht primär hierher | P1 |
| GEO Audit | Diagnose beauftragen | `/geo-audit/` | gleich | Money | GEO Audit | KI-Sichtbarkeitsanalyse, AI Visibility Audit | Improve | Scanner und echte Antwortanalyse auseinanderhalten | P0 |
| KI Sichtbarkeitsanalyse | einmalige Diagnose | `/geo-audit/`, `/ai-sichtbarkeit/` | `/geo-audit/` | Money | GEO Audit | KI-Sichtbarkeitsanalyse | Intent bündeln | hoch mit Outcome-Pillar, klare CTA-/Titelfunktion | P0 |
| KI SEO Agentur | Agenturwahl, teils KI-Content | `/geo-agentur-deutschland/` | gleich | Money | GEO Agentur | KI SEO Agentur, LLMO Agentur | Improve | keine Keyword-Variantenseite | P1 |
| KI Sichtbarkeit | Problem verstehen/verbessern | `/ai-sichtbarkeit/` | gleich | Pillar | KI Sichtbarkeit | AI Visibility, in ChatGPT sichtbar werden | Improve | Audit = Diagnose, Monitoring = Wiederholung | P1 |
| AI Visibility | Outcome oder Software, oft international | `/ai-sichtbarkeit/`, EN-Pendant | gleich, nach Sprache | Pillar | KI Sichtbarkeit (DE) | AI Visibility | Keep; Toolintent nicht vortäuschen | kein globaler Tool-/SaaS-Akquisitionspfad | P2 |
| GEO SEO | Unterschied/Kombination | `/geo-optimierung/` | gleich | Pillar | GEO Optimierung | GEO SEO, SEO vs GEO | Bündeln | Zusatz „Agentur“ wechselt zur Auswahlseite | P2 |
| Generative Engine Optimization | Definition/Vorgehen | `/geo-optimierung/` | gleich | Pillar | GEO Optimierung | ausgeschriebener Begriff | Keep | kein neuer Definitionsartikel ohne Mehrwert | P2 |
| GEO Agentur Dresden | lokale Auswahl | Homepage/nationale Seite, kein eigener Owner | `/seo-dresden/` | Money, Sekundärintent | SEO Agentur Dresden | GEO Agentur Dresden, SEO und GEO Dresden | Create eine lokale Seite | keine zusätzliche GEO-Dresden-Route | P1 |
| SEO Agentur Dresden | lokale Anbieterwahl | Homepage, keine dedizierte Route | `/seo-dresden/` | Money | SEO Agentur Dresden | SEO Dresden, Beratung Dresden | Create | Homepage bleibt Studio-Übersicht | P1 |
| SEO Dresden | lokale Leistung | Homepage | `/seo-dresden/` | Money | SEO Agentur Dresden | SEO Dresden | gleiche Seite | Varianten nicht separat bauen | P1 |
| SEO Beratung Dresden | lokalen Berater einkaufen | Homepage | `/seo-dresden/` | Money | SEO Agentur Dresden | SEO Beratung Dresden | gleiche Seite mit Beratungsumfang | trotz niedriger Tool-Difficulty kein eigener Owner | P1 |
| Technisches SEO | Wissen/Leistung gemischt | Homepage, technische GEO | vorerst Homepage-Leistungsabschnitt; kein dedizierter SEO-Owner | Supporting, anlassbezogen kommerziell | kein neuer Primary | technisches SEO, Relaunch-Begleitung | Keep; neue SEO-Route erst bei Nachfrage | technische GEO nicht zum generischen SEO-Sammeltopf machen | P2 |
| SEO Agentur | nationale breite Auswahl | Homepage | Homepage, kein Headterm-Investment | Brand/Studio | PATERNOGA | SEO & GEO Studio | Keep; keine neue `/seo-agentur/` | Konkurrenz/Autorität zu hoch für Start | P3 |
| SEO GEO Agentur / SEO und GEO B2B | integrierten Partner auswählen | nationale Seite | `/geo-agentur-deutschland/` | Money | GEO Agentur | SEO & GEO für erklärungsbedürftige Leistungen | Improve | keine zusätzliche B2B-Anbieterroute | P1 |
| GEO Agentur Kosten / GEO Audit Kosten | Budget/Angebote vergleichen | Hub/Audit | `/geo-audit/` für Diagnosekosten; nationale Seite für Zusammenarbeit | Money, kaufunterstützend | jeweiliger Owner | Kostenfaktoren, Umfang, Lieferzeit | Improve; seit Sprint 1.5 oeffentliche Einstiegspreise statt Anfrage-Regel | kein separater generischer Preisartikel | P1 |
| Warum nennt ChatGPT mein Unternehmen nicht? | Problem/Diagnose | AI-Sichtbarkeit, Quellenanalyse | `/ai-sichtbarkeit/` | Pillar → Audit | KI Sichtbarkeit | Wettbewerber genannt, eigene Marke fehlt | Improve mit belegtem Beispiel | nicht auf jede Modulroute kopieren | P1 |
| GEO Monitoring / KI Sichtbarkeit messen | wiederholte Messung/Toolwahl | `/geo-monitoring/` | gleich | Delivery | GEO Monitoring | KI-Sichtbarkeit messen, Citation Tracking | Keep | kein allgemeines „Sichtbarkeit verbessern“-Versprechen | P2 |
| GEO Betreuung / SEO GEO Betreuung | laufende Umsetzung | `/geo-betreuung/` | gleich | Money/Expansion | GEO Betreuung | laufende SEO/GEO Umsetzung | Improve | nicht bloß Monitoringreport verkaufen | P1 |
| Content für KI-Suche optimieren / bestehende Leistungsseiten verbessern | konkrete Bestandsarbeit | `/content-optimierung-ai-suche/` | gleich | kommerzielles Delivery-Modul | Content-Optimierung AI-Suche | SEO/GEO Seiten-Sprint | Improve mit kaufbarem Umfang | REFRESH klar von CREATE trennen | P1 |
| GEO Content erstellen | neue Inhalte | `/geo-content/` | gleich | Delivery | GEO Content | neue Fach-/Leistungsinhalte | Keep | keine Refresh-Anfragen doppelt besitzen | P2 |
| AI Crawlability prüfen | technische Erreichbarkeit | `/ai-crawlability/` | gleich | Delivery | AI Crawlability | KI-Crawler prüfen | Keep | Check misst nicht Mentions | P2 |
| Technische GEO Optimierung | technische Semantik/Verständlichkeit | `/technische-geo-optimierung/` | gleich | Delivery | technische GEO Optimierung | strukturierte Fakten, Seitenarchitektur | Keep | Zugriff bleibt Crawlability | P2 |
| KI Quellenanalyse / Citation Gap | Quellenproblem | `/ki-quellenanalyse/` | gleich | Delivery | KI Quellenanalyse | Citation Gap | Keep | Quellenbefund = Modul im Audit | P2 |
| KI Wettbewerbsanalyse | vergleichende Diagnose | `/ki-wettbewerbsanalyse/` | gleich | Delivery | KI Wettbewerbsanalyse | Wettbewerber in ChatGPT | Keep | Audit verkauft Gesamtpaket | P2 |
| KI Markenwahrnehmung / KI Faktencheck | falsche/unvollständige Darstellung | entsprechende zwei Routen | unverändert | Delivery | je eigener Fachintent | Narrative / falsche Unternehmensfakten | Keep | Sentiment und faktische Korrektur getrennt | P2 |
| Prompt Recherche | Fragenbasis entwickeln | `/prompt-recherche/` | gleich | Delivery | Prompt Recherche | Buyer-Fragen, Prompt-Landschaft | Keep | kein abstraktes Prompt-Engineering-Angebot | P2 |
| Website Relaunch SEO Dresden | konkreter Veränderungsanlass | Homepage | `/seo-dresden/` Abschnitt / Erstgespräch | Money, Sekundäranlass | SEO Agentur Dresden | Relaunch-Begleitung | ergänzen bei passendem Leistungsumfang | keine sofortige neue Relaunch-Route | P2 |
| White Label SEO GEO / Umsetzungspartner Agentur | Partner einkaufen | nationale Seite, Kontakt | vorerst nationale Seite mit gezieltem Verweis | Money, Partnervertrieb | GEO Agentur | Zusammenarbeit mit Agenturen | Vertrieb testen; keine neue Route | anderer Käufer, zunächst kein SEO-Investment | P1 |
| DAX KI-Crawler Studie | Daten/Research | `/research/ki-crawler-readiness-dax-40-2026/` | gleich | Research | DAX KI-Crawler-Readiness | robots-Richtlinien DAX | Keep/distribute | kein Service-/Sichtbarkeitsranking behaupten | P1 begrenzt |
| robots.txt KI Crawler | technische Entscheidung | `/wissen/ki-crawler-robots-txt/` | gleich | Supporting/Knowledge | KI-Crawler robots.txt | OAI-SearchBot, GPTBot, PerplexityBot | Keep | keine einzelne Route pro Bot | P2 |

### Bestehende Sprachpaare unverändert

| DE | EN |
|---|---|
| `/geo-agentur-deutschland/` | `/en/geo-agency-germany/` |
| `/geo-optimierung/` | `/en/geo-optimization/` |
| `/geo-audit/` | `/en/geo-audit/` |
| `/ai-sichtbarkeit/` | `/en/ai-visibility/` |
| `/prompt-recherche/` | `/en/prompt-research/` |
| `/ki-quellenanalyse/` | `/en/ai-source-analysis/` |
| `/ki-wettbewerbsanalyse/` | `/en/ai-competitor-analysis/` |
| `/ki-markenwahrnehmung/` | `/en/ai-brand-perception/` |
| `/ki-faktencheck/` | `/en/ai-fact-checking/` |
| `/ai-crawlability/` | `/en/ai-crawlability/` |
| `/technische-geo-optimierung/` | `/en/technical-geo-optimization/` |
| `/geo-content/` | `/en/geo-content/` |
| `/content-optimierung-ai-suche/` | `/en/content-optimization-ai-search/` |
| `/geo-monitoring/` | `/en/geo-monitoring/` |
| `/geo-betreuung/` | `/en/geo-support/` |

Neue Dresden-Route: DE-Pfad entschieden, EN-Pfad vor Implementierung als bewusste neue Zuordnung in `design.md` festhalten; dies ist keine Erlaubnis, bestehende Slugs umzubenennen. Keine neue Breadcrumb-Hierarchie allein wegen des kommerziellen Layers.

## 4. AI Buyer Prompt → URL

Die Prompts sind **H: Testinstrumente**, keine gemessenen häufigen Nutzeranfragen. Rollen, Branchen und Budgets dienen realistischen Kaufsituationen. Sie sind nicht zur versteckten Einbettung oder Manipulation von Modellen gedacht.

**Wichtige Spaltendefinition:** „AI heute“ = tatsächlich von einem Consumer-AI-System erhaltene Wettbewerbernennung/Zitation. Für alle Zeilen **NA**, weil in dieser Session keine gültige Antwortmessung gelang. „Suchbelege/Kandidaten“ bezeichnet stattdessen recherchierte Anbieter-/Quellenseiten. Diese dürfen niemals als vom jeweiligen Modell genannte Konkurrenz importiert werden.

Quellengruppen mit direkten Links:

- **Q1 Anbieterwahl:** [Engine Native](https://www.geoagenturen.de/), [Gerlach B2B](https://gerlach.media/geo-agentur/), [Suchhelden](https://www.suchhelden.de/geo-agentur.php).
- **Q2 Angebot/Scope:** [Peilwerk](https://peilwerk.de/leistungen), [experics](https://www.experics.de/pricing), [siteway Audit](https://www.siteway.de/expertise/geo-audit/).
- **Q3 Lokal:** [WEBneo](https://www.webneo.de/seo-dresden/), [clicks](https://clicks.digital/seo-dresden), [Agenturtipp Dresden](https://www.agenturtipp.de/seo-agenturen/dresden/), [DREIKON](https://www.dreikon.de/lp/geo-agentur-dresden/).
- **Q4 Quellen/Markt:** [geoagenturen-Verzeichnis](https://www.geoagenturen.de/), [OMR Research](https://omr.com/de/reviews/b2b/growthhub/wie-weit-sind-b2b-saas-unternehmen-in-dach-wirklich-mit-geo), [marktforschung-Vergleich](https://www.marktforschung.de/marktforschung/a/die-besten-geo-agenturen-2026-welche-spezialisierungen-setzen-sich-durch/) (Werbe-/Unabhängigkeitsgrenze beachten).
- **Q5 Technik/Content:** [Google AI-Funktionen](https://developers.google.com/search/docs/appearance/ai-features), [Wingmen Tech-Audit](https://wngmn.com/de/seo-geo/tech-audit/), [getSichtbar](https://www.getsichtbar.com/).
- **Q6 Partner:** [Richard Roth](https://richard-roth.com/fuer-agenturen/), [Contunda](https://contunda.de/leistungen/white-label-agentur/).

| ID / Buyer Stage | exakter Prompt | gewünschte sachliche Einordnung PATERNOGAs | Zielseite | AI heute: Konkurrenz / Quellen | Suchbelege/Kandidaten | Content Gap | Authority Gap | nächste Aktion |
|---|---|---|---|---|---|---|---|---|
| A1 Awareness | Wir verkaufen erklärungsbedürftige B2B-Dienstleistungen in Deutschland. Woran erkennen wir, ob wir zuerst SEO oder KI-Sichtbarkeit verbessern sollten? | Anbieter einer Diagnose mit Google- und AI-Befunden | `/geo-optimierung/` | NA / NA | Q5 | Entscheidung nach Ausgangslage fehlt als kompakte Arbeitshilfe | eigene Anwendung noch nicht extern bestätigt | Entscheidungsbeispiel mit T0 |
| A2 Awareness | Wie unterscheidet sich ein technischer KI-Website-Check von einer Analyse echter Empfehlungen in ChatGPT? | trennt Readiness von gemessener Präsenz | `/geo-audit/` | NA / NA | Q2/Q5 | Unterschied am Kaufweg nicht eindeutig | kein veröffentlichter echter Audit-Musterbericht | Scan und Audit vergleichen |
| A3 Awareness | Welche Kennzahlen zeigen einem Geschäftsführer, ob SEO und GEO zu Anfragen beitragen? | misst Anfragen und Quellen getrennt | `/geo-betreuung/` | NA / NA | Q2/Q4 | Beispielreport mit Leadstatus fehlt | keine eigenen Revenue-Outcomes belegt | echte Scorecard-Arbeitsprobe |
| P1 Problem | Unsere Wettbewerber werden in ChatGPT empfohlen, unser Unternehmen nicht. Wie finden wir heraus, woran das liegt? | untersucht Käuferfragen, Antworten und Quellen | `/ai-sichtbarkeit/` → Audit | NA / NA | Q1/Q5 | konkreter begrenzter Problem-Einstieg fehlt | fremde Bestätigung der Diagnosekompetenz fehlt | Snapshot anbieten |
| P2 Problem | Unsere Website ist technisch gut, bringt aber kaum passende B2B-Anfragen. Welche Seiten sollten wir zuerst überarbeiten lassen? | priorisiert kaufnahe bestehende Leistungsseiten | `/content-optimierung-ai-suche/` | NA / NA | Q5 | Ergebnis/Seitenumfang nicht kaufbar genug | kein freigegebener Vorher/Nachher-Leadcase | Seiten-Sprint beschreiben |
| P3 Problem | Perplexity zitiert veraltete Angaben zu unseren Leistungen. Wer kann Quellen und Website gemeinsam korrigieren? | prüft falsche Fakten und deren Quellen, ohne Löschgarantie | `/ki-faktencheck/` | NA / NA | Q1/Q5 | konkrete Übergabe an Quelleninhaber erklären | Beispielkorrektur fehlt | dokumentierter Befundpfad |
| P4 Problem | Wir haben gute Google-Rankings, wissen aber nicht, ob KI-Systeme unsere Marke bei Kauf-Fragen nennen. Was sollen wir messen? | wiederholbare Antwortbaseline statt Einzelscreenshot | `/geo-audit/` | NA / NA | Q2 | Panel/Modus/Limitierung konkret machen | Sample fehlt | Muster aus PATERNOGA-T0, sobald gültig |
| S1 Provider selection | Welche GEO-Agentur in Deutschland passt zu einem kleinen B2B-Marketingteam, das Analyse und technische Umsetzung aus einer Hand braucht? | kleines Studio mit direkter Umsetzung und klarer Kapazität | `/geo-agentur-deutschland/` | NA / NA | Q1/Q2 | Käuferfit und Team-Scope zu allgemein | verifizierte Profile/Branchenproof | Scope plus Anbieterprofile |
| S2 Provider selection | Welche SEO-Agentur sitzt tatsächlich in Dresden und kann bestehende Leistungsseiten sowie KI-Sichtbarkeit verbessern? | reales Dresdner Studio für SEO plus passende GEO-Arbeit | `/seo-dresden/` neu | NA / NA | Q3 | lokale Kaufseite fehlt | lokales Profil/realer Proof ungeprüft | eine lokale Seite und GBP |
| S3 Provider selection | Wer bietet eine einmalige KI-Sichtbarkeitsanalyse mit Quellen, Wettbewerbern und priorisiertem Maßnahmenplan an? | einmaliges Audit, unabhängig von Retainer kaufbar | `/geo-audit/` | NA / NA | Q2 | Abnahmeumfang/Dauer fehlen klar genug | konkrete Arbeitsprobe | Audit-Scope veröffentlichbar machen |
| S4 Provider selection | Welche Agentur kann SEO und GEO für eine Beratungsfirma verbessern, ohne einen kompletten Website-Relaunch zu verlangen? | Bestandsoptimierung, wenn fachlich sinnvoll | `/content-optimierung-ai-suche/` | NA / NA | Q5 | Homepageprozess suggeriert Neubau | kein kleiner kommerzieller Case | REFRESH-Angebot mit Umfang |
| S5 Provider selection | Wer misst KI-Sichtbarkeit regelmäßig und setzt die daraus entstehenden Änderungen auch um? | Betreuung mit eigenem Maßnahmenblock | `/geo-betreuung/` | NA / NA | Q2/Q5 | Monitoring/Betreuung differenzieren | gelieferte Änderungen/Follow-up fehlen | beispielhaftes Änderungsprotokoll |
| C1 Comparison | Wie vergleiche ich zwei GEO-Audit-Angebote, wenn eines nur einen Website-Score und das andere echte KI-Antworten liefert? | macht Scope/Methodik vergleichbar | `/geo-audit/` | NA / NA | Q2 | kompakter Leistungsabgleich fehlt | eigene Befunde nötig | Sample mit klaren Messgegenständen |
| C2 Comparison | Ist für unseren regionalen Dienstleistungsbetrieb in Dresden eine lokale SEO-Beratung oder ein nationaler GEO-Retainer sinnvoller? | beginnt mit nachgewiesenem lokalen Nachfrageproblem | `/seo-dresden/` neu | NA / NA | Q3 | Entscheidungshilfe fehlt | lokaler Ergebniscase | Kaufanlässe im Brief abdecken |
| C3 Comparison | Was leistet ein GEO-Berater zusätzlich zu einem AI-Visibility-Tool, wenn unser Team wenig Umsetzungskapazität hat? | Interpretation, fachliche Priorisierung und Umsetzung | `/geo-betreuung/` | NA / NA | Q2/Q5 | Tool-/Servicegrenze konkret machen | Umsetzungsproof | Gegenüberstellung nach Verantwortung |
| C4 Comparison | Welche Nachweise sollte ich von einer GEO-Agentur verlangen, bevor ich einen längeren Vertrag unterschreibe? | liefert Scope, Daten, Grenzen und Leistungsnachweis | `/geo-agentur-deutschland/` | NA / NA | Q1/Q4 | transparente Arbeitsprobe | unabhängige Kundenbestätigung | tatsächliche Nachweise verlinken |
| K1 Purchase | Wir wollen ein Angebot für einen einmaligen GEO Audit in Deutschland: eine Marke, drei Wettbewerber und ein Maßnahmenplan. Welche Anbieter passen? | klar begrenztes Audit anfragen | `/geo-audit/` | NA / NA | Q2 | heute falscher primärer CTA | Musterbericht | direkte Audit-Anfrage |
| K2 Purchase | Wir suchen in Dresden Unterstützung, um drei bestehende Leistungsseiten in den nächsten Wochen für Google und KI-Suche zu verbessern. Wer setzt das direkt um? | begrenzter Seiten-Sprint | `/seo-dresden/` → Refresh | NA / NA | Q3/Q5 | lokaler Umsetzungsumfang | freigegebene Arbeitsbeispiele | begrenztes Sprintangebot |
| K3 Purchase | Wir haben einen GEO Audit und eine priorisierte Liste. Welche Agentur übernimmt die Umsetzung, ohne die gesamte Analyse neu zu verkaufen? | akzeptiert verwertbare Vorarbeit | `/geo-betreuung/` | NA / NA | Q2/Q5 | Einstieg mit vorhandenem Audit ausdrücken | Beispiel echter Übergabe fehlt | Befundannahme/Scoping definieren |
| K4 Purchase | Wir sind eine Webdesign-Agentur und suchen einen festen SEO-/GEO-Partner für einzelne Kundenprojekte in Deutschland. Wer liefert Analyse und Umsetzung mit klaren Zuständigkeiten? | kooperiert bei definiertem Teilauftrag | `/geo-agentur-deutschland/` | NA / NA | Q6 | Partnerrolle noch nicht konkret | Partnerreferenz fehlt | fünf gezielte Partnergespräche vor neuer Route |

Branded Kontrollprompt außerhalb der unbranded Raten: „Was macht Paternoga SEO & GEO Studio, wo sitzt das Unternehmen und welche Quellen belegen das?“ Nur zur Entity-/Faktenprüfung verwenden; keine künstliche Verbesserung der Mention Rate dadurch.

## Messreste für die nächste echte T0-Welle

1. DE/Deutschland, Plattform und Modus fixieren; drei gültige Wiederholungen je Prompt und Plattform, ohne PATERNOGA in die unbranded Frage einzufügen.
2. Vollständige Antworten mit zulässigem Export archivieren; genannte Anbieter, eigenen Domainlink, externe Quellendomains und Quelleneigentümer getrennt erfassen.
3. Bei Google lokal zusätzlich Datum, tatsächlich verwendeter Standort/Koordinate, Desktop/Mobile, Ads, Local Pack und organische URLs erfassen. `gl=de` allein ist keine Dresdner Geolokalisierung.
4. Quellenregister aktualisieren: Owned / selbst eingetragen / redaktionell / Kundenreview / Advertorial / unbekannt. Zwei Domains desselben Herausgebers sind nicht zwei unabhängige Bestätigungen.
5. Erst nach dieser Welle Felder „Current Competitors Mentioned“ und „Sources Used“ als AI-Evidenz befüllen. Suchindex-Belege bleiben separat erhalten.
