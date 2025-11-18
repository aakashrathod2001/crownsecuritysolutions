"use client";

import Script from "next/script";

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  slug: string;
  name: string;
}

interface SEOStructuredDataProps {
  page: "home" | "about" | "service" | "category" | "contact";
  data?: {
    faqs?: FAQ[];
    structuredData?: Record<string, unknown>;
    breadcrumb?: Array<Record<string, unknown>>;
    title?: string;
    description?: string;
    services?: Service[];
    [key: string]: unknown;
  }; // optional dynamic data (slug mapping, faqs, etc.)
}

export default function SEOStructuredData({ page, data }: SEOStructuredDataProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com";

  const schemas: Record<string, (object | undefined)[]> = {
    home: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Wunderkint",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        description:
          "Wunderkint – a creative intelligence agency blending AI, design, and strategy to elevate your brand.",
        sameAs: [
          "https://www.facebook.com/wunderkint",
          "https://www.instagram.com/wunderkint",
          "https://www.linkedin.com/company/wunderkint",
          "https://twitter.com/wunderkint",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Wunderkint",
        url: siteUrl,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Creative & Technology Services",
        description:
          "Branding, design, marketing, and AI-powered services that help businesses grow.",
        provider: { "@type": "Organization", name: "Wunderkint" },
      },
    ],

    about: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        mainEntity: {
          "@type": "Organization",
          name: "Wunderkint",
          url: siteUrl,
          logo: `${siteUrl}/images/logo.png`,
          description:
            "Wunderkint – a creative intelligence agency blending AI, design, and strategy to elevate your brand.",
          sameAs: [
            "https://www.facebook.com/wunderkint",
            "https://www.linkedin.com/company/wunderkint",
            "https://www.instagram.com/wunderkint",
          ],
        },
      },
    ],

    service: [
      data?.structuredData || {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data?.title || "Service by Wunderkint",
        description: data?.description || "Professional creative service.",
        provider: { "@type": "Organization", name: "Wunderkint" },
      },
      data?.breadcrumb && {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.breadcrumb,
      },
      data?.faqs && {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f: FAQ) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ].filter(Boolean),

    category: [
      data?.structuredData || {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: data?.title || "Category Services",
        description: data?.description || "Explore related services by Wunderkint.",
        itemListElement:
          data?.services?.map((s: Service, i: number) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${siteUrl}/service/${s.slug}`,
            name: s.name,
          })) || [],
      },
      data?.breadcrumb && {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.breadcrumb,
      },
    ].filter(Boolean),

    contact: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        mainEntity: {
          "@type": "Organization",
          name: "Wunderkint",
          url: siteUrl,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9999999999",
            contactType: "Customer Support",
            email: "hello@wunderkint.com",
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          },
        },
      },
    ],
  };

  const json = schemas[page] || [];
  return (
    <>
      {json.map(
        (schema, idx) =>
          schema && (
            <Script
              key={`${page}-schema-${idx}`}
              id={`${page}-schema-${idx}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              strategy="afterInteractive"
            />
          ),
      )}
    </>
  );
}
