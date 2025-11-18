// src/styles/fonts.ts
import { Outfit, Montserrat, Inter } from 'next/font/google';

// Outfit (default, site-wide body font)
export const outfit = Outfit({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

// Montserrat (opt-in font, e.g. headings, highlights)
export const montserrat = Montserrat({
  weight: ['100','200','300','400','500','600','700','800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Inter (another opt-in font, e.g. UI, paragraphs)
export const inter = Inter({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
