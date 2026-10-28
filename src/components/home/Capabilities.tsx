"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ALL_SKILLS,
  SKILL_CATEGORIES,
  CATEGORY_COLORS,
  SkillCategory,
  SkillItem,
} from "@/data/skills";
import { Move } from "lucide-react";
import { ease } from "@/lib/animations";

// ── Starfield ──────────────────────────────────────────────────────────────
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: (i * 137.508) % 100,
  y: ((i * 89.3) + i * 17) % 100,
  r: i % 8 === 0 ? 1.4 : i % 3 === 0 ? 0.9 : 0.5,
  opacity: 0.15 + (i % 6) * 0.07,
  duration: 3 + (i % 5) * 1.2,
  delay: (i % 8) * 0.4,
}));

// ── Types ──────────────────────────────────────────────────────────────────
interface Tag extends SkillItem {
  origX: number;
  origY: number;
  origZ: number;
  currX: number;
  currY: number;
  currZ: number;
  scale: number;
  alpha: number;
}

// ── Sphere radii ───────────────────────────────────────────────────────────
const RX = 340;
const RY = 240;
const RZ = 300;
const PERSPECTIVE = 560;

export function Capabilities() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [, forceUpdate] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<Tag[]>([]);
  const rotRef = useRef({
    rx: 0.3,
    ry: 0.1,
    vx: 0.0012,
    vy: 0.003,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    isHovered: false,
  });
  const rafRef = useRef<number>(0);

  // ── Initialise 3-D positions (Fibonacci spiral) ────────────────────────
  useEffect(() => {
    const N = ALL_SKILLS.length;
    tagsRef.current = ALL_SKILLS.map((skill, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const oX = RX * Math.sin(phi) * Math.cos(theta);
      const oY = RY * Math.cos(phi);
      const oZ = RZ * Math.sin(phi) * Math.sin(theta);
      return { ...skill, origX: oX, origY: oY, origZ: oZ, currX: oX, currY: oY, currZ: oZ, scale: 1, alpha: 1 };
    });
  }, []);

  // ── Animation loop ─────────────────────────────────────────────────────
  useEffect(() => {
    const rot = rotRef.current;
    const tick = () => {
      if (!rot.isDragging) {
        const sp = rot.isHovered ? 0.15 : 1;
        rot.rx += rot.vx * sp;
        rot.ry += rot.vy * sp;
        rot.vx += (0.0012 - rot.vx) * 0.04;
        rot.vy += (0.003  - rot.vy) * 0.04;
      }

      const cosX = Math.cos(rot.rx), sinX = Math.sin(rot.rx);
      const cosY = Math.cos(rot.ry), sinY = Math.sin(rot.ry);

      for (const tag of tagsRef.current) {
        const x1 =  tag.origX * cosY + tag.origZ * sinY;
        const z1 = -tag.origX * sinY + tag.origZ * cosY;
        const y2 =  tag.origY * cosX - z1 * sinX;
        const z2 =  tag.origY * sinX + z1 * cosX;
        const s  = PERSPECTIVE / (PERSPECTIVE - z2);
        tag.currX = x1 * s;
        tag.currY = y2 * s;
        tag.currZ = z2;
        tag.scale = s;
        tag.alpha = Math.max(0.18, Math.min(1.0, (z2 + RZ) / (RZ * 1.8)));
      }

      forceUpdate(n => (n + 1) % 100000);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Pointer drag ───────────────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button, a")) return;
    rotRef.current.isDragging = true;
    rotRef.current.lastX = e.clientX;
    rotRef.current.lastY = e.clientY;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const rot = rotRef.current;
    if (!rot.isDragging) return;
    const dx = e.clientX - rot.lastX;
    const dy = e.clientY - rot.lastY;
    rot.lastX = e.clientX;
    rot.lastY = e.clientY;
    rot.ry += dx * 0.007;
    rot.rx -= dy * 0.007;
    rot.vy = dx * 0.005;
    rot.vx = -dy * 0.005;
  }, []);

  const onPointerUp = useCallback(() => {
    rotRef.current.isDragging = false;
  }, []);

  // ── Tooltip ────────────────────────────────────────────────────────────
  const onEnter = useCallback((e: React.MouseEvent, skill: SkillItem) => {
    rotRef.current.isHovered = true;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHoveredSkill(skill);
  }, []);

  const onLeave = useCallback(() => {
    rotRef.current.isHovered = false;
    setHoveredSkill(null);
    setTooltipPos(null);
  }, []);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#0d0a1f] overflow-hidden py-14 lg:py-20 border-t border-[#2a1f4e]/50 select-none"
    >
      {/* Starfield */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {STARS.map(star => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top:  `${star.y}%`,
              width:  star.r * 2,
              height: star.r * 2,
              opacity: star.opacity,
            }}
            animate={{ opacity: [star.opacity, star.opacity * 0.2, star.opacity], scale: [1, 1.3, 1] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,60,180,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 space-y-6">

        {/* ── Header + filter pills ────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#2a1f4e]/50 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
            <motion.h2
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: ease.standard }}
              className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight"
              style={{ textShadow: "0 0 40px rgba(147,97,253,0.4)" }}
            >
              Skills
            </motion.h2>

            <div className="flex flex-wrap items-center gap-2">
              {/* ALL pill */}
              <button
                onClick={() => setActiveCategory("ALL")}
                className={`px-4 py-1.5 rounded-full text-xs font-serif tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === "ALL"
                    ? "bg-[#7dd3fc] text-[#050510] font-bold shadow-[0_0_18px_rgba(125,211,252,0.5)] scale-105"
                    : "bg-white/5 text-white/50 hover:text-white border border-white/10"
                }`}
              >
                ALL
              </button>

              {SKILL_CATEGORIES.map(cat => {
                const c = CATEGORY_COLORS[cat as SkillCategory];
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-serif tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer border ${
                      isActive ? "font-semibold shadow-md scale-105" : "bg-white/5 text-white/50 hover:text-white border-white/10"
                    }`}
                    style={{
                      borderColor: isActive ? c.dot : "rgba(255,255,255,0.1)",
                      background:  isActive ? c.bg  : "rgba(255,255,255,0.03)",
                      color:       isActive ? c.text : undefined,
                      boxShadow:   isActive ? `0 0 16px ${c.glow}` : "none",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: c.dot }} />
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* drag hint */}
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-white/40">
            <Move className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Drag to spin · Hover to slow · Click a pill to filter</span>
          </div>
        </div>

        {/* ── 3-D Sphere canvas ─────────────────────────────────────────── */}
        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative w-full rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ height: "clamp(520px, 72vh, 780px)" }}
        >
          {/* Subtle sphere wireframe rings for depth cue */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[320, 440, 560].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/[0.03]"
                style={{ width: size, height: size * 0.65 }}
              />
            ))}
          </div>

          {/* Centre glow */}
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{
              background: "radial-gradient(circle 220px at 50% 50%, rgba(99,60,180,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Skill tags */}
          <div className="absolute inset-0 pointer-events-none">
            {tagsRef.current.map(tag => {
              const c = CATEGORY_COLORS[tag.category];
              const isHov   = hoveredSkill?.name === tag.name;
              const isMatch = activeCategory === "ALL" || tag.category === activeCategory;
              const inFront = tag.currZ > 0;
              const zIdx    = inFront
                ? Math.floor(32 + (tag.currZ / RZ) * 18)
                : Math.floor(10 + ((tag.currZ + RZ) / RZ) * 8);
              const fontSize = (10 + tag.sizeWeight * 4) * Math.max(0.7, Math.min(1.3, tag.scale));
              const alpha    = isMatch ? (isHov ? 1 : Math.max(0.22, tag.alpha)) : 0.07;

              return (
                <div
                  key={tag.name}
                  onMouseEnter={e => onEnter(e, tag)}
                  onMouseLeave={onLeave}
                  className="absolute pointer-events-auto cursor-pointer whitespace-nowrap font-serif transition-colors duration-150"
                  style={{
                    left: "50%",
                    top:  "50%",
                    transform: `translate(calc(-50% + ${tag.currX}px), calc(-50% + ${tag.currY}px)) scale(${isHov ? 1.22 : 1})`,
                    fontSize,
                    fontWeight: tag.sizeWeight > 1.3 ? 600 : 400,
                    color:   isHov ? "#fff" : isMatch ? c.text : "#6b5e8a",
                    opacity: alpha,
                    textShadow: isHov
                      ? `0 0 20px ${c.dot}, 0 0 40px ${c.dot}aa`
                      : isMatch && inFront
                      ? `0 0 10px ${c.glow}`
                      : "none",
                    zIndex: isHov ? 65 : zIdx,
                    letterSpacing: "0.04em",
                    filter: inFront ? "none" : "blur(0.6px)",
                    transition: "opacity 0.3s, color 0.3s",
                  }}
                >
                  {tag.name}
                </div>
              );
            })}
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredSkill && tooltipPos && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className="absolute pointer-events-none rounded-xl border p-3.5 space-y-2 shadow-2xl backdrop-blur-xl"
                style={{
                  left: Math.max(16, Math.min(tooltipPos.x + 20, (containerRef.current?.offsetWidth  ?? 800) - 295)),
                  top:  Math.max(16, Math.min(tooltipPos.y - 14, (containerRef.current?.offsetHeight ?? 600) - 160)),
                  width: "275px",
                  background:  "rgba(13, 10, 31, 0.96)",
                  borderColor: `${CATEGORY_COLORS[hoveredSkill.category].dot}55`,
                  boxShadow:   `0 0 28px ${CATEGORY_COLORS[hoveredSkill.category].glow}`,
                  zIndex: 70,
                }}
              >
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                  <span
                    className="font-serif font-semibold text-sm leading-tight"
                    style={{ color: CATEGORY_COLORS[hoveredSkill.category].text }}
                  >
                    {hoveredSkill.name}
                  </span>
                  <span
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap"
                    style={{
                      background:  CATEGORY_COLORS[hoveredSkill.category].bg,
                      color:       CATEGORY_COLORS[hoveredSkill.category].text,
                      border:      `1px solid ${CATEGORY_COLORS[hoveredSkill.category].dot}44`,
                    }}
                  >
                    {hoveredSkill.category}
                  </span>
                </div>
                <p className="text-[11px] font-serif text-white/75 leading-relaxed">{hoveredSkill.focus}</p>
                <div className="pt-1 border-t border-white/10 flex items-start gap-1.5 text-[10px] font-mono text-white/45">
                  <span className="text-amber-400">↳</span>
                  <span className="leading-snug">{hoveredSkill.usedIn}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Category legend ──────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-5 pt-2 border-t border-[#2a1f4e]/50">
          {SKILL_CATEGORIES.map(cat => (
            <div key={cat} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: CATEGORY_COLORS[cat as SkillCategory].dot }} />
              <span className="font-serif text-[11px] tracking-wider uppercase text-white/55">{cat}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
