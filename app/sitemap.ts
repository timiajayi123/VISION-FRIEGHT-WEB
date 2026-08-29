import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/contact"];
  return routes.map((route) => ({ url: `${company.siteUrl}${route}`, lastModified: new Date(), changeFrequency: route ? "monthly" : "weekly", priority: route ? 0.8 : 1 }));
}
