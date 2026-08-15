import { Link } from "@tanstack/react-router";
import type { TravelPackage } from "@/data/packages";
import { getDestination } from "@/data/destinations";

const typeLabel: Record<TravelPackage["type"], string> = {
  domestic: "Domestic",
  international: "International",
  hajj: "Hajj",
  umrah: "Umrah",
};

export function PackageCard({ pkg }: { pkg: TravelPackage }) {
  const destination = pkg.destinationSlug ? getDestination(pkg.destinationSlug) : undefined;

  return (
    <article className="group flex h-full flex-col border border-border bg-card transition-colors duration-300 hover:border-gold">
      {destination ? (
        <div className="overflow-hidden">
          <img
            src={destination.heroImage}
            alt={destination.name}
            width={1600}
            height={1000}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow text-gold">{typeLabel[pkg.type]}</span>
          {pkg.duration ? (
            <span className="text-xs text-muted-foreground">
              {pkg.duration} nights
            </span>
          ) : null}
        </div>

        <h3 className="font-display mt-3 text-2xl leading-tight text-navy">{pkg.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{pkg.destination}</p>

        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-gold" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Starting from</p>
            <p className="font-display text-xl text-navy">
              {pkg.price === null ? "On request" : `₹${pkg.price.toLocaleString("en-IN")}`}
            </p>
          </div>
          <Link
            to="/contact"
            className="link-gold text-sm font-medium text-navy"
          >
            Enquire →
          </Link>
        </div>
      </div>
    </article>
  );
}
