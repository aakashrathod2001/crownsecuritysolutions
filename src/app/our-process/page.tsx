// app/about/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { ourprocesspageHero } from '@/data/heroSections';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';

export default function AboutPage() {
  return (
    <>
      <HeroSection {...ourprocesspageHero} />
      {/* <div className="bodySectionLayout">
        
      </div> */}
      <StackedScroll showHeader={false} />

    </>
  );
}
