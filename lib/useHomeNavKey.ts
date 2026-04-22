"use client";

import type { HomeNavKey } from "@/lib/types";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

/** Línea de referencia bajo el header fijo (px desde el inicio del documento). */
const SCROLLLINE_OFFSET = 96;

/**
 * Sección lógica visible en / según el scroll (hero / about / abajo, sin ancla de nav).
 */
function computeHomeNavKey(): HomeNavKey {
  if (typeof document === "undefined") return "top";
  const top = document.getElementById("top");
  const about = document.getElementById("about-us");
  if (!top) return "top";
  if (!about) return "top";

  const y = window.scrollY + SCROLLLINE_OFFSET;
  const aboutTop = about.getBoundingClientRect().top + window.scrollY;
  const aboutEnd = aboutTop + about.offsetHeight;
  if (y < aboutTop) return "top";
  if (y < aboutEnd) return "about-us";
  return null;
}

/**
 * Sincroniza el estado de nav de Home/About con la posición de scroll en `/`.
 * Fuera de home devuelve `undefined` (no aplica a `isNavItemActive` para anclas).
 */
export function useHomeNavKey() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [key, setKey] = useState<HomeNavKey | undefined>(undefined);

  const update = useCallback(() => {
    if (!onHome) {
      setKey(undefined);
      return;
    }
    setKey(computeHomeNavKey());
  }, [onHome]);

  useLayoutEffect(() => {
    update();
    if (!onHome) return;
    let raf1 = 0;
    const raf2 = requestAnimationFrame(() => {
      raf1 = requestAnimationFrame(() => {
        setKey(computeHomeNavKey());
      });
    });
    return () => {
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(raf1);
    };
  }, [update, pathname, onHome]);

  useEffect(() => {
    if (!onHome) return;
    const onScroll = () => {
      setKey(computeHomeNavKey());
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, [onHome, pathname]);

  return onHome ? key : undefined;
}
