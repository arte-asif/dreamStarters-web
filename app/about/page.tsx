import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { CtaSection } from "@/sections/CtaSection";
import { FeatureGrid } from "@/sections/FeatureGrid";
import { PageHero } from "@/sections/PageHero";
import { eightCs, storyPoints } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the origin story, learning philosophy and future-ready mission of DreamStarters International School."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DreamStarters"
        title="A second home where children feel seen, supported and ready for life."
        text="DreamStarters was born from love and real family struggles, then shaped into an experiential school for confident, curious and future-ready learners."
        image="/images/foundation-arts-sports.png"
      />
      <SectionWrapper>
        <SectionHeading
          eyebrow="Origin story"
          title="No child should feel alone in the most important years of life."
          text="The founder's inspiration came from a young nephew in a small family setting. That emotional truth became a school promise: give children friendship, care, healthy routines, discovery and individual attention."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {storyPoints.map((point, index) => (
            <MotionReveal key={point.title} delay={index * 0.06}>
              <Card className="h-full">
                <IconBadge>
                  <HeartHandshake className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-5 text-xl font-semibold text-accent">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{point.text}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>
      <FeatureGrid
        eyebrow="DreamStarters 8 C's"
        title="The capabilities every child keeps building."
        text="These qualities show up across academics, projects, sports, arts, technology and leadership experiences."
        columns="four"
        items={eightCs.map((item) => ({
          title: item,
          text: "Developed through personalised learning, projects, communication practice and guided independence."
        }))}
      />
      <CtaSection />
    </>
  );
}
