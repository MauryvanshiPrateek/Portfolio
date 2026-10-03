"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Hammer, Heart, GraduationCap, Globe2 } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { ease } from "@/lib/animations";

const blocks = [
  {
    id: "engineer",
    icon: Cpu,
    label: "ENGINEER",
    color: "text-accent",
    borderColor: "border-accent/50",
    heading: "Technically serious about AI",
    body: "I work across machine learning, deep learning, NLP, GenAI and software engineering — building systems that are grounded in technical constraints, not just demos. I've studied hydrodynamic simulations, conversational AI architectures, agricultural telemetry, and sequence modelling through hands-on projects.",
  },
  {
    id: "builder",
    icon: Hammer,
    label: "BUILDER",
    color: "text-success",
    borderColor: "border-success/40",
    heading: "Focused on things people use",
    body: "I think the best engineering is invisible — it just works for the person on the other end. Most of my projects start from a real friction point: flood disaster planning, small retailer inventory, farmer crop guidance. If the output isn't usable, the model doesn't matter.",
  },
  {
    id: "human",
    icon: Heart,
    label: "HUMAN",
    color: "text-error",
    borderColor: "border-error/30",
    heading: "Other things about me",
    body: "I play badminton, enjoy gaming, travel when I can, and watch anime. I also consume a concerning amount of coffee while debugging. I believe engineers who are curious about the world beyond their IDE build better systems — it's a working hypothesis.",
  },
];

export function AboutContent() {
  return (
    <main className="py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1280px] mx-auto space-y-20 lg:space-y-28">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: ease.standard }}
            >
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                01 / ABOUT
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text leading-[0.96]">
                I&apos;m Prateek.
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: ease.standard }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl"
            >
              An AI-focused engineering student who likes building things that people can actually use.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: ease.standard }}
            className="lg:col-span-5 p-5 rounded-[16px] border border-border bg-surface font-mono text-xs space-y-2"
          >
            <div className="text-text-muted uppercase tracking-widest text-[10px] border-b border-border pb-2 mb-3">
              IDENTITY CONTEXT
            </div>
            {[
              ["FULL NAME", "Mauryvanshi Prateek"],
              ["ROLE", "B.Tech CSE — Artificial Intelligence (Student)"],
              ["INSTITUTION", "CSVTU · Chhattisgarh"],
              ["FOCUS", "AI / ML · Data · GenAI · Software"],
              ["AMBITION", "International AI & Software Engineering"],
              ["REGION INTEREST", "Japan & East Asia"],
            ].map(([key, val]) => (
              <div key={key} className="flex items-start gap-3">
                <span className="text-text-muted w-[130px] shrink-0">{key}</span>
                <span className="text-text">{val}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Three identity blocks */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest border-b border-border pb-4">
            02 / WHO I AM
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blocks.map((block, idx) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: ease.standard }}
                >
                  <CardSpotlight className={`h-full p-6 border ${block.borderColor}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${block.color}`} />
                        <span className={`font-mono text-xs uppercase tracking-widest font-bold ${block.color}`}>
                          {block.label}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-text tracking-tight">{block.heading}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{block.body}</p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Education */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              03 / EDUCATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">Background</h2>
          </div>
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: ease.standard }}
              className="p-6 rounded-[16px] border border-border bg-surface space-y-4"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="space-y-1">
                  <div className="text-base font-bold text-text">
                    B.Tech (Hons.) Computer Science & Engineering — Artificial Intelligence
                  </div>
                  <div className="text-sm text-text-secondary">
                    Chhattisgarh Swami Vivekanand Technical University
                  </div>
                  <div className="text-xs text-text-muted font-mono">
                    Chhattisgarh&apos;s state technical university
                  </div>
                </div>
                <span className="font-mono text-xs text-accent border border-accent/40 bg-accent/5 px-2 py-1 rounded-[6px] shrink-0">
                  IN PROGRESS
                </span>
              </div>
              <div className="pt-2 border-t border-border flex flex-wrap gap-2">
                {["Machine Learning", "Deep Learning", "Data Structures", "AI Fundamentals", "NLP", "Computer Networks"].map((sub) => (
                  <span key={sub} className="px-2.5 py-1 rounded-[6px] border border-border bg-surface-elevated text-[11px] font-mono text-text-muted">
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trajectory */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5" />
              04 / TRAJECTORY
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              Where I&apos;m heading
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5">
            <p className="text-base text-text-secondary leading-relaxed">
              I&apos;m building toward international AI and software engineering roles, with a particular interest in Japan and East Asia. The technical rigor, engineering culture, and product quality expectations in that region are things I genuinely want to work within.
            </p>
            <div className="flex flex-col gap-3 font-mono text-xs">
              {[
                { step: "NOW", desc: "Building AI/ML systems, deepening engineering depth, B.Tech (AI)" },
                { step: "NEXT", desc: "Internships & contributions that bridge technical + product thinking" },
                { step: "GOAL", desc: "International AI & software engineering role — Japan & East Asia focus" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-3 rounded-[10px] border border-border bg-surface">
                  <span className="text-accent font-bold w-10 shrink-0">{item.step}</span>
                  <span className="text-text-secondary">{item.desc}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:text-accent-hover transition-colors"
              >
                <span>START A CONVERSATION →</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
