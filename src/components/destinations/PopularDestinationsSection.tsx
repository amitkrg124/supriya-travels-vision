import React, { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

interface DestinationItem {
  id: string;
  name: string;
  region: string;
  category: "all" | "sacred" | "tropical" | "alpine" | "polar";
  description: string;
  image: string;
  link: string;
  highlights: string[];
  bestTime: string;
}

const DESTINATIONS: DestinationItem[] = [
  {
    id: "makkah",
    name: "Makkah & Madinah",
    region: "Saudi Arabia",
    category: "sacred",
    description: "The holiest sites in Islam, offering life-transforming Hajj & Umrah experiences with luxury Haram stays.",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop",
    link: "/umrah",
    highlights: ["Masjid al-Haram", "Masjid an-Nabawi", "Mount Arafat", "Ziyarat Tours"],
    bestTime: "Year-round / Ramadan & Winter",
  },
  {
    id: "dubai",
    name: "Dubai Skyline",
    region: "United Arab Emirates",
    category: "sacred",
    description: "Futuristic architecture, world-class luxury shopping, and golden desert safaris.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/dubai",
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Desert Dunes", "Dubai Marina"],
    bestTime: "November to March",
  },
  {
    id: "kashmir",
    name: "Kashmir Valley",
    region: "India",
    category: "alpine",
    description: "Snow-dusted pine mountains, serene Dal Lake houseboats, and vibrant saffron fields.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/kashmir",
    highlights: ["Gulmarg Gondola", "Dal Lake Shikara", "Pahalgam Valleys", "Sonamarg"],
    bestTime: "April to October & Winter Snow",
  },
  {
    id: "bali",
    name: "Bali Island",
    region: "Indonesia",
    category: "tropical",
    description: "Lush terraced hills, cliffside temples, and secluded luxury beachfront villas.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/bali",
    highlights: ["Ubud Sacred Forest", "Tanah Lot", "Nusa Penida", "Seminyak Sunsets"],
    bestTime: "April to October",
  },
  {
    id: "maldives",
    name: "Maldives Atolls",
    region: "Indian Ocean",
    category: "tropical",
    description: "Ultra-luxurious overwater bungalows perched over sapphire lagoons and coral gardens.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/maldives",
    highlights: ["Overwater Villas", "Manta Ray Diving", "Private Sandbanks", "Sunset Cruises"],
    bestTime: "November to April",
  },
  {
    id: "polar-expedition",
    name: "Polar Glacial Realm",
    region: "Arctic & Fjords",
    category: "polar",
    description: "Glacial wonderlands, dancing Aurora Borealis, and remote untouched polar fjords.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09fd4820-ff21-47a8-b915-20b74cb1a37a_3840w.png",
    link: "/destinations",
    highlights: ["Northern Lights", "Icefjord Sailing", "Dog Sledding", "Glacier Hikes"],
    bestTime: "October to March",
  },
  {
    id: "egypt",
    name: "Egypt & Cairo",
    region: "North Africa",
    category: "sacred",
    description: "Millennia of historic majesty along the Nile, from the Pyramids to the Valley of the Kings.",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/egypt",
    highlights: ["Giza Pyramids", "Nile Cruise", "Luxor Temples", "Khan el-Khalili"],
    bestTime: "October to April",
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    region: "India",
    category: "alpine",
    description: "High mountain passes, apple orchards, and peaceful Himalayan sanctuaries.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
    link: "/destinations/himachal-pradesh",
    highlights: ["Manali Rohtang", "Shimla Ridge", "Spiti Valley", "Dharamshala"],
    bestTime: "March to June & Winter Snow",
  },
];

export function PopularDestinationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "sacred" | "tropical" | "alpine" | "polar"
  >("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [thumbPosition, setThumbPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for .fade-up-element
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".fade-up-element");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedCategory]);

  // Custom 80px scrollbar thumb calculation: (scrollLeft / maxScrollLeft) * 75%
  const handleTrackScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    if (maxScrollLeft <= 0) {
      setThumbPosition(0);
      return;
    }
    const ratio = Math.min(Math.max(scrollLeft / maxScrollLeft, 0), 1);
    setThumbPosition(ratio * 75);
  };

  const filtered =
    selectedCategory === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === selectedCategory);

  return (
    <section ref={containerRef} className="py-24 sm:py-32 bg-navy-deep text-white overflow-hidden">
      <div className="shell">
        {/* Section Heading with Fade-Up */}
        <div className="fade-up-element opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="eyebrow text-gold">
                World-Class Escapes
              </span>
            </div>
            <h2 className="display-lg text-white mt-2">
              Popular <em className="text-gold font-display italic">Destinations</em>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "All Regions", id: "all" },
              { label: "Sacred & Middle East", id: "sacred" },
              { label: "Tropical & Island", id: "tropical" },
              { label: "Alpine & Himalayan", id: "alpine" },
              { label: "Polar Realm", id: "polar" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(
                    cat.id as "all" | "sacred" | "tropical" | "alpine" | "polar"
                  )
                }
                className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gold text-navy-deep font-semibold shadow-lg"
                    : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Destinations Row */}
        <div
          ref={scrollContainerRef}
          onScroll={handleTrackScroll}
          className="hide-scrollbar flex gap-6 overflow-x-auto pb-8 pt-4 scroll-smooth"
        >
          {filtered.map((dest, idx) => (
            <div
              key={dest.id}
              className="fade-up-element opacity-0 translate-y-8 group relative flex-shrink-0 w-[290px] sm:w-[360px] md:w-[400px] h-[500px] rounded-2xl overflow-hidden bg-navy/50 border border-white/10 shadow-xl transition-all duration-700 hover:border-gold/60"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Background Image with Scale 1.1 on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-70" />

              {/* Top Details */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                <span className="eyebrow px-3 py-1 rounded-full bg-navy-deep/80 backdrop-blur-md text-gold border border-gold/30">
                  {dest.region}
                </span>
                <span className="font-sans text-xs text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5">
                  <iconify-icon icon="lucide:calendar" class="text-gold text-xs" />
                  {dest.bestTime}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end z-10">
                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  {dest.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/75 mt-2 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                {/* Highlight Badges */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {dest.highlights.slice(0, 3).map((h) => (
                    <span
                      key={h}
                      className="font-sans text-[10px] text-white/70 bg-white/10 px-2 py-0.5 rounded"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Link Action */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={dest.link}
                    className="w-full py-2.5 rounded-full bg-gold hover:bg-gold-soft text-navy-deep font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    Explore Destination
                    <iconify-icon icon="lucide:arrow-right" class="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom 80px Track Scrollbar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full max-w-md h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute top-0 bottom-0 w-[80px] bg-gold rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(200,155,60,0.6)]"
              style={{
                left: `${thumbPosition}%`,
              }}
            />
          </div>

          <Link
            to="/destinations"
            className="link-gold font-display text-lg text-gold hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            View All Destinations
            <iconify-icon icon="lucide:arrow-right" class="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
}
