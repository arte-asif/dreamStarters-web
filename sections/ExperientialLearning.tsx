import { Blocks, Compass, Hand, Search } from "lucide-react";
import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { experientialCards } from "@/lib/data";

const icons = [Blocks, Compass, Hand, Search];

export function ExperientialLearning() {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Experiential learning"
        title="Children do not just memorize. They understand, apply and retain."
        text="The learning model turns curiosity into durable confidence through projects, visits, hands-on practice and self-discovery."
        align="center"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {experientialCards.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <MotionReveal key={item.title} delay={index * 0.07}>
              <Card className="h-full">
                <IconBadge className="bg-secondary/14">
                  <Icon className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-6 text-xl font-semibold text-accent">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </Card>
            </MotionReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
