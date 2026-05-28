import { COMPANY, SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@rapidseed/lib";
import type { BlogPost, FAQ } from "@rapidseed/types";

interface WithContext {
  "@context": "https://schema.org";
  "@type": string | string[];
  [key: string]: unknown;
}

export function buildOrganizationSchema(): WithContext {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/rapidseed-ai-logo.png`,
      width: 400,
      height: 100,
    },
    description: SITE_DESCRIPTION,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      ...COMPANY.address,
    },
    foundingDate: COMPANY.founded,
    sameAs: Object.values(COMPANY.social),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "sales",
      email: COMPANY.email,
      availableLanguage: "English",
    },
    knowsAbout: [
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "AI Search Visibility",
      "Search Engine Optimization",
      "AI Entity Engineering",
      "Structured Data",
      "JSON-LD Schema",
    ],
  };
}

export function buildWebsiteSchema(): WithContext {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildLocalBusinessSchema(): WithContext {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY.name,
    image: `${SITE_URL}/images/rapidseed-ai-office.jpg`,
    url: SITE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      ...COMPANY.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "TODO_LATITUDE",
      longitude: "TODO_LONGITUDE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function buildServiceSchema(serviceName: string, description: string, url: string): WithContext {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    url,
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "AI Discovery Optimization",
  };
}

export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>): WithContext {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(post: BlogPost): WithContext {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image ?? `${SITE_URL}/images/blog-default.jpg`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.updated_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>): WithContext {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildHomePageSchemas(): WithContext[] {
  return [buildOrganizationSchema(), buildWebsiteSchema(), buildLocalBusinessSchema()];
}
