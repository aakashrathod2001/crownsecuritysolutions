import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import styles from './InfoSplitSection.module.scss';
import { SectionWithImageProps } from '@/types/section';

const InfoSplitSection: React.FC<SectionWithImageProps> = ({
  showImage = true,
  content
}) => {
  return (
    <section className={styles.aboutSection}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <div className={styles.leftColumn}>
              <SectionHeader
                label={content.label}
                title={content.title}
                subtitle={content.subtitle}
              />

              {showImage && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={content.imageSrc}
                    alt={content.imageAlt}
                    width={575}
                    height={510}
                    className={styles.image}
                  />
                </div>
              )}
            </div>

            <div className={styles.rightColumn}>
              {content.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSplitSection;
