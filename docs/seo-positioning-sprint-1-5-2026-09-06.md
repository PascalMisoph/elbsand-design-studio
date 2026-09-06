# SEO Positioning Gate — Sprint 1.5

Stand: 06.09.2026. Fortsetzung des am selben Tag begonnenen Gates nach Abschluss und Live-Verifikation von [Revenue Sprint 1](revenue-sprint-1-2026-09-06.md) (`32fbaeb`). Grundlage ist die abgeschlossene [Growth-Research](growth-strategy-2026-09-06.md) mit [Matrizen](growth-matrices-2026-09-06.md), [Evidenzregister](growth-evidence-2026-09-06.md) und [Experimenten](growth-experiments-2026-09-06.md). Keine neue Marktrecherche, kein neuer technischer Audit, keine neue Studie.

Verbindlicher Gate-State: [growth-state-2026-09-06.json](growth-state-2026-09-06.json), `seo_positioning_gate`.

Partner-/Referral-Aktivierung, warme Kontakte, Snapshot-Distribution und `/seo-dresden/` bleiben blockiert und benötigen auch nach PASS einen separaten Sprint-2-Auftrag.

---

## 0. Ausgangspositionierung vor diesem Sprint

| Ort | bisher gesagt | Problem |
|---|---|---|
| Homepage H1 | „Suchmaschinen verändern sich. Dein Online-Auftritt auch?" | verkauft ein Marktphänomen, keinen Käuferjob. Kein Angebot, kein Outcome, kein Käufer, keine Suchrelevanz. |
| Homepage Primary CTA | „Kostenfreier KI-Check" → `#ki-check` | Der Standard-CTA der gesamten Domain war das kostenlose technische Werkzeug. Die beiden in Sprint 1 live geschalteten bezahlten Kaufwege waren von der Startseite aus nicht erreichbar. |
| Homepage Leistungen | 1 Inhalte & Seitenaufbau · 2 Webdesign & Entwicklung · 3 SEO & GEO | Website-Neubau als Kopfangebot. Widerspricht der kommerziellen Architektur, deren bezahlte Einstiege Diagnose und Bestandsarbeit sind. |
| Homepage Leistungs-Demo | Suchbeispiel „Webdesign Dresden", Fragen zu Websitekosten und Relaunch | Die Startseite demonstrierte sich selbst als Webdesign-Agentur. |
| Abschnittsreihenfolge | Hero → Proof → Gratis-Check → Leistungen | Der Besucher traf auf das Gratiswerkzeug, bevor gesagt war, was PATERNOGA tut. |
| `/geo-agentur-deutschland/` | „spezialisiertes Studio für Generative Engine Optimization und AI-Sichtbarkeit" | SEO kam im Kategoriesatz der nationalen Kaufseite nicht vor. Genau das Bild einer reinen GEO-Agentur. |
| `/geo-optimierung/` (Hub) | Primary CTA „Kostenfreien KI-Check starten" | Der Pillar für Anbieter- und Methodenintent führte zum Gratistool statt zum Angebot. |
| `/geo-betreuung/` | „nach Audit oder Startpunkt … beobachten, prüfen, verbessern" | SEO kam nicht vor; der Auslöser (wiederkehrende Arbeit) war nicht benannt. |
| `/ai-sichtbarkeit/` | Datenfeld `primaryCta: "Website-Check anfragen"` | mehrdeutig zwischen Gratis-Scanner und bezahltem Audit. |

`/geo-audit/` und `/content-optimierung-ai-suche/` waren durch Revenue Sprint 1 bereits sauber positioniert und getrennt.

## 0.1 Entscheidungsrelevante Befunde aus der vorhandenen Research

Nicht wiederholt, nur die für diese Entscheidung tragenden Punkte:

1. **Besetzt und damit als Alleinstellung unbrauchbar:** SEO + GEO (WEBneo, getSichtbar, Peilwerk, experics, Sichtlabs, DREIKON), B2B/Mittelstand/komplexe Märkte (Sichtlabs, Gerlach, experics), direkte Umsetzung (getSichtbar, experics), benannte Belege und Cases (getSichtbar), Messen-dann-bauen (Peilwerk), Sprint-Formate, Gratischecks (Suchhelden, Ready2GEO, SEOmator). Das ist Astras letzter Befund und wird hier nicht revidiert.
2. **Nicht besetzt im dokumentierten Wettbewerbsset:** die *Auftragseinheit*. Alle geprüften Anbieter verkaufen Kanalprogramme, Unternehmens-Audits oder Monatsmandate. Kein dokumentierter Wettbewerber verkauft die einzelne bestehende Seite als kleinste kaufbare Einheit.
3. **Preisanker belegen ein größeres Entscheidungsformat:** Peilwerk 890 € Kurzcheck / 4.500 € Audit, experics 3.500–6.000 €/Monat über sechs Monate. PATERNOGA verkauft eine kleinere Entscheidungseinheit — das ist eine Scope-, keine Preisaussage.
4. **Kein Kunden-GEO-Outcome-Case, kein gültiges eigenes Consumer-AI-Panel.** Jede Positionierung, die einen Erfolgsanteil behauptet, ist heute nicht vertretbar.
5. **GSC bleibt ein kleines First-Party-Signal.** 28-Tage-Abruf am 06.09.: 7 Klicks / 62 Impressionen; offengelegte Anfragen weiterhin überwiegend GEO, Crawler und technische GEO ([Rohdaten](seo-positioning-gsc-2026-09-06.json)). Startseiten und `/geo-agentur-deutschland/` halten die Klicks. Keine Nachfrageprognose, kein Releaseeffekt, keine Positionierungswirkung ableitbar.
6. **Homepage bleibt Studio-Übersicht** ([Matrix](growth-matrices-2026-09-06.md), Zeilen „SEO Agentur" und „SEO Agentur Dresden"): keine Über-Nischung, kein lokaler Fokus auf der Startseite, kein dedizierter SEO-Route-Owner in dieser Phase.
7. **Fit-Kriterien der Research** waren Entscheiderzugang, bestehendes rentables Angebot, umsetzbare Website, Fachfreigabe binnen einer Woche und realistischer Bedarf an einem bezahlten Projekt — **keine** Eigentümerstruktur und **keine** Leistungsanzahl. Zweite Testkohorte laut Strategie: B2B-/IT-Dienstleister mit kleinem Marketingteam.

