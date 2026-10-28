"use client";

import { motion } from "motion/react";
import { Lightbulb, Database, Cpu, Cog, CheckCircle2, MapPin, GraduationCap } from "lucide-react";
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
    <section id="about" className="py-24 lg:py-32 px-5 md:px-8 lg:px-12 border-t border-border/40 bg-surface/20">
      <div className="max-w-[1280px] mx-auto space-y-20">
        
        {/* Authentic Storytelling Header (Brijesh Chandrakar inspired) */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-serif tracking-[0.2em] text-accent uppercase">
            <span>०१ / ABOUT</span>
            <span className="text-border">·</span>
            <span>परिचय</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-text leading-[1.05]">
            Namaste! <br />
            I am <span className="text-accent italic font-normal">Mauryvanshi Prateek</span>
          </h2>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-serif tracking-wider text-text-secondary border-b border-border/50 pb-5">
            <span className="text-text font-medium">AI / ML Engineer</span>
            <span className="text-accent">·</span>
            <span>CSVTU Bhilai</span>
            <span className="text-accent">·</span>
            <span>Chhattisgarh, India</span>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            <p>
              I am an artificial intelligence engineering student at <strong className="text-text font-medium">CSVTU (Chhattisgarh Swami Vivekanand Technical University)</strong>. I spend my time building practical systems across machine learning, deep learning, GenAI, and software engineering.
            </p>
            <p>
              I believe the most meaningful engineering begins where software meets real people and constraints: from dynamic shallow-water flood simulation across digital elevation models (<strong className="text-text font-medium">JalRakshak</strong>) and conversational WhatsApp inventory tools for small storekeepers (<strong className="text-text font-medium">StockPilot AI</strong>), to coordinating campus drives and structured data records across 500+ students as Placement Core Head.
            </p>
          </div>
        </div>

        {/* System Pipeline Philosophy: IDEA → DATA → MODEL → SYSTEM → PRODUCT */}
        <div className="space-y-8 pt-4 border-t border-border/40">
          <div className="space-y-2 max-w-2xl">
            <div className="font-serif text-xs text-accent tracking-[0.2em] uppercase">
              PHILOSOPHY // विचार
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-text tracking-tight">
              Moving from idea to system.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: ease.standard }}
                  data-hover-box="true"
                  data-cursor-label={`STEP // ${stage.step}`}
                  className="card-spotlight p-5 rounded-[16px] border border-border/70 bg-surface/60 hover:border-accent/80 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-[8px] border border-border/80 bg-surface-elevated/70 flex items-center justify-center text-xs font-mono text-accent font-semibold">
                      {stage.step}
                    </span>
                    <Icon className="w-4 h-4 text-text-muted" />
                  </div>
                  <div className="text-sm font-mono font-bold tracking-wider text-text mb-1">
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
