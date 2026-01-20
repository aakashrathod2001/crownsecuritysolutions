import { HeroSectionProps } from '@/types/hero';
import { SectionContent } from '@/types/section';
import { CoreValue } from '@/data/coreValues';
import { ServiceData as ServiceSectionData } from '@/data/serviceSectionData';

export interface ServiceData {
  slug: string;
  label: string;
  title: string;
  description: string;
  targetSegment: string;
  scopeOfWork: string[];
  image: string;
  heroData: HeroSectionProps;
  infoSplitData: SectionContent;
  coreValuesData: CoreValue[];
  coreValuesTitle?: string;
  coreValuesSubtitle?: string;
  serviceSectionData: ServiceSectionData[];
}

export const services: ServiceData[] = [
  {
    slug: 'corporate-park-security',
    label: "SERVICE 01",
    title: "Corporate Park Security Services",
    description: "Crown's Corporate Park Security solutions are designed to protect large office complexes while maintaining a professional and welcoming environment. Our trained personnel manage access points, visitor verification, vehicle checks, and CCTV surveillance with precision and discretion.",
    targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
    scopeOfWork: [
      "Visitor verification and employee ID checks.",
      "Access control and vehicle management.",
      "CCTV monitoring and alarm response coordination.",
      "Fire and emergency drill assistance.",
      "Incident reporting, documentation, and escalation to supervisors."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "Corporate Park Security Services",
      },
      content: {
        title: "Corporate Park Security Services",
        description: "Crown's Corporate Park Security solutions are designed to protect large office complexes while maintaining a professional and welcoming environment.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 01",
      title: "Corporate Park Security Services",
      subtitle: "",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Corporate Park Security Services",
      paragraphs: [
        "Corporate parks are high-value environments bustling with activity, housing multiple offices, assets, and employees. With constant foot traffic and valuable equipment, these spaces require proactive, technology-driven security, not just passive surveillance."
      ]
    },
    coreValuesData: [
      {
        id: "professionalism",
        title: "Professionalism",
        description: "Maintaining the highest standards of professional conduct in corporate environments.",
        iconColor: "#EF4444",
      },
      {
        id: "discretion",
        title: "Discretion",
        description: "Handling sensitive corporate information with complete confidentiality.",
        iconColor: "#EF4444",
      },
      {
        id: "reliability",
        title: "Reliability",
        description: "Ensuring 24/7 protection for corporate assets and personnel.",
        iconColor: "#EF4444",
      },
      {
        id: "compliance",
        title: "Compliance",
        description: "Adhering to corporate security protocols and regulatory requirements.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Corporate Security",
    coreValuesSubtitle: "Excellence in professional security services",
    serviceSectionData: [],
  },
  {
    slug: 'escort-services',
    label: "SERVICE 02",
    title: "Escort Services",
    description: "Crown provides professional escort services for secure transportation of valuables, personnel, and high-risk cargo. Our trained escorts ensure safe transit with real-time monitoring and emergency response capabilities.",
    targetSegment: "Banks, Financial Institutions, and High-Value Transport.",
    scopeOfWork: [
      "Personal security escort for VIPs.",
      "Cash and valuables transportation.",
      "High-risk cargo protection.",
      "Real-time GPS monitoring.",
      "Emergency response coordination."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "Escort Services",
      },
      content: {
        title: "Escort Services",
        description: "Crown provides professional escort services for secure transportation of valuables, personnel, and high-risk cargo.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 02",
      title: "Escort Services",
      subtitle: "Target Segment: Banks, Financial Institutions, and High-Value Transport.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "Escort Services",
      paragraphs: [
        "Crown provides professional escort services for secure transportation of valuables, personnel, and high-risk cargo. Our trained escorts ensure safe transit with real-time monitoring and emergency response capabilities."
      ]
    },
    coreValuesData: [
      {
        id: "secure-transport",
        title: "Secure Transport",
        description: "Ensuring safe transportation of valuables and personnel.",
        iconColor: "#EF4444",
      },
      {
        id: "real-time-monitoring",
        title: "Real-Time Monitoring",
        description: "Continuous tracking and monitoring during transit.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency-response",
        title: "Emergency Response",
        description: "Rapid response to any security incidents during transport.",
        iconColor: "#EF4444",
      },
      {
        id: "professional-training",
        title: "Professional Training",
        description: "Highly trained security personnel for escort duties.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Escort Services",
    coreValuesSubtitle: "Securing transportation and valuables",
    serviceSectionData: [],
  },
  {
    slug: 'hospitality-services',
    label: "SERVICE 03",
    title: "Hospitality Services",
    description: "Crown delivers comprehensive security solutions for hotels, resorts, and hospitality establishments. Our services ensure guest safety, protect property assets, and maintain a welcoming environment for all visitors.",
    targetSegment: "Hotels, Resorts, and Hospitality Establishments.",
    scopeOfWork: [
      "Guest safety and security.",
      "Property and asset protection.",
      "Access control and key management.",
      "Emergency response and evacuation procedures.",
      "24/7 front desk and concierge support."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "Hospitality Services",
      },
      content: {
        title: "Hospitality Services",
        description: "Crown delivers comprehensive security solutions for hotels, resorts, and hospitality establishments.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 03",
      title: "Hospitality Services",
      subtitle: "Target Segment: Hotels, Resorts, and Hospitality Establishments.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Hospitality Services",
      paragraphs: [
        "Crown delivers comprehensive security solutions for hotels, resorts, and hospitality establishments. Our services ensure guest safety, protect property assets, and maintain a welcoming environment for all visitors."
      ]
    },
    coreValuesData: [
      {
        id: "guest-safety",
        title: "Guest Safety",
        description: "Ensuring the safety and security of all guests and visitors.",
        iconColor: "#EF4444",
      },
      {
        id: "property-protection",
        title: "Property Protection",
        description: "Comprehensive protection of hospitality property and assets.",
        iconColor: "#EF4444",
      },
      {
        id: "customer-service",
        title: "Customer Service",
        description: "Maintaining excellent customer service standards.",
        iconColor: "#EF4444",
      },
      {
        id: "discretion",
        title: "Discretion",
        description: "Handling security matters with complete discretion.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Hospitality Security",
    coreValuesSubtitle: "Protecting hospitality establishments",
    serviceSectionData: [],
  },
  {
    slug: 'industrial-security',
    label: "SERVICE 04",
    title: "Industrial Security",
    description: "Crown specializes in industrial security for manufacturing facilities, warehouses, and industrial complexes. Our solutions protect valuable assets, equipment, and personnel with advanced security systems and trained professionals.",
    targetSegment: "Manufacturing Facilities, Warehouses, and Industrial Complexes.",
    scopeOfWork: [
      "Asset protection and inventory control.",
      "Equipment and machinery security.",
      "Fire prevention and safety monitoring.",
      "24/7 facility monitoring and access control.",
      "Emergency response and incident management."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "Industrial Security",
      },
      content: {
        title: "Industrial Security",
        description: "Crown specializes in industrial security for manufacturing facilities, warehouses, and industrial complexes.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 04",
      title: "Industrial Security",
      subtitle: "Target Segment: Manufacturing Facilities, Warehouses, and Industrial Complexes.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "Industrial Security",
      paragraphs: [
        "Crown specializes in industrial security for manufacturing facilities, warehouses, and industrial complexes. Our solutions protect valuable assets, equipment, and personnel with advanced security systems and trained professionals."
      ]
    },
    coreValuesData: [
      {
        id: "asset-protection",
        title: "Asset Protection",
        description: "Comprehensive protection of industrial assets and equipment.",
        iconColor: "#EF4444",
      },
      {
        id: "safety-monitoring",
        title: "Safety Monitoring",
        description: "Continuous monitoring of safety protocols and procedures.",
        iconColor: "#EF4444",
      },
      {
        id: "risk-mitigation",
        title: "Risk Mitigation",
        description: "Proactive risk assessment and mitigation strategies.",
        iconColor: "#EF4444",
      },
      {
        id: "compliance",
        title: "Compliance",
        description: "Adherence to industrial safety and security standards.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Industrial Security",
    coreValuesSubtitle: "Securing industrial operations",
    serviceSectionData: [],
  },
  {
    slug: 'logistics-security',
    label: "SERVICE 05",
    title: "Logistics Security",
    description: "Crown provides specialized security solutions for logistics and supply chain operations. Our services protect cargo, warehouses, and transportation hubs with advanced monitoring and risk mitigation strategies.",
    targetSegment: "Logistics Companies, Warehouses, and Distribution Centers.",
    scopeOfWork: [
      "Cargo protection and monitoring.",
      "Warehouse security and access control.",
      "Supply chain risk assessment.",
      "Theft prevention and loss mitigation.",
      "Real-time cargo tracking and surveillance."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "Logistics Security",
      },
      content: {
        title: "Logistics Security",
        description: "Crown provides specialized security solutions for logistics and supply chain operations.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 05",
      title: "Logistics Security",
      subtitle: "Target Segment: Logistics Companies, Warehouses, and Distribution Centers.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Logistics Security",
      paragraphs: [
        "Crown provides specialized security solutions for logistics and supply chain operations. Our services protect cargo, warehouses, and transportation hubs with advanced monitoring and risk mitigation strategies."
      ]
    },
    coreValuesData: [
      {
        id: "cargo-protection",
        title: "Cargo Protection",
        description: "Comprehensive protection of goods and cargo in transit.",
        iconColor: "#EF4444",
      },
      {
        id: "supply-chain-security",
        title: "Supply Chain Security",
        description: "Securing the entire supply chain from end to end.",
        iconColor: "#EF4444",
      },
      {
        id: "risk-assessment",
        title: "Risk Assessment",
        description: "Continuous risk assessment and mitigation planning.",
        iconColor: "#EF4444",
      },
      {
        id: "loss-prevention",
        title: "Loss Prevention",
        description: "Preventing theft and loss in logistics operations.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Logistics Security",
    coreValuesSubtitle: "Securing supply chains and logistics",
    serviceSectionData: [],
  },
  {
    slug: 'mall-security',
    label: "SERVICE 06",
    title: "Mall Security",
    description: "Crown offers comprehensive security solutions for shopping malls and retail complexes. Our services ensure customer safety, protect retail assets, and maintain a secure shopping environment for all visitors.",
    targetSegment: "Shopping Malls, Retail Complexes, and Commercial Centers.",
    scopeOfWork: [
      "Customer safety and crowd management.",
      "Asset protection and loss prevention.",
      "Access control and parking security.",
      "Emergency response and evacuation procedures.",
      "24/7 surveillance and monitoring."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "Mall Security",
      },
      content: {
        title: "Mall Security",
        description: "Crown offers comprehensive security solutions for shopping malls and retail complexes.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 06",
      title: "Mall Security",
      subtitle: "Target Segment: Shopping Malls, Retail Complexes, and Commercial Centers.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "Mall Security",
      paragraphs: [
        "Crown offers comprehensive security solutions for shopping malls and retail complexes. Our services ensure customer safety, protect retail assets, and maintain a secure shopping environment for all visitors."
      ]
    },
    coreValuesData: [
      {
        id: "customer-safety",
        title: "Customer Safety",
        description: "Ensuring safe shopping environments for all customers.",
        iconColor: "#EF4444",
      },
      {
        id: "crowd-management",
        title: "Crowd Management",
        description: "Expert handling of large crowds in commercial spaces.",
        iconColor: "#EF4444",
      },
      {
        id: "asset-protection",
        title: "Asset Protection",
        description: "Protection of retail assets and inventory.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency-preparedness",
        title: "Emergency Preparedness",
        description: "Preparedness for emergencies and evacuation procedures.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Mall Security",
    coreValuesSubtitle: "Securing commercial spaces",
    serviceSectionData: [],
  },
  {
    slug: 'high-end-residential-security',
    label: "SERVICE 07",
    title: "High-End Residential Security",
    description: "Crown provides premium security solutions for luxury residences, gated communities, and high-end properties. Our discreet and professional services ensure privacy, protection, and peace of mind for discerning clients.",
    targetSegment: "Luxury Residences, Gated Communities, and High-End Properties.",
    scopeOfWork: [
      "24/7 residence monitoring and patrols.",
      "Discreet security presence.",
      "Advanced access control systems.",
      "Emergency response and coordination.",
      "Privacy protection and confidentiality."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "High-End Residential Security",
      },
      content: {
        title: "High-End Residential Security",
        description: "Crown provides premium security solutions for luxury residences, gated communities, and high-end properties.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 07",
      title: "High-End Residential Security",
      subtitle: "Target Segment: Luxury Residences, Gated Communities, and High-End Properties.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "High-End Residential Security",
      paragraphs: [
        "Crown provides premium security solutions for luxury residences, gated communities, and high-end properties. Our discreet and professional services ensure privacy, protection, and peace of mind for discerning clients."
      ]
    },
    coreValuesData: [
      {
        id: "discretion",
        title: "Discretion",
        description: "Maintaining complete discretion and privacy for clients.",
        iconColor: "#EF4444",
      },
      {
        id: "premium-service",
        title: "Premium Service",
        description: "Delivering high-end security services with excellence.",
        iconColor: "#EF4444",
      },
      {
        id: "privacy-protection",
        title: "Privacy Protection",
        description: "Protecting client privacy and confidentiality.",
        iconColor: "#EF4444",
      },
      {
        id: "professionalism",
        title: "Professionalism",
        description: "Highest standards of professional security service.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in High-End Residential Security",
    coreValuesSubtitle: "Premium security for discerning clients",
    serviceSectionData: [],
  },
  {
    slug: 'school-security',
    label: "SERVICE 08",
    title: "School Security",
    description: "Crown offers comprehensive security solutions for schools, colleges, and educational institutions. Our services protect students, faculty, and campus facilities while promoting a safe learning environment.",
    targetSegment: "Schools, Colleges, and Educational Institutions.",
    scopeOfWork: [
      "Student and faculty safety management.",
      "Campus access control and monitoring.",
      "Emergency response and evacuation procedures.",
      "Anti-bullying and conflict resolution.",
      "Security education and awareness programs."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "School Security",
      },
      content: {
        title: "School Security",
        description: "Crown offers comprehensive security solutions for schools, colleges, and educational institutions.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 08",
      title: "School Security",
      subtitle: "Target Segment: Schools, Colleges, and Educational Institutions.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "School Security",
      paragraphs: [
        "Crown offers comprehensive security solutions for schools, colleges, and educational institutions. Our services protect students, faculty, and campus facilities while promoting a safe learning environment."
      ]
    },
    coreValuesData: [
      {
        id: "student-safety",
        title: "Student Safety",
        description: "Creating safe environments for student learning and development.",
        iconColor: "#EF4444",
      },
      {
        id: "campus-security",
        title: "Campus Security",
        description: "Comprehensive security coverage for educational facilities.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency-preparedness",
        title: "Emergency Preparedness",
        description: "Preparedness for various emergency situations and responses.",
        iconColor: "#EF4444",
      },
      {
        id: "community-engagement",
        title: "Community Engagement",
        description: "Working with school communities to enhance security.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in School Security",
    coreValuesSubtitle: "Securing educational institutions",
    serviceSectionData: [],
  },
  {
    slug: 'event-security',
    label: "SERVICE 09",
    title: "Event Security",
    description: "Crown provides comprehensive event security solutions for conferences, concerts, sports events, and corporate gatherings. Our experienced team ensures crowd management, access control, and emergency response while maintaining a positive atmosphere for attendees.",
    targetSegment: "Event Organizers, Venues, Corporate Events, and Public Gatherings.",
    scopeOfWork: [
      "Crowd control and flow management.",
      "Access control and ticket verification.",
      "Emergency response and medical coordination.",
      "VIP protection and secure transportation.",
      "Post-event security debriefing and reporting."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "Event Security",
      },
      content: {
        title: "Event Security",
        description: "Crown provides comprehensive event security solutions for conferences, concerts, sports events, and corporate gatherings.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 09",
      title: "Event Security",
      subtitle: "Target Segment: Event Organizers, Venues, Corporate Events, and Public Gatherings.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Event Security",
      paragraphs: [
        "Crown provides comprehensive event security solutions for conferences, concerts, sports events, and corporate gatherings. Our experienced team ensures crowd management, access control, and emergency response while maintaining a positive atmosphere for attendees."
      ]
    },
    coreValuesData: [
      {
        id: "crowd-management",
        title: "Crowd Management",
        description: "Expert handling of large crowds while maintaining safety and order.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency-response",
        title: "Emergency Response",
        description: "Rapid and effective response to any security incidents during events.",
        iconColor: "#EF4444",
      },
      {
        id: "coordination",
        title: "Coordination",
        description: "Seamless coordination with event organizers and local authorities.",
        iconColor: "#EF4444",
      },
      {
        id: "discretion",
        title: "Discretion",
        description: "Maintaining privacy and professionalism in high-profile event settings.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Event Security",
    coreValuesSubtitle: "Ensuring safety and excellence in every event",
    serviceSectionData: [],
  },
  {
    slug: 'security-convoy-services',
    label: "SERVICE 10",
    title: "Security Convoy Services",
    description: "Crown provides armored convoy services for secure transportation of high-value cargo, personnel, and sensitive materials. Our professional teams ensure safe transit with advanced security protocols and real-time coordination.",
    targetSegment: "High-Value Transport, Government Agencies, and Corporate Clients.",
    scopeOfWork: [
      "Armored vehicle transportation.",
      "Multi-vehicle convoy protection.",
      "Route planning and risk assessment.",
      "Real-time communication and monitoring.",
      "Emergency response and backup coordination."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "Security Convoy Services",
      },
      content: {
        title: "Security Convoy Services",
        description: "Crown provides armored convoy services for secure transportation of high-value cargo, personnel, and sensitive materials.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 10",
      title: "Security Convoy Services",
      subtitle: "Target Segment: High-Value Transport, Government Agencies, and Corporate Clients.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "Security Convoy Services",
      paragraphs: [
        "Crown provides armored convoy services for secure transportation of high-value cargo, personnel, and sensitive materials. Our professional teams ensure safe transit with advanced security protocols and real-time coordination."
      ]
    },
    coreValuesData: [
      {
        id: "armored-protection",
        title: "Armored Protection",
        description: "Armored vehicles and personnel for maximum security.",
        iconColor: "#EF4444",
      },
      {
        id: "convoy-formation",
        title: "Convoy Formation",
        description: "Professional convoy formation and coordination.",
        iconColor: "#EF4444",
      },
      {
        id: "route-security",
        title: "Route Security",
        description: "Securing transportation routes and assessing risks.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency-preparedness",
        title: "Emergency Preparedness",
        description: "Preparedness for any security incidents during transit.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Security Convoy Services",
    coreValuesSubtitle: "Securing high-value transportation",
    serviceSectionData: [],
  },
  {
    slug: 'vip-protection-personal-escort-security',
    label: "SERVICE 11",
    title: "VIP Protection / Personal Escort Security",
    description: "Crown delivers elite personal security and VIP protection services for high-profile individuals, celebrities, and executives. Our discreet and professional teams ensure complete safety and privacy for our clients.",
    targetSegment: "High-Profile Individuals, Celebrities, and Corporate Executives.",
    scopeOfWork: [
      "Personal bodyguard services.",
      "Residential and event security.",
      "Travel security and coordination.",
      "Threat assessment and planning.",
      "Emergency medical coordination."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "VIP Protection / Personal Escort Security",
      },
      content: {
        title: "VIP Protection / Personal Escort Security",
        description: "Crown delivers elite personal security and VIP protection services for high-profile individuals, celebrities, and executives.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 11",
      title: "VIP Protection / Personal Escort Security",
      subtitle: "Target Segment: High-Profile Individuals, Celebrities, and Corporate Executives.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "VIP Protection / Personal Escort Security",
      paragraphs: [
        "Crown delivers elite personal security and VIP protection services for high-profile individuals, celebrities, and executives. Our discreet and professional teams ensure complete safety and privacy for our clients."
      ]
    },
    coreValuesData: [
      {
        id: "elite-protection",
        title: "Elite Protection",
        description: "Providing the highest level of personal security.",
        iconColor: "#EF4444",
      },
      {
        id: "discretion",
        title: "Discretion",
        description: "Maintaining complete discretion and privacy.",
        iconColor: "#EF4444",
      },
      {
        id: "professionalism",
        title: "Professionalism",
        description: "Highest standards of professional security service.",
        iconColor: "#EF4444",
      },
      {
        id: "threat-assessment",
        title: "Threat Assessment",
        description: "Continuous threat assessment and risk management.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in VIP Protection",
    coreValuesSubtitle: "Elite security for distinguished clients",
    serviceSectionData: [],
  },
  {
    slug: 'cctv-monitoring-alarm-response-services',
    label: "SERVICE 12",
    title: "CCTV Monitoring & Alarm Response Services",
    description: "Crown provides 24/7 CCTV monitoring and alarm response services with advanced surveillance technology and rapid response teams. Our centralized monitoring centers ensure immediate action on security threats.",
    targetSegment: "Commercial Buildings, Residential Complexes, and Security Systems.",
    scopeOfWork: [
      "24/7 CCTV monitoring and surveillance.",
      "Alarm system monitoring and response.",
      "Centralized control room operations.",
      "Rapid response team deployment.",
      "Incident documentation and reporting."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "CCTV Monitoring & Alarm Response Services",
      },
      content: {
        title: "CCTV Monitoring & Alarm Response Services",
        description: "Crown provides 24/7 CCTV monitoring and alarm response services with advanced surveillance technology and rapid response teams.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 12",
      title: "CCTV Monitoring & Alarm Response Services",
      subtitle: "Target Segment: Commercial Buildings, Residential Complexes, and Security Systems.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "CCTV Monitoring & Alarm Response Services",
      paragraphs: [
        "Crown provides 24/7 CCTV monitoring and alarm response services with advanced surveillance technology and rapid response teams. Our centralized monitoring centers ensure immediate action on security threats."
      ]
    },
    coreValuesData: [
      {
        id: "24-7-monitoring",
        title: "24/7 Monitoring",
        description: "Round-the-clock surveillance and monitoring services.",
        iconColor: "#EF4444",
      },
      {
        id: "rapid-response",
        title: "Rapid Response",
        description: "Immediate response to security alarms and incidents.",
        iconColor: "#EF4444",
      },
      {
        id: "advanced-technology",
        title: "Advanced Technology",
        description: "Utilizing the latest surveillance and monitoring technology.",
        iconColor: "#EF4444",
      },
      {
        id: "incident-management",
        title: "Incident Management",
        description: "Professional incident documentation and management.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in CCTV Monitoring",
    coreValuesSubtitle: "Advanced surveillance and response services",
    serviceSectionData: [],
  },
  {
    slug: 'access-control-management',
    label: "SERVICE 13",
    title: "Access Control Management",
    description: "Crown implements comprehensive access control systems for buildings, facilities, and restricted areas. Our solutions include biometric authentication, card-based systems, and digital monitoring for secure access management.",
    targetSegment: "Commercial Buildings, Government Facilities, and Secure Premises.",
    scopeOfWork: [
      "Biometric access control systems.",
      "Digital key card and RFID systems.",
      "Access log monitoring and reporting.",
      "System maintenance and upgrades.",
      "Emergency access protocols."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "Access Control Management",
      },
      content: {
        title: "Access Control Management",
        description: "Crown implements comprehensive access control systems for buildings, facilities, and restricted areas.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 13",
      title: "Access Control Management",
      subtitle: "Target Segment: Commercial Buildings, Government Facilities, and Secure Premises.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Access Control Management",
      paragraphs: [
        "Crown implements comprehensive access control systems for buildings, facilities, and restricted areas. Our solutions include biometric authentication, card-based systems, and digital monitoring for secure access management."
      ]
    },
    coreValuesData: [
      {
        id: "secure-access",
        title: "Secure Access",
        description: "Ensuring only authorized personnel gain access.",
        iconColor: "#EF4444",
      },
      {
        id: "advanced-technology",
        title: "Advanced Technology",
        description: "Implementing cutting-edge access control technology.",
        iconColor: "#EF4444",
      },
      {
        id: "monitoring-reporting",
        title: "Monitoring & Reporting",
        description: "Continuous monitoring and detailed access reporting.",
        iconColor: "#EF4444",
      },
      {
        id: "system-integration",
        title: "System Integration",
        description: "Seamless integration with existing security systems.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Access Control",
    coreValuesSubtitle: "Secure and efficient access management",
    serviceSectionData: [],
  },
  {
    slug: 'fire-safety-emergency-drill-support',
    label: "SERVICE 14",
    title: "Fire Safety & Emergency Drill Support",
    description: "Crown provides fire safety services and emergency drill support for buildings and facilities. Our trained professionals conduct fire safety assessments, evacuation drills, and emergency preparedness training.",
    targetSegment: "Commercial Buildings, Residential Complexes, and Public Facilities.",
    scopeOfWork: [
      "Fire safety assessments and audits.",
      "Emergency evacuation drill coordination.",
      "Fire prevention training programs.",
      "Emergency response planning.",
      "Equipment maintenance and inspection."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "Fire Safety & Emergency Drill Support",
      },
      content: {
        title: "Fire Safety & Emergency Drill Support",
        description: "Crown provides fire safety services and emergency drill support for buildings and facilities.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 14",
      title: "Fire Safety & Emergency Drill Support",
      subtitle: "Target Segment: Commercial Buildings, Residential Complexes, and Public Facilities.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "Fire Safety & Emergency Drill Support",
      paragraphs: [
        "Crown provides fire safety services and emergency drill support for buildings and facilities. Our trained professionals conduct fire safety assessments, evacuation drills, and emergency preparedness training."
      ]
    },
    coreValuesData: [
      {
        id: "fire-safety",
        title: "Fire Safety",
        description: "Comprehensive fire safety assessment and prevention.",
        iconColor: "#EF4444",
      },
      {
        id: "emergency-preparedness",
        title: "Emergency Preparedness",
        description: "Preparing facilities for emergencies and evacuations.",
        iconColor: "#EF4444",
      },
      {
        id: "training-education",
        title: "Training & Education",
        description: "Educating personnel on fire safety and emergency procedures.",
        iconColor: "#EF4444",
      },
      {
        id: "compliance",
        title: "Compliance",
        description: "Ensuring compliance with fire safety regulations.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Fire Safety",
    coreValuesSubtitle: "Protecting lives and property from fire hazards",
    serviceSectionData: [],
  },
  {
    slug: 'gate-pass-and-vehicle-movement-verification-logistics-industrial',
    label: "SERVICE 15",
    title: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
    description: "Crown provides gate-pass and vehicle movement verification services for logistics and industrial facilities. Our systems ensure secure access control, vehicle verification, and movement tracking for enhanced security.",
    targetSegment: "Logistics Facilities, Industrial Complexes, and Secure Premises.",
    scopeOfWork: [
      "Gate-pass system implementation.",
      "Vehicle registration and verification.",
      "Movement tracking and logging.",
      "Access control for delivery vehicles.",
      "Security clearance procedures."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
      },
      content: {
        title: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
        description: "Crown provides gate-pass and vehicle movement verification services for logistics and industrial facilities.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 15",
      title: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
      subtitle: "Target Segment: Logistics Facilities, Industrial Complexes, and Secure Premises.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Gate-Pass and Vehicle Movement Verification (Logistics/Industrial)",
      paragraphs: [
        "Crown provides gate-pass and vehicle movement verification services for logistics and industrial facilities. Our systems ensure secure access control, vehicle verification, and movement tracking for enhanced security."
      ]
    },
    coreValuesData: [
      {
        id: "access-control",
        title: "Access Control",
        description: "Strict access control for vehicles and personnel.",
        iconColor: "#EF4444",
      },
      {
        id: "vehicle-verification",
        title: "Vehicle Verification",
        description: "Thorough verification of vehicles and drivers.",
        iconColor: "#EF4444",
      },
      {
        id: "movement-tracking",
        title: "Movement Tracking",
        description: "Comprehensive tracking of vehicle movements.",
        iconColor: "#EF4444",
      },
      {
        id: "security-clearance",
        title: "Security Clearance",
        description: "Rigorous security clearance procedures.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Gate-Pass Services",
    coreValuesSubtitle: "Secure vehicle and personnel access management",
    serviceSectionData: [],
  },
  {
    slug: 'cargo-integrity-audits-logistics-security',
    label: "SERVICE 16",
    title: "Cargo Integrity Audits (Logistics Security)",
    description: "Crown conducts comprehensive cargo integrity audits for logistics and transportation companies. Our services ensure cargo security, prevent tampering, and maintain supply chain integrity throughout the transportation process.",
    targetSegment: "Logistics Companies, Transportation Firms, and Supply Chain Operators.",
    scopeOfWork: [
      "Cargo inspection and verification.",
      "Seal integrity checks.",
      "Documentation and record keeping.",
      "Tamper detection and prevention.",
      "Quality assurance audits."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "Cargo Integrity Audits (Logistics Security)",
      },
      content: {
        title: "Cargo Integrity Audits (Logistics Security)",
        description: "Crown conducts comprehensive cargo integrity audits for logistics and transportation companies.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 16",
      title: "Cargo Integrity Audits (Logistics Security)",
      subtitle: "Target Segment: Logistics Companies, Transportation Firms, and Supply Chain Operators.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "Cargo Integrity Audits (Logistics Security)",
      paragraphs: [
        "Crown conducts comprehensive cargo integrity audits for logistics and transportation companies. Our services ensure cargo security, prevent tampering, and maintain supply chain integrity throughout the transportation process."
      ]
    },
    coreValuesData: [
      {
        id: "cargo-security",
        title: "Cargo Security",
        description: "Ensuring the security and integrity of cargo.",
        iconColor: "#EF4444",
      },
      {
        id: "tamper-prevention",
        title: "Tamper Prevention",
        description: "Preventing unauthorized access and tampering.",
        iconColor: "#EF4444",
      },
      {
        id: "quality-assurance",
        title: "Quality Assurance",
        description: "Maintaining high standards of cargo handling.",
        iconColor: "#EF4444",
      },
      {
        id: "documentation",
        title: "Documentation",
        description: "Comprehensive documentation and audit trails.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Cargo Integrity",
    coreValuesSubtitle: "Securing supply chains and cargo integrity",
    serviceSectionData: [],
  },
  {
    slug: 'perimeter-patrolling-ppe-compliance-industrial-security',
    label: "SERVICE 17",
    title: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
    description: "Crown provides perimeter patrolling services and PPE compliance monitoring for industrial facilities. Our trained security personnel ensure facility security and enforce safety protocols for worker protection.",
    targetSegment: "Industrial Facilities, Manufacturing Plants, and Construction Sites.",
    scopeOfWork: [
      "Perimeter security patrols.",
      "PPE compliance monitoring.",
      "Safety protocol enforcement.",
      "Security breach prevention.",
      "Incident reporting and documentation."
    ],
    image: "/images/services/service-1.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-1.png",
        alt: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
      },
      content: {
        title: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
        description: "Crown provides perimeter patrolling services and PPE compliance monitoring for industrial facilities.",
        buttons: [
          {
            text: "Find Out More",
            variant: "primary",
            iconBgColor: "#F6292F",
            href: "#",
          },
        ],
      },
      overlay: {
        enabled: true,
        color: '#252929',
        opacity: 0.6,
      },
      contentPosition: 'left',
      minHeight: '600px',
    },
    infoSplitData: {
      label: "SERVICE 17",
      title: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
      subtitle: "Target Segment: Industrial Facilities, Manufacturing Plants, and Construction Sites.",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Perimeter Patrolling & PPE Compliance (Industrial Security)",
      paragraphs: [
        "Crown provides perimeter patrolling services and PPE compliance monitoring for industrial facilities. Our trained security personnel ensure facility security and enforce safety protocols for worker protection."
      ]
    },
    coreValuesData: [
      {
        id: "perimeter-security",
        title: "Perimeter Security",
        description: "Comprehensive perimeter protection and monitoring.",
        iconColor: "#EF4444",
      },
      {
        id: "safety-compliance",
        title: "Safety Compliance",
        description: "Ensuring compliance with safety regulations and PPE requirements.",
        iconColor: "#EF4444",
      },
      {
        id: "patrol-efficiency",
        title: "Patrol Efficiency",
        description: "Efficient and thorough security patrols.",
        iconColor: "#EF4444",
      },
      {
        id: "preventive-security",
        title: "Preventive Security",
        description: "Preventing security breaches and safety incidents.",
        iconColor: "#EF4444",
      },
    ],
    coreValuesTitle: "Our Core Values in Perimeter Security",
    coreValuesSubtitle: "Protecting industrial facilities and ensuring safety compliance",
    serviceSectionData: [],
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return services.find(service => service.slug === slug);
};

// Get all service slugs for static generation
export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};
