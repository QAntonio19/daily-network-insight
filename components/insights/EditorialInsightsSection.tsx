"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insightCategories } from "@/lib/content";
import type { InsightCategory, InsightPost } from "@/lib/types";

type FilterState = InsightCategory | "All";

const EXCERPT_MAX = 110;

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

function InsightCard({ post }: { post: InsightPost }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="card-hover premium-surface group flex flex-col overflow-hidden rounded-2xl"
      aria-label={post.title}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        {post.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-navy px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-[1.05rem] font-semibold leading-snug text-navy transition duration-200 group-hover:opacity-70">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-stone-500">
          {truncate(post.excerpt, EXCERPT_MAX)}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
          <p className="text-[11px] text-stone-400">{post.date}</p>
          <span className="flex items-center gap-1 text-[11px] font-medium text-stone-400">
            {post.readTime}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 5h8M5 1l4 4-4 4" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function EditorialInsightsSection({ posts }: { posts: InsightPost[] }) {
  const [active, setActive] = useState<FilterState>("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category.includes(active));
  }, [active, posts]);

  return (
    <>
      <section
        className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-16 sm:py-20"
        aria-label="Insights"
      >
        <Container>
          <SectionHeading
            eyebrow="Insights"
            title="All The Tips In One Place"
            description="Research-informed perspectives, built for clarity, designed for busy readers."
          />

          {/* Filter pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActive("All")}
              className={`filter-pill ${active === "All" ? "filter-pill-active" : "filter-pill-idle"}`}
            >
              All
            </button>
            {insightCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`filter-pill ${active === c ? "filter-pill-active" : "filter-pill-idle"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          {filtered.length === 0 ? (
            <p className="mt-10 text-sm text-stone-500">
              No insights in this category yet. Try another filter.
            </p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <InsightCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
