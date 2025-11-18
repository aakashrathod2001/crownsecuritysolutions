// app/sitemap.ts - Dynamic sitemap from URL mappings
import { MetadataRoute } from 'next'
import { URL_MAPPINGS } from '@/lib/urlMappings'
import { CATEGORY_SLUGS } from '@/data/categoryPages/categorySlugs'
import { SERVICE_SLUGS } from '@/data/servicePages/serviceSlugs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crownsecuritysolutions.com'
  
  // Base pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]

  // SEO-friendly URLs from mappings
  const mappingPages: MetadataRoute.Sitemap = URL_MAPPINGS.map((mapping) => ({
    url: `${baseUrl}${mapping.seoUrl}`,
    lastModified: new Date(),
    changeFrequency: mapping.changefreq || 'monthly',
    priority: mapping.priority || 0.8,
  }))

  // Original category and service URLs (lower priority)
  const categoryPages: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6, // Lower priority since SEO URLs are preferred
  }))

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/service/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6, // Lower priority since SEO URLs are preferred
  }))

  return [
    ...staticPages,
    ...mappingPages,
    ...categoryPages,
    ...servicePages,
  ]
}