import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { programs } from "@/lib/data";

export function ProgramsSection() {
  return (
    <SectionWrapper id="programs">
      <SectionHeading
        eyebrow="Programs"
        title="A complete pathway from first steps to future leadership."
        text="Each program is built around the child's stage of growth, with academics, life skills, creativity and future-ready learning moving together."
        align="center"
      />
      <div className="grid gap-5">
        {programs.map((program, index) => (
          <MotionReveal key={program.slug} delay={index * 0.08}>
            <Link
              href={program.href}
              className="group grid overflow-hidden rounded-premium border border-accent/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft md:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="relative min-h-64 overflow-hidden md:min-h-72">
                <Image
                  src={program.image}
                  alt={`${program.title} learning environment`}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent/20 transition group-hover:bg-accent/10" />
              </div>
              <div className="flex items-center justify-between gap-6 p-7 sm:p-9">
                <div>
                  <p className="mb-4 text-sm font-bold uppercase text-primary">
                    {program.subtitle}
                  </p>
                  <h3 className="text-4xl font-semibold text-accent sm:text-5xl">
                    {program.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                    {program.summary}
                  </p>
                </div>
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-mist text-accent transition group-hover:bg-primary group-hover:text-white sm:flex">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
