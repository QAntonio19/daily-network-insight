"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Handles hash-anchor scrolling on the homepage when arriving from another page.
 * For same-page hash clicks the browser handles it natively using scroll-padding-top.
 */
export function HomeHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) return;

    const id = window.location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const behavior: ScrollBehavior = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
      ? "auto"
      : "smooth";

    // Small delay to let the page fully render before scrolling
    const t = setTimeout(() => {
      el.scrollIntoView({ block: "start", behavior });
    }, 80);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
