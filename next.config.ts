
import type { NextConfig } from "next";
import { generateRewrites } from "@/lib/urlMappings";

const nextConfig: NextConfig = {
  // ✅ Force consistent trailing slashes (recommended for SEO)
  trailingSlash: true,
  
  // Image configuration for external domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "cdn.famekeeda.com",
      },
      {
        protocol: "https",
        hostname: "cdn.crownsecuritysolutions.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Add other image domains you use
    ],
    // Allow SVG images from external sources
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Image optimization settings
    qualities: [75, 85, 90, 100],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // URL rewrites for SEO-friendly URLs
  async rewrites() {
    return generateRewrites();
  },

  // Optional: Add redirects for old URLs if you had them live before
  // async redirects() {
  //   return [
  //     {
  //       source: '/services/logo-design',
  //       destination: '/beautiful-logo-designs',
  //       permanent: true, // 301 redirect
  //     },
  //   ];
  // },
};

export default nextConfig;
