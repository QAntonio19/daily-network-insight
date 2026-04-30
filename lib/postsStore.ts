import type { InsightPost } from "./types";
import initialPostsJson from "../data/posts.json";

const initialPosts = initialPostsJson as InsightPost[];
const POSTS_BLOB_PATH = "daily-network-insights/posts.json";
const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

/**
 * In-memory cache to ensure immediate consistency after write operations.
 * This solves the Vercel Blob CDN propagation delay (up to 60s).
 */
let postsCache: InsightPost[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 5000; // 5 seconds - short TTL to eventually sync with blob

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
  const { head } = await import("@vercel/blob");
  try {
    const blobDetails = await head(POSTS_BLOB_PATH);
    if (!blobDetails?.url) return initialPosts;
    // Add cache-busting query param to bypass CDN cache (up to 60s propagation delay)
    const cacheBustUrl = `${blobDetails.url}?t=${Date.now()}`;
    const res = await fetch(cacheBustUrl, { cache: "no-store" });
    if (!res.ok) return initialPosts;
    return (await res.json()) as InsightPost[];
  } catch (err) {
    // BlobNotFoundError means file doesn't exist yet - use initial posts
    if (err instanceof Error && err.name === "BlobNotFoundError") {
      return initialPosts;
    }
    console.error("[blobRead] Error:", err);
    return initialPosts;
  }
}

async function blobWrite(posts: InsightPost[]): Promise<void> {
  try {
    const { put } = await import("@vercel/blob");
    await put(POSTS_BLOB_PATH, JSON.stringify(posts, null, 2), {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown blob error";
    console.error("[blobWrite] Failed to write to Vercel Blob:", message);
    throw new Error(`Failed to save posts: ${message}`);
  }
}

/* ── Public API ────────────────────────────────────────────────────── */
export async function readPosts(): Promise<InsightPost[]> {
  // Return cached data if fresh (solves CDN propagation delay)
  const now = Date.now();
  if (postsCache && now - cacheTimestamp < CACHE_TTL_MS) {
    return postsCache;
  }

  const posts = await (useBlob ? blobRead() : fsRead());
  postsCache = posts;
  cacheTimestamp = now;
  return posts;
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
  // Update cache immediately after successful write
  postsCache = posts;
  cacheTimestamp = Date.now();
  return post;
}

export async function updatePost(slug: string, data: Partial<InsightPost>): Promise<InsightPost> {
  const posts = await readPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) throw new Error(`Post "${slug}" not found`);
  posts[index] = { ...posts[index], ...data };
  await (useBlob ? blobWrite(posts) : fsWrite(posts));
  // Update cache immediately after successful write
  postsCache = posts;
  cacheTimestamp = Date.now();
  return posts[index];
}

export async function deletePost(slug: string): Promise<void> {
  const posts = await readPosts();
  const exists = posts.some((p) => p.slug === slug);
  if (!exists) {
    throw new Error(`Post "${slug}" not found`);
  }
  const filtered = posts.filter((p) => p.slug !== slug);
  await (useBlob ? blobWrite(filtered) : fsWrite(filtered));
  // Update cache immediately after successful write
  postsCache = filtered;
  cacheTimestamp = Date.now();
}
