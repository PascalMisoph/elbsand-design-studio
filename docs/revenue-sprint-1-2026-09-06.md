# Revenue Sprint 1 — Umsetzung und Nachweise

Stand: 06.09.2026. Auftrag: Attribution, kaufbarer GEO Audit, direkter Seiten-Sprint. Keine neue Route, Studie, externe Akquise oder Preisveröffentlichung. Bestehender technischer Audit bleibt geschlossen.

## Status

- IMPLEMENTED: Angebotsumfang DE/EN, direkte Audit-/Sprint-Formulare und Header-/Hero-CTAs, sekundärer technischer Check, Leadkontext, consentabhängige Funnel-Ereignisse, eigene Arbeitsprobe.
- VERIFIED: vollständiger `npm run verify` bestanden: Astro 186 Dateien ohne Fehler/Warnungen/Hinweise, Build, 11 Unit-Tests, isolierter Produktions-API-Vertrag, 40 SEO-Routen, Crawler-/Security-/Static-Prüfungen und 131 Browsertests (5,8 Minuten). Desktop-/Mobile-Screenshots erneut geprüft; `git diff --check` ohne Whitespacefehler. Deployment und Live-Verifikation stehen noch aus.
- PLANNED / NEXT SPRINT: `/seo-dresden/`, Partner-/Referral-Aktivierung und manuelle Snapshots.
- PRIORITIZED_NOT_STARTED: beide neuen Research-Projekte. Keine Markt- oder Studienerhebung in diesem Sprint.

## Revenue Friction: vorher → nachher

| Vorher | Änderung |
|---|---|
| Audit-Hero und Header führen zum technischen Gratischeck | Auf den beiden Angebotsseiten führen Header und Hero direkt zum jeweiligen Anfrageformular. Der kostenlose Check bleibt auf der Audit-Seite sekundär und im Ressourcenmenü erreichbar. |
| Unklarer Umfang, keine konkrete Übergabe | Audit mit einem definierten Käuferfragen-/Quellenrahmen; Seiten-Sprint mit bis zu drei bestehenden kaufnahen Seiten. Dauer, Inputs, Outputs und Grenzen benannt; Preis auf Anfrage. |
| Kontaktweg wählen und bekanntes Anliegen erneut erklären | Audit-/Sprint-Formular ist bereits geöffnet. Nur zwei Schritte: Website/Ziel, dann Name/E-Mail. Angebot ist technisch vorbelegt. Kein obligatorischer Kalender oder vorausgehender Gratischeck. |
| Deaktivierte frühere Formularschritte fehlen in FormData | Frühere Werte werden beim Serialisieren erhalten; nur der aktuelle Schritt bleibt für die laufende Validierung aktiviert. Regressionstest prüft auch den generischen Kontaktweg. |
| API fasst die meisten Seitenquellen als contact-form zusammen | Valide Source-Kennungen bleiben erhalten; separater normalisierter Angebots-/Attributionskontext begleitet jede Anfrage. |
| Gratis-Scanner und bezahlte Kaufabsicht nicht unterschieden | Getrennte Ereignisse für CTA, Formularstart, bestätigten Eingang und Scannerzustände. |
| Homepageprozess suggeriert Neubau | Zwei Prozessschritte erklären Bestandsoptimierung und begrenzte Umsetzung. Hero, Navigation, Referenzen und visuelle Sprache bleiben bestehen. |

## Angebote

### GEO Audit

