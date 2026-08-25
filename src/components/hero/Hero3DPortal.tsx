import React, { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const HERO_BG =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fb0d000-28e3-4a63-9571-a768c099c566_3840w.png";
const HERO_GROUND =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05b11cf5-028b-41dd-9248-8b56e028f570_3840w.png";
const PORTAL_VIEW =
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1968";

export function Hero3DPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth lerping animation state
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
      targetProgressRef.current = rawProgress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Lerp loop with 0.08 damping
    const animate = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.08;
        setScrollProgress(currentProgressRef.current);
      }
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const progress = scrollProgress;

  // Camera scale: 1 to 26 with smooth exponential easing
  const easeZoom = Math.pow(progress, 2.5);
  const scale = 1 + easeZoom * 25;

  // Door opening logic: starts at 5% progress, reaches max -115deg
  const doorThreshold = 0.05;
  const doorProgress = Math.max(0, (progress - doorThreshold) / (1 - doorThreshold));
  const doorAngle = Math.sin((Math.min(doorProgress, 1) * Math.PI) / 2) * -115;

  // UI Parallax and fade
  const uiTranslateY = progress * -100;
  const uiOpacity = Math.max(0, 1 - progress * 2.2);

  // Whiteout / background transition into the next section
  const whiteoutOpacity = progress >= 0.8 ? Math.min(1, (progress - 0.8) / 0.2) : 0;

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full bg-navy-deep z-10"
      style={{ willChange: "transform" }}
    >
      {/* Sticky 3D Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden perspective-1200 flex items-center justify-center">
        {/* Background Environment */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out pointer-events-none"
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            transform: `scale(${1 + progress * 0.15})`,
          }}
        />

        {/* Ambient Deep Navy Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(4,17,29,0.2) 0%, rgba(4,17,29,0.7) 70%, rgba(4,17,29,0.95) 100%)",
          }}
        />

        {/* 3D Scene Wrapper */}
        <div
          className="relative w-full h-full flex items-center justify-center preserve-3d"
          style={{
            transformOrigin: "50% 55%",
            transform: `scale(${scale})`,
            willChange: "transform",
          }}
        >
          {/* Ground Plane */}
          <div
            className="absolute w-[2400px] h-[1600px] bg-cover bg-center pointer-events-none preserve-3d"
            style={{
              backgroundImage: `url('${HERO_GROUND}')`,
              top: "60%",
              left: "50%",
              transform: "translateX(-50%) rotateX(80deg) translateZ(-100px)",
              opacity: Math.max(0, 1 - progress * 1.5),
            }}
          />

          {/* 3D Doorway Structure */}
          <div
            className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] h-[480px] sm:h-[580px] md:h-[660px] lg:h-[720px] preserve-3d"
            style={{
              transform: "translateZ(1px)",
            }}
          >
            {/* Arched Door Frame */}
            <div
              className="absolute inset-0 rounded-t-[160px] border-[16px] border-[#EAE6DF] shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_0_30px_rgba(0,0,0,0.6)] overflow-hidden preserve-3d"
              style={{
                boxShadow: "0 0 50px rgba(200, 155, 60, 0.25)",
              }}
            >
              {/* Inner Portal View (The Destination through the doorway) */}
              <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: `url('${PORTAL_VIEW}')`,
                  transform: `scale(${1.1 + (1 - progress) * 0.2})`,
                  filter: `brightness(${0.9 + progress * 0.3}) contrast(1.08)`,
                }}
              >
                {/* Portal Gold Shimmer */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(200,155,60,0.2) 0%, rgba(7,26,43,0.1) 50%, rgba(4,17,29,0.5) 100%)",
                  }}
                />
              </div>

              {/* Swinging Door Panel */}
              <div
                className="absolute inset-0 rounded-t-[144px] bg-navy preserve-3d origin-left z-20 overflow-hidden shadow-2xl"
                style={{
                  transform: `translateZ(2px) rotateY(${doorAngle}deg)`,
                  background:
                    "linear-gradient(135deg, #071A2B 0%, #04111D 60%, #0F172A 100%)",
                  borderRight: "2px solid rgba(200,155,60,0.45)",
                  willChange: "transform",
                }}
              >
                {/* Door Architectural Panels */}
                <div className="absolute inset-0 opacity-35 flex flex-col justify-between p-6">
                  <div className="w-full h-28 border border-gold/40 rounded-t-full" />
                  <div className="w-full h-36 border border-gold/30 rounded-md" />
                  <div className="w-full h-36 border border-gold/30 rounded-md" />
                </div>
                {/* Gold Door Handle */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-16 rounded-full bg-gradient-to-b from-[#D9B55C] via-[#C89B3C] to-[#8C6D32] shadow-md border border-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* UI Overlay - Consistent with Editorial Theme */}
        <div
          className="absolute inset-0 z-50 flex flex-col justify-between items-center pointer-events-none px-6 py-12 md:py-20"
          style={{
            transform: `translateY(${uiTranslateY}px)`,
            opacity: uiOpacity,
            transition: "opacity 0.1s linear",
          }}
        >
          {/* Top Eyebrow Tag */}
          <div className="pointer-events-auto text-center mt-8">
            <span className="eyebrow inline-flex items-center gap-3 text-white/90 bg-navy-deep/80 backdrop-blur-md px-5 py-2 rounded-full border border-gold/30 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Supriya Travels of India
            </span>
          </div>

          {/* Center Brand Title & CTA - Editorial Styling */}
          <div className="text-center max-w-4xl mx-auto space-y-6 pointer-events-auto">
            <h1 className="hero-h1 text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
              Journeys That
              <br />
              <em className="text-gold-soft font-display italic">Stay With You.</em>
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
              Step through our gateway into sacred Hajj & Umrah pilgrimages, bespoke global tours, and extraordinary escapes crafted with care.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/packages"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold hover:bg-gold-soft text-navy-deep font-sans text-sm font-medium transition-all duration-300 shadow-xl hover:scale-105"
              >
                Explore Our Packages
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 font-sans text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>

          {/* Bottom Scroll Prompt */}
          <div className="flex flex-col items-center gap-2 pointer-events-auto">
            <span className="eyebrow text-white/70">
              Scroll to Enter the Portal
            </span>
            <div className="w-5 h-9 rounded-full border border-gold/60 flex justify-center p-1">
              <div className="w-1.5 h-2.5 rounded-full bg-gold animate-bounce" />
            </div>
          </div>
        </div>

        {/* Whiteout / Seamless Page Transition */}
        <div
          className="absolute inset-0 bg-background pointer-events-none z-40"
          style={{
            opacity: whiteoutOpacity,
            transition: "opacity 0.05s linear",
          }}
        />
      </div>
    </div>
  );
}
