// export type PortfolioItem = {
//   title: string;
//   image: string;
//   href?: string;
// };

// export const portfolioItems: PortfolioItem[] = [
//   { title: 'Finance App',      image: 'https://placehold.co/600x400',      href: '/work/finance-app' },
//   { title: 'Fashion Website',  image: 'https://placehold.co/600x500',  href: '/work/fashion' },
//   { title: 'Health App',       image: 'https://placehold.co/600x400',       href: '/work/health' },
//   { title: 'AI Writing Tool',  image: 'https://placehold.co/600x600',  href: '/work/ai-writer' },
//   { title: 'Progress Tracker', image: 'https://placehold.co/600x300', href: '/work/tracker' },
//   { title: 'Travel Platform',  image: 'https://placehold.co/600x600',  href: '/work/travel' },
// ];

export type PortfolioItem = {
  title: string;
  description?: string; // Optional supporting text
  image: string;
  href?: string;
};

export const portfolioItems: PortfolioItem[] = [
  { 
    title: 'Finance App',
    description: 'Modern banking interface with seamless UX',
    image: 'https://placehold.co/600x400',
    href: '#' 
  },
  { 
    title: 'Fashion Website',
    description: 'E-commerce platform for luxury brands',
    image: 'https://placehold.co/600x500',
    href: '#' 
  },
  { 
    title: 'Health App',
    description: 'Wellness tracking and nutrition management',
    image: 'https://placehold.co/600x400',
    href: '#' 
  },
  { 
    title: 'AI Writing Tool',
    description: 'Content generation powered by GPT',
    image: 'https://placehold.co/600x600',
    href: '#' 
  },
  { 
    title: 'Progress Tracker',
    description: 'Goal setting and habit formation app',
    image: 'https://placehold.co/600x300',
    href: '#' 
  },
  { 
    title: 'Travel Platform',
    description: 'Discover and book unique experiences',
    image: 'https://placehold.co/600x600',
    href: '#' 
  },
];