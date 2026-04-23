import Link from "next/link";
import { footerExploreGroups, siteConfig } from "@/lib/content";
import type { NavItem } from "@/lib/types";
import { NewsletterForm } from "./NewsletterForm";

function FooterNavBlock({ item }: { item: NavItem }) {
  return (
    <li>
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
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-editorial text-stone-200">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1.45fr)]">
          <div>
            <p className="font-serif text-2xl text-ivory">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-300">
              {siteConfig.tagline}
            </p>
            <div id="newsletter" className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                Newsletter
              </p>
              <p className="mt-2 text-sm text-stone-300">
                Weekly insight, curated, credible, and built for busy professionals.
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-10 sm:grid-cols-2 sm:items-start sm:gap-8 lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                Explore
              </p>
              <div className="mt-4 grid grid-cols-1 gap-6 min-[380px]:grid-cols-2 min-[380px]:gap-x-5 lg:grid-cols-3">
                {footerExploreGroups.map((group) => (
                  <div key={group.label} className="min-w-0">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      {group.label}
                    </p>
                    <ul className="mt-2.5 space-y-2 text-sm">
                      {group.items.map((item) => (
                        <FooterNavBlock key={item.href} item={item} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0 border-t border-stone-700/50 pt-8 sm:border-l sm:border-t-0 sm:border-stone-700/40 sm:pl-8 sm:pt-0">
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
                <li className="flex flex-wrap gap-x-4 gap-y-1">
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
