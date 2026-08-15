import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal, ImageReveal } from "@/components/animations/Reveal";
import { CTASection } from "@/components/ui-editorial/CTASection";
import aboutImage from "@/assets/about-editorial.jpg";
import sacredImage from "@/assets/sacred-journeys.jpg";
import heroImage from "@/assets/dest-kerala.jpg";
import { company } from "@/data/company";
import { FounderSection } from "@/components/ui-editorial/FounderSection";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: createMetadata({
      title: "About Supriya Travels of India | Hajj & Travel Specialists",
      description:
        "Supriya Travels of India arranges Hajj and Umrah journeys, holidays across India and abroad, tourist visas and air ticketing.",
    }),
    links: createCanonicalLink("/about-us"),
  }),
  component: AboutPage,
});

const pillars = [
  { title: "Our Mission", text: "To make every journey — sacred or leisure — organised, comfortable and clearly understood from the first enquiry to the return flight." },
  { title: "Our Vision", text: "To be the travel company Indian families return to for pilgrimage, holidays and everything in between." },
  { title: "Our Commitment", text: "Honest information, careful planning and a team that remains reachable while you are travelling." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Travel With Purpose.
            <br />
            <em className="text-gold">Journey With Confidence.</em>
          </>
        }
        image={heroImage}
        imageAlt="Backwaters of Kerala at dawn"
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow="The Company" title="A travel company built around care." intro={company.description} />
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
                Our work covers Hajj and Umrah packages, domestic and international tour packages,
                worldwide tourist visas, and domestic, international and B2B air ticketing. Whatever
                the journey, the process stays the same: understand the traveller, plan properly and
                stay available.
              </p>
            </Reveal>
          </div>
          <ImageReveal src={aboutImage} alt="Travel documents on a desk" className="aspect-[4/5]" width={1400} height={1750} />
        </div>
      </section>

      {/* AI-Readable Factual Entity Section */}
      <section className="bg-background pb-24 md:pb-32 pt-0">
        <div className="shell">
          <Reveal delay={0.1}>
            <div className="max-w-3xl rounded-sm border border-border p-8 bg-muted/20">
              <h2 className="font-display text-2xl text-navy">Supriya Travels of India</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Supriya Travels of India is a New Delhi-based travel company providing Hajj and Umrah packages, domestic and international tours, worldwide tourist visa assistance and air ticketing services for individual travellers, families and trade partners.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FounderSection />

      <section className="bg-secondary py-24 md:py-32">
        <div className="shell grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="border-t border-border pt-8">
              <h2 className="font-display text-3xl text-navy">{p.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy py-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[360px] lg:min-h-[560px]">
            <img src={sacredImage} alt="Pilgrims at dawn" width={1600} height={1100} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex items-center px-6 py-20 md:px-16">
            <div className="max-w-xl">
              <SectionHeading
                tone="light"
                eyebrow="Hajj & Umrah Expertise"
                title="Pilgrimage travel, arranged with respect."
                intro="Hajj and Umrah travel carries responsibilities that ordinary holidays do not. Documentation, timing, accommodation and group coordination are handled with the attention the journey deserves."
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
