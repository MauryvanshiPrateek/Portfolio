"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ArrowUpRight, Activity, MessageSquare, Sprout } from "lucide-react";
import { ease } from "@/lib/animations";

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section id="featured-work" className="py-24 lg:py-32 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/80 pb-8">
          <div className="space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              02 / SELECTED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
              Featured Systems & Products
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors"
          >
            <span>VIEW ALL PROJECTS (5)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Alternating Full-Width Project Blocks */}
        <div className="space-y-16 lg:space-y-24">
          {featured.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: ease.standard }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Technical Panel (7 cols on desktop) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor="project"
                    className="group block relative rounded-[20px] border border-border bg-surface hover:border-accent transition-all duration-300 overflow-hidden p-6 sm:p-8"
                  >
                    {/* Visual Blueprint / Architectural Preview */}
                    <div className="w-full h-[240px] sm:h-[280px] rounded-[12px] border border-border/70 bg-surface-elevated p-4 flex flex-col justify-between relative overflow-hidden">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#252C3320_1px,transparent_1px),linear-gradient(to_bottom,#252C3320_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                      {/* Header bar of visual */}
                      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-text-muted border-b border-border/50 pb-2">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          SYS_ARCH // {project.slug.toUpperCase()}
                        </span>
                        <span>{project.status}</span>
                      </div>

                      {/* Dynamic Schematic Graphic per project */}
                      <div className="relative z-10 my-auto py-2">
                        {project.slug === "jalrakshak" && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-accent">
                              <span className="flex items-center gap-1.5">
                                <Activity className="w-4 h-4" /> 2D Hydrodynamic Simulation
                              </span>
                              <span>ANUGA SOLVER</span>
                            </div>
                            <div className="p-3 rounded-[8px] bg-background/80 border border-border text-[11px] font-mono text-text-secondary">
                              ELEVATION RASTER ──► TRIANGULAR MESH ──► SHALLOW WATER EQ ──► INUNDATION GIS
                            </div>
                            <div className="flex gap-2">
                              <span className="h-1.5 flex-1 bg-accent/40 rounded-full overflow-hidden">
                                <span className="block h-full w-2/3 bg-accent animate-pulse" />
                              </span>
                            </div>
                          </div>
                        )}

                        {project.slug === "stockpilot-ai" && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-accent">
                              <span className="flex items-center gap-1.5">
                                <MessageSquare className="w-4 h-4" /> WhatsApp Conversational Bridge
                              </span>
                              <span>WEBHOOK DISPATCH</span>
                            </div>
                            <div className="p-3 rounded-[8px] bg-background/80 border border-border text-[11px] font-mono text-text-secondary">
                              CLIENT MSG ──► WEBHOOK ──► STATE PARSER ──► INVENTORY DB ──► WHATSAPP RESPONSE
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
                              <span className="px-2 py-0.5 rounded bg-surface border border-border">Low Stock Threshold</span>
                              <span>→</span>
                              <span className="text-warning">Auto Alert Dispatched</span>
                            </div>
                          </div>
                        )}

                        {project.slug === "crop-intelligence" && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs font-mono text-accent">
                              <span className="flex items-center gap-1.5">
                                <Sprout className="w-4 h-4" /> Agro-Telemetry Recommender
                              </span>
                              <span>SOIL + CLIMATE</span>
                            </div>
                            <div className="p-3 rounded-[8px] bg-background/80 border border-border text-[11px] font-mono text-text-secondary">
                              GEO-COORDINATES ──► SOIL API ──► WEATHER FEEDS ──► INTERCROP HEURISTIC MATRIX
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
                              <span className="text-success font-semibold">Primary Crop</span>
                              <span>+</span>
                              <span className="text-accent font-semibold">Nitrogen-Fixing Companion</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer bar of visual */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-text-muted">
                        <span>LATENCY: OPTIMIZED</span>
                        <span className="group-hover:text-accent transition-colors flex items-center gap-1">
                          OPEN CASE STUDY ↗
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Text Metadata (5 cols on desktop) */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
                      <span className="text-accent font-semibold">0{index + 1}</span>
                      <span>/</span>
                      <span className="tracking-widest uppercase">{project.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text hover:text-accent transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                  </div>

                  <p className="text-base text-text-secondary leading-relaxed">
                    {project.oneLiner}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-[6px] border border-border bg-surface text-[11px] font-mono text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-accent hover:text-accent-hover transition-colors"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
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
