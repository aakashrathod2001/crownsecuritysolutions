import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.scss';
import { ABOUT_DATA } from '@/data/about';

interface AboutSectionProps {
  showImage?: boolean;
  variant?: 'home' | 'about';
}

const AboutSection: React.FC<AboutSectionProps> = ({
  showImage = true,
  variant = 'about'
}) => {
  const content = variant === 'home' ? ABOUT_DATA.homeAboutContent : ABOUT_DATA.aboutContent;
  return (
    <section className={styles.aboutSection}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <div className={styles.leftColumn}>
              <div className={styles.header}>
                <div className={styles.eyebrow}>
                  <span className={styles.label}>{content.label}</span>
                  <h2 className={styles.title}>
                    {content.title.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < content.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>
                </div>
                <p className={styles.subtitle}>
                  {content.subtitle}
                </p>
              </div>

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

export default AboutSection;
