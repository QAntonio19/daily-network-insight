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
                    href={siteConfig.social.instagram}
                    className="text-stone-400 transition hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
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

              {/* Support Our Work */}
              <div className="mt-8 border-t border-stone-700/50 pt-6">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#E8A95B]">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8A95B]">
                    Support Our Work
                  </p>
                </div>
                <p className="mt-3 text-sm text-stone-400">
                  Help us continue delivering valuable insights. Your support makes a difference.
                </p>
                <a
                  href="https://www.paypal.com/ncp/payment/LM8BDY9XDZUK6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E8A95B] px-5 py-2 text-sm font-medium text-[#E8A95B] transition-all hover:bg-[#E8A95B] hover:text-black"
                >
                  Donate
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
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
