import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Wunderkint | Let's Build Something Great Together",
  description:
    "Reach out to Wunderkint for collaborations, business inquiries, or creative projects. We're here to transform your brand with intelligence and design.",
  keywords: ["contact wunderkint", "branding agency contact", "hire creative agency"],
  openGraph: {
    title: "Contact Wunderkint | Creative Agency for Brands & Businesses",
    description:
      "Get in touch with Wunderkint to collaborate on branding, design, or marketing projects. Let's create something unforgettable.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com"}/contact`,
    siteName: "Wunderkint",
    images: [
      {
        url: "/images/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Wunderkint",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Wunderkint | Creative Agency for Brands & Businesses",
    description:
      "Partner with Wunderkint for branding, design, AI, and marketing excellence. Let's build your next big idea.",
    images: ["/images/og/contact.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://wunderkint.com"}/contact`,
  },
};
