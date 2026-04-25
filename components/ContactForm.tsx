"use client";

import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form
      className="grid gap-4 rounded-[2rem] border border-accent/10 bg-white p-6 shadow-card sm:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-accent">
          Parent name
          <input
            required
            type="text"
            className="min-h-12 rounded-2xl border border-accent/10 bg-mist/50 px-4 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-accent">
          Phone
          <input
            required
            type="tel"
            className="min-h-12 rounded-2xl border border-accent/10 bg-mist/50 px-4 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
            placeholder="+91"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-accent">
        Child age / grade
        <input
          type="text"
          className="min-h-12 rounded-2xl border border-accent/10 bg-mist/50 px-4 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
          placeholder="Example: 5 years / UKG"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-accent">
        Message
        <textarea
          rows={5}
          className="rounded-2xl border border-accent/10 bg-mist/50 px-4 py-3 text-slate-800 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
          placeholder="Tell us what you would like to know"
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#302a72] focus:outline-none focus:ring-4 focus:ring-primary/25"
      >
        Send Enquiry
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
