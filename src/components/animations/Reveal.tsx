import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EntranceType = "fade-up" | "fade" | "clip" | "scale";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
  entrance?: EntranceType;
};

const entranceVariants: Record<EntranceType, { initial: object; animate: object }> = {
  "fade-up": { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  "fade": { initial: { opacity: 0 }, animate: { opacity: 1 } },
  "clip": { initial: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, animate: { opacity: 1, clipPath: "inset(0 0% 0 0)" } },
  "scale": { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  entrance = "fade-up",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  const { initial, animate } = entranceVariants[entrance];

  return (
    <MotionTag
      className={className}
      initial={reduced ? false : initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: entrance === "clip" ? 1 : 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

/** Editorial clip-path reveal with a slow settle on the image itself. */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  width = 1600,
  height = 1000,
}: ImageRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.figure
      className={cn("relative overflow-hidden bg-muted", className)}
      initial={reduced ? false : { clipPath: "inset(14% 8% 14% 8%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={cn("h-full w-full object-cover", imgClassName)}
        initial={reduced ? false : { scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.figure>
  );
}
