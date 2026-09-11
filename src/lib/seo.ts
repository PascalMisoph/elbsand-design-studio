import { contactDetails } from "../content/contact-details";
import { offerPricing, type OfferId } from "../content/offers";

export const SITE_URL = "https://www.paternoga-seo-geo.de";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/#pascal-misoph`;

type Locale = "de" | "en";
type JsonLdNode = Record<string, unknown>;

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface PageSchemaOptions {
  lang: Locale;
  title: string;
  description: string;
  path: string;
}

interface ServicePageSchemaOptions extends PageSchemaOptions {
  serviceName: string;
  breadcrumbs: readonly BreadcrumbItem[];
  faqs?: readonly FaqItem[];
  /** Only pass this when the same entry price is visible on the page itself. */
  offer?: OfferId;
  /** Narrows Service.areaServed for local pages; the Organization entity is unchanged. */
  areaServed?: string;
}

interface ArticlePageSchemaOptions extends PageSchemaOptions {
  headline: string;
  datePublished: string;
  dateModified: string;
  breadcrumbs: readonly BreadcrumbItem[];
}

interface ResearchPageSchemaOptions extends ArticlePageSchemaOptions {
  datasetName: string;
  datasetDescription: string;
  datasetTemporalCoverage: string;
  datasetDistribution: readonly { name: string; contentUrl: string; encodingFormat: string }[];
}

export const absoluteSiteUrl = (path: string) => new URL(path, SITE_URL).toString();

const organizationNode: JsonLdNode = {
  // LocalBusiness is the specific type for this real Dresden business. Keep
  // Organization on the same identity; the specific type comes first for
  // consumers that only inspect the first member of a type array.
  "@type": ["LocalBusiness", "Organization"],
  "@id": ORGANIZATION_ID,
  name: "Paternoga SEO & GEO Agentur",
  alternateName: "PATERNOGA",
  sameAs: ["https://www.linkedin.com/company/paternoga-seo-geo/"],
  slogan: "Be the brand AI thinks of first.",
  url: `${SITE_URL}/`,
  description: "Paternoga SEO & GEO Agentur ist eine Spezialagentur für SEO, Generative Engine Optimization, AI Search und AI Visibility mit Sitz in Dresden und deutschlandweiter Zusammenarbeit.",
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/favicon.png`,
    contentUrl: `${SITE_URL}/favicon.png`,
    width: 256,
    height: 256,
    caption: "Paternoga SEO & GEO Agentur",
  },
  image: { "@id": `${SITE_URL}/#logo` },
  email: contactDetails.email,
  telephone: contactDetails.phoneInternational,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Holbeinstraße 7",
    postalCode: "01307",
    addressLocality: "Dresden",
    addressCountry: "DE",
  },
  founder: {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Pascal Misoph",
    jobTitle: "Inhaber, SEO- und GEO-Berater",
    worksFor: { "@id": ORGANIZATION_ID },
    knowsAbout: ["SEO", "Generative Engine Optimization", "Local SEO", "KI-Crawlability"],
    knowsLanguage: ["de", "en"],
    address: {
      "@type": "PostalAddress",
      postalCode: "01307",
      addressLocality: "Dresden",
      addressCountry: "DE",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: contactDetails.phoneInternational,
    email: contactDetails.email,
    availableLanguage: ["de", "en"],
    areaServed: "DE",
  },
  location: { "@type": "Place", name: "Dresden, Deutschland" },
  areaServed: { "@type": "Country", name: "Deutschland" },
  knowsAbout: [
    "Search Engine Optimization",
    "Generative Engine Optimization",
    "AI Search",
    "AI Visibility",
    "Answer Engine Optimization",
    "LLM visibility",
    "Content strategy",
    "Technical SEO",
  ],
};

const websiteNode: JsonLdNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "Paternoga SEO & GEO Agentur",
  alternateName: "PATERNOGA",
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: ["de", "en"],
};

