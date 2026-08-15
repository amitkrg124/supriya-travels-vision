import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import heroImage from "@/assets/dest-singapore.jpg";

export const Route = createFileRoute("/services/b2b-air-ticketing")({
  head: () => ({
    meta: [
      { title: "B2B Air Ticketing — Supriya Travels of India" },
      {
        name: "description",
        content: "Ticketing support for travel agents and trade partners, with direct coordination on bookings and issuance.",
      },
      { property: "og:title", content: "B2B Air Ticketing — Supriya Travels of India" },
      { property: "og:description", content: "Trade ticketing support for agents and partners." },
      { property: "og:url", content: "/services/b2b-air-ticketing" },
    ],
    links: [{ rel: "canonical", href: "/services/b2b-air-ticketing" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Trade Partners"
      title="B2B Air Ticketing"
      intro="Ticketing support for travel agents and trade partners who need a dependable issuing desk."
      image={heroImage}
      imageAlt="City skyline at blue hour"
      crumbLabel="B2B Air Ticketing"
      body="Agents need speed and a straight answer. Our trade desk handles issuance, changes and escalations without going through a queue."
      items={[
        { title: "Agent support", text: "A direct point of contact for bookings, holds and clarifications." },
        { title: "Fast issuance", text: "Prompt ticketing within fare deadlines and hold windows." },
        { title: "Change handling", text: "Reissues, cancellations and refund follow-ups managed on your behalf." },
      ]}
    />
  ),
});
