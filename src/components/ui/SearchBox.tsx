import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { packages } from "@/data/packages";

export function SearchBox() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [destination, setDestination] = useState("all");
  const [duration, setDuration] = useState("any");

  const destinationOptions = Array.from(new Set(packages.map((p) => p.destination))).sort();

  const handleSearch = () => {
    navigate({
      to: "/packages",
      search: {
        q: keyword || undefined,
        dest: destination !== "all" ? destination : undefined,
        dur: duration !== "any" ? duration : undefined,
      },
    });
  };

  return (
    <div className="mx-auto max-w-5xl rounded-[24px] bg-white shadow-2xl overflow-hidden p-2">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Keywords */}
        <div className="px-6 py-4 flex flex-col justify-center">
          <label className="text-sm font-semibold text-navy mb-1 block">Keywords</label>
          <input
            type="text"
            placeholder="Type Your Keywords"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground/70"
          />
        </div>

        {/* Destination */}
        <div className="px-6 py-4 flex flex-col justify-center">
          <label className="text-sm font-semibold text-navy mb-1 block">Destination</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-[15px] outline-none text-muted-foreground cursor-pointer appearance-none"
          >
            <option value="all">Any</option>
            {destinationOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div className="px-6 py-4 flex flex-col justify-center">
          <label className="text-sm font-semibold text-navy mb-1 block">Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full bg-transparent text-[15px] outline-none text-muted-foreground cursor-pointer appearance-none"
          >
            <option value="any">Any</option>
            <option value="short">Up to 4 nights</option>
            <option value="mid">5–6 nights</option>
            <option value="long">7+ nights</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="h-full p-2">
          <button
            onClick={handleSearch}
            className="w-full h-full min-h-[60px] bg-navy text-white rounded-[16px] flex flex-col items-center justify-center transition-colors hover:bg-gold hover:text-navy gap-1"
          >
            <Search className="h-5 w-5" />
            <span className="text-sm font-medium">Search Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
