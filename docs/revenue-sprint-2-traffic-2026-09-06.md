# Revenue Sprint 2 — Traffic, Search Visibility & Commercial Discovery

Stand: 06.09.2026. Ausführung nach [Sprint 1.5](seo-positioning-sprint-1-5-2026-09-06.md) (`PASS`, live verifiziert, Release `542e48f`). Positionierung, Preisarchitektur und `src/content/offers.ts` als Single Source bleiben unverändert gültig. Keine neue Marktstudie; die Suchrecherche ist bewusst auf operative Entscheidungen begrenzt.

Wirtschaftlicher Nordstern: **wiederkehrender Umsatz (MRR)** aus passender laufender Betreuung. Traffic ist das operative Ziel dieses Sprints, nicht das Geschäftsziel.

---

## 1. T0 — Ausgangsstand vor diesem Sprint

Quelle: [GSC-Abruf 06.09.2026](seo-positioning-gsc-2026-09-06.json), Property `sc-domain:paternoga-seo-geo.de`, 28 Tage (09.08.–06.09.).

| Messgröße | T0 |
|---|---|
| Klicks / Impressionen (Datumsaggregat) | 7 / 62 |
| Seiten mit Impressionen | 32 |
| Offengelegte Query-Zeilen | 14, alle nicht-brand |
| Stärkste Seiten nach Impressionen | `/en/` 19, `/en/geo-agency-germany/` 14, `/en/geo-optimization/` 12, `/en/technical-geo-optimization/` 12, `/en/knowledge/ai-crawlers-robots-txt/` 11 |
| Klicks | Startseiten (2+2+1) und `/geo-agentur-deutschland/` (1) |
| Lokale Sichtbarkeit | **null** — keine einzige Dresden-Query, kein lokaler Owner vorhanden |
| Kommerzielle Konversionen | keine gemessen |

**Zwei Befunde bestimmen diesen Sprint:** Erstens laufen die offengelegten Impressionen fast vollständig über EN- und Fach-/Technikseiten, nicht über die deutschen Kaufseiten. Zweitens existierte für den gesamten lokalen Kaufintent kein Intent-Owner. Kleine Datenbasis — als Richtung verwendbar, nicht als Prognose.

## 2. Search-/SERP-Befunde (bounded, 06.09.2026)

Fünf gezielte Abfragen statt eines neuen Marktberichts. Beobachtungen, keine Rankingmessung.

| Cluster | Befund | Konsequenz |
|---|---|---|
| SEO Agentur Dresden | Besetzt von WEBneo, clicks.digital, DREIKON, Suchhelden, Krick, myartside, VOLLBLUT, onFire. **DREIKON betreibt bereits eine englische Dresden-SEO-Landingpage.** | Etabliert, aber kein unbesetzter Markt. Rechtfertigt eine eigene lokale Money Page **und** ein EN-Pendant. |
| SEO Betreuung / laufende SEO Betreuung | Eigene dedizierte Routen bei seoagents.de, seo-monkey.de, cuvillier, seoagentur-hamburg. Preisrahmen öffentlich diskutiert: KMU meist 500–3.000 €/Monat, Agenturspanne 1.000–10.000 €/Monat. | **Wichtigster Befund für MRR.** Eigenständiger etablierter Kaufintent, den PATERNOGA bisher nicht besitzt — `/geo-betreuung/` war rein GEO-benannt. |
| GEO Audit Kosten / GEO Agentur Kosten | Eigener Contentcluster mit dedizierten Kostenseiten (geoagenturen.de, Bavaria AI, die-ki-seo-agentur). Marktspanne Audit 790–4.500 € einmalig, Betreuung 690–6.500 €/Monat; Gerlach 3.500 € Audit und ab 2.500 €/Monat, Bavaria AI ab 1.490 €. | PATERNOGAs 1.500 € / 2.500 € / 1.250 € liegen belegbar im unteren bis mittleren Marktband. Öffentliche Preise sind hier ein echter Vorteil, weil viele Anbieter sie verstecken. Kostenfragen gehören sichtbar auf die Kaufseiten. |
| Warum wird mein Unternehmen nicht in ChatGPT genannt | Stark besetzt (rabenlehner, geo-vantage, ki-empfiehlt, zoda-media, onspire, digitalagentur38), fast durchgehend als Ratgeberartikel. | Hoher Kaufintent-Vorlauf. Kein neuer Artikel — der vorhandene Owner `/ai-sichtbarkeit/` bekommt die Frage in Title und Description. |
| Unterschied SEO / GEO | Stark besetzt (Suchhelden, geoagenturen, rankprompt, gruppe-himmelreich, seo-bavaria). Marktkonsens: „gute GEO-Strategie ist meist auch gutes SEO"; für KMU zuerst SEO-Grundlagen, darauf GEO. | Deckt sich mit PATERNOGAs Drei-Leser-Mechanismus. Kein eigener Vergleichsartikel in diesem Sprint; die Aussage wird auf Hub und lokaler Seite geführt. |

## 3. Keyword Attack Map und Intent-Ownership

Genau ein primärer Owner je Keyword. `New` bedeutet in diesem Sprint ausschließlich `/seo-dresden/` und sein EN-Pendant.

