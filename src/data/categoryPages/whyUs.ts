// export interface WhyUsCard {
//   id: string;
//   title: string;
//   stripColor?: string; // Optional: override default color rotation
// }

// export const whyUsData: WhyUsCard[] = [
//   {
//     id: 'expertise',
//     title: "Strategic logo design rooted in your brand's purpose",
//   },
//   {
//     id: 'approach',
//     title: 'Focused and detailed approach ensuring no detail is overlooked',
//   },
//   {
//     id: 'innovation',
//     title: 'Collaboration that sparks innovation across all departments',
//   },
//   {
//     id: 'results',
//     title: 'Data-powered, creativity-driven results that maximize impact',
//   }
// ];

import type { CategorySlug } from "./categories";

export type WhyUsCard = {
  id: string;
  title: string;
  stripColor?: string;
};

export const whyUs: Record<
  CategorySlug,
  { image: string; cards: WhyUsCard[] }
> = {
  branding: {
    image: "https://placehold.co/840x500/f15151/ffffff?text=Static+Image",
    cards: [
      {
        id: "b1",
        title: "First-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b2",
        title: "Second-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b3",
        title: "Third-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b4",
        title: "Fourth-Strategic logo design rooted in your brand's purpose",
      },
    ],
  },
  content: {
    image: "https://placehold.co/840x500/f15151/ffffff?text=Static+Image",
    cards: [
      {
        id: "b1",
        title: "First-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b2",
        title: "Second-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b3",
        title: "Third-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b4",
        title: "Fourth-Strategic logo design rooted in your brand's purpose",
      },
    ],
  },
  tech: {
    image: "https://placehold.co/840x500/f15151/ffffff?text=Static+Image",
    cards: [
      {
        id: "b1",
        title: "First-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b2",
        title: "Second-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b3",
        title: "Third-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b4",
        title: "Fourth-Strategic logo design rooted in your brand's purpose",
      },
    ],
  },
  marketing: {
    image: "https://placehold.co/840x500/f15151/ffffff?text=Static+Image",
    cards: [
      {
        id: "b1",
        title: "First-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b2",
        title: "Second-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b3",
        title: "Third-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b4",
        title: "Fourth-Strategic logo design rooted in your brand's purpose",
      },
    ],
  },
  ai: {
    image: "https://placehold.co/840x500/f15151/ffffff?text=Static+Image",
    cards: [
      {
        id: "b1",
        title: "First-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b2",
        title: "Second-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b3",
        title: "Third-Strategic logo design rooted in your brand's purpose",
      },
      {
        id: "b4",
        title: "Fourth-Strategic logo design rooted in your brand's purpose",
      },
    ],
  },
  // fitness, tech, marketing, ai ... add their own image + cards
};
