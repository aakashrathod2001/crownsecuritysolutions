// Types
export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterColumn = { title: string; links: FooterLink[] };
export type Watermark = { text: string } | { image: string };

export const brand = {
  name: "Wunderkint",
  logo: "/wunderkint_logo_light.webp", // place in /public
  blurb:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ctaText: "Contact Us",
  ctaHref: "/contact",
};

export const quickLinksCol2: FooterColumn = {
  title: "Services",
  links: [
    { label: "Branding", href: "/services/branding" },
    { label: "UI UX Design", href: "/services/ui-ux" },
    { label: "Web Design", href: "/services/web-design" },
    { label: "SaaS Design", href: "/services/saas" },
    { label: "Webflow", href: "/services/webflow" },
    { label: "Build Product (MVP)", href: "/services/mvp" },
    { label: "Mobile App", href: "/services/mobile-app" },
    { label: "Design System", href: "/services/design-system" },
    { label: "Webflow", href: "/services/webflow" },
    { label: "Build Product (MVP)", href: "/services/mvp" },
    { label: "Conversion Rate... (CRO)", href: "/services/cro" },
  ],
};

export const quickLinksCol3: FooterColumn = {
  title: "Services",
  links: [
    { label: "Branding", href: "/services/branding" },
    { label: "UI UX Design", href: "/services/ui-ux" },
    { label: "Web Design", href: "/services/web-design" },
    { label: "SaaS Design", href: "/services/saas" },
    { label: "Webflow", href: "/services/webflow" },
    { label: "Build Product (MVP)", href: "/services/mvp" },
    { label: "Mobile App", href: "/services/mobile-app" },
    { label: "Design System", href: "/services/design-system" },
    { label: "Webflow", href: "/services/webflow" },
    { label: "Build Product (MVP)", href: "/services/mvp" },
    { label: "Conversion Rate... (CRO)", href: "/services/cro" },
  ],
};

export const socials: FooterLink[] = [
  { label: "Instagram", href: "https://instagram.com", external: true },
  { label: "Facebook", href: "https://facebook.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Twitter", href: "https://twitter.com", external: true },
];

export const rightCta = {
  eyebrow: "Let's work together",
  text: "Call Wunderkint",
  href: "/contact",
};

export const legal = {
  copyright: "© 2025 Wunderkint Creatives™",
  links: [
    { label: "T&C | Privacy Policy", href: "/terms" },
    // { label: "Privacy Policy", href: "/privacy" },
  ],
};

export const watermark: Watermark = {
  // If you have an image, use:
  image: '/footer_watermark.webp'
  // Else fallback to text:
  // text: "WUNDERKINT",
};
