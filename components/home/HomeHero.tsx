import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  return (
    <section
      id="top"
      className="hero-editorial relative scroll-mt-20 overflow-hidden sm:scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="hero-blob-a animate-float-slow absolute -left-24 top-8 h-80 w-80 rounded-full" />
        <div className="hero-blob-b absolute right-[-5%] top-24 h-[28rem] w-[28rem] rounded-full opacity-80" />
      </div>

      <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Premium media · Industry insight
          </p>
          <h1 className="animate-fade-up delay-100 mt-5 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-[3.25rem]">
            Where media, insight, and influence come together
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            We transform industry expertise into high-impact content and connect brands
            with the right audience.
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="/insights">Explore Insights</ButtonLink>
            <ButtonLink href="/#newsletter" variant="secondary">
              Join the Newsletter
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Partner With Us
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="editorial-frame">
            <div className="editorial-frame__inner aspect-[5/6]">
              <Image
                src="/images/photo_2026-04-23_04-18-27.jpg"
                alt="Team members networking at a community event"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-navy/5 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
