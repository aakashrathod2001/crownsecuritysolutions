import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/Sections/ServiceHero/ServiceHero";
import Hero from "@/components/Sections/Home/Hero/Hero";
import StatsSection from "@/components/Sections/Home/StatsSection/StatsSection";
import BrandsSlider from "@/components/Sections/Home/BrandsSlider/BrandsSlider";
import TestimonialsSection from "@/components/Sections/Home/TestimonialsSection/TestimonialsSection";
import PricingSection from "@/components/Sections/Home/PricingSection/PricingSection";
import InfoSplit from "@/components/Sections/InfoSplit/InfoSplit";
import FAQSection from "@/components/Sections/FAQSection/FAQSection";
import WhyUsSection from "@/components/Sections/WhyUsSection/WhyUsSection";
import HomeTagline from "@/components/Sections/Home/HomeTagline/HomeTagline";
import PortfolioSection from "@/components/Sections/Home/PortfolioSection/PortfolioSection";
import StackedScroll from "@/components/UI/StackedScroll/StackedScroll";
import TableViewSection from "@/components/Sections/TableViewSection/TableViewSection";
import BenefitsSection from "@/components/Sections/BenefitsSection/BenefitsSection";
import VideoHero from "@/components/Sections/VideoHero/VideoHero";
import SEOStructuredData from "@/components/SEO/SEOStructuredData";

import { SERVICE_SLUGS, SERVICES } from "@/data/servicePages/services";
import {
  getMappingBySlug,
  generateMetadata as generateSEOMetadata,
} from "@/lib/urlMappings";

// ✅ Static generation for all service slugs
export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

// ✅ Dynamic Metadata for SEO (auto from URL mappings)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const seoMapping = getMappingBySlug(slug, "service");
  if (seoMapping) return generateSEOMetadata(seoMapping);

  const serviceData = SERVICES[slug as keyof typeof SERVICES];
  if (serviceData) {
    return {
      title: `${serviceData.hero.title.replace("\n", " ")} | Wunderkint`,
      description: serviceData.hero.subtitle,
    };
  }

  return {
    title: "Service Not Found",
    description: "The requested service could not be found.",
  };
}

