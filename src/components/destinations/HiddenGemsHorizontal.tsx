import React, { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

interface GemItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  link: string;
  category: string;
}

const GEMS_DATA: GemItem[] = [
  {
    id: "umrah-premium",
    title: "Makkah & Madinah",
    subtitle: "Sacred Spiritual Journey",
    tagline: "5-Star Haram view hospitality, guided ziyarat & seamless visa support.",
    location: "Saudi Arabia",
    duration: "15 Days / 14 Nights",
    price: "₹1,10,000",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop",
    link: "/umrah",
    category: "Sacred Pilgrimage",
  },
  {
    id: "kashmir-paradise",
    title: "Kashmir Valley",
    subtitle: "Paradise on Earth",
    tagline: "Dal Lake Shikara rides, Gulmarg snow meadows & Pahalgam pine valleys.",
    location: "Jammu & Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: "₹14,000",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/kashmir",
    category: "Domestic Splendour",
  },
  {
    id: "dubai-lux",
    title: "Dubai & Desert Dunes",
    subtitle: "Futuristic Wonder",
    tagline: "Burj Khalifa vistas, luxury yacht marina cruises & thrilling desert safari.",
    location: "United Arab Emirates",
    duration: "5 Days / 4 Nights",
    price: "₹55,000",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/dubai",
    category: "International Escape",
  },
  {
    id: "bali-sanctuary",
    title: "Bali Island",
    subtitle: "Island of the Gods",
    tagline: "Ubud emerald rice terraces, cliffside Uluwatu sunset & private pool villas.",
    location: "Indonesia",
    duration: "7 Days / 6 Nights",
    price: "₹54,000",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/bali",
    category: "Tropical Haven",
  },
  {
    id: "maldives-azure",
    title: "Maldives Atolls",
    subtitle: "Overwater Luxury",
    tagline: "Crystal lagoons, private water villas & vibrant coral reef excursions.",
    location: "Maldives",
    duration: "5 Days / 4 Nights",
    price: "₹64,000",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/maldives",
    category: "Luxury Islands",
  },
  {
    id: "egypt-pharaohs",
    title: "Ancient Egypt & Nile",
    subtitle: "Land of Pharaohs",
    tagline: "Giza Great Pyramids, historic Luxor temples & 5-star Nile River cruise.",
    location: "Egypt",
    duration: "8 Days / 7 Nights",
    price: "₹95,000",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/egypt",
    category: "Heritage Expedition",
  },
];

export function HiddenGemsHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const currentProgress = Math.min(Math.max(currentScroll / scrollableDistance, 0), 1);
      setProgress(currentProgress);

      const maxTranslate = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      setTranslateX(currentProgress * maxTranslate);
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
    <section ref={containerRef} className="relative h-[500vh] bg-navy-deep text-white">
      {/* Sticky Fullscreen Track Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Ambient Subtle Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, rgba(200,155,60,0.25) 0%, transparent 60%)",
          }}
        />

        {/* Section Header with Editorial Aesthetics */}
        <div className="shell mb-6 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 z-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow text-gold">Exclusive Curations</span>
            </div>
            <h2 className="display-lg text-white mt-2">
              Hidden Gems & <em className="text-gold font-display italic">Signature Journeys</em>
            </h2>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-4">
            <span className="eyebrow text-white/60">Scroll Progress</span>
            <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-75 ease-out rounded-full"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <span className="font-sans text-sm text-gold font-semibold">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="w-full overflow-visible z-10">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 px-6 sm:px-12 md:px-20 will-change-transform"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            {GEMS_DATA.map((gem) => (
              <div
                key={gem.id}
                className="group relative flex-shrink-0 w-[300px] sm:w-[380px] md:w-[440px] h-[480px] sm:h-[540px] rounded-2xl overflow-hidden bg-navy/60 border border-white/10 shadow-2xl transition-all duration-700 hover:border-gold/50"
              >
                {/* Background Card Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${gem.image}')` }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

                {/* Category & Location Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="eyebrow px-3 py-1.5 rounded-full bg-navy-deep/80 backdrop-blur-md text-gold border border-gold/30">
                    {gem.category}
                  </span>
                  <span className="font-sans text-xs text-white/80 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <iconify-icon icon="lucide:map-pin" class="text-gold text-sm" />
                    {gem.location}
                  </span>
                </div>

                {/* Card Content & Details */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                  <span className="eyebrow text-gold">{gem.duration}</span>
                  <h3 className="font-display text-3xl text-white mt-1">
                    {gem.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/75 mt-2 line-clamp-2 leading-relaxed">
                    {gem.tagline}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase font-sans tracking-wider text-white/50">
                        Starting from
                      </span>
                      <span className="font-display text-2xl text-gold font-normal">
                        {gem.price}
                      </span>
                    </div>

                    {/* View Escape Details Button (revealed on hover via cubic-bezier) */}
                    <Link
                      to={gem.link}
                      className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-soft text-navy-deep font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg flex items-center gap-2"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                      }}
                    >
                      View Details
                      <iconify-icon icon="lucide:arrow-right" class="text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
