"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Preloader } from "@/components/Preloader";

export default function LaunchPage() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(5);
  const [showPreloader, setShowPreloader] = useState(false);
  const router = useRouter();

  // 🔒 Disable scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ⌨️ Space key trigger
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" && !started) {
        setStarted(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [started]);

  // ⏳ Countdown + transition
  useEffect(() => {
    if (!started) return;

    if (count === 0) {
      setShowPreloader(true);

      // Wait for preloader animation
      setTimeout(() => {
        router.push("/");
      }, 900); // match your preloader duration

      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [started, count, router]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white">

      {/* 🌌 Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#fcce0720,_transparent_70%)]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* 🔳 Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🎯 Content */}
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 text-center px-6"
          >
            {/* Logo */}
            <Image
              src="/images/logo-bg-removed.png"
              alt="DreamStarters"
              width={260}
              height={160}
              className="mx-auto mb-6"
              priority
            />

            <h1 className="text-3xl md:text-5xl font-bold">
              DreamStarters International
            </h1>

            <p className="mt-4 text-slate-300 text-sm md:text-base">
              The future of learning begins now
            </p>

            {/* Hint */}
            <motion.div
              className="mt-12 text-sm text-[#fcce07] tracking-widest"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              PRESS SPACE TO LAUNCH
            </motion.div>

            <motion.div
              className="mt-4 h-2 w-2 rounded-full bg-[#fcce07] mx-auto"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </motion.div>
        ) : !showPreloader ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="z-10 text-center"
          >
            <motion.div
              key={count}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.4, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[120px] md:text-[160px] font-bold text-[#fcce07]"
            >
              {count}
            </motion.div>

            <p className="mt-4 text-slate-300 tracking-widest text-sm">
              LAUNCHING EXPERIENCE
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* ⚡ Preloader AFTER countdown */}
      {showPreloader && <Preloader />}
    </div>
  );
}