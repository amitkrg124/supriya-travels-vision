import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { PackageCard } from "@/components/packages/PackageCard";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { packages } from "@/data/packages";
import heroImage from "@/assets/sacred-journeys.jpg";

export const Route = createFileRoute("/hajj")({
  head: () => ({
    meta: [
      { title: "Hajj Packages — Supriya Travels of India" },
      {
        name: "description",
        content:
          "Hajj travel arranged end to end: flights, visa processing, accommodation, transport and on-ground support.",
      },
      { property: "og:title", content: "Hajj Packages — Supriya Travels of India" },
      { property: "og:description", content: "Hajj — a journey of faith, handled with care." },
      { property: "og:url", content: "/hajj" },
    ],
    links: [{ rel: "canonical", href: "/hajj" }],
  }),
  component: HajjPage,
});

const inclusions = [
  { title: "Flights", text: "Return air travel arranged for the confirmed group departure." },
  { title: "Visa assistance", text: "Documentation guidance and application processing support." },
  { title: "Accommodation", text: "Hotel category confirmed at booking, in line with the selected package." },
  { title: "Transportation", text: "Ground transport between airports and the holy sites." },
  { title: "Meals", text: "Meal plan as per the selected package category." },
  { title: "Support", text: "Coordination and assistance through the duration of the journey." },
];

function HajjPage() {
  const hajj = packages.filter((p) => p.type === "hajj");

  return (
    <>
      <PageHero
        tall
        eyebrow="Sacred Journeys"
        title={
          <>
            Hajj — A Journey
            <br />
            <em className="text-gold">of Faith.</em>
          </>
        }
        intro="Professionally managed Hajj travel, organised so that the pilgrimage itself remains the focus."
        image={heroImage}
        imageAlt="Pilgrims in a mosque courtyard at dawn"
        crumbs={[{ label: "Home", to: "/" }, { label: "Hajj" }]}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Package Categories"
            title="Three categories, one standard of care."
            intro="Economy, Semi Deluxe and Super Deluxe differ in accommodation and proximity. Inclusions are confirmed in writing before booking — we never publish details that have not been verified for the season."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {hajj.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="What Is Arranged" title="Handled on your behalf." />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {inclusions.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.05} className="border-t border-border pt-6">
                <h3 className="font-display text-2xl text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Planning your Hajj journey?" text="Send us your details and we will guide you through the requirements." />
    </>
  );
}
