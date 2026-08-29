import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CTASection } from "@/components/cta-section";
import { services } from "@/data/company";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore customs clearance, freight forwarding, import and export, shipping, vehicle leasing, logistics and general services from Vision Freight.",
  alternates: { canonical: "/services" },
  openGraph: { title: "Freight, Clearance, Leasing & Logistics Services", description: "Practical support for cargo, trade, mobility and commercial requirements.", url: "/services" },
};

const serviceBenefits: Record<string, string[]> = {
  "customs-clearance": ["Documentation guidance", "Clearance coordination", "Cargo release support"],
  "freight-forwarding": ["Movement planning", "Shipment coordination", "Import and export support"],
  "import-export": ["Requirements assessment", "Trade process guidance", "Coordinated support"],
  shipping: ["Shipping requirement review", "Schedule coordination", "Clear service updates"],
  "vehicle-leasing": ["Individual and business use", "Corporate mobility support", "Requirement-based options"],
  "logistics-transportation": ["Goods movement coordination", "Destination planning", "Responsive transport support"],
  "general-services": ["Requirement assessment", "Commercial support", "Practical next-step guidance"],
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero current="Services" title="Practical services for cargo, trade and mobility" description="From documentation and clearance to freight movement, shipping, vehicle leasing and general support, we help clients coordinate what needs to happen next." />
      <section className="bg-cream py-20 sm:py-24">
        <div className="site-container space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article id={service.slug} key={service.slug} className="scroll-mt-36 border border-slate-200 bg-white p-7 shadow-[0_8px_28px_rgb(8_42_74/4%)] sm:p-9 lg:grid lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
                <div className="border-b border-slate-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
                  <span className="text-xs font-black tracking-[.16em] text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-4 flex size-12 items-center justify-center rounded-md bg-navy text-white"><Icon aria-hidden="true" className="size-6" /></span>
                  <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-navy">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{service.shortDescription}</p>
                </div>
                <div className="pt-6 lg:pt-0">
                  <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{service.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">{serviceBenefits[service.slug].map((benefit) => <li key={benefit} className="flex items-start gap-2 text-sm font-bold text-navy"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-orange" />{benefit}</li>)}</ul>
                  <Link className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-orange transition-colors hover:text-orange-dark focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-orange" href="/contact#quote">Enquire about this service <ArrowRight aria-hidden="true" className="size-4" /></Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
