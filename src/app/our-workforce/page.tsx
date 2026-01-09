// app/our-workforce/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/AboutSection/AboutSection';
import QualificationStandardsSection from '@/components/Sections/QualificationStandardsSection/QualificationStandardsSection';
import { ourworkforcepageHero } from '@/data/heroSections';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import { WORKFORCE_DATA, QUALIFICATION_STANDARDS_DATA } from '@/data/workforce';
import styles from './page.module.scss';

export default function WorkforcePage() {
  return (
    <>
      <HeroSection {...ourworkforcepageHero} />
      <div className={styles.pageLayout}>
        <InfoSplitSection content={WORKFORCE_DATA} showImage={false} />
        <QualificationStandardsSection
          title={QUALIFICATION_STANDARDS_DATA.title}
          qualifications={QUALIFICATION_STANDARDS_DATA.qualifications}
          description={QUALIFICATION_STANDARDS_DATA.description}
          buttonText={QUALIFICATION_STANDARDS_DATA.buttonText}
          imageSrc={QUALIFICATION_STANDARDS_DATA.imageSrc}
          imageAlt={QUALIFICATION_STANDARDS_DATA.imageAlt}
        />
        <StatsValueSection />;

      </div>
    </>
  );
}
