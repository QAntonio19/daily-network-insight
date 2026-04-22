"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Asegura que /#values quede con el techo del ancla alineado bajo el header
 * (scroll-margin) tras navegación client de Next o cambio de hash.
 */
export function HomeHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const behavior: ScrollBehavior = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
      ? "auto"
      : "smooth";

    const scrollToValues = () => {
      if (window.location.hash !== "#values") return;
      const el = document.getElementById("values");
      if (!el) return;
      el.scrollIntoView({ block: "start", behavior });
    };

    scrollToValues();
    const t1 = setTimeout(scrollToValues, 0);
    const t2 = setTimeout(scrollToValues, 80);
    const t3 = setTimeout(scrollToValues, 220);

    const onHash = () => {
      if (window.location.hash === "#values") {
        requestAnimationFrame(scrollToValues);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("hashchange", onHash);
    };
  }, [pathname]);

  return null;
}
