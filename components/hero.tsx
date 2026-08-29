import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="site-hero" className="relative isolate overflow-hidden bg-navy text-white">
      <Image src="/images/logistics-hero.png" alt="Cargo ship and freight truck operating at a modern seaport" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,55,0.98)_0%,rgba(7,31,55,0.91)_38%,rgba(7,31,55,0.35)_75%,rgba(7,31,55,0.12)_100%)]" />
      <div className="site-container relative flex min-h-[560px] items-center py-20 sm:min-h-[610px] lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-orange-light">Moving business forward</p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Reliable Freight, Logistics &amp; Clearance Solutions
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Vision Freight and Services Nigeria Limited provides dependable freight forwarding, customs clearance, leasing, shipping and general merchant services designed to keep businesses and individuals moving.
          </p>
          <div className="mt-8 flex flex-col gap-3 xs:flex-row sm:flex-row">
            <Link className="button-primary" href="/contact#quote">Get a Quote <ArrowRight aria-hidden="true" className="size-4" /></Link>
            <Link className="button-secondary-dark" href="/services">Our Services</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-sm font-medium text-white/85">
            {['Clear guidance', 'Responsive support', 'Professional service'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 aria-hidden="true" className="size-4 text-orange-light" />{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
