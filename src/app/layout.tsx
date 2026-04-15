// src/app/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar /> {/* Elle s'affichera sur TOUTES les pages automatiquement */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}