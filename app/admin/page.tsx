import type { Metadata } from "next";
import { AdminPanel } from "@/components/admin-panel";
import { PageHero } from "@/components/page-hero";
import { siteIsPublic } from "@/data/company";

export const metadata: Metadata = {
  title: "Admin",
  description: "Vision Freight cleared vehicle gallery administration.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  if (!siteIsPublic) return null;

  return (
    <main id="main-content">
      <PageHero current="Admin" title="Cleared Vehicle Admin" description="Upload completed work to the public gallery." />
      <section className="bg-cream py-14 sm:py-20">
        <div className="site-container"><AdminPanel /></div>
      </section>
    </main>
  );
}

