import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, AtSign, MapPin, Phone, Mail } from "lucide-react";
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
            <Logo height={100} className="md:h-[100px]" />
            <p className="mt-8 text-sm leading-relaxed text-white/50 pr-4">{company.description}</p>
            {company.email || company.phone || company.address ? (
              <ul className="mt-8 space-y-4 text-sm text-white/70">
                {company.phone ? (
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{company.phone}</span>
                  </li>
                ) : null}
                {company.email ? (
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                    <span>{company.email}</span>
                  </li>
                ) : null}
                {company.address ? (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {company.googleLocation ? (
                      <a href={company.googleLocation} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors leading-relaxed">
                        {company.address}
                      </a>
                    ) : (
                      <span className="leading-relaxed">{company.address}</span>
                    )}
                  </li>
                ) : null}
              </ul>
            ) : null}
            
            {company.socials && company.socials.length > 0 ? (
              <div className="mt-8 flex flex-wrap gap-4">
                {company.socials.map((social) => {
                  let Icon = AtSign;
                  if (social.label.toLowerCase().includes("instagram")) {
                    Icon = Instagram;
                  } else if (social.label.toLowerCase().includes("facebook")) {
                    Icon = Facebook;
                  }

                  return (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:-translate-y-1 hover:bg-gold hover:text-navy hover:shadow-lg hover:shadow-gold/20"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
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
