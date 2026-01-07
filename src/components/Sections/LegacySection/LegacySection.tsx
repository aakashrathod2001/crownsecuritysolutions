import React from 'react';
import Image from 'next/image';
import styles from './LegacySection.module.scss';
import { LEGACY_SECTION_DATA } from '@/data/legacySection';

const LegacySection: React.FC = () => {
  return (
    <section className={styles.legacySection}>
      <div className={styles.backgroundContainer}>
        {/* Background Image */}
        <div className={styles.backgroundImage}>
          <Image
            src={LEGACY_SECTION_DATA.backgroundImage}
            alt="Legacy and Leadership Background"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Overlay with Content */}
        <div className={styles.overlay}>
          <div className={styles.contentCard}>
            {/* Title */}
            <h2 className={styles.title}>{LEGACY_SECTION_DATA.title}</h2>

            {/* Subtitle */}
            <h3 className={styles.subtitle}>{LEGACY_SECTION_DATA.subtitle}</h3>

            {/* Content with line breaks */}
            <div className={styles.content}>
              <p className={styles.paragraph}>
                {LEGACY_SECTION_DATA.content}
              </p>
            </div>

            {/* Quote */}
            <div className={styles.quoteContainer}>
              <cite className={styles.author}>{LEGACY_SECTION_DATA.author}</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
