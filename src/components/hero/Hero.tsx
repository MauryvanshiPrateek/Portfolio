"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { TwilightLandscape } from "@/components/landscape/TwilightLandscape";
import { HeroBottomNav } from "./HeroBottomNav";
import { motion } from "motion/react";
import { ease } from "@/lib/animations";

export function Hero() {
  const { t } = useLanguage();

  return (
    <TwilightLandscape
      scrollCueLabel={t("hero.walkDown")}
      className="-mt-[72px]"
    >
      {/* Overlay UI Container: Fades with data-cue on scroll */}
      <div
        data-cue
        className="absolute inset-0 z-20 flex flex-col justify-between pointer-events-none pt-[84px] pb-4"
      >
        {/* Top Subtle Identity Bar */}
        <div className="w-full max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between text-xs font-serif tracking-[0.2em] text-[#baaed4]/70 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: ease.standard }}
            className="flex items-center gap-2 text-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>{t("hero.tagline")}</span>
            <span className="text-border/60">·</span>
            <span>{t("hero.horizon")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: ease.standard }}
            className="hidden sm:flex items-center gap-2 text-[11px] tracking-[0.25em]"
          >
            <span>{t("hero.coords")}</span>
          </motion.div>
        </div>

        {/* Bottom Split Navigation — Left: Home·Projects·Experience | Right: Contact·GitHub·Résumé·⌘K */}
        <div className="w-full pointer-events-auto">
          <HeroBottomNav />
        </div>
      </div>
    </TwilightLandscape>
  );
}
