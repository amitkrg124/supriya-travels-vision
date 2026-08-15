import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { PackageCard } from "@/components/packages/PackageCard";
import { CTASection } from "@/components/ui-editorial/CTASection";
import { packages, type PackageType } from "@/data/packages";
import heroImage from "@/assets/dest-rajasthan.jpg";
import { cn } from "@/lib/utils";
import { createMetadata, createCanonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/packages")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: search.q as string | undefined,
      dest: search.dest as string | undefined,
      dur: search.dur as string | undefined,
      type: search.type as string | undefined,
    }
  },
  head: () => ({
    meta: createMetadata({
      title: "Travel Packages | Hajj, Umrah, Domestic & International Tours",
      description:
        "Browse Hajj, Umrah, domestic and international travel packages arranged by Supriya Travels of India.",
    }),
    links: createCanonicalLink("/packages"),
  }),
  component: PackagesPage,
});

const filters: { label: string; value: PackageType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Domestic", value: "domestic" },
  { label: "International", value: "international" },
  { label: "Hajj", value: "hajj" },
  { label: "Umrah", value: "umrah" },
];

const durations = [
  { label: "Any duration", value: "any" },
  { label: "Up to 4 nights", value: "short" },
  { label: "5–6 nights", value: "mid" },
  { label: "7 nights or more", value: "long" },
];

function PackagesPage() {
  const search = Route.useSearch();
  const [keyword, setKeyword] = useState(search.q || "");
  const [type, setType] = useState<PackageType | "all">((search.type as PackageType) || "all");
  const [duration, setDuration] = useState(search.dur || "any");
  const [destination, setDestination] = useState(search.dest || "all");

  const destinationOptions = useMemo(
    () => Array.from(new Set(packages.map((p) => p.destination))).sort(),
    [],
  );

  const results = packages.filter((p) => {
    if (type !== "all" && p.type !== type) return false;
    if (destination !== "all" && p.destination !== destination) return false;
    if (duration === "short" && !(p.duration > 0 && p.duration <= 4)) return false;
    if (duration === "mid" && !(p.duration >= 5 && p.duration <= 6)) return false;
    if (duration === "long" && !(p.duration >= 7)) return false;
    if (keyword) {
      const q = keyword.toLowerCase();
      if (!p.title.toLowerCase().includes(q) && !p.destination.toLowerCase().includes(q)) {
        return false;
      }
    }
    return true;
  });

  const select =
    "border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold";

  return (
    <>
      <PageHero
        eyebrow="Current Packages"
        title="Choose Your Journey."
        intro="Every package is arranged to order. Pricing is confirmed at enquiry, based on your dates, category and group size."
        image={heroImage}
        imageAlt="Palace courtyard in Rajasthan"
        crumbs={[{ label: "Home", to: "/" }, { label: "Packages" }]}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setType(f.value)}
                aria-pressed={type === f.value}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                  type === f.value
                    ? "border-navy bg-navy text-white"
                    : "border-border text-muted-foreground hover:border-gold hover:text-navy",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <label className="sr-only" htmlFor="keyword-filter">
                Keywords
              </label>
              <input
                id="keyword-filter"
                type="text"
                placeholder="Search keywords..."
                className={select + " w-full"}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <label className="sr-only" htmlFor="destination-filter">
              Destination
            </label>
            <select
              id="destination-filter"
              className={select}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="all">All destinations</option>
              {destinationOptions.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <label className="sr-only" htmlFor="duration-filter">
              Duration
            </label>
            <select
              id="duration-filter"
              className={select}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              {durations.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "package" : "packages"}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {results.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.05}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>

          {!results.length ? (
            <p className="mt-12 max-w-md text-[15px] text-muted-foreground">
              No packages match this combination yet. Send us an enquiry and we will plan one to
              your requirements.
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="shell">
          <SectionHeading
            eyebrow="Pricing"
            title="Pricing is confirmed at enquiry."
            intro="Fares, hotel categories and seasonal rates change through the year. Rather than publish figures that may not hold, we confirm current pricing when you enquire."
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