---

## PASS 1 — Ernsthaft geprüfte Positionierungsvarianten

Fünf Varianten wurden entwickelt und jeweils bis zur Angebots- und Beweisebene durchgezogen, nicht nur als Slogan notiert.

| # | Variante | Kernsatz | Category | Buyer | Differenzierungstyp | Proofbedarf |
|---|---|---|---|---|---|---|
| **V0** | Status quo | „Websites, die Form, Funktion und Sichtbarkeit verbinden" | Webdesign-Studio mit SEO/GEO | lokale Unternehmen allgemein | Handwerk/Gestaltung | vorhandene Projekte reichen |
| **V1** | Kategorie-Upgrade | „Die GEO-Agentur mit echtem SEO-Fundament" | GEO-Agentur | Marketingverantwortliche | Fähigkeitstiefe | GEO-Cases nötig |
| **V2** | Evidenz + Segment | „Evidenzbasierte SEO & GEO für den B2B-Mittelstand" | SEO/GEO-Agentur | B2B-Mittelstand | Methodik + Segment | Branchenoutcomes nötig |
| **V3** | Outcome | „Sichtbarkeit in KI-Antworten für erklärungsbedürftige Dienstleistungen" | AI-Visibility-Spezialist | Dienstleister | Ergebnisversprechen | Mention-/Citation-Panel nötig |
| **V4** | Angebotsformat | „Der Seiten-Sprint: 3 Seiten, 10 Tage, mehr Anfragen" | Produktisierte Umsetzung | jeder mit Seitenproblem | Format + Tempo | Vorher/Nachher-Case nötig |
| **V5** | Auftragseinheit + drei Leser | „Die wenigen Seiten, über die deine Anfragen kommen — durch Google, durch KI-Antwortsysteme und durch den Menschen, der sich dort entscheidet" | SEO- und GEO-Studio | Dienstleister mit erklärungsbedürftigem Angebot | Scope und Erklärgüte | vorhandener Proof reicht |

Zusätzlich geprüfte Mechanismus-Modelle für das Verhältnis SEO/GEO:

- **M1 Schichtenmodell** (Auftragsvorgabe): SEO = etablierte Sichtbarkeit, GEO = AI-Sichtbarkeit, Content = Umsetzungsebene, Conversion = Anfrage. Verständlich, aber additiv — erklärt nicht, *warum* beides zusammengehört, und lädt dazu ein, SEO und GEO als zwei Produkte zu verkaufen.
- **M2 Drei-Leser-Modell** (gewählt): Dieselbe Seite wird von Suchmaschine, Antwortsystem und Mensch gelesen; die drei scheitern getrennt und werden getrennt geprüft. Erklärt die Zusammengehörigkeit strukturell statt als Label und ist an vorhandenen Messgrößen festmachbar (Impressionen/Positionen, Nennungen/Quellen, Anfragen).

M2 ersetzt M1 als Modell, weil es dieselben vier Elemente enthält, sie aber an *einem* Objekt verankert und damit direkt auf die kaufbaren Angebote abbildet.

---

## PASS 2 — Red Team

### 2.1 Verworfene Varianten

| Variante | Urteil | Begründung |
|---|---|---|
| V0 Status quo | **verworfen** | Website-Neubau als Kopfangebot widerspricht der live geschalteten kommerziellen Architektur (Diagnose und Bestandsarbeit), konkurriert mit deutlich größeren Webagenturen und passt nicht zum GSC-Signal, das durchgehend GEO/Crawler/technische GEO zeigt. |
| V1 Kategorie-Upgrade | **verworfen** | Fähigkeitsbehauptung in einem besetzten Feld. Macht GEO zum Kopfnomen und erzeugt genau das Bild einer reinen GEO-Agentur, das dieser Sprint beseitigen soll. Braucht GEO-Cases, die es nicht gibt. |
| V2 Evidenz + Segment | **verworfen** | Jeder Bestandteil besetzt (siehe 0.1). „Evidenzbasiert" ist zum Allgemeinwort geworden; „Mittelstand" ist laut Research kein Exklusivanspruch, sondern ein Fit-Signal. |
| V3 Outcome | **verworfen** | Verspricht ein Ergebnis, das PATERNOGA nicht kontrolliert, setzt ein Mention-/Citation-Panel voraus, das nicht existiert, und lässt SEO vollständig verschwinden. |
| V4 Angebotsformat | **teilweise verworfen** | „Sprint" ist besetzt und „mehr Anfragen in 10 Tagen" ist ein unbelegtes Erfolgsversprechen. Der begrenzte Scope überlebt als Angebotsmechanik, das Versprechen und die Formatführung nicht. Der Seiten-Sprint bleibt ein Angebot, wird aber nicht zur Positionierung. |
| V5 Auftragseinheit | **überlebt, mit vier Auflagen** | siehe 2.3 |

### 2.2 Einzelne Claims und Begriffe

