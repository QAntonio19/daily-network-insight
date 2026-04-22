"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isNavItemActive } from "@/lib/navigation";
import { navItems, siteConfig } from "@/lib/content";
import type { NavItem } from "@/lib/types";

/** Mismo lenguaje que `ButtonLink` primary y CTAs con btn-primary-shine. */
const headerPrimaryCtaClass =
  "btn-primary-shine inline-flex min-h-9 shrink-0 items-center justify-center rounded-full border border-navy/20 bg-navy px-4 py-2 text-sm font-medium tracking-wide text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[color,background-color,box-shadow] duration-[220ms] ease-out hover:bg-navy-soft hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] sm:min-h-10 sm:px-5";

function textNavClass(active: boolean) {
  return `shrink-0 inline-flex h-9 items-center justify-center rounded-full px-2.5 text-sm font-medium leading-none transition-colors ${
    active
      ? "bg-black text-ivory"
      : "text-stone-600 hover:bg-stone-900/5 hover:text-navy"
  }`;
}

function submenuTriggerClass(active: boolean) {
  return `shrink-0 inline-flex h-9 items-center justify-center rounded-full px-2.5 text-sm font-medium leading-none transition-colors ${
    active
      ? "bg-black text-ivory"
      : "text-stone-600 hover:bg-stone-900/5 hover:text-navy"
  }`;
}

function NavDesktopItemWithSubmenu({
  item,
  pathname,
  openKey,
  setOpenKey,
  menuAlign = "left",
}: {
  item: NavItem;
  pathname: string;
  openKey: string | null;
  setOpenKey: (v: string | null) => void;
  menuAlign?: "left" | "right";
}) {
  const active = isNavItemActive(pathname, item);
  const open = openKey === item.href;
  const children = item.children!;

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpenKey(item.href);
      }}
      onMouseLeave={() => {
        setOpenKey(null);
      }}
      onFocusCapture={() => {
        setOpenKey(item.href);
      }}
      onBlurCapture={(e) => {
        const next = e.relatedTarget;
        if (next && e.currentTarget.contains(next)) return;
        if (openKey === item.href) setOpenKey(null);
      }}
    >
      <Link
        href={item.href}
        className={submenuTriggerClass(active)}
        aria-expanded={open}
        aria-haspopup="menu"
        onFocus={() => {
          setOpenKey(item.href);
        }}
      >
        <span className="inline-flex items-center gap-1.5">
          {item.label}
          <svg
            className="h-3 w-3 opacity-60"
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden
          >
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </span>
      </Link>
      {open ? (
        <div
          className={`absolute top-full z-50 w-max pt-2 ${menuAlign === "right" ? "right-0 left-auto" : "left-0"}`}
        >
          <ul
            className="list-none space-y-0.5 rounded-2xl border border-stone-900/10 bg-white/95 p-1.5 shadow-lg backdrop-blur-sm w-max"
            role="menu"
          >
            {children.map((sub) => {
              const subActive = pathname === sub.href;
              return (
                <li key={sub.href} className="list-none w-max">
                  <Link
                    href={sub.href}
                    role="menuitem"
                    className={`block w-max max-w-full whitespace-nowrap rounded-full px-3 py-2 text-left text-sm font-medium ${
                      subActive
                        ? "bg-stone-900 text-ivory"
                        : "text-stone-700 hover:bg-stone-900/5 hover:text-navy"
                    }`}
                    onClick={() => {
                      setOpenKey(null);
                    }}
                  >
                    {sub.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function renderDesktopNavItem(
  item: NavItem,
  pathname: string,
  openDesktopMenu: string | null,
  setOpenDesktopMenu: (v: string | null) => void,
  menuAlign: "left" | "right"
) {
  if (!item.children?.length) {
    const a = isNavItemActive(pathname, item);
    return (
      <Link key={item.href} href={item.href} className={textNavClass(a)}>
        {item.label}
      </Link>
    );
  }
  return (
    <NavDesktopItemWithSubmenu
      key={item.href}
      item={item}
      pathname={pathname}
      openKey={openDesktopMenu}
      setOpenKey={setOpenDesktopMenu}
      menuAlign={menuAlign}
    />
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    setOpenDesktopMenu(null);
  }, [pathname]);

  const withoutContact = navItems.filter((item) => item.href !== "/contact");
  /** Misma fila: Home…Events, espacio uniforme. Submenús: alineado según posición. */
  const mainNavItems = withoutContact;

  const brandBlock = (
    <Link
      href="/"
      className="group inline-flex w-fit max-w-none items-center gap-2.5 sm:gap-3 lg:gap-3.5"
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/images/logo-dni.png"
        alt=""
        width={96}
        height={96}
        className="h-12 w-auto shrink-0 sm:h-14 md:h-16"
        priority
      />
      <span className="flex min-w-0 flex-col gap-0 leading-none [font-family:var(--font-brand-display)]">
        <span className="block text-sm tracking-tight text-navy transition-colors group-hover:text-terracotta sm:text-base md:text-lg">
          Daily Network
        </span>
        <span className="block -mt-px text-sm tracking-tight text-navy transition-colors group-hover:text-terracotta sm:text-base md:text-lg">
          Insights
        </span>
      </span>
    </Link>
  );

  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-8 lg:hidden">
          {brandBlock}
          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-stone-900/12 bg-white/75 p-2 text-navy shadow-sm backdrop-blur-sm transition-[background-color,border-color] duration-200 hover:bg-white"
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

        <div className="hidden w-full min-w-0 items-center justify-between gap-2 px-4 pb-3 pt-0 sm:px-8 lg:flex lg:py-4">
          <div className="w-fit min-w-0 shrink-0">{brandBlock}</div>
          <nav
            className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-1 sm:gap-1.5 xl:gap-2"
            aria-label="Primary"
          >
            {mainNavItems.map((item, i) =>
              renderDesktopNavItem(
                item,
                pathname,
                openDesktopMenu,
                setOpenDesktopMenu,
                i >= 4 ? "right" : "left"
              )
            )}
          </nav>
          <div className="w-fit shrink-0">
            <Link href="/contact" className={headerPrimaryCtaClass}>
              Contact
            </Link>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mobile-nav-drape px-5 pb-6 pt-2 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {withoutContact.map((item) => {
              const topActive = isNavItemActive(pathname, item);
              if (item.href === "/") {
                return (
                  <Link
                    key={item.href}
                    href="/"
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-navy px-3 py-3 text-center text-base font-medium text-ivory"
                  >
                    Home
                  </Link>
                );
              }
              return (
                <div key={item.href} className="flex flex-col gap-0.5">
                  {item.children?.length ? (
                    <>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-xl px-3 py-3 text-base font-medium ${
                          topActive
                            ? "bg-stone-900 text-ivory"
                            : "text-stone-800 hover:bg-stone-900/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.children.map((sub) => {
                        const subActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className={`rounded-xl py-2 pl-8 pr-3 text-sm font-medium ${
                              subActive
                                ? "text-navy"
                                : "text-stone-600 hover:bg-stone-900/5"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl px-3 py-3 text-base font-medium ${
                        topActive
                          ? "bg-stone-900 text-ivory"
                          : "text-stone-800 hover:bg-stone-900/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary-shine mt-1 rounded-xl border border-navy/20 bg-navy px-3 py-3 text-center text-base font-medium text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-[220ms] hover:bg-navy-soft hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
