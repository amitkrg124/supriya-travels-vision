import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import heroImage from "@/assets/about-editorial.jpg";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/services/tourist-visas")({
  head: () => ({
    meta: createMetadata({
      title: "Tourist Visa Services in Delhi | Dubai, Schengen & More",
      description:
        "Tourist visa assistance from Delhi for Dubai, Thailand, Singapore, Schengen and worldwide destinations: document checklist, application and appointment help.",
      keywords: ["tourist visa services Delhi", "visa agent in Delhi", "Dubai tourist visa", "Schengen visa assistance", "Umrah visa", "worldwide tourist visa"],
    }),
    links: createCanonicalLink("/services/tourist-visas"),
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
