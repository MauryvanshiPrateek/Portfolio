"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { type Project, projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, ExternalLink, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";
import { ease } from "@/lib/animations";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const [activeLevel, setActiveLevel] = useState<"hr" | "developer" | "interviewer">("developer");

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Top Navigation & Breadcrumb */}
      <div className="flex items-center justify-between border-b border-border/70 pb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        <div className="font-mono text-xs text-text-muted">
          0{currentIndex + 1} / 0{projects.length}
        </div>
      </div>

      {/* Project Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
          <span className="text-accent font-semibold">0{currentIndex + 1}</span>
          <span>/</span>
          <span className="tracking-widest uppercase">{project.category}</span>
          <span>·</span>
          <span className="px-2 py-0.5 rounded-[4px] border border-border bg-surface text-text-secondary text-[10px]">
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text leading-[0.98]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
          {project.oneLiner}
        </p>
      </div>

      {/* Metadata Bar (Mono) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-[16px] border border-border bg-surface font-mono text-xs">
        <div>
          <div className="text-text-muted text-[10px] uppercase mb-1">PROJECT TYPE</div>
          <div className="text-text font-medium truncate">{project.type}</div>
        </div>
        <div>
          <div className="text-text-muted text-[10px] uppercase mb-1">STATUS</div>
          <div className="text-accent font-medium">{project.status}</div>
        </div>
        <div>
          <div className="text-text-muted text-[10px] uppercase mb-1">TIMELINE</div>
          <div className="text-text font-medium">{project.year}</div>
        </div>
        <div>
          <div className="text-text-muted text-[10px] uppercase mb-1">CORE STACK</div>
          <div className="text-text font-medium truncate">{project.tags.join(" · ")}</div>
        </div>
      </div>

      {/* Depth Level Perspective Toggle */}
      {project.levels && (
        <div className="p-6 rounded-[16px] border border-border bg-surface-elevated/70 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/50 pb-3">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              EXPLANATION DEPTH LEVEL
            </span>
            <div className="flex items-center gap-1.5">
              {(
                [
                  { id: "hr", label: "Level 1: Recruiter / HR", subtitle: "What does it do?" },
                  { id: "developer", label: "Level 2: Engineer", subtitle: "How does it work?" },
                  { id: "interviewer", label: "Level 3: Technical Interviewer", subtitle: "Why was it built this way?" },
                ] as const
              ).map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevel(lvl.id)}
                  className={`px-3 py-1.5 rounded-[8px] text-xs font-mono transition-colors cursor-pointer ${
                    activeLevel === lvl.id
                      ? "bg-accent text-white font-medium"
                      : "text-text-secondary hover:text-text bg-surface border border-border"
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevel}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: ease.standard }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans"
            >
              {project.levels[activeLevel]}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* The Problem Section */}
      {project.problem && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-border">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              01 / CONTEXT
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              The Problem
            </h2>
          </div>
          <div className="lg:col-span-8 text-base text-text-secondary leading-relaxed space-y-4">
            <p>{project.problem}</p>
          </div>
        </section>
      )}

      {/* The Solution & Architecture */}
      {project.solution && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-border">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              02 / ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              Engineering Approach
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-base text-text-secondary leading-relaxed">
              {project.solution}
            </p>

            {/* Architecture Flow Diagram */}
            <div className="p-5 sm:p-6 rounded-[14px] border border-border bg-surface font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-text-muted border-b border-border/50 pb-2">
                <span>SYSTEM PIPELINE</span>
                <span className="text-accent">DETERMINISTIC DATAFLOW</span>
              </div>
              <div className="p-4 rounded-[8px] bg-background border border-border/80 text-text leading-loose overflow-x-auto">
                {project.slug === "jalrakshak" && (
                  <div>
                    DAM CROSS-SECTION ──► RESERVOIR STAGE ──► ANUGA SOLVER (MESH) ──► 2D SHALLOW WATER ──► GIS INUNDATION LAYER
                  </div>
                )}
                {project.slug === "stockpilot-ai" && (
                  <div>
                    WHATSAPP INBOUND ──► SECURE WEBHOOK ──► STATE MACHINE ──► STOCK TRANSACTION ──► ASYNC BOT RESPONSE
                  </div>
                )}
                {project.slug === "crop-intelligence" && (
                  <div>
                    COORDINATES ──► SOIL COMPOSITION API ──► WEATHER CLIMATE ──► RESILIENT PAIRING MATRIX ──► RECOMMENDATION
                  </div>
                )}
                {project.slug === "predictor" && (
                  <div>
                    RAW INPUT ──► TOKENIZATION & PADDING ──► RECURRENT/EMBEDDING LAYER ──► SOFTMAX ──► CANDIDATE TOKENS
                  </div>
                )}
                {project.slug === "cyberwar" && (
                  <div>
                    ATTACK DISPATCH (RED) ◄──► ISOLATED SUBNET ◄──► IDS DETECTOR (BLUE) ──► AGGREGATE LOG AUDIT
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contribution (Strictly truthful) */}
      {project.contribution && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-border">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              03 / OWNERSHIP
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              My Contribution
            </h2>
          </div>
          <div className="lg:col-span-8 p-5 rounded-[14px] border border-border bg-surface text-base text-text-secondary leading-relaxed">
            {project.contribution}
          </div>
        </section>
      )}

      {/* Limitations (Prominently displayed per §11) */}
      {project.limitations && project.limitations.length > 0 && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-border">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-warning uppercase tracking-widest flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              04 / HONEST LIMITATIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              Known Constraints
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {project.limitations.map((limitation, i) => (
              <div
                key={i}
                className="p-4 rounded-[12px] border border-warning/30 bg-warning/5 text-sm text-text-secondary leading-relaxed flex items-start gap-3"
              >
                <span className="font-mono text-xs text-warning font-bold mt-0.5">
                  0{i + 1}
                </span>
                <span>{limitation}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What I Learned */}
      {project.learned && project.learned.length > 0 && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-border">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              05 / ENGINEERING GROWTH
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              What I Learned
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.learned.map((point, i) => (
              <div
                key={i}
                className="p-4 rounded-[12px] border border-border bg-surface text-sm text-text-secondary leading-relaxed flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Future Scope */}
      {project.futureScope && project.futureScope.length > 0 && (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6 border-t border-border">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
              06 / ITERATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              Next Iteration
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-2">
            {project.futureScope.map((scope, i) => (
              <div
                key={i}
                className="p-3 rounded-[10px] border border-border bg-surface-elevated text-xs font-mono text-text-secondary flex items-center gap-2"
              >
                <span className="text-accent font-bold">→</span>
                <span>{scope}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* External Repository Link */}
      {project.githubUrl && (
        <div className="pt-6 border-t border-border flex justify-end">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Source ↗</span>
          </a>
        </div>
      )}

      {/* Next / Previous Project Navigation */}
      <div className="pt-10 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="p-5 rounded-[14px] border border-border bg-surface hover:border-accent/80 transition-colors flex items-center gap-4 text-left group"
        >
          <ArrowLeft className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors shrink-0" />
          <div className="truncate">
            <div className="text-[11px] font-mono text-text-muted uppercase">PREVIOUS</div>
            <div className="text-base font-bold text-text group-hover:text-accent transition-colors truncate">
              {prevProject.title}
            </div>
          </div>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="p-5 rounded-[14px] border border-border bg-surface hover:border-accent/80 transition-colors flex items-center justify-between text-right group"
        >
          <div className="truncate ml-auto">
            <div className="text-[11px] font-mono text-text-muted uppercase">NEXT</div>
            <div className="text-base font-bold text-text group-hover:text-accent transition-colors truncate">
              {nextProject.title}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors shrink-0 ml-4" />
        </Link>
      </div>
    </div>
  );
}
