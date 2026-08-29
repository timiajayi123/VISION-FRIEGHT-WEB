import { company, services } from "@/data/company";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phones[0],
    description: company.summary,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Satellite Car Park, Opposite Fivestar Car Park, First Gate",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    areaServed: { "@type": "Country", name: "Nigeria" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Logistics and business services",
      itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, description: service.shortDescription } })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
