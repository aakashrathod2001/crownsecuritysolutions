'use client';

import React, { useEffect, useRef } from 'react';
import styles from './BrandSlider.module.scss';
import { logos } from '@/data/logos';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  className?: string;
  speed?: number; // px per frame at 60fps
};

const BrandSlider: React.FC<Props> = ({ className = '', speed = 0.6 }) => {
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

      x -= speed * (delta / (1000 / 60));

      const first = track.firstElementChild as HTMLElement | null;
      if (first) {
        const gap = parseInt(getComputedStyle(track).gap || '0', 10);
        const firstWidth = first.offsetWidth + gap;

        // 🚀 If first logo is completely out of view
        if (-x >= firstWidth) {
          // Move it to the end
          track.appendChild(first);

          // And adjust offset so motion is continuous
          x += firstWidth;
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
