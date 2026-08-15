import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import heroImage from "@/assets/dest-himachal.jpg";
import { company, whatsappHref } from "@/data/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Supriya Travels of India" },
      {
        name: "description",
        content:
          "Send an enquiry to Supriya Travels of India for Hajj, Umrah, holiday packages, tourist visas or air ticketing.",
      },
      { property: "og:title", content: "Contact — Supriya Travels of India" },
      { property: "og:description", content: "Let's plan your journey." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { label: "Phone", value: company.phone },
    { label: "WhatsApp", value: company.whatsapp },
    { label: "Email", value: company.email },
    { label: "Office", value: company.address },
  ].filter((d) => d.value);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Plan Your Journey."
        intro="Tell us where you want to go and when. We'll come back with a plan, the requirements and the next steps."
        image={heroImage}
        imageAlt="Himalayan ridges in Himachal Pradesh"
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow="Reach Us" title="Speak to the team." />
            {details.length ? (
              <dl className="mt-10 border-t border-border">
                {details.map((d) => (
                  <div key={d.label} className="border-b border-border py-5">
                    <dt className="eyebrow text-gold">{d.label}</dt>
                    <dd className="mt-2 text-[15px] text-navy">{d.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Contact details are being confirmed. Send the enquiry form and our team will respond
                directly.
              </p>
            )}
            {company.whatsapp ? (
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="link-gold mt-8 inline-block text-sm font-medium text-navy">
                Message us on WhatsApp →
              </a>
            ) : null}
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
