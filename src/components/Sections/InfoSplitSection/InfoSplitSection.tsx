'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import styles from './InfoSplitSection.module.scss';
import { SectionWithImageProps } from '@/types/section';

interface InfoSplitSectionProps extends SectionWithImageProps {
  layout?: 'row' | 'column';
  videoSrc?: string;
}

const InfoSplitSection: React.FC<InfoSplitSectionProps> = ({
  showImage = true,
  content,
  layout = 'row',
  videoSrc
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video is muted for iOS autoplay
      video.muted = true;
      video.playsInline = true;
      
      const attemptPlay = () => {
        video.play().then(() => {
          setHasStarted(true);
          setShowPlayButton(false);
        }).catch(() => {
          // Autoplay was prevented
          setShowPlayButton(true);
        });
      };
      
      // Try to play immediately
      attemptPlay();
      
      // Also try on first interaction (required for some iOS versions)
      const handleFirstInteraction = () => {
        attemptPlay();
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('click', handleFirstInteraction);
      };
      
      document.addEventListener('touchstart', handleFirstInteraction, { once: true });
      document.addEventListener('click', handleFirstInteraction, { once: true });
      
      return () => {
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('click', handleFirstInteraction);
      };
    }
  }, [videoSrc]);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().then(() => {
        setShowPlayButton(false);
        setHasStarted(true);
      }).catch(() => {
        // Still can't play
      });
    }
  };

  const toggleMute = () => {
    if (videoRef.current && hasStarted) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className={`${styles.aboutSection} ${layout === 'column' ? styles.columnLayout : ''}`}>
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.container}>
            <div className={styles.leftColumn}>
              <SectionHeader
                label={content.label}
                title={content.title}
                subtitle={content.subtitle}
              />

              {videoSrc ? (
                <div className={styles.videoWrapper}>
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="auto"
                    className={styles.video}
                  />
                  {showPlayButton && (
                    <button 
                      className={styles.playButton}
                      onClick={handlePlayClick}
                      aria-label="Play video"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                  )}
                  <button 
                    className={styles.muteButton}
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                    )}
                  </button>
                </div>
              ) : showImage && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={content.imageSrc}
                    alt={content.imageAlt}
                    width={575}
                    height={510}
                    className={styles.image}
                  />
                </div>
              )}
            </div>

            <div className={styles.rightColumn}>
              {content.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSplitSection;
