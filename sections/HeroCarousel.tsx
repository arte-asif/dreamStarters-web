"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { heroSlides } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % heroSlides.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-accent">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={active === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="image-overlay absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      <div className="container-px relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center py-20">
        <div className="max-w-4xl text-white">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 text-sm font-bold uppercase text-primary"
          >
            {slide.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="text-balance text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl"
          >
            {slide.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl"
          >
            {slide.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="/programs" variant="secondary">
              Explore Programs
            </ButtonLink>
            <ButtonLink href="/admissions" variant="light">
              Book a Visit
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      <div className="container-px absolute bottom-7 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl gap-3">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === index ? "w-12 bg-primary" : "w-6 bg-white/45"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
