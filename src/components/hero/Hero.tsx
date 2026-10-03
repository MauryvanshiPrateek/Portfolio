"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { EngineeringMap } from "./EngineeringMap";
import { ArrowRight, FileText } from "lucide-react";
import { ease } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] flex flex-col justify-between overflow-hidden px-5 md:px-8 lg:px-10 py-8 lg:py-12">
      {/* Subtle blue radial glow background (5–8% opacity) */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column (60% on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: ease.standard }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs md:text-sm tracking-widest text-text-secondary uppercase">
              AI / DATA / SOFTWARE
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: ease.standard }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-text leading-[0.95]">
              <span className="block text-text-secondary font-normal text-3xl sm:text-5xl lg:text-6xl">
                Mauryvanshi
              </span>
              <span className="block text-text font-bold text-5xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-text via-text to-text-secondary">
                Prateek
              </span>
            </h1>
          </motion.div>

          {/* Positioning Headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: ease.standard }}
            className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-[650px] font-normal leading-relaxed"
          >
            I build intelligent products that turn data and complex problems into usable systems.
          </motion.p>

          {/* Technical Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: ease.standard }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            {[
              "Machine Learning",
              "Deep Learning",
              "GenAI",
              "Data",
              "Product Development",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-[6px] border border-border bg-surface text-[12px] font-mono text-text-muted"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: ease.standard }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#featured-work"
              className="h-12 px-6 rounded-[10px] bg-accent text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(77,141,255,0.25)] transition-all duration-200 cursor-pointer"
            >
              <span>Explore my work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/resume"
              className="h-12 px-5 rounded-[10px] border border-border bg-surface text-text hover:border-accent hover:text-accent font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              <span>View résumé ↗</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Engineering Map (40% on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: ease.standard }}
          className="lg:col-span-5 w-full flex items-center justify-center"
        >
          <EngineeringMap />
        </motion.div>
      </div>

      {/* Hero Footnotes / Context */}
      <div className="max-w-[1280px] mx-auto w-full pt-8 mt-4 border-t border-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono text-text-muted">
        <div>
          B.Tech (Hons.) CSE — Artificial Intelligence / CSVTU · Chhattisgarh
        </div>
        <div className="text-text-secondary">
          Building toward an international career in AI & software engineering.
        </div>
      </div>
    </section>
  );
}
