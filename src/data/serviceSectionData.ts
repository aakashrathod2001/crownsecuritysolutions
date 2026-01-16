export interface ButtonConfig {
  text: string;
  variant?: 'primary' | 'secondary';
  iconBgColor?: string;
  textColor?: string;
  href?: string;
  onClick?: () => void;
}

export interface ServiceData {
  label: string;
  title: string;
  description: string;
  targetSegment: string;
  scopeOfWork: string[];
  image: string;
  buttons?: ButtonConfig[];
}

export const serviceData: ServiceData[] = [
  {
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
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/corporate-park-security"
      }
    ]
  },
  {
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
    buttons: [
      {
        text: "Find Out More",
        variant: "primary",
        iconBgColor: "#1a1a1a",
        textColor: "#1a1a1a",
        href: "/services/event-security"
      }
    ]
  }
];
