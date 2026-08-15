import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import heroImage from "@/assets/final-cta.jpg";

export const Route = createFileRoute("/services/air-ticketing")({
  head: () => ({
    meta: [
      { title: "Air Ticketing — Supriya Travels of India" },
      {
        name: "description",
        content:
          "Domestic and international air ticketing, including reissues, date changes, group bookings and multi-city routing.",
      },
      { property: "og:title", content: "Air Ticketing — Supriya Travels of India" },
      { property: "og:description", content: "Domestic and international flights, handled by people you can reach." },
      { property: "og:url", content: "/services/air-ticketing" },
    ],
    links: [{ rel: "canonical", href: "/services/air-ticketing" }],
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
