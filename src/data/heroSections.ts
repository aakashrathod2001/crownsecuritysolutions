// data/heroSections.ts
import { HeroSectionProps } from '@/types/hero';

// Homepage Hero - Only hero section currently used
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
      "For almost 30 years now, Crown Security Agency (CSA) has been India's trusted security partner, combining disciplined manpower, ethical governance, and technology-driven systems to safeguard people, property, and peace of mind across 7 states.",
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
