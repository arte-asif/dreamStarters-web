import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-premium border border-accent/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-accent",
        className
      )}
    >
      {children}
    </div>
  );
}
