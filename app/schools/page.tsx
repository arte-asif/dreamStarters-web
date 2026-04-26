import type { Metadata } from "next";
import { CtaSection } from "@/sections/CtaSection";
import { FeatureGrid } from "@/sections/FeatureGrid";
import { PageHero } from "@/sections/PageHero";
import { schoolFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Schools",
  description:
    "DreamStarters schools across Trivandrum include iPlay centres, main campus, transport, food and personalised learning spaces."
};

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Schools"
        title="Accessible early years centres and a spacious main campus."
        text="DreamStarters has iPlay schools across Trivandrum and a calm main campus designed for labs, arts, sports, play and project-based learning."
        image="/images/new/games.jpeg"
      />
      <FeatureGrid
        eyebrow="Campus life"
        title="A complete school environment for care, creativity and capability."
        text="The school combines location convenience with the infrastructure needed for future-ready learning."
        items={schoolFeatures}
      />
      <CtaSection title="Visit a DreamStarters Campus" button="Schedule a Visit" />
    </>
  );
}
