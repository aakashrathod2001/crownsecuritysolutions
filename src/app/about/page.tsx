// app/about/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import AboutSection from '@/components/Sections/AboutSection/AboutSection';
import { aboutpageHero } from '@/data/heroSections';
import TrackRecordSection from '@/components/Sections/TrackRecordSection/TrackRecordSection';
import { aboutmissionCTA, homevisionCTA } from '@/data/ctaSection';
import CTASection from '@/components/Sections/CTASection/CTASection';
import LegacySection from '@/components/Sections/LegacySection/LegacySection';
import BrandsSlider from '@/components/Sections/BrandsSlider/BrandsSlider';
import CoreValues from '@/components/Sections/CoreValuesSection/CoreValuesSection';
import CoreTeamSection from '@/components/Sections/CoreTeamSection/CoreTeamSection';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';

export default function AboutPage() {
  return (
    <>
      <HeroSection {...aboutpageHero} />
      <div className="bodySectionLayout">
        <AboutSection showImage={true} variant="about" />
        <TrackRecordSection />;
      </div>
      <CTASection {...aboutmissionCTA} />
      <LegacySection />
      <CTASection {...homevisionCTA} />
      <div className="bodySectionLayout">
        <CoreTeamSection />
        <BrandsSlider />
        <CoreValues />;
      </div>
      
      <StackedScroll />
      <div className="bodySectionLayout">
        <Testimonials />;
      </div>

    </>
  );
}
