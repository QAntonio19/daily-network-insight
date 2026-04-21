import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getAllInsightSlugs, getInsightBySlug } from "@/lib/insights";

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
          <Link
            href="/insights"
            className="text-sm font-medium text-terracotta underline-offset-4 transition-colors hover:text-navy hover:underline"
          >
            ← Back to Insights
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            {post.category}
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-navy sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-stone-500">
            {post.date} · {post.readTime}
          </p>
        </Container>
      </div>

      <div className="border-b border-stone-900/10 bg-stone-900/5 px-4 py-6 sm:px-8">
        <div className="editorial-frame mx-auto max-w-5xl">
          <div className="editorial-frame__inner relative aspect-[21/9]">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 56rem, 100vw"
            />
          </div>
        </div>
      </div>

      <Container narrow className="py-14 sm:py-20">
        <p className="font-serif text-xl leading-relaxed text-navy sm:text-2xl">{post.excerpt}</p>
        <div className="editorial-rule my-10" />
        <div className="max-w-none space-y-6 text-base leading-relaxed text-stone-600">
          <p>
            This piece is part of Daily Network Insights’ editorial program—built from
            practitioner interviews, industry research, and careful synthesis. Our goal is
            simple: make complex ideas legible without diluting what matters.
          </p>
          <p>
            In practice, that means naming tradeoffs, citing experience, and avoiding
            empty hype. We prioritize frameworks you can use, stories you can trust, and
            language that respects your time.
          </p>
          <p>
            If you’re exploring how this topic applies to your team or brand, start with
            the questions at the end of your last leadership meeting—then pressure-test your
            assumptions with the signals around you: customers, operators, and the market’s
            unglamorous realities.
          </p>
          <p>
            Daily Network Insights will continue publishing on themes like this—always
            with a media-first lens and a community-centered ethos. Subscribe to the
            newsletter for the next dispatch, or partner with us if you want your expertise
            represented with editorial rigor.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/newsletter">Join the Newsletter</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Partner With Us
          </ButtonLink>
        </div>
      </Container>
    </article>
  );
}
