// app/our-workforce/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/AboutSection/AboutSection';
import { ourworkforcepageHero } from '@/data/heroSections';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import { WORKFORCE_DATA } from '@/data/workforce';

export default function WorkforcePage() {
  return (
    <>
      <HeroSection {...ourworkforcepageHero} />
      <div className="bodySectionLayout">
        <InfoSplitSection content={WORKFORCE_DATA} showImage={false} />
        <StatsValueSection />
      </div>
    </>
  );
}
