import { NextResponse } from "next/server";
import { readPosts, createPost } from "@/lib/postsStore";
import type { InsightPost } from "@/lib/types";

// Disable Next.js caching for this route to ensure fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const posts = await readPosts();
  return NextResponse.json(posts, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InsightPost;

    if (
      !body.slug ||
      !body.title ||
      !body.excerpt ||
      !Array.isArray(body.category) ||
      body.category.length === 0
    ) {
      return NextResponse.json(
        { error: "slug, title, excerpt and at least one category are required" },
        { status: 400 },
      );
    }

    await createPost(body);
    // Return full posts list to avoid CDN cache issues on subsequent GET
    const posts = await readPosts();
    return NextResponse.json({ post: body, posts }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
