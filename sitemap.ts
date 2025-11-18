import { MetadataRoute } from 'next';
import { URL_MAPPINGS } from '@/lib/urlMappings';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crownsecuritysolutions.com';
  
  // Generate sitemap entries from URL mappings
  const routes = URL_MAPPINGS.map((mapping) => ({
    url: `${baseUrl}${mapping.seoUrl}`,
    lastModified: new Date(),
    changeFrequency: mapping.changefreq || 'monthly' as const,
    priority: mapping.priority || 0.8,
  }));
  
  // Add static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];
  
  return [...staticPages, ...routes];
}