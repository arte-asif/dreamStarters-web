import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export function SectionWrapper({
  children,
  className,
  innerClassName,
  id
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("container-px py-16 sm:py-20 lg:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "dark"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-white" : "text-accent"
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-4 text-base leading-8",
            tone === "light" ? "text-white/72" : "text-slate-600"
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
