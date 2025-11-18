"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./WhyUsSection.module.scss";
import { WhyUsCard } from "@/data/categoryPages/whyUs";
import Heading from "@/components/UI/Heading/Heading";
import type { HeadingData } from "@/components/UI/Heading/Heading";

type Props = {
  heading: HeadingData;
  image: string;
  cards: WhyUsCard[];
};

const WhyUsSection: React.FC<Props> = ({ heading, image, cards }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const totalCards = cards.length;
  const stripColors = ["#F15151", "#FCBDA3", "#95D8C3", "#C3DFF4", "#BAB8DC"];

  // Helper for stacking effect
  const getStackedTransform = useCallback((stackLevel: number): string => {
    return `translateY(${stackLevel * -8}px)`;
  }, []);

  const getCardTransform = useCallback((index: number): React.CSSProperties => {
    const exactProgress = scrollProgress * Math.max(0, totalCards - 1);
    const activeIndex = Math.round(exactProgress);
    const baseRotation = index % 2 === 0 ? -2 : 2;

    // Active card
    if (index === activeIndex) {
      return {
        transform: `rotate(${baseRotation}deg)`,
        opacity: 1,
        zIndex: 20,
        pointerEvents: "auto" as const,
      };
    }

    // Cards after active → slide right
    if (index > activeIndex) {
      const cardGap = 520;
      const relative = index - activeIndex;
      return {
        transform: `translateX(${relative * cardGap}px) rotate(${baseRotation}deg)`,
        opacity: 1,
        zIndex: 5,
        pointerEvents: "none" as const,
      };
    }

    // Cards before active → stack
    const stackLevel = Math.min(3, activeIndex - index - 1);
    return {
      transform: `${getStackedTransform(stackLevel)} rotate(${baseRotation}deg)`,
      opacity: 1,
      zIndex: 9 - stackLevel,
      pointerEvents: "none" as const,
    };
  }, [scrollProgress, totalCards, getStackedTransform]);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    
    const section = sectionRef.current;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    const sectionStart = sectionTop;
    const sectionEnd = sectionTop + sectionHeight - viewportHeight;

    if (scrollY >= sectionStart && scrollY <= sectionEnd) {
      const progress = (scrollY - sectionStart) / Math.max(1, sectionEnd - sectionStart);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Distribute across (totalCards - 1) to avoid index overflow
      const exactCardProgress = clampedProgress * Math.max(0, totalCards - 1);

      setScrollProgress(clampedProgress);
      setActiveCardIndex(
        Math.max(0, Math.min(totalCards - 1, Math.round(exactCardProgress)))
      );
    }
  }, [totalCards]);

  useEffect(() => {
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [handleScroll]);

  // Early return if no cards
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className={styles.whyUsSection}>
      <div className={styles.stickyContainer}>
        <div className={styles.innerContainer}>
          <div className="pageLayout">
            <div className="full-width-container" style={{ paddingBlock: '1rem' }}>
              <Heading data={heading} className={styles.sectionTitle} />
              <div className={styles.contentWrapper}>
                {/* Left column → Image */}
                <div className={styles.imageContainer}>
                  <Image
                    src={image}
                    alt={heading.first || "Why Us"}
                    width={800}
                    height={600}
                    className={styles.mannequin}
                    priority
                    sizes="(max-width: 768px) 300px, 800px"
                    unoptimized
                  />
                </div>

                {/* Right column → Cards */}
                <div className={styles.cardsContainer}>
                  {cards.map((card, index) => (
                    <div
                      key={card.id}
                      className={styles.card}
                      style={{
                        ...getCardTransform(index),
                        transition:
                          "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                      }}
                    >
                      <div
                        className={styles.colorStrip}
                        style={{
                          backgroundColor:
                            card.stripColor ||
                            stripColors[index % stripColors.length],
                        }}
                      />
                      <h3 className={styles.title}>{card.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;