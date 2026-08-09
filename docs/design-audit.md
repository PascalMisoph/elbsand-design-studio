# ELBSAND Design Studio – Design-Audit und Umsetzungsplan

Stand: 22. Juli 2026  
Grundlage: Repository-Analyse, `AGENTS.md`, Komponenten und Inhalte in `src/`, statische Review-Dateien sowie Browserprüfung bei 1440×900, 1280×800, 768×1024, 375×812 und 320×700.

## Projektverständnis

ELBSAND Design Studio ist eine zweisprachige Boutique-Website für ein persönlich geführtes Webstudio. Primäre Zielgruppe sind lokale, inhabergeführte Unternehmen in Deutschland; Dresden und Sachsen bilden den ersten lokalen Vertrauens- und SEO-Anker, ohne die Startseite regional zu verengen. Das Angebot verbindet Strategie, Webdesign, Entwicklung, Relaunch, technische SEO-Grundlagen und moderne Auffindbarkeit in Antwortsystemen.

Das zentrale Kundenproblem ist kein isolierter Mangel an Gestaltung, sondern ein bestehender oder fehlender Webauftritt, der Anspruch, Angebot und Glaubwürdigkeit nicht klar genug vermittelt oder technisch nicht sauber sichtbar wird. Die Marke soll ruhig, präzise, persönlich und international gestaltet wirken – weder wie eine anonyme Full-Service-Agentur noch wie ein privates Nebenprojekt.

Die primäre Conversion ist eine niedrigschwellige Anfrage für einen Website-Check. Sekundär sollen Besucher reale Referenzen prüfen. Bereits erkennbar sind eine warme neutrale Palette, redaktionelle Serifentypografie, klare Linien, großzügige Flächen, eine kleine Zahl wiederkehrender Komponenten und der Versuch, Leistung, Referenzen, Sichtbarkeit, Prozess, Persönlichkeit und Kontakt als zusammenhängende Geschichte zu führen.

## A. Kurzdiagnose

### Was bereits funktioniert

- Die Seitenstruktur ist vollständig, nachvollziehbar und bilingual gespiegelt.
- Der warme Grundton, die Kombination aus Serif und Sans sowie feine Trennlinien passen grundsätzlich zur gewünschten ruhigen Studio-Wirkung.
- Referenzen, Prozess, persönliche Verantwortlichkeiten und Website-Check bilden eine sinnvolle Vertrauens- und Conversion-Kette.
- Die technische Basis ist schlank: Astro, semantische Abschnitte, wenig JavaScript, `lang`, Canonical, hreflang, strukturierte Daten, Fokuszustände und Reduced-Motion-Regel sind vorhanden.
- Es werden keine erfundenen Kennzahlen oder Testimonials eingesetzt; unbekannte Projektdaten sind sichtbar als offen markiert.

### Was den hochwertigen Gesamteindruck verhindert

1. **Der Hero blockiert den ersten Viewport.** Bei 1440×900 und 1280×800 sind Bodycopy, CTAs und der Folgeabschnitt nicht sichtbar. `min-height: calc(100svh - 76px)`, eine H1 bis 150 px und ein mindestens 560 px hohes Bild erzeugen eine dramatische, aber conversion-schwache Eröffnung.
2. **Die zentrale Botschaft weicht von der dokumentierten Positionierung ab.** „Digitale Auftritte, die Anspruch sichtbar machen“ bleibt abstrakt und beantwortet Leistung und Nutzen schwächer als die festgelegte Richtung „Websites, die Form, Funktion und Sichtbarkeit verbinden.“
3. **Die Bildsprache ist nicht glaubwürdig genug.** Das blaue Architekturmotiv und das generische Büro sind formal sauber, aber austauschbar. Das Sachsen-Bild liest sich eher touristisch. Live-Screenshot-Dienste liefern unkontrollierte Projektansichten; bei Eurosummer ist ein Cookie-Banner sichtbar.
4. **Die Skalierung ist zu extrem, der Rhythmus zu uneinheitlich.** H2 bis 92 px und Sections bis 168 px vertikal erzeugen starke, aber teilweise überlange Scrollstrecken. Gleichzeitig wirken Referenzkarten und die Visibility-Panel-Lösung wie ein anderes, stärker „UI-card“-orientiertes System.
5. **Conversion und Formular sind nur visuell.** Der Header-CTA ist auf Desktop mit 12 px zu klein, auf Mobile ausgeblendet, und das Formular besitzt keine Namen, Pflichtangaben, Autocomplete-Hinweise, Submit-Funktion oder Erfolgs-/Fehlerzustände.

