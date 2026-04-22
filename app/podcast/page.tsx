import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Conversations with professionals and leaders, tight edits, clear takeaways, zero filler.",
};

const episodes = [
  {
    title: "The credibility stack: how media brands earn trust in 2026",
    guest: "Operator roundtable",
    duration: "42 min",
  },
  {
    title: "Cross border collaboration without the theater",
    guest: "Founders · California & Mexico",
    duration: "38 min",
  },
  {
    title: "Editorial voice vs. corporate voice, finding the line",
    guest: "Brand strategist",
    duration: "35 min",
  },
] as const;

export default function PodcastPage() {
  return (
    <>
      <PageHeader
        eyebrow="Podcast"
        title="Podcast conversations that respect your time"
        description="Candid interviews with professionals and leaders, produced with editorial standards and published with clarity."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="podcast-panel-premium text-ivory p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-soft">
              Now playing concept
            </p>
            <h2 className="mt-4 font-serif text-3xl text-white">
              Where insight meets execution
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">
              New episodes drop regularly across platforms. Subscribe on your favorite app
              and we’ll notify you when a conversation is worth your full attention.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/18 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                Spotify
              </span>
              <span className="rounded-full border border-white/18 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                Apple Podcasts
              </span>
              <span className="rounded-full border border-white/18 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                YouTube
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {episodes.map((ep) => (
              <div key={ep.title} className="card-hover premium-surface p-6 lg:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {ep.guest}
                </p>
                <h3 className="mt-2 font-serif text-xl text-navy">{ep.title}</h3>
                <p className="mt-3 text-xs text-stone-500">{ep.duration}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/contact" variant="secondary">
            Pitch a guest or sponsor segment
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
