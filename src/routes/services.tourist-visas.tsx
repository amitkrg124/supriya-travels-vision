import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import heroImage from "@/assets/about-editorial.jpg";

export const Route = createFileRoute("/services/tourist-visas")({
  head: () => ({
    meta: [
      { title: "Worldwide Tourist Visas — Supriya Travels of India" },
      {
        name: "description",
        content:
          "Tourist visa documentation, appointment scheduling and application support for destinations worldwide.",
      },
      { property: "og:title", content: "Worldwide Tourist Visas — Supriya Travels of India" },
      { property: "og:description", content: "Visa documentation and application support." },
      { property: "og:url", content: "/services/tourist-visas" },
    ],
    links: [{ rel: "canonical", href: "/services/tourist-visas" }],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Service"
      title="Worldwide Tourist Visas"
      intro="Documentation, appointments and submissions handled with the current requirements in mind."
      image={heroImage}
      imageAlt="Passports and travel documents on a desk"
      crumbLabel="Tourist Visas"
      body="Visa rules change frequently. We work from the current requirements for your destination and passport, and tell you exactly what is needed."
      items={[
        { title: "Document checklist", text: "A clear list of what to prepare, specific to your destination and travel purpose." },
        { title: "Application guidance", text: "Form completion, supporting documents and submission requirements reviewed before filing." },
        { title: "Appointment support", text: "Assistance with scheduling appointments and biometric requirements where applicable." },
      ]}
    />
  ),
});
