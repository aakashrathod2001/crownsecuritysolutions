// app/page.tsx - Enhanced Home Page with SEO
import { Metadata } from 'next';
// import Script from 'next/script';
// import Hero from "@/components/Sections/Home/Hero/Hero";
// import HomeTagline from "@/components/Sections/Home/HomeTagline/HomeTagline";
// import StatsSection from "@/components/Sections/Home/StatsSection/StatsSection";
// import StackedScroll from "@/components/UI/StackedScroll/StackedScroll";
// import BrandsSlider from "@/components/Sections/Home/BrandsSlider/BrandsSlider";
// import PortfolioSection from "@/components/Sections/Home/PortfolioSection/PortfolioSection";
// import TestimonialsSection from "@/components/Sections/Home/TestimonialsSection/TestimonialsSection";
// import PricingSection from "@/components/Sections/Home/PricingSection/PricingSection";
// import FAQSection from "@/components/Sections/FAQSection/FAQSection";
// import { headings } from "@/data/headings";
// import { faqs } from "@/data/faq";
// import SEOStructuredData from "@/components/SEO/SEOStructuredData";


// Generate metadata for home page
export const metadata: Metadata = {
  title: 'Wunderkint Creatives - Professional Design & Development',
  description: 'Transform your business with our expert design and development services. We create stunning brands, websites, and digital solutions that drive results.',
  keywords: 'web design, branding, logo design, website development, digital marketing, professional services',

  // Open Graph
  openGraph: {
    title: 'Wunderkint Creatives - Professional Design & Development',
    description: 'Transform your business with our expert design and development services. We create stunning brands, websites, and digital solutions that drive results.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://crownsecuritysolutions.com',
    siteName: 'Wunderkint Creatives',
    images: [
      {
        url: '/images/seo/homepage-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Wunderkint Creatives - Professional Design & Development',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Wunderkint Creatives - Professional Design & Development',
    description: 'Transform your business with our expert design and development services. We create stunning brands, websites, and digital solutions that drive results.',
    images: ['/images/seo/homepage-og.jpg'],
    creator: '@YourTwitterHandle',
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification tags (add your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://crownsecuritysolutions.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* <SEOStructuredData page="home" />

      <Hero />
      <HomeTagline heading={headings.heroTagline} variant="home" /> */}
      {/* <StackedScroll /> */}
      <div className="bodySectionLayout">
        {/* <StatsSection />
        <BrandsSlider />
        <PortfolioSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection heading={headings.faqSection} items={faqs} />; */}
      </div>
    </>
  );
}