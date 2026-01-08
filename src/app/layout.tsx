import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";

// ============================================
// ROOT LAYOUT - Minimal
// ============================================
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
          href="https://fonts.googleapis.com/css2?family=Abel:wght@400&family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
