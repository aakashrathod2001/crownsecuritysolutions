// app/our-process/page.tsx - Enhanced Our Process Page with Metadata
import HeroSection from '@/components/Sections/HeroSection/HeroSection';
import { ourprocesspageHero } from '@/data/heroSections';
import StackedScroll from '@/components/UI/StackedScroll/StackedScroll';
import InfiniteCarousel from '@/components/Sections/InfiniteCarousel/InfiniteCarousel';

// Enable SSG with ISR (revalidate every 1 hour)
export const revalidate = 3600;

export const metadata = {
  title: "Our Security Process | How Crown Security Solutions Works",
  description: "Discover Crown Security Solutions' structured security process, from risk assessment to deployment, ensuring safety and compliance.",
  keywords: ["security process", "security services", "risk assessment", "security deployment", "security compliance", "professional security"],
  alternates: {
    canonical: "/our-process",
  },
  openGraph: {
    title: "Our Security Process | How Crown Security Solutions Works",
    description: "Discover Crown Security Solutions' structured security process, from risk assessment to deployment, ensuring safety and compliance.",
    url: "/our-process",
    images: [
      {
        url: "/images/our-process-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Our Security Process - How Crown Security Solutions Works",
      },
    ],
  },
  twitter: {
    title: "Our Security Process | How Crown Security Solutions Works",
    description: "Discover Crown Security Solutions' structured security process, from risk assessment to deployment, ensuring safety and compliance.",
    images: ["/images/our-process-hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OurProcessPage() {
  return (
    <>
      <HeroSection {...ourprocesspageHero} />
      <StackedScroll showHeader={false} />;
      <InfiniteCarousel
        speed={35}
        direction="left"
        gap={32}
      />;

    </>
  );
}
