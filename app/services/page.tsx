import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Daily Network Insights works with brands and professionals to turn expertise into media that drives visibility, connection, and growth.",
};

const steps = [
  {
    number: "1",
    title: "Your Expertise",
    description: "We start with your story, knowledge, and unique industry perspective.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="16" r="8" />
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" />
        <circle cx="34" cy="30" r="4" fill="currentColor" stroke="none" className="text-navy" />
        <path d="M32 30h4M34 28v4" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Content Creation",
    description: "We craft high-quality, insight-driven content that positions you as a leader.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="32" height="36" rx="3" />
        <path d="M16 18h16M16 24h16M16 30h10" />
        <path d="M34 34l4 4M36 32a2.828 2.828 0 014 4l-6 2 2-6z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Distribution",
    description: "We amplify your content across our platform and newsletter to the right audience.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="10" />
        <path d="M24 14v-6M24 40v-6M14 24H8M40 24h-6" />
        <path d="M17 17l-4-4M35 35l-4-4M35 13l-4 4M17 31l-4 4" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Exposure & Connection",
    description: "We feature your story through events, media coverage, and strategic partnerships.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="10" width="32" height="30" rx="3" />
        <path d="M8 18h32M16 6v8M32 6v8" />
        <path d="M20 28l3 3 6-6" />
      </svg>
    ),
  },
  {
    number: "5",
    title: "Growth & Impact",
    description: "You gain visibility, credibility, and meaningful connections that create new opportunities.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 36l10-12 8 6 10-14 6 6" />
        <path d="M38 22v8h8" />
      </svg>
    ),
  },
];

const results = [
  {
    title: "Greater Visibility",
    description: "Get seen by the right audience.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Stronger Credibility",
    description: "Build trust through consistent, quality exposure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    title: "Real Connections",
    description: "Connect with decision-makers, partners, and opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Meaningful Growth",
    description: "Turn exposure into long-term impact and business growth.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we offer"
        description="Daily Network Insights works with brands and professionals to turn expertise into media that drives visibility, connection, and growth. For a tailored quote on your project, contact us at info@dailynetworkinsights.com."
      />

      {/* Service cards */}
      <Container className="pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card-hover premium-surface flex h-full flex-col p-8">
            <h2 className="font-serif text-2xl text-navy">Industry Features & Sponsored Insights</h2>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">
              We highlight your story through curated features and interviews that place your brand within meaningful, insight-driven content.
            </p>
          </article>
          <article className="card-hover premium-surface flex h-full flex-col p-8">
            <h2 className="font-serif text-2xl text-navy">Content & Newsletter Distribution</h2>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">
              Your ideas are shaped into clear, high-quality content and shared through our platform and newsletter to reach the right audience.
            </p>
          </article>
          <article className="card-hover premium-surface flex h-full flex-col p-8">
            <h2 className="font-serif text-2xl text-navy">Event & Media Coverage</h2>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-stone-600">
              We create opportunities for real-world connection through events and media collaborations, bringing brands and communities together through shared experiences.
            </p>
          </article>
        </div>
      </Container>

      {/* DNI Advantage section */}
      <section className="border-t border-stone-900/10 bg-stone-50 py-20 sm:py-24">
        <Container>
          {/* Header */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
              The DNI Advantage
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-navy sm:text-5xl">
              The Impact of Working With Us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">
              We turn your expertise into powerful media that connects, builds trust, and drives real results.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-16 flex flex-col items-start gap-0 sm:flex-row sm:items-start sm:justify-between">
            {steps.map((step, i) => (
              <div key={step.number} className="flex w-full items-start gap-4 py-4 sm:flex-col sm:items-center sm:gap-0 sm:py-0 sm:text-center">
                {/* Circle + arrow row */}
                <div className="flex items-center sm:w-full sm:justify-center">
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-stone-200 text-navy">
                    {step.icon}
                    <span className="absolute -top-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="ml-2 hidden text-stone-400 sm:block sm:text-xl">→</span>
                  )}
                </div>
                {/* Text */}
                <div className="sm:mt-4 sm:px-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-navy">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Results bar */}
          <div className="mt-16 rounded-2xl bg-navy px-8 py-10">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
              The Results You Gain
            </p>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {results.map((r) => (
                <div key={r.title} className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                    {r.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-white">{r.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-stone-400">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer tagline */}
          <p className="mt-10 text-center text-sm italic text-stone-500">
            More than media. We build influence that drives opportunity.{" "}
            <span className="font-medium not-italic text-navy">That&apos;s the DNI difference.</span>
          </p>

          <div className="mt-10 text-center">
            <ButtonLink href="/contact">Get in touch</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
