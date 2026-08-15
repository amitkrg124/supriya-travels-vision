import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { internationalDestinations, domesticDestinations, getDestination } from "@/data/destinations";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations — Supriya Travels of India" },
      {
        name: "description",
        content:
          "Explore international destinations including Dubai, Bali and the Maldives, and Indian destinations including Kashmir, Kerala and Rajasthan.",
      },
      { property: "og:title", content: "Destinations — Supriya Travels of India" },
      { property: "og:description", content: "Fourteen destinations across India and the world." },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const hero = getDestination("maldives")!;

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where Will Your Journey Take You?"
        intro="Fourteen destinations across India and the world, each planned around season, pace and the kind of travel you have in mind."
        image={hero.heroImage}
        imageAlt="Turquoise lagoon in the Maldives"
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations" }]}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="International" title="Beyond India." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {internationalDestinations.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 0.05}>
                <DestinationCard destination={d} />
              </Reveal>
            ))}
          </div>

          <div className="mt-24">
            <SectionHeading eyebrow="Domestic" title="Across India." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {domesticDestinations.map((d, i) => (
                <Reveal key={d.slug} delay={(i % 3) * 0.05}>
                  <DestinationCard destination={d} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
