import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { StructuredData } from "@/components/structured-data";
import { company, sharedOpenGraph, socialPreviewImage } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Vision Freight and Services Nigeria Limited | Logistics, Freight & Clearance",
    template: "%s | Vision Freight",
  },
  description: "Vision Freight and Services Nigeria Limited provides customs clearance, freight forwarding, import and export, shipping, logistics and vehicle leasing services in Nigeria.",
  alternates: { canonical: "/" },
  openGraph: {
    ...sharedOpenGraph,
    title: "Vision Freight and Services Nigeria Limited | Logistics, Freight & Clearance",
    description: company.summary,
    url: "/",
  },
  twitter: { card: "summary", title: "Vision Freight and Services Nigeria Limited", description: company.summary, images: [socialPreviewImage.url] },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-navy">Skip to main content</a>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
