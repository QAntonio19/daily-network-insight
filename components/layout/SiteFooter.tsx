import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-editorial text-stone-200">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="font-serif text-2xl text-ivory">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-300">
              {siteConfig.tagline}
            </p>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                Newsletter
              </p>
              <p className="mt-2 text-sm text-stone-300">
                Weekly insight—curated, credible, and built for busy professionals.
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-stone-200 transition hover:text-ivory"
                    >
                      {item.label}
                    </Link>
                    {item.children && item.children.length > 0 ? (
                      <ul className="mt-2 space-y-1.5 border-l border-stone-600/50 pl-3">
                        {item.children.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="text-stone-300 transition hover:text-ivory"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                Connect
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-stone-200 transition hover:text-ivory"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <a
                    href={siteConfig.social.linkedin}
                    className="text-stone-200 transition hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.social.x}
                    className="text-stone-200 transition hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    className="text-stone-200 transition hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="editorial-rule my-10 opacity-40" />

        <div className="flex flex-col gap-4 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-stone-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
