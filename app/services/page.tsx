import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Daily Network Insights works with brands and professionals to turn expertise into media that drives visibility, connection, and growth.",
};

const metrics = [
  {
    label: "Content Reach",
    before: "4.7K",
    after: "18.6K",
    change: "+296%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 19.5v.75" />
      </svg>
    ),
  },
  {
    label: "Audience Interactions",
    before: "212",
    after: "1,024",
    change: "+383%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    label: "Engagement Rate",
    before: "4.5%",
    after: "10.3%",
    change: "+129%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    label: "Conversions / Inquiries",
    before: "54",
    after: "412",
    change: "+663%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    label: "Brand Mentions",
    before: "35",
    after: "128",
    change: "+266%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
];

const miniStats = [
  {
    title: "Real Stories,",
    subtitle: "Real People.",
    description: "We spotlight what matters most.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "Strategic Exposure.",
    subtitle: "Lasting Impact.",
    description: "We get your story in front of the right audience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
      </svg>
    ),
  },
  {
    title: "Data-Driven.",
    subtitle: "Results-Focused.",
    description: "We measure what matters and optimize for growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Stronger Connections.",
    subtitle: "More Opportunities.",
    description: "We help turn visibility into relationships that grow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
  },
];

const coreServices = [
  {
    title: "Content & Storytelling",
    description:
      "We turn your story into powerful content that builds authority, sparks engagement, and leaves a lasting impression.",
    bullets: [
      "Interviews & Features",
      "Articles & Blog Creation",
      "Video Production",
      "Brand Story Development",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Media Distribution",
    description:
      "We get your content seen by the right people through strategic channels and platforms.",
    bullets: [
      "Digital Media Placement",
      "Newsletter & Email Campaigns",
      "Social Media Amplification",
      "Press & PR Outreach",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
  {
    title: "Event & Community Exposure",
    description:
      "We create real-world opportunities that connect your brand with communities, partners, and new audiences.",
    bullets: [
      "Event Features & Coverage",
      "Speaking & Panel Opportunities",
      "Workshops & Collaborations",
      "Community Spotlights",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const growthSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your story, goals, audience, and where your brand is being overlooked.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Create",
    description:
      "We turn your experience into powerful content, interviews, and media assets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Distribute",
    description:
      "We position your brand across platforms, audiences, and opportunities that matter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Connect",
    description:
      "We help turn visibility into real relationships, partnerships, and long-term growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const trustBadges = [
  "No Long-Term Contracts",
  "Custom Strategy",
  "Transparent Reporting",
  "Dedicated Support",
  "Results-Driven Approach",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="footer-editorial relative overflow-hidden py-16 sm:py-24 text-stone-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] gold-color">
              Services
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Turn Visibility Into{" "}
              <span className="gold-text" data-text="Measurable Growth">Measurable Growth</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-stone-400">
              We turn real-world experience into high-impact content
              and strategic exposure helping brands build credibility,
              connect with the right audience, and create real opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a 
                href="/pricing" 
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#E8A95B] px-6 py-3 text-sm font-medium tracking-wide text-black hover:bg-[#F0BB7A] transition-all"
              >
                Get a Media Visibility Plan →
              </a>
              <a 
                href="#how-we-work" 
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium tracking-wide text-white transition-all hover:bg-white hover:text-black hover:border-white"
              >
                See How We Work →
              </a>
            </div>
          </div>

          {/* Mini-stats row */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            {miniStats.map((s, i) => (
              <div 
                key={s.title} 
                className="flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="gold-color flex h-12 w-12 items-center justify-center transition-all duration-300 hover:scale-110 [&>svg]:h-10 [&>svg]:w-10">
                  {s.icon}
                </div>
                <p className="mt-3 text-sm font-semibold leading-tight text-white">
                  {s.title}
                </p>
                <p className="text-sm font-semibold leading-tight text-white">
                  {s.subtitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-stone-500">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Results Section ────────────────────────────────────────────────── */}
      <RevealOnScroll as="section" className="relative border-t border-stone-200 bg-gradient-to-b from-stone-100 via-stone-50 to-white py-20 sm:py-24 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <Container className="relative">
          <div className="text-center reveal-item mb-14">
            <h2 className="font-serif text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              Real Results. Measurable <span className="text-[#E8A95B]">Impact.</span>
            </h2>
            <p className="mt-3 text-base text-stone-500">
              30-day performance after implementing DNI strategy
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="reveal-scale flex flex-col overflow-hidden rounded-2xl border-2 border-[#E8A95B]/20 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#E8A95B]/40 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(20%-13px)]"
              >
                {/* Header with icon and label */}
                <div className="p-4 sm:p-6 pb-3 sm:pb-4 text-center flex-1 flex flex-col justify-center">
                  <div className="gold-color flex h-10 w-10 sm:h-14 sm:w-14 mx-auto items-center justify-center mb-3 sm:mb-4 [&>svg]:h-8 [&>svg]:w-8 sm:[&>svg]:h-10 sm:[&>svg]:w-10">
                    {m.icon}
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-navy">{m.label}</p>
                </div>

                {/* Before / After Section */}
                <div className="px-3 sm:px-5 pb-3 sm:pb-5">
                  <div className="flex justify-between items-end gap-2 sm:gap-3">
                    <div className="text-center flex-1">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 mb-1">Before</p>
                      <span className="text-base sm:text-lg font-bold text-stone-400 tabular-nums">
                        <AnimatedNumber value={m.before} duration={1200} />
                      </span>
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E8A95B] mb-1">After</p>
                      <span className="text-xl sm:text-3xl font-bold text-navy tabular-nums">
                        <AnimatedNumber value={m.after} duration={1500} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Growth bar - mt-auto ensures alignment at bottom */}
                <div className="mt-auto bg-navy py-3 sm:py-4 px-3 sm:px-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] sm:text-xs font-medium text-white/70 uppercase tracking-wider">Growth</span>
                    <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6 text-[#E8A95B]">
                        <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xl sm:text-2xl font-bold text-[#E8A95B] tabular-nums">
                        <AnimatedNumber value={m.change} duration={1800} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 reveal-item">
            <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-stone-600 italic">
              &ldquo;DNI helped us build visibility, tell our story, and connect with the right audience. The results speak for themselves.&rdquo;
            </p>
          </div>
        </Container>
      </RevealOnScroll>

      {/* ── Our Core Services ────────────────────────────────────────────── */}
      <RevealOnScroll as="section" className="border-t border-stone-900/10 bg-white py-20 sm:py-24">
        <Container>
          <div className="text-center reveal-item">
            <h2 className="font-serif text-4xl font-bold text-navy sm:text-5xl">
              Our Core Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-500">
              End-to-end media and marketing solutions designed to elevate your brand
              and expand your impact.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {coreServices.map((s) => (
              <article
                key={s.title}
                className="reveal-scale premium-surface flex h-full flex-col p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-navy mb-4">
                  {s.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {s.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-stone-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-3.5 w-3.5 shrink-0 text-stone-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </RevealOnScroll>

      {/* ── How We Drive Growth ──────────────────────────────────────────── */}
      <RevealOnScroll
        as="section"
        className="border-t border-stone-200 bg-stone-50 py-20 sm:py-24"
      >
        <Container>
          <div id="how-we-work"></div>
          <div className="text-center reveal-item">
            <h2 className="font-serif text-4xl font-bold text-navy sm:text-5xl">
              How We Drive Growth
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-600">
              A proven 4-step process that turns your story into real results.
            </p>
          </div>

          {/* Steps with icons and connecting lines */}
          <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-4">
            {growthSteps.map((step, i) => (
              <div
                key={step.number}
                className="reveal-scale flex flex-col items-center text-center"
              >
                {/* Icon row with number and connecting line */}
                <div className="relative flex items-center justify-center w-full mb-6">
                  {/* Number */}
                  <span className="absolute left-0 lg:left-auto lg:-translate-x-14 text-sm font-bold gold-gradient">
                    {step.number}
                  </span>
                  
                  {/* Circle with icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#E8A95B] bg-white gold-color transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#E8A95B]/20">
                    {step.icon}
                  </div>
                  
                  {/* Connecting dashed line */}
                  {i < growthSteps.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] right-0 top-1/2 hidden h-px border-t-2 border-dashed border-[#E8A95B]/40 lg:block" style={{ width: 'calc(100% - 4rem)', left: 'calc(50% + 2.5rem)' }} />
                  )}
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-navy text-base">{step.title}</h3>
                
                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-stone-500 max-w-[180px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </RevealOnScroll>

      {/* ── CTA (Dark) ────────────────────────────────────────────────────── */}
      <RevealOnScroll as="section" className="footer-editorial py-20 sm:py-24 text-stone-200 overflow-hidden">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Left content */}
            <div className="reveal-item">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                Ready to Grow Your<br />Visibility and Impact?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400">
                Let&apos;s create a custom media and marketing strategy built around
                your brand, your story, and your audience.
              </p>
            </div>
            
            {/* Center buttons */}
            <div className="flex flex-wrap gap-3 reveal-item">
              <a 
href="https://calendly.com/dailynetworkinsights/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium tracking-wide text-white transition-all hover:bg-white hover:text-black hover:border-white"
              >
                Schedule a Call →
              </a>
            </div>
            
            {/* Right image */}
            <div className="hidden lg:flex justify-end reveal-item">
              <img 
                src="/images/camera-cta.png" 
                alt="Professional cinema camera" 
                className="w-80 h-auto object-contain"
              />
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3">
            {trustBadges.map((badge) => (
              <div 
                key={badge} 
                className="reveal-item flex items-center gap-2 text-sm text-stone-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0 text-[#E8A95B]"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </div>
            ))}
          </div>
          
          {/* Divider line */}
          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </Container>
      </RevealOnScroll>
    </>
  );
}
