import type { Metadata } from "next";
import { CheckCircle2, Eye, Handshake, Lightbulb, MessageSquareText, ShieldCheck, Target, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { sharedOpenGraph, socialPreviewImage } from "@/data/company";

const pageTitle = "About Vision Freight";
const pageDescription = "Our company, purpose, values and commitment to customers.";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vision Freight and Services Nigeria Limited, our mission, vision, values and commitment to dependable logistics support.",
  alternates: { canonical: "/about" },
  openGraph: { ...sharedOpenGraph, title: pageTitle, description: pageDescription, url: "/about" },
  twitter: { card: "summary", title: pageTitle, description: pageDescription, images: [socialPreviewImage.url] },
};

const values = [
  { title: "Reliability", text: "We follow through on our responsibilities and communicate clearly when circumstances change.", icon: ShieldCheck },
  { title: "Professionalism", text: "We approach every requirement with care, respect and attention to detail.", icon: Handshake },
  { title: "Integrity", text: "We value honest guidance, responsible processes and transparent communication.", icon: MessageSquareText },
  { title: "Customer Focus", text: "We listen first and shape our support around the client’s actual requirement.", icon: Users },
  { title: "Efficiency", text: "We work to reduce avoidable delays and keep every step purposeful.", icon: Target },
  { title: "Continuous Improvement", text: "We keep learning and refining the way we coordinate our services.", icon: Lightbulb },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero current="About Us" title="A dependable logistics partner, built around your needs" description="We coordinate freight, clearance, shipping, vehicle leasing and related support with professionalism, practical knowledge and clear communication." />

      <section className="bg-white py-20 sm:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Company Overview" title="About Vision Freight" />
            <div className="mt-6 space-y-4 leading-7 text-slate-600">
              <p>Vision Freight and Services Nigeria Limited is a Nigerian service company supporting individuals, importers, exporters and corporate organisations with freight forwarding, customs clearance, shipping, logistics, vehicle leasing and general merchant requirements.</p>
              <p>We understand that every movement depends on careful coordination. Our role is to make the process clearer, keep communication open and provide practical support from the first conversation through completion.</p>
              <p>Whether a client needs assistance with documentation, cargo movement, vehicle access or a related commercial requirement, we begin by understanding the need and identifying the right way forward.</p>
            </div>
          </div>
          <aside className="border-l-4 border-orange bg-cream p-7 sm:p-10">
            <p className="eyebrow text-blue">Our Commitment</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">Service that keeps you informed</h2>
            <p className="mt-4 leading-7 text-slate-600">We are committed to responsive support, responsible coordination and clear updates throughout each assignment.</p>
            <ul className="mt-6 space-y-4">{["Understand each requirement clearly", "Provide practical and honest guidance", "Coordinate each step with care", "Keep clients updated", "Work towards efficient completion"].map((item) => <li key={item} className="flex items-start gap-3 font-bold text-navy"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-orange" />{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="site-container grid gap-6 md:grid-cols-2">
          <article className="border border-slate-200 bg-white p-7 sm:p-10"><span className="flex size-12 items-center justify-center rounded-md bg-navy text-white"><Target aria-hidden="true" className="size-6" /></span><p className="eyebrow mt-6 text-orange">Our Mission</p><h2 className="mt-3 text-2xl font-extrabold text-navy">To make service coordination clear and dependable</h2><p className="mt-4 leading-7 text-slate-600">To provide reliable freight, clearance, logistics, leasing and general service solutions through professional coordination, responsive support and a commitment to customer satisfaction.</p></article>
          <article className="border border-slate-200 bg-white p-7 sm:p-10"><span className="flex size-12 items-center justify-center rounded-md bg-orange text-white"><Eye aria-hidden="true" className="size-6" /></span><p className="eyebrow mt-6 text-orange">Our Vision</p><h2 className="mt-3 text-2xl font-extrabold text-navy">To be a trusted name in logistics support</h2><p className="mt-4 leading-7 text-slate-600">To be recognised as a dependable Nigerian service company known for professional delivery, transparent communication and solutions that help clients move forward.</p></article>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="site-container">
          <SectionHeading eyebrow="Core Values" title="The principles behind our work" description="These values guide how we respond, communicate and deliver support." align="center" />
          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{values.map(({ title, text, icon: Icon }) => <article key={title} className="border-t-2 border-orange bg-cream p-6"><Icon aria-hidden="true" className="size-6 text-navy" /><h3 className="mt-5 text-lg font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