- Intent-Owner bleibt `/geo-audit/` bzw. `/en/geo-audit/`.
- Primary: **GEO Audit anfragen**. Secondary: **Kostenfreier technischer KI-Check**.
- Eine Marke, ein Angebot, deutscher Zielmarkt. Ausgangsrahmen: 20 gemeinsam bestätigte Käuferfragen, drei verfügbare Suchoberflächen, drei Wiederholungen, drei Wettbewerber, bis zu zehn priorisierte URLs. Exakter Umfang und Messzugang vor Auftrag bestätigen.
- Ergebnis: datierte Antworten und Modus, Nennungen, verlinkte Quellen, Wettbewerber, erkennbare Inhalts-/Quellenlücken, begründete Prioritäten und drei wichtigste Maßnahmen.
- Geplanter Lieferrahmen: sieben Werktage ab vollständigen Inputs und bestätigtem Zugang, 45 Minuten Übergabe. Keine feste Plattformzugangs-, Ranking-, Mention- oder Leadgarantie.
- Technische Erreichbarkeit allein rechtfertigt keinen vollständigen Audit. Bei bereits bekanntem Seitenproblem direkter Sprint. Keine Retainerpflicht.

### Seiten-Sprint

- Bestehender REFRESH-Owner `/content-optimierung-ai-suche/` bzw. `/en/content-optimization-ai-search/`.
- Primary: **Seiten-Sprint anfragen**, direkt ohne Audit.
- Bis zu drei bestehende kaufnahe Seiten, ein Angebot, eine vereinbarte Sprache. Nutzen, Intent, Informationsstruktur, Belege, interne Links, CTA und vorab begrenzte notwendige Technik.
- Veröffentlichbare Änderungen inklusive vereinbarter Umsetzung, Qualitätsprüfung und Vorher-/Nachher-Dokumentation. Fachliche Freigaben beim Kunden.
- Geplanter Lieferrahmen: zehn Werktage ab Zugang und Fachfreigabe. Keine unbegrenzte Contentproduktion, Entwicklung, Branding, PR, vollständige Mehrsprachigkeit oder Relaunch.
- Verwertbare Vorarbeit anderer Anbieter wird akzeptiert. Betreuung nur bei tatsächlicher wiederkehrender Arbeit.

## Attribution und Speicherung

| Feld | Herkunft / Behandlung |
|---|---|
| `offer_type` | `geo_audit`, `page_sprint`, `technical_ai_check`, `geo_support`, `general`; serverseitig normalisiert. Ein validierter Scannerlead wird immer als technischer Check behandelt. |
| `source` | Bisherige Seiten-/Formularkennung, beschränktes Kennungsformat. Nicht mit Trafficquelle verwechseln. |
| `source_page` | Aktuelle öffentliche Seite beim Absenden, ohne Query/Fragment. |
| `landing_page` | Mit Statistikzustimmung erste bekannte Seite im aktuellen Tab; sonst aktuelle Seite, nicht erfundener Erstkontakt. |
| `referrer` | Nur Herkunfts-Origin, keine fremden Seitenpfade, Suchparameter oder Zugangsdaten. Kann wegen Browser-/Referrerpolicy unbekannt sein. |
| `utm_source/medium/campaign/content` | Kurze Bezeichnungen: Buchstaben, Zahlen, Unterstrich, Bindestrich; maximal 80 Zeichen. Keine Freitexte oder E-Mail-Adressen verwenden. |
| `cta_id` | Bekannter tatsächlicher Angebots-CTA oder Formular-/Scanner-Fallback. |
| `funnel_path` | Mit Einwilligung maximal acht Pfade im aktuellen Tab; keine Zeitreihe oder Fingerprints. Ohne Einwilligung nur aktuelle Seite. |
| `attribution_mode` | `consented_session` oder `current_request`, damit fehlende Erstkontaktinformation nicht als vollständige Attribution interpretiert wird. |
| `lead_id` | Serverseitig erzeugte UUID, identisch mit bestehendem Record-ID; Rückgabe bei erfolgreicher Zustellung. Nie in Analytics. |

Produktion: **bestehende Resend-interne E-Mail** enthält Lead-ID und normalisierten Attributionsblock. Scanner-Usermail bleibt auf Ergebnis und Ergebnislink begrenzt; keine Marketingattribution im Kundenbericht. Entwicklung: bestehende `.data/contact-inquiries.ndjson`; keine neue Datenbank und kein CRM vorgetäuscht.

