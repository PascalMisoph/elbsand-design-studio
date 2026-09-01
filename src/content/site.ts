export type Locale = "de" | "en";

export const heroImage = "/images/paternoga-hero.webp";

export const projectLogos = [
  {
    name: "Kuzikus Wildlife Reserve",
    logo: "/images/project-logos/kuzikus-wildlife-reserve-logo.png",
    width: 250,
    height: 100,
    url: "https://www.kuzikus-namibia.com/",
    variant: "wide",
    slug: "kuzikus"
  },
  {
    name: "Rays of Hope",
    logo: "/images/project-logos/rays-of-hope-logo.png",
    width: 600,
    height: 400,
    url: "https://rays-of-hope.de",
    variant: "landscape",
    slug: "rays-of-hope"
  },
  {
    name: "Pauline Paternoga",
    logo: "/images/project-logos/pauline-paternoga-logo.webp",
    width: 440,
    height: 440,
    url: "https://www.sprechen-paulinepaternoga.de/",
    variant: "compact",
    slug: "pauline-paternoga"
  },
  {
    name: "Paw & Sage",
    logo: "/images/project-logos/paw-and-sage-logo.webp",
    width: 600,
    height: 600,
    url: "https://pawandsage.com",
    variant: "compact",
    slug: "paw-and-sage"
  },
  {
    name: "Ochre & Chrome",
    logo: "/images/project-logos/ochre-and-chrome-logo.webp",
    width: 600,
    height: 600,
    url: "https://ochreandchrome.com",
    variant: "compact",
    slug: "ochre-and-chrome"
  }
] as const;