| geprüft | Urteil | Konsequenz |
|---|---|---|
| **SEO + GEO für B2B/Mittelstand** | besetzt, nicht differenzierend | wird nicht als Alleinstellung verkauft. B2B und Mittelstand erscheinen nur als Fit-Signal auf Kaufseiten, nie als Exklusivanspruch. |
| **Direkte Umsetzung** | besetzt (getSichtbar, experics) | bleibt eine wahre und wichtige Fähigkeitsaussage, wird aber nicht als USP geführt. Auf der Startseite bewusst als zweite Leistung („Technische Umsetzung"), nicht als Kopfangebot. |
| **Klare Belege / evidenzbasiert** | besetzt, Wort abgenutzt | ersetzt durch eine konkretere, heute einlösbare Version: **offengelegter Ausgangszustand einschließlich kleiner eigener Zahlen und benannter Messgrenzen**. Das unterscheidet sich von Prozentwachstum ohne Basis und kostet keinen zusätzlichen Proof. |
| **SEO-Sprint / Seiten-Sprint als Positionierung** | besetzt | bleibt Angebotsname, wird nicht zur Kernpositionierung. Keine Zeit-/Ergebniskopplung in der Kommunikation. |
| **„Leistungsseiten" als Kernbegriff** | **zu taktisch als Kategoriesprache** | Ein Geschäftsführer sucht keinen „Anbieter für Leistungsseiten"; der Begriff hat keine Suchnachfrage und klingt nach Auftragsdetail statt nach Partner. **Korrektur:** Die Seite bleibt die *Auftragseinheit* (Angebots- und Mechanismusebene), wird aber **nicht** zur Kategorie. Homepage-Title lautet „SEO & GEO Studio für Dienstleister", nicht „…für Leistungsseiten". Im Hero steht die Klartextform „die Seiten, über die deine Anfragen kommen"; der Fachbegriff erscheint erst danach. |
| **„Erklärungsbedürftige Dienstleistungen"** | Sache richtig, Wort sperrig | Der Buyer Job ist korrekt und durch die Research getragen. Als Formulierung in Hero und Kaufseiten ersetzt durch „Dienstleister, deren Leistung erklärt werden muss" bzw. „Unternehmen, deren Leistung vor dem Kauf erklärt werden muss". Der Fachbegriff bleibt in Strategiedokumenten. |
| **„Inhabergeführte Unternehmen"** | **unbegründete Verengung** | Die Research nennt als Kriterium Entscheiderzugang und Fachfreigabe binnen einer Woche, nicht die Eigentümerstruktur. „Inhabergeführt" schneidet die ausdrücklich vorgesehene zweite Kohorte (B2B-/IT-Dienstleister mit kleinem Marketingteam) sowie Professional-Services-Partnerschaften und Genossenschaften rein sprachlich aus, obwohl sie fachlich passen. **Korrektur:** ersetzt durch das tatsächlich tragende Kriterium — „eine Ansprechperson, die das Projekt freigeben und Fachaussagen bestätigen kann", ausdrücklich „mit oder ohne eigenes Marketingteam". |
| **„Ein bis drei Kernleistungen"** | **falscher Filter** | Die Anzahl der Leistungen ist nicht die Voraussetzung für das Angebot. Ein Dienstleister mit acht Leistungen kann drei wirtschaftlich entscheidende Seiten haben und passt vollständig. Der Filter hätte reale Käufer ohne sachlichen Grund ausgeschlossen. **Korrektur:** ersetzt durch das strukturelle Kriterium „das Geschäft hängt an einer überschaubaren Zahl wichtiger Seiten". Die Zahl „ein bis drei" bleibt dort, wo sie hingehört: als **Umfang des Seiten-Sprints**, nicht als Eigenschaft des Käufers. |
| **„Qualifizierte Anfragen"** | zu weich als alleiniges Ergebnis | ergänzt um den Prüfgegenstand („passende Anfragen über eine kleine Zahl bestehender Seiten") statt um eine Zahl. |
| **„Drei Leser" als Methode** | Erklärvorteil, kein Moat | kopierbar. Wird deshalb als schlichte Begründung geführt, ohne Markennamen, ohne Methoden-Trademark und ohne Exklusivbehauptung. |
| **SEO/GEO-Kausalität** | fachlich zu stark | Die Zwischenfassung „Was Google nicht findet, steht auch ChatGPT und Perplexity nicht als Quelle zur Verfügung" behauptet eine Abhängigkeit vom Google-Index, die es nicht gibt. **Korrektur:** SEO und GEO teilen viele Grundlagen (Zugänglichkeit, klare Struktur, indexierbare Inhalte, interne Verlinkung, eindeutige Entitätssignale); ChatGPT und Perplexity betreiben eigene, vom Google-Index unabhängige Crawler und Retrieval-Systeme. Formuliert wird geteilte Grundlagenarbeit, keine Kausalkette. Der bestehende, korrekte Hinweis auf die dokumentierten eigenen Such-Crawler von OpenAI und Perplexity auf `/geo-agentur-deutschland/` stützt diese Fassung. |

### 2.3 Auflagen an die überlebende Variante

1. Die Seiteneinheit ist **Einstiegs-, nicht Obergrenze**. Audit und Betreuung bleiben auf Unternehmensebene, sonst deckelt die Positionierung den Auftragswert.
2. Die Seite ist **Auftragseinheit, nicht Kategorie** (siehe 2.2).
3. **Keine Ergebniszahl, keine Frist, kein Superlativ** — der Proof trägt eine Prozessaussage, keine Wirkungsaussage.
4. **SEO muss sichtbar zuerst stehen**, wo eine Kaufentscheidung über den Anbieter fällt (Startseite, nationale Seite, Hub), sonst kippt die Wahrnehmung wieder zur reinen GEO-Agentur.

### 2.4 Weitere Prüffragen aus dem Auftrag

| Frage | Antwort |
|---|---|
| Für einen Geschäftsführer verständlich? | Ja: „die Seiten, über die eure Anfragen kommen" ist Alltagssprache. Der Fachbegriff wurde aus Hero und Title entfernt. |
| Für einen Marketing Lead verständlich? | Ja, und für den skeptischeren Leser tragfähig, weil die drei Leser je eigene, real messbare Größen haben. Die Formulierung „mit oder ohne eigenes Marketingteam" schließt ihn ausdrücklich ein. |
| Klassische SEO-Kompetenz erkennbar? | Nach Korrektur ja: SEO steht im H1, ist eine der drei Startseiten-Leistungen, führt den Lead der nationalen Kaufseite an und trägt den Hub-Hero. |
| GEO als Differenzierung erhalten? | Ja: eigene Diagnose (`/geo-audit/`), eigener technischer Einstieg, eigener Pillar. GEO bleibt Unternehmensebene und wird nicht auf Copy-Arbeit reduziert. |
| Zu breit? | Nein. Buyer Job (Leistung muss erklärt werden), Struktur (wenige entscheidende Seiten) und Entscheidungsweg (eine freigabeberechtigte Person) sind drei unabhängige, prüfbare Filter. |
| Zu eng? | Nach den Korrekturen in 2.2 nicht mehr. Entfernt wurden die beiden Filter ohne Research-Deckung (Eigentümerstruktur, Leistungsanzahl); erhalten bleiben die Filter mit Deckung. Professional Services, B2B-Dienstleister und Anbieter mit kleinem Marketingteam sind ausdrücklich eingeschlossen. |
| National tragfähig? | Ja, der Buyer Job ist ortsunabhängig; Dresden ist Glaubwürdigkeitsdetail, nicht Anspruch. |
| Später lokal in Dresden tragfähig? | Ja, unveränderte Kernpositionierung mit lokalem Sucheinstieg (siehe Brief, Abschnitt 8). |
| Heute seriös vertretbar? | Ja. Versprochen wird ein Prüf- und Arbeitsverfahren mit begrenztem Umfang, kein Ergebnisanteil. |
| Stärker als „SEO + GEO für B2B"? | Ja: benennt Käuferzustand, Arbeitsgegenstand und begrenzte Verpflichtung; das Label benennt nichts davon. |

