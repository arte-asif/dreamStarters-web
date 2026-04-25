import type { Metadata } from "next";
import { CtaSection } from "@/sections/CtaSection";
import { ExperientialLearning } from "@/sections/ExperientialLearning";
import { PageHero } from "@/sections/PageHero";
import { JourneyTimeline } from "@/sections/ProgramDetail";
import { ProgramsSection } from "@/sections/ProgramsSection";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore DreamStarters iPlay, iDiscover and iLead programs from PreKG to Grade 12."
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Three pathways. One continuous transformation journey."
        text="DreamStarters is structured to support children from early nurturing to future leadership, without losing continuity between stages."
        image="/images/program-idiscover.png"
        cta={{ label: "Book a Visit", href: "/admissions" }}
      />
      <ProgramsSection />
      <JourneyTimeline />
      <ExperientialLearning />
      <CtaSection />
    </>
  );
}
