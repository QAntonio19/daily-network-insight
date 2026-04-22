"use client";

import { useCallback, useEffect, useId, useState } from "react";
import type { FaqItem } from "@/lib/faqContent";

function useIsDesktopHover() {
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMd(mq.matches);
    const onChange = () => setIsMd(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMd;
}

function FaqChevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqItemRow({
  item,
  isOpen,
  isMd,
  onRequestOpen,
  onRequestToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  isMd: boolean;
  onRequestOpen: () => void;
  onRequestToggle: () => void;
}) {
  const panelId = useId();

  const onMouseEnter = useCallback(() => {
    if (isMd) onRequestOpen();
  }, [isMd, onRequestOpen]);

  const onClick = useCallback(() => {
    if (!isMd) onRequestToggle();
  }, [isMd, onRequestToggle]);

  return (
    <li className="list-none">
      <div
        className={[
          "relative cursor-pointer rounded-2xl border px-5 py-4 transition-[background-color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen
            ? "border-navy/15 bg-navy shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
            : "border-stone-900/10 bg-ivory shadow-[0_4px_24px_rgba(0,0,0,0.04)]",
        ].join(" ")}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!isMd) onRequestToggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <div className="flex items-center justify-between gap-4">
          <h3
            className={[
              "select-none font-sans text-base font-semibold leading-snug transition-colors duration-300 sm:text-lg",
              isOpen ? "text-ivory" : "text-navy",
            ].join(" ")}
          >
            {item.question}
          </h3>
          <span
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300",
              isOpen
                ? "rotate-180 border-ivory/25 bg-ivory/10 text-ivory"
                : "border-stone-900/10 bg-beige/40 text-navy",
            ].join(" ")}
            aria-hidden
          >
            <FaqChevron className="h-5 w-5" />
          </span>
        </div>
        <div
          className="home-faq-answer-grid"
          data-state={isOpen ? "open" : "closed"}
        >
          <div className="min-h-0 overflow-hidden">
            <p
              id={panelId}
              aria-hidden={!isOpen}
              className={[
                "mt-0 border-t pt-0 font-sans text-sm leading-relaxed transition-[opacity,padding,border-color,color] duration-300 ease-out sm:text-base",
                isOpen
                  ? "border-ivory/20 pt-4 text-stone-200 opacity-100"
                  : "border-transparent pt-0 text-stone-600 opacity-0",
              ].join(" ")}
            >
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function HomeFaqItems({ items }: { items: readonly FaqItem[] }) {
  const isMd = useIsDesktopHover();
  const [openId, setOpenId] = useState<string | null>(null);

  const onListMouseLeave = useCallback(() => {
    if (isMd) setOpenId(null);
  }, [isMd]);

  return (
    <ul
      className="mx-auto list-none space-y-4 p-0 lg:mx-0"
      onMouseLeave={onListMouseLeave}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <FaqItemRow
            key={item.id}
            item={item}
            isOpen={isOpen}
            isMd={isMd}
            onRequestOpen={() => {
              if (isMd) setOpenId(item.id);
            }}
            onRequestToggle={() => {
              if (!isMd) {
                setOpenId((prev) => (prev === item.id ? null : item.id));
              }
            }}
          />
        );
      })}
    </ul>
  );
}
