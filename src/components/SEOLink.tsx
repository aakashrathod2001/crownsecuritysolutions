import Link from 'next/link';
import { getSEOUrlBySlug } from '@/lib/urlMappings';
import type { ServiceSlug } from '@/data/servicePages/serviceSlugs';
import type { CategorySlug } from '@/data/categoryPages/categorySlugs';

// ============================================
// BASE SEO LINK COMPONENT
// ============================================

interface SEOLinkProps {
  type: 'category' | 'service';
  slug: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SEOLink({ type, slug, children, className, onClick }: SEOLinkProps) {
  const seoUrl = getSEOUrlBySlug(slug, type);
  
  // Fallback to internal path if no SEO URL found
  const href = seoUrl || `/${type}/${slug}`;
  
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

// ============================================
// TYPED CONVENIENCE COMPONENTS
// ============================================

interface CategoryLinkProps {
  slug: CategorySlug;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CategoryLink({ slug, children, className, onClick }: CategoryLinkProps) {
  return (
    <SEOLink type="category" slug={slug} className={className} onClick={onClick}>
      {children}
    </SEOLink>
  );
}

interface ServiceLinkProps {
  slug: ServiceSlug;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ServiceLink({ slug, children, className, onClick }: ServiceLinkProps) {
  return (
    <SEOLink type="service" slug={slug} className={className} onClick={onClick}>
      {children}
    </SEOLink>
  );
}