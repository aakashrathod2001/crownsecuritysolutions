// app/robots.ts - Dynamic robots.txt
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crownsecuritysolutions.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/404',
          '/500',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'], // Disable ChatGPT crawling if desired
      },
      {
        userAgent: 'CCBot',
        disallow: ['/'], // Disable Common Crawl if desired
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}