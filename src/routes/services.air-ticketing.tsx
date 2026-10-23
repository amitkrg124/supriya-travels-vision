import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import heroImage from "@/assets/final-cta.jpg";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/services/air-ticketing")({
  head: () => ({
    meta: createMetadata({
      title: "Domestic & International Air Ticketing in Delhi | Supriya Travels",
      description:
        "Book domestic and international flights with Supriya Travels of India: competitive fares, group and Hajj/Umrah bookings, multi-city routes, date changes and reissues.",
      keywords: ["air ticketing Delhi", "flight booking agent Delhi", "international air tickets", "domestic flight booking", "group air tickets", "Hajj Umrah flight tickets"],
    }),
    links: createCanonicalLink("/services/air-ticketing"),
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="Air Ticketing"
      intro="Domestic and international flights booked, changed and managed by a team you can reach directly."
      image={heroImage}
      imageAlt="Aircraft wing above clouds"
      crumbLabel="Air Ticketing"
      body="Booking a flight is easy. Changing one at short notice is not — which is where a direct line to your travel desk matters."
      items={[
        { title: "Domestic sectors", text: "Bookings, reissues, date changes and cancellations across domestic routes." },
        { title: "International routing", text: "Long-haul connections, multi-city itineraries and fare options compared for you." },
        { title: "Group travel", text: "Coordinated bookings for families, tours and pilgrimage groups." },
      ]}
    />
  ),
});
