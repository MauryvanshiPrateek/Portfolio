"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverState, setHoverState] = useState<"default" | "hover" | "project">("default");

  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced-motion preference
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='project']");
      if (projectEl) {
        setHoverState("project");
        return;
      }

      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, select");
      if (interactiveEl) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full bg-accent/90 text-white font-mono text-[9px] uppercase tracking-wider shadow-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hoverState === "project" ? 100 : hoverState === "hover" ? 32 : 6,
          height: hoverState === "project" ? 32 : hoverState === "hover" ? 32 : 6,
          backgroundColor:
            hoverState === "project"
              ? "rgba(77, 141, 255, 0.95)"
              : hoverState === "hover"
              ? "rgba(77, 141, 255, 0.25)"
              : "rgba(77, 141, 255, 0.9)",
          border: hoverState === "hover" ? "1px solid rgba(77, 141, 255, 0.8)" : "none",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {hoverState === "project" && (
          <span className="whitespace-nowrap px-2 font-medium tracking-tight">
            VIEW ↗
          </span>
        )}
      </motion.div>
    </div>
  );
}
