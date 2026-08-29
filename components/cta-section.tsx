import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/company";

export function CTASection() {
  return (
    <section className="bg-orange py-12 sm:py-16">
      <div className="site-container grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow text-navy-deep">Ready when you are</p>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">Need Logistics, Clearance or Leasing Assistance?</h2>
          <p className="mt-3 text-lg leading-7 text-white/90">Speak with our team today and let us help you find the right solution.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link href="/contact#quote" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-navy-deep focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white">
            Request a Quote <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/70 bg-white px-5 py-3 text-sm font-extrabold text-navy transition-colors hover:bg-cream focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-white">
            <MessageCircle aria-hidden="true" className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
