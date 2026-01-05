// app/page.tsx - Minimal Home Page
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import AboutSection from '@/components/Sections/About/AboutSection';
import { homepageHero } from '@/data/heroSections';
import { ABOUT_DATA } from '@/data/about';

export default function HomePage() {
  return (
    <>
      <HeroSection {...homepageHero} />

      {ABOUT_DATA.aboutSection && (
        <AboutSection
          title={ABOUT_DATA.aboutSection.title}
          mainHeading={ABOUT_DATA.aboutSection.mainHeading}
          subHeading={ABOUT_DATA.aboutSection.subHeading}
          description={ABOUT_DATA.aboutSection.description}
          imageSrc={ABOUT_DATA.aboutSection.imageSrc}
          imageAlt={ABOUT_DATA.aboutSection.imageAlt}
        />
      )}
    </>
  );
}
