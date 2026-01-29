import React from 'react';
import styles from './CTASection.module.scss';
import Link from 'next/link';

interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface CTASectionProps {
  label: string;
  title: string;
  textColor?: string;
  showStripes?: boolean;
  overlayOpacity?: number;
  button?: CTAButton;
}

const CTASection: React.FC<CTASectionProps> = ({
  label,
  title,
  textColor = '#ffffff',
  showStripes = false,
  overlayOpacity = 0.7,
  button
}) => {
  return (
    <section className={styles.ctaSection}>
      <div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
      ></div>

      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <span className={styles.label} style={{ color: textColor }}>
              {label}
            </span>
            <p className={styles.title} style={{ color: textColor }}>
              {title}
            </p>
            {button && (
              <Link 
                href={button.href}
                className={`${styles.ctaButton} ${button.variant === 'secondary' ? styles.secondary : styles.primary}`}
              >
                {button.text}
              </Link>
            )}
          </div>
        </div>
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