---

## PASS 3 — Finale Positionierung

> **PATERNOGA ist ein SEO- und GEO-Studio für Unternehmen, deren Leistung vor dem Kauf erklärt werden muss. Wir bringen die wenigen Seiten, über die ihre Anfragen kommen, gleichzeitig durch Google, durch KI-Antwortsysteme und durch den Menschen, der sich dort entscheidet — in klar begrenzten Aufträgen, persönlich umgesetzt von Pascal.**

EN: *PATERNOGA is an SEO and GEO studio for companies whose offer needs explaining before anyone buys. We take the few pages your enquiries come from through all three readers — Google, AI answer systems, and the person deciding on the page — in clearly bounded projects, delivered personally by Pascal.*

**Warum genau diese Fassung übrig bleibt:** Alle Fähigkeits- und Segmentbehauptungen sind im dokumentierten Wettbewerbsset besetzt (0.1 Punkt 1), alle Ergebnisbehauptungen überschreiten den vorhandenen Proof (0.1 Punkt 4). Was weder besetzt noch überzogen ist, ist die Kombination aus **Auftragseinheit** (0.1 Punkt 2), **offengelegtem Ausgangszustand** und **einer Person, die diagnostiziert und dieselbe Seite anschließend ändert**. Die drei Leser sind die Begründung, warum SEO und GEO an dieser Einheit zusammengehören, ohne dass das Label „SEO + GEO" als Alleinstellung behauptet wird.

### Decision Contract

| Feld | Festlegung |
|---|---|
| **Category** | SEO- und GEO-Studio. Markenbezeichnung `Paternoga SEO & GEO Studio` und Wortmarke `PATERNOGA` unverändert. Die Seite ist **Auftragseinheit, nicht Kategoriename**: „Studio für Dienstleister", nicht „Studio für Leistungsseiten". |
| **Primary Buyer** | Unternehmen in Deutschland, deren Leistung vor dem Kauf erklärt werden muss, deren Geschäft an einer überschaubaren Zahl wichtiger Seiten hängt und in denen eine Person das Projekt freigeben und Fachaussagen bestätigen kann. Professional Services, B2B-Dienstleister und spezialisierte Anbieter, mit oder ohne eigenes Marketingteam. **Keine** Filter nach Eigentümerstruktur oder Leistungsanzahl. Nicht adressiert: Kleinstbetriebe ohne Website oder Budget, Enterprise mit langen Beschaffungsprozessen. |
| **Job To Be Done** | „Unsere Leistung überzeugt, aber die Seiten, über die wir sie verkaufen, bringen zu wenige passende Anfragen. Ob das an Google, an KI-Antworten oder an den Seiten selbst liegt, weiß ich nicht — und ich will kein Jahresmandat kaufen, um es herauszufinden." |
| **Business Outcome** | Mehr passende Anfragen über eine kleine Zahl bestehender Seiten, bei bekanntem Umfang und bekannten Kosten. Kein Volumen-, Ranking- oder Nennungsversprechen. |
| **Mechanism** | Eine Seite muss drei Leser überstehen: die Suchmaschine, die sie findet und einordnet; das Antwortsystem, das sie zusammenfasst und zitiert; den Menschen, der auf ihr entscheidet. Die drei werden getrennt geprüft und dann an derselben Seite bearbeitet. |
| **Differentiation** | Scope- statt Fähigkeitsbehauptung: (1) die einzelne bestehende Seite ist die kleinste kaufbare Einheit, nicht ein Kanal und nicht das ganze Unternehmen; (2) offengelegter Ausgangszustand einschließlich kleiner eigener Zahlen und benannter Messgrenzen statt Prozentwachstum ohne Basis; (3) eine Person, die diagnostiziert und dieselbe Seite anschließend selbst ändert. |
| **Proof Logic** | Drei streng getrennte Stufen. **OWN WORK SAMPLE:** eigener GSC-Ausgangsstand, DAX-40-Crawler-Erhebung, technischer Scanner, technischer SEO-/GEO-Audit — Befund, Grenze, Entscheidung. **DELIVERED WORK:** bestehende reale Projekte als Handwerks-, nicht als Sichtbarkeitsbeleg; sie bleiben im Referenzabschnitt der Startseite und werden nicht als Kundenproof auf GEO-Seiten verwendet. **CUSTOMER OUTCOME:** existiert noch nicht und wird nicht behauptet. |
| **SEO Role** | Etablierter Nachfragepfad und erster Leser. Technische Grundlagen, Seitenstruktur, interne Verlinkung, lokale Auffindbarkeit, Indexierung, strukturierte Daten. SEO ist sichtbarer Bestandteil des Angebots und steht dort zuerst, wo über den Anbieter entschieden wird. |
| **GEO Role** | Zweiter Leser derselben Seite: Erreichbarkeit für Antwortsysteme, korrekte Wiedergabe, Quellenlage, Faktenkonsistenz. Eigene Diagnose und eigener technischer Einstieg. **Verhältnis zu SEO:** geteilte Grundlagen, keine Abhängigkeit — ChatGPT, Perplexity und vergleichbare Systeme betreiben eigene Crawler und Retrieval-Wege unabhängig vom Google-Index. Diagnostizierbar, nicht garantierbar. |
| **Entry Offer Architecture** | vier Wege, je ein Käuferzustand, mit öffentlichem Einstiegspreis je bezahltem Weg; siehe unten und Abschnitt 5.1. |

### Entry Offer Architecture

