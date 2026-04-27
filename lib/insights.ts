import { readPosts, getPostBySlug as _getPostBySlug } from "./postsStore";
import type { InsightPost } from "./types";

export async function getInsightBySlug(slug: string): Promise<InsightPost | undefined> {
  return _getPostBySlug(slug);
}

export async function getAllInsightSlugs(): Promise<string[]> {
  const posts = await readPosts();
  return posts.map((p) => p.slug);
}
