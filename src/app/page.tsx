// app/page.tsx - Minimal Home Page
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import AboutSection from '@/components/Sections/AboutSection/AboutSection';
import TrackRecordSection from '@/components/Sections/TrackRecordSection/TrackRecordSection';
import { homepageHero } from '@/data/heroSections';

export default function HomePage() {
  return (
    <>
      <HeroSection {...homepageHero} />
      <div className="bodySectionLayout">
        <AboutSection showImage={false} variant="home" />
        <TrackRecordSection />;
      </div>
    </>
  );
}
