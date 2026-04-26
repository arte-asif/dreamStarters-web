import type { Metadata } from "next";
import { Brain, Cpu, Trophy, Waves, Calculator, Gamepad2 } from "lucide-react";
import { Card, IconBadge } from "@/components/Card";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { CtaSection } from "@/sections/CtaSection";
import { PageHero } from "@/sections/PageHero";

export const metadata: Metadata = {
  title: "NEXA | DreamStarters",
  description:
    "NEXA is DreamStarters' advanced experiential wing focused on extracurricular excellence, future skills, and holistic child development."
};

const programs = [
  {
    title: "Artificial Intelligence",
    text: "Students explore AI concepts, real-world applications, and build smart solutions using guided hands-on learning.",
    icon: Brain
  },
  {
    title: "Robotics",
    text: "From basic circuits to intelligent machines, children learn to design, build and program robots.",
    icon: Cpu
  },
  {
    title: "Abacus & Mental Math",
    text: "Enhancing speed, accuracy and cognitive ability through structured mental math techniques.",
    icon: Calculator
  },
  {
    title: "Chess & Strategy",
    text: "Developing focus, patience and strategic thinking through competitive and guided chess training.",
    icon: Gamepad2
  },
  {
    title: "Swimming",
    text: "Building physical strength, confidence and discipline through professional swimming programs.",
    icon: Waves
  },
  {
    title: "Sports & Games",
    text: "Encouraging teamwork, fitness and leadership through diverse indoor and outdoor sports.",
    icon: Trophy
  }
];

export default function NexaPage() {
  return (
    <>
      <PageHero
        eyebrow="NEXA by DreamStarters"
        title="Where passion meets future-ready skills."
        text="NEXA is our premium experiential platform focused on extracurricular excellence — combining sports, intellect, creativity and advanced technologies to shape confident, capable individuals."
        image="/images/new/chess2.jpeg"
      />

      {/* Programs */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="What is NEXA?"
          title="Beyond academics. Into real-world mastery."
          text="NEXA is designed to unlock every child’s potential through structured extracurricular programs that build intelligence, creativity, physical strength and future skills."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <Card className="h-full hover:shadow-xl transition duration-300 group">
                  
                  {/* Icon */}
                  <IconBadge className="bg-[#fcce07]/10 group-hover:bg-[#fcce07]/20 transition">
                    <Icon className="h-5 w-5 text-[#fcce07]" />
                  </IconBadge>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-semibold text-slate-800 group-hover:text-[#fcce07] transition">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-4 h-[2px] w-0 bg-[#fcce07] transition-all duration-300 group-hover:w-12"></div>
                </Card>
              </MotionReveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper>
        <SectionHeading
          eyebrow="Our Vision"
          title="Shaping confident, multi-skilled individuals."
          text="We believe children should not just study — they should explore, build, compete, create and lead. NEXA ensures they are ready for both life and future careers."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Confidence",
              text: "Through performance, competitions and real-world exposure."
            },
            {
              title: "Creativity",
              text: "By encouraging innovation in technology, arts and thinking."
            },
            {
              title: "Discipline",
              text: "Built through sports, routines and structured learning."
            }
          ].map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06}>
              <Card className="h-full text-center group hover:shadow-lg transition">
                
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#fcce07] transition">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {item.text}
                </p>

                {/* Accent dot */}
                <div className="mt-3 h-2 w-2 mx-auto rounded-full bg-[#fcce07] opacity-70"></div>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>

      <CtaSection />
    </>
  );
}