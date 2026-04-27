import fs from "fs";
import path from "path";
import type { InsightPost } from "./types";

const DATA_PATH = path.join(process.cwd(), "data", "posts.json");

export function readPosts(): InsightPost[] {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(raw) as InsightPost[];
  } catch {
    return [];
  }
}

export function writePosts(posts: InsightPost[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

export function getPostBySlug(slug: string): InsightPost | undefined {
  return readPosts().find((p) => p.slug === slug);
}

export function createPost(post: InsightPost): InsightPost {
  const posts = readPosts();
  if (posts.some((p) => p.slug === post.slug)) {
    throw new Error(`Slug "${post.slug}" already exists`);
  }
  posts.unshift(post);
  writePosts(posts);
  return post;
}

export function updatePost(slug: string, data: Partial<InsightPost>): InsightPost {
  const posts = readPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) throw new Error(`Post "${slug}" not found`);
  posts[index] = { ...posts[index], ...data };
  writePosts(posts);
  return posts[index];
}

export function deletePost(slug: string): void {
  const posts = readPosts().filter((p) => p.slug !== slug);
  writePosts(posts);
}
