"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FileText, Download, Mail, ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { ease } from "@/lib/animations";

const sections = [
  { id: "profile", label: "PROFILE" },
  { id: "education", label: "EDUCATION" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "achievements", label: "ACHIEVEMENTS" },
  { id: "skills", label: "SKILLS" },
];

export function ResumeContent() {
  const [activeSection, setActiveSection] = useState("profile");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left: Resume Content (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Page Header */}
            <div className="space-y-3">
              <div className="font-mono text-xs text-accent uppercase tracking-widest">06 / RÉSUMÉ</div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text">Mauryvanshi Prateek</h1>
              <p className="text-sm text-text-secondary font-mono">
                AI / ML Engineering Student · Data · GenAI · Software · CSVTU Chhattisgarh
              </p>
            </div>

            {/* PROFILE */}
            <section id="profile" ref={(el) => { sectionRefs.current.profile = el; }} className="space-y-4">
              <div className="font-mono text-xs text-accent uppercase tracking-widest border-b border-border pb-2">
                PROFILE
              </div>
              <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
                B.Tech (Hons.) AI engineering student building practical systems across machine learning, hydrodynamic simulation, GenAI, and software. Interested in technically serious engineering roles that bridge research and product impact. Building toward international opportunities in Japan and East Asia.
              </p>
            </section>

            {/* EDUCATION */}
            <section id="education" ref={(el) => { sectionRefs.current.education = el; }} className="space-y-4">
              <div className="font-mono text-xs text-accent uppercase tracking-widest border-b border-border pb-2">
                EDUCATION
              </div>
              <div className="p-5 rounded-[14px] border border-border bg-surface space-y-2">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="text-base font-bold text-text">B.Tech (Hons.) CSE — Artificial Intelligence</div>
                    <div className="text-sm text-text-secondary">Chhattisgarh Swami Vivekanand Technical University (CSVTU)</div>
                    <div className="text-xs text-text-muted font-mono mt-0.5">Chhattisgarh's state technical university</div>
                  </div>
                  <span className="font-mono text-xs text-accent border border-accent/30 px-2 py-0.5 rounded shrink-0">In Progress</span>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" ref={(el) => { sectionRefs.current.experience = el; }} className="space-y-4">
              <div className="font-mono text-xs text-accent uppercase tracking-widest border-b border-border pb-2">
                EXPERIENCE
              </div>
              <div className="p-5 rounded-[14px] border border-border bg-surface space-y-4">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <div className="text-base font-bold text-text">Core Head — Student Coordinator</div>
                    <div className="text-sm text-text-secondary">Training & Placement Cell · CSVTU</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    "Coordinated 10+ end-to-end campus placement drives for B.Tech and Diploma cohorts (500–600 students).",
                    "Maintained direct liaison with 10–12 corporate HR and recruiting contacts.",
                    "Curated and audited a 2,000+ company listings database for accuracy and up-to-date contact data.",
                    "Authored 14–15 structured MoMs and institutional placement outcome reports.",
                    "Led student coordinator team as Core Head, delegating responsibilities and handling escalations.",
                  ].map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-accent mt-1 shrink-0">·</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" ref={(el) => { sectionRefs.current.projects = el; }} className="space-y-4">
              <div className="font-mono text-xs text-accent uppercase tracking-widest border-b border-border pb-2">
                PROJECTS
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "JalRakshak",
                    sub: "Dam-break Inundation Modelling · SIH Project · Working Prototype",
                    tags: ["ANUGA", "Python", "GIS", "Hydrodynamics"],
                    desc: "Built a 2D hydrodynamic flood simulation system modelling dam-breach wave propagation using ANUGA's finite-volume shallow-water solver on triangular meshes, visualised through GIS overlays.",
                    slug: "jalrakshak",
                  },
                  {
                    title: "StockPilot AI",
                    sub: "WhatsApp Inventory Management · Solo Project · Working Prototype",
                    tags: ["Python", "WhatsApp API", "Conversational AI"],
                    desc: "Designed and built a conversational inventory management system meeting small retailers in WhatsApp — handling stock queries, transaction logging, and low-stock alerting via async webhooks.",
                    slug: "stockpilot-ai",
                  },
                  {
                    title: "Crop Intelligence",
                    sub: "Agro-Telemetry Recommender · Working Prototype",
                    tags: ["Python", "Soil API", "Climate Data"],
                    desc: "Built an environmental telemetry aggregation pipeline combining soil composition API data, weather feeds, and intercropping agronomic constraint matrices into actionable recommendations.",
                    slug: "crop-intelligence",
                  },
                  {
                    title: "Predictor",
                    sub: "NLP Sequence Prediction · Learning Experiment",
                    tags: ["Python", "NLP", "Streamlit"],
                    desc: "Trained a next-word sequence prediction model on a benchmark Kaggle corpus; built with an interactive Streamlit demo for probability inspection. (~87–88% reported accuracy, learning experiment).",
                    slug: "predictor",
                  },
                ].map((proj) => (
                  <div key={proj.slug} className="p-5 rounded-[14px] border border-border bg-surface space-y-3 group hover:border-accent/60 transition-colors">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <Link href={`/projects/${proj.slug}`} className="text-base font-bold text-text hover:text-accent transition-colors">
                          {proj.title}
                        </Link>
                        <div className="text-xs text-text-muted font-mono mt-0.5">{proj.sub}</div>
                      </div>
                      <Link href={`/projects/${proj.slug}`} className="font-mono text-xs text-accent hover:text-accent-hover flex items-center gap-1 shrink-0 transition-colors">
                        <span>Case study</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{proj.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-[4px] border border-border bg-surface-elevated text-[11px] font-mono text-text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section id="achievements" ref={(el) => { sectionRefs.current.achievements = el; }} className="space-y-4">
              <div className="font-mono text-xs text-accent uppercase tracking-widest border-b border-border pb-2">
                ACHIEVEMENTS
              </div>
              <div className="space-y-3">
                {[
                  { title: "NamoVesh Hackathon", detail: "Selected — piezoelectric tile energy harvesting concept for public infrastructure." },
                  { title: "MSME Drone Technology Programme", detail: "Completed — drone hardware, autonomous flight systems, and agricultural data applications." },
                ].map((a) => (
                  <div key={a.title} className="p-4 rounded-[12px] border border-border bg-surface flex items-start gap-3 text-sm">
                    <span className="text-accent font-bold shrink-0">→</span>
                    <div>
                      <span className="font-semibold text-text">{a.title}</span>
                      <span className="text-text-secondary ml-2">{a.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section id="skills" ref={(el) => { sectionRefs.current.skills = el; }} className="space-y-4">
              <div className="font-mono text-xs text-accent uppercase tracking-widest border-b border-border pb-2">
                SKILLS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { cat: "AI / ML", items: ["Machine Learning", "Deep Learning", "NLP", "GenAI Systems"] },
                  { cat: "DATA", items: ["Python", "Pandas", "NumPy", "SQL", "Data Analysis"] },
                  { cat: "DEV", items: ["JavaScript", "TypeScript", "Streamlit", "APIs", "Git"] },
                  { cat: "DOMAIN", items: ["GIS", "Hydrodynamic Modelling", "Spatial Analysis"] },
                ].map(({ cat, items }) => (
                  <div key={cat} className="p-3 rounded-[12px] border border-border bg-surface space-y-2">
                    <div className="font-mono text-[11px] font-bold text-accent">{cat}</div>
                    {items.map((item) => (
                      <div key={item} className="text-xs text-text-secondary">· {item}</div>
                    ))}
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-muted font-mono italic">
                No percentage ratings. Skills listed backed by project implementation or academic coursework only.
              </p>
            </section>
          </div>

          {/* Right: Sticky Action Panel (4 cols) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Scroll Progress Indicator */}
              <div className="p-4 rounded-[14px] border border-border bg-surface space-y-2">
                <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-3">SECTIONS</div>
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`flex items-center gap-2.5 py-1.5 text-xs font-mono transition-colors ${
                      activeSection === id ? "text-accent" : "text-text-muted hover:text-text"
                    }`}
                  >
                    <span className={`w-4 h-[1px] transition-all ${activeSection === id ? "bg-accent w-6" : "bg-border"}`} />
                    {label}
                  </a>
                ))}
              </div>

              {/* Actions */}
              <div className="p-4 rounded-[14px] border border-border bg-surface space-y-3">
                <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider">ACTIONS</div>
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 h-11 px-4 rounded-[10px] bg-accent text-white font-mono text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>TODO: Download PDF</span>
                </a>
                <a
                  href={socialLinks.email}
                  className="w-full flex items-center justify-center gap-2 h-11 px-4 rounded-[10px] border border-border bg-surface-elevated text-text font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 h-11 px-4 rounded-[10px] border border-border bg-surface-elevated text-text font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>TODO: LinkedIn</span>
                </a>
              </div>

              <div className="p-3 rounded-[10px] border border-border bg-surface-elevated font-mono text-[11px] text-text-muted">
                <span className="text-accent">NOTE:</span> PDF résumé at{" "}
                <code className="text-text">/public/resume.pdf</code> — add when ready.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
