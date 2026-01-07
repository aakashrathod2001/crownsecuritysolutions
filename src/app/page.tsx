// app/page.tsx - Minimal Home Page
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import AboutSection from '@/components/Sections/AboutSection/AboutSection';
import TrackRecordSection from '@/components/Sections/TrackRecordSection/TrackRecordSection';
import SpecializedServicesSection from '@/components/Sections/SpecializedServicesSection/SpecializedServicesSection';
import { homepageHero } from '@/data/heroSections';
import CTASection from '@/components/Sections/CTASection/CTASection';
import { homemissionCTA, homevisionCTA } from '@/data/ctaSection';
import LegacySection from '@/components/Sections/LegacySection/LegacySection';
import CoreValues from '@/components/Sections/CoreValuesSection/CoreValuesSection';
import BrandsSlider from '@/components/Sections/BrandsSlider/BrandsSlider';

export default function HomePage() {
  return (
    <>
      <HeroSection {...homepageHero} />
      <div className="bodySectionLayout">
        <AboutSection showImage={false} variant="home" />
        <TrackRecordSection />
        <CTASection {...homemissionCTA} />
        <SpecializedServicesSection />
        <CTASection {...homevisionCTA} />
      </div>
      <LegacySection />
      <div className="bodySectionLayout">
        <CoreValues />
        <BrandsSlider />;
      </div>
      
    </>
  );
}
