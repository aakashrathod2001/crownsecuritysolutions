// ============================================================================
// TYPE DEFINITIONS FOR REUSABLE SECTION COMPONENTS
// ============================================================================

export interface SectionContent {
  label: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export interface SectionWithImageProps {
  showImage?: boolean;
  content: SectionContent;
}