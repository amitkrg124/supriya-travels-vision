/**
 * Single source of truth for company information.
 * Values left empty are intentionally unverified placeholders — never invent them.
 * Replace via CMS or environment configuration when confirmed.
 */

export const company: {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  googleLocation?: string;
  metrics: { label: string; value: string }[];
  socials?: { label: string; url: string }[];
} = {
  name: "Supriya Travels of India",
  shortName: "Supriya Travels",
  tagline: "Journeys That Stay With You.",
  description:
    "Supriya Travels of India provides Hajj and Umrah packages, domestic and international tours, worldwide tourist visas and air ticketing services for individual travellers, families and trade partners.",
  /** Set these once verified. Empty strings are hidden in the UI. */
  phone: "+91 9868380240, +91 7011959250",
  whatsapp: "+91 9868380240",
  email: "supriyatravelsindia@gmail.com",
  address: "A-13, D.D.A. Flats, Mata Sundri Road, Near Farsh Wali Masjid, New Delhi -- 110002, India",
  googleLocation: "https://www.google.com/maps/place/Supriya+Travels+Of+India/@28.6332797,77.2336668,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd54aad0abad:0x83918d0c50d8a471!8m2!3d28.6332797!4d77.2336668!16s%2Fg%2F11yd782rxq?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  /** Only display metrics that have been verified by the company. */
  metrics: [] as { label: string; value: string }[],
  socials: [
    { label: "Instagram (1)", url: "https://www.instagram.com/supriyatravelofindia/" },
    { label: "Instagram (2)", url: "https://www.instagram.com/supriyatravelsindia?utm_source=qr&igsh=azc1Y3RxNjJqeGdi" },
    { label: "Threads", url: "https://www.threads.com/@supriyatravelofindia" },
    { label: "Facebook", url: "https://www.facebook.com/people/Supriya-Travels-India/61591832677172/?sk=about" },
  ],
};

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
