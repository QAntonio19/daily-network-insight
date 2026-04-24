import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-lg py-24 text-center sm:py-32">
          {/* Large 404 */}
          <p className="font-serif text-[8rem] font-bold leading-none tracking-tight text-stone-200/100 sm:text-[10rem]">
            404
          </p>

          {/* Content stacked over the number */}
          <div className="-mt-8 sm:-mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
              Page not found
            </p>
            <h1 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
              This page doesn&apos;t exist
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-stone-500">
              The page you&apos;re looking for may have been moved, deleted, or never existed.
              Let&apos;s get you back on track.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="btn-primary-shine inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-7 py-3 text-sm font-semibold text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-navy-soft"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
