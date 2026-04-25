import type { Metadata } from "next";
import { CtaSection } from "@/sections/CtaSection";
import { FeatureGrid } from "@/sections/FeatureGrid";
import { JourneyTimeline, ProgramDetail } from "@/sections/ProgramDetail";
import { programs } from "@/lib/data";

const program = programs.find((item) => item.slug === "iplay")!;

export const metadata: Metadata = {
  title: "iPlay Program",
  description:
    "iPlay at DreamStarters focuses on brain development, phonics, languages, math, science, abacus, AI basics and robotics for PreKG to Grade 2."
};

export default function IPlayPage() {
  return (
    <>
      <ProgramDetail program={program} />
      <FeatureGrid
        eyebrow="iPlay curriculum"
        title="The first eight years shape confidence, intelligence and personality."
        text="iPlay blends play, smart movement, comprehension-first reading, expressive writing and age-appropriate technology."
        items={[
          {
            title: "Brain development",
            text: "The program supports social, emotional, cognitive and physical growth during the most crucial years."
          },
          {
            title: "Phonics and languages",
            text: "English phonics, Malayalam, Hindi and early language development grow through listening, speaking, reading and writing."
          },
          {
            title: "Math and science",
            text: "Children learn observation, measurement, classifying, questioning, calculation, application and data handling."
          },
          {
            title: "Advanced skills",
            text: "Abacus, chess, Rubik's cube, coding, robotics and AI basics are introduced in child-friendly ways."
          },
          {
            title: "Life skills",
            text: "Karate, swimming, biking, entrepreneurship basics, money awareness and responsibility build independence."
          },
          {
            title: "Arts and sports",
            text: "Music, dance and multi-sport exposure support creativity, coordination and physical confidence."
          }
        ]}
      />
      <JourneyTimeline />
      <CtaSection title="Experience iPlay with DreamStarters" button="Book a Visit" />
    </>
  );
}
