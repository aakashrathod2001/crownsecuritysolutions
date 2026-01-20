// app/our-workforce/page.tsx
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import InfoSplitSection from '@/components/Sections/InfoSplitSection/InfoSplitSection';
import QualificationStandardsSection from '@/components/Sections/QualificationStandardsSection/QualificationStandardsSection';
import WorkforceStructureSection from '@/components/Sections/WorkforceStructureSection/WorkforceStructureSection';
import { ourworkforcepageHero } from '@/data/heroSections';
import StatsValueSection from '@/components/Sections/StatsValueSection/StatsValueSection';
import {
  WORKFORCE_DATA,
  QUALIFICATION_STANDARDS_DATA,
  WORKFORCE_STRUCTURE_DATA
} from '@/data/workforce';
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
        <WorkforceStructureSection columns={WORKFORCE_STRUCTURE_DATA.columns} />
        <StatsValueSection />;
      </div>
    </>
  );
}
