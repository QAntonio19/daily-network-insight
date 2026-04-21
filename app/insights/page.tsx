import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { insightPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description: "Research-informed perspectives across leadership, business, media, and more.",
};

export default function InsightsPage() {
  const sorted = [...insightPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Editorial insights for modern professionals"
        description="Browse by category on the homepage, or explore the full archive here—image-led, readable, and built for depth."
      />
      <Container className="reveal-on-scroll py-14 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="card-hover premium-surface group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                  {post.category}
                </p>
                <h2 className="mt-2 font-serif text-xl text-navy transition group-hover:text-terracotta">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm text-stone-600">{post.excerpt}</p>
                <p className="mt-4 text-[11px] text-stone-500">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
