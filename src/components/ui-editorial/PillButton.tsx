import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const pillVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 hover:scale-[1.03]",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-current bg-transparent",
        ghostLight: "border border-white/40 text-white hover:border-white",
        gold: "bg-gold text-navy-deep hover:bg-gold-soft",
      },
      size: {
        md: "px-7 py-3.5 text-sm md:text-base",
        lg: "px-10 py-5 text-base",
        sm: "px-5 py-2.5 text-sm",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type BaseProps = VariantProps<typeof pillVariants> & {
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
};

export function Arrow() {
  return (
    <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
      &#8594;
    </span>
  );
}

export function PillLink({
  to,
  href,
  variant,
  size,
  className,
  children,
  withArrow = true,
  ...rest
}: BaseProps & { to?: string; href?: string } & Omit<ComponentProps<"a">, "href" | "children">) {
  const classes = cn(pillVariants({ variant, size }), className);
  const content = (
    <>
      {children}
      {withArrow ? <Arrow /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  );
}

export function PillButton({
  variant,
  size,
  className,
  children,
  withArrow = false,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(pillVariants({ variant, size }), className)} {...rest}>
      {children}
      {withArrow ? <Arrow /> : null}
    </button>
  );
}
