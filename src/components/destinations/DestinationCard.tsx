import { Link } from "@tanstack/react-router";
import type { Destination } from "@/data/destinations";
import { cn } from "@/lib/utils";

export function DestinationCard({
  destination,
  size = "small",
  className,
}: {
  destination: Destination;
  size?: "large" | "small";
  className?: string;
}) {
  return (
    <Link
      to="/destinations/$slug"
      params={{ slug: destination.slug }}
      className={cn("group relative block overflow-hidden bg-navy", className)}
    >
      <img
        src={destination.heroImage}
        alt={`${destination.name}, ${destination.country}`}
        width={1600}
        height={1000}
        loading="lazy"
        className={cn(
          "h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]",
          size === "large" ? "min-h-[62vh]" : "min-h-[300px] md:min-h-[340px]",
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(4,17,29,0.82) 0%, rgba(4,17,29,0.20) 55%, rgba(4,17,29,0.05) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="eyebrow text-gold">{destination.country}</p>
        <h3
          className={cn(
            "font-display mt-2 leading-none text-white",
            size === "large" ? "text-4xl md:text-5xl" : "text-3xl",
          )}
        >
          {destination.name}
        </h3>
        <p className="mt-3 max-w-md text-sm text-white/70">{destination.tagline}</p>
      </div>
    </Link>
  );
}
