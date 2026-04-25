import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { CtaSection } from "@/sections/CtaSection";
import { PageHero } from "@/sections/PageHero";
import { careers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore the DreamStarters iTeach teacher training and hiring program for passionate educators."
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Get trained to become a world-class educator."
        text="The iTeach program is an immersive pathway for people who are passionate about child development, learning and teaching."
        image="/images/program-idiscover.png"
        cta={{ label: "Apply for iTeach", href: "/contact" }}
      />
      <SectionWrapper>
        <SectionHeading
          eyebrow="iTeach"
          title="Teacher training with real classroom depth."
          text="DreamStarters looks for educators with energy, curiosity, communication skills and a genuine commitment to shaping future leaders."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {careers.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06}>
              <Card className="h-full">
                <IconBadge>
                  <GraduationCap className="h-5 w-5" />
                </IconBadge>
                <h3 className="mt-5 text-xl font-semibold text-accent">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-mist p-6 text-center sm:p-8">
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-700">
            Ideal applicants are graduates with strong English fluency, a can-do
            attitude and the ability to spend meaningful time on guided training,
            live classes and assignments.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact" variant="secondary">
              Contact Careers
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>
      <CtaSection title="Shape the Next Generation with DreamStarters" button="Contact Us" href="/contact" />
    </>
  );
}
