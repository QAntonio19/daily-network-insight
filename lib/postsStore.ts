import type { InsightPost } from "./types";
import initialPostsJson from "../data/posts.json";

const initialPosts = initialPostsJson as InsightPost[];
const POSTS_BLOB_PATH = "daily-network-insights/posts.json";
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

/* ── Local (fs) helpers ────────────────────────────────────────────── */
async function fsRead(): Promise<InsightPost[]> {
  const fs = await import("fs");
  const path = await import("path");
  const filePath = path.join(process.cwd(), "data", "posts.json");
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as InsightPost[];
  } catch {
    return initialPosts;
  }
}

async function fsWrite(posts: InsightPost[]): Promise<void> {
  const fs = await import("fs");
  const path = await import("path");
  const filePath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf-8");
}

/* ── Vercel Blob helpers ───────────────────────────────────────────── */
async function blobRead(): Promise<InsightPost[]> {
  const { list } = await import("@vercel/blob");
  try {
    const { blobs } = await list({ prefix: POSTS_BLOB_PATH });
    if (!blobs[0]?.url) return initialPosts;
    const res = await fetch(blobs[0].url, { cache: "no-store" });
    if (!res.ok) return initialPosts;
    return (await res.json()) as InsightPost[];
  } catch {
    return initialPosts;
  }
}

async function blobWrite(posts: InsightPost[]): Promise<void> {
  const { put } = await import("@vercel/blob");
  await put(POSTS_BLOB_PATH, JSON.stringify(posts, null, 2), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

/* ── Public API ────────────────────────────────────────────────────── */
export async function readPosts(): Promise<InsightPost[]> {
  return useBlob ? blobRead() : fsRead();
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
  await (useBlob ? blobWrite(posts) : fsWrite(posts));
  return post;
}

export async function updatePost(slug: string, data: Partial<InsightPost>): Promise<InsightPost> {
  const posts = await readPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) throw new Error(`Post "${slug}" not found`);
  posts[index] = { ...posts[index], ...data };
  await (useBlob ? blobWrite(posts) : fsWrite(posts));
  return posts[index];
}

export async function deletePost(slug: string): Promise<void> {
  const posts = await readPosts();
  await (useBlob ? blobWrite(posts.filter((p) => p.slug !== slug)) : fsWrite(posts.filter((p) => p.slug !== slug)));
}
