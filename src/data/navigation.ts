// data/navigation.ts
export interface NavItem {
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
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
    label: 'Ambassador Era',
    href: '/ambassador-era',
  },
  {
    label: 'Join us',
    href: '/join-us',
  },
];