| # | Keyword / Cluster | Intent | Funnel | Commercial Value | Retainer-Potenzial | Evidenz | Owner-URL | Aktion |
|---|---|---|---|---|---|---|---|---|
| 1 | SEO Agentur Dresden | lokale Anbieterwahl | Decision | hoch | **hoch** | SERP 06.09.; Tooltabelle 480/Mo, CPC 8,50 € | `/seo-dresden/` | **New** |
| 2 | SEO Dresden | lokale Leistung | Decision | hoch | hoch | 320/Mo laut Tool | `/seo-dresden/` | New, gleiche Seite |
| 3 | SEO Beratung Dresden | lokalen Berater einkaufen | Decision | mittel | hoch | 90/Mo laut Tool | `/seo-dresden/` (FAQ-Passage) | New, gleiche Seite |
| 4 | Suchmaschinenoptimierung Dresden | lokale Leistung, Langform | Decision | mittel | hoch | SERP-Varianten | `/seo-dresden/` | New, keine eigene Seite |
| 5 | SEO Experte Dresden | Personenbezug | Decision | mittel | mittel | SERP-Variante | `/seo-dresden/` | New, keine eigene Seite |
| 6 | SEO Betreuung / laufende SEO Betreuung | Retainer einkaufen | Continuity | **sehr hoch** | **sehr hoch** | dedizierte Wettbewerberrouten, Preisspanne öffentlich | `/geo-betreuung/` | **Improve** — Title, H1, Description auf SEO+GEO umgestellt |
| 7 | SEO Betreuung Dresden | lokaler Retainer | Continuity | hoch | **sehr hoch** | Kombination aus 1 und 6 | `/seo-dresden/` (Retainer-Abschnitt) | New, kein eigener Owner |
| 8 | GEO Betreuung | GEO-Retainer | Continuity | mittel | hoch | bestehende GSC-Impressionen für Monitoring-Varianten | `/geo-betreuung/` | Improve |
| 9 | GEO Agentur / GEO Agentur Deutschland | nationale Anbieterwahl | Decision | hoch | hoch | 1 Klick live, Position 2,6 | `/geo-agentur-deutschland/` | Keep, in Sprint 1.5 geschärft |
| 10 | GEO Audit | Diagnose kaufen | Decision | hoch | mittel | 1 Impression live, Position 85 | `/geo-audit/` | **Improve** — Title auf Query, Frage-H2 |
| 11 | GEO Audit Kosten / Was kostet ein GEO Audit | Budget prüfen | Decision | hoch | mittel | eigener Wettbewerbscluster | `/geo-audit/` | Improve — Frage-Heading beantwortet den Preis sofort |
| 12 | GEO Agentur Kosten | Anbieter vergleichen | Decision | hoch | hoch | eigener Wettbewerbscluster | `/geo-agentur-deutschland/` | Keep, Preise sichtbar über Hub-Karten |
| 13 | GEO Optimierung / Generative Engine Optimization | Methode verstehen | Discovery | mittel | mittel | bestehender Pillar | `/geo-optimierung/` | Keep |
| 14 | Unterschied SEO GEO / SEO vs GEO | Einordnung | Discovery | mittel | mittel | stark besetzt | `/geo-optimierung/` | Keep — kein neuer Artikel |
| 15 | KI Sichtbarkeit / AI Visibility | Problem verstehen | Discovery→Decision | hoch | hoch | 3 Impressionen live | `/ai-sichtbarkeit/` | **Improve** — Title auf deutsche Query |
| 16 | Warum wird mein Unternehmen nicht in ChatGPT genannt | Ursache suchen | Discovery | hoch | hoch | stark besetzt, hoher Vorlauf | `/ai-sichtbarkeit/` | Improve — Frage in Description |
| 17 | In ChatGPT sichtbar werden / ChatGPT Sichtbarkeit Unternehmen | Lösung suchen | Decision | hoch | hoch | Variantencluster zu 16 | `/ai-sichtbarkeit/` | Improve, gleiche Seite |
| 18 | Leistungsseiten optimieren / SEO Leistungsseite | konkretes Seitenproblem | Decision | **sehr hoch** | hoch | Kernformulierung der Positionierung | `/content-optimierung-ai-suche/` | **Improve** — Title auf Query umgestellt |
| 19 | Content für Google und KI optimieren | Umsetzung suchen | Decision | hoch | hoch | Crossover-Cluster | `/content-optimierung-ai-suche/` | Improve |
| 20 | SEO für Dienstleister / SEO für erklärungsbedürftige Dienstleistungen | Anbieterwahl nach Fit | Decision | hoch | **hoch** | Positionierungskern | Startseite | Keep — Title in Sprint 1.5 gesetzt |
| 21 | SEO und GEO Agentur / SEO GEO Agentur | integrierten Partner suchen | Decision | hoch | hoch | besetzt, kein Exklusivanspruch | `/geo-agentur-deutschland/` | Keep |
| 22 | Technisches SEO / Relaunch SEO | Anlassbezogen | Decision | mittel | mittel | anlassgetrieben | `/technische-geo-optimierung/` + Startseite | Keep |
| 23 | AI Crawlability / robots.txt KI Crawler | technische Frage | Discovery | gering direkt | gering | 11 Impressionen live, beste Nicht-Brand-Sichtbarkeit | `/wissen/ki-crawler-robots-txt/`, `/ai-crawlability/` | Keep — **jetzt mit Brücke zum GEO Audit** |
| 24 | DAX KI-Crawler Studie | Research | Awareness | gering direkt | gering | eigenes Asset | `/research/ki-crawler-readiness-dax-40-2026/` | Keep + Distribution |
| 25 | AI Visibility Monitoring / KI-Sichtbarkeit messen | Messung einkaufen | Continuity | mittel | hoch | 4 Impressionen live | `/geo-monitoring/` | Keep |
| 26 | B2B SEO Agentur | Anbieterwahl | Decision | hoch | hoch | stark besetzt, geringer Proof-Fit | — | **Do not target** in dieser Phase |
| 27 | GEO Agentur Dresden | lokale GEO-Auswahl | Decision | mittel | mittel | DREIKON besetzt | `/seo-dresden/` (begrenzter Abschnitt) | New, **keine** eigene GEO-Dresden-Route |
| 28 | SEO Agentur (national, generisch) | breite Auswahl | Decision | hoch | hoch | Autoritätshürde zu hoch | Startseite | Do not target |
| 29 | Landingpage SEO optimieren | taktische Umsetzung | Decision | mittel | mittel | Intent überschneidet 18 | `/content-optimierung-ai-suche/` | Keep, kein eigener Owner |
| 30 | GEO Agentur auswählen / beste GEO Agentur | Anbietervergleich | Decision | hoch | hoch | Vergleichs-/Anzeigenumfeld, Bias-Risiko | — | Do not target — kein eigenes Ranking, keine Bestenliste |