| Käuferzustand | Angebot | Owner-Route | Preis | bleibt getrennt, weil |
|---|---|---|---|---|
| „Können KI-Systeme meine Seiten technisch überhaupt lesen?" | kostenfreier technischer KI-Check | `#ki-check` auf der Startseite | frei | reine technische Zugangsdiagnose. Misst Voraussetzungen, keine Nennungen. Kein Score-Ersatz für den Audit. |
| „Ich weiß nicht, woran es liegt / wie ich in KI-Antworten vorkomme." | GEO Audit | `/geo-audit/` | ab 1.500 € netto | Diagnose über Käuferfragen, Antworten, Quellen und Wettbewerber. Unternehmensebene. |
| „Ich weiß, welche Seiten das Problem sind." | Seiten-Sprint | `/content-optimierung-ai-suche/` | ab 2.500 € netto | begrenzte Umsetzung an bis zu drei bestehenden Seiten, **ohne** vorgeschalteten Audit. |
| „Das ist wiederkehrende Arbeit, kein einmaliges Projekt." | GEO-Betreuung | `/geo-betreuung/` | ab 1.250 € netto / Monat | Fortsetzung nach Audit oder Sprint bei tatsächlichem laufendem Bedarf; kein automatisches Retainer-Upsell. |

Ein Audit ist kein Pflichtzwischenschritt vor dem Sprint. Der Gratischeck ist kein verkleinerter Audit.

---

## 5. Umgesetzte Änderungen

### Startseite (DE/EN)

Kein Redesign, keine neue visuelle Sprache, kein neues Modul. Geändert wurden Messaging, CTA-Ziele und eine Abschnittsreihenfolge.

| Element | vorher | nachher |
|---|---|---|
| Meta-Title | „SEO & GEO Studio für Deutschland" | „SEO & GEO Studio für Dienstleister" — Käufer statt Geografie, ohne taktische Kategoriesprache |
| H1 | „Suchmaschinen verändern sich. Dein Online-Auftritt auch?" | „SEO und GEO für die Seiten, über die deine Anfragen kommen." |
| Hero-Lead | allgemeine Verbindung von SEO, GEO und Technik | benennt Käufer und Mechanismus: getrennte Prüfung von Google-Auffindbarkeit, korrekter KI-Wiedergabe und tatsächlicher Anfrage |
| Primary CTA (Hero + Header, Domain-Default) | „Kostenfreier KI-Check" → `#ki-check` | „Projekt anfragen" → `#kontakt` |
| Secondary CTA (Hero) | „Ausgewählte Projekte" → `#projekte` | „Kostenfreier technischer KI-Check" → `#ki-check` |
| Leistungen H2 | „Dein digitaler Erfolg. Unsere Leistungen für dich" | „Wenige Seiten entscheiden. An denen arbeiten wir" |
| Leistung 1 | „Inhalte & Seitenaufbau" | „Seiten, die zur Anfrage führen" — ein bis drei Seiten als *Auftragsumfang*, nicht als Käufereigenschaft |
| Leistung 2 | „Webdesign & Entwicklung" als Kopfangebot | „Technische Umsetzung" — Umsetzungsfähigkeit statt Neubau-Versprechen; Website-Neubau bleibt möglich, aber untergeordnet |
| Leistung 3 | SEO & GEO | unverändert; bleibt Intent-Owner für technisches SEO auf der Startseite |
| Leistungs-Demo | Suche „Webdesign Dresden", Fragen zu Websitekosten/Relaunch | Suche nach einer erklärungsbedürftigen Dienstleistung, Fragen eines echten Leistungskäufers |
| Sichtbarkeits-H2 | „Gefunden werden verändert sich" | „Google, KI-Systeme und Menschen lesen dieselbe Seite" |
| Sichtbarkeits-Body | Graphite-Zahl plus allgemeine Strukturaussage | Mechanismus der drei Leser, Graphite-Quelle unverändert erhalten |
| Sichtbarkeits-Punkte | „Technisches SEO", „GEO-Optimierung" abstrakt | beide auf ihren Leser bezogen formuliert; Punkte 2 und 3 unverändert |
| Abschnittsreihenfolge | Hero → Proof → **Gratis-Check** → Leistungen → Referenzen → Sichtbarkeit → Ablauf | Hero → Proof → Leistungen → Referenzen → Sichtbarkeit → **Gratis-Check** → Ablauf |
| Kontakt-H2 | „Sichtbarkeit gezielt ausbauen" | „Welche Seiten sollen wir uns ansehen?" |
| Kontakt-Value-Line | „SEO & GEO, die aus relevanten Fragen qualifizierte Anfragen machen." | „Klar begrenzter Auftrag, eine feste Ansprechperson, dokumentierter Vorher- und Nachher-Stand." |
| Kontakt-Intents | „neu aufbauen / bestehende Sichtbarkeit verbessern / Strategie besprechen" | „Bestehende Seiten verbessern / Neue Seiten aufbauen / Ursache klären" — bildet die Käuferzustände ab; `intent`-Werte `improve`/`new`/`advice` unverändert |

Unverändert: Hero-Medien und System-Rotator, Liquid-Chrome-Material, ProofStrip, Referenzabschnitt, Editorial Support, Ablauf-Sektion, gesamte visuelle Sprache, Navigationsstruktur, alle Routen.

### Navigation

- Header-Default-CTA zeigt auf `#kontakt`; der kostenfreie Check behält einen eigenen `checkHref` und bleibt unter **Ressourcen → Analysieren** sowie als Hero-Zweit-CTA erreichbar. Die in Sprint 1 gesetzten `primaryHref`-Overrides auf `/geo-audit/` und `/content-optimierung-ai-suche/` bleiben unberührt.
- **Lösungen → Website:** „Bestehende Seiten verbessern" steht jetzt vor „Neue Website entwickeln".

### Money Pages

