# ELBSAND Redesign – Abschlussbericht

Stand: 22. Juli 2026

## Verstandenes Projektziel

ELBSAND Design Studio ist ein persönlich geführtes, zweisprachiges Webstudio für lokale Unternehmen in Deutschland mit Dresden/Sachsen als erstem lokalen Anker. Der Auftritt soll Strategie, Design, Entwicklung, SEO und moderne AI-Sichtbarkeit als zusammenhängende Leistung vermitteln. Primäre Conversion ist der Website-Check, sekundär die Prüfung realer Referenzen.

## Wichtigste Probleme des Ausgangszustands

- Der Hero belegte bei 1440×900 und 1280×800 praktisch den gesamten ersten Viewport; Erklärung, CTAs und Folgeabschnitt waren nicht sichtbar.
- Hero-Botschaft und Tonalität entsprachen noch nicht der dokumentierten Positionierung.
- Architektur-, Büro- und Sachsen-Stockbilder bildeten keine spezifische ELBSAND-Bildwelt.
- Externe Live-Screenshot-URLs waren unkontrollierbar; Eurosummer erschien mit Cookie-Overlay.
- H1/H2, Section-Abstände, Navigation, Karten, Schatten und Radien waren nicht ausreichend auf ein gemeinsames System begrenzt.
- Formular-, Sprach- und Accessible-Name-Details waren unvollständig; die statischen Preview-Dateien und Smoke-Tests prüften nicht mehr zuverlässig die Astro-Quelle.

## Designprinzipien der Überarbeitung

- Kompakter, klarer erster Viewport statt Vollbild-Geste.
- Warmes Off-white, Anthrazit und ein einziger Rost-/Terrakotta-Akzent.
- Editorial Serif für Positionierung, präzise Sans für Navigation und Nutztext.
- Inhaltliche Abschnitte bleiben unboxed; Linien, Raster und Bildformate erzeugen Ordnung.
- Feste Medienverhältnisse, zwei Radien, ein Schatten und eine eindeutige CTA-Hierarchie.
- Ehrliche Projektzustände statt unbestätigter Case-Study-Behauptungen oder unkontrollierter Screenshots.

## Durchgeführte Änderungen

- Header auf 72 px, 15-px-Navigation, 44-px-Touchflächen, klaren Sprachstatus und robuste mobile Navigation überarbeitet.
- Hero ohne Viewport-Mindesthöhe neu komponiert. Bei 1440×900 sind H1, Erklärung, beide CTAs und die vollständige Referenzzeile sichtbar; bei 1280×800 beginnt die Referenzzeile ebenfalls im Viewport.
- Container auf 1320 px, Lesebreite auf 66 Zeichen und Spacing auf wenige wiederkehrende Stufen konsolidiert.
- Leistungen als ruhige horizontale Entscheidungszeilen, Referenzen als kontrollierte redaktionelle Flächen, GEO ohne gläserne UI-Karte und Prozess als lineare Abfolge umgesetzt.
- Studio persönlicher auf Pascal ausgerichtet; Pauline bleibt korrekt als Studio Support & Editorial Operations eingeordnet.
- Kontaktformular mit IDs, Namen, Autocomplete, Pflichtfeldern und Submit-Semantik ausgestattet. Bis ein echtes Formularziel beschlossen ist, öffnet der Versand transparent das E-Mail-Programm.
- Skip-Link, lokalisierte Alttexte, echte Sprachlinks mit `hreflang`/`aria-current`, Favicon, responsive Bildquellen und vollständige Formularlabels ergänzt.
- Statische Smoke-Prüfung auf Astro-Quellen umgestellt; reproduzierbare Playwright-Suite für acht Viewports, EN, Fokus, Reduced Motion, mobile Navigation, Overflow, Anker und Bildladung ergänzt.

## Überarbeitete Texte und Tonalität

- Hero auf „Websites, die Form, Funktion und Sichtbarkeit verbinden.“ umgestellt.
- Leistungen vom abstrakten Agenturvokabular auf konkrete Entscheidungen und Ergebnisse reduziert.
- AI-Sichtbarkeit als Folge klarer Inhalte, technischer Qualität und lokaler Signale erklärt; ChatGPT, Claude und Perplexity erscheinen erst im passenden Erklärabschnitt.
- Studio- und Kontakttexte direkter, persönlicher und weniger werblich formuliert.
- Deutsche und englische Inhalte idiomatisch parallel gehalten.

