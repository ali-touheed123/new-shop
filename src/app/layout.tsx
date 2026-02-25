import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paint Palace | Premium Paint Store",
  description: "Your premium destination for quality paints from 10+ renowned brands. Explore decorative, industrial, auto, and project paints with our paint calculator and color visualizer.",
  keywords: "paint, paints, decorative paint, industrial paint, auto paint, Berger, Diamond, Ocean, Reliance, paint calculator, color visualizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans text-foreground bg-background`}>
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