**Kannibalisierung:** Kein Keyword erhält einen zweiten Owner. `/seo-dresden/` übernimmt lokale SEO-, lokale GEO- und lokale Retainer-Intents in *einer* Seite; es entstehen keine Stadt- oder Variantenseiten. `/geo-betreuung/` bleibt der einzige Retainer-Owner.

## 4. `/seo-dresden/` — Umsetzung

Neu: `/seo-dresden/` (DE) und `/en/seo-agency-dresden/` (EN). Der EN-Slug folgt der bestehenden Konvention (`/geo-agentur-deutschland/` → `/en/geo-agency-germany/`); das Pendant ist technisch nötig, weil Layout und SEO-Validator für jede Route `de`, `en` und `x-default` verlangen, und inhaltlich vertretbar, weil auch DREIKON eine englische Dresden-Seite betreibt und Dresdens Technologieumfeld englischsprachige Entscheider enthält.

**Aufbau:** eigener Kicker, ein H1 mit lokalem Kaufintent, Lead, ein eigenes Signature-Visual, acht inhaltliche Abschnitte mit Frage-Headings, FAQ, interne Verweise, Abschluss-CTA und das bestehende Kontaktmodul.

**Signature-Visual „Wo eine Dresdner Suche endet":** eine originale Komposition, die die drei Ergebnisflächen einer lokalen Suche zeigt — organische Treffer, Kartenbereich, KI-Antwort. Sie erklärt eine reale Beziehung statt dekorativer Grafik, ist als Liste semantisch lesbar, wird per IntersectionObserver gestaffelt eingeblendet und ist bei `prefers-reduced-motion: reduce` sofort vollständig sichtbar. Ausdrücklich als schematisch gekennzeichnet, keine Messwerte.

**Headings (alle aus recherchiertem Intent, jede Frage wird im ersten Satz beantwortet):**

| H2 | Sofortantwort |
|---|---|
| Für welche Unternehmen in Dresden passt das? | Dienstleister mit erklärungsbedürftiger Leistung und wenigen wichtigen Seiten |
| Warum bringt eine Website mit guten Rankings trotzdem zu wenige Anfragen? | Sichtbarkeit und Anfrage sind zwei verschiedene Dinge |
| Was macht eine SEO-Agentur in Dresden konkret? | Technik, wichtige Leistungsseiten, lokale Auffindbarkeit, interne Verlinkung |
| Was hat SEO in Dresden mit ChatGPT und KI-Suche zu tun? | geteilte Grundlagen, aber eigene Crawler unabhängig vom Google-Index |
| Was kostet SEO in Dresden? | ab 1.500 € / 2.500 € / 1.250 € netto pro Monat |
| Wie läuft die Zusammenarbeit ab? | vier Schritte |
| Warum eine SEO-Agentur aus Dresden? | echte Zusammenarbeit vor Ort, kein Rankingvorteil durch Ort allein |
| Wann lohnt sich eine laufende SEO-Betreuung statt eines einmaligen Projekts? | sobald die Arbeit wiederkehrt |

**Preise:** identisch national, gelesen aus `src/content/offers.ts`. Keine lokalen Pakete, keine Rabatte.

**Proof:** ausschließlich reale Signale — tatsächlicher Standort, öffentlich einsehbares Dresdner Projekt, eigener offengelegter Suchdaten-Ausgangsstand, DAX-40-Erhebung (33/40 verwertbare robots.txt), persönliche Umsetzung. Ausdrücklicher Hinweis, dass Kundenzahlen nur mit Freigabe veröffentlicht werden und keine Platzierung versprochen wird.

