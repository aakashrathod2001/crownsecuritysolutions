// data/heroSections.ts
import { HeroSectionProps } from '@/types/hero';

export const homepageHero: HeroSectionProps = {
  media: {
    type: 'video',
    src: '/videos/garda-security-usa-ambient.mp4',
    poster: '/images/home/home-hero-bg.png',
    alt: 'Security guard at concert',
    videoProps: {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
    },
  },
  content: {
    title: 'Your Security. Our Priority.',
    description:
      "For almost 30 years now, Crown Security Agency (CSA) has been India’s trusted security partner, combining disciplined manpower, ethical governance, and technology-driven systems to safeguard people, property, and peace of mind across 7 states.",
    buttons: [
      {
        text: 'LEARN HOW',
        href: '/about',
        variant: 'primary',
        iconBgColor: '#F6292F',
      },
    ],
  },
  overlay: {
    enabled: true,
    color: '#252929',
    opacity: 0.6,
  },
  contentPosition: 'left',
  minHeight: '840px',
};

export const aboutpageHero: HeroSectionProps = {
  media: {
    type: 'video',
    src: '/videos/garda-security-usa-ambient.mp4',
    poster: '/images/about/about-hero-bg.png',
    alt: 'Security guard at concert',
    videoProps: {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
    },
  },
  content: {
    title: 'About Crown Security Agency',
    description:
      "For almost 30 years now, Crown Security Agency (CSA) has been India's trusted security partner, combining disciplined manpower, ethical governance, and technology-driven systems to safeguard people, property, and peace of mind across 7 states.",
  },
  overlay: {
    enabled: true,
    color: '#252929',
    opacity: 0.6,
  },
  contentPosition: 'left',
  minHeight: '840px',
};

export const ourprocesspageHero: HeroSectionProps = {
  media: {
    type: 'video',
    src: '/videos/garda-security-usa-ambient.mp4',
    poster: '/images/our-process-hero-bg.png',
    alt: 'Security guard at concert',
    videoProps: {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
    },
  },
  content: {
    title: 'Our Process',
    description:
      "At Crown Security Agency, we follow a transparent, step-by-step system that ensures every deployment is planned, compliant, and performance-driven. Each stage is powered by digital tools, trained supervision, and measurable benchmarks to guarantee accountability and peace of mind.",
  },
  overlay: {
    enabled: true,
    color: '#252929',
    opacity: 0.6,
  },
  contentPosition: 'left',
  minHeight: '840px',
};

export const ourworkforcepageHero: HeroSectionProps = {
  media: {
    type: 'video',
    src: '/videos/garda-security-usa-ambient.mp4',
    poster: '/images/our-workforce-hero-bg.png',
    alt: 'Security guard at concert',
    videoProps: {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
    },
  },
  content: {
    title: 'Our Workforce',
    description:
      "For almost 30 years now, Crown Security Agency (CSA) has been India's trusted security partner, combining disciplined manpower, ethical governance, and technology-driven systems to safeguard people, property, and peace of mind across 7 states.",
  },
  overlay: {
    enabled: true,
    color: '#252929',
    opacity: 0.6,
  },
  contentPosition: 'left',
  minHeight: '840px',
};

export const servicespageHero: HeroSectionProps = {
  media: {
    type: 'video',
    src: '/videos/garda-security-usa-ambient.mp4',
    poster: '/images/our-workforce-hero-bg.png',
    alt: 'Security guard at concert',
    videoProps: {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
    },
  },
  content: {
    title: 'Our Services',
    description:
      "Security isn't standard; it's situational. That's why Crown Securities offers tailored protection services designed around your environment, risk profile, and operational needs.",
  },
  overlay: {
    enabled: true,
    color: '#252929',
    opacity: 0.6,
  },
  contentPosition: 'left',
  minHeight: '840px',
};

export const careerspageHero: HeroSectionProps = {
  media: {
    type: 'video',
    src: '/videos/garda-security-usa-ambient.mp4',
    poster: '/images/our-workforce-hero-bg.png',
    alt: 'Security guard at concert',
    videoProps: {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
    },
  },
  content: {
    title: 'Work With Us',
    description:
      "For almost 30 years now, Crown Security Agency (CSA) has been India's trusted security partner, combining disciplined manpower, ethical governance, and technology-driven systems to safeguard people, property, and peace of mind across 7 states.",
  },
  overlay: {
    enabled: true,
    color: '#252929',
    opacity: 0.6,
  },
  contentPosition: 'left',
  minHeight: '840px',
};
