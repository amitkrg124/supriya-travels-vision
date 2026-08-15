import ctaImage from "@/assets/final-cta.jpg";
import { PillLink } from "./PillButton";
import { Reveal } from "@/components/animations/Reveal";

export function CTASection({
  title = "Your Next Journey Is Waiting.",
  text = "Tell us where you want to go. We'll help you plan the journey.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <img
        src={ctaImage}
        alt="Aerial view of a winding mountain road through lush valleys — the journey ahead"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(4,17,29,0.92) 0%, rgba(4,17,29,0.55) 100%)" }}
      />
      <div className="shell relative z-10 py-24 md:py-36">
        <Reveal className="max-w-2xl">
          <h2 className="display-xl text-white">{title}</h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/75">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PillLink to="/packages" variant="gold">
              Explore Packages
            </PillLink>
            <PillLink to="/contact" variant="ghostLight">
              Talk to a Travel Expert
            </PillLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