**Structured Data:** kein zweites Unternehmen. Die bestehende Organization-Entität mit der realen Dresdner Adresse bleibt unverändert; die Seite setzt lediglich `Service.areaServed` auf `AdministrativeArea: Dresden, Sachsen`.

**Was die Seite nicht tut:** keine Stadtvarianten, kein „GEO-Agentur Dresden" als Kopfangebot, keine Marktführerschaft, kein Rankingversprechen, keine Local-Pack-Behauptung, keine erfundenen lokalen Cases.

## 5. Geänderte Money Pages

| Seite | Vorher | Nachher | Grund |
|---|---|---|---|
| `/geo-audit/` Title | „GEO Audit für Unternehmen" | **„GEO Audit für KI-Sichtbarkeit"** | Query statt Zielgruppenfloskel |
| `/geo-audit/` H2 | „Nicht nur prüfen, ob du genannt wirst." | **„Was wird bei einem GEO Audit geprüft?"** | reale Käuferfrage, Antwort im ersten Satz |
| `/geo-audit/` H2 | „Von Beobachtung zu konkreter Arbeit." | **„Was erhältst du nach dem Audit?"** | dito |
| `/geo-audit/` Methode | „Vier Schritte zu einem belastbaren Audit" | **„Wie läuft ein GEO Audit ab?"** | dito |
| `/content-optimierung-ai-suche/` Title | „Content-Optimierung für AI-Suche" | **„Seiten-Sprint: Leistungsseiten optimieren"** | trifft die tatsächliche Käufer-Query |
| `/content-optimierung-ai-suche/` Description | ohne Preis | mit „ab 2.500 € netto" | Preis ist Auswahlkriterium |
| `/geo-betreuung/` Title | „GEO-Betreuung für laufende Optimierung" | **„SEO- & GEO-Betreuung: laufende Optimierung"** | „SEO Betreuung" ist der etablierte Retainer-Intent |
| `/geo-betreuung/` H1 | „GEO wird wirksam, wenn aus Beobachtung verlässliche Arbeit wird." | **„Laufende SEO- und GEO-Betreuung für wiederkehrende Arbeit"** | benennt Leistung und Anlass statt einer Sentenz |
| `/geo-betreuung/` Description | Monitoring-Sprache | Preis, Laufzeit, SEO/Content/GEO | Retainer-Kaufentscheidung |
| `/ai-sichtbarkeit/` Title | „AI-Sichtbarkeit für Unternehmen" | **„KI-Sichtbarkeit: in ChatGPT sichtbar werden"** | deutsche Query statt englischer Fachbegriff |
| `/ai-sichtbarkeit/` Description | allgemein | beginnt mit „Warum wird mein Unternehmen in ChatGPT nicht genannt?" | direkte Query-Übereinstimmung |
| Alle drei Angebotsblöcke | „X: Umfang, Ergebnis und Preis" | **„Was kostet … und was ist enthalten?"** | Frage-Heading, das die Preiszeile sofort beantwortet |
| Retainer-Umfang in `offers.ts` | „monatlicher Prioritätsblock" | monatliche Entscheidungsregel anhand realer Signale, Laufzeit-/Verlängerungslogik | Retainer braucht einen erkennbaren wiederkehrenden Job |
| DAX-Research-Brücke | Leitfaden + AI-Crawlability | zusätzlich **GEO Audit als primärer CTA** | Research leitet Autorität in eine Money Page |

## 6. Internes Linkgefüge

Neu gesetzt:

- **Header → Diagnose:** „SEO Agentur Dresden" in DE und EN, direkt neben der nationalen Auswahlseite.
- **Header → Lösungen/Website:** „SEO in Dresden verbessern" als zweiter Eintrag nach der Bestandsseiten-Verbesserung.
- **Header → Zusammenarbeit:** Anker von „Laufend begleitet werden" auf **„Laufende SEO- und GEO-Betreuung"** geschärft.
- **Footer → Sichtbarkeit:** „SEO Agentur Dresden" in beiden Sprachen.
- **Research → Money Page:** DAX-Studie verlinkt jetzt primär den GEO Audit mit `revenueCta="research_bridge"`.
- **`/seo-dresden/` → Money Pages:** Preiskarten führen direkt in die drei vorbereiteten Formulare; zusätzlich kontextuelle Verweise zum GEO Audit und zur laufenden Betreuung sowie sechs beschreibende Verweise im Abschnitt „Passende Leistungen".

