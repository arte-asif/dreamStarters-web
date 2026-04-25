import { Brain, MessageCircle, Rocket, Target } from "lucide-react";
import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { whyChoose } from "@/lib/data";

const icons = [MessageCircle, Brain, Target, Rocket];

export function WhyChooseSection() {
  return (
    <SectionWrapper className="bg-accent text-white premium-grid">
      <SectionHeading
        eyebrow="Why choose DreamStarters"
        title="Visible transformation, not just activities."
        text="Every stage is designed to develop confidence, communication, intelligence, independence and real-life readiness."
        align="center"
        tone="light"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {whyChoose.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <MotionReveal key={item.title} delay={index * 0.08}>
              <Card className="h-full border-white/10 bg-white/10 text-white shadow-none backdrop-blur">
                <IconBadge className="bg-primary text-white">
                  <Icon className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
              </Card>
            </MotionReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
