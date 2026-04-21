import { insightPosts } from "./content";
import type { InsightPost } from "./types";

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insightPosts.find((p) => p.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insightPosts.map((p) => p.slug);
}
