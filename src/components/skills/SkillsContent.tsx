"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skillsData, skillCategories } from "@/data/skills";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Cpu, Database, Code2, Wrench, ArrowRight } from "lucide-react";
import { ease } from "@/lib/animations";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "AI / ML": Cpu,
  Data: Database,
  Development: Code2,
  "Systems / Tools": Wrench,
} as const;

const categoryDescs = {
  "AI / ML": "Machine learning and deep learning techniques applied to real simulation, text, and agricultural problems.",
  Data: "Python-first data processing, statistical analysis, and structured query pipelines across project domains.",
  Development: "Applied software development — APIs, webhooks, interactive dashboards, and modern web systems.",
  "Systems / Tools": "Domain-specific tools for geospatial analysis, hydrodynamic simulation, and infrastructure.",
} as const;

export function SkillsContent() {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeSkills = skillsData.filter((s) => s.category === activeCategory);
  const hoveredData = skillsData.find((s) => s.name === hoveredSkill);

  return (
    <main className="py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1280px] mx-auto space-y-16 lg:space-y-20">

        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest">03 / CAPABILITIES</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[0.97]">
            What I work with.
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            An interactive capability map grounded entirely in project implementations. No self-assessments, percentages, or arbitrary ratings.
          </p>
        </div>

        {/* Interactive Skill Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 flex-wrap">
            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-3 rounded-[12px] border text-left transition-all duration-200 cursor-pointer w-full",
                    isActive
                      ? "border-accent bg-accent/10 text-text"
                      : "border-border bg-surface text-text-secondary hover:border-border hover:text-text hover:bg-surface-elevated"
                  )}
                >
                  <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-accent" : "text-text-muted")} />
                  <span className={cn("font-mono text-xs uppercase tracking-wider font-bold", isActive ? "text-accent" : "")}>
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skill Cards with hover inspection */}
          <div className="lg:col-span-9 space-y-4">
            {/* Category description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: ease.standard }}
                className="p-4 rounded-[12px] border border-accent/30 bg-accent/5 text-sm text-text-secondary font-mono"
              >
                <span className="text-accent font-bold mr-2">DOMAIN:</span>
                {categoryDescs[activeCategory as keyof typeof categoryDescs]}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: ease.standard }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {activeSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.07, ease: ease.standard }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onFocus={() => setHoveredSkill(skill.name)}
                    onBlur={() => setHoveredSkill(null)}
                    tabIndex={0}
                  >
                    <CardSpotlight className="h-full p-5 space-y-3 cursor-default">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-text">
                          {skill.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                      </div>
                      {skill.focus && (
                        <p className="text-xs text-text-muted leading-relaxed">{skill.focus}</p>
                      )}
                      <div className="pt-1 border-t border-border/60">
                        <span className="text-[11px] font-mono text-accent flex items-start gap-1.5">
                          <span className="shrink-0 mt-0.5">↳ USED IN:</span>
                          <span className="text-text-secondary">{skill.usedIn}</span>
                        </span>
                      </div>
                    </CardSpotlight>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Note (no ratings) */}
        <div className="p-4 rounded-[12px] border border-border bg-surface font-mono text-xs text-text-muted flex items-center gap-3">
          <span className="text-accent text-base">╱╱</span>
          <span>
            This map contains no self-assessed proficiency ratings, percentage bars, or star ratings. Skills appear here only when backed by direct project implementation or academic coursework.
          </span>
        </div>
      </div>
    </main>
  );
}