export const createPageSchema = ({ lang, title, description, path }: PageSchemaOptions) => {
  const canonical = absoluteSiteUrl(path);
  const pageId = `${canonical}#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      websiteNode,
      {
        "@type": "WebPage",
        "@id": pageId,
        url: canonical,
        name: title,
        description,
        inLanguage: lang,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
      },
    ],
  };
};

// Entry prices are published as a minimum, so the schema models `minPrice` rather
// than asserting a fixed `price`. Retainers use UnitPriceSpecification per month.
const createOffer = (offer: OfferId, canonical: string): JsonLdNode => {
  const { minPrice, currency, recurring } = offerPricing[offer];
  const priceSpecification: JsonLdNode = recurring
    ? {
      "@type": "UnitPriceSpecification",
      minPrice,
      priceCurrency: currency,
      valueAddedTaxIncluded: false,
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    }
    : {
      "@type": "PriceSpecification",
      minPrice,
      priceCurrency: currency,
      valueAddedTaxIncluded: false,
    };
  return { "@type": "Offer", url: canonical, priceCurrency: currency, priceSpecification };
};

export const createServicePageSchema = ({
  lang,
  title,
  description,
  path,
  serviceName,
  breadcrumbs,
  faqs = [],
  offer,
  areaServed,
}: ServicePageSchemaOptions) => {
  const canonical = absoluteSiteUrl(path);
  const pageId = `${canonical}#webpage`;
  const serviceId = `${canonical}#service`;
  const breadcrumbId = `${canonical}#breadcrumb`;
  const faqId = `${canonical}#faq`;
  const baseGraph = createPageSchema({ lang, title, description, path })["@graph"];
  const page = baseGraph[2] as JsonLdNode;
  page.mainEntity = { "@id": serviceId };
  page.breadcrumb = { "@id": breadcrumbId };

  const graph: JsonLdNode[] = [
    ...baseGraph,
    {
      "@type": "Service",
      "@id": serviceId,
      name: serviceName,
      description,
      url: canonical,
      mainEntityOfPage: { "@id": pageId },
      provider: { "@id": ORGANIZATION_ID },
      areaServed: areaServed ? { "@type": "AdministrativeArea", name: areaServed } : { "@type": "Country", name: "Deutschland" },
      ...(offer ? { offers: createOffer(offer, canonical) } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteSiteUrl(item.href),
      })),
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

export const createArticlePageSchema = ({
  lang,
  title,
  description,
  path,
  headline,
  datePublished,
  dateModified,
  breadcrumbs,
}: ArticlePageSchemaOptions) => {
  const canonical = absoluteSiteUrl(path);
  const pageId = `${canonical}#webpage`;
  const articleId = `${canonical}#article`;
  const breadcrumbId = `${canonical}#breadcrumb`;
  const baseGraph = createPageSchema({ lang, title, description, path })["@graph"];
  const page = baseGraph[2] as JsonLdNode;
  page.mainEntity = { "@id": articleId };
  page.breadcrumb = { "@id": breadcrumbId };

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseGraph,
      {
        "@type": "TechArticle",
        "@id": articleId,
        headline,
        description,
        url: canonical,
        inLanguage: lang,
        datePublished,
        dateModified,
        author: { "@type": "Person", "@id": FOUNDER_ID, name: "Pascal Misoph" },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@id": pageId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteSiteUrl(item.href),
        })),
      },
    ],
  };
};

export const createResearchPageSchema = ({
  datasetName,
  datasetDescription,
  datasetTemporalCoverage,
  datasetDistribution,
  ...articleOptions
}: ResearchPageSchemaOptions) => {
  const canonical = absoluteSiteUrl(articleOptions.path);
  const schema = createArticlePageSchema(articleOptions);
  const graph = schema["@graph"] as JsonLdNode[];
  const page = graph[2] as JsonLdNode;
  const article = graph[3] as JsonLdNode;
  const datasetId = `${canonical}#dataset`;
  page.subjectOf = { "@id": datasetId };
  article.about = { "@id": datasetId };
  graph.push({
    "@type": "Dataset",
    "@id": datasetId,
    name: datasetName,
    description: datasetDescription,
    url: canonical,
    inLanguage: articleOptions.lang,
    temporalCoverage: datasetTemporalCoverage,
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    distribution: datasetDistribution.map((distribution) => ({
      "@type": "DataDownload",
      name: distribution.name,
      contentUrl: absoluteSiteUrl(distribution.contentUrl),
      encodingFormat: distribution.encodingFormat,
    })),
  });
  return schema;
};
