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
                <li className="flex items-center gap-4">
                  <a
                    href={siteConfig.social.linkedin}
                    className="text-stone-400 transition hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.x}
                    className="text-stone-400 transition hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    className="text-stone-400 transition hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="editorial-rule my-10 opacity-40" />

        <div className="flex flex-col gap-4 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-stone-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <div className="flex flex-col gap-0.5">
              <p className="text-white">© {year} Daily Network Insights LLC. All rights reserved.</p>
              <p className="text-stone-600">A California Limited Liability Company.</p>
            </div>
          </div>
          <Link href="/privacy" className="hover:text-stone-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