// ✅ Main Service Page
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceData = SERVICES[slug as keyof typeof SERVICES];

  if (!serviceData) notFound();

  const seoMapping = getMappingBySlug(slug, "service");

  return (
    <>
      {/* ✅ Unified SEO Structured Data */}
      <SEOStructuredData
        page="service"
        data={{
          title: seoMapping?.title,
          description: seoMapping?.description,
          faqs: serviceData.faqs?.items,
        }}
      />

      {/* Hero Section */}
      {serviceData.heroSection && (
        <ServiceHero
          title={serviceData.heroSection.title}
          highlight={serviceData.heroSection.highlight}
          subtitle={serviceData.heroSection.subtitle}
          ctaText={serviceData.heroSection.ctaText}
          ctaHref={serviceData.heroSection.ctaHref}
          backgroundColor={serviceData.heroSection.backgroundColor}
          backgroundImage={serviceData.heroSection.backgroundImage}
          problemHeading={serviceData.heroSection.problemHeading}
          problemCards={serviceData.heroSection.problemCards}
          problemCardColor={serviceData.heroSection.problemCardColor}
          problemFooter={serviceData.heroSection.problemFooter}
        />
      )}

      <div className="bodySectionLayout">
        {serviceData.infoSplit?.[0] && (
          <InfoSplit
            title={serviceData.infoSplit[0].title}
            body={serviceData.infoSplit[0].body}
            cta={serviceData.infoSplit[0].cta}
          />
        )}

        {/* Portfolio Section */}
        {serviceData.portfolio && serviceData.portfolio.heading && (
          <PortfolioSection
            heading={serviceData.portfolio.heading}
            ctaText={serviceData.portfolio.ctaText}
            ctaHref={serviceData.portfolio.ctaHref}
            portfolioItems={serviceData.portfolio.items}
            variant="service"
            portfolioFooterText={serviceData.portfolio.portfolioFooterText}
          />
        )}

        {serviceData.infoSplit?.[1] && (
          <InfoSplit
            title={serviceData.infoSplit[1].title}
            body={serviceData.infoSplit[1].body}
            cta={serviceData.infoSplit[1].cta}
          />
        )}

        {serviceData.benefits && (
          <BenefitsSection
            heading={serviceData.benefits.heading}
            ctaText={serviceData.benefits.ctaText}
            ctaHref={serviceData.benefits.ctaHref}
            benefits={serviceData.benefits.items}
          />
        )};

      </div>

      {serviceData.gradientTagline?.heading && (
        <HomeTagline
          heading={serviceData.gradientTagline.heading}
          variant="service"
          textAlign="center"
        />
      )}

      {serviceData.stackedBlocks && serviceData.stackedBlocks.length > 0 && (
        <StackedScroll
          blocks={serviceData.stackedBlocks}
          layout="2-column"
        />
      )}

      {/* <Hero
        title={false}
        subtitle={false}
        showSearch={false}
        showBrandSlider={false}
        videoSrc={serviceData.hero.videoSrc}
        poster={serviceData.hero.poster}
        search={undefined}
      /> */}

      <VideoHero
        videoSrc={serviceData.hero?.videoSrc}
        poster={serviceData.hero?.poster}
      />

      <div className="bodySectionLayout">
        <StatsSection />

        {serviceData.tableViews?.[0] && (
          <TableViewSection
            heading={serviceData.tableViews[0].heading ?? { second: "Challenges We Solve" }}
            ctaText={serviceData.tableViews[0].ctaText}
            ctaHref={serviceData.tableViews[0].ctaHref}
            items={serviceData.tableViews[0].items}
            leftHeader={serviceData.tableViews[0].leftHeader}
            rightHeader={serviceData.tableViews[0].rightHeader}
            leftIcon={serviceData.tableViews[0].leftIcon}
            rightIcon={serviceData.tableViews[0].rightIcon}
            useImageIcons={serviceData.tableViews[0].useImageIcons}
          />
        )}

        <BrandsSlider />

        {serviceData.whyUs && (
          <WhyUsSection
            heading={serviceData.whyUs.heading ?? { second: "Why Us" }}
            image={serviceData.whyUs.image || "/default-image.jpg"}
            cards={serviceData.whyUs.cards || []}
          />
        )}

        {serviceData.infoSplit?.[2] && (
          <InfoSplit
            title={serviceData.infoSplit[2].title}
            body={serviceData.infoSplit[2].body}
            cta={serviceData.infoSplit[2].cta}
          />
        )}

        {serviceData.tableViews?.[1] && (
          <TableViewSection
            heading={serviceData.tableViews[1].heading ?? { second: "More Solutions" }}
            ctaText={serviceData.tableViews[1].ctaText}
            ctaHref={serviceData.tableViews[1].ctaHref}
            items={serviceData.tableViews[1].items}
            leftHeader={serviceData.tableViews[1].leftHeader}
            rightHeader={serviceData.tableViews[1].rightHeader}
            leftIcon={serviceData.tableViews[1].leftIcon}
            rightIcon={serviceData.tableViews[1].rightIcon}
            useImageIcons={serviceData.tableViews[1].useImageIcons}
          />
        )}

        {serviceData.infoSplit?.[3] && (
          <InfoSplit
            title={serviceData.infoSplit[3].title}
            body={serviceData.infoSplit[3].body}
            cta={serviceData.infoSplit[3].cta}
          />
        )}

        <TestimonialsSection />

        <PricingSection />

        {serviceData.faqs && (
          <FAQSection
            heading={serviceData.faqs.heading ?? { second: "FAQs" }}
            items={serviceData.faqs.items ?? []}
          />
        )};

      </div>
    </>
  );
}