| Route | Änderung | Grund |
|---|---|---|
| `/geo-agentur-deutschland/`, `/en/geo-agency-germany/` | Lead nennt klassisches SEO zuerst, dann überprüfbare KI-Sichtbarkeit, dann den Arbeitsgegenstand; Meta-Description nennt SEO und Seiten-Sprint; Passungsabschnitt benennt Buyer Job und Seitenstruktur statt Eigentümerstruktur und Leistungsanzahl und schließt Marketingteams ausdrücklich ein | einzige Stelle, an der die Domain als reine GEO-Agentur las (Pflichtbedingungen 5 und 7) und zugleich die Stelle, an der die Verengung aus Pass 2 korrigiert werden musste. |
| `/geo-optimierung/`, `/en/geo-optimization/` | Primary CTA „Kostenfreien KI-Check starten" → „GEO Audit anfragen" mit Ziel `/geo-audit/`; Header-CTA „Projekt anfragen"; Hero-Body erklärt die **geteilten Grundlagen** von SEO und GEO und stellt ausdrücklich fest, dass die Crawler von ChatGPT und Perplexity unabhängig vom Google-Index arbeiten | Pillar soll zum Angebot führen ([Matrix](growth-matrices-2026-09-06.md): „Keep + klare Weiterleitung zum Angebot"); die SEO/GEO-Beziehung gehört auf den Hub und muss fachlich korrekt sein. |
| `/geo-betreuung/`, `/en/geo-support/` | Lead benennt den Auslöser (wiederkehrende statt einmalige Arbeit), verweist auf Audit **und** Seiten-Sprint als Vorstufen und nennt SEO-, Inhalts- und GEO-Maßnahmen. Zusätzlich: erstmals ein sichtbarer Angebotsblock mit Preis und Umfang, Hero-CTA auf das eigene Formular statt auf die Startseite, CTA- und Erfolgsereignis ergänzt | Betreuung war der einzige bezahlte Weg ohne SEO-Bezug, ohne benannten Einstiegszustand, ohne Angebotsblock und ohne eigenes Tracking. |
| `/geo-audit/`, `/en/geo-audit/` | DE-Lead benennt den Auslöser „Ursache unklar" analog zur EN-Fassung und ergänzt „deine wichtigsten Seiten"; verwandter Link „Relaunch" → „Seiten-Sprint / laufende Betreuung" | Trennkriterium zum Sprint muss auf der Seite selbst stehen; Relaunch-Verweis stammte aus der alten Erzählung. |
| `/ai-sichtbarkeit/`, `/en/ai-visibility/` | CTA-Datenfeld „Website-Check anfragen" → „KI-Sichtbarkeit im GEO Audit prüfen"; Quellen-Feature von „gezielt bespielen" auf „ermitteln … und ableiten, wo eigene belegbare Inhalte fehlen" umformuliert | beseitigt Mehrdeutigkeit zwischen Gratischeck und Audit; die alte Formulierung las wie Quellenmanipulation und widersprach der GEO-Regel in `AGENTS.md`. |
| `/content-optimierung-ai-suche/`, `/en/content-optimization-ai-search/` | keine Änderung erforderlich | bereits „für Google, KI-Suche und passende Käufer" mit begrenztem Umfang und ohne Audit-Pflicht — die Seite trug den Mechanismus bereits. |

## 5.1 Öffentliche Einstiegspreise und Agent-Readable Offers

Nachträglich beauftragte Erweiterung von Sprint 1.5. Sie ersetzt die bisherige Regel „Preis auf Anfrage" und die Formulierung „ohne Pakete zu erzwingen".

### Entscheidung

Die drei bezahlten Angebote werden mit **öffentlichem Einstiegspreis** geführt. Die Preise stammen aus der bestehenden Growth-/Revenue-Research und werden ab jetzt öffentlich getestet; sie sind keine neue Kalkulation.

| Angebot | Einstiegspreis | Dauer | Owner-Route |
|---|---|---|---|
| GEO Audit | ab 1.500 € netto, einmalig | rund 7 Arbeitstage | `/geo-audit/` |
| Seiten-Sprint | ab 2.500 € netto, einmalig | rund 10 Arbeitstage | `/content-optimierung-ai-suche/` |
| Laufende Betreuung | ab 1.250 € netto / Monat | zunächst 3 Monate | `/geo-betreuung/` |

`ab`, `netto` und `/ Monat` sind überall sichtbar. Kein „Preis auf Anfrage" als alleinige Preisangabe, kein Rabatt, keine erfundene Ersparnis, keine künstliche Knappheit. Der bisherige „Empfohlener Einstieg"-Hinweis wurde entfernt: Welcher Weg passt, hängt vom Käuferzustand ab, nicht von einer Empfehlung — für eine Hervorhebung gibt es keine belastbare Grundlage.

Hub-H2: „Klare Pakete. Individuell im Umfang" / „Clear packages. Individual in scope".

### Eine Datenquelle für Mensch, Karte und Maschine

`src/content/offers.ts` ist die einzige Quelle für Preis, Basisumfang, Deliverables, Dauer, Grenzen und CTA. Daraus lesen:

1. die **Paketkarten** auf `/geo-optimierung/` und `/en/geo-optimization/` (Name, Käuferzustand, Preis, Dauer, CTA),
2. der sichtbare **Angebotsblock** `OfferScope` auf den drei Owner-Routen,
3. das **JSON-LD** über `createServicePageSchema`.

Damit kann die strukturierte Auszeichnung keinen Preis und keinen Umfang behaupten, den die Seite nicht sichtbar zeigt — die Bedingung, die Google an Structured Data stellt.

### Sichtbare, explizit gelabelte Angebotsfakten

`OfferScope` rendert je Angebot eine Definitionsliste mit acht expliziten Feldern: **Preis** (inklusive Einstiegspreis-Hinweis), **Geeignet für**, **Umfang**, **Du erhältst**, **Dauer**, **Grenzen**, **Nächster Schritt** mit dem angebotsspezifischen CTA, dazu ein Querverweis auf den jeweils anderen Kaufweg. EN spiegelt dies mit Price / Suited to / Scope / You receive / Duration / Limits / Next step.

Die Felder sind bewusst keine Marketingabsätze: Ein Browser-Agent oder LLM kann Preis, Umfang, Ergebnis, Dauer und Grenzen direkt aus dem sichtbaren HTML entnehmen, ohne Interpretation. Das Angebot ist damit für Suchmaschinen, Answer Engines und künftige Vergleichs-/Kaufagenten eindeutig beschreibbar.

Neu bestückt wurde dabei auch `/geo-betreuung/` bzw. `/en/geo-support/`, die bisher keinen Angebotsblock hatte.

### Structured Data

`Service` → `offers` → `Offer` → `priceSpecification`, ausschließlich auf den drei Seiten, die denselben Preis sichtbar zeigen.

- Einmalige Angebote: `PriceSpecification` mit `minPrice` (1500 bzw. 2500), `priceCurrency: "EUR"` und `valueAddedTaxIncluded: false`. Bewusst **kein** fester `Offer.price`, weil es sich um einen echten „ab"-Preis handelt.
- Betreuung: `UnitPriceSpecification` mit `minPrice: 1250`, `unitCode: "MON"` und `referenceQuantity` von einem Monat, damit der wiederkehrende Charakter modelliert ist und nicht als Einmalpreis missverstanden wird.
- Nicht gesetzt: `availability`, `priceValidUntil` und Retail-Semantik. Dafür gibt es keine belastbare Grundlage.

