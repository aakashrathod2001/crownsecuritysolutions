// data/heroSections.ts
import { HeroSectionProps } from '@/types/hero';

// Homepage Hero
export const homepageHero: HeroSectionProps = {
  media: {
    type: 'image',
    src: '/images/home/home-hero-bg.png',
    alt: 'Security guard at concert',
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
        iconBgColor: '#e74c3c',
      },
    ],
  },
  overlay: {
    enabled: true,
    color: '#000000',
    opacity: 0.5,
  },
  contentPosition: 'left',
  minHeight: '600px',
};

// About Page Hero
export const aboutHero: HeroSectionProps = {
  media: {
    type: 'image',
    src: '/images/about-hero.jpg',
    alt: 'About Crown Security',
  },
  content: {
    title: 'Protecting What Matters Most',
    description:
      'With nearly three decades of experience, we deliver comprehensive security solutions tailored to your unique needs.',
    buttons: [
      {
        text: 'OUR STORY',
        href: '/our-story',
        variant: 'primary',
        iconBgColor: '#e74c3c',
      },
      {
        text: 'CONTACT US',
        href: '/contact',
        variant: 'outline',
      },
    ],
  },
  overlay: {
    enabled: true,
    color: '#1a252f',
    opacity: 0.6,
  },
  contentPosition: 'center',
  minHeight: '500px',
};

// Services Page Hero with Video
export const servicesHero: HeroSectionProps = {
  media: {
    type: 'video',
    src: '/videos/security-services.mp4',
    poster: '/images/services-poster.jpg',
    videoProps: {
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
    },
  },
  content: {
    title: 'Comprehensive Security Solutions',
    description:
      'From corporate offices to events, we provide tailored security services that ensure safety and peace of mind.',
    buttons: [
      {
        text: 'VIEW SERVICES',
        href: '/services',
        variant: 'primary',
        iconBgColor: '#2c3e50',
      },
    ],
  },
  overlay: {
    enabled: true,
    color: '#000000',
    opacity: 0.4,
  },
  contentPosition: 'left',
  minHeight: '650px',
};

// Contact Page Hero
export const contactHero: HeroSectionProps = {
  media: {
    type: 'image',
    src: '/images/contact-hero.jpg',
    alt: 'Contact Crown Security',
  },
  content: {
    title: 'Get In Touch',
    description:
      "Let's discuss how we can provide the security solutions your organization needs.",
    buttons: [
      {
        text: 'START CONVERSATION',
        onClick: () => console.log('Scroll to form'),
        variant: 'primary',
        iconBgColor: '#00ad54',
      },
    ],
  },
  overlay: {
    enabled: true,
    color: '#2d3e50',
    opacity: 0.7,
  },
  contentPosition: 'center',
  minHeight: '500px',
};