import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Tawakkal Elite | World-Class Architectural Paints",
  description: "Experience the zenith of architectural aesthetics. We curate the world’s most prestigious pigment collections for the modern visionary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background">
        <CustomCursor />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
