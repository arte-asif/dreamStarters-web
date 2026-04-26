import type { Metadata } from "next";
import Image from "next/image";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { CtaSection } from "@/sections/CtaSection";
import { PageHero } from "@/sections/PageHero";
import { galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore DreamStarters learning moments across early years, project studios, leadership and arts."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Learning moments from the DreamStarters journey."
        text="A glimpse of how play, projects, arts, sports, teamwork and future skills come together."
        image="/images/new/milk.jpeg"
      />
      <SectionWrapper>
        <SectionHeading
          eyebrow="Moments"
          title="A visual look at learning through life."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {galleryItems.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06}>
              <figure className="group overflow-hidden rounded-[2rem] border border-accent/10 bg-white shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-6">
                  <h3 className="text-xl font-semibold text-accent">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </figcaption>
              </figure>
            </MotionReveal>
          ))}
        </div>
      </SectionWrapper>
      <CtaSection title="Experience the Campus in Person" button="Book a Visit" />
    </>
  );
}
