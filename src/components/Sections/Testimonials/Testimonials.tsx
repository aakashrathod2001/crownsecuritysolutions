"use client";

import { useState } from "react";
import { Star } from "lucide-react";
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
  isPlaying,
  onPlay,
  onStop
}: {
  thumbnail: string;
  videoUrl?: string;
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}) => {
  if (isPlaying && videoUrl) {
    return (
      <div
        className={styles.videoThumbnail}
        onClick={(e) => {
          // Prevent event bubbling to section click handler
          e.stopPropagation();
          // Only stop if clicking on the container, not the video controls
          if (e.target === e.currentTarget) {
            onStop();
          }
        }}
      >
        <video
          className={styles.videoPlayer}
          src={videoUrl}
          controls
          autoPlay
          onClick={(e) => e.stopPropagation()}
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(console.error);
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={styles.videoThumbnail}
      onClick={(e) => {
        // Prevent event bubbling when clicking on thumbnail/play button
        e.stopPropagation();
      }}
    >
      <img
        src={thumbnail}
        alt="Video testimonial"
        className={styles.videoImage}
      />
      <div className={styles.videoOverlay} />
        <img
          src="/images/testimonials/play-icon.webp"
          alt="Play video"
          className={styles.playIcon}
          onClick={onPlay}
        />
    </div>
  );
};

const TestimonialCard = ({
  quote,
  companyLogo,
  companyName,
  personName,
  title,
  rating,
}: {
  quote: string;
  companyLogo: string;
  companyName: string;
  personName: string;
  title: string;
  rating: number;
}) => {
  return (
    <div
      className={styles.card}
      onClick={(e) => e.stopPropagation()}
    >
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.cardFooter}>
        <div className={styles.authorInfo}>
          <div className={styles.companyLogo}>
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className={styles.logoImage}
            />
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



const Testimonials = () => {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const handlePlayVideo = (videoId: number) => {
    setPlayingVideoId(videoId);
  };

  const handleStopVideo = () => {
    setPlayingVideoId(null);
  };

  return (
    <section
      className={styles.section}
      onClick={() => {
        // Stop video if clicking anywhere in the section (outside interactive elements)
        if (playingVideoId) {
          handleStopVideo();
        }
      }}
    >
      <div className="pageLayout">
        <div className="full-width-container">
          <div className={styles.SectionHeader}>
            <SectionHeader
              label=""
              title="What Our Client Says"
              highlightedWords={["What Our"]}
            />
          </div>

          <div className={styles.container}>
            <div className={styles.videoGrid}>
              {videoTestimonials.map((video) => (
                <VideoThumbnail
                  key={video.id}
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                  isPlaying={playingVideoId === video.id}
                  onPlay={() => handlePlayVideo(video.id)}
                  onStop={handleStopVideo}
                />
              ))}
            </div>

            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  quote={testimonial.quote}
                  companyLogo={testimonial.companyLogo}
                  companyName={testimonial.companyName}
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
  );
};

export default Testimonials;
