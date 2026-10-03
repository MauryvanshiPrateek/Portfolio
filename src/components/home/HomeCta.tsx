"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail, ArrowRight, FileText } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { ease } from "@/lib/animations";

export function HomeCta() {
  return (
    <section className="py-24 lg:py-36 px-5 md:px-8 lg:px-10 border-t border-border bg-background relative overflow-hidden">
      {/* Subtle blue accent glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto space-y-10 relative z-10">
        <div className="font-mono text-xs text-accent uppercase tracking-widest">
          06 / CONVERSATION
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease.standard }}
          className="space-y-4 max-w-3xl"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text leading-[1.0]">
            Let&apos;s build something useful.
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary">
            Whether it&apos;s an AI/ML engineering opportunity, applied project, or technical conversation — I&apos;m always open to discussing serious problems.
          </p>
        </motion.div>

        {/* Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: ease.standard }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <a
            href={socialLinks.email}
            className="h-12 px-6 rounded-[10px] bg-accent text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2.5 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(77,141,255,0.25)] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Email me →</span>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="h-12 px-5 rounded-[10px] border border-border bg-surface text-text hover:border-accent hover:text-accent font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0-.01 3.32 1.66 1.66 0 0 0 .01-3.32Z" />
            </svg>
            <span>LinkedIn ↗</span>
          </a>

          <Link
            href="/resume"
            className="h-12 px-5 rounded-[10px] border border-border bg-surface text-text hover:border-accent hover:text-accent font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            <span>Résumé ↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
