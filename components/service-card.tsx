import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/company";

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  const Icon = service.icon;
  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgb(8_42_74/4%)] transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-orange/50 hover:shadow-[0_18px_40px_rgb(8_42_74/9%)] sm:p-7">
      <span className="flex size-11 items-center justify-center rounded-md bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{compact ? service.shortDescription : service.description}</p>
      <Link href={`/services#${service.slug}`} className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-extrabold text-orange transition-colors hover:text-orange-dark focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-orange">
        View service <ArrowUpRight aria-hidden="true" className="size-4" />
      </Link>
    </article>
  );
}
