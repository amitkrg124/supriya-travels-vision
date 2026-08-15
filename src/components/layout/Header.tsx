import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/company";
import { Logo } from "./Logo";
import { PillLink } from "@/components/ui-editorial/PillButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled
            ? "border-b border-white/10 bg-navy-deep/90 backdrop-blur-[14px]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:grid-cols-3 md:py-6">
          <Logo height={90} className="md:h-[90px]" />

          <nav aria-label="Primary" className="hidden justify-center md:flex">
            <ul className="flex items-center gap-8 lg:gap-10">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="link-gold text-[14px] font-medium text-white/85 whitespace-nowrap transition-colors hover:text-white data-[status=active]:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-3">
            <PillLink to="/contact" size="sm" className="hidden md:inline-flex">
              Plan Your Journey
            </PillLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-gold hover:text-gold md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-deep md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="shell flex items-center justify-between py-4">
              <Logo height={44} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="shell mt-10">
              <ul className="space-y-5">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="font-display block text-4xl leading-none text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 border-t border-white/15 pt-8">
                <PillLink to="/contact" variant="gold" className="w-full" onClick={() => setOpen(false)}>
                  Plan Your Journey
                </PillLink>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
