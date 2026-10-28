"use client";

import { motion } from "motion/react";
import { Globe2 } from "lucide-react";
import { ease } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";

export function International() {
  const { t, isJapanese } = useLanguage();

  return (
    <section className="py-20 lg:py-24 px-5 md:px-8 lg:px-12 bg-[#110D28]">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Statement */}
        <div className="lg:col-span-7 space-y-4">
          <div className="font-serif text-xs text-accent uppercase tracking-[0.25em] flex items-center gap-2">
            <Globe2 className="w-3.5 h-3.5" />
            <span>{isJapanese ? "〇五 / 越境 · " : "05 · "}{t("international.sectionTag")}</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-text">
            {t("international.heading")}
          </h2>
          <p className="font-serif text-base sm:text-lg text-text-secondary font-light leading-relaxed max-w-xl">
            {t("international.subtext")}
          </p>
        </div>

        {/* Right: Trajectory Flow */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: ease.standard }}
          className="lg:col-span-5 space-y-4 font-serif border-l border-[#3a2a5e]/50 pl-6 sm:pl-8 py-2"
        >
          <div className="space-y-1">
            <div className="text-xs tracking-[0.2em] uppercase text-accent font-medium">
              {t("international.origin")}
            </div>
            <div className="text-lg text-text font-normal">{t("international.originVal")}</div>
          </div>

          <div className="text-accent/60 text-sm pl-1 font-mono">↓</div>

          <div className="space-y-1">
            <div className="text-xs tracking-[0.2em] uppercase text-accent font-medium">
              {t("international.practice")}
            </div>
            <div className="text-lg text-text font-normal">{t("international.practiceVal")}</div>
          </div>

          <div className="text-accent/60 text-sm pl-1 font-mono">↓</div>

          <div className="space-y-1">
            <div className="text-xs tracking-[0.2em] uppercase text-accent font-medium">
              {t("international.destination")}
            </div>
            <div className="text-lg text-text font-normal">{t("international.destVal")}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
