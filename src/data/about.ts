// Removed unused imports - keeping only what's actually used

// ============================================================================
// TYPE DEFINITIONS FOR ABOUT PAGE
// ============================================================================

type InfoSplitSection = {
  title: string;
  body: string;
  cta: {
    text: string;
    href: string;
  };
};

// ============================================================================
// COMPLETE ABOUT PAGE DATA STRUCTURE
// ============================================================================

type AboutSectionData = {
  title: string;
  mainHeading: string;
  subHeading: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

export type CompleteAboutData = {
  // Hero Section
  hero: {
    title: string;
    subtitle?: string;
    showSearch?: boolean;
    showBrandSlider?: boolean;
    videoSrc?: string;
    poster?: string;
  };

  // Main About Section (Figma design)
  aboutSection?: AboutSectionData;

  // Info Split Sections
  infoSplit?: InfoSplitSection[];
};

// ============================================================================
// ABOUT PAGE DATA
// ============================================================================

export const ABOUT_DATA: CompleteAboutData = {
  // Hero & Page Content
  hero: {
    title: "",
    showSearch: false,
    showBrandSlider: false,
  },

  // Main About Section (Figma design)
  aboutSection: {
    title: "About Us",
    mainHeading: "Welcome to Crown Security Agencies",
    subHeading: "India's trusted partner in professional security and manpower management.",
    description: `Established on 1st August 1997, Crown Security Agency has evolved over the past 25+ years into one of India's most trusted and respected security service providers. With a strong foundation built on discipline, integrity, and dedication, Crown has consistently set benchmarks in the private security sector, combining the precision of trained manpower with the efficiency of modern surveillance and risk management systems.

Headquartered in Mumbai, with regional offices across Pune, Bangalore, Delhi, Hyderabad, Chennai, Ahmedabad, and Haryana, Crown Security Agency provides end-to-end security and facility management solutions for businesses and individuals who value safety, reliability, and professionalism.

Our workforce of 2,000+ trained guards, supervisors, and security professionals operates across industries from corporate parks and logistics hubs to high-end residences, educational institutions, and industrial complexes. Every deployment is backed by PSARA compliance, strong operational control, and continuous on-ground supervision to ensure unmatched consistency in service quality.

We believe security today goes beyond physical presence; it's about building assurance through technology, transparency, and human connection. That's why Crown integrates advanced CCTV surveillance, access control systems, and real-time monitoring into its operations, ensuring our clients experience complete peace of mind.

Crown Security Agency stands not only as a service provider but as a strategic partner in protection, a brand that has safeguarded lives, assets, and reputations for over two decades with honor, accountability, and trust.`,
    imageSrc: "/images/specialized-services.png",
    imageAlt: "Specialized Services - Crown Security Agency",
  },

  // Info Split Sections (only keep the first one that's actually used)
  infoSplit: [
    {
      title: "About Us",
      body: `As the name "Wunderkint" suggests, a term that means prodigy, we are a collective of creative minds driven by innovation, imagination, and purpose.\n\n\nOur team is composed of thinkers, designers, storytellers, and strategists who live to redefine how brands express themselves. At Wunderkint, we believe creativity isn't just a skill; it's our DNA. We don't follow trends; we set them. We transform abstract ideas into immersive experiences that make your brand not just visible but unforgettable.\n\n\nEvery brand has a story, and we bring it to life with a touch of magic and a splash of brilliance. We merge strategy with soul, design with data, and creativity with clarity to build narratives that resonate and inspire. With us, your brand doesn't just grow; it evolves into an icon.`,
      cta: {
        text: "Connect with us",
        href: "#",
      },
    },
  ],
};
