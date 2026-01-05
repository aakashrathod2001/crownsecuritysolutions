import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.scss';
import { aboutContent } from '@/data/aboutSection';

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <div className={styles.leftColumn}>
              <div className={styles.header}>
                <div className={styles.eyebrow}>
                  <span className={styles.label}>{aboutContent.label}</span>
                  <h2 className={styles.title}>
                    {aboutContent.title.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < aboutContent.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>
                </div>
                <p className={styles.subtitle}>
                  {aboutContent.subtitle}
                </p>
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={aboutContent.imageSrc}
                  alt={aboutContent.imageAlt}
                  width={575}
                  height={510}
                  className={styles.image}
                />
              </div>
            </div>

            <div className={styles.rightColumn}>
              {aboutContent.paragraphs.map((paragraph, index) => (
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