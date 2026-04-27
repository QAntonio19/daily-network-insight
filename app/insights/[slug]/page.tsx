import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getAllInsightSlugs, getInsightBySlug } from "@/lib/insights";
import { ShareButton } from "@/components/insights/ShareButton";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return { title: "Insight" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <div className="page-header-editorial">
        <Container className="py-12 sm:py-16">
          <div className="flex items-center justify-between">
            <Link
              href="/insights"
              className="text-sm font-medium text-terracotta underline-offset-4 transition-colors hover:text-navy hover:underline"
            >
              ← Back to Insights
            </Link>
            <ShareButton title={post.title} />
          </div>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-navy sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-stone-500">{post.date} · {post.readTime}</p>
        </Container>
      </div>

      <div className="border-b border-stone-900/10 bg-stone-900/5 px-4 py-6 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            width={1600}
            height={900}
            priority
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 56rem, 100vw"
          />
        </div>
      </div>

      {post.body && post.body.trim().length > 0 && (
        <Container narrow className="py-14 sm:py-20">
          <div className="max-w-none space-y-6 text-lg leading-relaxed text-stone-600">
            {post.body.split("\n\n").filter(Boolean).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
