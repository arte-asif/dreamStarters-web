"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[90] h-1 origin-left bg-primary"
      style={{ scaleX, width: "100%" }}
    />
  );
}
