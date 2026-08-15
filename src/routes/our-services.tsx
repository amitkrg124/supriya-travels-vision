import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { services } from "@/data/services";
import heroImage from "@/assets/final-cta.jpg";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: createMetadata({
      title: "Travel Services | Hajj, Umrah, Visa & Air Ticketing",
      description:
        "Hajj and Umrah packages, worldwide tourist visas, domestic, international and B2B air ticketing, and tour packages across India and abroad.",
    }),
    links: createCanonicalLink("/our-services"),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything a Journey Needs."
        intro="Pilgrimage travel, holidays, visas and ticketing — arranged by one team, in one conversation."
        image={heroImage}
        imageAlt="Aircraft wing above clouds at dusk"
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="Services" title="What we handle." />
          <div className="mt-12">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.03}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
