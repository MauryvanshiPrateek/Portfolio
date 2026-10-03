"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"init" | "line" | "label" | "done">("init");

  useEffect(() => {
    // Check if already shown this session
    const seen = sessionStorage.getItem("mp-loaded");
    if (seen) {
      setVisible(false);
      return;
    }

    // Reduced motion — skip animation, just hide
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      sessionStorage.setItem("mp-loaded", "1");
      setVisible(false);
      return;
    }

    const t1 = setTimeout(() => setPhase("line"), 200);
    const t2 = setTimeout(() => setPhase("label"), 600);
    const t3 = setTimeout(() => setPhase("done"), 1200);
    const t4 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("mp-loaded", "1");
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center gap-6"
          aria-hidden="true"
        >
          {/* MP Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1 font-mono text-4xl font-bold tracking-tight"
          >
            <span className="text-text">M</span>
            <span className="text-accent">P</span>
          </motion.div>

          {/* Animated Line */}
          <div className="w-24 h-[1px] bg-border overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={phase !== "init" ? { x: "0%" } : { x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-accent"
            />
          </div>

          {/* Label */}
          <AnimatePresence>
            {(phase === "label" || phase === "done") && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-[11px] text-text-muted uppercase tracking-[0.2em]"
              >
                INITIALIZING
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
