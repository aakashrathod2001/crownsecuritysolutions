// ============================================================================
// TYPE DEFINITIONS FOR WORKFORCE DATA
// ============================================================================

import { SectionContent } from '@/types/section';

export interface QualificationStandardsData {
  title: string;
  qualifications: string[];
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

// ============================================================================
// WORKFORCE PAGE DATA
// ============================================================================

export const WORKFORCE_DATA: SectionContent = {
  label: "Our Workforce",
  title: "Building India's\nSecurity Workforce",
  subtitle: "Empowering careers in professional security and facility management.",
  imageSrc: "/images/team/abdul-rahim-shaikh.png",
  imageAlt: "Crown Security workforce team member",
  paragraphs: [
    "At Crown Security Agency, we believe that our greatest asset is our people. Our workforce of 2,000+ trained professionals represents the backbone of India's security industry, combining traditional values with modern expertise.\n\nEvery team member undergoes rigorous training programs covering security protocols, emergency response, customer service, and specialized skills. Our comprehensive training curriculum ensures that every guard, supervisor, and security officer meets the highest standards of professionalism and competence."
  ]
};

export const QUALIFICATION_STANDARDS_DATA: QualificationStandardsData = {
  title: "Qualification Standards",
  qualifications: [
    "Guards: Minimum 10th grade pass.",
    "Supervisors: 12th grade or equivalent.",
    "CCTV Operators: Technical aptitude with digital literacy.",
    "Managers/Field Officers: Graduates with proven leadership and communication skills."
  ],
  description: "Our recruitment philosophy focuses not just on qualification, but also on discipline, reliability, and a service-oriented mindset.",
  buttonText: "Apply Now",
  imageSrc: "https://placehold.co/400x400.png",
  imageAlt: "Security team monitoring control screens"
};
