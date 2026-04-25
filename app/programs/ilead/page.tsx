import type { Metadata } from "next";
import { CtaSection } from "@/sections/CtaSection";
import { FeatureGrid } from "@/sections/FeatureGrid";
import { ProgramDetail } from "@/sections/ProgramDetail";
import { programs } from "@/lib/data";

const program = programs.find((item) => item.slug === "ilead")!;

export const metadata: Metadata = {
  title: "iLead Program",
  description:
    "iLead is DreamStarters' Grade 8 to Grade 12 pathway for career preparation, internships, mentorship and Cambridge curriculum subjects."
};

export default function ILeadPage() {
  return (
    <>
      <ProgramDetail program={program} />
      <FeatureGrid
        eyebrow="iLead pathway"
        title="Career preparation becomes part of school, not an afterthought."
        text="The senior program combines Cambridge subject selection, mentoring, portfolios, internships and entrance preparation."
        items={[
          {
            title: "Career pathways",
            text: "Learners prepare for 18 fields after interest review, strengths analysis and deeper exploration."
          },
          {
            title: "Cambridge subjects",
            text: "Students select subjects such as design, technology, arts, media, computers, science, maths, accounts, economics and languages."
          },
          {
            title: "Mentorship",
            text: "Field mentors guide custom self-learning courses, short projects and challenges."
          },
          {
            title: "Internships",
            text: "Real-life internships help learners practise problem solving, innovation and professional collaboration."
          },
          {
            title: "College readiness",
            text: "Portfolio, statement of purpose, online certificates, entrance preparation and competitions are part of the plan."
          },
          {
            title: "Innovation framework",
            text: "Learners apply first-principles thinking to business, technology and community problems."
          }
        ]}
      />
      <CtaSection title="Prepare for the Future with iLead" button="Book a Visit" />
    </>
  );
}
