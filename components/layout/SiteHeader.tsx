"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/content";
import type { NavItem } from "@/lib/types";

/** Mismo lenguaje que `ButtonLink` primary y CTAs con btn-primary-shine. */
const headerPrimaryCtaClass =
  "btn-primary-shine inline-flex min-h-9 shrink-0 items-center justify-center rounded-full border border-navy/20 bg-navy px-4 py-2 text-sm font-medium tracking-wide text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[color,background-color,box-shadow] duration-[220ms] ease-out hover:bg-navy-soft hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] sm:min-h-10 sm:px-5";

/**
 * Píldora estilo CTA (Contact): fondo, borde, sombra y brillo; transiciones in/out (globals `.header-nav-pill`).
 * El botón Contact sigue con `headerPrimaryCtaClass` (btn-primary-shine sólido).
 */
const headerTextNavClass = [
  "header-nav-pill",
  "inline-flex h-9 min-h-9 shrink-0 items-center justify-center",
  "rounded-full px-2.5 text-sm font-medium leading-none",
].join(" ");

const mobileNavRowClass =
  "flex w-full items-center justify-between px-1 py-4 text-base font-medium text-navy border-b border-stone-900/8 transition-colors hover:text-terracotta";

const mobileSubRowClass =
  "block w-full px-4 py-2.5 text-sm font-medium text-stone-500 hover:text-navy transition-colors";

// kept for desktop dropdown use
const headerSubMenuRowClass = [
  "header-nav-pill header-nav-pill--menu",
  "relative block w-full max-w-full whitespace-nowrap px-3 py-2 text-left text-sm font-medium w-max",
].join(" ");

function NavDesktopItemWithSubmenu({
  item,
  openKey,
  setOpenKey,
  menuAlign = "left",
}: {
  item: NavItem;
  openKey: string | null;
  setOpenKey: (v: string | null) => void;
  menuAlign?: "left" | "right";
}) {
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
        className={headerTextNavClass}
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
              const isExternal = sub.href.startsWith("http");
              return (
                <li key={sub.href} className="list-none w-max">
                  <Link
                    href={sub.href}
                    role="menuitem"
                    className={headerSubMenuRowClass}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
  openDesktopMenu: string | null,
  setOpenDesktopMenu: (v: string | null) => void,
  menuAlign: "left" | "right"
) {
  if (!item.children?.length) {
    return (
      <Link key={item.href} href={item.href} className={headerTextNavClass}>
        {item.label}
      </Link>
    );
  }
  return (
    <NavDesktopItemWithSubmenu
      key={item.href}
      item={item}
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
      aria-label={`${siteConfig.name}, home`}
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
          {/* Single toggle button — animates hamburger ↔ X */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={[
              "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
              "transition-[background-color,border-color,box-shadow,color] duration-300 ease-in-out",
              open
                ? "bg-navy text-white shadow-md"
                : "border border-stone-900/12 bg-white/75 text-navy shadow-sm backdrop-blur-sm hover:bg-white",
            ].join(" ")}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {/* Hamburger lines — fade+scale out when open */}
            <span
              className={[
                "absolute flex flex-col gap-1.5 transition-[opacity,transform] duration-300",
                open ? "scale-75 opacity-0" : "scale-100 opacity-100",
              ].join(" ")}
              aria-hidden
            >
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
            {/* X icon — fade+scale in when open */}
            <span
              className={[
                "absolute transition-[opacity,transform] duration-300",
                open ? "scale-100 opacity-100" : "scale-75 opacity-0",
              ].join(" ")}
              aria-hidden
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
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

      <div
        id="mobile-nav"
        className="mobile-nav-grid lg:hidden"
        data-state={open ? "open" : "closed"}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="mobile-nav-grid__inner">
          <div className="mobile-nav-drape px-5 pb-8 pt-3">
            <nav aria-label="Mobile primary">
              {/* First item (Home) */}
              <div className="mobile-nav-item border-b border-stone-900/8">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={mobileNavRowClass + " border-none"}
                >
                  Home
                </Link>
              </div>

              {withoutContact.filter((item) => item.href !== "/").map((item) => (
                <div key={item.href} className="mobile-nav-item">
                  {item.children?.length ? (
                    <div>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={mobileNavRowClass}
                      >
                        <span>{item.label}</span>
                        <svg className="h-4 w-4 shrink-0 opacity-40" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                      <div className="pb-1">
                        {item.children.map((sub) => {
                          const isExternal = sub.href.startsWith("http");
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={mobileSubRowClass}
                              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={mobileNavRowClass}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Contact pill */}
              <div className="mobile-nav-item mt-5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary-shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy/20 bg-navy px-5 py-3.5 text-base font-medium text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-[220ms] hover:bg-navy-soft hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)]"
                >
                  Contact
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                    <svg viewBox="0 0 10 10" className="h-3 w-3" fill="none" aria-hidden>
                      <path d="M2 8L8 2M8 2H3.5M8 2v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
