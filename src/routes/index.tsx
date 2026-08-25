import { createFileRoute } from "@tanstack/react-router";
import { Hero3DPortal } from "@/components/hero/Hero3DPortal";
import { HiddenGemsHorizontal } from "@/components/destinations/HiddenGemsHorizontal";
import { PromiseSection } from "@/components/ui-editorial/PromiseSection";
import { PopularDestinationsSection } from "@/components/destinations/PopularDestinationsSection";
import { SectionHeading, Eyebrow } from "@/components/ui-editorial/SectionHeading";
import { Reveal, ImageReveal } from "@/components/animations/Reveal";
import { PillLink } from "@/components/ui-editorial/PillButton";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { company } from "@/data/company";
import aboutImage from "@/assets/about-editorial.jpg";
import { Testimonials } from "@/components/ui/Testimonials";
import { SearchBox } from "@/components/ui/SearchBox";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: createMetadata({
      title: "Supriya Travels of India | Hajj, Umrah & Global Travel",
      description:
        "Supriya Travels of India offers Hajj and Umrah packages, domestic and international tours, worldwide tourist visas and air ticketing services from New Delhi.",
    }),
    links: createCanonicalLink("/"),
  }),
  component: Home,
});

const process = [
  { step: "01", title: "Tell us your plan", text: "Share your dates, destination and who you're travelling with." },
  { step: "02", title: "We build the itinerary", text: "Flights, stays, transfers and visa steps, laid out clearly." },
  { step: "03", title: "Confirm with clarity", text: "You approve the details before anything is booked." },
  { step: "04", title: "Travel supported", text: "We stay reachable from departure through to return." },
];

const reasons = [
  { title: "Sacred journeys handled properly", text: "Hajj and Umrah travel arranged with the documentation, coordination and care the journey deserves." },
  { title: "One team for the whole trip", text: "Visa, ticketing, hotels and transfers arranged together rather than across separate agencies." },
  { title: "Plans built around you", text: "Itineraries shaped by your dates, pace and budget instead of a fixed template." },
  { title: "Reachable people", text: "Direct contact with the team handling your booking, before and during travel." },
];

function Home() {
  return (
    <>
      {/* 1. 3D HERO PORTAL (300vh SCROLL TRACK) */}
      <Hero3DPortal />

      {/* 2. SEARCH BOX OVERLAP */}
      <div className="relative z-20 shell -mt-10 sm:-mt-16 px-4 md:px-0">
        <Reveal delay={0.2}>
          <SearchBox />
        </Reveal>
      </div>

      {/* 3. ABOUT / TRUST & HERITAGE */}
      <section className="bg-background py-24 md:py-36">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="About Supriya Travels"
              title={
                <>
                  More Than Travel.
                  <br />
                  <em className="text-gold">A Journey You Can Trust.</em>
                </>
              }
              intro="Supriya Travels of India is a New Delhi-based travel company providing Hajj and Umrah packages, domestic and international tours, worldwide tourist visa assistance and air ticketing services for individual travellers, families and trade partners."
            />
            <Reveal delay={0.1} className="mt-10">
              <PillLink to="/about-us" variant="outline" className="text-navy">
                About the company
              </PillLink>
            </Reveal>
            {company.metrics.length ? (
              <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10">
                {company.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{m.label}</dt>
                    <dd className="font-display mt-1 text-3xl text-navy">{m.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <ImageReveal
            src={aboutImage}
            alt="Travel documents and an itinerary notebook on a desk"
            className="aspect-[4/5] lg:translate-y-8"
            width={1400}
            height={1750}
          />
        </div>
      </section>

      {/* 4. HIDDEN GEMS & SIGNATURE PACKAGES (500vh HORIZONTAL SCROLL) */}
      <HiddenGemsHorizontal />

      {/* 5. THE PROMISE (DYNAMIC CLIP-PATH REVEAL) */}
      <PromiseSection />

      {/* 6. POPULAR DESTINATIONS (CUSTOM 80px SCROLLBAR TRACK & CATEGORY FILTERS) */}
      <PopularDestinationsSection />

      {/* 7. CORE SERVICES (WHAT WE DO) */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Everything a journey needs, in one place.</>}
          />
          <div className="mt-12">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.03}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US + THE JOURNEY PROCESS */}
      <section className="bg-navy py-24 text-white md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why Choose Us"
            tone="light"
            title={<>Planned properly. Handled personally.</>}
          />
          <div className="grid gap-10 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <h3 className="font-display text-2xl leading-tight text-white">{r.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="shell mt-24">
          <Eyebrow>The Journey Process</Eyebrow>
          <div className="mt-10 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <span className="font-display text-lg text-gold">{p.step}</span>
                <h3 className="font-display mt-3 text-xl text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <Testimonials />

      {/* 10. CALL TO ACTION */}
      <CTASection />
    </>
  );
}