**Reichweitengrenze:** Die offiziellen Commerce-Flächen von OpenAI und Google sind derzeit überwiegend auf Produkte und Retail ausgerichtet. Es wird ausdrücklich **nicht** behauptet, dass PATERNOGA-Dienstleistungen dadurch in ChatGPT Shopping, Instant Checkout oder vergleichbaren Kaufflächen erscheinen. Optimiert wird auf allgemeine maschinenlesbare kommerzielle Klarheit.

### CTA-, Attributions- und Trackingfolgen

- Jede Paketkarte führt in den passenden bereits implementierten Revenue-Pfad: `/geo-audit/#kontakt`, `/content-optimierung-ai-suche/#kontakt`, `/geo-betreuung/#kontakt`. Damit landet der Käufer direkt im vorbereiteten Formular der jeweiligen Owner-Route.
- `offer_type` bleibt korrekt, weil er serverseitig aus `SubpageContact` der Zielseite stammt (`geo_audit`, `page_sprint`, `geo_support`) und nicht aus dem Link.
- Der Hero-CTA von `/geo-betreuung/` zeigte bisher auf das allgemeine Startseitenformular und wurde auf das eigene `#kontakt` der Seite korrigiert; dadurch trägt der Lead jetzt `geo_support` statt `general`.
- **Lücke geschlossen:** Betreuung war bisher der einzige bezahlte Weg ohne CTA-Ereignis. Die Ereignisliste aus Revenue Sprint 1 wurde um genau zwei Namen erweitert — `geo_support_cta_click` und `geo_support_inquiry_success` — mit identischer Nutzlast und ohne neue Datenkategorie. Alle drei bezahlten Angebote sind damit symmetrisch instrumentiert.
- Neue CTA-Kennungen: `hub_package` (Paketkarten) und `offer_scope` (Angebotsblock). Keine PII, keine Kampagnenfreitexte, keine Lead-ID in Ereignissen.

## 6. Proof Alignment

