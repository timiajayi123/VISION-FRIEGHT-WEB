import type { MetadataRoute } from "next";
import { company, siteIsPublic } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  if (!siteIsPublic) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${company.siteUrl}/sitemap.xml`, host: company.siteUrl };
}
