"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './TrackRecordSection.module.scss';
import { trackRecordData } from '@/data/trackRecordData';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';

type TimelineCardProps = {
  year: string;
  title: string;
  isActive: boolean;
};

const TimelineCard: React.FC<TimelineCardProps> = ({ year, title, isActive }) => {
  return (
    <div className={`${styles.timelineCard} ${isActive ? styles.active : ''}`}>
      <span className={styles.year}>{year}</span>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};

type ContentBlockProps = {
  year: string;
  title: string;
  description: string;
  highlight?: string;
  descriptionEnd?: string;
};

const ContentBlock: React.FC<ContentBlockProps> = ({
  year,
  title,
  description,
  highlight,
  descriptionEnd
}) => {
  return (
    <div className={styles.contentBlock}>
      <h2 className={styles.contentYear}>{year} - {title}</h2>
      <p className={styles.contentDescription}>
        {description}
        {highlight && <span className={styles.highlightText}> {highlight}</span>}
        {descriptionEnd && descriptionEnd}
      </p>
    </div>
  );
};

const TrackRecordSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    observerRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className={styles.trackRecordWrapper}>
        <div className={styles.sectionHeader}>
          <SectionHeader
            label="Our track record"
            title="High-performing people across the continent"
            highlightedWords={["people"]}
          />
        </div>

        <div className={styles.contentWrapper}>
          {/* Left Column - Stacked Timeline Cards */}
          <div className={styles.timelineColumn}>
            {trackRecordData.map((item, index) => (
              <div
                key={index}
                ref={(el) => { observerRefs.current[index] = el; }}
                className={styles.timelineBlock}
                style={{ zIndex: index + 1 }}
              >
                <TimelineCard
                  year={item.year}
                  title={item.title}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>

          {/* Right Column - Content Blocks */}
          <div className={styles.contentColumn}>
            <div className={styles.contentStickyWrapper}>
              <ContentBlock {...trackRecordData[activeIndex]} />
            </div>
          </div>
        </div>
      </div>

  );
};

export default TrackRecordSection;