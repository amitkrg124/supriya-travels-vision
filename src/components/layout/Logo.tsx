import { Link } from "@tanstack/react-router";
import logo from "@/assets/supriya-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className, height = 48 }: { className?: string; height?: number }) {
  return (
    <Link to="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label="Supriya Travels of India — home">
      <img
        src={logo.url}
        alt="Supriya Travels of India"
        style={{ height }}
        className="w-auto"
        width={1400}
        height={1000}
      />
    </Link>
  );
}
