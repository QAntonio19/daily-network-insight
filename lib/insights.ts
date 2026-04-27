import { readPosts, getPostBySlug as _getPostBySlug } from "./postsStore";
import type { InsightPost } from "./types";

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return _getPostBySlug(slug);
}

export function getAllInsightSlugs(): string[] {
  return readPosts().map((p) => p.slug);
}
