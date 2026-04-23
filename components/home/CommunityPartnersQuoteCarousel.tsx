"use client";

import { useEffect, useId, useState } from "react";
import { communityPartnersCarouselSlides } from "@/lib/communityPartners";

const INTERVAL_MS = 4000;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = () => setReduced(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

export function CommunityPartnersQuoteCarousel() {
  const baseId = useId();
  const reduced = usePrefersReducedMotion();
  const slides = communityPartnersCarouselSlides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const text = slides[index]!;

  return (
    <div
      className="community-partners-carousel-root mt-5 min-h-[9.5rem] sm:mt-6 sm:min-h-[8rem] lg:min-h-[7rem]"
      role="region"
      aria-label="Community quotes, rotating"
    >
      <span className="sr-only">
        Slide {index + 1} of {slides.length}
      </span>
      <p
        key={index}
        id={`${baseId}-slide-${index}`}
        className={`text-left text-base leading-relaxed text-stone-600 sm:text-lg ${
          reduced ? "" : "community-partners-carousel-slide"
        }`}
        role="status"
        aria-live="polite"
      >
        {text}
      </p>
    </div>
  );
}
