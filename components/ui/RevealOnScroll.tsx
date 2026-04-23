"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  threshold?: number;
  rootMargin?: string;
}

export function RevealOnScroll({
  children,
  className = "",
  as: Tag = "div",
  threshold = 0.1,
  rootMargin = "0px 0px -60px 0px",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const Component = Tag;

  return (
    <Component ref={ref} className={`reveal-section ${className}`}>
      {children}
    </Component>
  );
}
