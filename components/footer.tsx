import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, services } from "@/data/company";

const footerNav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Why Choose Us", "/#why-us"],
  ["Contact", "/contact"],
] as const;

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="site-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.8fr_1.2fr] lg:py-16">
        <div>
          <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange">
            <span className="relative size-13 overflow-hidden rounded-md border border-white/10 bg-[#faf8ef]"><Image src="/images/vision-freight-logo.jpg" alt="Vision Freight logo" fill sizes="52px" className="object-cover" /></span>
            <span><span className="block text-lg font-extrabold leading-none">VISION FREIGHT</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[.12em] text-orange-light">And Services Nigeria Limited</span></span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">{company.summary}</p>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[.1em] text-orange-light">Company</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">{footerNav.map(([label, href]) => <li key={label}><Link href={href} className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange">{label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[.1em] text-orange-light">Services</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">{services.slice(0, 5).map((service) => <li key={service.slug}><Link href={`/services#${service.slug}`} className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange">{service.title}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[.1em] text-orange-light">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3"><Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-orange-light" /><span>{company.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="mb-1 block transition-colors hover:text-white">{phone}</a>)}</span></li>
            <li><a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-white"><Mail aria-hidden="true" className="size-4 shrink-0 text-orange-light" />{company.email}</a></li>
            <li className="flex items-start gap-3"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-orange-light" /><address className="not-italic leading-6">{company.address}</address></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container py-5 text-center text-xs leading-5 text-slate-400 sm:text-left">© {new Date().getFullYear()} {company.name}. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
