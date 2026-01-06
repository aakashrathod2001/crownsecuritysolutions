import React from 'react';
import styles from './CTASection.module.scss';

interface CTASectionProps {
  label: string;
  title: string;
  textColor?: string;
  showStripes?: boolean;
  overlayOpacity?: number;
}

const CTASection: React.FC<CTASectionProps> = ({
  label,
  title,
  textColor = '#ffffff',
  showStripes = false,
  overlayOpacity = 0.7
}) => {
  return (
    <section className={styles.ctaSection}>
      <div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      ></div>
      
      <div className={styles.container}>
        <span className={styles.label} style={{ color: textColor }}>
          {label}
        </span>
        <h2 className={styles.title} style={{ color: textColor }}>
          {title}
        </h2>
      </div>
      
      {showStripes && (
        <div className={styles.stripesWrapper}>
          <div className={styles.stripes}></div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
