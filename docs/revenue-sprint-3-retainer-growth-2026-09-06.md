# Revenue Sprint 3 — Retainer Growth, Distribution & MRR

Stand: 06.09.2026. Ausführung nach [Sprint 2](revenue-sprint-2-traffic-2026-09-06.md) (`PASS`, live, Releases `8555b2b` / `e053c83`). Positionierung aus [Sprint 1.5](seo-positioning-sprint-1-5-2026-09-06.md) und `src/content/offers.ts` als Single Source bleiben unverändert.

Wirtschaftliches Hauptziel: **passende monatliche Retainer / MRR**. Audit und Seiten-Sprint bleiben eigenständig wertvoll, sind aber überwiegend Einstiegs- und Diagnoseprodukte.

---

## 1. Ausgangsstand

Sprint 2 hat den entscheidenden Befund geliefert und bewusst nicht umgesetzt: Das wertvollste Angebot lag unter der falschen URL. Sprint 3 korrigiert das.

| Feld | Stand vor Sprint 3 |
|---|---|
| Retainer-Owner | `/geo-betreuung/`, `/en/geo-support/` |
| Öffentlicher Einstiegspreis | 1.250 € netto / Monat, zunächst 3 Monate |
| Search Equity der Retainer-Seite | praktisch null: 0 Klicks, wenige Impressionen für Monitoring-Varianten |
| Sitemap | 42 Routen |
| GSC T0 (28 Tage bis 06.09.) | 7 Klicks / 62 Impressionen |
| Distribution | Assets fertig, nichts versendet |

## 2. Retainer Search Research — aktueller Check

Drei zusätzliche gezielte Abfragen am 06.09.2026, keine neue Großrecherche.

