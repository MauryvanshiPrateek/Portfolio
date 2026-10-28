"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "motion/react";

interface BoxRect {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [targetBox, setTargetBox] = useState<BoxRect | null>(null);

  // Smooth springs for mouse tracing movement
  const dotX = useSpring(0, { damping: 35, stiffness: 600 });
  const dotY = useSpring(0, { damping: 35, stiffness: 600 });

  const ringX = useSpring(0, { damping: 25, stiffness: 220 });
  const ringY = useSpring(0, { damping: 25, stiffness: 220 });

  // Spring for the snapped hover box
  const boxX = useSpring(0, { damping: 28, stiffness: 260 });
  const boxY = useSpring(0, { damping: 28, stiffness: 260 });
  const boxW = useSpring(0, { damping: 28, stiffness: 260 });
  const boxH = useSpring(0, { damping: 28, stiffness: 260 });

  const isHoveringBoxRef = useRef(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Look for custom hover-box targets (cards, projects, buttons, nav, etc.)
      const boxElement = target.closest<HTMLElement>(
        "[data-hover-box], .card-spotlight, [data-cursor='project'], article, .interactive-box"
      );

      if (boxElement) {
        const rect = boxElement.getBoundingClientRect();
        // Add a slight padding around the component
        const pad = 6;
        const newBox: BoxRect = {
          x: rect.left - pad,
          y: rect.top - pad,
          width: rect.width + pad * 2,
          height: rect.height + pad * 2,
          label:
            boxElement.getAttribute("data-cursor-label") ||
            (boxElement.tagName.toLowerCase() === "a" ? "OPEN ↗" : "INSPECT //"),
        };

        boxX.set(newBox.x);
        boxY.set(newBox.y);
        boxW.set(newBox.width);
        boxH.set(newBox.height);

        setTargetBox(newBox);
        setHoverLabel(newBox.label || null);
        isHoveringBoxRef.current = true;
        return;
      }

      // Check standard interactive elements (buttons, links, inputs)
      const interactiveEl = target.closest<HTMLElement>("a, button, [role='button'], input, textarea");
      if (interactiveEl) {
        const rect = interactiveEl.getBoundingClientRect();
        const pad = 4;
        const newBox: BoxRect = {
          x: rect.left - pad,
          y: rect.top - pad,
          width: rect.width + pad * 2,
          height: rect.height + pad * 2,
          label: interactiveEl.getAttribute("data-cursor-label") || undefined,
        };

        boxX.set(newBox.x);
        boxY.set(newBox.y);
        boxW.set(newBox.width);
        boxH.set(newBox.height);

        setTargetBox(newBox);
        setHoverLabel(newBox.label || null);
        isHoveringBoxRef.current = true;
      } else {
        setTargetBox(null);
        setHoverLabel(null);
        isHoveringBoxRef.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [dotX, dotY, ringX, ringY, boxX, boxY, boxW, boxH]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* 1. Primary Precision Dot (Follows cursor instantly) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none shadow-[0_0_8px_rgba(232,144,56,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: targetBox ? 0 : 1,
          opacity: targetBox ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. Fluid Following Ring (Ashmit & Aahana tracing halo) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/60 pointer-events-none flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: targetBox ? 0 : 36,
          height: targetBox ? 0 : 36,
          opacity: targetBox ? 0 : 0.65,
          backgroundColor: "rgba(232, 144, 56, 0.05)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 3. The Interactive Snap Hover Box (As seen on Ashmit Borawake's site) */}
      {targetBox && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none border border-accent/70 rounded-[12px] bg-accent/[0.03]"
          style={{
            x: boxX,
            y: boxY,
            width: boxW,
            height: boxH,
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {/* Corner HUD Brackets ┌ ┐ └ ┘ */}
          <span className="absolute -top-[2px] -left-[2px] w-2.5 h-2.5 border-t-2 border-l-2 border-accent" />
          <span className="absolute -top-[2px] -right-[2px] w-2.5 h-2.5 border-t-2 border-r-2 border-accent" />
          <span className="absolute -bottom-[2px] -left-[2px] w-2.5 h-2.5 border-b-2 border-l-2 border-accent" />
          <span className="absolute -bottom-[2px] -right-[2px] w-2.5 h-2.5 border-b-2 border-r-2 border-accent" />

          {/* Contextual HUD label tag */}
          {hoverLabel && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-6 right-1 bg-surface-elevated/90 border border-accent/40 px-2 py-0.5 rounded-[4px] text-[10px] font-mono tracking-widest text-accent uppercase backdrop-blur-md shadow-sm"
            >
              {hoverLabel}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}
