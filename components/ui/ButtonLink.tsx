import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "btn-primary-shine bg-navy text-ivory border border-navy/20 shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:bg-navy-soft hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]",
  secondary:
    "bg-white/70 text-navy border border-stone-900/12 shadow-sm backdrop-blur-md hover:border-stone-900/25 hover:bg-white/90 hover:shadow-md",
  ghost:
    "text-navy underline-offset-4 decoration-terracotta/30 hover:text-terracotta hover:underline hover:decoration-terracotta",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-[color,background-color,border-color,box-shadow] duration-[220ms] ease-out ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
