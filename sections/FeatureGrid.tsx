import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";

export function FeatureGrid({
  eyebrow,
  title,
  text,
  items,
  columns = "three"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  items: Array<{ title: string; text: string }>;
  columns?: "two" | "three" | "four";
}) {
  const gridClass =
    columns === "four"
      ? "lg:grid-cols-4"
      : columns === "two"
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <SectionWrapper>
      <SectionHeading eyebrow={eyebrow} title={title} text={text} align="center" />
      <div className={`grid gap-5 md:grid-cols-2 ${gridClass}`}>
        {items.map((item, index) => (
          <MotionReveal key={item.title} delay={index * 0.06}>
            <Card className="h-full">
              <IconBadge>
                <span className="text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
              </IconBadge>
              <h3 className="mt-5 text-xl font-semibold text-accent">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
