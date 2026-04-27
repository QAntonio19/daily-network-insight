import { NextResponse } from "next/server";

const useBlob = !!process.env.BLOB_READ_WRITE_TOKEN;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Only JPEG, PNG, WebP and GIF are allowed" },
        { status: 400 },
      );
    }

    const ext = file.name.split(".").pop() ?? "jpg";
    const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    if (useBlob) {
      const { put } = await import("@vercel/blob");
      const { url } = await put(
        `daily-network-insights/images/${safeName}`,
        file,
        { access: "public" },
      );
      return NextResponse.json({ src: url });
    }

    /* Local fallback — save to /public/images/ */
    const fs = await import("fs");
    const path = await import("path");
    const destDir = path.join(process.cwd(), "public", "images");
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(path.join(destDir, safeName), buffer);
    return NextResponse.json({ src: `/images/${safeName}` });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
