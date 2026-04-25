import Image from "next/image";
import { CheckCircle2, GraduationCap, Lightbulb, Map, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { learningJourney, programs } from "@/lib/data";

type Program = (typeof programs)[number];

export function ProgramDetail({ program }: { program: Program }) {
  return (
    <>
      <section className="container-px bg-accent py-14 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionReveal>
            <p className="mb-4 text-sm font-bold uppercase text-primary">
              {program.subtitle}
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-tight sm:text-6xl">
              {program.title}
            </h1>
            <p className="mt-5 text-lg font-semibold text-primary">{program.ages}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{program.summary}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/admissions" variant="secondary">
                Book a Visit
              </ButtonLink>
              <ButtonLink href="/programs" variant="light">
                View All Programs
              </ButtonLink>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="relative min-h-[23rem] overflow-hidden rounded-[2rem] shadow-soft sm:min-h-[30rem]">
              <Image
                src={program.image}
                alt={`${program.title} program`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
            </div>
          </MotionReveal>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Program architecture"
            title="What learners experience"
            text="A clear mix of academics, self-learning, real-world exposure and future skills."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {program.highlights.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.06}>
                <Card className="h-full">
                  <IconBadge>
                    <CheckCircle2 className="h-5 w-5" />
                  </IconBadge>
                  <p className="mt-5 text-base font-semibold leading-7 text-accent">{item}</p>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-mist/70">
        <SectionHeading
          eyebrow="Outcomes"
          title="The transformation we are designing for"
          text="Each program gives children visible growth in confidence, independence, communication and capability."
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {program.outcomes.map((outcome, index) => {
            const icons = [GraduationCap, Lightbulb, Map, ShieldCheck];
            const Icon = icons[index % icons.length];
            return (
              <MotionReveal key={outcome} delay={index * 0.06}>
                <Card className="h-full text-center">
                  <IconBadge className="mx-auto">
                    <Icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-5 text-xl font-semibold text-accent">{outcome}</h3>
                </Card>
              </MotionReveal>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}

export function JourneyTimeline() {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Learning journey"
        title="Continuous growth without gaps."
        text="From early nurturing to primary-level excellence, every stage is mapped to a clear transformation."
        align="center"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {learningJourney.map((item, index) => (
          <MotionReveal key={`${item.stage}-${item.age}`} delay={index * 0.04}>
            <Card className="h-full">
              <p className="text-sm font-bold uppercase text-primary">
                {item.age}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-accent">{item.stage}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.focus}</p>
              <div className="mt-5 rounded-2xl bg-mist p-4 text-sm font-semibold leading-6 text-accent">
                {item.transformation}
              </div>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
