"use client";

import { useId, useState } from "react";

interface NewsletterFormProps {
  variant?: "footer" | "inline";
  tone?: "dark" | "light";
}

export function NewsletterForm({
  variant = "footer",
  tone = "dark",
}: NewsletterFormProps) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sent");
  }

  const compact = variant === "inline";
  const isLight = tone === "light";

  const inputClass = `${isLight ? "input-editorial rounded-full" : "input-editorial-dark"}`;

  const buttonClass = isLight
    ? "btn-primary-shine rounded-full bg-navy px-5 py-3 text-sm font-semibold text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-[background-color,box-shadow] duration-200 hover:bg-navy-soft"
    : "btn-primary-shine rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition-[background-color,box-shadow] duration-200 hover:bg-terracotta-soft";

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "flex flex-col gap-3 sm:flex-row" : "flex flex-col gap-3"}
    >
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <input
        id={inputId}
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className={`${inputClass} w-full ${compact ? "sm:max-w-xs" : ""}`}
      />
      <button type="submit" className={buttonClass}>
        {status === "sent" ? "You’re on the list" : "Subscribe"}
      </button>
    </form>
  );
}
