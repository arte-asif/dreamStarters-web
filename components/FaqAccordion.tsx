"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-accent/10 rounded-[2rem] border border-accent/10 bg-white shadow-card">
      {faqs.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-8"
          >
            <span className="text-base font-semibold text-accent sm:text-lg">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-primary transition",
                open === index && "rotate-180"
              )}
            />
          </button>
          <div className={cn("grid transition-all duration-300", open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
            <div className="min-h-0 overflow-hidden">
              <p className="px-6 pb-6 text-sm leading-7 text-slate-600 sm:px-8">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