Optionaler Browserverlauf: `sessionStorage["paternoga-revenue-session-v1"]`, ausschließlich bei Statistikzustimmung, gelöscht bei Widerruf; Speicherfehler dürfen eine Anfrage nicht verhindern. Analytics-Cookies sind keine Voraussetzung für die Angebotsanfrage. Ohne Zustimmung oder bei einem anderen Gerät/Tab ist keine vollständige Erstkontaktattribution versprochen. Kalenderbuchungen bleiben separat und werden nicht als Formular-Lead umgedeutet.

## Analytics

Bestehendes GA4-/Consent-Mode-v2-System wird weiterverwendet. Kein zweiter Tagmanager oder Analyticsanbieter.

Ereignisse:

- `geo_audit_cta_click`, `page_sprint_cta_click`
- `contact_form_start`, `contact_form_submit_success`
- `audit_inquiry_success`, `page_sprint_inquiry_success`
- `technical_ai_check_start`, `technical_ai_check_complete`, `technical_ai_check_lead_success`

Erlaubte Ereignisdaten: Angebotskennung, bereinigter Seitenpfad/-URL, Herkunfts-Origin, feste CTA-Kennung, Sprache. Keine Kontaktwerte, Freitexte, geprüfte Domain, Kampagnenfreitexte oder Lead-ID. Auch die GA4-Initialkonfiguration erhält eine URL ohne Query/Fragment. Keine Ereignisse vor Zustimmung oder nach Widerruf; Werbekategorien bleiben denied. Änderungen in einer extern verwalteten GA4-Property sind nicht Teil dieses Commits.

Messung beginnt mit dem Release, nicht rückwirkend. Testsubmits sind keine Leads. CTA-Klick, Scannerlead, erfolgreiche Anfrage, qualifizierter Lead und Auftrag bleiben unterschiedliche Zustände. Eine erfolgreiche API-Zustellung belegt noch nicht Inbox-Lektüre, Qualifizierung oder Umsatz.

## Proof und Homepage

Eigene Arbeitsprobe im Audit: PATERNOGA-GSC-Ausgangsstand 1.–5. September, 42 Property-Impressionen, sechs Klicks, eine Impression für `geo audit` bei Ø Position 85. Quelle ist der vorhandene [T0-Export](growth-gsc-t0-2026-09-05.json). Keine neue Datenerhebung. Kleine N, jüngste Daten eventuell vorläufig; keine stabile Position oder AI-Messung ableitbar.

Gezeigt wird **Befund → Grenze → Entscheidung**, kein Kunden-Umsatzcase. Ein vollständiger eigener Consumer-AI-Musterbericht wird nicht vorgetäuscht: Es fehlt noch ein gültiges wiederholtes Antwortpanel. Bestehende Produktgrafiken bleiben Illustrationen ohne Kundendaten.

Homepage: bewusst nur zwei Prozessschritte verändert. Sie schließen bestehende Seiten und begrenzte Umsetzung ein. Kein Relaunch, kein globaler CTA-Umbau, kein neues ICP-Superlativ. Nationale Seite führt zusätzlich zum Sprint; Hub benennt ihn; AI-Sichtbarkeit führt zur echten Auditdiagnose. Betreuung stellt den tatsächlichen laufenden Bedarf vor den Retainer.

## Qualität und Release

### Fortsetzung: Navigations-Zeitfehler

