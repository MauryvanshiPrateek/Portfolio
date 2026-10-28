"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ArrowUpRight, Activity, MessageSquare, Sprout } from "lucide-react";
import { ease } from "@/lib/animations";
import { WavyDivider } from "@/components/ui/WavyDivider";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="featured-work" className="relative py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#110D28]">
      {/* Subtle organic top wave divider instead of a rigid straight line */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <WavyDivider hasNode={false} fillColor="transparent" className="opacity-40" />
      </div>

      <div className="max-w-[1180px] mx-auto space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3a2a5e]/40 pb-6">
          <div className="space-y-2">
            <div className="font-serif text-xs text-accent tracking-[0.25em] uppercase">
              ०२ / SELECTED WORK
            </div>
            <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-text font-normal tracking-wide">
              Selected Systems & Research
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-serif text-xs tracking-[0.2em] uppercase text-text-secondary hover:text-accent transition-colors"
          >
            <span>VIEW ALL PROJECTS (5)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* Minimalist Project Presentation — No clunky nested boxes, pure craftsmanship */}
        <div className="space-y-16 lg:space-y-24">
          {featured.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: ease.standard }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Technical Panel (Minimalist schematic, soft atmosphere) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor="project"
                    data-hover-box="true"
                    data-cursor-label={`VIEW // ${project.title.toUpperCase()}`}
                    className="group block relative rounded-[16px] bg-[#19133a]/60 hover:bg-[#19133a]/90 border border-[#3a2a5e]/50 hover:border-accent/70 transition-all duration-300 p-6 sm:p-7 overflow-hidden"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#baaed4]/70 border-b border-[#3a2a5e]/40 pb-3 mb-4">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        SYS // {project.slug.toUpperCase()}
                      </span>
                      <span className="text-accent text-[10px] tracking-wider uppercase">
                        {project.status}
                      </span>
                    </div>

                    {/* Clean Architecture Diagram */}
                    <div className="py-4 space-y-3 font-serif">
                      {project.slug === "jalrakshak" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono text-accent">
                            <span className="flex items-center gap-1.5">
                              <Activity className="w-3.5 h-3.5" /> 2D Hydrodynamic Simulation
                            </span>
                            <span className="text-[10px] text-[#baaed4]/60">ANUGA SOLVER</span>
                          </div>
                          <div className="text-xs font-mono text-text-secondary tracking-wide py-2 px-3 rounded-[8px] bg-[#110D28]/60 border border-[#3a2a5e]/40">
                            ELEVATION RASTER ──► TRIANGULAR MESH ──► SHALLOW WATER EQ ──► INUNDATION GIS
                          </div>
                        </div>
                      )}

                      {project.slug === "stockpilot-ai" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono text-accent">
                            <span className="flex items-center gap-1.5">
                              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Conversational Bridge
                            </span>
                            <span className="text-[10px] text-[#baaed4]/60">WEBHOOK DISPATCH</span>
                          </div>
                          <div className="text-xs font-mono text-text-secondary tracking-wide py-2 px-3 rounded-[8px] bg-[#110D28]/60 border border-[#3a2a5e]/40">
                            CLIENT MSG ──► WEBHOOK ──► STATE PARSER ──► INVENTORY DB ──► AUTO ALERT
                          </div>
                        </div>
                      )}

                      {project.slug === "crop-intelligence" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono text-accent">
                            <span className="flex items-center gap-1.5">
                              <Sprout className="w-3.5 h-3.5" /> Agro-Telemetry Recommender
                            </span>
                            <span className="text-[10px] text-[#baaed4]/60">SOIL + CLIMATE</span>
                          </div>
                          <div className="text-xs font-mono text-text-secondary tracking-wide py-2 px-3 rounded-[8px] bg-[#110D28]/60 border border-[#3a2a5e]/40">
                            GEO-COORDINATES ──► SOIL TELEMETRY ──► WEATHER FEEDS ──► COMPANION MATRIX
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-serif text-[#baaed4]/60 pt-2 border-t border-[#3a2a5e]/30 mt-2">
                      <span className="tracking-wider uppercase text-[10px]">VERIFIED IMPLEMENTATION</span>
                      <span className="group-hover:text-accent transition-colors flex items-center gap-1 text-xs">
                        Open case study →
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Text Metadata (Clean, typographic, minimal) */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="font-serif text-xs tracking-[0.25em] text-accent uppercase font-medium">
                      0{index + 1} · {project.category}
                    </div>

                    <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-text font-normal tracking-tight hover:text-accent transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <p className="font-serif text-base sm:text-lg text-text-secondary font-light leading-relaxed">
                    {project.oneLiner}
                  </p>

                  {/* Clean text tech stack tags */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1 text-xs font-mono text-[#baaed4]/70">
                    {project.tags.map((tag) => (
                      <span key={tag} className="hover:text-accent transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 font-serif text-xs tracking-[0.2em] uppercase text-accent hover:text-accent-hover transition-colors"
                    >
                      <span>READ CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
