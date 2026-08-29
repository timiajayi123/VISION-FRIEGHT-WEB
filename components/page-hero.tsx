import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHero({ title, description, current }: { title: string; description: string; current: string }) {
  return (
    <section id="page-hero" className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent_25%,rgba(237,106,22,.13)_25%,rgba(237,106,22,.13)_26%,transparent_26%,transparent_55%,rgba(255,255,255,.06)_55%,rgba(255,255,255,.06)_56%,transparent_56%)]" />
      <div className="site-container relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-300">
          <Link href="/" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-orange">Home</Link>
          <ChevronRight aria-hidden="true" className="size-4" />
          <span aria-current="page" className="text-orange-light">{current}</span>
        </nav>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
      </div>
    </section>
  );
}
