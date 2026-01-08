'use client';

import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import styles from './StatsValueSection.module.scss';

const StatsValueSection: React.FC = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const statistics = [
    { number: '25+', label: 'Years of Experience', target: 25 },
    { number: '5000CR+', label: 'Secured', target: 5000 },
    { number: '100+', label: 'Happy Clients', target: 100 },
    { number: '1500+', label: 'Employees', target: 1500 },
    { number: '10+', label: 'Fortune 500 Clients', target: 10 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    statistics.forEach((stat, index) => {
      let currentCount = 0;
      const stepValue = stat.target / steps;

      const timer = setInterval(() => {
        currentCount += stepValue;
        if (currentCount >= stat.target) {
          currentCount = stat.target;
          clearInterval(timer);
        }

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(currentCount);
          return newCounters;
        });
      }, increment);
    });
  };

  const formatNumber = (num: number, original: string) => {
    if (original.includes('CR+')) {
      return `${num}CR+`;
    }
    return `${num}+`;
  };

  return (
    <section ref={sectionRef} className={styles.StatsValueSection}>
      <div className="pageLayout">
        <div className="full-width-container">
            <hr className={styles.sectionContent}></hr>
          {/* Header */}
          <SectionHeader
            label="Our track record"
            title="High-performing people across the continent"
            highlightedWords={["people"]}
          />

          {/* Statistics Grid */}
          <div className={styles.statsContainer}>
            <div className={styles.statsGrid}>
              {statistics.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statContent}>
                    <span className={styles.statNumber}>
                      {hasAnimated ? formatNumber(counters[index], stat.number) : '0'}
                    </span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                </div>
              ))}

              {/* CTA Section */}
              <div className={styles.ctaCard}>
                <h3 className={styles.ctaTitle}>
                  Discover why we are the<br />
                  best at what we do
                </h3>
                <a href="#" className={styles.ctaLink}>
                  <span>Learn more</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3L13 8L8 13M13 8H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsValueSection;