| Behauptung nach diesem Sprint | Beleg | Stufe |
|---|---|---|
| Wir prüfen die drei Leser getrennt | technischer Scanner (Leser 2, Zugang), GEO Audit (Leser 2, Ausgabe), SEO-/Struktur-/Conversion-Arbeit (Leser 1 und 3) | Fähigkeit, live und beschrieben |
| Wir legen den Ausgangszustand offen, auch bei kleinen Zahlen | eigener GSC-Stand als Arbeitsprobe auf `/geo-audit/`; [T0](growth-gsc-t0-2026-09-05.json), [aktueller Abruf](seo-positioning-gsc-2026-09-06.json) | OWN WORK SAMPLE |
| Wir arbeiten technisch belegbar an KI-Erreichbarkeit | [DAX-40-Crawler-Erhebung](https://www.paternoga-seo-geo.de/research/ki-crawler-readiness-dax-40-2026/), 33/40 verwertbare robots.txt, sieben unbekannt | OWN WORK SAMPLE |
| SEO und GEO teilen Grundlagen | Google-Dokumentation zu AI-Funktionen sowie die dokumentierten eigenen Such-Crawler von OpenAI und Perplexity, bereits auf `/geo-agentur-deutschland/` verlinkt | öffentliche Primärquellen |
| Wir setzen selbst um | bestehende reale Projekte im Referenzabschnitt | DELIVERED WORK, kein Sichtbarkeitsbeleg |
| Mehr Anfragen durch SEO/GEO | **nicht behauptet** | CUSTOMER OUTCOME fehlt |

Keine Superlative, keine Garantien, keine erfundenen Kundenzahlen. Der Nicht-Garantie-Hinweis im Sichtbarkeitsabschnitt bleibt unverändert bestehen.

## 7. Erhaltene Revenue Paths

| Pfad | Zustand nach Sprint 1.5 |
|---|---|
| A — direkter GEO-Audit-Kauf | erhalten; `audit_hero`-CTA, Header-Override und vorbelegtes Formular unverändert |
| B — direkter Seiten-Sprint-Kauf | erhalten; `sprint_hero`-CTA und Direktanfrage ohne Audit unverändert |
| C — kostenfreier technischer Check | erhalten; eigener Abschnitt, eigener Einstieg, weiterhin klar als technische Diagnose ausgewiesen |
| D — Attribution | erhalten; `offer_type`, `source`, `source_page`, `landing_page`, `cta_id`, `funnel_path`, `attribution_mode`, `lead_id` und die Consent-Bedingungen unverändert. Die `intent`-Werte `improve`/`new`/`advice` sind stabil geblieben; nur Labels und Reihenfolge wurden geändert. |

## 8. `/seo-dresden/` — Implementation Brief

**Nicht implementiert.** Kein Code, keine Route, kein Sitemap-Eintrag, keine Veröffentlichung. Umsetzung erfordert einen separaten Sprint-2-Auftrag.

| Feld | Festlegung |
|---|---|
| **Primary Buyer** | Dienstleister mit tatsächlichem Einzugsgebiet Dresden/Sachsen, bestehender Website und laufendem Geschäft, deren Leistung vor dem Kauf erklärt werden muss. Derselbe Käufer wie national, nur mit lokalem Suchanlass; keine zusätzlichen Filter nach Eigentümerstruktur oder Leistungsanzahl. Nicht adressiert: Kleinstbetriebe ohne Website oder Budget, überregionale Konzerne. |
| **Primary Search Intent** | „SEO Agentur Dresden" (Anbieterwahl). Sekundär auf derselben Seite: „SEO Dresden", „SEO Beratung Dresden", ein begrenzter Abschnitt für „GEO Agentur Dresden" und ein Abschnitt zum Relaunch-Anlass. **Keine** zusätzliche `/geo-agentur-dresden/`, `/seo-beratung-dresden/` oder Städtefächer-Variante. |
| **Hauptproblem** | „Wir sind hier bekannt genug, aber über die Website kommen zu wenige passende Anfragen — und ich weiß nicht, ob wir bei Google oder in KI-Antworten überhaupt vorkommen." |
| **Rolle von SEO** | Führend und zuerst genannt. Lokale Auffindbarkeit, Google Business Profile, technische Grundlagen, Seitenstruktur, lokal relevante Leistungsseiten. SEO ist der Einstieg, nicht der Zusatz. Die Seite muss ohne GEO-Kenntnisse verständlich sein. |
| **Rolle von GEO** | Erweiterung im hinteren Drittel, ein begrenzter Abschnitt. Erklärt, dass Antwortsysteme dieselbe Seite als zweiter Leser lesen und dabei auf geteilten Grundlagen aufsetzen, aber eigene Crawler und Retrieval-Wege nutzen. Kein zweites Hauptversprechen, keine lokale AI-Führungsbehauptung, keine Abhängigkeitsbehauptung gegenüber dem Google-Index. |
| **Offer** | Einstieg: Website-Check und lokale Prioritäten. Bezahlte Wege: Seiten-Sprint bei bekanntem Seitenproblem, GEO Audit bei unklarer Ursache, Betreuung nur bei tatsächlichem laufendem Bedarf. Keine neuen Angebotstypen und keine lokalen Sonderpakete. Es gelten dieselben öffentlichen Einstiegspreise wie national (ab 1.500 € / ab 2.500 € / ab 1.250 € netto pro Monat), gelesen aus `src/content/offers.ts`; kein abweichender lokaler Preis und kein lokaler Rabatt. |
| **CTA** | Primary: „Website-Check anfragen" → lokales Anfrageformular mit eigener `source`-Kennung und `offer_type` gemäß gewähltem Weg. Secondary: „Seiten-Sprint ansehen". Der kostenfreie technische Check bleibt sekundär und darf den bezahlten Weg nicht verdrängen. |
| **Proof** | Reale lokale Arbeit mit Freigabe (Pauline Paternoga ist als bestehendes Dresdner Projekt mit lokaler Suchoptimierung dokumentiert), eigener GSC-Ausgangsstand, DAX-Erhebung, persönliche Erreichbarkeit und tatsächlicher Standort. Kundenzahlen erst mit ausdrücklicher Zustimmung. Keine erfundenen lokalen Cases. |
| **Positionierung** | Dieselbe Kernpositionierung, lokal eingerahmt: die wenigen Seiten, über die Anfragen kommen, durch Google, Antwortsysteme und den Menschen davor — von jemandem, der tatsächlich in Dresden sitzt und selbst umsetzt. |
| **Was die Seite NICHT behaupten darf** | keine Marktführerschaft oder „beste SEO-Agentur Dresden"; kein Rankingversprechen und keine Zeitangabe bis Top-3; keine Local-Pack-Position, solange sie nicht gemessen ist; kein GBP-Status, bevor Berechtigung und Profil geprüft sind; keine fingierte Niederlassung oder zusätzliche Adresse; kein „SEO + GEO aus Dresden" als Alleinstellung (WEBneo führt beides bereits auf seiner Dresden-Seite); keine übernommenen Toolvolumina als bestätigte Nachfrage; kein lokaler AI-Sichtbarkeitssieger ohne eigene Stichprobe. |
| **Technische Vorgaben für die spätere Umsetzung** | DE-Route `/seo-dresden/`; englisches Pendant im Umsetzungsauftrag verbindlich festzulegen, bestehende EN-Slugs bleiben unverändert. Kanonischer Taxonomie-Parent, logische Breadcrumbs, eigenständige Metadaten, Visual-Parity-Protokoll aus `design.md` mit eigenem Signature-Visual und eigener Mobile-Komposition. Der SEO-Validator erwartet die Routenzahl der Sitemap — sie steigt mit dieser Seite von 40 auf 41 (bzw. 42 mit EN-Pendant) und ist im Umsetzungsauftrag mit anzupassen. |

## 8.1 Abnahme, Release und Live-Verifikation

- Lokal vollständig: Astro check 186 Dateien ohne Fehler/Warnungen/Hinweise, Build, 11 Unit-Tests, isolierter Produktions-API-Vertrag, 40 SEO-Routen, Crawler-, Security- und Static-Prüfungen sowie 137 Browsertests (131 bestehende plus 6 neue Angebotsprüfungen). `git diff --check` ohne Whitespacefehler.
- Neue Regressionstests: je Owner-Route wird geprüft, dass der Einstiegspreis mit Suffix sichtbar ist, dass die sieben Angebotslabels vollständig und in der richtigen Reihenfolge erscheinen, dass der CTA auf das Formular derselben Seite zeigt und dass `Service.offers.priceSpecification` exakt zum sichtbaren Preis passt (`PriceSpecification` bzw. `UnitPriceSpecification` mit `unitCode: "MON"`). Damit kann die Konsistenz von sichtbarem Preis und Structured Data nicht unbemerkt auseinanderlaufen.
- Release-Commit: `542e48f`.
- Production: Deployment `paternoga-seo-geo-studio-h8vg7qjl9.vercel.app`, Status `Ready`, ausgelöst durch den Push auf `main`.
- Live gegen `https://www.paternoga-seo-geo.de` verifiziert: SEO-Validator über alle 40 Routen bestanden; 53 Browserprüfungen aus Service-Pages und Revenue-Sprint bestanden, darunter alle sechs Angebotsprüfungen und die beiden direkten Kaufwege; 13 weitere Prüfungen für Consent, Security-Header und Content Negotiation bestanden. Keine echte Formulareinsendung, keine E-Mail versendet.
- Betreuungs-Attribution live nachgestellt: CTA erzeugt `geo_support_cta_click` mit `offer_type: geo_support` und `cta_id: offer_scope` ohne PII; der abgefangene Lead trug `offer_type: geo_support`, `source: geo-support-service`, `source_page: /geo-betreuung/`, `landing_page: /` und `attribution_mode: consented_session`.

## 9. Nicht gestartet

- **Partner-/Referral-Aktivierung:** NOT STARTED
- **Warme Kontakte als Growth Push:** NOT STARTED
- **Snapshot-Distribution:** NOT STARTED
- **`/seo-dresden/`:** NOT IMPLEMENTED — nur dieser Brief
- Keine neue Studie erhoben oder veröffentlicht, keine externe Nachricht versendet, kein Accounteintrag vorgenommen.
