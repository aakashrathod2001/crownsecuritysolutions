// components/Sections/About/AboutSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.scss';

interface AboutSectionProps {
  title: string;
  mainHeading: string;
  subHeading: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  mainHeading,
  subHeading,
  description,
  imageSrc,
  imageAlt = 'About Us',
  className = '',
}) => {
  return (
    <section className={`${styles.aboutSection} ${className}`}>
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>{title}</h2>

          <div className={styles.headings}>
            <h1 className={styles.mainHeading}>{mainHeading}</h1>
            <p className={styles.subHeading}>{subHeading}</p>
          </div>

          <div className={styles.description}>
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
