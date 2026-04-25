import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamstarters.school"),
  title: {
    default: "DreamStarters International School | Future Ready Education",
    template: "%s | DreamStarters International School"
  },
  description: site.description,
  keywords: [
    "DreamStarters International School",
    "Trivandrum school",
    "experiential learning",
    "AI robotics coding school",
    "project based learning",
    "international school Kerala"
  ],
  openGraph: {
    title: "DreamStarters International School",
    description: site.description,
    url: "https://dreamstarters.school",
    siteName: site.name,
    images: [
      {
        url: "/images/logo-white-bg.png",
        width: 1024,
        height: 1024,
        alt: "DreamStarters International School"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#8DB445",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
