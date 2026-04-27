import { NextResponse } from "next/server";
import { readPosts, createPost } from "@/lib/postsStore";
import type { InsightPost } from "@/lib/types";

export async function GET() {
  const posts = await readPosts();
  return NextResponse.json(posts);
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

    const post = await createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
