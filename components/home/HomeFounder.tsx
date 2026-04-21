import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { founder } from "@/lib/content";

export function HomeFounder() {
  return (
    <section className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Leadership" title="About the founder" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="editorial-frame">
              <div className="editorial-frame__inner relative aspect-[3/4]">
                <Image
                  src={founder.portraitSrc}
                  alt={founder.portraitAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 90vw"
                />
              </div>
            </div>
            <div className="premium-surface absolute -bottom-6 -right-4 hidden max-w-[240px] p-4 text-sm text-stone-700 shadow-lg md:block">
              Warm, credible, and relentlessly clear.
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              {founder.role}
            </p>
            <h3 className="mt-3 font-serif text-4xl text-navy">{founder.name}</h3>
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
