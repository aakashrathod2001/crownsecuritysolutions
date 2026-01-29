// app/about/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/InfoSplitSection/InfoSplitSection';
import { aboutpageHero } from '@/data/heroSections';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import TrackRecordSection from '@/components/Sections/TrackRecordSection/TrackRecordSection';
import { aboutmissionCTA, homevisionCTA } from '@/data/ctaSection';
import CTASection from '@/components/Sections/CTASection/CTASection';
import LegacySection from '@/components/Sections/LegacySection/LegacySection';
import BrandsSlider from '@/components/Sections/BrandsSlider/BrandsSlider';
import CoreValues from '@/components/Sections/CoreValuesSection/CoreValuesSection';
import CoreTeamSection from '@/components/Sections/CoreTeamSection/CoreTeamSection';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';
import Testimonials from '@/components/Sections/Testimonials/Testimonials';
import { ABOUT_DATA } from '@/data/about';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export default function AboutPage() {
  return (
    <>
      <HeroSection {...aboutpageHero} />
      <div className="bodySectionLayout">
        <InfoSplitSection showImage={true} content={ABOUT_DATA.aboutContent} />
        <StatsValueSection />;
      </div>
      <TrackRecordSection />
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
