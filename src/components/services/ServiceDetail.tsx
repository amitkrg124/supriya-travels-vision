import type { ReactNode } from "react";
import { PageHero } from "@/components/ui-editorial/PageHero";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { CTASection } from "@/components/ui-editorial/CTASection";

export function ServiceDetail({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  crumbLabel,
  body,
  items,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  imageAlt: string;
  crumbLabel: string;
  body: string;
  items: { title: string; text: string }[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        image={image}
        imageAlt={imageAlt}
        crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/our-services" }, { label: crumbLabel }]}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="shell">
          <SectionHeading eyebrow="Overview" title={body} />
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.05} className="border-t border-border pt-6">
                <h2 className="font-display text-2xl text-navy">{item.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
