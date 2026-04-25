"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <Image
              src="/images/logo-bg-removed.png"
              width={220}
              height={135}
              alt="DreamStarters logo"
              priority
              className="h-auto w-56"
            />
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-primary/15">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
