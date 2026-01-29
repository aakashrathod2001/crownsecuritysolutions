/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Enable ISR (Incremental Static Regeneration) for better performance
  experimental: {
    // Enable static optimization for all pages by default
    optimizeCss: true,
    // Enable font optimization
    optimizeFonts: true,
  },
  // Configure revalidation for ISR
  async rewrites() {
    return [
      // Add any necessary rewrites here
    ];
  },
};

module.exports = nextConfig;
