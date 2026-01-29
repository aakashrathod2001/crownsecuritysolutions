// app/our-process/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { ourprocesspageHero } from '@/data/heroSections';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';
import InfiniteCarousel from '@/components/Sections/InfiniteCarousel/InfiniteCarousel';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export default function OurProcessPage() {
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
