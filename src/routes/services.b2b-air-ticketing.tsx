import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import heroImage from "@/assets/dest-singapore.jpg";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/services/b2b-air-ticketing")({
  head: () => ({
    meta: createMetadata({
      title: "B2B Air Ticketing for Travel Agents | Supriya Travels of India",
      description:
        "B2B air ticketing desk for travel agents and trade partners in India: fast issuance, holds, reissues, refunds and group fares with direct coordination.",
      keywords: ["B2B air ticketing", "air ticketing for travel agents", "B2B travel agency Delhi", "group fares for agents", "airline ticket consolidator India"],
    }),
    links: createCanonicalLink("/services/b2b-air-ticketing"),
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
