"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company } from "@/data/company";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_1px_10px_rgb(15_42_68/5%)] backdrop-blur">
      <div className="bg-navy text-white">
        <div className="site-container flex min-h-9 items-center justify-between gap-4 py-1 text-xs">
          <p className="hidden text-white/75 sm:block">Freight • Clearance • Leasing • Logistics</p>
          <a className="ml-auto inline-flex items-center gap-2 font-semibold transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange" href={`tel:${company.phones[0]}`}>
            <Phone aria-hidden="true" className="size-3.5" />
            {company.phones[0]}
          </a>
        </div>
      </div>
      <div className="site-container flex min-h-20 items-center justify-between gap-6 py-2">
        <Link className="group flex min-w-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange" href="/" aria-label={`${company.shortName} home`}>
          <span className="relative size-13 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-[#faf8ef]">
            <Image src="/images/vision-freight-logo.jpg" alt="Vision Freight globe, aircraft and cargo ship logo" fill sizes="52px" className="object-cover" priority />
          </span>
          <span className="min-w-0">
            <span className="block text-lg font-extrabold leading-none tracking-[-0.03em] text-navy sm:text-xl">VISION FREIGHT</span>
            <span className="mt-1 block truncate text-[9px] font-bold uppercase tracking-[0.13em] text-orange max-[359px]:hidden sm:text-[10px]">And Services Nigeria Limited</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : item.href.startsWith("/#") ? false : pathname.startsWith(item.href);
            return (
              <Link key={item.label} href={item.href} className={`nav-link ${active ? "text-orange" : "text-slate-700"}`}>
                {item.label}
              </Link>
            );
          })}
          <Link className="button-primary ml-1" href="/contact#quote">Get a Quote</Link>
        </nav>

        <button type="button" className="inline-flex size-11 items-center justify-center rounded-md border border-slate-200 text-navy transition-colors hover:border-orange hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-5 pb-6 pt-3 shadow-lg lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="border-b border-slate-100 py-3.5 font-semibold text-slate-700 transition-colors hover:text-orange" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link className="button-primary mt-5" href="/contact#quote" onClick={() => setOpen(false)}>Get a Quote</Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
