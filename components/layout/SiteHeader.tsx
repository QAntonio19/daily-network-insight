"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="glass-header sticky top-0 z-50 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-serif text-lg tracking-tight text-navy transition-colors group-hover:text-terracotta sm:text-xl">
            {siteConfig.name}
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 sm:block">
            Media · Insight · Community
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-stone-900 text-ivory"
                    : "text-stone-700 hover:bg-stone-900/5 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/newsletter"
            className="btn-primary-shine hidden min-h-10 items-center rounded-full bg-navy px-4 py-2 text-sm font-medium text-ivory shadow-[0_6px_24px_rgba(0,0,0,0.14)] transition-[background-color,box-shadow] duration-200 hover:bg-navy-soft sm:inline-flex"
          >
            Newsletter
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-stone-900/12 bg-white/75 p-2 text-navy shadow-sm backdrop-blur-sm transition-[background-color,border-color] duration-200 hover:bg-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mobile-nav-drape px-5 pb-6 pt-2 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-900/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-navy px-3 py-3 text-center text-base font-medium text-ivory"
            >
              Join the Newsletter
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
