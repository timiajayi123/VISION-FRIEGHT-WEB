import Link from "next/link";
import { ArrowRight, Check, FileText, Headphones, MessagesSquare, ShieldCheck, TimerReset, UsersRound } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { LocationMap } from "@/components/location-map";
import { services, siteIsPublic } from "@/data/company";

const reasons = [
  { title: "Reliable Service", text: "Careful coordination and dependable follow-through from enquiry to completion.", icon: ShieldCheck },
  { title: "Experienced Team", text: "Practical industry knowledge applied to each client requirement.", icon: UsersRound },
  { title: "Fast Processing", text: "Responsive handling designed to keep your request moving.", icon: TimerReset },
  { title: "Professional Support", text: "Clear guidance and responsible service throughout the process.", icon: Headphones },
  { title: "Transparent Communication", text: "Straightforward updates so you understand what happens next.", icon: MessagesSquare },
  { title: "Customer-Focused Solutions", text: "Service recommendations shaped around the actual need.", icon: Check },
];

const process = [
  ["01", "Contact Us", "Tell us the service you require."],
  ["02", "Receive Assessment / Quote", "We review the requirements and provide the necessary guidance and pricing."],
  ["03", "Documentation & Processing", "Required documentation and logistics arrangements are handled."],
  ["04", "Completion", "The shipment, clearance, leasing or requested service is completed."],
] as const;

const audiences = ["Individuals", "Importers & Exporters", "SMEs", "Corporate Organizations", "Retail Businesses", "Trading Companies"];

export default function HomePage() {
  if (!siteIsPublic) {
    return null;
  }

  return (
    <main id="main-content">
      <Hero />
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="site-container grid gap-4 text-sm font-bold text-navy sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
          {[["Customs & Documentation", FileText], ["Freight & Shipping", ShieldCheck], ["Leasing & Transportation", TimerReset]].map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-3 sm:justify-center"><Icon aria-hidden="true" className="size-5 text-orange" /><span>{label as string}</span></div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="About Vision Freight" title="Professional support for every movement" />
            <div className="mt-6 space-y-4 leading-7 text-slate-600">
              <p>Vision Freight and Services Nigeria Limited supports businesses and individuals with coordinated freight, customs clearance, import and export, shipping, vehicle leasing and related logistics services in Nigeria.</p>
              <p>Our approach is built around reliable service, efficient delivery, transparent communication and a clear understanding of each client’s requirements.</p>
            </div>
            <Link className="button-secondary mt-7" href="/about">Learn More <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <aside className="border-l-4 border-orange bg-cream p-7 sm:p-9">
            <p className="eyebrow text-blue">What clients can expect</p>
            <ul className="mt-6 grid gap-4">
              {["Careful handling of requirements", "Clear, timely service updates", "Practical industry guidance", "Solutions shaped around the client"].map((item) => <li key={item} className="flex items-start gap-3 font-bold text-navy"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-white"><Check aria-hidden="true" className="size-3" /></span>{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="site-container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Our Services" title="End-to-end support for your logistics needs" description="Practical services for cargo movement, trade, mobility and commercial requirements." />
            <Link href="/services" className="button-secondary shrink-0">Explore All Services <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} compact />)}</div>
        </div>
      </section>

      <section id="why-us" className="bg-white py-20 sm:py-24">
        <div className="site-container">
          <SectionHeading eyebrow="Why Choose Us" title="A responsible partner for the work ahead" description="We focus on the service qualities that matter most when your cargo, vehicle or business requirement is in motion." align="center" />
          <div className="mt-11 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(({ title, text, icon: Icon }) => <article key={title} className="flex gap-4 border-t border-slate-200 pt-6"><span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy text-white"><Icon aria-hidden="true" className="size-5" /></span><div><h3 className="font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="site-container">
          <SectionHeading eyebrow="How It Works" title="A straightforward path from enquiry to completion" light />
          <div className="mt-12 grid gap-px overflow-hidden bg-white/15 lg:grid-cols-4">{process.map(([number, title, text]) => <article key={number} className="relative bg-navy p-7"><span className="text-4xl font-black tracking-[-.05em] text-orange-light">{number}</span><h3 className="mt-5 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-cream py-14">
        <div className="site-container">
          <p className="eyebrow text-center text-orange">Who We Support</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">{audiences.map((audience) => <span key={audience} className="border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-navy shadow-sm">{audience}</span>)}</div>
        </div>
      </section>

      <CTASection />

      <section className="bg-white py-20 sm:py-24">
        <div className="site-container">
          <SectionHeading eyebrow="Visit Our Office" title="Find us in Lagos" description="Visit our office or open the location directly in Google Maps for turn-by-turn directions." />
          <div className="mt-9"><LocationMap compact /></div>
        </div>
      </section>
    </main>
  );
}
