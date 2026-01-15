"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CAROUSEL_IMAGES } from '@/data/carouselImages';
import styles from './InfiniteCarousel.module.scss';

interface InfiniteCarouselProps {
  speed?: number;
  direction?: 'left' | 'right';
  gap?: number;
  className?: string;
  containerClassName?: string;
}

export function InfiniteCarousel({
  speed = 40,
  direction = 'left',
  className = '',
  containerClassName = '',
}: InfiniteCarouselProps) {
  const duplicatedItems = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <div className={`${styles.carousel} ${containerClassName}`}>
      {/* Edge Fading Masks */}
      <div className={`${styles.fadingMask} ${styles.left}`}></div>
      <div className={`${styles.fadingMask} ${styles.right}`}></div>

      <motion.div
        className={`${styles.carouselInner} ${className}`}
        animate={{
          x: direction === 'left' ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((url, index) => (
          <div key={`carousel-item-${index}`} className={styles.carouselItem}>
            <div className={styles.imageContainer}>
              <img
                src={url}
                alt={`Gallery ${index}`}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}></div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteCarousel;
