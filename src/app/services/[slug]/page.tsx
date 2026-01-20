import { notFound } from 'next/navigation';
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/InfoSplitSection/InfoSplitSection';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection';
import CoreValuesSection from '@/components/Sections/CoreValuesSection/CoreValuesSection';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import BrandsSlider from '@/components/Sections/BrandsSlider/BrandsSlider';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';
import InfiniteCarousel from '@/components/Sections/InfiniteCarousel/InfiniteCarousel';
import styles from './page.module.scss';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <HeroSection {...service.heroData} />
      <div className="bodySectionLayout">
        <InfoSplitSection content={service.infoSplitData} showImage={false} />
        <StatsValueSection />
        <CoreValuesSection
          values={service.coreValuesData}
          title={service.coreValuesTitle || "Core Values"}
          subtitle={service.coreValuesSubtitle}
        />
        <BrandsSlider />
        <div className={styles.pageLayout}>
          <ServiceSection service={service.serviceSectionData[0]} />
          <ServiceSection service={service.serviceSectionData[1]} variant="right" />
          <ServiceSection service={service.serviceSectionData[2]} />
          <ServiceSection service={service.serviceSectionData[3]} variant="right" />
        </div>
        <Testimonials />;
      </div>
      <InfiniteCarousel
        speed={35}
        direction="left"
        gap={32}
      />;
    </>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}
