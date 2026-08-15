export type Service = {
  id: string;
  title: string;
  slug: string;
  href: string;
  summary: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "hajj",
    title: "Hajj Packages",
    slug: "hajj",
    href: "/hajj",
    summary: "Professionally managed Hajj travel, arranged end to end.",
    description:
      "Hajj travel arrangements covering flights, visa processing, accommodation, ground transport and on-ground coordination, organised so pilgrims can focus on the journey itself.",
    points: ["Flight arrangements", "Visa processing", "Accommodation", "Ground transport"],
  },
  {
    id: "umrah",
    title: "Umrah Packages",
    slug: "umrah",
    href: "/umrah",
    summary: "Umrah journeys planned around your dates and comfort.",
    description:
      "Umrah packages arranged across economy, semi deluxe and super deluxe categories, with flights, visa, hotels and transfers coordinated by our team.",
    points: ["Flexible departures", "Hotel categories", "Visa assistance", "Transfers"],
  },
  {
    id: "tourist-visas",
    title: "Worldwide Tourist Visas",
    slug: "tourist-visas",
    href: "/services/tourist-visas",
    summary: "Documentation support for tourist visa applications worldwide.",
    description:
      "Guidance on documentation, appointment scheduling and application submission for tourist visas across a wide range of destinations.",
    points: ["Document checklists", "Application guidance", "Appointment support"],
  },
  {
    id: "domestic-ticketing",
    title: "Domestic Air Ticketing",
    slug: "domestic-air-ticketing",
    href: "/services/air-ticketing",
    summary: "Domestic flights booked, reissued and managed for you.",
    description:
      "Booking, date changes, cancellations and rescheduling across domestic sectors, handled by a team you can reach directly.",
    points: ["Booking & reissue", "Date changes", "Group bookings"],
  },
  {
    id: "international-ticketing",
    title: "International Air Ticketing",
    slug: "international-air-ticketing",
    href: "/services/air-ticketing",
    summary: "International itineraries, fares and multi-city routing.",
    description:
      "International air ticketing including multi-city routing, long-haul connections and fare options suited to your travel plan.",
    points: ["Multi-city routing", "Fare options", "Itinerary planning"],
  },
  {
    id: "b2b-ticketing",
    title: "B2B Air Ticketing",
    slug: "b2b-air-ticketing",
    href: "/services/b2b-air-ticketing",
    summary: "Ticketing support for agents and trade partners.",
    description:
      "Dedicated ticketing support for travel agents and trade partners, with direct coordination on bookings, changes and issuance.",
    points: ["Agent support", "Fast issuance", "Direct coordination"],
  },
  {
    id: "domestic-tours",
    title: "Domestic Tour Packages",
    slug: "domestic-tours",
    href: "/packages",
    summary: "Curated journeys across India's most loved regions.",
    description:
      "Tour packages across Kashmir, Himachal Pradesh, Kerala, Rajasthan and North East India — planned around pace, season and interest.",
    points: ["Family itineraries", "Seasonal planning", "Hotels & transport"],
  },
  {
    id: "international-tours",
    title: "International Tour Packages",
    slug: "international-tours",
    href: "/packages",
    summary: "Holidays across Asia, the Middle East and the Indian Ocean.",
    description:
      "International holiday packages to Dubai, Bali, Thailand, Singapore, Malaysia, Maldives, Mauritius, Egypt and Nepal.",
    points: ["Visa + flights", "Hotels & transfers", "Guided experiences"],
  },
];
