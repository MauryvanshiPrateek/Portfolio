"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { projects, type Project } from "@/data/projects";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowUpRight, Activity, MessageSquare, Sprout, Terminal, ShieldAlert } from "lucide-react";
import { ease } from "@/lib/animations";

const filterTabs = [
  { id: "ALL", label: "ALL" },
  { id: "AI / ML", label: "AI / ML" },
  { id: "GENAI", label: "GENAI" },
  { id: "DATA", label: "DATA" },
  { id: "SOFTWARE", label: "SOFTWARE" },
  { id: "EXPERIMENTS", label: "EXPERIMENTS" },
  { id: "CONCEPTS", label: "CONCEPTS" },
] as const;

type FilterType = (typeof filterTabs)[number]["id"];

export function ProjectsList() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;

    return projects.filter((project) => {
      const matchCategory = project.category.toUpperCase();
      const matchType = project.type.toUpperCase();
      const matchTags = project.tags.join(" ").toUpperCase();

      switch (activeFilter) {
        case "AI / ML":
          return (
            matchCategory.includes("HYDRODYNAMIC") ||
            matchCategory.includes("AI") ||
            matchCategory.includes("NLP") ||
            matchTags.includes("PYTHON")
          );
        case "GENAI":
          return (
            matchCategory.includes("GENAI") ||
            matchCategory.includes("AI / PRODUCT") ||
            matchTags.includes("AI ASSISTANT") ||
            project.slug === "stockpilot-ai"
          );
        case "DATA":
          return (
            matchCategory.includes("DATA") ||
            matchTags.includes("DATA") ||
            project.slug === "crop-intelligence" ||
            project.slug === "jalrakshak"
          );
        case "SOFTWARE":
          return (
            matchCategory.includes("PRODUCT") ||
            matchCategory.includes("SOFTWARE") ||
            matchTags.includes("WHATSAPP") ||
            matchTags.includes("STREAMLIT")
          );
        case "EXPERIMENTS":
          return (
            matchType.includes("EXPERIMENT") ||
            project.status === "EXPERIMENT" ||
            project.slug === "predictor"
          );
        case "CONCEPTS":
          return (
            matchType.includes("CONCEPT") ||
            project.status.includes("CONCEPT") ||
            project.slug === "cyberwar"
          );
        default:
          return true;
      }
    });
  }, [activeFilter]);

  return (
    <div className="space-y-12">
      {/* Interactive Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-[14px] border border-border bg-surface/80 backdrop-blur-sm max-w-fit">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`relative px-3.5 py-1.5 rounded-[10px] text-xs font-mono tracking-wider uppercase transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-white"
                  : "text-text-secondary hover:text-text hover:bg-surface-elevated/50"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBubble"
                  className="absolute inset-0 rounded-[10px] bg-accent"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid with AnimatePresence & layout transitions */}
      <motion.div layout className="space-y-12 lg:space-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: ease.standard }}
              >
                <TiltCard maxTilt={3}>
                  <CardSpotlight className="p-6 sm:p-8 lg:p-10 border-border hover:border-accent/80">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                    >
                      {/* Visual Architecture Representation (7 cols) */}
                      <div
                        className={`lg:col-span-7 ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <Link
                          href={`/projects/${project.slug}`}
                          data-cursor="project"
                          className="group block relative rounded-[14px] border border-border/80 bg-surface-elevated p-5 sm:p-6 overflow-hidden"
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono text-text-muted border-b border-border/60 pb-3 mb-4">
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              SYS_SPEC // 0{index + 1}
                            </span>
                            <span className="px-2 py-0.5 rounded-[4px] border border-border bg-surface text-text-secondary text-[10px]">
                              {project.status}
                            </span>
                          </div>

                          {/* Specific Visual Renderings */}
                          <ProjectVisualCard project={project} />

                          <div className="flex items-center justify-between text-[11px] font-mono text-text-muted border-t border-border/50 pt-3 mt-4">
                            <span>YEAR: {project.year}</span>
                            <span className="text-accent group-hover:underline flex items-center gap-1 font-medium">
                              EXPLORE CASE STUDY ↗
                            </span>
                          </div>
                        </Link>
                      </div>

                      {/* Text & Metadata (5 cols) */}
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

                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text hover:text-accent transition-colors">
                            <Link href={`/projects/${project.slug}`}>
                              {project.title}
                            </Link>
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                          {project.oneLiner}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-[6px] border border-border bg-surface-elevated text-[11px] font-mono text-text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-accent hover:text-accent-hover transition-colors font-medium"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardSpotlight>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function ProjectVisualCard({ project }: { project: Project }) {
  switch (project.slug) {
    case "jalrakshak":
      return (
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between text-xs font-mono text-accent">
            <span className="flex items-center gap-1.5">
              <Activity className="w-4 h-4" /> Dam Breach & Flood Routing
            </span>
            <span>ANUGA 2D SOLVER</span>
          </div>
          <div className="p-3 rounded-[8px] bg-background border border-border text-[11px] font-mono text-text-secondary leading-relaxed">
            RESERVOIR HYDRAULICS ──► NON-LINEAR SHALLOW WATER ──► INUNDATION GIS OVERLAY
          </div>
          <div className="flex gap-2 text-[10px] font-mono text-text-muted">
            <span className="px-2 py-0.5 rounded bg-surface border border-border">Triangular Mesh</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border">Spatial Risk Zone</span>
          </div>
        </div>
      );

    case "stockpilot-ai":
      return (
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between text-xs font-mono text-accent">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" /> WhatsApp Inventory Assistant
            </span>
            <span>ASYNC WEBHOOK</span>
          </div>
          <div className="p-3 rounded-[8px] bg-background border border-border text-[11px] font-mono text-text-secondary leading-relaxed">
            USER CONVERSATION ──► PARSER LOGIC ──► DB TRANSACTION ──► DISPATCH ALERT
          </div>
          <div className="flex gap-2 text-[10px] font-mono text-text-muted">
            <span className="px-2 py-0.5 rounded bg-surface border border-border">Single Device Workflow</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border text-warning">Minimum-Stock Trigger</span>
          </div>
        </div>
      );

    case "crop-intelligence":
      return (
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between text-xs font-mono text-accent">
            <span className="flex items-center gap-1.5">
              <Sprout className="w-4 h-4" /> Agro-Telemetry Decision Support
            </span>
            <span>SOIL + CLIMATE API</span>
          </div>
          <div className="p-3 rounded-[8px] bg-background border border-border text-[11px] font-mono text-text-secondary leading-relaxed">
            SOIL SENSORS / API ──► WEATHER FEEDS ──► AGRONOMIC MATRIX ──► INTERCROP PAIR
          </div>
          <div className="flex gap-2 text-[10px] font-mono text-text-muted">
            <span className="px-2 py-0.5 rounded bg-surface border border-border text-success">Soil Health Heuristics</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border">Yield Optimization</span>
          </div>
        </div>
      );

    case "predictor":
      return (
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between text-xs font-mono text-accent">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4" /> Sequence Tokenization & Prediction
            </span>
            <span>LEARNING EXPERIMENT</span>
          </div>
          <div className="p-3 rounded-[8px] bg-background border border-border text-[11px] font-mono text-text-secondary leading-relaxed">
            INPUT TOKENS ──► EMBEDDING PROJECTION ──► SEQUENCE PROBABILITY ──► TOP-K CANDIDATES
          </div>
          <div className="flex gap-2 text-[10px] font-mono text-text-muted">
            <span className="px-2 py-0.5 rounded bg-surface border border-border">~87–88% Reported Acc</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border">Streamlit UI</span>
          </div>
        </div>
      );

    case "cyberwar":
      return (
        <div className="space-y-3 py-2">
          <div className="flex items-center justify-between text-xs font-mono text-accent">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" /> Red Team vs Blue Team Virtual Testbed
            </span>
            <span>CONCEPT ARCHITECTURE</span>
          </div>
          <div className="p-3 rounded-[8px] bg-background border border-border text-[11px] font-mono text-text-secondary leading-relaxed">
            ATTACK DISPATCH (RED) ◄──► VIRTUAL LAB ◄──► DETECT & LOGS (BLUE) ──► TELEMETRY
          </div>
          <div className="flex gap-2 text-[10px] font-mono text-text-muted">
            <span className="px-2 py-0.5 rounded bg-surface border border-border text-warning">In Development</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-border">MITRE ATT&CK Matrix</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
