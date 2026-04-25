import type { Metadata } from "next";
import { AboutPreview } from "@/sections/AboutPreview";
import HomeModal from "@/components/HomeModal";
import { CtaSection } from "@/sections/CtaSection";
import { ExperientialLearning } from "@/sections/ExperientialLearning";
import { HeroCarousel } from "@/sections/HeroCarousel";
import { JourneyTimeline } from "@/sections/ProgramDetail";
import { ProgramsSection } from "@/sections/ProgramsSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";

export const metadata: Metadata = {
  title: "DreamStarters International School | Future Ready Education",
  description:
    "Premium experiential learning school focusing on AI, robotics, leadership and real-world skills."
};

export default function HomePage() {
  return (
    <>
      <HomeModal />
      <HeroCarousel />
      <ProgramsSection />
      <AboutPreview />
      <ExperientialLearning />
      <WhyChooseSection />
      <JourneyTimeline />
      <CtaSection />
    </>
  );
}
