"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-accent/10 bg-white/88 backdrop-blur-xl">
      <nav
        className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between gap-5"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="DreamStarters home">
          <Image
            src="/images/logo-bg-removed.png"
            alt="DreamStarters logo"
            width={168}
            height={96}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-accent",
                    pathname.startsWith(item.href) && "bg-mist text-accent"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </Link>
                <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-2xl border border-accent/10 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-accent",
                  pathname === item.href && "bg-mist text-accent"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/admissions" variant="secondary" className="min-h-11 px-5">
            Book a Visit
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/10 bg-white text-accent shadow-card lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "container-px grid overflow-hidden transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-3xl border border-accent/10 bg-white p-3 shadow-card">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-accent",
                  pathname === item.href && "bg-mist text-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/admissions" variant="secondary" className="mt-2 w-full">
              Book a Visit
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
