"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ease } from "@/lib/animations";

const experienceTimeline = [
  {
    period: "2022 — PRESENT",
    organization: "CSVTU Bhilai",
    role: "B.Tech in Artificial Intelligence",
    summary: "Deep learning, 2D hydrodynamic flood solvers (JalRakshak), agricultural telemetry, and GenAI conversational architectures.",
  },
  {
    period: "2023 — 2024",
    organization: "Training & Placement Cell, CSVTU",
    role: "Core Head & Student Coordinator",
    summary: "Orchestrated 10+ campus recruitment drives across B.Tech and Diploma cohorts. Managed structured records for 500–600 students.",
  },
  {
    period: "OPERATIONS",
    organization: "Corporate Recruiter Relations",
    role: "HR Liaison",
    summary: "Maintained direct communication with 10–12 corporate recruiters, coordinating job descriptions, schedules, and interview logistics.",
  },
  {
    period: "RECORDS",
    organization: "Institutional Data Quality",
    role: "Placement Database Steward",
    summary: "Authored 14–15 structured MoMs and official reports. Curated a verified company directory spanning 2,000+ industry listings.",
  },
];

const quantitativeImpact = [
  { value: "10+", label: "Campus Drives", sub: "End-to-end coordinated" },
  { value: "500–600", label: "Students Managed", sub: "B.Tech + Diploma" },
  { value: "2,000+", label: "Company Directory", sub: "Audited & verified" },
  { value: "10–12", label: "HR Liaisons", sub: "Direct recruiters" },
  { value: "14–15", label: "MoMs & Reports", sub: "Institutional records" },
];

export function ExperienceContent() {
  return (
    <main className="relative py-16 sm:py-24 px-5 md:px-8 lg:px-12 bg-[#110D28] overflow-hidden min-h-screen">
      {/* Decorative Tree Silhouette in the Bottom Right Corner (Directly matching reference image) */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden w-[320px] sm:w-[420px] md:w-[540px] opacity-20 filter contrast-125"
      >
        <Image
          src="/tree-clean.svg"
          alt=""
          width={540}
          height={500}
          className="w-full h-auto translate-x-12 translate-y-12"
          priority={false}
        />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto space-y-20 lg:space-y-28">
        {/* Page Hero — Minimalist & Poetic */}
        <div className="space-y-4 max-w-3xl">
          <div className="font-serif text-xs text-accent uppercase tracking-[0.25em]">
            ०१ / EXPERIENCE & TRAJECTORY
          </div>
          <h1 className="font-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal text-text tracking-wide leading-[1.0]">
            The path so far
          </h1>
          <p className="font-serif text-base sm:text-xl text-text-secondary font-light leading-relaxed pt-2">
            Operations, institutional leadership, and practical software engineering — grounding computational theory in real-world human coordination.
          </p>
        </div>

        {/* Minimalist 2-Column Experience Rows (Exact reference aesthetic, no boxes) */}
        <section className="space-y-12 sm:space-y-14 lg:space-y-16 max-w-4xl">
          {experienceTimeline.map((item, idx) => (
            <motion.div
              key={item.organization}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: ease.standard }}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
            >
              {/* Left Column: Golden tracked period */}
              <div className="md:col-span-3 font-serif text-xs font-medium tracking-[0.22em] text-accent uppercase select-none">
                {item.period}
              </div>

              {/* Right Column: Title and concise description */}
              <div className="md:col-span-9 space-y-1.5">
                <h2 className="font-serif italic text-2xl sm:text-3xl text-text font-normal tracking-tight">
                  {item.organization}
                </h2>
                <p className="font-serif text-base sm:text-[17px] text-text-secondary font-light leading-relaxed">
                  <span className="text-text/90 font-normal">{item.role}</span> — {item.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Quantitative Impact — Clean border-l flow, zero box wrappers */}
        <section className="space-y-10 border-t border-[#3a2a5e]/40 pt-12 max-w-4xl">
          <div className="font-serif text-xs text-accent uppercase tracking-[0.25em]">
            ०२ / QUANTITATIVE IMPACT
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {quantitativeImpact.map((metric) => (
              <div
                key={metric.label}
                className="space-y-2 border-l border-[#3a2a5e]/50 pl-4 sm:pl-5"
              >
                <div className="text-3xl sm:text-4xl font-serif text-text font-normal tracking-tight">
                  {metric.value}
                </div>
                <div className="font-serif text-xs font-medium tracking-[0.18em] text-accent uppercase">
                  {metric.label}
                </div>
                <div className="font-serif text-xs text-text-secondary/80 font-light">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
