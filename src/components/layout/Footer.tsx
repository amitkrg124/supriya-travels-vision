import { Link } from "@tanstack/react-router";
import { company, navigation } from "@/data/company";
import { Logo } from "./Logo";

const popular = [
  { label: "Dubai", to: "/destinations/dubai" },
  { label: "Bali", to: "/destinations/bali" },
  { label: "Maldives", to: "/destinations/maldives" },
  { label: "Kashmir", to: "/destinations/kashmir" },
  { label: "Himachal Pradesh", to: "/destinations/himachal-pradesh" },
];

const serviceLinks = [
  { label: "Hajj", to: "/hajj" },
  { label: "Umrah", to: "/umrah" },
  { label: "Tourist Visa", to: "/services/tourist-visas" },
  { label: "Air Ticketing", to: "/services/air-ticketing" },
  { label: "B2B Ticketing", to: "/services/b2b-air-ticketing" },
];

function Column({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow text-gold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="link-gold text-sm text-white/70 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo height={56} />
            <p className="mt-6 text-sm leading-relaxed text-white/65">{company.description}</p>
            {company.email || company.phone || company.address ? (
              <ul className="mt-6 space-y-1 text-sm text-white/70">
                {company.phone ? <li>{company.phone}</li> : null}
                {company.email ? <li>{company.email}</li> : null}
                {company.address ? <li>{company.address}</li> : null}
              </ul>
            ) : null}
          </div>

          <Column title="Quick Links" links={navigation.map((n) => ({ label: n.label, to: n.to }))} />
          <Column title="Popular Destinations" links={popular} />
          <Column title="Services" links={serviceLinks} />
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-6 flex flex-col gap-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link to="/privacy-policy" className="link-gold hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="link-gold hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="link-gold hover:text-white">
                Refund &amp; Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
