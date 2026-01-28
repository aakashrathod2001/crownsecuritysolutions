// data/navigation.ts
import { services } from './services';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Our Process',
    href: '/our-process',
  },
  {
    label: 'Our Workforce',
    href: '/our-workforce',
  },
  {
    label: 'Services',
    href: '/services',
    children: services.map(service => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: 'Careers',
    href: '/careers',
  },
];
