/**
 * Single source of truth for company information.
 * Values left empty are intentionally unverified placeholders — never invent them.
 * Replace via CMS or environment configuration when confirmed.
 */

export const company = {
  name: "Supriya Travels of India",
  shortName: "Supriya Travels",
  tagline: "Journeys That Stay With You.",
  description:
    "Supriya Travels of India provides Hajj and Umrah packages, domestic and international tours, worldwide tourist visas and air ticketing services for individual travellers, families and trade partners.",
  /** Set these once verified. Empty strings are hidden in the UI. */
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  /** Only display metrics that have been verified by the company. */
  metrics: [] as { label: string; value: string }[],
} as const;

export const whatsappHref = (message?: string) => {
  if (!company.whatsapp) return "/contact";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${company.whatsapp.replace(/\D/g, "")}${text}`;
};

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Packages", to: "/packages" },
  { label: "Services", to: "/our-services" },
  { label: "Destinations", to: "/destinations" },
  { label: "Contact", to: "/contact" },
] as const;
