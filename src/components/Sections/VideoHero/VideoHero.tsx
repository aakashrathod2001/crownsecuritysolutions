"use client";

import React from "react";
import styles from "./VideoHero.module.scss";

interface VideoHeroProps {
  videoSrc?: string;
  poster?: string;
  className?: string;
}

/**
 * ✅ VideoHero Component
 * - Clean video banner (no <h1>, no SEO tags)
 * - Fully responsive and visually polished
 * - Uses fallback sample video if no source provided
 */
const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc,
  poster,
  className = "",
}) => {
  const src =
    videoSrc ||
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <section
      className={`${styles.videoHero} ${className}`}
      aria-hidden="true"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        className={styles.video}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay} />
    </section>
  );
};

export default VideoHero;
