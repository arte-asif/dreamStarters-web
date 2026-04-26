import type { Metadata } from "next";
import { CtaSection } from "@/sections/CtaSection";
import { FeatureGrid } from "@/sections/FeatureGrid";
import { PageHero } from "@/sections/PageHero";

export const metadata: Metadata = {
  title: "Personalisation",
  description:
    "DreamStarters personalised learning plans, mastery-based books and learning spaces support every child."
};

export default function PersonalisationPage() {
  return (
    <>
      <PageHero
        eyebrow="Personalisation"
        title="Learning plans that move with the child, not the crowd."
        text="DreamStarters uses personalised learning plans, level-based materials and flexible learning spaces so every child can build mastery with confidence."
        image="/images/new/milk.jpeg"
      />
      <FeatureGrid
        eyebrow="Personalised learning"
        title="Individual attention is designed into the system."
        text="The school structure, curriculum, technology, training and spaces are built to support different learning modalities."
        items={[
          {
            title: "Personalised Learning Plan",
            text: "Every learner's interests, strengths, pace and support needs shape the learning pathway."
          },
          {
            title: "Mastery-based books",
            text: "From Grade 3, maths and English books can be matched to level so learners move ahead when ready."
          },
          {
            title: "Multiple learning modalities",
            text: "Children learn visually, auditorily, kinesthetically and through reading, discussion and making."
          },
          {
            title: "Progress without waiting",
            text: "When a concept is mastered, the learner can move to the next level with confidence."
          },
          {
            title: "Mentor support",
            text: "Facilitators observe, reflect, coach and provide targeted practice at the right moment."
          },
          {
            title: "Self-learning habits",
            text: "Learners plan tasks, reflect on output and build independence across age groups."
          }
        ]}
      />
      <CtaSection title="See Personalised Learning in Action" button="Book a Visit" />
    </>
  );
}
