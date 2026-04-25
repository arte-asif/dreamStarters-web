import { HeartHandshake, Sparkles, Telescope, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { storyPoints } from "@/lib/data";

const icons = [HeartHandshake, UsersRound, Sparkles, Telescope];

export function AboutPreview() {
  return (
    <SectionWrapper className="bg-mist/70">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionReveal>
          <SectionHeading
            eyebrow="Our Story"
            title="A school built from love, care and a promise that no child should feel alone."
            text="DreamStarters brings together emotional security, individual attention, future-ready skills and a learning model that helps children understand life beyond textbooks."
          />
          <ButtonLink href="/about" variant="primary">
            Read Our Story
          </ButtonLink>
        </MotionReveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {storyPoints.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <MotionReveal key={point.title} delay={index * 0.08}>
                <Card className="h-full">
                  <IconBadge>
                    <Icon className="h-5 w-5" />
                  </IconBadge>
                  <h3 className="mt-5 text-xl font-semibold text-accent">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{point.text}</p>
                </Card>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
