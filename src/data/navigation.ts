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
    label: 'What we do',
    href: '/what-we-do',
  },
  {
    label: 'Who we serve',
    href: '/who-we-serve',
  },
  {
    label: 'Where we are',
    href: '/where-we-are',
  },
  {
    label: 'Join us',
    href: '/join-us',
  },
];
