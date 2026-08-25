import React, { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const PROMISE_BG =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09fd4820-ff21-47a8-b915-20b74cb1a37a_3840w.png";

export function PromiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [insetRight, setInsetRight] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger scroll progress as section traverses viewport center
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.15;
      const total = start - end;
      const current = start - rect.top;
      const progress = Math.min(Math.max(current / total, 0), 1);

      // Inset from 100% to 0%
      setInsetRight((1 - progress) * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 sm:py-36 md:py-44 flex items-center justify-center overflow-hidden bg-navy-deep text-white"
    >
      {/* Background with Ambient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-25 transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url('${PROMISE_BG}')` }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--navy-deep) 0%, rgba(4,17,29,0.7) 40%, rgba(4,17,29,0.9) 80%, var(--navy-deep) 100%)",
        }}
      />

      <div className="shell relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-navy/80 border border-gold/30 backdrop-blur-md mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="eyebrow text-gold">The Supriya Travels Promise</span>
        </div>

        {/* Dual-Layer Interactive Reveal Headline */}
        <div className="relative select-none my-6 sm:my-10">
          {/* Base Muted Layer */}
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white/20 leading-[1.08]">
            We do not simply arrange trips. We create seamless gateways into journeys of faith, wonder, and lifelong memories.
          </h2>

          {/* Overlapping Gold Revealing Layer with Dynamic Clip Path */}
          <h2
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-gold leading-[1.08] absolute inset-0 pointer-events-none transition-[clip-path] duration-75 ease-out"
            style={{
              clipPath: `inset(0 ${insetRight}% 0 0)`,
            }}
          >
            We do not simply arrange trips. We create seamless gateways into journeys of faith, wonder, and lifelong memories.
          </h2>
        </div>

        {/* Promise Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-20 text-left">
          <div className="p-6 sm:p-8 rounded-2xl bg-navy/60 border border-white/10 backdrop-blur-md hover:border-gold/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5">
              <iconify-icon icon="lucide:shield-check" class="text-2xl" />
            </div>
            <h3 className="font-display text-2xl text-white">
              Sacred Integrity
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
              Every Hajj and Umrah pilgrimage is coordinated with authentic guidance, authorized documentation, and 5-star proximity to the holy Harams.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-navy/60 border border-white/10 backdrop-blur-md hover:border-gold/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5">
              <iconify-icon icon="lucide:sparkles" class="text-2xl" />
            </div>
            <h3 className="font-display text-2xl text-white">
              Bespoke Precision
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
              Tailor-made itineraries from flight bookings and luxury stays to private desert camps, aligned precisely to your dates and preferences.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-navy/60 border border-white/10 backdrop-blur-md hover:border-gold/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5">
              <iconify-icon icon="lucide:headset" class="text-2xl" />
            </div>
            <h3 className="font-display text-2xl text-white">
              24/7 Concierge
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
              Direct contact with dedicated travel specialists from the moment you consult us until your safe return back home.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/about-us"
            className="px-8 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-navy-deep font-sans text-sm font-medium transition-all duration-300 shadow-xl"
          >
            Learn About Our Heritage
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-medium border border-white/20 transition-all duration-300"
          >
            Speak With A Specialist
          </Link>
        </div>
      </div>
    </section>
  );
}