## B. Detailbefunde

### Markenwirkung

**Aktuell:** Warm, editorial und reduziert; zugleich wirken die großen Georgia-Schriftbilder und austauschbaren Stockmotive wie eine bekannte Luxury-Template-Sprache.  
**Auswirkung:** ELBSAND wird als gestalterisch ambitioniert wahrgenommen, aber noch nicht als spezifisches, persönlich geführtes Studio mit belastbarer Umsetzungskompetenz.  
**Verbesserung:** Das bestehende neutrale Fundament bewahren, die Typografie disziplinieren und durch präzise Projektbilder, sachliche Mikrodetails und Pascals konkrete Rolle individualisieren.

### Visuelle Konsistenz

**Aktuell:** Drei Radien, mehrere Schattenstärken, pillenförmige Buttons, stark gerundete Bildflächen, eine gläserne Hero-Caption, Karten in Referenzen und Kontakt sowie eine zusätzliche Kartenlogik im GEO-Bereich konkurrieren miteinander.  
**Auswirkung:** Einzelne Komponenten wirken unabhängig gestaltet. Besonders Visibility-Panel, Projektkarten und Kontaktformular vermitteln drei unterschiedliche Materialsprachen.  
**Verbesserung:** Zwei Radien (klein/Media), ein subtiler Kontaktschatten nur für Medien, ein primärer Button, ein sekundärer Outline-Button und ein Textlink. Inhaltliche Abschnitte bleiben grundsätzlich unboxed.

### Layout und Whitespace

**Aktuell:** `--max: 1460px`, `--gutter: clamp(20px, 4vw, 64px)` und `--section: clamp(76px, 11vw, 168px)` lassen breite Displays sehr weit und Sections sehr hoch werden. Die Hero-Regeln überschreiben den allgemeinen Rhythmus zusätzlich.  
**Auswirkung:** Der Desktop wirkt monumental statt präzise; der nächste relevante Inhalt erscheint zu spät. Auf Mobile entstehen lange Text- und Bildstrecken, obwohl die horizontalen Ränder funktionieren.  
**Verbesserung:** Inhalt auf ca. 1320 px begrenzen, Lesetext auf ca. 62–68 Zeichen, horizontale Ränder in festen responsiven Stufen führen und Section-Abstände auf ein kleines Spacing-System (24/40/64/96/128) konsolidieren.

### Typografie

**Aktuell:** System-Sans plus lokale Georgia-Fallback-Serif; H1 58–150 px, H2 42–92 px. Navigation 13 px, Header-CTA 12 px.  
**Auswirkung:** Display-Schrift dominiert unverhältnismäßig, während wichtige Navigation technisch-klein wirkt. Lange deutsche Headline-Zeilen brechen auf Desktop in fünf bis sechs visuelle Zeilen.  
**Verbesserung:** H1 desktop etwa 72–92 px, Laptop 64–76 px, Mobile 48–58 px; H2 44–68 px. Navigation mindestens 15 px, Header-CTA 14 px. Lesetext 17–20 px mit 1.55–1.65 Zeilenhöhe.

### Header

**Aktuell:** Gute Dreiteilung und Sticky-Verhalten, aber Navigation und Sprachumschalter sind klein. Der aktive Sprachzustand wird nur über Farbe vermittelt; der mobile Header versteckt den primären CTA.  
**Auswirkung:** Orientierung und Conversion wirken sekundär. Bei 768 px konkurrieren CTA, Sprachwechsel und Menü in einer engen Zeile.  
**Verbesserung:** Headerhöhe kompakt bei etwa 72 px halten, Wortmarke leicht stärken, Navigation vergrößern, Sprachzustand zusätzlich mit `aria-current` und typografischem Gewicht markieren. Auf Tablet/Mobile CTA im Menü prominent führen; Touchflächen mindestens 44 px.

