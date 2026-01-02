// components/HeroSection/HeroSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/UI/Button/Button';
import { HeroSectionProps } from '@/types/hero';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC<HeroSectionProps> = ({
  media,
  content,
  overlay = { enabled: true, color: '#000000', opacity: 0.5 },
  contentPosition = 'left',
  minHeight = '600px',
  className = '',
}) => {
  const overlayStyle = overlay.enabled
    ? {
        backgroundColor: overlay.color || '#000000',
        opacity: overlay.opacity || 0.5,
      }
    : undefined;

  return (
    <section
      className={`${styles.hero} ${className}`}
      style={{ minHeight }}
    >
      {/* Background Media */}
      <div className={styles.mediaWrapper}>
        {media.type === 'image' ? (
          <Image
            src={media.src}
            alt={media.alt || 'Hero background'}
            fill
            className={styles.media}
            priority
            quality={90}
          />
        ) : (
          <video
            className={styles.media}
            autoPlay={media.videoProps?.autoPlay ?? true}
            loop={media.videoProps?.loop ?? true}
            muted={media.videoProps?.muted ?? true}
            playsInline={media.videoProps?.playsInline ?? true}
            poster={media.poster}
          >
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {overlay.enabled && (
          <div className={styles.overlay} style={overlayStyle}></div>
        )}
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div
          className={`${styles.content} ${
            styles[`content--${contentPosition}`]
          }`}
        >
          <h1
            className={`${styles.title} ${content.titleClassName || ''}`}
          >
            {content.title}
          </h1>
          <p
            className={`${styles.description} ${
              content.descriptionClassName || ''
            }`}
          >
            {content.description}
          </p>

          {content.buttons && content.buttons.length > 0 && (
            <div className={styles.buttonGroup}>
              {content.buttons.map((button, index) => {
                const ButtonContent = (
                  <Button
                    key={index}
                    text={button.text}
                    variant={button.variant || 'primary'}
                    iconBgColor={button.iconBgColor}
                    onClick={button.onClick}
                    icon={
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                );

                return button.href ? (
                  <Link key={index} href={button.href}>
                    {ButtonContent}
                  </Link>
                ) : (
                  ButtonContent
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;