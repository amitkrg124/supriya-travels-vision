import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/Supriya-Logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className, height = 48 }: { className?: string; height?: number }) {
  const [error, setError] = useState(false);

  return (
    <Link to="/" className={cn("inline-flex shrink-0 items-center gap-2", className)} aria-label="Supriya Travels of India — home">
      {!error ? (
        <img
          src={logo}
          alt="Supriya Travels of India"
          style={{ height }}
          className="w-auto object-contain"
          width={1400}
          height={1000}
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-display font-semibold text-gold" style={{ fontSize: height * 0.5 }}>
          Supriya Travels
        </span>
      )}
    </Link>
  );
}
