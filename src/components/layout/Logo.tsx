import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/Supriya-Logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className, height }: { className?: string; height?: number }) {
  const [error, setError] = useState(false);

  return (
    <Link
      to="/"
      className={cn("inline-flex shrink-0 items-center gap-2", className)}
      aria-label="Supriya Travels of India — home"
    >
      {!error ? (
        <img
          src={logo}
          alt="Supriya Travels of India"
          style={height ? { height } : undefined}
          className={cn(
            "h-11 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300",
            className
          )}
          width={1400}
          height={1000}
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-display font-semibold text-gold text-lg sm:text-xl md:text-2xl">
          Supriya Travels
        </span>
      )}
    </Link>
  );
}
