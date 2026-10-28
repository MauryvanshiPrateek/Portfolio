"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { ease } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";
import {
  MtFujiArtifact,
  ToriiArtifact,
  BambooArtifact,
  SensuArtifact,
  KatanaArtifact,
  SushiArtifact,
} from "./JapaneseArtifacts";

const artifactMap: Record<string, React.ComponentType<{ isHovered?: boolean }>> = {
  jalrakshak: MtFujiArtifact,
  "stockpilot-ai": ToriiArtifact,
  "crop-intelligence": BambooArtifact,
  predictor: SensuArtifact,
  cyberwar: KatanaArtifact,
  "omotenashi-core": SushiArtifact,
};

export function JapaneseProjectsShowcase() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <section id="featured-work" className="relative py-24 lg:py-32 px-5 md:px-8 lg:px-12 bg-[#110D28] overflow-hidden">
      {/* Target anchor */}
      <span id="projects" className="absolute -top-24 pointer-events-none" />

      {/* Subtle Japanese Traditional Seigaiha (Wave) / Sakura Ember Atmosphere in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] bg-[radial-gradient(#E89038_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Soft Ambient Lantern Glows in Corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/12 w-[380px] h-[380px] rounded-full bg-[#E85D45]/5 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/12 w-[420px] h-[420px] rounded-full bg-[#6EA8FE]/5 blur-[140px]"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto space-y-20 lg:space-y-28">
        {/* Section Header — Japanese Editorial Typography (Zero Boxes) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3a2a5e]/40 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-serif tracking-[0.28em] text-accent uppercase">
              <span>〇二 / 作品群</span>
              <span className="text-[#baaed4]/40">·</span>
              <span>{t("projects.sectionTag")}</span>
            </div>

            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-text font-normal tracking-wide leading-[1.05]">
              {t("projects.heading")}
            </h2>

            <p className="font-serif text-base sm:text-lg text-text-secondary font-light leading-relaxed pt-1">
              {t("projects.subtext")}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-serif text-xs tracking-[0.22em] uppercase text-text-secondary hover:text-accent transition-colors"
          >
            <span>{t("projects.allProjects")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* The 6 Japanese Artifact Elements Grid (Inspired by Aahana Surya's Planet System, Completely Box-Free) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 lg:gap-x-16 items-start">
          {projects.map((project, idx) => {
            const ArtifactComponent = artifactMap[project.slug] || MtFujiArtifact;
            const isHovered = hoveredSlug === project.slug;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: ease.standard }}
                className="relative flex flex-col items-center text-center group select-none"
                onPointerEnter={() => setHoveredSlug(project.slug)}
                onPointerLeave={() => setHoveredSlug(null)}
              >
                {/* Floating Japanese Artifact Hero Visual (No Box/Card Container) */}
                <Link
                  href={`/projects/${project.slug}`}
                  data-hover-box="true"
                  data-cursor-label={`VIEW // ${project.japaneseElement.kanji}`}
                  className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center p-2 focus:outline-none"
                >
                  {/* Subtle Floating Levitating Animation */}
                  <motion.div
                    animate={{
                      y: isHovered ? -12 : [0, -8, 0],
                      scale: isHovered ? 1.08 : 1,
                    }}
                    transition={{
                      y: isHovered
                        ? { duration: 0.3, ease: ease.standard }
                        : { repeat: Infinity, duration: 3.8 + (idx % 3) * 0.6, ease: "easeInOut" },
                      scale: { duration: 0.35, ease: ease.standard },
                    }}
                    className="w-full h-full relative flex items-center justify-center"
                  >
                    {/* Atmospheric Glow Ring */}
                    <div
                      className="absolute inset-2 rounded-full transition-all duration-500 pointer-events-none opacity-40 group-hover:opacity-100 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${project.japaneseElement.themeColor}33 0%, transparent 70%)`,
                      }}
                    />

                    {/* The Vector Illustrated Artifact */}
                    <ArtifactComponent isHovered={isHovered} />
                  </motion.div>
                </Link>

                {/* Cultural Kanji Label + Project Title */}
                <div className="mt-4 space-y-1.5 flex flex-col items-center">
                  <div className="flex items-center gap-2 font-serif text-xs tracking-[0.24em] uppercase text-accent font-medium">
                    <span className="text-sm font-normal text-text/90 font-serif">
                      {project.japaneseElement.kanji}
                    </span>
                    <span className="text-[#baaed4]/40">·</span>
                    <span>{project.japaneseElement.name}</span>
                  </div>

                  <h3 className="font-serif italic text-2xl sm:text-[26px] text-text font-normal tracking-tight group-hover:text-accent transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <div className="font-mono text-[11px] text-[#baaed4]/60 tracking-wider uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Aahana-Inspired Drop Readout HUD on Hover (No clunky cards, delicate guide lines) */}
                <div className="w-full max-w-xs min-h-[90px] pt-3 flex flex-col items-center">
                  <AnimatePresence>
                    {isHovered ? (
                      <motion.div
                        key="hud-open"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: ease.standard }}
                        className="flex flex-col items-center space-y-2.5"
                      >
                        {/* Delicate Vertical Drop Guideline */}
                        <span className="w-[1px] h-3 bg-gradient-to-b from-accent/80 to-transparent" />

                        {/* 1-Sentence High-Signal Readout */}
                        <p className="font-serif text-sm text-text-secondary font-light leading-snug px-2">
                          {project.oneLiner}
                        </p>

                        {/* CTA Link */}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 font-serif text-xs tracking-[0.2em] uppercase text-accent hover:text-[#ffaf58] transition-colors pt-0.5"
                        >
                          <span>{t("projects.explore")}</span>
                          <span className="text-sm">→</span>
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="hud-closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[11px] font-serif text-[#baaed4]/40 tracking-wider uppercase pt-4"
                      >
                        {project.japaneseElement.symbolism}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
