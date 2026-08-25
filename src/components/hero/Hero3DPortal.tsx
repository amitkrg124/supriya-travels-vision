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
    window.addEventListener("resize", handleScroll);
    handleScroll();

    // High precision lerp loop with 0.18 damping for instant, crisp response
    const animate = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.00005) {
        currentProgressRef.current += diff * 0.18;
        setScrollProgress(currentProgressRef.current);
      }
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const progress = scrollProgress;

  // 3D Camera Depth calculation: moves camera in true 3D space (translateZ)
  // This prevents GPU bitmap raster stretching and guarantees crisp edges on scroll up and down
  const easeProgress = Math.pow(progress, 2.2);
  const cameraZ = easeProgress * 1080; // Pushes camera forward within 1200px perspective
  const cameraScale = 1 + Math.pow(progress, 3) * 6; // Subtle supplemental scale

  // Door opening logic: starts opening at 3% scroll, reaches full swing (-115deg)
  const doorThreshold = 0.03;
  const doorProgress = Math.max(0, (progress - doorThreshold) / (1 - doorThreshold));
  const doorAngle = Math.sin((Math.min(doorProgress, 1) * Math.PI) / 2) * -115;

  // UI Parallax and fade out as camera pushes in
  const uiTranslateY = progress * -80;
  const uiOpacity = Math.max(0, 1 - progress * 2.5);

  // Whiteout / background transition into the next section
  const whiteoutOpacity = progress >= 0.82 ? Math.min(1, (progress - 0.82) / 0.18) : 0;

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] w-full bg-navy-deep z-10"
      style={{
        imageRendering: "auto",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Sticky 3D Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden perspective-1200 flex items-center justify-center">
        {/* Background Environment Image (High resolution backdrop) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out pointer-events-none"
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            transform: `scale(${1 + progress * 0.12}) translate3d(0,0,0)`,
            willChange: "transform",
          }}
        />

        {/* Cinematic Vignette Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(4,17,29,0.12) 0%, rgba(4,17,29,0.55) 60%, rgba(4,17,29,0.92) 100%)",
          }}
        />

        {/* 3D Scene Wrapper using True 3D translateZ Camera Depth */}
        <div
          className="relative w-full h-full flex items-center justify-center preserve-3d"
          style={{
            transformOrigin: "50% 55%",
            transform: `translate3d(0, 0, ${cameraZ}px) scale(${cameraScale})`,
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Ground Plane */}
          <div
            className="absolute w-[2400px] h-[1600px] bg-cover bg-center pointer-events-none preserve-3d"
            style={{
              backgroundImage: `url('${HERO_GROUND}')`,
              top: "62%",
              left: "50%",
              transform: "translateX(-50%) rotateX(80deg) translateZ(-100px)",
              opacity: Math.max(0, 1 - progress * 1.6),
            }}
          />

          {/* 3D Doorway Structure (Proportional scale with top clearance) */}
          <div
            className="relative w-[280px] sm:w-[330px] md:w-[380px] lg:w-[420px] h-[450px] sm:h-[510px] md:h-[580px] lg:h-[630px] preserve-3d mt-16 sm:mt-14 md:mt-16"
            style={{
              transform: "translateZ(1px)",
              backfaceVisibility: "hidden",
            }}
          >
            {/* Arched Door Frame */}
            <div
              className="absolute inset-0 rounded-t-[160px] border-[12px] sm:border-[14px] md:border-[16px] border-[#EAE6DF] shadow-[0_30px_70px_rgba(0,0,0,0.9),inset_0_0_25px_rgba(0,0,0,0.7)] overflow-hidden preserve-3d"
              style={{
                boxShadow:
                  "0 0 50px rgba(200, 155, 60, 0.28), 0 25px 60px rgba(0,0,0,0.85)",
              }}
            >
              {/* Inner Portal View (The Destination through the doorway) */}
              <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none"
                style={{
                  backgroundImage: `url('${PORTAL_VIEW}')`,
                  transform: `scale(${1.08 + (1 - progress) * 0.15}) translate3d(0,0,0)`,
                  filter: `brightness(${0.95 + progress * 0.3}) contrast(1.08)`,
                }}
              >
                {/* Portal Gold & Atmospheric Shimmer */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(200,155,60,0.2) 0%, rgba(7,26,43,0.1) 45%, rgba(4,17,29,0.5) 100%)",
                  }}
                />
              </div>

              {/* Swinging Door Panel */}
              <div
                className="absolute inset-0 rounded-t-[144px] bg-navy preserve-3d origin-left z-20 overflow-hidden shadow-2xl"
                style={{
                  transform: `translateZ(2px) rotateY(${doorAngle}deg)`,
                  background:
                    "linear-gradient(135deg, rgba(7,26,43,0.95) 0%, rgba(4,17,29,0.98) 60%, rgba(15,23,42,0.95) 100%)",
                  borderRight: "2px solid rgba(200,155,60,0.5)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Door Architectural Inlay */}
                <div className="absolute inset-0 opacity-30 flex flex-col justify-between p-4 sm:p-6 pointer-events-none">
                  <div className="w-full h-20 sm:h-24 border border-gold/40 rounded-t-full" />
                  <div className="w-full h-24 sm:h-28 border border-gold/30 rounded-md" />
                  <div className="w-full h-24 sm:h-28 border border-gold/30 rounded-md" />
                </div>
                {/* Gold Door Handle */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 sm:w-2.5 h-14 sm:h-16 rounded-full bg-gradient-to-b from-[#D9B55C] via-[#C89B3C] to-[#8C6D32] shadow-md border border-white/30" />
              </div>
            </div>
          </div>
        </div>

        {/* UI Overlay - Clean, Crisp Typography without Box Clipping */}
        <div
          className="absolute inset-0 z-40 flex flex-col justify-between items-center pointer-events-none px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12"
          style={{
            transform: `translateY(${uiTranslateY}px) translate3d(0,0,0)`,
            opacity: uiOpacity,
            willChange: "opacity, transform",
          }}
        >
          {/* Top Eyebrow Tag */}
          <div className="pointer-events-auto text-center">
            <span className="eyebrow inline-flex items-center gap-2 text-[10px] sm:text-xs text-white/90 bg-navy-deep/90 backdrop-blur-sm px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-gold/30 shadow-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Supriya Travels of India
            </span>
          </div>

          {/* Center Editorial Headlines (Crisp, Natural Drop Shadows, No Box Frame) */}
          <div className="text-center max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 pointer-events-auto">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal leading-[1.05] text-white drop-shadow-[0_8px_25px_rgba(0,0,0,0.9)]">
              Journeys That
              <br />
              <em className="text-gold-soft font-display italic">Stay With You.</em>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-white/90 max-w-[240px] sm:max-w-md mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] font-light leading-relaxed">
              Step through our gateway into sacred Hajj & Umrah pilgrimages and bespoke global escapes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3.5 pt-1 sm:pt-2 w-full">
              <Link
                to="/packages"
                className="w-full max-w-[210px] sm:max-w-none sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-gold hover:bg-gold-soft text-navy-deep font-sans text-xs sm:text-sm font-medium transition-all duration-300 shadow-xl hover:scale-105"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact"
                className="w-full max-w-[210px] sm:max-w-none sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-navy-deep/80 hover:bg-navy-deep text-white backdrop-blur-sm border border-white/30 font-sans text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>

          {/* Bottom Scroll Prompt */}
          <div className="flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-auto">
            <span className="eyebrow text-[10px] sm:text-xs text-white/75 drop-shadow">
              Scroll to Enter
            </span>
            <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border border-gold/60 flex justify-center p-1 bg-navy-deep/40 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 sm:h-2 rounded-full bg-gold animate-bounce" />
            </div>
          </div>
        </div>

        {/* Whiteout / Seamless Page Transition */}
        <div
          className="absolute inset-0 bg-background pointer-events-none z-30"
          style={{
            opacity: whiteoutOpacity,
            transition: "opacity 0.05s linear",
          }}
        />
      </div>
    </div>
  );
}
