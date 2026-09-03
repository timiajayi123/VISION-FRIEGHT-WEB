import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { LocationMap } from "@/components/location-map";
import { company, sharedOpenGraph, siteIsPublic, socialPreviewImage, whatsappUrl } from "@/data/company";

const pageTitle = "Contact Vision Freight";
const pageDescription = "Request a quote or speak with our team about your logistics requirements.";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Vision Freight for customs clearance, freight forwarding, shipping, logistics, vehicle leasing and general service enquiries in Lagos, Nigeria.",
  alternates: { canonical: "/contact" },
  openGraph: { ...sharedOpenGraph, title: pageTitle, description: pageDescription, url: "/contact" },
  twitter: { card: "summary", title: pageTitle, description: pageDescription, images: [socialPreviewImage.url] },
};

export default function ContactPage() {
  if (!siteIsPublic) {
    return null;
  }

  return (
    <main id="main-content">
      <PageHero current="Contact" title="Tell us what you need help with" description="Request a quote, call our team or send a WhatsApp message. We’ll review your requirement and guide you on the next step." />

      <section className="bg-white py-20 sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <div>
            <p className="eyebrow text-orange">Contact Information</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">Speak with our team</h2>
            <p className="mt-4 leading-7 text-slate-600">Choose the most convenient way to reach us. For urgent enquiries, call or start a WhatsApp conversation.</p>
            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              <div className="flex gap-4 py-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-orange/10 text-orange"><Phone aria-hidden="true" className="size-5" /></span><div><h3 className="font-extrabold text-navy">Phone</h3>{company.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="mt-1 block text-slate-600 transition-colors hover:text-orange">{phone}</a>)}</div></div>
              <div className="flex gap-4 py-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-orange/10 text-orange"><Mail aria-hidden="true" className="size-5" /></span><div><h3 className="font-extrabold text-navy">Email</h3><a href={`mailto:${company.email}`} className="mt-1 block break-all text-slate-600 transition-colors hover:text-orange">{company.email}</a></div></div>
              <div className="flex gap-4 py-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-orange/10 text-orange"><MapPin aria-hidden="true" className="size-5" /></span><div><h3 className="font-extrabold text-navy">Office</h3><address className="mt-1 not-italic leading-6 text-slate-600">{company.address}</address></div></div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-[#1fa855] px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#168a45] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy sm:w-auto"><MessageCircle aria-hidden="true" className="size-5" />Chat on WhatsApp</a>
          </div>

          <div id="quote" className="scroll-mt-36 border border-slate-200 bg-cream p-6 shadow-[0_12px_40px_rgb(8_42_74/6%)] sm:p-9">
            <p className="eyebrow text-orange">Request a Quote</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">Send an enquiry</h2>
            <p className="mt-3 mb-7 leading-7 text-slate-600">Complete the form below and provide as much detail as you can about the service required.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="site-container">
          <p className="eyebrow text-orange">Visit Our Office</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Find us in Lagos</h2>
          <div className="mt-9"><LocationMap /></div>
        </div>
      </section>
    </main>
  );
}
