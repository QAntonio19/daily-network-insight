import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  ambassadors,
  ambassadorsIntro,
  type Ambassador,
} from "@/lib/ambassadorsContent";

function SocialIconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 2.762 6.163 6.163-2.759 6.163-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
    </svg>
  );
}

function SocialIconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
  );
}

function SocialIconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.064-2.065 2.064 2.064 0 114.128 0 2.062 2.062 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function AmbassadorCard({ person }: { person: Ambassador }) {
  const { social } = person;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-900/10 bg-beige/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:flex-row sm:items-stretch">
      <div className="relative aspect-[3/4] w-full min-h-[220px] sm:aspect-auto sm:min-h-[280px] sm:w-[40%] sm:max-w-[240px] sm:shrink-0">
        <Image
          src={person.imageSrc}
          alt={person.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 240px, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
          {person.department}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-navy sm:text-3xl">
          {person.name}
        </h3>
        <p className="mt-4 text-sm text-stone-600">
          <a
            href={`mailto:${person.email}`}
            className="underline decoration-stone-900/20 underline-offset-2 transition-colors hover:text-navy"
          >
            {person.email}
          </a>
        </p>
        <p className="mt-1 text-sm text-stone-600">
          <a
            href={`tel:${person.phone.replace(/\D/g, "")}`}
            className="transition-colors hover:text-navy"
          >
            {person.phone}
          </a>
        </p>
        <div className="mt-6 flex items-center gap-2">
          {social.instagram ? (
            <Link
              href={social.instagram}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-ivory transition-[background-color,transform] duration-200 hover:bg-navy-soft hover:scale-105"
              aria-label="Instagram"
            >
              <SocialIconInstagram className="h-4 w-4" />
            </Link>
          ) : null}
          {social.facebook ? (
            <Link
              href={social.facebook}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-ivory transition-[background-color,transform] duration-200 hover:bg-navy-soft hover:scale-105"
              aria-label="Facebook"
            >
              <SocialIconFacebook className="h-4 w-4" />
            </Link>
          ) : null}
          {social.linkedin ? (
            <Link
              href={social.linkedin}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-ivory transition-[background-color,transform] duration-200 hover:bg-navy-soft hover:scale-105"
              aria-label="LinkedIn"
            >
              <SocialIconLinkedIn className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function HomeAmbassadors() {
  return (
    <section
      id="ambassadors"
      className="scroll-mt-24 border-b border-stone-900/10 bg-transparent sm:scroll-mt-28"
      aria-labelledby="ambassadors-heading"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <RevealOnScroll>
          <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            {ambassadorsIntro.eyebrow}
          </p>
          <h2
            id="ambassadors-heading"
            className="mt-3 font-sans text-3xl font-normal leading-tight text-navy sm:text-4xl"
          >
            {ambassadorsIntro.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
            {ambassadorsIntro.description}
          </p>
        </header>
          <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-10">
            {ambassadors.map((person) => (
              <div key={person.id} className="reveal-scale">
                <AmbassadorCard person={person} />
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
