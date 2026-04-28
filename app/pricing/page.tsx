import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Pricing | Daily Network Insights",
  description:
    "Choose the perfect plan for your brand. Invest in visibility and build real growth with our media and marketing services.",
};

const plans = [
  {
    name: "Starter",
    badge: "Getting Started",
    badgeColor: "text-emerald-500",
    price: "$300",
    period: "/ month",
    description: "For individuals & small businesses getting started",
    features: [
      "1 Feature or Interview (monthly or quarterly option)",
      "1 Social Media Post",
      "Newsletter Mention",
      "Basic Visibility Boost",
      "Email Support",
    ],
    cta: "Get Started",
    ctaStyle: "outline",
    note: "Cancel anytime",
  },
  {
    name: "Growth",
    badge: "Most Recommended",
    badgeColor: "text-sky-500",
    price: "$900",
    period: "/ month",
    description: "For brands ready to build consistency and credibility",
    features: [
      "2 Features or Interviews",
      "4 Social Media Posts",
      "Newsletter Placement",
      "Content Repurposing (clips/posts)",
      "Monthly Strategy Call",
      "Email & Chat Support",
    ],
    cta: "Get Started",
    ctaStyle: "outline",
    note: "Cancel anytime",
    highlighted: true,
  },
  {
    name: "Scale",
    badge: "High Growth",
    badgeColor: "text-purple-500",
    price: "$2,500",
    period: "/ month",
    description: "For businesses focused on serious growth",
    features: [
      "4-5 Features / Interviews",
      "8-10 Social Media Posts",
      "Newsletter + Distribution Boost",
      "Content Repurposing (short-form clips)",
      "Event or Podcast Feature",
      "Monthly Strategy + Growth Planning",
      "Priority Support",
    ],
    cta: "Get Started",
    ctaStyle: "outline",
    note: "Cancel anytime",
  },
  {
    name: "Enterprise",
    badge: "Custom Solutions",
    badgeColor: "text-[#E8A95B]",
    price: "Custom",
    period: "",
    subPeriod: "$5K - $15K+ / month",
    description: "For companies, organizations, and large campaigns",
    features: [
      "Full Content & Media Strategy",
      "Multi-Channel Distribution",
      "Event Coverage & Partnerships",
      "Brand Story Development",
      "Dedicated Account Manager",
      "Ongoing Optimization + Reporting",
      "Priority Support",
    ],
    cta: "Let's Talk",
    ctaStyle: "enterprise",
    note: "Custom solutions for your goals",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="hero-editorial py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-navy animate-fade-up">
              Our Pricing
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-navy sm:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Choose the perfect plan<br />for your journey
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Whether you&apos;re just getting started or scaling your brand, our plans are
              designed to help you get seen, trusted, and connected.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────────── */}
      <RevealOnScroll as="section" className="bg-stone-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`reveal-item premium-surface flex flex-col rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                  plan.highlighted
                    ? "ring-2 ring-[#E8A95B] relative"
                    : ""
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Badge */}
                <p className={`text-xs font-semibold uppercase tracking-wide ${plan.badgeColor}`}>
                  {plan.badge}
                </p>

                {/* Plan Name */}
                <h3 className="mt-3 text-2xl font-bold text-navy">{plan.name}</h3>

                {/* Price */}
                <div className="mt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-navy">{plan.price}</span>
                    {plan.period && <span className="text-sm text-stone-500">{plan.period}</span>}
                  </div>
                  {"subPeriod" in plan && plan.subPeriod && (
                    <p className="mt-1 text-sm text-stone-500">{plan.subPeriod}</p>
                  )}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <div className="mt-6">
                  {plan.ctaStyle === "primary" ? (
                    <a
                      href="/contact"
                      className="flex w-full items-center justify-center rounded-full bg-[#E8A95B] px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[#F0BB7A]"
                    >
                      {plan.cta}
                    </a>
                  ) : plan.ctaStyle === "enterprise" ? (
                    <a
                      href="/contact"
                      className="btn-primary-shine flex w-full min-h-11 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-navy-soft"
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      className="flex w-full items-center justify-center rounded-full border-2 border-stone-900 px-6 py-3 text-sm font-semibold text-stone-900 transition-all hover:bg-stone-900 hover:text-white"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>

                {/* Note */}
                <p className="mt-3 text-center text-xs text-stone-400">{plan.note}</p>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-stone-200" />

                {/* Features */}
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Plan includes:
                </p>
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-stone-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A95B]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </RevealOnScroll>

      {/* ── Add-ons Section ─────────────────────────────────────────────── */}
      <RevealOnScroll as="section" className="bg-white py-16 sm:py-20 border-t border-stone-200">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            {/* Left: Title */}
            <div className="reveal-item">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E8A95B]">
                Add-ons
              </p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-navy">
                Enhance Your<br />Growth Plan
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                Customize your plan with additional services tailored to your goals.
              </p>
            </div>

            {/* Right: Add-on cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  ),
                  name: "Additional Feature / Interview", 
                  price: "$250 – $500" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  ),
                  name: "Event Coverage", 
                  price: "$750 – $2,000" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  ),
                  name: "Video Production", 
                  price: "$1,000+" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  ),
                  name: "Social Media Management", 
                  price: "$500 – $1,200/mo" 
                },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  ),
                  name: "Strategy Session", 
                  price: "$250" 
                },
              ].map((addon) => (
                <div key={addon.name} className="reveal-item flex flex-col items-center text-center p-4">
                  <div className="text-[#E8A95B] mb-3">
                    {addon.icon}
                  </div>
                  <p className="text-sm font-semibold text-navy leading-tight">{addon.name}</p>
                  <p className="mt-2 text-sm text-stone-500">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-stone-400 reveal-item">
            Add-ons available for all plans. Packages can be customized based on your needs.
          </p>
        </Container>
      </RevealOnScroll>

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <RevealOnScroll as="section" className="footer-editorial py-16 sm:py-20 text-stone-200">
        <Container>
          <div className="reveal-item flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left: Icon + Text */}
            <div className="flex items-start gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden sm:block h-12 w-12 shrink-0 text-[#E8A95B]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
              <div>
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Ready to Grow Your<br />Brand&apos;s Visibility?
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-400">
                  Let&apos;s build a strategy that gets you seen by the right audience and creates real opportunities.
                </p>
              </div>
            </div>

            {/* Right: Button */}
            <a
              href="https://calendly.com/dailynetworkinsights/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black hover:border-white"
            >
              Schedule a Call →
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              "No Long-Term Contracts",
              "Transparent Pricing",
              "Built for Real Impact",
              "Data-Driven Results",
            ].map((badge) => (
              <div key={badge} className="reveal-item flex items-center gap-2 text-sm text-stone-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[#E8A95B]">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                </svg>
                {badge}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </Container>
      </RevealOnScroll>
    </>
  );
}
