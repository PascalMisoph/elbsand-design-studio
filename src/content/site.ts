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
      title: "SEO & GEO Studio für Dienstleister | PATERNOGA",
      description:
        "PATERNOGA bringt die Seiten, über die Ihre Anfragen kommen, durch Google, durch KI-Antwortsysteme und durch den Menschen, der dort entscheidet."
    },
    nav: ["Leistungen", "Lösungen", "Referenzen", "Ablauf", "Ressourcen", "Kontakt"],
    cta: "Projekt anfragen",
    heroCta: "Sichtbarkeit prüfen",
    secondaryCta: "Projekt anfragen",
    hero: {
      eyebrow: {
        primary: "SEO & GEO-Agentur aus Dresden",
        secondary: "für Unternehmen in Deutschland"
      },
      title: ["Werden Sie gefunden, wenn Kunden", "nach Ihrer Leistung suchen?"],
      body: {
        stats: [
          {
            value: "40 %",
            label: "der Verbraucher beginnen ihre Suche bereits mit KI Tools",
            sourceLabel: "Quelle: Deloitte",
            sourceHref: "https://www.deloitte.com/ch/en/services/consulting/perspectives/the-age-of-geo.html"
          },
          {
            value: "4,4×",
            label: "höher ist die Conversion Rate von Besuchern aus KI Suchen",
            sourceLabel: "Quelle: Deloitte",
            sourceHref: "https://www.deloitte.com/ch/en/services/consulting/perspectives/the-age-of-geo.html"
          }
        ],
        detail: "PATERNOGA analysiert und optimiert die Seiten, die für Ihre Anfragen entscheidend sind. Für Sichtbarkeit bei Google, Präsenz in KI-Systemen und mehr qualifizierte Anfragen."
      },
      imageAlt: "Pascal Misoph an seinem Arbeitsplatz im PATERNOGA Studio",
    },
    proof: {
      intro: "Ausgewählte Projekte",
      items: projectLogos
    },
    offer: {
      eyebrow: "Leistungen",
      title: "Wenige Seiten entscheiden. Genau dort setzen wir an.",
      detailLinkLabel: "SEO & GEO im Detail",
      items: [
        {
          title: "SEO: Sichtbarkeit bei Google",
          lead: "Gefunden werden, wenn Bedarf entsteht.",
          text: "Wir analysieren, wonach potenzielle Kunden suchen, welche Seiten dafür sichtbar sein müssen und wo Wettbewerber aktuell vor Ihnen stehen. Anschließend optimieren wir genau diese Seiten für relevante Suchanfragen.",
          features: [
            { label: "Suchintention" },
            { label: "Onpage SEO" },
            { label: "technische SEO", href: "/technische-geo-optimierung/" },
            { label: "interne Verlinkung" }
          ],
          visual: "google"
        },
        {
          title: "GEO: Sichtbarkeit in KI-Systemen",
          lead: "Genannt werden, wenn KI Empfehlungen gibt.",
          text: "Wir prüfen, wie ChatGPT, Google AI und andere KI-Systeme Ihr Unternehmen verstehen, welche Wettbewerber sie empfehlen und welche Informationen fehlen, damit Ihre Leistungen korrekt eingeordnet und genannt werden.",
          features: [
            { label: "AI Visibility", href: "/ai-sichtbarkeit/" },
            { label: "GEO", href: "/geo-optimierung/" },
            { label: "Prompt Analyse", href: "/prompt-recherche/" },
            { label: "Entity Signale" }
          ],
          visual: "ai"
        },
        {
          title: "Seiten, die zur Anfrage führen",
          lead: "Aus Sichtbarkeit müssen Anfragen entstehen.",
          text: "Wir optimieren die Seiten, auf denen potenzielle Kunden entscheiden, ob Ihre Leistung zu ihrem Bedarf passt. Inhalt, Struktur und Nutzerführung richten wir darauf aus, diese Entscheidung möglichst einfach zu machen.",
          features: [
            { label: "Leistungsseiten", href: "/content-optimierung-ai-suche/" },
            { label: "Nutzerführung" },
            { label: "Inhalte" },
            { label: "Conversion" }
          ],
          visual: "conversion"
        },
        {
          title: "Von der Analyse in die Umsetzung.",
          lead: "Wir zeigen nicht nur, wo Handlungsbedarf besteht.",
          text: "Wir priorisieren die entscheidenden Hebel und setzen die relevanten Anpassungen an Struktur, Inhalten, SEO und Technik auf Wunsch direkt um.",
          detailLink: { label: "Leistungspakete ansehen", href: "/geo-optimierung/" },
          visual: "implementation"
        }
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
      title: "Google, KI Systeme und Menschen lesen dieselbe Seite.",
      body: "Eine gute Leistungsseite muss heute drei Aufgaben gleichzeitig erfüllen. Google muss sie einordnen können, KI Systeme müssen ihre Inhalte verstehen und korrekt wiedergeben, und potenzielle Kunden müssen erkennen, warum Ihr Angebot die richtige Wahl ist. Wir betrachten diese drei Perspektiven getrennt und optimieren anschließend dieselbe Seite.",
      perspectives: [
        {
          title: "Google",
          lead: "Gefunden und richtig eingeordnet werden.",
          text: "Suchintention, Seitenstruktur, technische SEO, interne Verlinkung und relevante Inhalte helfen Google dabei, Ihre Leistung richtig einzuordnen und für passende Suchanfragen sichtbar zu machen."
        },
        {
          title: "KI Systeme",
          lead: "Verstanden und korrekt wiedergegeben werden.",
          text: "Klare Aussagen, strukturierte Informationen und eindeutige Unternehmenssignale helfen ChatGPT, Google AI und anderen Antwortsystemen dabei, Ihre Leistungen richtig zu verstehen, einzuordnen und als Quelle zu verwenden."
        },
        {
          title: "Menschen",
          lead: "Verstehen und entscheiden können.",
          text: "Eine klare Leistungsdarstellung, nachvollziehbare Argumente und eine eindeutige Nutzerführung helfen potenziellen Kunden, Ihr Angebot zu verstehen, mit Alternativen zu vergleichen und den nächsten Schritt zur Anfrage zu gehen."
        }
      ],
      systemsIntro: "Sichtbar in",
      systemsLabel: "Google, ChatGPT, Claude und Perplexity"
    },
    process: {
      eyebrow: "Ablauf",
      title: "Fünf Schritte. Ein direkter Ansprechpartner",
      contact: {
        label: "Direkter Kontakt",
        name: "Pascal Misoph",
        role: "Ihr Ansprechpartner",
        phoneLabel: "Telefon",
        whatsappLabel: "WhatsApp",
        emailLabel: "E-Mail",
        imageAlt: "Pascal Misoph vor einer Berglandschaft"
      },
      steps: [
        ["Wunschtermin wählen", "Wählen Sie einen Termin für ein unverbindliches Erstgespräch. Wir sprechen über Ihr Vorhaben, analysieren Ihre aktuelle Sichtbarkeit und klären, ob PATERNOGA der richtige Partner für Ihr Projekt ist."],
        ["Bestand prüfen", "Wir analysieren Ihre Website, Inhalte, Datenquellen und die technische Basis. So wird sofort sichtbar, wo die größten Hebel für Google und KI-Suchsysteme liegen."],
        ["Struktur & Seiten planen", "Wir ordnen Suchintentionen und Themen zu einem klaren Seitenaufbau. So stellen wir sicher, dass potenzielle Kunden und moderne Antwortsysteme Ihre Kernbotschaften sofort finden."],
        ["Angebot & Anfrageweg schärfen", "Bei bestehenden Seiten verbessern wir Nutzen, Belege und den nächsten Schritt für passende Käufer. Gute Gestaltung bleibt erhalten; ein Relaunch ist keine Voraussetzung."],
        ["Änderungen umsetzen & prüfen", "Wir setzen den vereinbarten Umfang um, prüfen Technik und Anfragewege und dokumentieren den Stand. Ob einzelne Leistungsseiten oder eine neue Website: Der Auftrag bleibt klar abgegrenzt."]
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
      title: "Wie möchten Sie starten?",
      quickOption: "Sichtbarkeit gemeinsam prüfen",
      quickOptionText: "Wir schauen auf Ihre wichtigsten Seiten, aktuelle Sichtbarkeit und die nächsten sinnvollen Schritte.",
      quickOptionCta: "Erstgespräch buchen",
      detailOption: "Konkretes Projekt besprechen",
      detailOptionText: "Sie haben bereits ein SEO, GEO oder Website Thema? Schicken Sie uns kurz Ausgangslage, Ziel und relevante Seiten.",
      detailOptionCta: "Projekt anfragen",
      valueLine: "Ob erste Einschätzung oder konkretes Projekt: Wir schauen uns die Seiten an, die für Ihre Sichtbarkeit und Anfragen entscheidend sind, und zeigen, wo Google, KI Systeme oder Nutzer noch Potenzial liegen lassen.",
      note: "Ihre Anfrage wird direkt und vertraulich an Pascal übermittelt.",
      formLabel: "Unverbindliche Anfrage für SEO, GEO und digitale Sichtbarkeit",
      flow: {
        stepLabel: "Schritt",
        ofLabel: "von",
        back: "Zurück",
        intentQuestion: "Woran sollen wir als Nächstes arbeiten?",
        intentOptions: [
          { value: "improve", label: "Bestehende Seiten verbessern" },
          { value: "new", label: "Neue Seiten aufbauen" },
          { value: "advice", label: "Ursache klären" }
        ],
        detailQuestions: {
          new: "Welche Leistung soll künftig über eigene Seiten gefunden werden?",
          improve: "Welche bestehenden Seiten bringen zu wenige passende Anfragen?",
          advice: "Was funktioniert gerade nicht, ohne dass die Ursache klar ist?"
        },
        detailPlaceholders: {
          new: "Zum Beispiel eine Leistung, die bisher nur im Fließtext vorkommt.",
          improve: "Website-Adresse und die ein bis drei Seiten, um die es geht.",
          advice: "Ein bis zwei Sätze zu Ihrer aktuellen Situation genügen."
        },
        contactQuestion: "Wohin dürfen wir uns mit einer ersten Einschätzung melden?",
        nameLabel: "Name",
        emailLabel: "E-Mail",
        next: "Weiter",
        submit: "Projekt besprechen",
        summaryLabel: "Ihr Anliegen",
        privacy: "Persönlich gelesen · unverbindlich · vertraulich behandelt",
        sending: "Wird sicher übermittelt …",
        errorMessage: "Das hat gerade nicht funktioniert. Bitte versuche es noch einmal.",
        successEyebrow: "Anfrage angekommen",
        successTitle: "Der nächste Schritt ist vorbereitet.",
        successBody: "Pascal prüft Ihre Angaben persönlich und meldet sich mit einer ersten Einschätzung und passenden nächsten Schritten.",
        successAgain: "Weitere Anfrage starten"
      }
    },
    footer: { legal: "Paternoga SEO & GEO Studio", imprint: "Impressum", privacy: "Datenschutz" }
  },
  en: {
    meta: {
      title: "SEO & GEO Studio for Service Businesses | PATERNOGA",
      description:
        "PATERNOGA takes the pages your enquiries come from through Google, through AI answer systems and through the person deciding on the page."
    },
    nav: ["Services", "Solutions", "Work", "Process", "Resources", "Contact"],
    cta: "Start a project",
    heroCta: "Check your visibility",
    secondaryCta: "Start a project",
    hero: {
      eyebrow: {
        primary: "SEO & GEO agency from Dresden",
        secondary: "for companies across Germany"
      },
      title: ["Will your business be mentioned", "when customers search for the service", "you offer?"],
      body: {
        stats: [
          {
            value: "40%",
            label: "of consumers already start their search with AI tools",
            sourceLabel: "Source: Deloitte",
            sourceHref: "https://www.deloitte.com/ch/en/services/consulting/perspectives/the-age-of-geo.html"
          },
          {
            value: "4.4×",
            label: "higher conversion rate for visitors from AI search",
            sourceLabel: "Source: Deloitte",
            sourceHref: "https://www.deloitte.com/ch/en/services/consulting/perspectives/the-age-of-geo.html"
          }
        ],
        detail: "PATERNOGA analyses and optimises the pages that matter for your enquiries. For visibility in Google, presence in AI systems and more qualified enquiries."
      },
      imageAlt: "Pascal Misoph at his desk in the PATERNOGA studio",
    },
    proof: {
      intro: "Selected projects",
      items: projectLogos
    },
    offer: {
      eyebrow: "Services",
      title: "A few pages decide. That is exactly where we start.",
      detailLinkLabel: "SEO & GEO in detail",
      items: [
        {
          title: "SEO: Visibility in Google",
          lead: "Be found when demand starts.",
          text: "We analyse what potential customers search for, which pages need to be visible and where competitors currently appear ahead of you. Then we optimise those pages for relevant searches.",
          features: [
            { label: "Search intent" },
            { label: "On-page SEO" },
            { label: "technical SEO", href: "/en/technical-geo-optimization/" },
            { label: "internal linking" }
          ],
          visual: "google"
        },
        {
          title: "GEO: Visibility in AI systems",
          lead: "Be named when AI gives recommendations.",
          text: "We review how ChatGPT, Google AI and other AI systems understand your business, which competitors they recommend and which information is missing for your services to be classified and mentioned correctly.",
          features: [
            { label: "AI visibility", href: "/en/ai-visibility/" },
            { label: "GEO", href: "/en/geo-optimization/" },
            { label: "Prompt analysis", href: "/en/prompt-research/" },
            { label: "Entity signals" }
          ],
          visual: "ai"
        },
        {
          title: "Pages that lead to an enquiry",
          lead: "Visibility should turn into enquiries.",
          text: "We optimise the pages where potential customers decide whether your service fits their need. Content, structure and user guidance are shaped to make that decision as easy as possible.",
          features: [
            { label: "Service pages", href: "/en/content-optimization-ai-search/" },
            { label: "User guidance" },
            { label: "Content" },
            { label: "Conversion" }
          ],
          visual: "conversion"
        },
        {
          title: "From analysis to implementation.",
          lead: "We do more than show where action is needed.",
          text: "We prioritise the decisive levers and, on request, implement the relevant changes to structure, content, SEO and technology directly.",
          detailLink: { label: "View packages", href: "/en/geo-optimization/" },
          visual: "implementation"
        }
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
      title: "Google, AI systems and people read the same page.",
      body: "A good service page now has to fulfil three tasks at once. Google must be able to classify it, AI systems must understand and relay its content correctly, and potential customers must see why your offer is the right choice. We review these three perspectives separately and then optimise the same page.",
      perspectives: [
        {
          title: "Google",
          lead: "Be found and classified correctly.",
          text: "Search intent, page structure, technical SEO, internal linking and relevant content help Google understand your service correctly and make it visible for relevant searches."
        },
        {
          title: "AI systems",
          lead: "Be understood and represented correctly.",
          text: "Clear statements, structured information and unambiguous business signals help ChatGPT, Google AI and other answer systems understand your services correctly, classify them and use them as a source."
        },
        {
          title: "People",
          lead: "Understand and decide.",
          text: "A clear service presentation, credible arguments and an unambiguous user path help potential customers understand your offer, compare it with alternatives and take the next step towards an enquiry."
        }
      ],
      systemsIntro: "Visible in",
      systemsLabel: "Google, ChatGPT, Claude and Perplexity"
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
        ["Sharpen the offer & enquiry path", "On existing pages, we improve value, evidence and the next step for relevant buyers. Strong design stays in place; a relaunch is not a prerequisite."],
        ["Implement & verify the changes", "We implement the agreed scope, check technical foundations and enquiry paths, and document the result. Whether individual service pages or a new website, the project stays clearly bounded."]
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
      title: "Which pages decide your enquiries?",
      quickOption: "Review visibility together",
      quickOptionText: "We look at your most important pages, current visibility and the next sensible steps.",
      quickOptionCta: "Book an initial consultation",
      detailOption: "Discuss a concrete project",
      detailOptionText: "Do you already have an SEO, GEO or website topic? Send us a brief outline of the starting point, goal and relevant pages.",
      detailOptionCta: "Enquire about the project",
      valueLine: "Whether you need an initial assessment or a concrete project, we look at the pages that matter for your visibility and enquiries and show where Google, AI systems or users still leave potential unused.",
      note: "Your enquiry goes directly and confidentially to Pascal.",
      formLabel: "No-obligation enquiry for SEO, GEO and digital visibility",
      flow: {
        stepLabel: "Step",
        ofLabel: "of",
        back: "Back",
        intentQuestion: "What should we work on next?",
        intentOptions: [
          { value: "improve", label: "Improve existing pages" },
          { value: "new", label: "Build new pages" },
          { value: "advice", label: "Find the cause" }
        ],
        detailQuestions: {
          new: "Which service should be findable through pages of its own?",
          improve: "Which existing pages bring too few relevant enquiries?",
          advice: "What is not working, without the cause being clear?"
        },
        detailPlaceholders: {
          new: "For example a service that currently only appears inside body copy.",
          improve: "Website address and the one to three pages in question.",
          advice: "One or two sentences about your current situation are enough."
        },
        contactQuestion: "Where may we send a first assessment?",
        nameLabel: "Name",
        emailLabel: "Email",
        next: "Continue",
        submit: "Discuss the project",
        summaryLabel: "Your request",
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
