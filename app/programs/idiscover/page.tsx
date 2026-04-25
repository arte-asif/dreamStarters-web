import type { Metadata } from "next";
import { CtaSection } from "@/sections/CtaSection";
import { FeatureGrid } from "@/sections/FeatureGrid";
import { ProgramDetail } from "@/sections/ProgramDetail";
import { programs } from "@/lib/data";

const program = programs.find((item) => item.slug === "idiscover")!;

export const metadata: Metadata = {
  title: "iDiscover Program",
  description:
    "iDiscover is DreamStarters' Grade 3 to Grade 7 project-based learning pathway with real-world exposure, self-learning and multi-domain projects."
};

export default function IDiscoverPage() {
  return (
    <>
      <ProgramDetail program={program} />
      <FeatureGrid
        eyebrow="iDiscover experience"
        title="Project-based learning that helps children discover passion."
        text="Learners solve real problems, meet experts and build the habits of independent learning."
        items={[
          {
            title: "30-40 authentic projects",
            text: "Children explore carpentry, construction, arts, robotics, engineering, government, farming, healthcare, design and more."
          },
          {
            title: "Real-world exposure",
            text: "Field visits and expert interactions help learners understand professional work culture."
          },
          {
            title: "Self-learning approach",
            text: "Children plan their day, collaborate across ages, take calculated risks and learn how to learn."
          },
          {
            title: "Deep science",
            text: "Observation, recording, experimentation, interpretation, modelling and communication are taught through projects."
          },
          {
            title: "Applied maths",
            text: "Learners identify patterns, formulate real problems, compute solutions and present useful conclusions."
          },
          {
            title: "Personalised mastery",
            text: "Maths and English books are matched to each child's level so progress does not wait for the whole class."
          }
        ]}
      />
      <CtaSection title="Let Your Child Discover What They Love" button="Explore Admissions" />
    </>
  );
}
