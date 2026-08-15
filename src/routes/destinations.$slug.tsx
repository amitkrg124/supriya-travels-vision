import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal, ImageReveal } from "@/components/animations/Reveal";
import { PillLink } from "@/components/ui-editorial/PillButton";
import { PackageCard } from "@/components/packages/PackageCard";
import { FaqList } from "@/components/ui-editorial/Faq";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { destinations, getDestination } from "@/data/destinations";
import { packagesByDestination } from "@/data/packages";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestination(params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Destination not found" }, { name: "robots", content: "noindex" }] };
    }
    const d = loaderData.destination;
    const title = `${d.name} Tour Packages from Delhi | Supriya Travels`;
    return {
      meta: createMetadata({
        title,
        description: d.description,
        type: "article"
      }),
      links: createCanonicalLink(`/destinations/${params.slug}`),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: d.name,
            description: d.description,
            touristType: "Leisure",
            address: { "@type": "PostalAddress", addressCountry: d.country },
          }),
        },
      ],
    };
  },
  component: DestinationPage,
});

function DestinationPage() {
  const { destination: d } = Route.useLoaderData();
  const pkgs = packagesByDestination(d.slug);
  const related = destinations.filter((x) => x.slug !== d.slug && x.region === d.region).slice(0, 3);

  return (
    <>
      <PageHero
        tall
        eyebrow={d.country}
        title={d.name}
        intro={d.tagline}
        image={d.heroImage}
        imageAlt={`${d.name}, ${d.country}`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations", to: "/destinations" }, { label: d.name }]}
      >
        <PillLink to="/contact" variant="gold">
          Plan My {d.name} Journey
        </PillLink>
      </PageHero>

      <section className="bg-background py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow="Introduction" title={d.description} />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">{d.intro}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <dl className="border-t border-border">
              <div className="border-b border-border py-6">
                <dt className="eyebrow text-gold">Best time to visit</dt>
                <dd className="mt-2 text-[15px] text-navy">{d.bestTime}</dd>
              </div>
              <div className="border-b border-border py-6">
                <dt className="eyebrow text-gold">Suggested duration</dt>
                <dd className="mt-2 text-[15px] text-navy">{d.duration}</dd>
              </div>
              <div className="py-6">
                <dt className="eyebrow text-gold">Highlights</dt>
                <dd>
                  <ul className="mt-3 space-y-2 text-[15px] text-muted-foreground">
                    {d.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="Top Attractions" title={`What to see in ${d.name}.`} />
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {d.attractions.map((a, i) => (
              <Reveal key={a.name} delay={(i % 2) * 0.05} className="border-t border-border pt-6">
                <h3 className="font-display text-2xl text-navy">{a.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{a.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="Gallery" title={`${d.name} in view.`} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {d.gallery.map((src, i) => (
              <ImageReveal key={i} src={src} alt={`${d.name} photography`} className="aspect-[4/3]" />
            ))}
            <ImageReveal src={d.heroImage} alt={`${d.name} landscape`} className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {pkgs.length ? (
        <section className="bg-secondary py-24 md:py-32">
          <div className="shell">
            <SectionHeading eyebrow="Packages" title={`Journeys to ${d.name}.`} />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pkgs.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <PackageCard pkg={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {d.faqs.length ? (
        <section className="bg-background py-24 md:py-32">
          <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="FAQ" title="Good to know." />
            <Reveal>
              <FaqList items={d.faqs} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="bg-secondary py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="Related" title="You may also consider." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.05}>
                <DestinationCard destination={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Ready for ${d.name}?`} />
    </>
  );
}
