import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { CtaSection } from "@/sections/CtaSection";
import { PageHero } from "@/sections/PageHero";
import { admissionSteps, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions are open at DreamStarters International School. Learn the visit, child interaction and application process."
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Admissions are open for preschool to Grade 5."
        text="The process is personal and transparent: understand the system, visit the school, meet the team, help us know your child and complete the digital application."
        image="/images/admission-process.png"
        cta={{ label: "Call Admissions", href: `tel:${site.phone.replace(/\s/g, "")}` }}
      />
      <SectionWrapper>
        <SectionHeading
          eyebrow="Admission process"
          title="A thoughtful path for families and children."
          text="Each step gives parents clarity while helping the school understand the child's readiness, comfort and needs."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {admissionSteps.map((item, index) => (
            <MotionReveal key={item.step} delay={index * 0.05}>
              <Card className="h-full">
                <p className="text-4xl font-semibold text-primary">{item.step}</p>
                <h3 className="mt-5 text-lg font-semibold text-accent">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-mist/70">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Fees and visit"
              title="Designed to be accessible for the value provided."
              text="The fee structure is shared after understanding the child's age and program fit. Families can schedule a one-on-one visit to discuss curriculum, campus, transport and food."
            />
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-secondary"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
      <CtaSection title="Start Your Child's Future Today" button="Apply Now" />
    </>
  );
}
