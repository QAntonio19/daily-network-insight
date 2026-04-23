"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { achievementsGroups, type AchievementItem } from "@/lib/achievementsContent";

function YearHeader({ year, tagline }: { year: string; tagline: string }) {
  return (
    <RevealOnScroll>
      {/* Desktop */}
      <div className="mb-10 hidden grid-cols-[1fr_32px_1fr] sm:grid">
        <div className="pr-8 lg:pr-10">
          <p className="text-right font-serif text-5xl font-bold text-navy lg:text-6xl">{year}</p>
        </div>
        <div className="relative flex justify-center">
          {/* Rombo decorativo en la línea */}
          <div className="z-10 h-4 w-4 rotate-45 border-2 border-navy bg-white" />
        </div>
        <div className="flex items-center pl-8 lg:pl-10">
          <p className="font-serif text-xl italic text-stone-500 lg:text-2xl">{tagline}</p>
        </div>
      </div>
      {/* Mobile */}
      <div className="mb-6 sm:hidden pl-12">
        <p className="font-serif text-4xl font-bold text-navy">{year}</p>
        <p className="mt-1 font-serif text-base italic text-stone-500">{tagline}</p>
      </div>
    </RevealOnScroll>
  );
}

function TimelineCard({ item, delay = 0 }: { item: AchievementItem; delay?: number }) {
  const [month, year] = item.period.split(" ");
  return (
    <RevealOnScroll>
      <div className="reveal-item" style={{ animationDelay: `${delay}ms` }}>
        <p className="mb-1 font-serif text-3xl font-bold leading-none text-navy lg:text-4xl">
          {month}
          <span className="ml-2 text-xl font-normal text-stone-400 lg:text-2xl">{year}</span>
        </p>
        <div className="mb-3 h-px w-full bg-stone-300" />
        <div className="relative w-full overflow-hidden rounded-t-lg bg-stone-100" style={{ aspectRatio: "4/3" }}>
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover"
            style={{ objectPosition: item.objectPosition ?? "center" }}
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </div>
        <div className="rounded-b-lg border border-t-0 border-stone-200 bg-white p-4 shadow-md">
          <h3 className="text-sm font-bold uppercase tracking-wide text-navy">{item.title}</h3>
          <div className="mt-2 space-y-2 text-xs leading-relaxed text-stone-600">
            {item.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export function TimelineSection() {
  return (
    <section
      className="border-b border-stone-900/10 bg-transparent py-10 sm:py-14"
      aria-label="Timeline"
    >
      <Container className="max-w-5xl">
        {achievementsGroups.map((group, groupIndex) => {
          const leftItems = group.items.filter((_, i) => i % 2 === 0);
          const rightItems = group.items.filter((_, i) => i % 2 !== 0);

          return (
            <div key={group.year} className={groupIndex > 0 ? "mt-16 sm:mt-24" : ""}>
              <YearHeader year={group.year} tagline={group.tagline} />

              {/* === DESKTOP === */}
              <div className="hidden sm:grid sm:grid-cols-[1fr_32px_1fr]">
                {/* Columna izquierda */}
                <div className="pr-8 lg:pr-10">
                  <div className="flex flex-col gap-10">
                    {leftItems.map((item, i) => (
                      <TimelineCard key={item.id} item={item} delay={i * 100} />
                    ))}
                  </div>
                </div>

                {/* Columna central: línea + círculo sticky */}
                <div className="relative flex justify-center">
                  <div className="absolute inset-y-0 w-px bg-stone-300" />
                  <div className="sticky top-[calc(50vh-12px)] z-10 flex h-6 w-6 items-center justify-center rounded-full bg-navy shadow-[0_0_0_3px_white,0_0_0_5px_rgba(10,10,10,0.12)]">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Columna derecha — desfasada hacia abajo */}
                <div className="pl-8 pt-24 lg:pl-10 lg:pt-28">
                  <div className="flex flex-col gap-10">
                    {rightItems.map((item, i) => (
                      <TimelineCard key={item.id} item={item} delay={i * 100 + 150} />
                    ))}
                  </div>
                </div>
              </div>

              {/* === MOBILE === */}
              <div className="relative sm:hidden">
                <div className="absolute left-3 top-0 flex h-full w-6 justify-center">
                  <div className="absolute inset-y-0 w-px bg-stone-300" />
                  <div className="sticky top-[calc(50vh-12px)] z-10 flex h-6 w-6 items-center justify-center rounded-full bg-navy shadow-[0_0_0_3px_white,0_0_0_5px_rgba(10,10,10,0.12)]">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-8 pl-12">
                  {group.items.map((item, i) => (
                    <TimelineCard key={item.id} item={item} delay={i * 80} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
