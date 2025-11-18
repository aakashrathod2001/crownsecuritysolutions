// /data/pricing.ts
export type BillingInterval = 'monthly' | 'annual';

export type Plan = {
  id: string;
  name: string;
  blurb: string;                 // short description under title
  ctaText: string;
  ctaHref: string;
  highlight?: boolean;           // dark/featured style
  featuresIntro?: string;        // e.g., "Features included:" / "All in Premium, plus:"
  features: string[];
  footnote?: string;             // small paragraph at bottom
  prices: {
    monthly: number | 'contact';
    annual: number | 'contact';
  };
};

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    blurb: 'For solo creators or small teams launching their first site.',
    ctaText: 'Get Started',
    ctaHref: '/checkout?plan=starter',
    featuresIntro: 'Features included:',
    features: ['1 Webflow template', 'CMS-ready', 'Modular layout'],
    footnote: 'Perfect for startups or freelancers who need a polished website without the overhead.',
    prices: { monthly: 150, annual: 120 * 12 }, // 20% savings on annual
  },
  {
    id: 'premium',
    name: 'Premium',
    blurb: 'For growing agencies or design teams with multiple clients.',
    ctaText: 'Get Started',
    ctaHref: '/checkout?plan=premium',
    highlight: true,
    featuresIntro: 'All in Starter, plus:',
    features: ['3 templates', 'Figma files', 'Priority support'],
    footnote:
      'Ideal for growing teams managing multiple sites or delivering polished results for demanding clients.',
    prices: { monthly: 299, annual: 239 * 12 }, // example annual
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    blurb: 'For power users managing multiple brands and workflows.',
    ctaText: 'Get Started',
    ctaHref: '/checkout?plan=unlimited',
    featuresIntro: 'All in Premium, plus:',
    features: ['All templates', 'Monthly drops', 'Team sharing'],
    footnote:
      'Designed for fast-moving teams needing flexibility, scale, and consistent design quality.',
    prices: { monthly: 599, annual: 479 * 12 },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'Custom solutions for large teams and high-volume needs.',
    ctaText: 'Contact Us',
    ctaHref: '/contact?topic=sales',
    featuresIntro: '',
    features: [],
    footnote:
      'Designed for fast-moving teams needing flexibility, scale, and consistent design quality across every project.',
    prices: { monthly: 'contact', annual: 'contact' },
  },
];
