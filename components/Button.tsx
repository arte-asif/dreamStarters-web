import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-accent text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#302a72]",
  secondary:
    "bg-primary text-white shadow-card hover:-translate-y-0.5 hover:bg-secondary",
  ghost:
    "border border-accent/15 bg-white/80 text-accent hover:-translate-y-0.5 hover:border-primary/50 hover:bg-mist",
  light:
    "bg-white text-accent shadow-card hover:-translate-y-0.5 hover:bg-mist"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary/25",
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden className="h-4 w-4" /> : null}
    </Link>
  );
}
