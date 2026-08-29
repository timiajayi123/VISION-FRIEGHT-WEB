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
  email: "info@visionfreight.com.ng", // Placeholder: replace with the confirmed company email.
  address:
    "1 Satellite Car Park, Opposite Fivestar Car Park, First Gate, Lagos.",
  siteUrl: "https://visionfreight.com.ng",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1+Satellite+Car+Park+Opposite+Fivestar+Car+Park+First+Gate+Lagos",
  mapEmbedUrl:
    "https://www.google.com/maps?q=1+Satellite+Car+Park+Opposite+Fivestar+Car+Park+First+Gate+Lagos&output=embed",
  whatsappMessage:
    "Hello Vision Freight, I would like to make an enquiry about your services.",
  summary:
    "Dependable freight forwarding, customs clearance, shipping, vehicle leasing and logistics support for businesses and individuals in Nigeria.",
  socialLinks: {},
} as const;

export const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

export const socialPreviewImage = {
  url: "/images/vision-freight-logo.jpg",
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
      "Assistance with customs documentation, processing, clearance and cargo release.",
    description:
      "We help clients understand and manage the documentation and clearance steps required to move cargo through customs efficiently and responsibly.",
    icon: FileCheck2,
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    shortDescription:
      "Coordination of cargo movement for efficient import and export operations.",
    description:
      "From planning to delivery coordination, we support the smooth movement of cargo across relevant transport channels and checkpoints.",
    icon: Container,
  },
  {
    slug: "import-export",
    title: "Import & Export Support",
    shortDescription:
      "Support for businesses and individuals involved in international trade.",
    description:
      "We provide practical guidance and service coordination for importers and exporters navigating international trade requirements.",
    icon: Globe2,
  },
  {
    slug: "shipping",
    title: "Shipping Services",
    shortDescription:
      "Professional coordination and management of cargo shipping requirements.",
    description:
      "Our team coordinates shipping requirements with close attention to documentation, schedules and clear communication throughout the process.",
    icon: Anchor,
  },
  {
    slug: "vehicle-leasing",
    title: "Vehicle Leasing",
    shortDescription:
      "Reliable vehicle leasing for individuals, businesses and corporate operations.",
    description:
      "Flexible vehicle leasing support designed around personal, commercial and corporate mobility requirements.",
    icon: CarFront,
  },
  {
    slug: "logistics-transportation",
    title: "Logistics & Transportation",
    shortDescription:
      "Transportation and movement of goods to required destinations.",
    description:
      "We coordinate dependable road movement and delivery arrangements to help goods reach their required destination safely and efficiently.",
    icon: Truck,
  },
  {
    slug: "general-services",
    title: "General Merchant Services",
    shortDescription:
      "Additional commercial and business support based on client requirements.",
    description:
      "Where a requirement falls outside a standard service category, we assess the need and provide appropriate commercial support or direction.",
    icon: PackageCheck,
  },
];
