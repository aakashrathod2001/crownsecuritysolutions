// data/navigation.ts
export interface NavItem {
  label: string;
  href: string;
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
  },
  {
    label: 'Join us',
    href: '/join-us',
  },
];
