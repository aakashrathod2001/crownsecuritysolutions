// app/careers/page.tsx
import CareersSection from '@/components/Sections/CareersSecrion/CareersSection';
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { careerspageHero } from '@/data/heroSections';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export default function CareersPage() {
  return (
    <>
      <HeroSection {...careerspageHero} />
      <div className="bodySectionLayout">
        <CareersSection/>;
      </div>

    </>
  );
}
