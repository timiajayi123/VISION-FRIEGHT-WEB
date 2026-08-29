"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/data/company";

export function WhatsAppButton() {
  const [heroVisible, setHeroVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.getElementById("site-hero") ?? document.getElementById("page-hero");
    if (!hero) {
      setHeroVisible(false);
      return;
    }
    setHeroVisible(true);
    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Vision Freight on WhatsApp" className={`fixed bottom-5 right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_30px_rgb(0_0_0/24%)] transition-[opacity,transform] duration-200 hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-navy sm:bottom-6 sm:right-6 ${heroVisible ? "pointer-events-none translate-y-3 opacity-0" : "opacity-100"}`} title="Chat on WhatsApp" tabIndex={heroVisible ? -1 : undefined} aria-hidden={heroVisible}>
      <MessageCircle aria-hidden="true" className="size-7" strokeWidth={2.3} />
    </a>
  );
}
