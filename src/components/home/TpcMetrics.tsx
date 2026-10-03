"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Users, Briefcase, FileSpreadsheet, Building2, ClipboardList } from "lucide-react";
import { ease } from "@/lib/animations";

interface Metric {
  label: string;
  sub: string;
  value: string;
  numTarget?: number;
  suffix?: string;
  icon: typeof Users;
}

const metrics: Metric[] = [
  {
    label: "CAMPUS DRIVES",
    sub: "End-to-end coordinated",
    value: "10+",
    numTarget: 10,
    suffix: "+",
    icon: Briefcase,
  },
  {
    label: "STUDENTS MANAGED",
    sub: "B.Tech (300-400) + Diploma (200-300)",
    value: "500–600",
    numTarget: 500,
    suffix: "–600",
    icon: Users,
  },
  {
    label: "COMPANY LISTINGS",
    sub: "Curated & audited directory",
    value: "2,000+",
    numTarget: 2000,
    suffix: "+",
    icon: Building2,
  },
  {
    label: "HR INTERACTIONS",
    sub: "Corporate recruiter liaisons",
    value: "10–12",
    numTarget: 10,
    suffix: "–12",
    icon: FileSpreadsheet,
  },
  {
    label: "MoMs & REPORTS",
    sub: "Structured institutional records",
    value: "14–15",
    numTarget: 14,
    suffix: "–15",
    icon: ClipboardList,
  },
];

export function TpcMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimated(true);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 px-5 md:px-8 lg:px-10 border-t border-border bg-surface/40">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/80 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              03 / ORGANIZATIONAL LEADERSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
              I also work with people, data and systems.
            </h2>
            <p className="text-base text-text-secondary pt-1">
              As Core Head & Student Coordinator at CSVTU’s Training & Placement Cell, I orchestrated recruitment pipelines, managed structured student databases, and coordinated directly with corporate recruiters.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors"
          >
            <span>FULL EXPERIENCE LOG</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={animated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: ease.standard }}
                className="p-5 rounded-[16px] border border-border bg-surface flex flex-col justify-between space-y-4 hover:border-accent/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-text-muted">METRIC // 0{idx + 1}</span>
                  <Icon className="w-4 h-4 text-accent" />
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-text font-mono">
                    {animated ? metric.value : "00+"}
                  </div>
                  <div className="text-xs font-mono font-semibold text-text uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-text-muted">
                    {metric.sub}
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
