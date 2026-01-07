'use client';

import React, { useEffect, useRef } from 'react';
import styles from './BrandSlider.module.scss';
import { logos } from '@/data/logos';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string;
  speed?: number; // px per frame at 60fps
  direction?: 'left' | 'right'; // Direction control: 'left' (default) or 'right'
};

const BrandSlider: React.FC<Props> = ({ className = '', speed = 0.6, direction = 'left' }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId: number;
    let x = 0;
    let last = performance.now();

    const step = (now: number) => {
      const delta = now - last;
      last = now;

      // Determine direction multiplier: -1 for left, +1 for right
      const directionMultiplier = direction === 'right' ? 1 : -1;
      x += speed * (delta / (1000 / 60)) * directionMultiplier;

      const first = track.firstElementChild as HTMLElement | null;
      const lastElement = track.lastElementChild as HTMLElement | null;
      if (first && lastElement) {
        const gap = parseInt(getComputedStyle(track).gap || '0', 10);
        const firstWidth = first.offsetWidth + gap;
        const trackWidth = track.offsetWidth;

        if (direction === 'left') {
          // For left: check if first logo is out of view on the left
          if (-x >= firstWidth) {
            track.appendChild(first);
            x += firstWidth;
          }
        } else {
          // For right: check if last logo is out of view on the right
          const lastRightEdge = x + trackWidth;
          if (lastRightEdge >= firstWidth) {
            track.insertBefore(lastElement, first);
            x -= firstWidth;
          }
        }
      }

      track.style.transform = `translate3d(${x}px, 0, 0)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div className={`${styles.sliderWrapper} ${className}`} ref={wrapperRef}>
      <div className={styles.sliderTrack} ref={trackRef}>
        {logos.map((logo, index) => (
          <div className={styles.logo} key={`${logo.name}-${index}`}>
            <Link href={logo.href || '#'} aria-label={logo.name}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={1}
                height={1}
                className={styles.logoImage}
                unoptimized
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
