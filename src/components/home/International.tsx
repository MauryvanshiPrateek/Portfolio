"use client";

import { motion } from "motion/react";
import { Globe2 } from "lucide-react";
import { ease } from "@/lib/animations";

export function International() {
  return (
    <section className="py-20 lg:py-24 px-5 md:px-8 lg:px-10 border-t border-border bg-surface/30">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Statement */}
        <div className="lg:col-span-7 space-y-4">
          <div className="font-mono text-xs text-accent uppercase tracking-widest flex items-center gap-2">
            <Globe2 className="w-3.5 h-3.5" />
            05 / TRAJECTORY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text">
            Building beyond borders.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
            I’m building my career toward international AI and software engineering roles, with a particular interest in Japan and East Asia. I focus on developing systems that bridge technical rigor with cross-cultural product utility.
          </p>
        </div>

        {/* Right: Technical Diagram INDIA ↓ AI / DATA / SOFTWARE ↓ GLOBAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: ease.standard }}
          className="lg:col-span-5 p-6 rounded-[16px] border border-border bg-surface flex flex-col items-center justify-center space-y-3 font-mono text-xs"
        >
          <div className="w-full text-center py-2.5 px-4 rounded-[10px] border border-border bg-surface-elevated text-text-secondary">
            INDIA (CSVTU CHHATTISGARH)
          </div>
          <div className="text-accent text-sm">↓</div>
          <div className="w-full text-center py-2.5 px-4 rounded-[10px] border border-accent/40 bg-accent/5 text-accent font-semibold tracking-wider">
            AI / DATA / SOFTWARE ENGINEERING
          </div>
          <div className="text-accent text-sm">↓</div>
          <div className="w-full text-center py-2.5 px-4 rounded-[10px] border border-border bg-surface-elevated text-text">
            GLOBAL (JAPAN & EAST ASIA FOCUS)
          </div>
        </motion.div>
      </div>
    </section>
  );
}
