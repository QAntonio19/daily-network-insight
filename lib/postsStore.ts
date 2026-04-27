import { put, list } from "@vercel/blob";
import type { InsightPost } from "./types";
import initialPostsJson from "../data/posts.json";

const POSTS_BLOB_PATH = "daily-network-insights/posts.json";

const initialPosts = initialPostsJson as InsightPost[];

async function getBlobUrl(): Promise<string | null> {
  const { blobs } = await list({ prefix: POSTS_BLOB_PATH });
  return blobs[0]?.url ?? null;
}

export async function readPosts(): Promise<InsightPost[]> {
  try {
    const url = await getBlobUrl();
    if (!url) return initialPosts;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return initialPosts;
    return (await res.json()) as InsightPost[];
  } catch {
    return initialPosts;
  }
}

async function writePosts(posts: InsightPost[]): Promise<void> {
  await put(POSTS_BLOB_PATH, JSON.stringify(posts, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

export async function getPostBySlug(slug: string): Promise<InsightPost | undefined> {
  const posts = await readPosts();
  return posts.find((p) => p.slug === slug);
}

export async function createPost(post: InsightPost): Promise<InsightPost> {
  const posts = await readPosts();
  if (posts.some((p) => p.slug === post.slug)) {
    throw new Error(`Slug "${post.slug}" already exists`);
  }
  posts.unshift(post);
  await writePosts(posts);
  return post;
}

export async function updatePost(slug: string, data: Partial<InsightPost>): Promise<InsightPost> {
  const posts = await readPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) throw new Error(`Post "${slug}" not found`);
  posts[index] = { ...posts[index], ...data };
  await writePosts(posts);
  return posts[index];
}

export async function deletePost(slug: string): Promise<void> {
  const posts = await readPosts();
  await writePosts(posts.filter((p) => p.slug !== slug));
}
