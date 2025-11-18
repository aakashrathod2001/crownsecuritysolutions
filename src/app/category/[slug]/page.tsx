// app/category/[slug]/page.tsx – Final Optimized Version
import { Metadata } from "next";
import Hero from "@/components/Sections/Home/Hero/Hero";
import StatsSection from "@/components/Sections/Home/StatsSection/StatsSection";
import BrandsSlider from "@/components/Sections/Home/BrandsSlider/BrandsSlider";
import TestimonialsSection from "@/components/Sections/Home/TestimonialsSection/TestimonialsSection";
import PricingSection from "@/components/Sections/Home/PricingSection/PricingSection";
import InfoSplit from "@/components/Sections/InfoSplit/InfoSplit";
import ServiceGrid from "@/components/Sections/Category/ServiceGrid/ServiceGrid";
import { categoryHeadings } from "@/data/categoryPages/categoryHeadings";
import FAQSection from "@/components/Sections/FAQSection/FAQSection";
import { categoryFAQs } from "@/data/categoryPages/categoryFAQs";
import WhyUsSection from "@/components/Sections/WhyUsSection/WhyUsSection";
import { whyUs } from "@/data/categoryPages/whyUs";
import SEOStructuredData from "@/components/SEO/SEOStructuredData";

import {
  CATEGORY_SLUGS,
  CATEGORY_CONTENT,
} from "@/data/categoryPages/categories";

import {
  getMappingBySlug,
  generateMetadata as generateSEOMetadata,
} from "@/lib/urlMappings";

export const dynamicParams = false;

// ✅ Static generation for category slugs
export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }));
}

// ✅ Dynamic Metadata Generation for Each Category
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const seoMapping = getMappingBySlug(slug, "category");
  if (seoMapping) return generateSEOMetadata(seoMapping);

  const cfg = CATEGORY_CONTENT[slug as keyof typeof CATEGORY_CONTENT];
  if (cfg) {
    return {
      title: `${cfg.hero.title.replace("\n", " ")} | Wunderkint`,
      description: cfg.hero.subtitle,
    };
  }

  return {
    title: "Category Not Found",
    description: "The requested category could not be found.",
  };
}

// ✅ Category Page Component
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as keyof typeof CATEGORY_CONTENT;
  const cfg = CATEGORY_CONTENT[slug];

  if (!cfg) {
    throw new Error(`Category "${slug}" not found`);
  }

  const seoMapping = getMappingBySlug(slug, "category");

  const titleNode = cfg.hero.title.split("\n").map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));

  return (
    <>
      {/* ✅ Inject unified SEO structured data (category, breadcrumbs, item list) */}
      <SEOStructuredData
        page="category"
        data={{
          title: seoMapping?.title,
          description: seoMapping?.description,
          services: cfg.serviceGrid?.cards?.map((card) => ({
            slug: card.title.toLowerCase().replace(/\s+/g, "-"),
            name: card.title,
          })),
        }}
      />

      {/* ✅ Category Hero Section */}
      <Hero
        title={titleNode}
        subtitle={cfg.hero.subtitle}
        subtitleMaxWidth="800px"
        showSearch={cfg.hero.showSearch}
        showBrandSlider={cfg.hero.showBrandSlider}
        videoSrc={cfg.hero.videoSrc}
        poster={cfg.hero.poster}
      />

      {/* ✅ Category Content Layout */}
      <div className="bodySectionLayout">
        {cfg.infoSplit?.[0] && <InfoSplit {...cfg.infoSplit[0]} />}

        <BrandsSlider />

        {cfg.serviceGrid && (
          <ServiceGrid
            heading={
              categoryHeadings[slug]?.serviceGrid ?? { first: "Our Services" }
            }
            ctaText={cfg.serviceGrid.ctaText}
            ctaHref={cfg.serviceGrid.ctaHref}
            cardBg={cfg.serviceGrid.cardBg}  // Added this line
            textColor={cfg.serviceGrid.textColor}  // Added text color support
            cards={cfg.serviceGrid.cards}
          />
        )}
        {cfg.infoSplit?.[1] && <InfoSplit {...cfg.infoSplit[1]} />}

        {cfg.otherServicesGrid && (
          <ServiceGrid
            heading={
              categoryHeadings[slug]?.otherserviceGrid ?? {
                first: "Our Services",
              }
            }
            ctaText={cfg.otherServicesGrid.ctaText}
            ctaHref={cfg.otherServicesGrid.ctaHref}
            cards={cfg.otherServicesGrid.cards}
            variant="otherServices"
          />
        )}

        <StatsSection />
        <TestimonialsSection />

        <WhyUsSection
          heading={categoryHeadings[slug]?.whyUsSection ?? { second: "Why Us" }}
          image={whyUs[slug].image}
          cards={whyUs[slug].cards}
        />

        <PricingSection />

        <FAQSection
          heading={categoryHeadings[slug]?.faqSection ?? { second: "FAQs" }}
          items={categoryFAQs[slug] ?? []}
        />;
      </div>
    </>
  );
}
