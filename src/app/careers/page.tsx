// app/about/page.tsx
import CareersSection from '@/components/Sections/CareersSecrion/CareersSection';
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { careerspageHero } from '@/data/heroSections';

export default function AboutPage() {
  return (
    <>
      <HeroSection {...careerspageHero} />
      <div className="bodySectionLayout">
        <CareersSection/>;
      </div>

    </>
  );
}
