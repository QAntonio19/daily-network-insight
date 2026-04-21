import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  return (
    <section className="hero-editorial relative overflow-hidden">
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
            Where media, insight, and opportunity come together
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            Daily Network Insights is a media-driven platform dedicated to delivering
            research-based, industry-informed insights in a way that is accessible,
            relevant, and consistent.
          </p>
          <div className="animate-fade-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="/insights">Explore Insights</ButtonLink>
            <ButtonLink href="/newsletter" variant="secondary">
              Join the Newsletter
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Partner With Us
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="editorial-frame">
            <div className="editorial-frame__inner aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                alt="Abstract editorial composition with warm light and architectural lines"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-navy/5 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-white/[0.12] p-4 text-sm text-white shadow-lg backdrop-blur-xl backdrop-saturate-150">
                <p className="font-serif text-lg tracking-tight">
                  Editorial clarity, built for credibility.
                </p>
                <p className="mt-1 text-xs text-white/85">
                  Interviews · Newsletters · Podcasts · Events
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
