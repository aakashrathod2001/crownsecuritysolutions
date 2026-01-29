
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TIMELINE_DATA } from '@/data/trackRecord';
import styles from './TrackRecordSection.module.scss';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';

/**
 * TrackRecordSection Component
 * Single scroll effect:
 * - One continuous scroll through all timeline items
 * - Items stack and overlap as user scrolls
 * - Smooth transitions between items
 */
const TrackRecordSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set mobile state on client after hydration
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress relative to the total scroll distance of this sticky section
      const totalScrollable = containerHeight - windowHeight;
      const scrolled = -rect.top;

      const progress = Math.max(0, Math.min(0.999, scrolled / totalScrollable));
      const index = Math.floor(progress * TIMELINE_DATA.length);

      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive height per item for the stacking animation
  const ITEM_HEIGHT = isMobile ? 60 : 100;
  const SPACED_HEIGHT = ITEM_HEIGHT;

  return (
    <section
      ref={containerRef}
      className={styles.section}
      style={{ height: `${TIMELINE_DATA.length * 100}vh` }}
    >
      <div className={styles.stickyContainer}>
        {/* Header - Scaled for mobile */}
        <div className={styles.header}>
          <SectionHeader
            label="Our track record"
            title="High-performing people across the continent"
            highlightedWords={["people"]}
          />
        </div>

        {/* Layout Grid - Flex direction changes on mobile */}
        <div className={styles.layoutGrid}>

          {/* Left Column: List Style with Stacking Animation */}
          <div className={styles.leftColumn}>
            <div className={styles.listContainer}>
              {TIMELINE_DATA.map((item, index) => {
                const isCurrent = index === activeIndex;
                const isPast = index < activeIndex;

                // Stacking Logic:
                // - Past items stay at top (translateY = 0)
                // - Current item slides into position 0
                // - Upcoming items stay at their index position relative to active

                let translateY = 0;
                let opacity = 1;
                let zIndex = index;

                if (isPast) {
                  translateY = - (activeIndex - index) * SPACED_HEIGHT;
                  opacity = 0;
                } else if (isCurrent) {
                  translateY = 0;
                  opacity = 1;
                  zIndex = 100 + index;
                } else {
                  translateY = (index - activeIndex) * SPACED_HEIGHT;
                  opacity = 0.2;
                }

                return (
                  <div
                    key={item.id}
                    className={`${styles.timelineItem} ${isCurrent ? styles.active : ''}`}
                    style={{
                      transform: `translateY(${translateY}px)`,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                  >
                    <div className={`${styles.year} ${isCurrent ? styles.active : styles.inactive}`}>
                      {item.year}
                    </div>
                    <div className={`${styles.title} ${isCurrent ? styles.active : styles.inactive}`}>
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Content - Responsive text sizes */}
          <div className={styles.rightColumn}>
            <div className={styles.contentContainer}>
              {TIMELINE_DATA.map((item, index) => (
                <div
                  key={`content-${item.id}`}
                  className={`${styles.contentItem} ${activeIndex !== index ? styles.inactive : ''}`}
                >
                  <h3 className={styles.itemTitle}>
                    {item.year} — {item.title}
                  </h3>
                  <p className={styles.description}>
                    {item.description.split(/(\$[0-9,]+|C\$[0-9,]+[+]*)/).map((part, i) => {
                      const isCurrency = /(\$[0-9,]+|C\$[0-9,]+[+]*)/.test(part);
                      return isCurrency ? (
                        <span key={i} className={styles.highlight}>{part}</span>
                      ) : part;
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
