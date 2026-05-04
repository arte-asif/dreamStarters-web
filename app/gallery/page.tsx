import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "@/sections/CtaSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore DreamStarters learning moments across early years, project studios, leadership and arts."
};

const images = Array.from({ length: 14 }, (_, i) => {
  const index = i + 1;
  const ext = index === 2 || index === 9 || index === 10 ? "jpeg" : "jpg";
  return `/images/gallery/${index}.${ext}`;
});

export default function GalleryPage() {
  return (
    <>
      {/* Header Section */}
      <section className="pt-24 pb-12 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          Moments at DreamStarters
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-slate-600 text-sm md:text-base">
          A glimpse into joyful learning, creativity, friendships, and discovery
          happening every day at our campus.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-100"
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />

              {/* Subtle Glow Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#fcce07] scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Experience the Campus in Person"
        button="Book a Visit"
      />
    </>
  );
}