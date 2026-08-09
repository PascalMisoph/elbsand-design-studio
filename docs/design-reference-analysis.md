# Analyse der visuellen Referenzrichtung

Die Referenzbilder liegen unter `artifacts/design-reference/elbsand-top.png` und `artifacts/design-reference/elbsand-bottom.png`. Sie dienen als visuelle Spezifikation; Inhalte aus der Bildgenerierung werden nur übernommen, wenn sie durch das Repository belegt sind.

## Extrahiertes System

- **Raster:** 12-spaltige Desktop-Logik mit etwa 32 px Außenabstand im Entwurf; für die reale Umsetzung wird sie auf einen 1320-px-Container mit responsiven 24–48-px-Rändern übersetzt.
- **Header:** eine horizontale, etwa 72 px hohe Zeile; Wortmarke links, Navigation mittig, Sprache und klare rechteckige CTA rechts. Wichtiger als die exakte Position ist die gleichwertige Lesbarkeit von Marke, Navigation und Handlung.
- **Hero:** asymmetrischer Split ungefähr 48/52. Links stehen H1, kurze Erklärung und zwei Handlungen, rechts ein festes 4:5-Medienfenster. Keine Viewport-Mindesthöhe. Der gesamte Informationskern bleibt in der ersten 900-px-Ansicht sichtbar.
- **Typografie:** Display-Serif als Hauptmaterial, aber deutlich kleiner und kontrollierter als im Ist-Zustand. Sans für Navigation, Lesetext, Labels und Formulare. H1 etwa 76–88 px auf 1440 px, H2 etwa 48–64 px, Lesetext etwa 17–19 px.
- **Farbe und Material:** warmes Off-white, tiefes Anthrazit, ein rostiges Terrakotta als Akzent. Keine kühlen Blauflächen, keine Verläufe, keine gläsernen Karten. Papier, Stein und Druckmaterial liefern die taktile Ebene.
- **Spacing:** Header 72 px; Hero etwa 700–760 px; Abschnittswechsel 88–120 px; innere Textabstände 16/24/32/48 px. Dichte Inhalte werden von ruhigen, dünn begrenzten Übergängen getrennt.
- **Komponenten:** primärer rechteckiger Button mit leichtem Radius, sekundärer Text-/Outline-Link, eine gemeinsame Media-Radius-Logik, Leistungs- und Prozesszeilen statt Karten, Formulare mit Unterstreichungen statt Containerbox.
- **Bildsystem:** Hero 4:5; Hauptreferenz 16:10; weitere Projekte 4:3; Studio etwa 5:4. Bilder funktionieren als feste redaktionelle Flächen, nicht als Dekoration oder kleine Thumbnails.
- **Rhythmus:** Hero bildgeführt → Trust-Zeile sehr kompakt → Leistungen typografisch → Referenzen bildgeführt → Sichtbarkeit typografisch → Prozess linear → Studio bildgeführt → Kontakt typografisch/funktional.
- **Interaktion:** leichte Aufwärtsbewegung und Bildzoom nur als Hover-Hinweis; Umsetzung bleibt unter Reduced Motion vollständig ruhig.

## Bewusst verworfene Inhalte der Referenzbilder

- Im generierten Trust-Strip erscheinen erfundene Kundenlogos. Real verwendet werden ausschließlich Eurosummer, Pauline Paternoga, Paw & Sage und Ochre & Chrome.
- Die generierten Projektbeschreibungen enthalten nicht belegte Leistungen oder Positionierungen. Reale Projektdaten bleiben minimal, bis sie bestätigt sind.
- Die generierte Antwortzeit von 48 Stunden ist nicht dokumentiert und wird nicht versprochen.
- Die generierte Adresse/E-Mail wird nicht verwendet; im Repository bleibt die freigegebene temporäre Kontaktadresse.
- Generierte Markenmaterialien sind reine Art Direction, keine Behauptung eines real existierenden Brand-Shootings.

## Übertragung auf die Codebasis

Die bestehende Astro-Komponentenstruktur bleibt erhalten. `global.css` wird als schlankes System konsolidiert; Hero, Header, Referenzen, Visibility, Prozess, Studio und Kontakt werden innerhalb ihrer vorhandenen Komponenten neu komponiert. Der generische Stock-/Live-Screenshot-Mix wird durch ein gezielt erzeugtes lokales Stillleben und ehrliche, kontrollierte Projektflächen ersetzt, bis reale freigegebene Projektscreenshots verfügbar sind.
