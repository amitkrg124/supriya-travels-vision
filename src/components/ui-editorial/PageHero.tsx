import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type Crumb = { label: string; to?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="link-gold hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/85">{item.label}</span>
            )}
            {i < items.length - 1 ? <span aria-hidden>/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  crumbs,
  children,
  tall = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-navy-deep ${tall ? "min-h-[86vh]" : "min-h-[68vh]"}`}
    >
      <motion.img
        src={image}
        alt={imageAlt}
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,17,29,0.55) 0%, rgba(4,17,29,0.30) 40%, rgba(4,17,29,0.78) 100%)",
        }}
      />
      <div className="shell relative z-10 pb-16 pt-40 md:pb-24">
        {crumbs ? <Breadcrumb items={crumbs} /> : null}
        {eyebrow ? (
          <p className="eyebrow mt-6 inline-flex items-center gap-3 text-gold">
            <span aria-hidden className="h-px w-8 bg-gold" />
            {eyebrow}
          </p>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="hero-h1 mt-5 max-w-4xl text-white"
        >
          {title}
        </motion.h1>
        {intro ? (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-6 max-w-[620px] text-[17px] leading-relaxed text-white/80"
          >
            {intro}
          </motion.p>
        ) : null}
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