### Hero

**Aktuell:** Vollviewport-Split, H1 bis 150 px, Bild mindestens 560 px hoch; `hero-copy` ist unten ausgerichtet. Bei 1440×900 endet der Screenshot mitten im H1/Bild, bei 1280×800 ebenso.  
**Auswirkung:** Besucher sehen die visuelle Geste, aber nicht klar, für wen ELBSAND arbeitet, was angeboten wird oder wie der nächste Schritt aussieht.  
**Verbesserung:** Keine Viewport-Mindesthöhe. Kompakter Split mit kontrolliertem Bildformat, H1 maximal drei Zeilen, kurzer erklärender Text und beide CTAs im ersten Viewport. Die Proof-Zeile beziehungsweise der Beginn der Leistungssektion soll bei 900 px Höhe sichtbar werden.

### Bildsprache

**Aktuell:** Unsplash-Architektur mit dominant blauem Himmel, generisches Office und ein nicht spezifisch lesbarer Sachsen-Ausschnitt. Projektbilder kommen von `s.wordpress.com/mshots` und sind damit in Inhalt, Timing und Cookie-Zustand unkontrolliert.  
**Auswirkung:** Die ruhige Palette bricht im Hero ins kühle Blau; persönliche Glaubwürdigkeit entsteht nicht. Cookie-Overlays beschädigen die Referenzwirkung.  
**Verbesserung:** Keine zufälligen Ersatz-Stockbilder. Für die erste Überarbeitung den Hero stärker projekt-/materialbezogen rahmen und generische Studiofotografie zurücknehmen. Projekt-Screenshots lokal, cookie-frei und in konsistenten 16:10- beziehungsweise 4:3-Ausschnitten speichern. Bis diese Assets vorliegen: ehrlich beschriftete, gestaltete Projektflächen statt unkontrollierter Live-Screenshots.

**Benötigtes Material:** aktuelle freigegebene Screenshots der vier realen Projekte; optional authentische Portrait-/Arbeitsaufnahme von Pascal; optional ruhiges Dresden-/Elbsandstein-Detail ohne touristischen Landmarkencharakter.

### Text und Tonalität

**Aktuell:** Grundsätzlich ruhig, aber mehrere Formulierungen bleiben abstrakt: „Anspruch sichtbar machen“, „aus einem klaren System“, „internationale Wirkung“ und „ausbaufähige Seitenlogik“. „AI-Discovery“ mischt unnötig Englisch in deutsche Kerntexte.  
**Auswirkung:** Nutzer müssen den konkreten Nutzen selbst übersetzen; die Sprache klingt stellenweise wie Agenturkonzept statt Gespräch.  
**Verbesserung:** Dokumentierte Hero-Richtung einsetzen. Leistungen als konkrete Entscheidungen und Ergebnisse formulieren. „Sichtbarkeit in KI-Antworten“ oder „moderne Auffindbarkeit“ verwenden; ChatGPT, Claude und Perplexity erst im Erklärabschnitt nennen. CTAs konsequent auf den Website-Check ausrichten.

### Informationsarchitektur

**Aktuell:** Hero → Projekt-Namensleiste → Leistungen → Referenzen → Sichtbarkeit → Prozess → Studio → Kontakt. Die Reihenfolge ist grundsätzlich tragfähig.  
**Auswirkung:** Der schmale Proof-Strip behauptet Referenznähe, bevor klar ist, welche Leistungen und Zielgruppen gemeint sind. Die Referenzbeschreibung betont interne Designprinzipien statt die Kundenaufgabe.  
**Verbesserung:** Hero kompakt; direkt darunter eine präzise Vertrauenszeile mit realen Referenzen; dann Leistung, ausgewählte Arbeit, moderne Sichtbarkeit, Prozess, persönliche Führung, Kontakt. Struktur beibehalten, Inhalte innerhalb der Abschnitte stärker aus Kundensicht ordnen.

