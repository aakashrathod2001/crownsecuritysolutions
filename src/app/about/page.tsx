// app/about/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import AboutSection from '@/components/Sections/AboutSection/AboutSection';
import { aboutpageHero } from '@/data/heroSections';

export default function AboutPage() {
  return (
    <>
      <HeroSection {...aboutpageHero} />
      <div className="bodySectionLayout">
        <AboutSection showImage={true} variant="about" />;
      </div>
    </>
  );
}