- Reproduktion auf dem zuvor gebauten Produktionsserver: direkter `page.goto` funktioniert; echte Homepage-Links über Header und Footer führen zu einer vollständig geladenen Audit-Seite, deren `requestAnimationFrame` nicht mehr läuft. Der CTA hat stabile sichtbare Geometrie, Playwright kann jedoch keine zwei stabilen Frames bestätigen.
- Gegenprobe: Nur `@view-transition { navigation: none; }` in der ausgelieferten CSS-Antwort überschrieben. Alle drei Pfade funktionieren sofort. Derselbe Stillstand trat mit normaler und reduzierter Bewegung, in Chromium, Chrome und im sichtbaren Browser auf. Damit kein zufälliges Timeout und kein reiner Headless-Befund; ein browserabhängiger Cross-Document-Transition-Fehler ist bestätigt. Andere Browser sind damit nicht als betroffen nachgewiesen.
- Minimaler Produktfix: automatischen seitenübergreifenden Fade deaktiviert. Native Linknavigation und alle In-Page-Animationen bleiben erhalten. Keine Timeout-Erhöhung oder erzwungenen Klicks. Zwei zusätzliche Tests prüfen Frame-Fortschritt und den echten Footer→Audit→Formular-Pfad mit beiden Bewegungseinstellungen; der Kampagnenpfad verwendet den echten Header-Link.
- Getrennte Testbefunde: Lazy-Load-Bilder müssen vor der Prüfung ihrer intrinsischen Maße in den Viewport gescrollt werden; ein visuell überdecktes Radio wird über sein sichtbares Label gewählt; die alte Header-Copy-Assertion wurde an den beauftragten Audit-CTA angepasst. Diese Befunde rechtfertigen keine Produktänderungen.

- Bestehende Routen, H1-Intent-Owner, Canonical/hreflang, Organisation, Breadcrumbs und Serviceschema erhalten. Sprint-Metabeschreibungen präzisiert, keine neuen URLs oder Sitemapänderungen.
- Der erste SEO-Lauf fand eine zu lange EN-Beschreibung; korrigiert.
- Der erste Browserlauf fand einen zu langen DE-Hub-Link und eine zu tiefe Audit-CTA-Zeile; korrigiert. Alte Copy-Assertions wurden auf die beauftragte Angebotscopy aktualisiert, funktionale Prüfungen nicht entfernt.
- Bei visueller Prüfung sichtbar gewordene generische Kontaktkarten trotz `hidden` werden auf direkten Offer-Formularen tatsächlich ausgeblendet. Header-Angebots-CTA ebenfalls ergänzt.
- `npm run verify` enthält jetzt auch Unit-Tests und den isolierten Produktions-API-Vertrag mit vollständig blockiertem externen Mailtransport.
- API-Vertrag: fünf zugeordnete Anfragen, eindeutige IDs, DE/EN-Scanner-Intern-/Usermail und signierte Ergebnisseiten, Validierung, formGuard, Timing-Guard, fehlerhafter Token und Versandfehler.
- Browser: DE/EN Audit/Sprint, Kampagnenpfad, Consent abgelehnt/erteilt/widerrufen, allgemeiner Kontakt, fehlgeschlagene Zustellung, PII-freie Ereignisse, alle acht Breiten und Reduced Motion.
- Screenshots lokal unter `.codex-tmp/revenue-review/`; keine Formulareinsendungen bei der Bildprüfung.
- Vercel-Build prüft die bestehenden erforderlichen Produktionsvariablen vor dem Build. Lokal heruntergeladene sensitive Platzhalter werden nicht als gültige Zugangsdaten ausgegeben oder committed.

Release-Commit, Deployment und abschließende Prüfergebnisse werden erst nach tatsächlicher Durchführung ergänzt.

## Noch echte Grenzen

1. Kein freigegebener Kunden-GEO-Outcome-Case und noch kein vollständiges eigenes AI-Antwort-Musterpanel.
2. Ohne Statistikzustimmung/Referrer oder geräteübergreifend bleibt Erstkontakt teilweise unbekannt; Offer und aktuelle Anfrage bleiben zuordenbar. Kalender braucht getrennte kaufmännische Zuordnung.
3. Angebots-/Abschlussrate und Lieferzeit sind noch nicht durch echte Käuferfälle validiert. Keine Conversionsteigerung aus technischen Testanfragen ableiten.
