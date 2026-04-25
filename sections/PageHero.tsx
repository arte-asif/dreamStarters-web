import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { MotionReveal } from "@/components/MotionReveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  text,
  image = "/images/program-iplay.png",
  cta,
  className
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  cta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <section className={cn("container-px overflow-hidden bg-hero-soft py-14 lg:py-20", className)}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MotionReveal>
          <p className="mb-4 text-sm font-bold uppercase text-primary">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-accent sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{text}</p>
          {cta ? (
            <div className="mt-8">
              <ButtonLink href={cta.href} variant="secondary">
                {cta.label}
              </ButtonLink>
            </div>
          ) : null}
        </MotionReveal>
        <MotionReveal delay={0.1}>
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] shadow-soft sm:min-h-[28rem]">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/55 via-transparent to-transparent" />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
