import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

// ============================================
// ROOT LAYOUT - Enhanced with Metadata
// ============================================

export const metadata = {
  title: {
    default: "Crown Security Solutions | Professional Security Services in India",
    template: "%s | Crown Security Solutions"
  },
  description: "Crown Security Solutions provides reliable corporate, industrial, residential, and event security services with trained professionals and 24/7 support.",
  keywords: ["security services", "corporate security", "industrial security", "residential security", "event security", "security solutions India"],
  authors: [{ name: "Crown Security Solutions" }],
  creator: "Crown Security Solutions",
  publisher: "Crown Security Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://crownsecuritysolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Crown Security Solutions | Professional Security Services in India",
    description: "Crown Security Solutions provides reliable corporate, industrial, residential, and event security services with trained professionals and 24/7 support.",
    siteName: "Crown Security Solutions",
    images: [
      {
        url: "/images/home/home-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Crown Security Solutions - Professional Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crown Security Solutions | Professional Security Services in India",
    description: "Crown Security Solutions provides reliable corporate, industrial, residential, and event security services with trained professionals and 24/7 support.",
    images: ["/images/home/home-hero-bg.png"],
    creator: "@crownsecurity",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code", 
    yahoo: "your-yahoo-verification-code",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel:wght@400&family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Crown Security Solutions",
              "image": "/images/logo.png",
              "@id": "https://crownsecuritysolutions.com",
              "url": "https://crownsecuritysolutions.com",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Address Here",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "postalCode": "XXXXXX",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0.0,
                "longitude": 0.0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/crownsecuritysolutions",
                "https://www.instagram.com/crownsecuritysolutions",
                "https://www.linkedin.com/company/crownsecuritysolutions"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
