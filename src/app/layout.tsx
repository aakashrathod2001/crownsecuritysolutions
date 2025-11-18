import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles/globals.scss";
import { outfit, montserrat, inter } from "@/styles/fonts";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

// ============================================
// VIEWPORT CONFIG
// ============================================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// ============================================
// GLOBAL METADATA
// ============================================
export const metadata: Metadata = {
  title: {
    default: "Wunderkint",
    template: "%s | Wunderkint",
  },
  description:
    "Wunderkint – a creative intelligence agency blending AI, design, and strategy to elevate your brand.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://crownsecuritysolutions.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wunderkint",
    title: "Wunderkint",
    description:
      "Wunderkint – a creative intelligence agency blending AI, design, and strategy to elevate your brand.",
    url: "https://crownsecuritysolutions.com",
    images: [
      {
        url: "/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Wunderkint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wunderkint",
    description:
      "Explore branding, AI, marketing, and tech services by Wunderkint – where creativity meets intelligence.",
    images: ["/images/og/default.jpg"],
  },
  alternates: {
    canonical: "https://crownsecuritysolutions.com",
  },
};

// ============================================
// ROOT LAYOUT
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wunderkint",
    url: "https://crownsecuritysolutions.com",
    logo: "https://crownsecuritysolutions.com/images/logo.png",
    sameAs: [
      "https://www.facebook.com/crownsecuritysolutions",
      "https://www.instagram.com/crownsecuritysolutions",
      "https://www.linkedin.com/company/crownsecuritysolutions",
      "https://twitter.com/crownsecuritysolutions",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9999999999",
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wunderkint",
    url: "https://crownsecuritysolutions.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://crownsecuritysolutions.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <head>
        {/* =====================================================
            ✅ Structured Data (JSON-LD)
        ===================================================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* =====================================================
            ✅ Google Tag Manager (GTM) - Head Script
            Replace GTM-XXXXXXX with your container ID
        ===================================================== */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* =====================================================
            ✅ Google Analytics (GA4)
            Replace G-YYYYYYY with your GA Measurement ID
        ===================================================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YYYYYYY"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYYYYYY');
          `}
        </Script>
      </head>

      <body suppressHydrationWarning>
        {/* =====================================================
            ✅ Google Tag Manager (GTM) - NoScript Fallback
        ===================================================== */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ Global Header */}
        {/* <Header /> */}

        {/* ✅ Page Content */}
        <main>{children}</main>

        {/* ✅ Global Footer */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
