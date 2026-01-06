// app/page.tsx - Minimal Home Page
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import AboutSection from '@/components/Sections/AboutSection/AboutSection';
import TrackRecordSection from '@/components/Sections/TrackRecordSection/TrackRecordSection';
import SpecializedServicesSection from '@/components/Sections/SpecializedServicesSection/SpecializedServicesSection';
import { homepageHero } from '@/data/heroSections';
import CTASection from '@/components/Sections/CTASection/CTASection';
import { missionCTA, visionCTA, lightCTA } from '@/data/ctaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection {...homepageHero} />
      <div className="bodySectionLayout">
        <AboutSection showImage={false} variant="home" />
        <TrackRecordSection />
        <CTASection {...missionCTA} />
        <SpecializedServicesSection />;
      </div>
    </>
  );
}
