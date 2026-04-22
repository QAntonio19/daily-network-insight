import Image from "next/image";
import Link from "next/link";
import { founder } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Bloque principal “About” en home (ancla #about-us): diseño “About the founder”
 * Imagen, cita flotante, copy y CTA.
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
              <div className="editorial-frame__inner relative aspect-[4/3] w-full overflow-hidden bg-stone-300">
                <Image
                  src={founder.portraitSrc}
                  alt={founder.portraitAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  priority
                />
              </div>
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
              About me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
