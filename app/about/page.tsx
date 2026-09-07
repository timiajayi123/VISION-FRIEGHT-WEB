import type { Metadata } from "next";
import { CheckCircle2, Eye, Handshake, Lightbulb, MessageSquareText, ShieldCheck, Target, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { sharedOpenGraph, siteIsPublic, socialPreviewImage } from "@/data/company";

const pageTitle = "About Vision Freight";
const pageDescription = "Our company, purpose, values and commitment to customers.";

export const metadata: Metadata = {
  title: "About Us",
  description: "Vision Freight's mission, values and logistics support.",
  alternates: { canonical: "/about" },
  openGraph: { ...sharedOpenGraph, title: pageTitle, description: pageDescription, url: "/about" },
  twitter: { card: "summary", title: pageTitle, description: pageDescription, images: [socialPreviewImage.url] },
};

const values = [
  { title: "Reliability", text: "We follow through.", icon: ShieldCheck },
  { title: "Professionalism", text: "We work with care.", icon: Handshake },
  { title: "Integrity", text: "We give honest guidance.", icon: MessageSquareText },
  { title: "Customer Focus", text: "We listen first.", icon: Users },
  { title: "Efficiency", text: "We keep work moving.", icon: Target },
  { title: "Improvement", text: "We refine our service.", icon: Lightbulb },
];

export default function AboutPage() {
  if (!siteIsPublic) {
    return null;
  }

  return (
    <main id="main-content">
      <PageHero current="About Us" title="A dependable logistics partner" description="Freight, clearance, shipping and leasing support." />

      <section className="bg-white py-20 sm:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Company Overview" title="About Vision Freight" />
            <div className="mt-6 space-y-4 leading-7 text-slate-600">
              <p>Vision Freight supports individuals and businesses with freight, clearance, shipping, logistics and leasing.</p>
              <p>We bring practical coordination and clear communication to every requirement.</p>
            </div>
          </div>
          <aside className="border-l-4 border-orange bg-cream p-7 sm:p-10">
            <p className="eyebrow text-blue">Our Commitment</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Service that keeps you informed</h2>
            <p className="mt-4 leading-7 text-slate-600">Responsive support and clear updates.</p>
            <ul className="mt-6 space-y-4">{["Understand the need", "Give practical guidance", "Keep you updated"].map((item) => <li key={item} className="flex items-start gap-3 font-bold text-navy"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-orange" />{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="site-container grid gap-6 md:grid-cols-2">
          <article className="border border-slate-200 bg-white p-7 sm:p-10"><span className="flex size-12 items-center justify-center rounded-md bg-navy text-white"><Target aria-hidden="true" className="size-6" /></span><p className="eyebrow mt-6 text-orange">Our Mission</p><h2 className="mt-3 text-2xl font-extrabold text-navy">Clear, dependable coordination</h2><p className="mt-4 leading-7 text-slate-600">Reliable support for every movement.</p></article>
          <article className="border border-slate-200 bg-white p-7 sm:p-10"><span className="flex size-12 items-center justify-center rounded-md bg-orange text-white"><Eye aria-hidden="true" className="size-6" /></span><p className="eyebrow mt-6 text-orange">Our Vision</p><h2 className="mt-3 text-2xl font-extrabold text-navy">A trusted logistics name</h2><p className="mt-4 leading-7 text-slate-600">Known for professional, clear service.</p></article>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="site-container">
          <SectionHeading eyebrow="Core Values" title="The principles behind our work" align="center" />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{values.map(({ title, text, icon: Icon }) => <article key={title} className="border-t-2 border-orange bg-cream p-6"><Icon aria-hidden="true" className="size-6 text-navy" /><h3 className="mt-5 text-lg font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
