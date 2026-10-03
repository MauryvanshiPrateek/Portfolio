"use client";

import { motion } from "motion/react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Database, Users, ClipboardList, Briefcase, BarChart3, Star } from "lucide-react";
import { ease } from "@/lib/animations";

const responsibilities = [
  {
    id: "operations",
    icon: Briefcase,
    label: "OPERATIONS",
    color: "text-accent",
    title: "Coordinating Campus Drives",
    desc: "End-to-end orchestration of placement drives — from inviting companies to managing on-the-day coordination, schedule, and logistics across B.Tech and Diploma cohorts.",
  },
  {
    id: "hr",
    icon: Users,
    label: "HR LIAISON",
    color: "text-success",
    title: "Corporate Recruiter Communication",
    desc: "Maintained direct communication with 10–12 HR professionals and recruiters, communicating institutional requirements, student profiles, and scheduling.",
  },
  {
    id: "data",
    icon: Database,
    label: "DATA MANAGEMENT",
    color: "text-warning",
    title: "Structured Student Records",
    desc: "Managed and maintained structured and unstructured records: VT data, internship records, alumni employment data, placement outcomes, and department statistics across 500–600 students.",
  },
  {
    id: "leadership",
    icon: Star,
    label: "LEADERSHIP",
    color: "text-accent",
    title: "Core Head — Student Coordination",
    desc: "Managed a team of student coordinators, delegated responsibilities, handled escalations, and represented the placement cell in institutional reporting.",
  },
  {
    id: "reporting",
    icon: ClipboardList,
    label: "REPORTING",
    color: "text-error",
    title: "Minutes of Meetings & Reports",
    desc: "Authored 14–15 structured MoMs and institutional placement reports — communicating outcomes to faculty, administration, and company representatives.",
  },
  {
    id: "quality",
    icon: BarChart3,
    label: "DATA QUALITY",
    color: "text-success",
    title: "Company Directory & Audit",
    desc: "Curated and maintained a 2,000+ company listings database, verifying accuracy of contact information, sector tags, and historical placement history.",
  },
];

const timeline = [
  { phase: "INTAKE", desc: "Received and verified student eligibility records by stream (B.Tech / Diploma)." },
  { phase: "OUTREACH", desc: "Coordinated with HR contacts to confirm company participation and scheduling." },
  { phase: "COORDINATION", desc: "Managed day-of operations: venue, logistics, timelines, and student briefing." },
  { phase: "REPORTING", desc: "Documented outcomes in structured MoMs and placement reports." },
  { phase: "ANALYSIS", desc: "Aggregated placement data by department, role, and company for institutional reporting." },
];

export function ExperienceContent() {
  return (
    <main className="py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1280px] mx-auto space-y-20 lg:space-y-28">

        {/* Page Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="font-mono text-xs text-accent uppercase tracking-widest">
            01 / EXPERIENCE
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[0.97]">
            Training & Placement Cell
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            As <strong className="text-text font-semibold">Core Head & Student Coordinator</strong> at CSVTU's Training & Placement Cell, I helped build and run the operational infrastructure of the institution's campus recruitment programme.
          </p>
        </div>

        {/* Role Identity Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-[16px] border border-border bg-surface font-mono text-xs">
          {[
            ["ROLE", "Core Head — Student Coordinator"],
            ["INSTITUTION", "CSVTU · Chhattisgarh"],
            ["FUNCTION", "Training & Placement Cell"],
            ["DOMAIN", "Operations · Data · Leadership"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-text-muted text-[10px] uppercase mb-1">{k}</div>
              <div className="text-text">{v}</div>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest border-b border-border pb-4">
            02 / QUANTITATIVE IMPACT
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { metric: "10+", label: "Campus Drives", sub: "End-to-end" },
              { metric: "500–600", label: "Students Managed", sub: "B.Tech + Diploma" },
              { metric: "2,000+", label: "Company Listings", sub: "Curated directory" },
              { metric: "10–12", label: "HR Interactions", sub: "Direct recruiters" },
              { metric: "14–15", label: "MoMs & Reports", sub: "Institutional records" },
            ].map(({ metric, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: ease.standard }}
                className="p-5 rounded-[16px] border border-border bg-surface space-y-2 hover:border-accent/60 transition-colors"
              >
                <div className="text-3xl font-bold font-mono text-text">{metric}</div>
                <div className="text-xs font-mono font-semibold text-text uppercase">{label}</div>
                <div className="text-[11px] text-text-muted">{sub}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Responsibilities Grid */}
        <section className="space-y-6">
          <div className="font-mono text-xs text-text-muted uppercase tracking-widest border-b border-border pb-4">
            03 / RESPONSIBILITY AREAS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {responsibilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: ease.standard }}
                >
                  <CardSpotlight className="h-full p-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                      <span className={`font-mono text-[11px] uppercase tracking-widest font-bold ${item.color}`}>
                        {item.label}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text mb-1">{item.title}</div>
                      <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </CardSpotlight>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Drive Timeline */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 space-y-2">
            <div className="font-mono text-xs text-accent uppercase tracking-widest">
              04 / EXECUTION FLOW
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
              How a campus drive works
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              The operational sequence behind each placement event — from intake to outcome analysis.
            </p>
          </div>
          <div className="lg:col-span-8 relative">
            <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-border hidden sm:block" />
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: ease.standard }}
                  className="sm:pl-10 relative flex items-start gap-4"
                >
                  <div className="absolute left-0 top-3 hidden sm:flex w-8 h-8 rounded-full border border-accent/40 bg-surface items-center justify-center z-10">
                    <span className="font-mono text-[10px] text-accent font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="flex-1 p-4 rounded-[12px] border border-border bg-surface hover:border-accent/50 transition-colors">
                    <div className="font-mono text-xs text-accent font-bold mb-1 tracking-wider">
                      {item.phase}
                    </div>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
