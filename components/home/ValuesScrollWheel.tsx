"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/content";
import { valuesNarrativeSteps } from "@/lib/valuesNarrative";
import { Container } from "@/components/ui/Container";

const N = valuesNarrativeSteps.length;
const R = 150;
const CX = 200;
const CY = 200;
const TAU = Math.PI * 2;

function angleForNode(i: number) {
  return -Math.PI / 2 + (i * TAU) / N;
}

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

/**
 * Rueda de progreso ligada al scroll; solo copy del sitio (Values through Initiatives).
 */
export function ValuesScrollWheel() {
  const id = useId();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef(0);
  const [progress, setProgress] = useState(0);
  const [enterClass, setEnterClass] = useState<
    "" | "values-wheel-in-up" | "values-wheel-in-down"
  >("");
  const reduced = usePrefersReducedMotion();

  const recompute = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const range = el.offsetHeight - vh;
    if (range <= 0) {
      setProgress(0);
      return;
    }
    const raw = -rect.top / range;
    setProgress(Math.max(0, Math.min(1, raw)));
  }, []);

  useEffect(() => {
    if (reduced) return;
    recompute();
    const tick = () => {
      recompute();
      raf.current = 0;
    };
    const schedule = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [recompute, reduced]);

  const activeIndex = Math.min(N - 1, Math.max(0, Math.floor(progress * N - 1e-9)));
  const current = valuesNarrativeSteps[activeIndex]!;

  const prevIndexRef = useRef(-1);
  useLayoutEffect(() => {
    if (reduced) return;
    if (prevIndexRef.current < 0) {
      prevIndexRef.current = activeIndex;
      return;
    }
    if (prevIndexRef.current === activeIndex) return;
    setEnterClass(
      activeIndex > prevIndexRef.current
        ? "values-wheel-in-up"
        : "values-wheel-in-down"
    );
    prevIndexRef.current = activeIndex;
  }, [activeIndex, reduced]);

  const circ = 2 * Math.PI * R;
  const arcP = progress;
  const innerAnimClass = !reduced && enterClass ? enterClass : "";

  if (reduced) {
    return (
      <div className="border-b border-stone-900/10 bg-ivory">
        <Container className="py-12 sm:py-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
            {siteConfig.name}
          </p>
          <h2 className="mt-2 text-center font-serif text-2xl text-navy sm:text-3xl">
            The principles behind our work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-stone-600">
            {siteConfig.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-stone-600">
            {valuesNarrativeSteps[0]!.body}
          </p>
          <ol className="mt-10 space-y-8 border-t border-stone-900/10 pt-10">
            {valuesNarrativeSteps.map((s, i) => (
              <li key={s.id} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {i + 1}. {s.eyebrow}
                </p>
                <div>
                  <h3 className="font-serif text-lg text-navy sm:text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-clip border-b border-stone-900/10 bg-ivory">
      <div
        ref={trackRef}
        className="relative"
        style={{ minHeight: `${N * 88}dvh` }}
      >
        <div className="sticky top-0 z-20 box-border flex w-full min-h-dvh items-start justify-center pt-[max(5.5rem,env(safe-area-inset-top,0px))] pb-8 sm:pt-24 sm:pb-10 md:pt-28">
          <Container className="w-full max-w-5xl pb-6 sm:pb-8">
            <header className="mb-6 text-center sm:mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
                {siteConfig.name}
              </p>
              <h2
                className="mx-auto mt-2 max-w-2xl font-sans text-2xl font-normal leading-tight text-navy sm:text-3xl"
                id={`${id}-h2`}
              >
                The principles behind our work
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-stone-600 sm:text-base">
                {siteConfig.tagline}
              </p>
            </header>

            {/* Móvil: full-bleed con max-sm (sm:ml-0 rompía mx-auto y desplazaba el círculo a la izquierda en PC). */}
            <div
              className="relative mx-auto box-border min-w-0 w-full max-sm:ml-[calc(50%-56dvw)] max-sm:w-[112dvw] max-sm:max-w-[112dvw] sm:max-w-[min(100%,40rem)] md:max-w-[min(100%,44rem)]"
              role="region"
              aria-labelledby={`${id}-h2`}
            >
              <div className="relative aspect-square w-full min-w-0">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <title>Narrative progress: five pillars</title>
                  <circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    stroke="color-mix(in oklab, var(--foreground) 10%, transparent)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={CX}
                    cy={CY}
                    r={R}
                    stroke="var(--foreground)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={circ}
                    strokeDashoffset={circ * (1 - arcP)}
                    transform={`rotate(-90 ${CX} ${CY})`}
                    style={{ willChange: "stroke-dashoffset" }}
                  />
                  {valuesNarrativeSteps.map((s, i) => {
                    const a = angleForNode(i);
                    const x = CX + R * Math.cos(a);
                    const y = CY + R * Math.sin(a);
                    const isLit = i <= activeIndex;
                    return (
                      <circle
                        key={s.id}
                        cx={x}
                        cy={y}
                        r="6.5"
                        fill={
                          isLit
                            ? "var(--foreground)"
                            : "color-mix(in oklab, var(--foreground) 16%, var(--ivory) 100%)"
                        }
                        stroke="var(--ivory)"
                        strokeWidth="1.5"
                      />
                    );
                  })}
                </svg>

                <div className="absolute inset-[16%] z-10 min-h-0 sm:inset-[16.5%] md:inset-[17%]">
                  <div
                    className="values-wheel-scroll-y h-full min-h-0 w-full max-h-full overflow-y-auto overscroll-y-contain"
                    id={`${id}-panel-${activeIndex}`}
                    role="status"
                    aria-live="polite"
                  >
                    <div
                      key={activeIndex}
                      className={`flex min-h-full w-full flex-col items-center justify-center px-1 py-0.5 text-center sm:px-2 sm:py-1 ${innerAnimClass}`}
                    >
                      <p className="shrink-0 font-serif text-lg leading-none text-navy/80 sm:text-2xl">
                        {current.mark}
                      </p>
                      <p className="mt-2 shrink-0 text-xs font-semibold uppercase leading-tight tracking-[0.18em] text-stone-500 sm:mt-2.5 sm:text-sm sm:tracking-[0.2em]">
                        {current.eyebrow}
                      </p>
                      <h3 className="mt-2 max-w-full text-balance font-serif text-sm font-semibold leading-snug text-navy sm:mt-2.5 sm:text-base md:text-lg">
                        {current.title}
                      </h3>
                      <p className="mt-2 w-full max-w-full text-pretty text-xs leading-relaxed text-stone-600 sm:mt-2.5 sm:text-sm sm:leading-relaxed">
                        {current.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Container>
        </div>
      </div>
    </div>
  );
}
