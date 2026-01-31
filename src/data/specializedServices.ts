// ============================================================================
// TYPE DEFINITIONS FOR SPECIALIZED SERVICES
// ============================================================================

export type SpecializedService = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkText: string;
  linkUrl: string;
};

export type SpecializedServicesData = {
  services: SpecializedService[];
};

// ============================================================================
// SPECIALIZED SERVICES DATA
// ============================================================================

export const SPECIALIZED_SERVICES_DATA: SpecializedServicesData = {
  services: [
    {
      title: "Corporate Park Security",
      description:
        "Professional, courteous guards ensure safe, seamless operations across corporate offices and business parks through access control, visitor checks, and 24×7 monitoring.",
      imageSrc: "/images/home/services/Corporate Park Security Services.webp",
      imageAlt: "Corporate Park Security services",
      linkText: "Learn More",
      linkUrl: "/services/corporate-park-security",
    },
    {
      title: "Industrial Security",
      description:
        "Comprehensive protection for factories and manufacturing units, focusing on safety compliance, fire prevention, and asset integrity.",
      imageSrc: "/images/home/services/Industrial Security.webp",
      imageAlt: "Industrial Security services",
      linkText: "Learn More",
      linkUrl: "/services/industrial-security",
    },
    {
      title: "Logistics Security",
      description:
        "End-to-end cargo and warehouse protection using access checks, GPS tracking, and real-time inventory monitoring.",
      imageSrc: "/images/home/services/Logistics Security.webp",
      imageAlt: "Logistics Security services",
      linkText: "Learn More",
      linkUrl: "/services/logistics-security",
    },
    {
      title: "School Security",
      description:
        "Child-sensitive, trained guards ensure a safe learning environment through access control, patrols, and emergency readiness.",
      imageSrc: "/images/home/services/School Security.webp",
      imageAlt: "School Security services",
      linkText: "Learn More",
      linkUrl: "/services/school-security",
    },
    {
      title: "Escort Services",
      description:
        "Secure movement of high-value assets, personnel, and consignments with route planning, GPS tracking, and armed/unarmed escorts.",
      imageSrc: "/images/home/services/Escort-Services.webp",
      imageAlt: "Escort Services",
      linkText: "Learn More",
      linkUrl: "/services/escort-services",
    },
    {
      title: "Security Convoy Services",
      description:
        "Armed and GPS-tracked convoys for safe transportation of personnel or valuables through secure routes.",
      imageSrc: "/images/home/services/Security Convoy Services.webp",
      imageAlt: "Security Convoy Services",
      linkText: "Learn More",
      linkUrl: "/services/security-convoy-services",
    },
    {
      title: "Hospitality Security",
      description:
        "Discreet and guest-friendly protection for hotels, resorts, and event venues, maintaining a balance between safety and hospitality.",
      imageSrc: "/images/home/services/Hospitality Services.webp",
      imageAlt: "Hospitality Security services",
      linkText: "Learn More",
      linkUrl: "/services/hospitality-security",
    },
    {
      title: "High-End Residential Security",
      description:
        "Discreet and reliable security for gated communities and luxury residences with visitor verification and night patrols.",
      imageSrc: "/images/home/services/High-End Residential Security.webp",
      imageAlt: "High-End Residential Security",
      linkText: "Learn More",
      linkUrl: "/services/high-end-residential-security",
    },
    {
      title: "VIP Protection / Personal Escort Security",
      description:
        "Discreet close protection for executives and high-profile individuals with trained, professional officers.",
      imageSrc: "/images/home/services/VIP Protection _ Personal Escort Security.webp",
      imageAlt: "VIP Protection services",
      linkText: "Learn More",
      linkUrl: "/services/vip-protection",
    },
    {
      title: "Mall Security",
      description:
        "Trained professionals ensure visitor safety, manage crowd flow, and support retail operations with 24/7 vigilance.",
      imageSrc: "/images/home/services/Mall Security.webp",
      imageAlt: "Mall Security services",
      linkText: "Learn More",
      linkUrl: "/services/mall-security",
    },
    {
      title: "Event Security",
      description:
        "Tailored deployment for events, concerts, and exhibitions — managing entry control, crowd movement, and VIP protection.",
      imageSrc: "/images/home/services/Event Security.webp",
      imageAlt: "Event Security services",
      linkText: "Learn More",
      linkUrl: "/services/event-security",
    },
    {
      title: "CCTV Monitoring & Alarm Response",
      description:
        "Real-time surveillance monitoring and quick on-ground response to incidents using integrated technology systems.",
      imageSrc: "/images/home/services/CCTV Monitoring & Alarm Response Services.webp",
      imageAlt: "CCTV Monitoring services",
      linkText: "Learn More",
      linkUrl: "/services/cctv-monitoring",
    },
    {
      title: "Access Control Management",
      description:
        "Controlled entry and identity verification to prevent unauthorized access and strengthen site security.",
      imageSrc: "/images/home/services/Access Control Management.webp",
      imageAlt: "Access Control Management",
      linkText: "Learn More",
      linkUrl: "/services/access-control-management",
    },
    {
      title: "Fire Safety & Emergency Drill Support",
      description:
        "Fire prevention, evacuation training, and emergency coordination to ensure readiness and safety compliance.",
      imageSrc: "/images/home/services/Fire Safety & Emergency Drill Support.webp",
      imageAlt: "Fire Safety services",
      linkText: "Learn More",
      linkUrl: "/services/fire-safety",
    },
    {
      title: "Gate-Pass & Vehicle Verification",
      description:
        "Strict monitoring of vehicle entry/exit and shipment validation at logistics and industrial sites.",
      imageSrc: "/images/home/services/Gate-Pass and Vehicle Movement Verification (Logistics_Industrial).webp",
      imageAlt: "Gate-Pass & Vehicle Verification",
      linkText: "Learn More",
      linkUrl: "/services/gate-pass-vehicle-verification",
    },
    {
      title: "Cargo Integrity Audits",
      description:
        "Inspection and documentation of cargo seals and manifests to ensure shipment safety and accountability.",
      imageSrc: "/images/home/services/Cargo Integrity Audits (Logistics Security).webp",
      imageAlt: "Cargo Integrity Audits",
      linkText: "Learn More",
      linkUrl: "/services/cargo-integrity-audits",
    },
    {
      title: "Perimeter Patrolling & PPE Compliance",
      description:
        "Regular patrols and safety checks to maintain industrial security and enforce PPE standards.",
      imageSrc: "/images/home/services/Perimeter Patrolling & PPE Compliance (Industrial Security).webp",
      imageAlt: "Perimeter Patrolling services",
      linkText: "Learn More",
      linkUrl: "/services/perimeter-patrolling",
    },
  ],
};
