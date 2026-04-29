import { NextResponse } from "next/server";
import { updatePost, deletePost, getPostBySlug } from "@/lib/postsStore";
import type { InsightPost } from "@/lib/types";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: Request, { params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { slug } = await params;
    const body = (await request.json()) as Partial<InsightPost>;
    const updated = await updatePost(slug, body);
    return NextResponse.json(updated);
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
    return NextResponse.json({ success: true });
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
