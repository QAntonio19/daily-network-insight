"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insightCategories, insightPosts } from "@/lib/content";
import type { InsightCategory } from "@/lib/types";

type FilterState = InsightCategory | "All";

export function EditorialInsightsSection() {
  const [active, setActive] = useState<FilterState>("All");

  const filtered = useMemo(() => {
    if (active === "All") return insightPosts;
    return insightPosts.filter((p) => p.category === active);
  }, [active]);

  const featured =
    active === "All"
      ? (insightPosts.find((p) => p.featured) ?? insightPosts[0])
      : filtered[0];
  const secondary = featured
    ? filtered.filter((p) => p.slug !== featured.slug).slice(0, 3)
    : [];

  const featuredLabel =
    active === "All" && featured?.featured
      ? `Featured · ${featured.category}`
      : featured
        ? `${featured.category}`
        : "";

  return (
    <section
      className="reveal-on-scroll border-b border-stone-900/10 bg-transparent py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Latest from the editorial desk"
          description="Research informed perspectives, built for clarity, designed for busy readers."
        />

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

        {filtered.length === 0 ? (
          <p className="mt-10 text-sm text-stone-600">
            No insights in this category yet. Try another filter or view all.
          </p>
        ) : null}

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featured ? (
            <div className="editorial-frame min-h-0">
              <Link
                href={`/insights/${featured.slug}`}
                className="editorial-frame__inner group block min-h-0"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/15 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                      {featuredLabel}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight text-white">
                      {featured.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-white/90">{featured.excerpt}</p>
                    <p className="mt-4 text-xs text-white/75">
                      {featured.date} · {featured.readTime}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ) : null}

          <div className="grid gap-4">
            {secondary.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="card-hover premium-surface group grid grid-cols-[120px_1fr] gap-4 p-3"
              >
                <div className="relative h-24 overflow-hidden rounded-xl sm:h-28">
                  <Image
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="120px"
                  />
                </div>
                <div className="py-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    {post.category}
                  </p>
                  <h4 className="mt-1 font-serif text-lg leading-snug text-navy transition group-hover:text-terracotta">
                    {post.title}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-xs text-stone-600">{post.excerpt}</p>
                  <p className="mt-3 text-[11px] text-stone-500">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
