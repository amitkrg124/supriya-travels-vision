import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group border-t border-border py-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-baseline">
        <div>
          <h3 className="font-display text-2xl leading-tight text-navy md:text-3xl">{service.title}</h3>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden className="h-1 w-1 rounded-full bg-gold" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <Link to={service.href} className="link-gold text-sm font-medium text-navy md:self-center">
          Learn more →
        </Link>
      </div>
    </article>
  );
}
