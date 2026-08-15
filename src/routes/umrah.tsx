import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { PackageCard } from "@/components/packages/PackageCard";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { packages } from "@/data/packages";
import heroImage from "@/assets/umrah.jpg";

export const Route = createFileRoute("/umrah")({
  head: () => ({
    meta: [
      { title: "Umrah Packages — Supriya Travels of India" },
      {
        name: "description",
        content:
          "Umrah packages across economy, semi deluxe and super deluxe categories, with flights, visa, accommodation and transfers arranged.",
      },
      { property: "og:title", content: "Umrah Packages — Supriya Travels of India" },
      { property: "og:description", content: "Begin your Umrah journey with support at every stage." },
      { property: "og:url", content: "/umrah" },
    ],
    links: [{ rel: "canonical", href: "/umrah" }],
  }),
  component: UmrahPage,
});

const inclusions = [
  { title: "Accommodation", text: "Hotel category selected and confirmed at the time of booking." },
  { title: "Flights", text: "Return air travel arranged around your preferred travel window." },
  { title: "Transportation", text: "Airport and inter-city transfers throughout the journey." },
  { title: "Visa", text: "Umrah visa documentation and processing support." },
  { title: "Support", text: "A point of contact before departure and during travel." },
];

function UmrahPage() {
  const umrah = packages.filter((p) => p.type === "umrah");

  return (
    <>
      <PageHero
        tall
        eyebrow="Sacred Journeys"
        title={
          <>
            Begin Your
            <br />
            <em className="text-gold">Umrah Journey.</em>
          </>
        }
        intro="Umrah travel arranged around your dates, with the documentation and logistics taken care of."
        image={heroImage}
        imageAlt="Lantern-lit mosque arcade at night"
        crumbs={[{ label: "Home", to: "/" }, { label: "Umrah" }]}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Package Types"
            title="Economy, Semi Deluxe and Super Deluxe."
            intro="Categories differ mainly in accommodation and distance from the Haram. Full inclusions are confirmed before booking."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {umrah.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="What Is Arranged" title="Included in your journey." />
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

      <CTASection title="Ready to plan your Umrah?" text="Share your preferred dates and we will prepare the options." />
    </>
  );
}
