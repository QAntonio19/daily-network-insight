import Image from "next/image";
import Link from "next/link";
import { founder } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Bloque principal “About” en home (ancla #about-us): diseño “About the founder”
 * —imagen + cita flotante + copy + CTA.
 */
export function HomeAboutUs() {
  return (
    <section
      id="about-us"
      className="scroll-mt-24 border-b border-stone-900/10 bg-transparent sm:scroll-mt-28"
      aria-label="About us"
    >
      <Container className="reveal-on-scroll py-16 sm:py-20">
        <SectionHeading eyebrow="Leadership" title="About the founder" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="editorial-frame">
              <div className="editorial-frame__inner relative aspect-[3/4] overflow-hidden">
                <Image
                  src={founder.portraitSrc}
                  alt={founder.portraitAlt}
                  fill
                  className="!top-[41px] !bottom-0 !left-0 !right-0 !h-[calc(100%-41px)] w-full object-cover object-[center_22%] scale-[1.18]"
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  priority
                />
              </div>
            </div>
            <div
              className="premium-surface mt-4 max-w-[240px] p-4 text-sm leading-relaxed text-stone-700 shadow-lg sm:max-w-[260px] md:absolute md:bottom-[-1.25rem] md:right-[-0.5rem] md:mt-0 lg:bottom-[-1.5rem] lg:right-[-1rem]"
            >
              Warm, credible, and relentlessly clear.
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              {founder.role}
            </p>
            <h3 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
              {founder.name}
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
              {founder.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="btn-primary-shine mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-navy-soft"
            >
              Connect or collaborate
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
