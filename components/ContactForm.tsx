"use client";

import { useId, useState } from "react";

export function ContactForm() {
  const baseId = useId();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor={`${baseId}-name`} className="text-sm font-medium text-navy">
          Name
        </label>
        <input
          id={`${baseId}-name`}
          name="name"
          required
          autoComplete="name"
          className="input-editorial mt-2"
        />
      </div>
      <div>
        <label htmlFor={`${baseId}-email`} className="text-sm font-medium text-navy">
          Email
        </label>
        <input
          id={`${baseId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input-editorial mt-2"
        />
      </div>
      <div>
        <label htmlFor={`${baseId}-org`} className="text-sm font-medium text-navy">
          Organization (optional)
        </label>
        <input
          id={`${baseId}-org`}
          name="organization"
          autoComplete="organization"
          className="input-editorial mt-2"
        />
      </div>
      <div>
        <label htmlFor={`${baseId}-msg`} className="text-sm font-medium text-navy">
          How can we collaborate?
        </label>
        <textarea
          id={`${baseId}-msg`}
          name="message"
          required
          rows={5}
          className="textarea-editorial mt-2"
        />
      </div>
      <button
        type="submit"
        className="btn-primary-shine w-full min-h-11 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-200 hover:bg-navy-soft sm:w-auto"
      >
        {status === "sent" ? "Thank you, we’ll be in touch" : "Send message"}
      </button>
    </form>
  );
}
