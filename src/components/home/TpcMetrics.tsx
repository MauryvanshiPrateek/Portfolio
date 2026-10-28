"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ease } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/LanguageContext";

const metricValues = ["10+", "500–600", "2,000+", "10–12", "14–15"];

export function TpcMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [animated, setAnimated] = useState(false);
  const { lang, t, isJapanese } = useLanguage();
  const metricsData = translations.tpc.metrics;

  useEffect(() => {
    if (isInView) {
      setAnimated(true);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#110D28]">
      <div className="max-w-[1180px] mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#3a2a5e]/40 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="font-serif text-xs text-accent tracking-[0.25em] uppercase">
              {isJapanese ? "〇三 / 人と組織 · " : "03 · "}{t("tpc.sectionTag")}
            </div>
            <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-text font-normal tracking-wide">
              {t("tpc.heading")}
            </h2>
            <p className="font-serif text-base text-text-secondary font-light pt-1">
              {t("tpc.subtext")}
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 font-serif text-xs tracking-[0.2em] uppercase text-text-secondary hover:text-accent transition-colors"
          >
            <span>{t("tpc.fullLog")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* Metrics Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {metricsData.map((metric, idx) => {
            const lm = metric[lang];
            return (
              <motion.div
                key={lm.label}
                initial={{ opacity: 0, y: 16 }}
                animate={animated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: ease.standard }}
                className="space-y-2 border-l border-[#3a2a5e]/50 pl-4 sm:pl-5"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text font-normal tracking-tight">
                  {animated ? metricValues[idx] : "—"}
                </div>
                <div className="font-serif text-xs font-medium tracking-[0.18em] text-accent uppercase">
                  {lm.label}
                </div>
                <div className="font-serif text-xs text-text-secondary/80 font-light">
                  {lm.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
