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
      <body suppressHydrationWarning={true}>
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