| Abfrage | Befund | Schluss |
|---|---|---|
| „SEO Betreuung" Kosten/Leistungen monatlich | Dichter kommerzieller SERP mit dedizierten Seiten: davidkeiser, 14agency, Cuvillier, seiten-werk, SEOAgents, Claneo, seo-monkey, maxonline, SEO Revolution, content-baer, Gerlach. `/seo-betreuung/` ist faktisch Slug-Standard. | Etablierter, kaufnaher Retainer-Intent mit eigener URL-Konvention. |
| Preisindikationen | Gesamtspanne 250–2.500 €/Monat; **KMU-Professionalband 2026 ausdrücklich 1.000–1.500 €/Monat**; Agenturen typisch 2.000–3.500 €; empfohlener Mindestaufwand ca. 980 €/Monat; Gerlach GEO-Betreuung ab 2.500 €. | **1.250 € netto liegt exakt im dokumentierten KMU-Professionalband.** Der bestehende Preis ist marktvalidiert und braucht keine Änderung. |
| „GEO Betreuung" als eigene Kategorie | Keine eigenständige Kategorie. Treffer sind SEO-Betreuungsseiten, die GEO als Bestandteil führen. Ein Wettbewerber formuliert explizit, GEO gehöre in die laufende Betreuung statt in ein Einmalprojekt. | Der Markt behandelt GEO als **Komponente innerhalb** der SEO-Betreuung. |
| „SEO Betreuung Dresden" | **Kein eigener SERP.** Alle Treffer sind „SEO Agentur Dresden"-Seiten, die Betreuung als Leistung nennen (u. a. 123-webseiten mit dem Titel „SEO Agentur Dresden SEO Betreuung und Beratung"). Lokale Preisindikation ab ca. 800 €/Monat. | Lokaler Retainer ist **Sub-Intent** von „SEO Agentur Dresden", kein eigener Owner. |

## 3. Entscheidung zum Owner

**Der Naming-Fehler:** Das wirtschaftlich wichtigste Angebot — ein Retainer aus SEO + Content + GEO — lag unter `/geo-betreuung/`, also unter dem einzigen Bestandteil, für den es **keine** etablierte Kaufnachfrage gibt. SEO ist der Demand-Capture-Begriff, GEO ist die Differenzierung. Die URL hat genau das Gegenteil kommuniziert.

**Verdikt:** `/seo-betreuung/` ist der richtige langfristige nationale Owner. Die Sprint-2-Evidenz wurde bestätigt, nicht revidiert.

**Migration ausgeführt.** Zeitpunkt bewusst jetzt: Die alte Route hatte praktisch keine Search Equity, sodass die Migration heute nahezu kostenlos ist und mit jeder gewonnenen Position teurer geworden wäre.

**Kein lokaler Retainer-Owner.** `/seo-betreuung-dresden/` wurde geprüft und **verworfen** — kein eigenständiger Intent, klares Doorway- und Kannibalisierungsrisiko. Der lokale Retainer-Bedarf bleibt im bestehenden Abschnitt auf `/seo-dresden/`.

## 4. Migration — Umfang

| Ebene | Umsetzung |
|---|---|
| Routen | `src/pages/geo-betreuung/` → `src/pages/seo-betreuung/`; `src/pages/en/geo-support/` → `src/pages/en/seo-support/` (per `git mv`, Historie erhalten) |
| Redirects | 301 in `src/middleware.ts`, **vor** der Trailing-Slash-Normalisierung, damit kein 308→301-Chain entsteht. Vier Formen abgedeckt: `/geo-betreuung`, `/geo-betreuung/`, `/en/geo-support`, `/en/geo-support/` |
| Canonical | `https://www.paternoga-seo-geo.de/seo-betreuung/` bzw. `/en/seo-support/` |
| hreflang | de/en/x-default auf die neuen Routen |
| Sitemap | alte Einträge ersetzt, weiterhin 42 Routen |
| Crawler-Inventar | `llms.txt` und `llms-full.txt` aktualisiert |
| Interne Links | Header (Leistungen/Begleitung, Lösungen/Zusammenarbeit), Footer, GEO-Hub-Paketkarte, `/seo-dresden/` Retainer-Abschnitt und Preiskarte, Related-Grid |
| JSON-LD | `Service.offers` folgt der neuen URL; `UnitPriceSpecification` mit `minPrice: 1250`, `unitCode: "MON"` |
| Attribution | `offer_type: geo_support` **bewusst unverändert** — eine interne Umbenennung würde die Messhistorie brechen, ohne dem Käufer zu nützen. `source: geo-support-service` ebenfalls stabil. Öffentliche Bezeichnung ist trotzdem SEO-led. |
| Analytics | `geo_support_cta_click` und `geo_support_inquiry_success` unverändert; kein Event-Bruch |
| Prüfskripte | SEO-Validator, Crawler-Validator, Static-Smoke, Shadcn-Verify, Research-Crawl |
| Tests | fünf neue Regressionstests für Einzelsprung-301, Zielstatus 200 und Sitemap-Bereinigung |

**Redirect-Nachweis (lokal, vor Deployment):** alle vier Formen `301` mit `hops=1` und Endstatus `200`. Die alte URL ist nicht mehr in der Sitemap und damit kein paralleler indexierbarer Owner.

## 5. Retainer-Positionierung

> **Laufende SEO-, Content- und GEO-Betreuung für Unternehmen, bei denen die Arbeit an den wichtigen Seiten wiederkehrt statt einmal stattzufinden.**

Sichtbar auf der Seite, nicht nur im Dokument:

- **H1:** „Laufende SEO-, Content- und GEO-Betreuung"
- **Lead:** benennt Käuferzustand, monatliche Entscheidungsregel, Preis und Initiallaufzeit in einem Absatz
- **„Wann lohnt sich laufende Betreuung?"** statt „Drei Dinge, die im Alltag zählen"
- **„Was passiert jeden Monat?"** statt „Betreuung ist ein Rhythmus, kein Dauerprojekt"
- **„Wie werden die Prioritäten gewählt?"** statt „Aus Beobachtung wird eine nächste Entscheidung"

## 6. Der monatliche Job

Die im Auftrag vorgeschlagene Logik wurde geprüft und in einem Punkt geschärft. Vorgeschlagen war: Signale → Priorität → Umsetzung → Messung → nächste Priorität. Das ist richtig, lässt aber offen, **was passiert, wenn nichts Dringendes anliegt** — genau dort entstehen sonst Beschäftigungsleistungen.

Umgesetzte Fassung:

1. **Signale prüfen** — Such-, KI- und Anfragesignale des Vormonats.
2. **Eine Priorität bestimmen** — die aktuell wichtigste Wachstumsbremse, nicht eine Aufgabenliste.
3. **Umsetzen** — konkrete Änderung an einer Seite, an der Struktur oder an der Technik, innerhalb der vereinbarten Kapazität.
4. **Dokumentieren** — was geändert wurde und warum.
5. **Nachmessen** — was sich nach der Änderung tatsächlich bewegt hat.
6. **Nächste Priorität ableiten** — oder ausdrücklich festhalten, dass aktuell keine sinnvolle Maßnahme ansteht.

Punkt 6 ist die Ergänzung: Wenn ein Monat keinen sinnvollen Hebel hergibt, wird das dokumentiert statt Arbeit erfunden. Das ist die Bedingung dafür, dass der Retainer kein „billiger Dauervertrag" ist.

Der Käufer bekommt monatlich **eine getroffene Entscheidung und eine umgesetzte Änderung**, nicht einen Report.

## 7. Paketarchitektur und Wirtschaftlichkeit

### Entscheidung

**Veröffentlicht wird weiterhin genau eine Stufe: ab 1.250 € netto pro Monat.** Zusätzliche öffentliche Preisstufen wurden entworfen und durchgerechnet, aber **nicht veröffentlicht**.

Begründung: Es existiert bis heute **kein einziger gelieferter Retainer**. Scope-Stufen ohne Lieferdaten wären geraten, und drei Stufen würden die Kaufentscheidung verkomplizieren statt vereinfachen — genau das, was der Auftrag ausschließt. Der bestehende Preis ist durch den aktuellen SERP-Check als marktüblich bestätigt (KMU-Professionalband 1.000–1.500 €/Monat).

### Entworfene Architektur (bereit, noch nicht bepreist veröffentlicht)

Differenzierungsachsen, die sich aus der tatsächlichen Lieferung ergeben — nicht aus Marketingstufen:

| Achse | Basis (öffentlich) | Erweiterung (Scope nach Absprache) |
|---|---|---|
| priorisierte Seiten | 1 Priorität pro Monat | mehrere parallele Seitenstränge |
| Umsetzungskapazität | bis 8 Stunden | 16 Stunden |
| Messpanel | festes Panel, monatliche Einordnung | zusätzliche AI-Antwortmessung in Wellen |
| Content | Überarbeitung bestehender Seiten | zusätzliche neue Inhalte |
| Märkte / Sprachen | 1 Markt, 1 Sprache | zusätzlicher Markt oder zweite Sprache |
| Review | monatlich | monatlich plus Quartalsreview |

### Unit Economics

Interne Annahmen aus der bestehenden Research: 75 €/Stunde interner Ansatz, bis 100 € direkte Messkosten pro Monat.

| Stufe | Preis netto/Monat | Kapazität | Interne Kosten | Deckungsbeitrag | Effektiver Stundenwert |
|---|---:|---:|---:|---:|---:|
| Basis (live) | 1.250 € | 8 h | 600 € + bis 100 € | **550 €** | 156 €/h |
| Erweiterung (Entwurf) | 2.400 € | 16 h | 1.200 € + bis 100 € | 1.100 € | 150 €/h |

Die Entwurfsstufe hält den effektiven Stundenwert bewusst konstant; sie verkauft mehr Kapazität, keinen höheren Satz.

### Offene Preisentscheidung

**Zu entscheiden, bevor eine zweite Stufe öffentlich wird:** exakter Preis der Erweiterungsstufe (Entwurf 2.400 €), ob sie als eigenes Paket oder als Kapazitätsoption erscheint, und ob die Initiallaufzeit dort ebenfalls drei Monate beträgt. Grundlage sollte mindestens **ein real gelieferter Betreuungsmonat** sein, damit die Stundenannahme belegt statt geschätzt ist.

## 8. MRR-Modell — 3 / 5 / 10 Retainer

Szenarien zum aktuellen Einstiegspreis, ohne Erweiterungsstufe. **Keine Prognose** — eine Kapazitäts- und Deckungsbeitragsrechnung.

| Szenario | MRR netto | Lieferaufwand | Deckungsbeitrag/Monat | Anteil an 12 h Growth-Woche |
|---:|---:|---:|---:|---|
| 3 Retainer | 3.750 € | 24 h/Monat | 1.650 € | gut tragbar neben Akquise |
| 5 Retainer | 6.250 € | 40 h/Monat | 2.750 € | Akquisezeit beginnt zu leiden |
| 10 Retainer | 12.500 € | 80 h/Monat | 5.500 € | **Kapazitätsgrenze überschritten** |

**Kapazitätsgrenze:** Bei ~160 verfügbaren Arbeitsstunden im Monat und dem dokumentierten Anspruch, Growth und Lieferung parallel zu betreiben, ist die realistische Obergrenze für eine Person **etwa 6–8 Basis-Retainer**, weil neben 48–64 Lieferstunden noch Akquise, Angebote, Audits und Seiten-Sprints laufen.

**Wann Pricing oder Delivery-Struktur angepasst werden müssen:**

- ab ca. **6 Retainern**: Preis der Erweiterungsstufe festlegen und neue Basisplätze nur noch selektiv vergeben;
- ab ca. **8 Retainern**: entweder Einstiegspreis anheben oder Lieferung teilweise delegieren — sonst verdrängt die Betreuung genau die Projekte, die neue Betreuung erzeugen;
- wenn die tatsächliche Lieferzeit dauerhaft über 8 h/Monat liegt: Scope reduzieren oder Preis anheben, **nicht** unsichtbar Mehrarbeit liefern.

Die wirtschaftlich interessante Zone ist damit **5–8 Retainer**, nicht 10. Das ist der eigentliche Zielkorridor der nächsten Monate.

## 9. Funnel zum Retainer

Kein verpflichtender linearer Funnel. Direkte Einstiege bleiben erhalten:

| Käuferzustand | Ziel |
|---|---|
| rein technische Frage | kostenfreier technischer KI-Check |
| Ursache unklar | GEO Audit |
| bekanntes Seitenproblem | Seiten-Sprint |
| **wiederkehrender Bedarf** | **direkt Retainer** |
| lokaler Kaufintent | `/seo-dresden/`, von dort in alle drei Wege |

**Audit → Retainer:** Der Audit endet mit priorisierten Maßnahmen und den drei wichtigsten nächsten Schritten. Zeigt die Roadmap wiederkehrende Arbeit, ist die Betreuung der sachliche nächste Schritt. Der Angebotsblock des Audits verweist bereits quer, ohne Upselling-Druck.

**Seiten-Sprint → Retainer:** Der Sprint liefert einen dokumentierten Vorher-/Nachher-Stand und die nächsten Prioritäten. Bleiben Prioritäten offen, ist Betreuung das Continuity-Produkt.

**Gegenrichtung ausdrücklich erhalten:** Auf `/seo-dresden/` und in den Angebotsgrenzen steht, dass ohne objektiv wiederkehrenden Bedarf **keine** Betreuung empfohlen wird.

## 10. Search-Intent-Fragen auf der Retainer-Seite

Aus dem Phase-1-Check abgeleitet; jede Frage wird im ersten Satz beantwortet.

| Frage | Ort |
|---|---|
| Was kostet die laufende Betreuung und was passiert monatlich? | Angebotsblock, Preiszeile antwortet sofort |
| Wann lohnt sich laufende Betreuung? | Abschnittsüberschrift |
| Was passiert jeden Monat? | Abschnittsüberschrift plus Sechs-Schritt-Schleife |
| Wie werden die Prioritäten gewählt? | Abschnittsüberschrift |
| Was kostet eine monatliche SEO-Betreuung? | FAQ, mit Marktband zur Einordnung |
| Was ist der Unterschied zwischen SEO-Betreuung und GEO-Betreuung? | FAQ |
| Ist das laufende SEO-Optimierung oder nur Reporting? | FAQ |
| Brauche ich vorab ein GEO Audit? | FAQ |
| Gibt es eine Sichtbarkeitsgarantie? | FAQ, verneint |

## 11. Interne Verlinkung

Retainer erreichbar aus: Header (Leistungen → Begleitung, Lösungen → Zusammenarbeit), Footer, GEO-Hub-Paketkarte 3, `/seo-dresden/` Retainer-Abschnitt und Preiskarte, Angebotsblock-Querverweise von Audit und Sprint. **Keine Retainer-Links auf Seiten, deren Käuferzustand nicht wiederkehrend ist** — der kostenfreie Check und die reinen Wissensseiten verlinken weiterhin nicht auf die Betreuung.

## 12. Distribution

Die Sprint-2-Assets wurden **nicht neu geschrieben**, sondern auf die Migration aktualisiert: Retainer-Links, Angebotsbezeichnung und die neue URL. Details und finale Texte: [Distribution Assets](revenue-sprint-2-distribution-assets-2026-09-06.md).

**Ausführungsstatus unverändert blockiert.** `authorization.external_messages` und `authorization.account_writes` stehen weiterhin auf `false`; für das Google-Unternehmensprofil besteht in dieser Umgebung kein Schreibzugriff. Der Auftrag verlangt ausdrücklich, diese Flags nicht eigenmächtig zu umgehen. **Es wurde nichts veröffentlicht, versendet oder eingereicht.**

Was stattdessen geliefert wurde: eine unmittelbar ausführbare Veröffentlichungssequenz mit finalen Texten, Ziel-URLs, UTMs und Reihenfolge, sodass kein weiterer Strategiedurchlauf nötig ist.

| Woche | Fläche | Inhalt | Ziel-URL |
|---|---|---|---|
| 1 | GBP | Kategorien, Website-Link, Leistungen | `/seo-dresden/` |
| 1 | GBP Post | „Was kostet SEO in Dresden?" | `/seo-dresden/#preise` |
| 2 | LinkedIn | DAX-Befund, 33/40 verwertbare robots.txt | `/research/ki-crawler-readiness-dax-40-2026/` |
| 2 | GBP Post | Rankings ohne Anfragen | `/seo-dresden/` |
| 3 | LinkedIn | Zugriff ≠ Nennung | `/wissen/ki-crawler-robots-txt/` |
| 3 | GBP Post | Wird dein Unternehmen in ChatGPT genannt? | `/ai-sichtbarkeit/` |
| 4 | LinkedIn | transparente Einstiegspreise als Auswahlkriterium | `/seo-betreuung/` |
| 4 | GBP Post | GEO Audit ab 1.500 € netto | `/geo-audit/` |
| 4 | Verzeichnisse | geoagenturen.de, SEO-united Free, Agenturtipp prüfen | jeweiliger Owner |

**UTM-Konvention verbindlich:** `utm_source` = google / linkedin / directory / partner; `utm_medium` = organic / social / referral; `utm_campaign` = `gbp_local` / `research_dax` / `retainer_launch`; `utm_content` = konkreter Beitrag.

**Warm-Partner-Test:** fünf Segmente und Gesprächsaufhänger stehen fertig in den Distribution Assets; erste Welle maximal fünf Kontakte. **Nicht versendet**, Kontaktliste liegt beim Nutzer.

**Bewertungen:** Prozess dokumentiert — echte Kunden nach abgeschlossener Lieferung, persönlicher Kurztext, kein vorformulierter Bewertungstext, keine Gegenleistung. Keine Bewertung erzeugt.

## 13. Snapshot-Entscheidung

**DEPRIORISIERT.** Nicht gebaut, nicht bepreist, nicht veröffentlicht.

Begründung entlang der geforderten Kriterien:

- **Funnel-Reibung:** Der kostenfreie technische Check deckt den Low-Commitment-Einstieg bereits ab; der Audit deckt die bezahlte Diagnose ab. Der Snapshot säße zwischen beiden.
- **Kannibalisierung:** Ein 249-€-Snapshot konkurriert direkt mit dem 1.500-€-Audit um denselben Käuferzustand „Ursache unklar" — und zwar zugunsten des deutlich margenschwächeren Produkts.
- **Operativer Aufwand:** manuelle Lieferung mit Zeitgrenze 45 Minuten, ohne Automatisierung, bei bisher null gelieferten Einheiten.
- **Lead Quality:** ein kleiner Kaufbetrag qualifiziert schwächer als eine Auditanfrage.
- **Retainer-Ziel:** Der Snapshot führt nicht kürzer zum Retainer als der Audit.

**MRR vor Produktvielfalt.** Der Preis von 249 € bleibt eine Gesprächshypothese ohne Repo-Beschluss und wird nicht veröffentlicht. Die Entscheidung ist umkehrbar, sobald die Auditnachfrage belegt und der Snapshot als Vorstufe messbar sinnvoll ist.

## 14. Agent-Readable-Prüfung

Die Retainer-Fragen müssen aus dem sichtbaren HTML beantwortbar sein. Abdeckung nach der Migration:

| Agentenfrage | Sichtbare Quelle |
|---|---|
| Was kostet die laufende Betreuung? | Preiszeile „ab 1.250 € netto / Monat" |
| Was passiert jeden Monat? | Abschnitt „Was passiert jeden Monat?" plus Angebots-Umfang |
| Wie lange läuft die Zusammenarbeit? | Dauerzeile: zunächst drei Monate, danach monatlich kündbar |
| Was ist enthalten / nicht enthalten? | Angebotsblock „Du erhältst" und „Grenzen" |
| Ist SEO / GEO / Content enthalten? | H1, Lead und Umfangszeile nennen alle drei |
| Kann ich direkt mit Betreuung starten? | FAQ „Brauche ich vorab ein GEO Audit?" — nein |
| Was unterscheidet Audit, Sprint und Betreuung? | „Geeignet für" je Angebot plus Querverweise |

Structured Data behauptet nichts Unsichtbares: `UnitPriceSpecification` mit `minPrice: 1250`, `unitCode: "MON"`, `valueAddedTaxIncluded: false` — identisch zur sichtbaren Preiszeile, gelesen aus derselben Quelle.

## 14.1 Abnahme, Release und Live-Verifikation

- Lokal: Astro check 190 Dateien ohne Fehler, Build, 11 Unit-Tests, Produktions-API-Vertrag, 42 SEO-Routen, Crawler-, Security- und Static-Prüfungen, **144 Browsertests** inklusive fünf neuer Redirect-Regressionen. `git diff --check` sauber.
- Releases: `752cc09` (Migration) und `b5692d7` (Redirect-Fix).

**Ein echter Live-Fehler wurde gefunden und behoben.** Die Middleware-301 funktionierten lokal einwandfrei, lieferten in Production aber **404 mit gesetztem Location-Header**: Für die stillgelegten Pfade existiert keine Route mehr, weshalb die Vercel-Routing-Schicht 404 beantwortete, während die Middleware ihren Header bereits angehängt hatte. Ein 404 mit Location ist kein Redirect — die alten URLs wären gestrandet und die Migration hätte Search Equity vernichtet statt übertragen.

Behebung: vier Redirects auf Plattformebene in `vercel.json` mit explizitem `statusCode: 301`. Plattform-Redirects laufen vor dem Routing und können deshalb nicht 404 werden. Die Middleware-Regeln bleiben für den Standalone-Server der lokalen Regression bestehen; beide zeigen auf dasselbe Ziel, sodass kein Chain entsteht.

**Live verifiziert gegen `https://www.paternoga-seo-geo.de`:**

| Prüfung | Ergebnis |
|---|---|
| `/geo-betreuung` und `/geo-betreuung/` | 301 → `/seo-betreuung/`, `hops=1`, Endstatus 200 |
| `/en/geo-support` und `/en/geo-support/` | 301 → `/en/seo-support/`, `hops=1`, Endstatus 200 |
| SEO-Validator | 42 Routen bestanden |
| Browserprüfungen | 65 bestanden, inklusive der fünf Redirect-Regressionen gegen Production |
| Retainer-Seite | H1 „Laufende SEO-, Content- und GEO-Betreuung", Canonical korrekt, Preis „ab 1.250 €" sichtbar |
| Offer-Schema | `url` folgt der neuen Route, `minPrice: 1250` identisch zur sichtbaren Preiszeile |
| Frage-Headings live | „Was kostet die laufende Betreuung und was passiert monatlich?", „Was passiert jeden Monat?", „Wie werden die Prioritäten gewählt?" |

## 15. Messplan

**T+7 (13.09.2026) — Distribution:** Referral-Sessions je UTM-Quelle, GBP-Websiteklicks, CTA-Klicks je Angebot, eingegangene Anfragen. Noch keine Suchdaten interpretieren.

**T+14 (20.09.2026) — Frühe Suche:** Indexierung der neuen Retainer-Route, erste Impressionen für Betreuungs-Queries, lokale Dresden-Queries, Redirect-Verarbeitung in der Search Console. Keine Title-/H1-Änderungen aufgrund einzelner Impressionen.

**T+28 (04.10.2026) — Hauptvergleich:** vollständiger GSC-Abruf gegen den T0 aus Sprint 2 (7 Klicks / 62 Impressionen). Auszuwerten: Impressionen und Klicks je Kaufseite, Retainer-Query-Cluster, lokale Queries, CTR der neuen Titles, `geo_support_cta_click` und `geo_support_inquiry_success`, qualifizierte Retainer-Anfragen und neuer MRR.

**Entscheidungsregeln:** Erhält `/seo-betreuung/` bis T+28 Impressionen für Betreuungs-Queries, war die Migration richtig und wird durch Inhaltstiefe verstärkt. Bleibt sie bei null, ist zuerst Indexierung und interne Verlinkung zu prüfen — nicht sofort erneut die URL zu ändern.