### Conversion

**Aktuell:** Primärer CTA ist mehrfach vorhanden; sekundärer CTA sinnvoll. Kontaktbereich bietet E-Mail und Formular. Das Formular ist ausdrücklich nur Mock-up.  
**Auswirkung:** Gute visuelle Absicht, aber keine funktionsfähige Anfrage. Fehlende Erwartungs-Microcopy („Was passiert danach?“) erhöht Unsicherheit.  
**Verbesserung:** CTA-Hierarchie vereinheitlichen, Kontakttext um Antwort-/Ablauferwartung ergänzen, Formular technisch sauber vorbereiten und bis zur Backend-Entscheidung transparent als E-Mail-orientierten Kontaktweg behandeln.

### Responsive Design

**Aktuell:** Ab 1100 px verschwinden Navigation und mehrspaltige Layouts gleichzeitig. Bei 768 px bleibt der Header-CTA sichtbar, bei 720 px verschwindet er abrupt. Mobile hat keinen horizontalen Screenshot-Overflow, jedoch eine sehr lange H1 und viel Content vor dem ersten Bild.  
**Auswirkung:** Tablet fühlt sich wie ein vergrößertes Mobile an; Breakpoint und Headerzustände sind nicht ausreichend fein abgestimmt.  
**Verbesserung:** Header-Breakpoint separat behandeln, Hero auf Tablet bewusst komponieren, Projekt- und Prozessraster bei 768/1024 differenzieren und alle Zielbreiten 320–1728 prüfen.

### Accessibility

**Aktuell:** Grundlegende Fokusregel und semantische Abschnitte sind vorhanden. Der Sprachumschalter ist ein einzelner Link mit zwei dekorativ wirkenden Textteilen. Projektlinks verwenden teils englische `aria-labels`; Hero-`aria-label` und Alttexte sind nicht lokalisiert. Formularfelder besitzen sichtbare Labels, aber keine `name`, `id`, `autocomplete`, `required` oder Fehlerlogik.  
**Auswirkung:** Sprache und Formulare sind für assistive Technologien weniger eindeutig; CTA-Touchfläche im kleinen Button unterschreitet teilweise 44 px.  
**Verbesserung:** Locale-spezifische Alt-/ARIA-Texte, echte Sprachlinks mit `hreflang`, 44-px-Ziele, vollständige Formularattribute, aussagekräftige Linktexte und Kontrastprüfung aller gedämpften Texte.

### Technische Umsetzung

**Aktuell:** Gute schlanke Astro-Struktur. Inhalte und externe Asset-URLs sind zentralisiert. Statische Preview-Dateien duplizieren jedoch Markup und können vom Quellstand abweichen. Externe Bilder verhindern kontrollierte Optimierung und stabile Verfügbarkeit.  
**Auswirkung:** Zwei Wahrheiten für Review und Build; Layout Shift und Inhalt externer Screenshots sind nicht vollständig kontrollierbar.  
**Verbesserung:** Astro als alleinige Quelle nutzen, Dependencies installieren, Builds für Review erzeugen, lokale optimierte Assets einführen und Preview-Dateien nur noch als klar generierten Fallback behandeln.

## C. Priorisierte Maßnahmen

