"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { InsightPost, InsightCategory } from "@/lib/types";

const CATEGORIES: InsightCategory[] = [
  "Our Story",
  "Local Community Insights",
  "Industry Insights",
  "Economic Insights",
  "Educational",
];

const EMPTY_FORM: Omit<InsightPost, "slug"> & { slug: string } = {
  slug: "",
  title: "",
  excerpt: "",
  body: "",
  category: [],
  date: new Date().toISOString().split("T")[0],
  readTime: "5 min read",
  imageSrc: "",
  imageAlt: "",
  featured: false,
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/* ─────────────────────────── Sub-components ─────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.15em] text-stone-500">
      {children}
    </span>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-200"
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full resize-y rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm text-stone-800 outline-none placeholder:text-stone-400 focus:border-stone-400 focus:ring-2 focus:ring-stone-200"
    />
  );
}

/* ─────────────────────────── Post Form ─────────────────────────── */

function PostForm({
  initial,
  onSave,
  onCancel,
  saving,
}: {
  initial: typeof EMPTY_FORM;
  onSave: (data: typeof EMPTY_FORM) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [form, setForm] = useState(initial);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const isNew = !initial.slug || initial.slug === "";

  function set<K extends keyof typeof EMPTY_FORM>(key: K, value: (typeof EMPTY_FORM)[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "title" && isNew) {
        next.slug = slugify(value as string);
      }
      return next;
    });
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Upload failed");
      set("imageSrc", json.src as string);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Title */}
      <div>
        <Label>Title *</Label>
        <Input value={form.title} onChange={(v) => set("title", v)} placeholder="Article title" required />
      </div>

      {/* Slug */}
      <div>
        <Label>Slug *</Label>
        <Input
          value={form.slug}
          onChange={(v) => set("slug", v)}
          placeholder="url-friendly-slug"
          required
        />
        <p className="mt-1 text-[11px] text-stone-400">URL: /insights/{form.slug || "…"}</p>
      </div>

      {/* Categories */}
      <div>
        <Label>Categories * (select one or more)</Label>
        <div className="flex flex-wrap gap-2 pt-1">
          {CATEGORIES.map((c) => {
            const checked = form.category.includes(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() =>
                  set(
                    "category",
                    checked
                      ? form.category.filter((x) => x !== c)
                      : [...form.category, c],
                  )
                }
                className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  checked
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-400"
                }`}
              >
                {checked && <span className="mr-1">✓</span>}
                {c}
              </button>
            );
          })}
        </div>
        {form.category.length === 0 && (
          <p className="mt-1.5 text-[11px] text-red-400">Select at least one category</p>
        )}
      </div>

      {/* Date + ReadTime */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Date *</Label>
          <Input type="date" value={form.date} onChange={(v) => set("date", v)} required />
        </div>
        <div>
          <Label>Read Time</Label>
          <Input value={form.readTime} onChange={(v) => set("readTime", v)} placeholder="5 min read" />
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <Label>Excerpt (short description) *</Label>
        <Textarea
          value={form.excerpt}
          onChange={(v) => set("excerpt", v)}
          placeholder="A concise summary shown on the cards…"
          rows={3}
        />
      </div>

      {/* Body */}
      <div>
        <Label>Full Article Body</Label>
        <Textarea
          value={form.body ?? ""}
          onChange={(v) => set("body", v)}
          placeholder={"Separate paragraphs with a blank line.\n\nParagraph two goes here…"}
          rows={10}
        />
        <p className="mt-1 text-[11px] text-stone-400">Separate paragraphs with an empty line.</p>
      </div>

      {/* Image */}
      <div>
        <Label>Cover Image</Label>
        <div className="flex gap-2">
          <Input
            value={form.imageSrc}
            onChange={(v) => set("imageSrc", v)}
            placeholder="https://… or upload below"
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex-shrink-0 cursor-pointer rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-xs font-semibold text-stone-600 transition hover:bg-stone-100 disabled:opacity-50"
          >
            {uploading ? "Uploading…" : "Upload"}
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
        </div>
        {uploadError && <p className="mt-1 text-xs text-red-500">{uploadError}</p>}
        {form.imageSrc && (
          <div className="mt-3 overflow-hidden rounded-xl border border-stone-200">
            <div className="relative aspect-[16/7] w-full bg-stone-100">
              <Image src={form.imageSrc} alt="preview" fill className="object-cover" unoptimized />
            </div>
          </div>
        )}
      </div>

      {/* Image Alt */}
      <div>
        <Label>Image Alt Text</Label>
        <Input value={form.imageAlt} onChange={(v) => set("imageAlt", v)} placeholder="Describe the image…" />
      </div>

      {/* Featured */}
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={form.featured ?? false}
          onChange={(e) => set("featured", e.target.checked)}
          className="h-4 w-4 rounded border-stone-300 accent-stone-800"
        />
        <span className="text-sm font-medium text-stone-700">Mark as Featured post</span>
      </label>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-stone-100 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-xl border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-600 transition hover:bg-stone-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="cursor-pointer rounded-xl bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700 disabled:opacity-50"
        >
          {saving ? "Saving…" : isNew ? "Publish Post" : "Save Changes"}
        </button>
      </div>
    </form>
  );
}

/* ─────────────────────────── Delete Confirm ─────────────────────────── */

function DeleteConfirm({
  title,
  onConfirm,
  onCancel,
  deleting,
}: {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  deleting: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
        <h3 className="text-base font-semibold text-stone-900">Delete post?</h3>
        <p className="mt-2 text-sm text-stone-500">
          <span className="font-medium text-stone-700">"{title}"</span> will be permanently removed.
          This cannot be undone.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="cursor-pointer rounded-xl border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={deleting}
            className="cursor-pointer rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {deleting ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Slide Panel ─────────────────────────── */

function SlidePanel({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative z-10 flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-6 py-4">
          <h2 className="text-base font-semibold text-stone-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-stone-500 transition hover:bg-stone-100"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>
        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Post Card (admin) ─────────────────────────── */

function AdminPostCard({
  post,
  onEdit,
  onDelete,
}: {
  post: InsightPost;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-stone-100 bg-white p-4 shadow-sm transition hover:shadow-md">
      {/* Thumbnail */}
      <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-stone-100">
        {post.imageSrc ? (
          <Image src={post.imageSrc} alt={post.imageAlt} fill className="object-cover" unoptimized />
        ) : (
          <div className="flex h-full items-center justify-center text-stone-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between overflow-hidden">
        <div>
          <div className="flex items-start justify-between gap-2">
            <p className="truncate text-sm font-semibold text-stone-900">{post.title}</p>
            {post.featured && (
              <span className="flex-shrink-0 rounded-full bg-stone-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                Featured
              </span>
            )}
          </div>
          <p className="mt-0.5 text-[11px] text-stone-400">
            {post.category.join(", ")} · {post.date} · {post.readTime}
          </p>
          <p className="mt-1 line-clamp-2 text-xs text-stone-500">{post.excerpt}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-shrink-0 flex-col items-end justify-between gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="cursor-pointer rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-600 transition hover:border-stone-400 hover:bg-stone-50"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="cursor-pointer rounded-lg border border-red-100 px-3 py-1.5 text-xs font-medium text-red-500 transition hover:border-red-300 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────── Main Page ─────────────────────────── */

export default function BlogEditPage() {
  const [posts, setPosts] = useState<InsightPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [panelMode, setPanelMode] = useState<"new" | "edit" | null>(null);
  const [editTarget, setEditTarget] = useState<InsightPost | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const [deleteTarget, setDeleteTarget] = useState<InsightPost | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/posts");
      if (!res.ok) throw new Error("Failed to load posts");
      const data = (await res.json()) as InsightPost[];
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error loading posts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  /* Save (create or update) */
  async function handleSave(form: typeof EMPTY_FORM) {
    setSaving(true);
    setSaveError("");
    try {
      const isNew = panelMode === "new";
      const url = isNew ? "/api/posts" : `/api/posts/${editTarget!.slug}`;
      const method = isNew ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Save failed");
      setPanelMode(null);
      setEditTarget(null);
      await fetchPosts();
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  /* Delete */
  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/posts/${deleteTarget.slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setDeleteTarget(null);
      await fetchPosts();
    } catch {
      /* ignore */
    } finally {
      setDeleting(false);
    }
  }

  const formInitial: typeof EMPTY_FORM =
    panelMode === "edit" && editTarget
      ? { ...EMPTY_FORM, ...editTarget }
      : { ...EMPTY_FORM, date: new Date().toISOString().split("T")[0] };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stone-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-stone-900">Blog Admin</p>
            <p className="text-[11px] text-stone-400">Daily Network Insights</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/insights"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-xl border border-stone-200 px-4 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-50"
          >
            View Site ↗
          </a>
          <button
            type="button"
            onClick={() => { setEditTarget(null); setPanelMode("new"); setSaveError(""); }}
            className="cursor-pointer rounded-xl bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-700"
          >
            + New Post
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Total Posts", value: posts.length },
            { label: "Featured", value: posts.filter((p) => p.featured).length },
            { label: "Categories", value: new Set(posts.map((p) => p.category)).size },
            { label: "Latest", value: posts[0]?.date ?? "—" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-stone-100 bg-white p-4 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">{stat.label}</p>
              <p className="mt-1 text-xl font-bold text-stone-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Posts list */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-stone-500">
            All Posts ({posts.length})
          </h2>
          <button
            type="button"
            onClick={fetchPosts}
            className="cursor-pointer rounded-lg px-3 py-1.5 text-xs text-stone-400 transition hover:text-stone-700"
          >
            ↻ Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20 text-sm text-stone-400">
            Loading posts…
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-sm text-red-600">{error}</div>
        ) : posts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-200 p-12 text-center">
            <p className="text-sm text-stone-400">No posts yet.</p>
            <button
              type="button"
              onClick={() => { setEditTarget(null); setPanelMode("new"); }}
              className="mt-3 cursor-pointer text-sm font-medium text-stone-700 underline underline-offset-2"
            >
              Create your first post →
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <AdminPostCard
                key={post.slug}
                post={post}
                onEdit={() => { setEditTarget(post); setPanelMode("edit"); setSaveError(""); }}
                onDelete={() => setDeleteTarget(post)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Slide panel: create / edit */}
      <SlidePanel
        open={panelMode !== null}
        title={panelMode === "new" ? "New Post" : `Edit: ${editTarget?.title ?? ""}`}
        onClose={() => { setPanelMode(null); setEditTarget(null); setSaveError(""); }}
      >
        {saveError && (
          <div className="mb-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
            {saveError}
          </div>
        )}
        <PostForm
          initial={formInitial}
          onSave={handleSave}
          onCancel={() => { setPanelMode(null); setEditTarget(null); setSaveError(""); }}
          saving={saving}
        />
      </SlidePanel>

      {/* Delete confirm dialog */}
      {deleteTarget && (
        <DeleteConfirm
          title={deleteTarget.title}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          deleting={deleting}
        />
      )}
    </div>
  );
}
