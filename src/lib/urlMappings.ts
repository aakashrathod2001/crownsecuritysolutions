export interface UrlMapping {
  seoUrl: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const URL_MAPPINGS: UrlMapping[] = [
  {
    seoUrl: '/what-we-do',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    seoUrl: '/who-we-serve',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    seoUrl: '/where-we-are',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    seoUrl: '/join-us',
    changefreq: 'monthly',
    priority: 0.8,
  },
];