| Priorität | Maßnahme | Wirkung | Aufwand | Abhängigkeiten | Risiko |
|---|---|---:|---:|---|---|
| 1 | Hero auf klare 2-Spalten-Komposition ohne Viewport-Mindesthöhe umbauen; H1, Copy und CTAs im ersten Viewport | sehr hoch | mittel | keine | gering |
| 1 | Hero- und Kerntexte auf dokumentierte Positionierung und konkreten Kundennutzen ausrichten | sehr hoch | mittel | Fakten aus `AGENTS.md` | gering |
| 1 | Typografie-, Container- und Spacing-Tokens konsolidieren | sehr hoch | mittel | wirkt auf alle Komponenten | mittel |
| 1 | Header-Navigation und CTA lesbarer und responsiv robuster machen | hoch | mittel | neue Typo-/Spacing-Tokens | gering |
| 1 | Unkontrollierte Cookie-/Live-Screenshots aus der primären Referenzdarstellung entfernen | hoch | mittel | finale Projektassets fehlen | mittel |
| 2 | Referenz-, Visibility-, Prozess- und Kontaktmaterial auf eine gemeinsame Oberflächenlogik reduzieren | hoch | mittel | Designsystem | gering |
| 2 | Studio-Abschnitt persönlicher und weniger stocklastig gestalten | mittel–hoch | mittel | authentisches Foto optional | mittel |
| 2 | Form-, Link-, Sprach- und Alt-Attribute barrierefrei vervollständigen | hoch | mittel | Formularziel offen | gering |
| 2 | Tablet- und Mobile-Kompositionen gezielt statt nur einspaltig abstimmen | hoch | mittel | neue Layouts | mittel |
| 3 | Hover-/Focus-Zustände und reduzierte Übergänge harmonisieren | mittel | klein | Komponenten konsolidiert | gering |
| 3 | Lokale Bildoptimierung und finale Projektcrops einführen | hoch | mittel | freigegebene Assets | gering |
| 3 | Funktionsfähiges Formular, Legal-Seiten und Consent-Lösung ergänzen | hoch | mittel–hoch | Anbieter-/Datenschutzentscheidung | mittel |

## D. Konkreter Umsetzungsplan

1. In `src/styles/global.css` globale Breiten, Lesebreiten, Spacing, Type Scale, Radien, Schatten und Interaktionszustände konsolidieren.
2. `Header.astro` und Header-CSS auf größere Navigation, eindeutigen Sprachzustand und robuste Tablet-/Mobile-Navigation überarbeiten.
3. `Hero.astro`, Hero-Inhalte in `src/content/site.ts` und Hero-CSS kompakter, konkreter und viewporttauglich gestalten.
4. `ProofStrip.astro` als ruhige Referenz-/Vertrauenszeile direkt an den Hero anbinden.
5. Leistungen, Referenzen und moderne Sichtbarkeit textlich entschlacken; Karten-/Panel-Varianten reduzieren und Projektansichten cookie-frei behandeln.
6. Prozess und Studio als persönlich geführten, nachvollziehbaren Ablauf schärfen; Stockmotive nur verwenden, wenn sie Aussage und Art Direction tragen.
7. Kontaktformular semantisch vervollständigen, CTA-Erwartung klären und keine Funktionsfähigkeit vortäuschen, solange kein Versandziel definiert ist.
8. Deutsche und englische Inhalte idiomatisch parallel halten; Alt-, ARIA- und Metadaten lokalisieren.
9. Astro-Dependencies installieren, Quellbuild und Checks ausführen; statische Fallback-Dateien anschließend aus dem tatsächlichen Stand aktualisieren oder als veraltet kennzeichnen.
10. Browser-QA bei 320, 375, 430, 768, 1024, 1280, 1440 und 1728 px durchführen; Fokus, Reduced Motion, Overflow, Bildladung, Header, Hero und CTAs prüfen und Vorher-/Nachher-Screenshots sichern.

## Festgehaltene offene Entscheidungen

- Versandziel und Datenschutztext des Website-Check-Formulars.
- Freigegebene lokale Screenshots/Projektbilder für Eurosummer, Pauline Paternoga, Paw & Sage und Ochre & Chrome.
- Authentisches Portrait oder Arbeitsbild von Pascal; ohne Freigabe wird kein künstliches Personenbild eingesetzt.
- Rechtstexte und ladungsfähige Adresse; diese werden gemäß Projektvorgabe nicht erfunden oder vorab veröffentlicht.
- Eine Consent-Lösung ist aktuell nicht implementiert. Sie wird erst benötigt, wenn nicht notwendige Cookies/Tracking oder entsprechende externe Einbindungen hinzukommen.
