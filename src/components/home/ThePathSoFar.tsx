"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ease } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/LanguageContext";

export function ThePathSoFar() {
  const { lang, t } = useLanguage();
  const pathItems = translations.path.items;
  const philosophySteps = translations.path.philosophySteps;

  return (
    <section
      id="path"
      className="relative py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#110D28] overflow-hidden"
    >
      {/* Target anchor for backwards-compatibility */}
      <span id="about" className="absolute -top-24 pointer-events-none" />

      {/* Decorative Tree Silhouette in the Bottom-Right Corner */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px] opacity-20 filter contrast-125"
      >
        <Image
          src="/tree-clean.svg"
          alt=""
          width={560}
          height={500}
          className="w-full h-auto translate-x-12 translate-y-12"
          priority={false}
        />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-serif tracking-[0.25em] text-accent uppercase">
            <span>〇一 / 道</span>
            <span className="text-[#baaed4]/40">·</span>
            <span>{t("path.sectionTag")}</span>
          </div>

          <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-text font-normal tracking-wide">
            {t("path.heading")}
          </h2>

          <p
            className="font-serif text-base sm:text-lg text-text-secondary leading-relaxed font-light pt-1"
            dangerouslySetInnerHTML={{ __html: t("path.intro") }}
          />
        </div>

        {/* Minimalist 2-Column Experience Layout */}
        <div className="space-y-12 sm:space-y-14 lg:space-y-16 max-w-4xl">
          {pathItems.map((item, idx) => {
            const localized = item[lang];
            return (
              <motion.div
                key={localized.institution}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: ease.standard }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
              >
                {/* Left: period */}
                <div className="md:col-span-3 font-serif text-xs font-medium tracking-[0.22em] text-accent uppercase select-none">
                  {localized.period}
                </div>

                {/* Right: title + description */}
                <div className="md:col-span-9 space-y-1.5">
                  <h3 className="font-serif italic text-xl sm:text-2xl text-text font-normal tracking-tight">
                    {localized.institution}
                  </h3>
                  <p className="font-serif text-base sm:text-[17px] text-text-secondary font-light leading-relaxed">
                    <span className="text-text/90 font-normal">{localized.role}</span> — {localized.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy Strip */}
        <div className="pt-12 border-t border-[#3a2a5e]/40 max-w-4xl space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-serif tracking-[0.22em] text-[#baaed4]/70 uppercase">
            <span>{t("path.philosophyTag")}</span>
            <span className="hidden sm:inline text-accent text-[11px]">
              {t("path.philosophyFlow")}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-serif text-sm tracking-wider text-text-secondary">
            {philosophySteps.map((step, i) => {
              const ls = step[lang];
              return (
                <div key={step.num} className="flex items-center gap-2">
                  <span className="text-accent font-mono text-xs">{step.num}</span>
                  <span className="text-text font-medium">{ls.label}</span>
                  <span className="text-[#baaed4]/50 text-xs">({ls.sub})</span>
                  {i < philosophySteps.length - 1 && (
                    <span className="text-accent/40 text-xs pl-3 select-none">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
