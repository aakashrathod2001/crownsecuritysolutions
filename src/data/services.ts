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
    title: "Corporate Park Security",
    description: "Crown's Corporate Park Security solutions are designed to protect large office complexes while maintaining a professional and welcoming environment. Our trained personnel manage access points, visitor verification, vehicle checks, and CCTV surveillance with precision and discretion. Every site operates on clearly defined SOPs, regular audits, and emergency response drills to ensure smooth business continuity. With a customer-focused approach, we combine strong deterrence with courteous service that ensures all employees, clients, and visitors feel safe and valued within your premises.",
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
        alt: "Corporate Park Security",
      },
      content: {
        title: "Corporate Park Security",
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
      label: "Our Services",
      title: "Corporate Park Security Services",
      subtitle: "",
      imageSrc: "/images/services/service-1.png",
      imageAlt: "Corporate Park Security",
      paragraphs: [
        "Corporate parks are high-value environments bustling with activity, housing multiple offices, assets, and employees. With constant foot traffic and valuable equipment, these spaces require proactive, technology-driven security, not just passive surveillance.\n\nAt Crown Security Agencies (CSA), we specialize in Corporate Park Security Services designed to ensure complete safety, operational discipline, and peace of mind. With over 25 years of experience across India, our team combines skilled manpower and advanced monitoring systems to protect every corner of your corporate premises."
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
    serviceSectionData: [
      {
        label: "SERVICE 01",
        title: "Corporate Park Security - Access Control",
        description: "Our access control systems ensure only authorized personnel enter your corporate premises. We implement advanced card-based systems, biometric authentication, and digital logging to maintain complete security.",
        targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
        scopeOfWork: [
          "Digital access control systems implementation",
          "Biometric and card-based authentication",
          "24/7 access monitoring and logging",
          "Emergency access protocols"
        ],
        image: "/images/services/service-1.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/corporate-park-security"
          }
        ]
      },
      {
        label: "SERVICE 02",
        title: "Corporate Park Security - Surveillance",
        description: "Comprehensive CCTV surveillance systems with AI-powered monitoring to detect and respond to security threats in real-time across your corporate campus.",
        targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
        scopeOfWork: [
          "HD CCTV camera installation",
          "AI-powered motion detection",
          "Centralized monitoring stations",
          "24/7 surveillance coverage"
        ],
        image: "/images/services/service-2.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/corporate-park-security"
          }
        ]
      },
      {
        label: "SERVICE 03",
        title: "Corporate Park Security - Emergency Response",
        description: "Rapid emergency response teams trained to handle any security incident, medical emergency, or fire evacuation with precision and coordination.",
        targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
        scopeOfWork: [
          "Emergency response team deployment",
          "Fire evacuation coordination",
          "Medical emergency handling",
          "Incident documentation and reporting"
        ],
        image: "/images/services/service-1.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/corporate-park-security"
          }
        ]
      },
      {
        label: "SERVICE 04",
        title: "Corporate Park Security - Professional Staff",
        description: "Highly trained security professionals who maintain professional conduct while ensuring the safety and security of your corporate environment.",
        targetSegment: "MNCs, IT Parks, Business Parks, and Corporate Offices.",
        scopeOfWork: [
          "Certified security personnel",
          "Professional conduct training",
          "Customer service excellence",
          "Regular performance evaluations"
        ],
        image: "/images/services/service-2.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/corporate-park-security"
          }
        ]
      }
    ],
  },
  {
    slug: 'event-security',
    label: "SERVICE 02",
    title: "Event Security Services",
    description: "Crown provides comprehensive event security solutions for conferences, concerts, sports events, and corporate gatherings. Our experienced team ensures crowd management, access control, and emergency response while maintaining a positive atmosphere for attendees. We coordinate with local authorities, implement layered security protocols, and deploy trained personnel to handle any situation with professionalism and discretion.",
    targetSegment: "Event Organizers, Venues, Corporate Events, and Public Gatherings.",
    scopeOfWork: [
      "Crowd control and flow management.",
      "Access control and ticket verification.",
      "Emergency response and medical coordination.",
      "VIP protection and secure transportation.",
      "Post-event security debriefing and reporting."
    ],
    image: "/images/services/service-2.png",
    heroData: {
      media: {
        type: 'image',
        src: "/images/services/service-2.png",
        alt: "Event Security Services",
      },
      content: {
        title: "Event Security Services",
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
      label: "SERVICE 02",
      title: "Event Security Services",
      subtitle: "Target Segment: Event Organizers, Venues, Corporate Events, and Public Gatherings.",
      imageSrc: "/images/services/service-2.png",
      imageAlt: "Event Security Services",
      paragraphs: [
        "Crown provides comprehensive event security solutions for conferences, concerts, sports events, and corporate gatherings. Our experienced team ensures crowd management, access control, and emergency response while maintaining a positive atmosphere for attendees. We coordinate with local authorities, implement layered security protocols, and deploy trained personnel to handle any situation with professionalism and discretion.",
        "Scope of Work:\n• Crowd control and flow management.\n• Access control and ticket verification.\n• Emergency response and medical coordination.\n• VIP protection and secure transportation.\n• Post-event security debriefing and reporting."
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
    serviceSectionData: [
      {
        label: "SERVICE 02",
        title: "Event Security - Crowd Management",
        description: "Professional crowd control and flow management for events of all sizes. Our trained personnel ensure smooth attendee movement while maintaining safety and security.",
        targetSegment: "Event Organizers, Venues, Corporate Events, and Public Gatherings.",
        scopeOfWork: [
          "Crowd flow analysis and planning",
          "Professional usher services",
          "Capacity management",
          "Emergency evacuation coordination"
        ],
        image: "/images/services/service-2.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/event-security"
          }
        ]
      },
      {
        label: "SERVICE 02",
        title: "Event Security - VIP Protection",
        description: "Comprehensive VIP protection services ensuring the safety and security of high-profile guests, performers, and speakers throughout the event.",
        targetSegment: "Event Organizers, Venues, Corporate Events, and Public Gatherings.",
        scopeOfWork: [
          "Personal security details",
          "Secure transportation arrangements",
          "Access control for VIP areas",
          "Coordination with local law enforcement"
        ],
        image: "/images/services/service-2.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/event-security"
          }
        ]
      },
      {
        label: "SERVICE 02",
        title: "Event Security - Emergency Response",
        description: "Rapid emergency response teams equipped to handle medical emergencies, security incidents, and evacuation procedures during events.",
        targetSegment: "Event Organizers, Venues, Corporate Events, and Public Gatherings.",
        scopeOfWork: [
          "Medical emergency response",
          "Security incident management",
          "Fire evacuation procedures",
          "Coordination with emergency services"
        ],
        image: "/images/services/service-2.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/event-security"
          }
        ]
      },
      {
        label: "SERVICE 02",
        title: "Event Security - Technology Integration",
        description: "Advanced security technology integration including access control systems, surveillance, and real-time monitoring for comprehensive event security.",
        targetSegment: "Event Organizers, Venues, Corporate Events, and Public Gatherings.",
        scopeOfWork: [
          "Digital ticketing systems",
          "Access control technology",
          "Real-time surveillance monitoring",
          "Communication systems setup"
        ],
        image: "/images/services/service-2.png",
        buttons: [
          {
            text: "Learn More",
            variant: "primary",
            iconBgColor: "#1a1a1a",
            textColor: "#1a1a1a",
            href: "/services/event-security"
          }
        ]
      }
    ],
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
