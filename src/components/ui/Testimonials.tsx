import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui-editorial/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";

const testimonials = [
  {
    name: "Ahmad Rizvi",
    role: "Hajj Pilgrim, 2024",
    content: "Our Hajj experience with Supriya Travels was truly seamless. From the visa processing to the premium accommodation in Makkah, their dedicated support team was with us every step of the way. Highly recommended for a stress-free sacred journey.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Honeymoon in Maldives",
    content: "Absolutely magical! They tailored our Maldives lagoon retreat perfectly. The overwater villa suggestion was spot on, and all transfers were handled with absolute professionalism. We couldn't have asked for a better honeymoon.",
    rating: 5,
  },
  {
    name: "Mohammed Tariq",
    role: "Business Traveler",
    content: "I have been using Supriya Travels for my B2B ticketing and corporate visas for over three years. Their prompt service, transparent pricing, and 24/7 availability make them the best travel partner in New Delhi.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy-deep py-24 md:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Testimonials"
          tone="light"
          title={<>Stories from our <br className="hidden sm:block" />happy travelers.</>}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-colors hover:border-gold/30 hover:bg-white/10">
                <div>
                  <div className="flex gap-1 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-white/80">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-display text-lg text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-gold">{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