Alle Anker sind beschreibend („GEO Audit", „SEO in Dresden verbessern", „KI-Sichtbarkeit im GEO Audit prüfen") statt „mehr erfahren"; kein Exact-Match-Spam.

## 7. Buyer-State-Routing (unverändert erhalten)

| Käuferzustand | Ziel |
|---|---|
| rein technische Frage | kostenfreier technischer KI-Check |
| Ursache unklar | GEO Audit |
| Seitenproblem bekannt | Seiten-Sprint |
| wiederkehrender Bedarf | laufende Betreuung |
| lokaler Kaufintent | `/seo-dresden/` und von dort in die drei Wege |

## 8. Retainer-Strategie (MRR-Nordstern)

**Keywords mit dem höchsten Retainer-Potenzial:** SEO Betreuung, laufende SEO Betreuung, SEO Betreuung Dresden, SEO Agentur Dresden, GEO Betreuung, AI Visibility Monitoring, SEO für Dienstleister.

**Trafficpfade, die heute zum Retainer führen:** `/seo-dresden/` → Retainer-Abschnitt → `/geo-betreuung/`; `/geo-audit/` → Angebotsblock-Querverweis; `/geo-optimierung/` → Paketkarte 3; Header „Zusammenarbeit"; Footer.

**Natürliche Übergänge aus Audit und Sprint:** Der Audit endet mit priorisierten Maßnahmen und drei nächsten Schritten — wenn die Roadmap wiederkehrende Arbeit zeigt, ist die Betreuung der sachliche nächste Schritt. Der Seiten-Sprint dokumentiert einen Vorher-/Nachher-Stand und die nächsten Prioritäten; bleiben Prioritäten offen, folgt daraus Betreuung. Beides ohne Retainer-Zwang: Wenn objektiv kein wiederkehrender Bedarf besteht, wird ausdrücklich keiner empfohlen — das steht so auf `/seo-dresden/` und in den Angebotsgrenzen.

**Ist `/geo-betreuung/` langfristig der richtige Owner? — Antwort: nein, aber die Migration gehört nicht in diesen Sprint.**

Zusätzliche gezielte SERP-Prüfung am 06.09. zu „SEO Betreuung monatlich" gegenüber „GEO Betreuung":

| Beobachtung | Befund |
|---|---|
| „SEO Betreuung" | Mindestens acht etablierte Anbieter mit **eigener dedizierter Route**: Claneo, SEOAgents, medienpark, DLM Digital, maxonline, SEO Revolution, content-baer, seo-agentur.media. Der Slug `/seo-betreuung/` ist praktisch Marktstandard. |
| „GEO Betreuung" | **Keine eigenständige Kategorie.** Die Treffer sind durchgehend SEO-Betreuungsseiten, die GEO als Bestandteil erwähnen. |
| Marktlogik | Ein Wettbewerber formuliert es explizit: GEO gehört bewusst in die laufende Betreuung, nicht in ein Einmalprojekt — weil zitierfähige, konsistente Inhalte ein bewegliches Ziel sind. |
| Schlussfolgerung | Der Markt behandelt GEO als **Komponente innerhalb** der SEO-Betreuung, nicht als eigene Retainer-Kategorie. Eine Retainer-Seite, die nur „GEO Betreuung" heißt, versteckt das wertvollste Angebot unter einem Nischenbegriff. |

Damit ist die Frage klar beantwortet: **„GEO Betreuung" ist der falsche primäre Suchbegriff für einen Retainer, der SEO + Content + GEO umfasst.**

**Warum trotzdem keine Migration in diesem Sprint:** Der Auftrag verlangt ausdrücklich Research und Entscheidung, nicht sofortigen Routenbau, und eine zweite Retainer-Seite neben der bestehenden würde genau die Kannibalisierung erzeugen, die Bedingung 5 des Gates ausschließt. Deshalb wurden in diesem Sprint Title, H1, Description und drei neue Antwortpassagen von `/geo-betreuung/` auf den kombinierten SEO-/GEO-Retainer umgestellt; die URL blieb unverändert.

**Verbindliche Empfehlung für Sprint 3:** Den Retainer-Owner auf einen SEO-führenden Slug migrieren und `/geo-betreuung/` per 301 darauf weiterleiten — **kein** paralleler zweiter Retainer. Der Zeitpunkt ist günstig, weil die Seite heute nahezu keine Suchequity besitzt (0 Klicks, wenige Impressionen); je später die Migration, desto teurer wird sie. Entscheidungsregel: Zeigt der T1-Abruf am 04.10. weiterhin **null** Impressionen für Betreuungs-Queries, ist die Migration auszuführen; zeigt er Impressionen für „SEO Betreuung"-Varianten auf der bestehenden URL, reicht die Onpage-Umstellung und die URL bleibt.

**Ergänzende Untersuchung im ursprünglichen Umfang:** Die SERP-Evidenz zeigt „SEO Betreuung" als eigenständigen, etablierten Kaufintent mit dedizierten Wettbewerberrouten, während „GEO Betreuung" ein junger Nischenintent ist. Der tatsächliche Retainer umfasst SEO + Content + GEO, die URL benennt nur GEO.

In diesem Sprint wurde deshalb **kein zweiter Retainer-Owner gebaut** — das hätte Kannibalisierung mit der einzigen bestehenden Retainer-Seite erzeugt. Stattdessen wurden Title, H1 und Description von `/geo-betreuung/` auf den kombinierten SEO-/GEO-Retainer umgestellt, und der lokale Retainer-Intent läuft über `/seo-dresden/`.

**Empfehlung für Sprint 3, nicht in diesem Sprint entschieden:** Wenn `/geo-betreuung/` nach 8–12 Wochen weiterhin keine Impressionen für „SEO Betreuung"-Varianten erhält, ist eine eigene Route mit SEO-führendem Slug zu prüfen und `/geo-betreuung/` auf den reinen GEO-Retainer-Intent zu begrenzen. Entscheidungsgrundlage müssen echte GSC-Query-Daten sein, keine Annahme.

**Paketarchitektur:** Bewusst **keine** künstlichen Bronze/Silber/Gold-Stufen. Die Evidenz stützt sie heute nicht: Es gibt keinen einzigen gelieferten Retainer, aus dem sich Scope-Stufen ableiten ließen, und drei erfundene Stufen würden die Kaufentscheidung verkomplizieren statt vereinfachen. Empfohlen und umgesetzt ist ein **starker Basis-Retainer mit klarer monatlicher Entscheidungsregel** und ausdrücklich benannten Grenzen. Sinnvolle spätere Scope-Achsen wären Anzahl priorisierter Seiten, monatlicher Umsetzungsumfang, Messtiefe und Anzahl Sprachen — erst nach zwei bis drei real gelieferten Betreuungsmonaten festzulegen.

## 8.1 Messaging-Red-Team für die lokale Seite

Eine vorgeschlagene Formulierung wurde vor der Übernahme geprüft und **nicht** übernommen:

> „Für Dienstleister, deren Website erklären, überzeugen und zur Anfrage führen muss." / „Wir optimieren die wichtigsten Seiten dafür, in Google gefunden, von KI-Systemen richtig eingeordnet und von potenziellen Kunden verstanden zu werden."

| Prüffrage | Befund |
|---|---|
| „Dienstleister" zu eng? | Nein, genau richtig — breiter als „erklärungsbedürftige Dienstleistungen", deckt Beratung, Kanzlei, Planungsbüro und B2B ab. Übernommen. |
| „erklären, überzeugen, zur Anfrage führen" konkret genug? | Nur der dritte Teil trägt kommerziell. Die ersten beiden Verben beansprucht praktisch jeder Wettbewerber. |
| modern oder Agentur-Copy? | Erkennbare deutsche Agentur-Kadenz aus drei Verben. Kompetent, aber austauschbar. |
| „Website" oder „wichtige Seiten"? | **Kernproblem.** Satz 1 sagt „Website", Satz 2 sagt „wichtigste Seiten" — die beiden Sätze widersprechen sich. Der Website-Rahmen fällt hinter die Sprint-1.5-Differenzierung zurück und stellt PATERNOGA wieder neben jede Webagentur. |
| Satz 2 verbindet SEO + GEO + Conversion? | Ja, das Gerüst ist genau das Drei-Leser-Modell. Es wurde übernommen. |
| „von KI-Systemen richtig eingeordnet" verständlich? | Grenzwertig. „Eingeordnet" ist abstrakt; „korrekt wiedergegeben" ist konkreter und entspricht der übrigen Website. „ChatGPT" statt „KI-Systeme" erdet die Aussage. |
| „von potenziellen Kunden verstanden" zu weich? | Ja. Ziel ist die Anfrage, nicht Verständnis. Der Satz endete kommerziell zu früh. |

**Drei Varianten geprüft:** A klar/direkt, B hochwertig/methodisch, C kommerziell. B wurde verworfen (klingt nach interner Methode statt nach Kundenproblem, endet nicht kaufnah). A war am klarsten, öffnete aber mit unserer Kategorisierung statt mit dem Käuferziel. C hatte den besten Buyer- und Conversion-Fit.

**Umgesetzt wurde ein Hybrid aus C und A:**

> „Für Dienstleister, die über ihre Website mehr passende Anfragen brauchen. Wir arbeiten an den wenigen Seiten, über die das tatsächlich entsteht: gefunden bei Google, korrekt wiedergegeben in KI-Antworten wie ChatGPT und klar genug, dass passende Kunden anfragen."

Der Einstieg nennt das Käuferziel in vertrauter Sprache („Website"), verengt aber im zweiten Satz sofort auf die Seiteneinheit; die drei Leser bleiben erhalten; der Satz endet auf der Anfrage. „Passende Anfragen" statt „mehr Anfragen" vermeidet ein unbelegtes Mengenversprechen. Kein „erklärungsbedürftig", keine Verb-Trias.

**Nebeneffekt:** Die kürzere Fassung verbesserte zusätzlich die First-Viewport-Marge — 375×667 von 28 auf 53 px, 320×720 von 20 auf 69 px.

**Offene Schwäche, bewusst akzeptiert:** Keine der drei Varianten transportiert den Retainer. Der wiederkehrende Bedarf wird bewusst erst im eigenen Abschnitt „Wann lohnt sich eine laufende SEO-Betreuung?" eingeführt, weil ein Hero-Lead, der sofort ein Monatsmandat andeutet, den lokalen Erstkontakt belasten würde.

## 9. Google Business Profile — operativer Plan

Das Profil ist als Traffickanal freigegeben. In dieser Ausführungsumgebung besteht **kein Schreibzugriff** auf das Profil; die folgenden Schritte sind vorbereitet und dokumentiert, aber nicht ausgeführt.

| Priorität | Maßnahme | Ziel-Landingpage | UTM |
|---|---|---|---|
| 1 | Primärkategorie und Leistungen mit der Website abgleichen (SEO-Agentur als Primärkategorie, GEO/AI-Sichtbarkeit als Leistung) | `/seo-dresden/` | `utm_source=google&utm_medium=organic&utm_campaign=google_business_profile` |
| 2 | Website-Link des Profils auf die lokale Money Page statt auf die Startseite | `/seo-dresden/` | wie oben |
| 3 | Leistungen mit realen Einstiegspreisen anlegen, soweit das Format es zulässt | jeweilige Owner-Route | `utm_content=gbp_services` |
| 4 | Beitrag „Was kostet SEO in Dresden?" | `/seo-dresden/#preise` | `utm_content=gbp_post_pricing` |
| 5 | Beitrag „Warum bringt eine Website mit guten Rankings zu wenige Anfragen?" | `/seo-dresden/` | `utm_content=gbp_post_enquiries` |
| 6 | Beitrag „Wird dein Unternehmen in ChatGPT genannt?" | `/ai-sichtbarkeit/` | `utm_content=gbp_post_chatgpt` |
| 7 | Beitrag „GEO Audit ab 1.500 € netto" | `/geo-audit/` | `utm_content=gbp_post_audit` |

Bewertungen ausschließlich echt; kein Seeding, kein Kauf, keine Anreize. Keine Beitragsfrequenz um der Frequenz willen. Der bereits live beobachtete GBP-UTM-Traffic (`?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile`, 4 Impressionen/1 Klick) belegt, dass der Kanal grundsätzlich funktioniert.

## 10. Externe Auffindbarkeit — vorbereitet, nicht versendet

Vollständige, ausführungsfertige Texte: [Distribution Assets](revenue-sprint-2-distribution-assets-2026-09-06.md) — GBP-Kategorien, Profilbeschreibung und vier Beiträge mit UTM, einheitlicher Verzeichnis-Profiltext, drei LinkedIn-Entwürfe aus der DAX-Erhebung, Warm-Distribution-Segmente und Gesprächsaufhänger.

Externe Nachrichten und Accounteinträge bleiben laut `authorization` im Projektstatus gesperrt (`external_messages: false`, `account_writes: false`). Es wurde nichts eingereicht, versendet oder angelegt.

| Kandidat | Status | Nächster Schritt |
|---|---|---|
| Google Business Profile | vorhanden, Traffic belegt | Plan Abschnitt 9 |
| geoagenturen.de/submit | kostenloses Einreichen, redaktionelle Prüfung | Profiltext vorbereitet, Einreichung erfordert Freigabe |
| Agenturtipp Dresden | Aufnahmekriterien und Kosten prüfen | kein kostenpflichtiger Tarif blind buchen |
| SEO-united Dresden | Free-Eintrag vorhanden, Basic 99 €/12 Monate | Free zuerst |
| LinkedIn Pascal / PATERNOGA | vorhanden | DAX-Befunde als Distributionsanlass |
| Silicon Saxony | Beziehung vor Anfrage | erst mit konkretem Fachbeitrag |
| OMR / OMT / Podcasts | zurückgestellt | erst mit freigegebenem Kundencase |

**Entitätskonsistenz für alle Profile:** Name `Paternoga SEO & GEO Studio`, Wortmarke `PATERNOGA`, Website `https://www.paternoga-seo-geo.de`, Standort Dresden, Angebotsnamen GEO Audit / Seiten-Sprint / Laufende Betreuung, Kontakt `kontakt@paternoga-seo-geo.de`. Keine abweichenden Beschreibungen, keine Fantasieadressen, keine Wikipedia-/Wikidata-Selbsteinträge.

## 11. DAX-Research-Distribution

Keine neue Studie. Das bestehende Asset wird verwertet:

1. **Intern umgesetzt:** Die Studie verlinkt jetzt primär den GEO Audit; Autorität fließt in eine Money Page statt in eine Sackgasse.
2. Drei LinkedIn-Beiträge aus vorhandenen Befunden (33/40 verwertbare robots.txt; sieben unbekannt; Unterschied zwischen Trainings- und Suchcrawlern) — vorbereitet, Versand nicht autorisiert.
3. Ein erklärendes Video (5–8 Minuten) plus Transkript als spätere Zitatquelle.
4. Der Befund „Crawler-Zugriff ist eine Voraussetzung, keine Sichtbarkeitsgarantie" ist der beste fachliche Aufhänger für Partner- und Redaktionsgespräche.

## 12. AI-/Answer-Engine-Abdeckung

Geprüft, ob die Website genug explizite Belege enthält, damit ein Antwortsystem eine korrekte Aussage bilden kann. Abdeckung nach diesem Sprint:

| Käuferfrage | Explizite Antwortpassage |
|---|---|
| Was kostet ein GEO Audit? | Frage-H2 plus Preiszeile „ab 1.500 € netto, einmalig" auf `/geo-audit/` |
| Was ist im Seiten-Sprint enthalten? | Angebotsblock mit Umfang und Deliverables auf `/content-optimierung-ai-suche/` |
| Was kostet laufende Betreuung und was passiert monatlich? | Frage-H2, Preis pro Monat, monatliche Entscheidungsregel auf `/geo-betreuung/` |
| Welche Agentur verbindet SEO und GEO? | Startseite, `/geo-agentur-deutschland/`, `/seo-dresden/` |
| Welche SEO-Agentur in Dresden versteht auch KI-Suche? | `/seo-dresden/`, eigener Abschnitt |
| Was kostet SEO in Dresden? | Frage-H2 mit allen drei Einstiegspreisen |
| Warum wird mein Unternehmen in ChatGPT nicht genannt? | `/ai-sichtbarkeit/` Title und Description, Analyseabschnitte |
| Wer optimiert bestehende Leistungsseiten für Google und KI-Suche? | `/content-optimierung-ai-suche/`, `/seo-dresden/` |
| Wann lohnt sich Betreuung statt Einmalprojekt? | `/seo-dresden/` Retainer-Abschnitt, `/geo-betreuung/` |

Maschinenlesbar zusätzlich über `Service.offers` mit `minPrice`, `valueAddedTaxIncluded: false` und `UnitPriceSpecification` pro Monat. **Kein erfundener AI-Sichtbarkeitsscore, keine Behauptung über Erscheinen in ChatGPT Shopping oder Instant Checkout.**

## 13. Snapshot — Entscheidung erforderlich, nicht getroffen

Der bezahlte Kaufentscheidungs-Snapshot ist kommerziell freigegeben, aber **nicht implementiert**. Grund: Im Repository existiert **kein beschlossener öffentlicher Preis**. Die genannte Größenordnung von 249 € netto ist bisher ausschließlich gesprächsweise gefallen und in keinem Zustandsdokument als Entscheidung hinterlegt. Einen Preis zu erfinden würde gegen die Preisregel und gegen die Single-Source-Architektur verstoßen.

**Benötigte Entscheidung, um den Snapshot zu bauen:** öffentlicher Nettopreis, Lieferumfang (Anzahl Fragen, Oberflächen, Wiederholungen, Wettbewerber), Lieferzeit, Grenzen, Owner-Route und ob der Snapshot ein eigener `offer_type` im Attributionsmodell wird. Danach ist die Umsetzung mechanisch: Eintrag in `src/content/offers.ts`, Angebotsblock, JSON-LD, Attribution, Tests.

## 14. Messplan

**T0 ist Abschnitt 1.** T1 wird 28 Tage nach Deployment erhoben, also am **04.10.2026**, mit demselben GSC-Abruf und identischer Methode.

| Bereich | Kennzahl | Takt |
|---|---|---|
| Search | Impressionen, Klicks, CTR, Position je Kaufseite; Query-Cluster lokal vs. national; DE vs. EN | wöchentlich, Entscheidung monatlich |
| Lokal | erste Impressionen für Dresden-Queries; GBP-Websiteklicks über UTM | wöchentlich |
| Kommerziell primär | Retainer-Anfragen, Retainer-Gespräche, gewonnene Betreuung, neuer MRR | monatlich |
| Kommerziell sekundär | Audit- und Sprint-Anfragen, CTA-Klicks je Angebot, Formularstarts | wöchentlich |
| Leading | `geo_audit_cta_click`, `page_sprint_cta_click`, `geo_support_cta_click`, `contact_form_start`, technischer Check | wöchentlich |
| AI | nur reproduzierbare Beobachtungen mit Datum und Modus | pro Messwelle |

## 15. Top-5-Experimente bis T1

| # | Hypothese | Aktion | Primär-KPI | Sekundär | Fenster | Entscheidungsregel |
|---|---|---|---|---|---|---|
| E1 | Eine eigene lokale Money Page erfasst Dresdner Kaufintent besser als die generische Startseite | `/seo-dresden/` live | Nicht-Brand-Impressionen für Dresden-Queries | qualifizierte Anfragen | 28 Tage | > 0 lokale Impressionen → ausbauen; 0 → Indexierung und interne Links prüfen, nicht sofort neue Seiten bauen |
| E2 | „SEO Betreuung" im Title erschließt den Retainer-Intent | `/geo-betreuung/` Title/H1/Description | Impressionen für Betreuungs-Queries | Retainer-Anfragen | 28 Tage | Impressionen ohne Klicks → Snippet schärfen; keine Impressionen → eigene SEO-Retainer-Route in Sprint 3 prüfen |
| E3 | Sichtbare Preise verbessern die Klickrate auf Kostenfragen | Preis in Description und Frage-H2 | CTR der drei Angebotsseiten | Angebotsanfragen | 28 Tage | CTR steigt → auf weitere Seiten übertragen |
| E4 | Query-nahe Titles heben die Audit- und Sprintseiten aus Position 30+ | neue Titles | Durchschnittsposition je Zielquery | Impressionen | 28 Tage | keine Bewegung → interne Verlinkung und Inhaltstiefe vor weiteren Title-Iterationen |
| E5 | Die Research-Brücke leitet Fachtraffic in die Money Page | DAX → GEO Audit | `research_bridge`-CTA-Klicks | Auditanfragen | 28 Tage | > 0 Klicks → Brücke auf Knowledge-Seiten ausweiten |

## 16. Nicht ausgeführt / Grenzen

- Keine externe Nachricht versendet, kein Verzeichnisprofil eingereicht, kein GBP-Schreibzugriff.
- Kein Snapshot veröffentlicht (Abschnitt 13).
- Keine neue Studie erhoben.
- Keine Stadtvarianten, keine programmatischen Seiten, keine Bestenlisten.
- Keine Warm-Partner-Nachricht versendet; die Zielgruppenkriterien sind in Abschnitt 10 dokumentiert.
