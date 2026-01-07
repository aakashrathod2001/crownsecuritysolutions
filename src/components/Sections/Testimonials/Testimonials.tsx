"use client";

import { useState } from "react";
import { Play, Star, X } from "lucide-react";
import { testimonials, videoTestimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.scss";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={star <= rating ? styles.starFilled : styles.starEmpty}
        />
      ))}
    </div>
  );
};

const VideoThumbnail = ({
  thumbnail,
  videoUrl,
  onPlay
}: {
  thumbnail: string;
  videoUrl?: string;
  onPlay: () => void;
}) => {
  return (
    <div className={styles.videoThumbnail}>
      <img
        src={thumbnail}
        alt="Video testimonial"
        className={styles.videoImage}
      />
      <div className={styles.videoOverlay} />
      <button className={styles.playButton} onClick={onPlay}>
        <Play className={styles.playIcon} />
      </button>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  companyLogo,
  personName,
  title,
  rating,
}: {
  quote: string;
  companyLogo: string;
  personName: string;
  title: string;
  rating: number;
}) => {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.cardFooter}>
        <div className={styles.authorInfo}>
          <div className={styles.companyLogo}>
            <span className={styles.logoText}>{companyLogo}</span>
            <span className={styles.logoSubtext}>GROUP</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.personInfo}>
            <p className={styles.personName}>{personName}</p>
            <p className={styles.personTitle}>{title}</p>
          </div>
        </div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

const VideoModal = ({
  videoUrl,
  isOpen,
  onClose
}: {
  videoUrl?: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !videoUrl) return null;

  return (
    <div className={styles.videoModal} onClick={onClose}>
      <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X className={styles.closeIcon} />
        </button>
        <video
          className={styles.videoPlayer}
          src={videoUrl}
          controls
          autoPlay
          onLoadedData={(e) => {
            // Ensure video starts playing
            const video = e.target as HTMLVideoElement;
            video.play().catch(console.error);
          }}
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlayVideo = (videoUrl?: string) => {
    if (videoUrl) {
      setPlayingVideo(videoUrl);
    }
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <>
      <section className={styles.section}>
        <div className="pageLayout">
          <div className="full-width-container">
            {/* Section Header */}
            <div className={styles.SectionHeader}>
              {/* Header */}
              <SectionHeader
                label=""
                title="A comprehensive service offering\nfrom Crown Securities"
                highlightedWords={["A comprehensive service offering"]}
              />
            </div>

            <div className={styles.container}>
              {/* Video Testimonials */}
              <div className={styles.videoGrid}>
                {videoTestimonials.map((video) => (
                  <VideoThumbnail
                    key={video.id}
                    thumbnail={video.thumbnail}
                    videoUrl={video.videoUrl}
                    onPlay={() => handlePlayVideo(video.videoUrl)}
                  />
                ))}
              </div>

              {/* Text Testimonials Grid */}
              <div className={styles.testimonialsGrid}>
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    quote={testimonial.quote}
                    companyLogo={testimonial.companyLogo}
                    personName={testimonial.personName}
                    title={testimonial.title}
                    rating={testimonial.rating}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <VideoModal
        videoUrl={playingVideo || undefined}
        isOpen={!!playingVideo}
        onClose={handleCloseVideo}
      />
    </>
  );
};

export default Testimonials;
