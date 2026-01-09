// app/about/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { ourprocesspageHero } from '@/data/heroSections';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';
import InfiniteCarousel from '@/components/Sections/InfiniteCarousel/InfiniteCarousel';

export default function AboutPage() {
  return (
    <>
      <HeroSection {...ourprocesspageHero} />
      {/* <div className="bodySectionLayout">
        
      </div> */}
      <StackedScroll showHeader={false} />;
      <InfiniteCarousel
        speed={35}
        direction="left"
        gap={32}
      />;

    </>
  );
}
