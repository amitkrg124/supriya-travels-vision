import { motion, useReducedMotion } from "framer-motion";
import { PillLink } from "@/components/ui-editorial/PillButton";
import heroPoster from "@/assets/sacred-journeys.jpg";

const VIDEO_SRC = "https://designerstephen.github.io/public-assets/videos/serene-art-hero.mp4";

const rise = (delay: number, reduced: boolean | null) => ({
  initial: reduced ? false : { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export function HeroCinematic() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep md:min-h-screen" style={{ minHeight: "100svh" }}>
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center" }}
        src={VIDEO_SRC}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        initial={reduced ? false : { scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />

      {/* Cinematic readability treatment — the footage stays visible */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,17,29,0.30) 0%, rgba(4,17,29,0.20) 35%, rgba(4,17,29,0.34) 75%, rgba(4,17,29,0.55) 100%)",
        }}
      />

      <div className="shell relative z-10 py-32 text-center">
        <div className="mx-auto max-w-[900px]">
          <motion.p {...rise(0, reduced)} className="eyebrow inline-flex items-center gap-3 text-white">
            <span aria-hidden className="h-px w-8 bg-gold" />
            Supriya Travels of India
          </motion.p>

          <motion.h1 {...rise(0.1, reduced)} className="hero-h1 mt-7 text-white">
            Journeys That
            <br />
            <em className="text-gold-soft">Stay With You.</em>
          </motion.h1>

          <motion.p
            {...rise(0.2, reduced)}
            className="mx-auto mt-7 max-w-[670px] text-base leading-relaxed text-white/80 md:text-[18px]"
          >
            From sacred journeys to unforgettable escapes, Supriya Travels of India helps you travel
            with comfort, care and confidence.
          </motion.p>

          <motion.div
            {...rise(0.4, reduced)}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <PillLink to="/packages" size="lg">
              Explore Our Packages
            </PillLink>
            <PillLink to="/contact" variant="ghostLight" size="lg">
              Plan Your Journey
            </PillLink>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">
          Scroll to explore
        </span>
        <motion.span
          aria-hidden
          className="w-px bg-white/50"
          initial={{ height: 0 }}
          animate={{ height: reduced ? 32 : [0, 32, 0] }}
          transition={reduced ? { duration: 0.4 } : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
