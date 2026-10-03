"use client";

import { motion } from "motion/react";
import { Lightbulb, Database, Cpu, Cog, CheckCircle2 } from "lucide-react";
import { ease } from "@/lib/animations";

const stages = [
  {
    step: "01",
    label: "IDEA",
    desc: "Problem formulation & domain constraints",
    icon: Lightbulb,
  },
  {
    step: "02",
    label: "DATA",
    desc: "Telemetry, geospatial rasters & ETL",
    icon: Database,
  },
  {
    step: "03",
    label: "MODEL",
    desc: "Simulation solvers & NLP sequences",
    icon: Cpu,
  },
  {
    step: "04",
    label: "SYSTEM",
    desc: "APIs, webhooks & backend architecture",
    icon: Cog,
  },
  {
    step: "05",
    label: "PRODUCT",
    desc: "Conversational & usable interfaces",
    icon: CheckCircle2,
  },
];

export function IdeaToSystem() {
  return (
    <section className="py-20 lg:py-28 px-5 md:px-8 lg:px-10 border-t border-border bg-surface/30">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="font-mono text-xs text-accent uppercase tracking-widest">
            01 / PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
            I build things that move from idea to system.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed pt-1">
            My work spans machine learning, deep learning, GenAI, data and application development — with a focus on turning technical ideas into things people can actually use.
          </p>
        </div>

        {/* System Line: IDEA → DATA → MODEL → SYSTEM → PRODUCT */}
        <div className="relative pt-6">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: ease.standard }}
                  className="group p-5 rounded-[16px] border border-border bg-surface hover:border-accent/80 hover:bg-surface-elevated transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-[8px] border border-border bg-surface-elevated flex items-center justify-center text-xs font-mono text-accent font-semibold group-hover:border-accent transition-colors">
                      {stage.step}
                    </span>
                    <Icon className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-sm font-mono font-bold tracking-wider text-text mb-1 group-hover:text-accent transition-colors">
                    {stage.label}
                  </div>
                  <p className="text-xs text-text-secondary leading-snug">
                    {stage.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
