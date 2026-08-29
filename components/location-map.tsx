import { ExternalLink, MapPin } from "lucide-react";
import { company } from "@/data/company";

export function LocationMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_12px_40px_rgb(8_42_74/7%)] lg:grid-cols-[1.35fr_.65fr]">
      <iframe title="Map showing the Vision Freight office location in Lagos" src={company.mapEmbedUrl} width="100%" height={compact ? "340" : "430"} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="min-h-[320px] w-full border-0" />
      <div className="flex flex-col justify-center bg-navy p-7 text-white sm:p-9">
        <span className="flex size-11 items-center justify-center rounded-md bg-orange text-white"><MapPin aria-hidden="true" className="size-5" /></span>
        <h3 className="mt-5 text-2xl font-extrabold">Lagos Office</h3>
        <address className="mt-3 not-italic leading-7 text-slate-200">{company.address}</address>
        <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="button-secondary-dark mt-6 w-fit">Get Directions <ExternalLink aria-hidden="true" className="size-4" /></a>
      </div>
    </div>
  );
}
