// /data/testimonials.ts
export type Testimonial = {
  quote: string;
  name: string;
  role: string;        // e.g. Senior Manager, Marketing
  company: string;     // e.g. Abhishti
  logo: string;        // /assets/testimonial/xxx.webp in /public
  accent?: 'red' | 'peach' | 'mint' | 'blue';
  tilt?: 'left' | 'right' | 'none';
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Earlier marketing was the most challenging task for us. Wunderkint has made our lives so much more easier. Looking forward to travelling a long beautiful road ahead with them.',
    name: 'Senior Manager, Marketing',
    role: 'Senior Manager, Marketing',
    company: 'Abhishti',
    logo: '/images/testimonials/Abhishti_Logo.webp',
    accent: 'red',
    tilt: 'none',
  },
  {
    quote:
      'Highly recommend! The media campaign they delivered for us was perfect to the T.',
    name: 'Head of Marketing',
    role: 'Hiranandani Asters',
    company: 'Hiranandani Asters',
    logo: '/images/testimonials/Hiranandani_Asters_Logo.webp',
    accent: 'peach',
    tilt: 'right',
  },
  {
    quote:
      'Working with Wunderkint and their team on the Podcast has been fantastic! We were looking to do a podcast for a long while, and finally Wunderkint helped us find our voice and showed us a path to reach a wider audience!',
    name: 'Marketing Manager',
    role: 'Marketing Manager',
    company: 'Geojit Finance',
    logo: '/images/testimonials/Geojit_Finance_Logo.webp',
    accent: 'mint',
    tilt: 'left',
  },
  {
    quote:
      "Working with Wunderkint has been a game-changer for us. We're thrilled with the results!",
    name: 'Marketing Director',
    role: 'BlaBlaCar',
    company: 'BlaBlaCar',
    logo: '/images/testimonials/BlaBlaCar_Logo.webp',
    accent: 'blue',
    tilt: 'none',
  },
  {
    quote:
      'Couldn’t be happier! Wunderkint’s creative content and strategic influencer partnerships have boosted our visibility and reach tremendously. Wunderkint has instilled a sense of authenticity in our brand story that resonates better than ever.',
    name: 'Brand Manager',
    role: 'Suhana',
    company: 'Suhana',
    logo: '/images/testimonials/Suhana_Logo.webp',
    accent: 'red',
    tilt: 'right',
  },
];
