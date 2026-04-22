"use client";

import { useEffect } from "react";

/**
 * Mueve el contenido de About a la home: redirige a /#about-us.
 */
export function AboutToHomeHash() {
  useEffect(() => {
    window.location.replace(
      `${window.location.origin}/#about-us`,
    );
  }, []);

  return (
    <p className="mx-auto max-w-prose py-20 text-center text-sm text-stone-600">
      Llevando a la sección About us en inicio…
    </p>
  );
}
