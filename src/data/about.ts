// ============================================================================
// TYPE DEFINITIONS FOR ABOUT DATA
// ============================================================================

type AboutSectionContent = {
  label: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
};

export type AboutData = {
  aboutContent: AboutSectionContent;
  homeAboutContent: AboutSectionContent;
};

// ============================================================================
// ABOUT PAGE DATA
// ============================================================================

export const ABOUT_DATA: AboutData = {
  aboutContent: {
    label: "About Us",
    title: "Welcome to\nCrown Security Agencies",
    subtitle:
      "India's trusted partner in professional security and manpower management.",
    imageSrc: "/images/specialized-services.png",
    imageAlt: "Crown Security Agency professional guard",
    paragraphs: [
      "Established on 1st August 1997, Crown Security Agency has evolved over the past 25+ years into one of India's most trusted and respected security service providers. With a strong foundation built on discipline, integrity, and dedication, Crown has consistently set benchmarks in the private security sector, combining the precision of trained manpower with the efficiency of modern surveillance and risk management systems.\n\nHeadquartered in Mumbai, with regional offices across Pune, Bangalore, Delhi, Hyderabad, Chennai, Ahmedabad, and Haryana, Crown Security Agency provides end-to-end security and facility management solutions for businesses and individuals who value safety, reliability, and professionalism.\n\nOur workforce of 2,000+ trained guards, supervisors, and security professionals operates across industries from corporate parks and logistics hubs to high-end residences, educational institutions, and industrial complexes. Every deployment is backed by PSARA compliance, strong operational control, and continuous on-ground supervision to ensure unmatched consistency in service quality.\n\nWe believe security today goes beyond physical presence; it's about building assurance through technology, transparency, and human connection. That's why Crown integrates advanced CCTV surveillance, access control systems, and real-time monitoring into its operations, ensuring our clients experience complete peace of mind.\n\nCrown Security Agency stands not only as a service provider but as a strategic partner in protection, a brand that has safeguarded lives, assets, and reputations for over two decades with honor, accountability, and trust.",
    ],
  },

  homeAboutContent: {
    label: "About Us",
    title: "Welcome to\nCrown Security Agencies",
    subtitle:
      "India's trusted partner in professional security and manpower management.",
    imageSrc: "/images/specialized-services.png",
    imageAlt: "Crown Security Agency professional guard",
    paragraphs: [
      "Established in 1997 by the Late Mr. Mohammad Tanveer Shamnameer Shaikh, Crown Security Agencies (CSA) has expanded from a Mumbai-based business to a PAN-India company that protects assets valued at more than ₹5000 crores. We currently employ 2000+ skilled workers operating in 7 states, combining modern technology with human vigilance.\n\nWith headquarters in Thane and regional presence in Pune, Bangalore, Ahmedabad, Delhi, Chennai, Haryana, and Hyderabad, Crown Security Agency continues to redefine what dependable, compliant, and people-first security truly means.",
    ],
  },
};