export const content = {
  de: {
    meta: {
      title: "SEO & GEO Studio für Deutschland | PATERNOGA",
      description:
        "PATERNOGA ist das Spezialstudio für SEO, GEO, AI Search und AI Visibility. Deutschlandweit tätig, persönlich geführt aus Dresden."
    },
    nav: ["Leistungen", "Projekte", "Sichtbarkeit", "Ablauf", "Kontakt"],
    cta: "Kostenfreier KI-Check",
    secondaryCta: "Ausgewählte Projekte",
    hero: {
      eyebrow: "📍 Studio aus Dresden · für Unternehmen in Deutschland",
      title: ["Suchmaschinen verändern sich.", "Dein Online-Auftritt auch?"],
      body: "PATERNOGA verbindet SEO, GEO und technische Umsetzung, damit dein Angebot in Google und KI-Systemen klar gefunden und eingeordnet werden kann.",
      imageAlt: "Pascal Misoph an seinem Arbeitsplatz im PATERNOGA Studio"
    },
    proof: {
      intro: "Ausgewählte Projekte",
      items: projectLogos
    },
    offer: {
      eyebrow: "Leistungen",
      title: "Dein digitaler Erfolg. Unsere Leistungen für dich",
      detailLinkLabel: "SEO & GEO im Detail",
      items: [
        [
          "1",
          "Inhalte & Seitenaufbau",
          "Wir ordnen dein Angebot, legen die benötigten Seiten fest und führen Besucher ohne Umwege zur passenden Information oder Anfrage."
        ],
        [
          "2",
          "Webdesign & Entwicklung",
          "Wir gestalten und programmieren die Website passend zu deinem Unternehmen. Sie funktioniert auf Smartphone, Tablet und Desktop und bleibt technisch schlank."
        ],
        [
          "3",
          "SEO & GEO",
          "Wir optimieren Websites für klassische Suchmaschinen und KI-gestützte Suchsysteme. Dazu gehören technische SEO, lokale Auffindbarkeit, strukturierte Daten, eindeutige Unternehmensinformationen und Inhalte, die konkrete Fragen potenzieller Kunden beantworten."
        ]
      ]
    },
    references: {
      eyebrow: "Projekte",
      title: "Ausgewählte Projekte",
      featured: {
        name: "Rays of Hope",
        category: "Website · Kommunikation & Vertrauen",
        description:
          "Ein Webauftritt, der Inhalte, Haltung und Vertrauensaufbau klar strukturiert und Besucher schnell zu den relevanten Informationen führt.",
        url: "https://www.rays-of-hope.de/",
        image: "/images/projects/rays-of-hope-homepage.webp",
        mobileImage: "/images/projects/rays-of-hope-homepage-mobile.webp",
        imageAlt: "Startseite von Rays of Hope mit Projektfotografien und dem Leitmotiv Hoffnung schaffen"
      },
      projects: [
        {
          name: "Eurosummer",
          category: "Travel Platform · Brand, Content & Development",
          description:
            "Eine englischsprachige Plattform für europäische Sommerreisen – mit eigener Markenwelt, redaktioneller Struktur und skalierbarem Content-System.",
          url: "https://eurosummer.co",
          image: "/images/projects/eurosummer-homepage.webp",
          imageAlt: "Startseite der Euro-Summer-Plattform mit mediterranem Hero-Bild"
        },
        {
          name: "Pauline Paternoga",
          category: "Website · Local SEO & Conversion",
          description:
            "Neuaufbau der Website mit verständlicher Angebotsstruktur, direkter Terminbuchung und lokaler Suchmaschinenoptimierung für Dresden.",
          url: "https://www.sprechen-paulinepaternoga.de/",
          image: "/images/projects/pauline-paternoga-homepage.webp",
          imageAlt: "Startseite der Website von Pauline Paternoga mit Porträt und Coaching-Angebot"
        },
        {
          name: "Kuzikus",
          category: "Website · Baumzertifikate & Nutzerführung",
          description:
            "Eine fokussierte Projektseite für digitale Baumzertifikate – mit klarer Nutzerführung, vertrauensstarker Gestaltung und verständlicher Vermittlung des Angebots.",
          url: "https://baumprojekt.kuzikus-namibia.com/baumzertifikate",
          image: "/images/projects/kuzikus-baumzertifikate.webp",
          imageAlt: "Baumzertifikate-Seite des Kuzikus Baumprojekts mit Naturmotiv und Standortkarte"
        }
      ],
      linkLabel: "Website ansehen"
    },
    visibility: {
      eyebrow: "SEO & GEO",
      title: "Gefunden werden verändert sich",
      body: "Eine aktuelle Analyse von Graphite.io schätzt, dass das globale Suchvolumen in KI-Assistenten bereits 56 % des klassischen Suchmaschinen-Volumens erreicht hat. PATERNOGA strukturiert deine Inhalte und macht deine Website lokal auffindbar und maschinenlesbar, damit dein Angebot auch in neuen Suchumfeldern klar eingeordnet werden kann.",
      bodyHtml: "Eine aktuelle <a href=\"https://graphite.io/five-percent/research/ai-is-much-bigger-than-you-think\" target=\"_blank\" rel=\"noopener\">Analyse von Graphite.io</a> schätzt, dass das globale Suchvolumen in KI-Assistenten bereits 56 % des klassischen Suchmaschinen-Volumens erreicht hat. PATERNOGA strukturiert deine Inhalte und macht deine Website lokal auffindbar und maschinenlesbar, damit dein Angebot auch in neuen Suchumfeldern klar eingeordnet werden kann.",
      points: [
        [
          "Technisches SEO",
          "Schnelle Ladezeiten, klare Seitenstruktur und saubere interne Verlinkung."
        ],
        [
          "Lokale Auffindbarkeit",
          "Damit Kundinnen und Kunden in deiner Region dich schneller finden."
        ],
        [
          "Strukturierte Informationen",
          "Leistungen, Standort und Expertise maschinenlesbar miteinander verbunden."
        ],
        [
          "GEO-Optimierung",
          "Relevante Sichtbarkeit in generativer KI durch klare Inhalte, Quellen und technische Signale."
        ]
      ],
      dataNote: "der US-amerikanischen Erwachsenen geben an, KI-Zusammenfassungen in Suchergebnissen zu lesen.",
      sourceLabel: "Quelle: Pew Research Center, ",
      sources: [
        {
          label: "2025",
          url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
          ariaLabel: "Pew Research Center: Analyse zu Klicks bei Google-Suchen mit KI-Zusammenfassungen, 2025"
        },
        {
          label: "2026",
          url: "https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/",
          ariaLabel: "Pew Research Center: Americans and AI 2026"
        }
      ],
      note: "Eine konkrete Nennung oder Empfehlung kann nicht garantiert werden. PATERNOGA schafft die technischen und inhaltlichen Voraussetzungen, damit Such- und Antwortsysteme ein Unternehmen möglichst eindeutig erfassen können.",
      systemsIntro: "Sichtbar in",
      systemsLabel: "Google, ChatGPT, Claude und Perplexity",
      detailLinkLabel: "Mehr über SEO & GEO erfahren"
    },
    process: {
      eyebrow: "Ablauf",
      title: "Fünf Schritte. Ein direkter Ansprechpartner",
      contact: {
        label: "Direkter Kontakt",
        name: "Pascal Misoph",
        role: "Dein Ansprechpartner",
        phoneLabel: "Telefon",
        whatsappLabel: "WhatsApp",
        emailLabel: "E-Mail",
        imageAlt: "Pascal Misoph vor einer Berglandschaft"
      },
      steps: [
        ["Wunschtermin wählen", "Wähle einen Termin für ein unverbindliches Erstgespräch. Wir sprechen über dein Vorhaben, analysieren deine aktuelle Sichtbarkeit und klären, ob PATERNOGA der richtige Partner für dein Projekt ist."],
        ["Bestand prüfen", "Wir analysieren deine Website, Inhalte, Datenquellen und die technische Basis. So wird sofort sichtbar, wo die größten Hebel für Google und KI-Suchsysteme liegen."],
        ["Struktur & Seiten planen", "Wir ordnen Suchintentionen und Themen zu einem klaren Seitenaufbau. So stellen wir sicher, dass potenzielle Kunden und moderne Antwortsysteme deine Kernbotschaften sofort finden."],
        ["Design & User Experience festlegen", "Wir entwickeln die visuelle Richtung. Das Design spiegelt deine Marke wider, baut Vertrauen auf und führt Besucher klar zur passenden nächsten Handlung."],
        ["Website bauen & veröffentlichen", "Wir setzen den Code und alle Inhalte sauber um. Nach finalen Prüfungen der Indexierbarkeit, der strukturierten Daten und aller GEO-Funktionen geht deine neue Website live."]
      ]
    },
    editorialSupport: {
      eyebrow: "Editorial Support",
      intro: "Das Team hinter PATERNOGA.",
      people: [
        {
          name: "Pauline",
          role: "Redaktion & Organisation",
          image: "/images/support/pauline-vineyard.webp",
          imageWidth: 640,
          imageHeight: 768,
          imageAlt: "Pauline vor einem Weinberg und einer Berglandschaft"
        },
        {
          name: "Zula",
          role: "Studiobegleitung",
          image: "/images/support/zula-basket.webp",
          imageWidth: 640,
          imageHeight: 768,
          imageAlt: "Zula sitzt aufrecht in einem weißen Hängekorb und blickt in die Kamera"
        },
        {
          name: "Nali",
          role: "Ruhepol & Qualitätskontrolle",
          image: "/images/support/nali-resting.webp",
          imageWidth: 640,
          imageHeight: 768,
          imageAlt: "Nali liegt ruhig auf einer Decke und blickt in die Kamera"
        }
      ]
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Sichtbarkeit gezielt ausbauen",
      quickOption: "Erstgespräch zur Sichtbarkeit buchen",
      detailOption: "SEO- & GEO-Projekt anfragen",
      valueLine: "SEO & GEO, die aus relevanten Fragen qualifizierte Anfragen machen.",
      note: "Deine Anfrage wird direkt und vertraulich an Pascal übermittelt.",
      formLabel: "Unverbindliche Anfrage für SEO, GEO und digitale Sichtbarkeit",
      flow: {
        stepLabel: "Schritt",
        ofLabel: "von",
        back: "Zurück",
        intentQuestion: "Was möchtest du bei Google und in generativen KI-Systemen als Nächstes erreichen?",
        intentOptions: [
          { value: "new", label: "SEO & GEO neu aufbauen" },
          { value: "improve", label: "Bestehende Sichtbarkeit verbessern" },
          { value: "advice", label: "Strategie & nächste Schritte besprechen" }
        ],
        detailQuestions: {
          new: "Welche Ziele soll deine Sichtbarkeit bei Google und in generativen KI-Systemen erreichen?",
          improve: "Welche Website oder Inhalte sollen wir auf SEO- und GEO-Potenzial prüfen?",
          advice: "Welche Sichtbarkeitsfrage möchtest du mit uns klären?"
        },
        detailPlaceholders: {
          new: "Zum Beispiel: mehr qualifizierte Anfragen, lokale Sichtbarkeit oder bessere Antworten in KI-Systemen.",
          improve: "Website-Adresse und, wenn du magst, das wichtigste Ziel.",
          advice: "Ein bis zwei Sätze zu deiner aktuellen Situation genügen."
        },
        contactQuestion: "Wohin dürfen wir uns mit einer ersten Einschätzung melden?",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        next: "Weiter",
        submit: "Sichtbarkeit besprechen",
        summaryLabel: "Dein Sichtbarkeitsziel",
        privacy: "Persönlich gelesen · unverbindlich · vertraulich behandelt",
        sending: "Wird sicher übermittelt …",
        errorMessage: "Das hat gerade nicht funktioniert. Bitte versuche es noch einmal.",
        successEyebrow: "Anfrage angekommen",
        successTitle: "Der nächste Schritt ist vorbereitet.",
        successBody: "Pascal prüft deine Angaben persönlich und meldet sich mit einer ersten Einschätzung und passenden nächsten Schritten.",
        successAgain: "Weitere Anfrage starten"
      }
    },
    footer: { legal: "Paternoga SEO & GEO Studio", imprint: "Impressum", privacy: "Datenschutz" }
  },
  en: {
    meta: {
      title: "SEO & GEO Studio for Germany | PATERNOGA",
      description:
        "PATERNOGA is a specialist studio for SEO, GEO, AI Search and AI Visibility, serving companies across Germany from Dresden."
    },
    nav: ["Services", "Projects", "Visibility", "Process", "Contact"],
    cta: "Start your free AI check",
    secondaryCta: "Selected projects",
    hero: {
      eyebrow: "📍 Dresden-based studio · serving companies across Germany",
      title: ["Search engines are changing.", "Is your online presence keeping up?"],
      body: "PATERNOGA connects SEO, GEO and technical implementation so your offer can be found and understood clearly in Google and AI systems.",
      imageAlt: "Pascal Misoph at his desk in the PATERNOGA studio"
    },
    proof: {
      intro: "Selected projects",
      items: projectLogos
    },
    offer: {
      eyebrow: "Services",
      title: "Your digital success. Our services for you",
      detailLinkLabel: "SEO & GEO in detail",
      items: [
        [
          "1",
          "Content & page structure",
          "We organise your offer, define the pages you need and guide visitors directly to the right information or enquiry."
        ],
        [
          "2",
          "Web design & development",
          "We design and build the website around your business. It works on phones, tablets and desktops while keeping the technical foundation lean."
        ],
        [
          "3",
          "SEO & GEO",
          "We optimise websites for traditional search engines and AI-powered search systems. This includes technical SEO, local discovery, structured data, consistent business information and content that answers potential customers’ questions."
        ]
      ]
    },
    references: {
      eyebrow: "Projects",
      title: "Selected projects",
      featured: {
        name: "Rays of Hope",
        category: "Website · Communication & trust",
        description:
          "A website that gives content, purpose and trust-building a clear structure and guides visitors quickly to the relevant information.",
        url: "https://www.rays-of-hope.de/",
        image: "/images/projects/rays-of-hope-homepage.webp",
        mobileImage: "/images/projects/rays-of-hope-homepage-mobile.webp",
        imageAlt: "Rays of Hope homepage with project photography and its main message"
      },
      projects: [
        {
          name: "Eurosummer",
          category: "Travel Platform · Brand, Content & Development",
          description:
            "An English-language platform for European summer travel, with its own brand world, editorial structure and scalable content system.",
          url: "https://eurosummer.co",
          image: "/images/projects/eurosummer-homepage.webp",
          imageAlt: "Euro Summer homepage with a Mediterranean hero image"
        },
        {
          name: "Pauline Paternoga",
          category: "Website · Local SEO & Conversion",
          description:
            "A rebuilt website with an easy-to-follow service structure, direct appointment booking and local search optimisation for Dresden.",
          url: "https://www.sprechen-paulinepaternoga.de/",
          image: "/images/projects/pauline-paternoga-homepage.webp",
          imageAlt: "Pauline Paternoga homepage with her portrait and coaching offer"
        },
        {
          name: "Kuzikus",
          category: "Website · Tree certificates & user journeys",
          description:
            "A focused project page for digital tree certificates, with clear navigation, a trust-building design and an accessible explanation of the offer.",
          url: "https://baumprojekt.kuzikus-namibia.com/baumzertifikate",
          image: "/images/projects/kuzikus-baumzertifikate.webp",
          imageAlt: "Kuzikus tree certificate page with a nature image and location map"
        }
      ],
      linkLabel: "View website"
    },
    visibility: {
      eyebrow: "SEO & GEO",
      title: "The way businesses are found is changing",
      body: "A recent analysis by Graphite.io estimates that global search volume in AI assistants has reached 56% of traditional search-engine volume. PATERNOGA structures your content and makes your website locally discoverable and machine-readable so your offer can be understood clearly in emerging search environments.",
      bodyHtml: "A recent <a href=\"https://graphite.io/five-percent/research/ai-is-much-bigger-than-you-think\" target=\"_blank\" rel=\"noopener\">analysis by Graphite.io</a> estimates that global search volume in AI assistants has reached 56% of traditional search-engine volume. PATERNOGA structures your content and makes your website locally discoverable and machine-readable so your offer can be understood clearly in emerging search environments.",
      points: [
        [
          "Technical SEO",
          "Fast load times, clear page structure and clean internal linking."
        ],
        [
          "Local discovery",
          "So customers in your region can find you more quickly."
        ],
        [
          "Structured information",
          "Services, location and expertise connected in a machine-readable way."
        ],
        [
          "GEO optimisation",
          "Relevant visibility in generative AI through clear content, sources and technical signals."
        ]
      ],
      dataNote: "of U.S. adults say they read AI summaries in search results.",
      sourceLabel: "Source: Pew Research Center, ",
      sources: [
        {
          label: "2025",
          url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
          ariaLabel: "Pew Research Center analysis of clicks on Google searches with AI summaries, 2025"
        },
        {
          label: "2026",
          url: "https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/",
          ariaLabel: "Pew Research Center: Americans and AI 2026"
        }
      ],
      note: "A specific mention or recommendation cannot be guaranteed. PATERNOGA creates the technical and editorial conditions that help search and answer systems identify a business as clearly as possible.",
      systemsIntro: "Visible in",
      systemsLabel: "Google, ChatGPT, Claude and Perplexity",
      detailLinkLabel: "Learn more about SEO & GEO"
    },
    process: {
      eyebrow: "Process",
      title: "Five steps. One direct contact",
      contact: {
        label: "Direct contact",
        name: "Pascal Misoph",
        role: "Your contact",
        phoneLabel: "Phone",
        whatsappLabel: "WhatsApp",
        emailLabel: "Email",
        imageAlt: "Pascal Misoph in front of a mountain landscape"
      },
      steps: [
        ["Choose a preferred date", "Choose a date for a no-obligation initial conversation. We discuss your project, its current visibility and whether PATERNOGA is the right partner for your SEO and GEO work."],
        ["Review the current site", "We review the website, content, sources, technical foundation and existing visibility. This quickly reveals where the strongest SEO and GEO opportunities lie."],
        ["Plan the pages", "We prioritise questions and search intent to create a page structure that leads people quickly to the right answer, builds trust and gives AI systems the relevant context."],
        ["Set the design", "We develop the visual direction. The design reflects your brand, builds trust and guides visitors clearly towards the right next action."],
        ["Build & publish the website", "We implement the content and technical foundations, review indexability, structured data and internal linking, then publish with the essential SEO and GEO settings."]
      ]
    },
    editorialSupport: {
      eyebrow: "Editorial Support",
      intro: "The people and familiar faces who support PATERNOGA behind the scenes.",
      people: [
        {
          name: "Pauline",
          role: "Editorial & organisation",
          image: "/images/support/pauline-vineyard.webp",
          imageWidth: 640,
          imageHeight: 768,
          imageAlt: "Pauline in front of a vineyard and mountain landscape"
        },
        {
          name: "Zula",
          role: "Studio companion",
          image: "/images/support/zula-basket.webp",
          imageWidth: 640,
          imageHeight: 768,
          imageAlt: "Zula sitting upright in a white hanging basket and looking at the camera"
        },
        {
          name: "Nali",
          role: "Calm presence & quality control",
          image: "/images/support/nali-resting.webp",
          imageWidth: 640,
          imageHeight: 768,
          imageAlt: "Nali resting calmly on a blanket and looking at the camera"
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Build your visibility deliberately",
      quickOption: "Book a visibility consultation",
      detailOption: "Enquire about SEO & GEO",
      valueLine: "SEO & GEO that turn relevant questions into qualified enquiries.",
      note: "Your enquiry goes directly and confidentially to Pascal.",
      formLabel: "No-obligation enquiry for SEO, GEO and digital visibility",
      flow: {
        stepLabel: "Step",
        ofLabel: "of",
        back: "Back",
        intentQuestion: "What would you like to achieve on Google and in generative AI next?",
        intentOptions: [
          { value: "new", label: "Build SEO & GEO from the ground up" },
          { value: "improve", label: "Improve existing visibility" },
          { value: "advice", label: "Discuss strategy & next steps" }
        ],
        detailQuestions: {
          new: "What should your visibility on Google and in generative AI achieve?",
          improve: "Which website or content should we review for SEO and GEO potential?",
          advice: "Which visibility question would you like to clarify with us?"
        },
        detailPlaceholders: {
          new: "For example: more qualified enquiries, local visibility or better answers in AI systems.",
          improve: "Website address and, if useful, the main goal.",
          advice: "One or two sentences about your current situation are enough."
        },
        contactQuestion: "Where may we send a first assessment?",
        nameLabel: "Name",
        emailLabel: "Email",
        next: "Continue",
        submit: "Discuss visibility",
        summaryLabel: "Your visibility goal",
        privacy: "Read personally · no obligation · treated confidentially",
        sending: "Sending securely …",
        errorMessage: "That did not work. Please try again.",
        successEyebrow: "Enquiry received",
        successTitle: "The next step is ready.",
        successBody: "Pascal will review your details personally and get back to you with an initial assessment and suitable next steps.",
        successAgain: "Start another enquiry"
      }
    },
    footer: { legal: "Paternoga SEO & GEO Studio", imprint: "Imprint", privacy: "Privacy" }
  }
} as const;
