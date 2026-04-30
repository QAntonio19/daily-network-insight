import { NextResponse } from "next/server";
import { updatePost, deletePost, getPostBySlug, readPosts } from "@/lib/postsStore";
import type { InsightPost } from "@/lib/types";

// Disable Next.js caching for this route to ensure fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: Request, { params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    const body = (await request.json()) as Partial<InsightPost>;
    const updated = await updatePost(slug, body);
    // Return full posts list to avoid CDN cache issues on subsequent GET
    const posts = await readPosts();
    return NextResponse.json({ post: updated, posts });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    const isNotFound = message.includes("not found");
    return NextResponse.json(
      { error: message },
      { status: isNotFound ? 404 : 500 }
    );
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    const { slug } = await params;
    await deletePost(slug);
    // Return full posts list to avoid CDN cache issues on subsequent GET
    const posts = await readPosts();
    return NextResponse.json({ success: true, posts });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    const isNotFound = message.includes("not found");
    console.error(`[DELETE /api/posts] Error:`, message);
    return NextResponse.json(
      { error: message },
      { status: isNotFound ? 404 : 500 }
    );
  }
}
