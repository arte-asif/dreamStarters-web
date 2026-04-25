import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { CtaSection } from "@/sections/CtaSection";
import { PageHero } from "@/sections/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about DreamStarters programs, experiential learning, admissions, food and future-ready curriculum."
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions families usually ask before visiting."
        text="Quick answers about programs, admissions, future skills, food and the learning model."
        image="/images/eight-cs.png"
      />
      <SectionWrapper>
        <SectionHeading
          eyebrow="Answers"
          title="Everything starts with clarity."
          align="center"
        />
        <FaqAccordion />
      </SectionWrapper>
      <CtaSection title="Still Deciding? Visit the Campus" button="Book a Visit" />
    </>
  );
}