## Bilder

- Generische Remote-Stockbilder und Live-Screenshot-Dienste aus dem Quellcode entfernt.
- Zwei gezielt erzeugte, menschenfreie ELBSAND-Stillleben eingeführt: `public/images/elbsand-hero.webp` und `public/images/elbsand-studio.webp`.
- Mobile Varianten mit 700 px Breite ergänzt: Hero ca. 67 KB, Studio ca. 23 KB.
- Projektflächen sind bewusst grafisch und als „Case Study folgt“ beziehungsweise „Projektansicht in Aufbereitung“ gekennzeichnet. Es werden keine Cookie-Banner oder kleinen unlesbaren Vollseiten-Screenshots gezeigt.

## Responsive und barrierefreie Verbesserungen

- Eigene Kompositionsstufen bei 1300, 1120, 860, 640 und 360 px.
- Kein horizontales Overflow bei 320, 375, 430, 768, 1024, 1280, 1440 und 1728 px.
- Sichtbare Fokuszustände, Skip-Link, 44/48-px-Controls und Reduced-Motion-Unterstützung geprüft.
- Lighthouse Production Mobile: Performance 90, Accessibility 100, Best Practices 100, SEO 100; LCP 1,5 s, FCP 0,9 s, CLS 0.

## Verifikation

- `npm run build`: erfolgreich, 0 Fehler, 0 Warnungen, 0 Hinweise; DE und EN gebaut.
- `npm run static:check`: erfolgreich.
- `npm run test:visual`: 10/10 Tests erfolgreich.
- Playwright prüft acht Zielbreiten, EN, Console-Fehler, Bilder, interne Anker, Hero-Folgeinhalt, Formsemantik, Fokus, Reduced Motion und mobile Navigation.
- Cookie-Banner: im Projekt nicht vorhanden. Daher kein Overlay in Screenshots; ein Consent-Banner ist erst erforderlich, wenn nicht notwendige Cookies oder Tracking ergänzt werden.

## Screenshots und Vergleich

- Ausgangszustand: `artifacts/before/`
- Finaler Zustand: `artifacts/after/desktop-1440x900-final.png`, `artifacts/after/desktop-1440x900-full-final.png`, `artifacts/after/laptop-1280x800-final.png`, `artifacts/after/mobile-375x812-final.png`, `artifacts/after/mobile-375x812-full-final.png`
- Visuelle Referenzrichtung: `artifacts/design-reference/`
- Lighthouse-Bericht: `artifacts/after/lighthouse-production-mobile.json`

## Offene Punkte

1. Freigegebene, cookie-freie lokale Screenshots der vier realen Projekte für echte Case Studies.
2. Bestätigung der URL für Pauline Paternoga; bis dahin ist die Projektfläche bewusst nicht verlinkt.
3. Entscheidung für Formular-Backend, Erfolgs-/Fehlerzustände, Aufbewahrung und Datenschutztext. `mailto:` ist eine transparente Übergangslösung, kein finales Lead-Handling.
4. Rechtlich geprüfte Inhalte und Adresse für Impressum/Datenschutz; die Footerlinks bleiben bis dahin absichtlich ohne erfundene Legal-Seiten.
5. Optional ein authentisches Portrait oder Arbeitsfoto von Pascal. Es wurde kein künstliches Personenbild eingesetzt.
6. Die alten `preview.html`/`preview-en.html` bleiben als historischer Fallback bestehen, werden aber nicht mehr als Prüfquelle verwendet. Vor Veröffentlichung sollten sie entweder aus dem Build-Prozess generiert oder entfernt werden.

## Empfohlene nächste Schritte

1. Reale Projektscreenshots und bestätigte Kurzbeschreibungen liefern; anschließend Projektflächen gegen lokale optimierte Medien austauschen.
2. Formularanbieter und Datenschutzfluss festlegen und das `mailto:`-Ziel ersetzen.
3. Legal-Seiten nach expliziter inhaltlicher Prüfung anlegen.
4. Optional Pascal-Foto aufnehmen und die Studiofläche damit weiter personalisieren.
5. Vor Vercel-Deployment finale Domain-, OG-Image-, Analytics- und Consent-Entscheidungen treffen.
