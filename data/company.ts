import {
  Anchor,
  CarFront,
  Container,
  FileCheck2,
  Globe2,
  PackageCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
};

export const company = {
  name: "Vision Freight and Services Nigeria Limited",
  shortName: "Vision Freight",
  phones: ["08099520084", "08099000147"],
  whatsapp: "2348099520084",
  email: "vfsn2021@gmail.com",
  address:
    "1 Satellite Car Park, Opposite Fivestar Car Park, First Gate, Lagos.",
  siteUrl: "https://www.visionfreight.com.ng",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1+Satellite+Car+Park+Opposite+Fivestar+Car+Park+First+Gate+Lagos",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1+Satellite+Car+Park+Opposite+Fivestar+Car+Park+First+Gate+Lagos&output=embed",
  whatsappMessage:
    "Hello Vision Freight, I would like to make an enquiry about your services.",
  summary:
    "Freight, clearance, shipping, leasing and logistics support in Nigeria.",
  socialLinks: {},
} as const;

// Set to false only when the site needs to be temporarily paused.
export const siteIsPublic = true;

export const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

export const socialPreviewImage = {
  url: "/images/vision-freight-social-logo.jpg",
  width: 883,
  height: 747,
  alt: "Vision Freight and Services Nigeria Limited logo",
  type: "image/jpeg",
};

export const sharedOpenGraph = {
  type: "website" as const,
  locale: "en_NG",
  siteName: company.name,
  images: [socialPreviewImage],
};

export const services: Service[] = [
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    shortDescription:
      "Customs documentation and cargo clearance support.",
    description:
      "Clear guidance through documentation, clearance and cargo release.",
    icon: FileCheck2,
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    shortDescription:
      "Cargo movement for import and export.",
    description:
      "Coordinated freight planning and delivery support.",
    icon: Container,
  },
  {
    slug: "import-export",
    title: "Import & Export Support",
    shortDescription:
      "Practical support for international trade.",
    description:
      "Guidance for import and export requirements.",
    icon: Globe2,
  },
  {
    slug: "shipping",
    title: "Shipping Services",
    shortDescription:
      "Cargo shipping coordination.",
    description:
      "Documentation, schedules and shipping support.",
    icon: Anchor,
  },
  {
    slug: "vehicle-leasing",
    title: "Vehicle Leasing",
    shortDescription:
      "Vehicle leasing for personal and business use.",
    description:
      "Flexible options for personal and corporate mobility.",
    icon: CarFront,
  },
  {
    slug: "logistics-transportation",
    title: "Logistics & Transportation",
    shortDescription:
      "Coordinated goods movement and delivery.",
    description:
      "Road transport and delivery to your destination.",
    icon: Truck,
  },
  {
    slug: "general-services",
    title: "General Merchant Services",
    shortDescription:
      "Commercial support for specific requirements.",
    description:
      "Practical support for other commercial needs.",
    icon: PackageCheck,
  },
];
