// app/services/page.tsx - Enhanced Services Page with Metadata
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import ServiceSection from '@/components/Sections/ServiceSection/ServiceSection';
import { servicespageHero } from '@/data/heroSections';
import { serviceData } from '@/data/serviceSectionData';
import styles from './page.module.scss';
import InfiniteCarousel from '@/components/Sections/InfiniteCarousel/InfiniteCarousel';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "Security Services | Corporate, Industrial & Residential",
  description: "Explore Crown Security Solutions' full range of security services, including corporate, industrial, residential, logistics, and event security.",
  keywords: ["security services", "corporate security", "industrial security", "residential security", "logistics security", "event security", "security solutions"],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Security Services | Corporate, Industrial & Residential",
    description: "Explore Crown Security Solutions' full range of security services, including corporate, industrial, residential, logistics, and event security.",
    url: "/services",
    images: [
      {
        url: "/images/services/service-1.png",
        width: 1200,
        height: 630,
        alt: "Security Services - Corporate, Industrial & Residential",
      },
    ],
  },
  twitter: {
    title: "Security Services | Corporate, Industrial & Residential",
    description: "Explore Crown Security Solutions' full range of security services, including corporate, industrial, residential, logistics, and event security.",
    images: ["/images/services/service-1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
    return (
        <>
            <HeroSection {...servicespageHero} />
            <div className={styles.pageLayout}>
                {serviceData.map((service, index) => (
                    <ServiceSection 
                        key={index}
                        variant={index % 2 === 1 ? 'right' : undefined} 
                        service={service}
                        showScopeTitle={true}
                    />
                ))}
                <InfiniteCarousel
                    speed={35}
                    direction="left"
                    gap={32}
                />;
            </div>
        </>
    );
}
