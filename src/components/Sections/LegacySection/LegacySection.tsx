import React from 'react';
import Image from 'next/image';
import styles from './LegacySection.module.scss';
import { LEGACY_SECTION_DATA } from '@/data/legacySection';

const LegacySection: React.FC = () => {
  // Function to highlight specific words in text
  const highlightWords = (text: string, wordsToHighlight: string[] = []) => {
    if (wordsToHighlight.length === 0) {
      return text;
    }

    // Create regex pattern to match whole words
    const wordsPattern = wordsToHighlight.join('|');
    const regex = new RegExp(`\\b(${wordsPattern})\\b`, 'gi');

    // Split text by the regex and process parts
    const parts = text.split(regex);

    return parts.map((part, index) => {
      // Check if this part matches any of the highlight words
      const isHighlighted = wordsToHighlight.some(word =>
        part.toLowerCase() === word.toLowerCase()
      );

      return isHighlighted ? (
        <strong key={index} className={styles.highlight}>
          {part}
        </strong>
      ) : (
        part
      );
    });
  };
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

            {/* Content with line breaks and highlighted words */}
            <div className={styles.content}>
              <p className={styles.paragraph}>
                {highlightWords(LEGACY_SECTION_DATA.content, LEGACY_SECTION_DATA.highlightedWords || [])}
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
