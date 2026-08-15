import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroCinematic } from "@/components/hero/HeroCinematic";
import { SectionHeading, Eyebrow } from "@/components/ui-editorial/SectionHeading";
import { Reveal, ImageReveal } from "@/components/animations/Reveal";
import { PillLink } from "@/components/ui-editorial/PillButton";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { PackageCard } from "@/components/packages/PackageCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import { destinations, getDestination } from "@/data/destinations";
import { packages } from "@/data/packages";
import { services } from "@/data/services";
import { company } from "@/data/company";
import aboutImage from "@/assets/about-editorial.jpg";
import sacredImage from "@/assets/sacred-journeys.jpg";
import { CircularGallery } from "@/components/ui/CircularGallery";
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
  const dubai = getDestination("dubai")!;
  const kashmir = getDestination("kashmir")!;
  const intlSmall = ["bali", "maldives", "thailand"].map((s) => getDestination(s)!);
  const domSmall = ["kerala", "rajasthan", "himachal-pradesh"].map((s) => getDestination(s)!);
  const featured = packages.filter((p) => ["pkg-dubai-city", "pkg-kashmir", "pkg-maldives"].includes(p.id));

  return (
    <>
      <HeroCinematic />

      {/* SEARCH BOX OVERLAP */}
      <div className="relative z-10 shell -mt-10 sm:-mt-16 px-4 md:px-0">
        <Reveal delay={0.2}>
          <SearchBox />
        </Reveal>
      </div>

      {/* ACT 2 — TRUST */}
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

      {/* ACT 3 — SACRED JOURNEYS */}
      <section className="relative overflow-hidden bg-navy">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[380px] lg:min-h-[640px]">
            <img
              src={sacredImage}
              alt="Pilgrims walking through a mosque courtyard at dawn"
              width={1600}
              height={1100}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-navy-deep/25" />
          </div>
          <div className="flex items-center px-6 py-20 md:px-16 md:py-28">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow="Sacred Journeys"
                tone="light"
                title={
                  <>
                    A Journey of Faith,
                    <br />
                    <em className="text-gold">Handled With Care.</em>
                  </>
                }
                intro="Supriya Travels of India provides professionally managed Hajj and Umrah travel services designed to make the pilgrimage journey organised, comfortable and supported from departure to return."
              />
              <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PillLink to="/hajj" variant="gold">
                  Explore Hajj
                </PillLink>
                <PillLink to="/umrah" variant="ghostLight">
                  Explore Umrah
                </PillLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
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

      {/* CIRCULAR GALLERY DESTINATIONS */}
      <section className="bg-navy py-12 md:py-16">
        <div className="shell flex flex-col items-center">
          <SectionHeading eyebrow="Explore" title="Discover Our Destinations" tone="light" />
          <div 
            className="w-full h-[60vh] md:h-[70vh] relative rounded-[40px] shadow-2xl mt-10 overflow-hidden bg-navy-deep/50 border border-white/10"
            style={{ padding: '40px' }}
          >
            <CircularGallery 
              items={destinations.map(d => ({ image: d.heroImage, text: d.name }))}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.04}
              scrollSpeed={2}
            />
          </div>
        </div>
      </section>

      {/* ACT 4 — DESTINATIONS */}
      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="International" title="Where Will Your Journey Take You?" />

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
            <Reveal>
              <DestinationCard destination={dubai} size="large" />
            </Reveal>
            <div className="grid gap-5">
              {intlSmall.map((d, i) => (
                <Reveal key={d.slug} delay={0.05 * (i + 1)}>
                  <DestinationCard destination={d} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-24">
            <SectionHeading eyebrow="Domestic" title="Closer to home, no less remarkable." />
            <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.35fr]">
              <div className="grid gap-5">
                {domSmall.map((d, i) => (
                  <Reveal key={d.slug} delay={0.05 * i}>
                    <DestinationCard destination={d} />
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <DestinationCard destination={kashmir} size="large" className="h-full" />
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-14">
            <Link to="/destinations" className="link-gold font-display text-2xl text-navy">
              View all {destinations.length} destinations →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ACT 5 — PACKAGES */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="Featured Packages" title="A few journeys to begin with." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <PillLink to="/packages" variant="outline" className="text-navy">
              See all packages
            </PillLink>
          </Reveal>
        </div>
      </section>

      {/* ACT 6 — WHY CHOOSE US + PROCESS */}
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

      <Testimonials />
      
      <CTASection />
    </>
  );
}
