export type Locale = "de" | "en";

export const heroImage = "/images/elbsand-hero.webp";

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
    logo: "/images/project-logos/pauline-paternoga-logo.png",
    width: 440,
    height: 440,
    url: "https://www.sprechen-paulinepaternoga.de/",
    variant: "compact",
    slug: "pauline-paternoga"
  },
  {
    name: "Paw & Sage",
    logo: "/images/project-logos/paw-and-sage-logo.png",
    width: 600,
    height: 600,
    url: "https://pawandsage.com",
    variant: "compact",
    slug: "paw-and-sage"
  },
  {
    name: "Ochre & Chrome",
    logo: "/images/project-logos/ochre-and-chrome-logo.png",
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
      title: "ELBSAND Design Studio – Webdesign, SEO & GEO aus Dresden",
      description:
        "ELBSAND plant, gestaltet und entwickelt Websites für Unternehmen – mit Webdesign, technischer Umsetzung, SEO, lokaler Suche und GEO."
    },
    nav: ["Leistungen", "Projekte", "Sichtbarkeit", "Ablauf", "Kontakt"],
    cta: "Kostenfreier KI-Check",
    secondaryCta: "Ausgewählte Projekte",
    hero: {
      eyebrow: "📍 Webdesign und digitale Sichtbarkeit aus Dresden",
      title: ["Suchmaschinen verändern sich.", "Dein Online-Auftritt auch?"],
      body: "Websiten, die überzeugen. Für Sichtbarkeit bei Google und in KI-Suchen.",
      imageAlt: "Pascal Misoph an seinem Arbeitsplatz im ELBSAND Studio"
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
      body: "Suchverhalten wandelt sich – von klassischen Treffern zu direkten KI-Antworten. ELBSAND macht deine Website technisch stark, lokal sichtbar und maschinenlesbar.",
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
          "Damit ChatGPT und Perplexity dein Unternehmen als relevante Quelle einordnen können."
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
      note: "Eine konkrete Nennung oder Empfehlung kann nicht garantiert werden. ELBSAND schafft die technischen und inhaltlichen Voraussetzungen, damit Such- und Antwortsysteme ein Unternehmen möglichst eindeutig erfassen können.",
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
        ["Wunschtermin wählen", "Wähle einen Termin für ein unverbindliches Erstgespräch. Wir sprechen über dein Vorhaben, stellen erste Rückfragen und klären, ob ELBSAND der richtige Partner für dein Projekt ist."],
        ["Bestand prüfen", "Wenn bereits eine Website vorhanden ist, sehen wir uns Struktur, Inhalte, Gestaltung und technische Basis an. So wird schnell sichtbar, wo die größten Hebel liegen."],
        ["Seiten planen", "Wir legen fest, welche Inhalte benötigt werden und wie Besucher sinnvoll durch die Website geführt werden."],
        ["Design festlegen", "Wir entwickeln die visuelle und strukturelle Richtung der Website – passend zum Unternehmen und zum gewünschten Auftritt."],
        ["Website bauen & veröffentlichen", "Das freigegebene Design wird umgesetzt, technisch geprüft und mit den grundlegenden SEO- und GEO-Einstellungen veröffentlicht."]
      ]
    },
    editorialSupport: {
      eyebrow: "Editorial Support",
      intro: "Das Team hinter ELBSAND.",
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
      title: "Wie möchtest du starten?",
      quickOption: "Direkt Erstgespräch buchen",
      detailOption: "Projektanfrage senden",
      valueLine: "Von der ersten Idee bis zum sichtbaren Ergebnis.",
      note: "Die Anfrage wird direkt und sicher übermittelt.",
      formLabel: "Geführte Anfrage für einen kostenlosen Website-Check",
      flow: {
        stepLabel: "Schritt",
        ofLabel: "von",
        back: "Zurück",
        intentQuestion: "Wobei können wir dich unterstützen?",
        intentOptions: [
          { value: "new", label: "Neue Website" },
          { value: "improve", label: "Bestehende Website verbessern" },
          { value: "advice", label: "Beratung zu digitaler Sichtbarkeit" }
        ],
        detailQuestions: {
          new: "Was soll die neue Website für dich erreichen?",
          improve: "Welche Website sollen wir uns ansehen?",
          advice: "Worüber möchtest du mit uns sprechen?"
        },
        detailPlaceholders: {
          new: "Ein bis zwei Sätze genügen.",
          improve: "Website-Adresse und, wenn du magst, ein kurzer Hinweis.",
          advice: "Ein bis zwei Sätze genügen."
        },
        contactQuestion: "Wie dürfen wir dich erreichen?",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        next: "Weiter",
        submit: "Anfrage vorbereiten",
        summaryLabel: "Dein Anliegen",
        privacy: "Persönlich gelesen · unverbindlich · keine Weitergabe",
        sending: "Wird gesendet …",
        errorMessage: "Das hat gerade nicht funktioniert. Bitte versuche es noch einmal.",
        successEyebrow: "Anfrage gesendet",
        successTitle: "Vielen Dank für deine Anfrage.",
        successBody: "Deine Angaben sind angekommen. Pascal sieht sie sich persönlich an und meldet sich bei dir.",
        successAgain: "Weitere Anfrage starten"
      }
    },
    footer: { legal: "ELBSAND Design Studio", imprint: "Impressum", privacy: "Datenschutz" }
  },
  en: {
    meta: {
      title: "ELBSAND Design Studio – Web design, SEO & GEO from Dresden",
      description:
        "ELBSAND plans, designs and develops websites for businesses, including web design, development, SEO, local search and GEO."
    },
    nav: ["Services", "Projects", "Visibility", "Process", "Contact"],
    cta: "Start your free AI check",
    secondaryCta: "Selected projects",
    hero: {
      eyebrow: "📍 Web design and digital visibility from Dresden",
      title: ["Search engines are changing.", "Is your online presence keeping up?"],
      body: "Websites that convince. Built for visibility on Google and in AI search.",
      imageAlt: "Pascal Misoph at his desk in the ELBSAND studio"
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
      body: "Search is shifting from traditional results to direct AI answers. ELBSAND makes your website technically strong, locally visible and machine-readable.",
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
          "So ChatGPT and Perplexity can classify your business as a relevant source."
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
      note: "A specific mention or recommendation cannot be guaranteed. ELBSAND creates the technical and editorial conditions that help search and answer systems identify a business as clearly as possible.",
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
        ["Choose a preferred date", "Choose a date for a no-obligation initial conversation. We discuss your project, ask the first questions and determine whether ELBSAND is the right partner for it."],
        ["Review the current site", "If a website already exists, we review its structure, content, design and technical foundation. This quickly reveals where the strongest opportunities lie."],
        ["Plan the pages", "We define the content required and how visitors should move through the website."],
        ["Set the design", "We develop the visual and structural direction of the website to suit the business and the desired presence."],
        ["Build & publish the website", "The approved design is implemented, technically reviewed and published with the essential SEO and GEO settings."]
      ]
    },
    editorialSupport: {
      eyebrow: "Editorial Support",
      intro: "The people and familiar faces who support ELBSAND behind the scenes.",
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
      title: "How would you like to start?",
      quickOption: "Book an initial consultation",
      detailOption: "Send a project enquiry",
      valueLine: "From the first idea to a visible result.",
      note: "Your request is submitted directly and securely.",
      formLabel: "Guided request for a free website check",
      flow: {
        stepLabel: "Step",
        ofLabel: "of",
        back: "Back",
        intentQuestion: "How can we help?",
        intentOptions: [
          { value: "new", label: "Create a new website" },
          { value: "improve", label: "Improve an existing website" },
          { value: "advice", label: "Digital visibility consultation" }
        ],
        detailQuestions: {
          new: "What should your new website achieve?",
          improve: "Which website should we review?",
          advice: "What would you like to discuss?"
        },
        detailPlaceholders: {
          new: "One or two sentences are enough.",
          improve: "Your website address and, if useful, a short note.",
          advice: "One or two sentences are enough."
        },
        contactQuestion: "How can we reach you?",
        nameLabel: "Name",
        emailLabel: "Email",
        next: "Continue",
        submit: "Prepare request",
        summaryLabel: "Your request",
        privacy: "Read personally · no obligation · never shared",
        sending: "Sending …",
        errorMessage: "That did not work. Please try again.",
        successEyebrow: "Enquiry sent",
        successTitle: "Thank you for your enquiry.",
        successBody: "Your details have arrived. Pascal will review them personally and get back to you.",
        successAgain: "Start another enquiry"
      }
    },
    footer: { legal: "ELBSAND Design Studio", imprint: "Imprint", privacy: "Privacy" }
  }
} as const;
