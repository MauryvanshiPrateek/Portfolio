"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { skillsData, skillCategories } from "@/data/skills";
import { ArrowUpRight, Cpu, Database, Code2, Wrench } from "lucide-react";
import { ease } from "@/lib/animations";

const categoryIcons = {
  "AI / ML": Cpu,
  Data: Database,
  Development: Code2,
  "Systems / Tools": Wrench,
};

export function Capabilities() {
  return (
    <section className="py-24 lg:py-32 px-5 md:px-8 lg:px-10 border-t border-border bg-background">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/80 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              04 / CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
              What I work with.
            </h2>
            <p className="text-base text-text-secondary pt-1">
              Tools and technologies grounded in practical project implementation. No arbitrary proficiency percentages.
            </p>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors"
          >
            <span>FULL CAPABILITY MAP</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Horizontal Capability Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat];
            const catSkills = skillsData.filter((s) => s.category === cat);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: ease.standard }}
                className="p-6 rounded-[16px] border border-border bg-surface flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                    <Icon className="w-4 h-4 text-accent" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text">
                      {cat}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {catSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group p-2.5 rounded-[10px] bg-surface-elevated border border-border/60 hover:border-accent/60 transition-all duration-200"
                      >
                        <div className="text-xs font-mono font-semibold text-text group-hover:text-accent transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-text-muted mt-1 font-mono flex items-center gap-1">
                          <span className="text-accent text-[10px]">↳</span>
                          <span className="truncate">{skill.usedIn}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-text-muted border-t border-border/40 pt-3">
                  PRACTICAL IMPLEMENTATION
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
