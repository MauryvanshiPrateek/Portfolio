"use client";

import { motion } from "motion/react";
import { DuskScene } from "./DuskScene";
import { ArrowDown } from "lucide-react";
import { ease } from "@/lib/animations";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-between overflow-hidden">
      {/* 1. The Authentic Godhuli Dusk Scene (Brijesh Chandrakar inspired) */}
      <DuskScene />

      {/* 2. Top Subtle Identity Bar */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 pt-6 flex items-center justify-between text-xs font-serif tracking-[0.2em] text-[#baaed4]/70">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: ease.standard }}
          className="flex items-center gap-2 text-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>職人の道 · 匠</span>
          <span className="text-border/60">·</span>
          <span>黄昏 · DUSK HORIZON</span>
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

      {/* 3. Center Atmospheric Title (Minimalist & Hand-crafted, just like reference screenshot) */}
      <div className="relative z-10 my-auto text-center px-4 pointer-events-none select-none">
        {/* Empty space allows the majestic Banyan tree, cattle, hut, and mandir to take full visual presence */}
      </div>

      {/* 4. Bottom Scroll Cue & Wavy Horizon Boundary */}
      <div className="relative z-20 flex flex-col items-center justify-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: ease.standard }}
          className="pb-2 flex flex-col items-center justify-center gap-1.5"
        >
          <a
            href="#path"
            data-hover-box="true"
            data-cursor-label="WALK DOWN ↓"
            className="group flex flex-col items-center gap-1 font-serif text-[11px] tracking-[0.28em] text-[#baaed4]/80 hover:text-accent transition-colors"
            aria-label="Walk down to the grove"
          >
            <span>{t("hero.walkDown")}</span>
            <ArrowDown className="w-3 h-3 text-accent animate-bounce" />
          </a>
        </motion.div>

        {/* 5. Organic Wavy Line Transition with Center Glowing Node */}
        <WavyDivider
          hasNode={true}
          nodeHref="#path"
          nodeLabel="Walk down into the path"
          className="w-full -mt-2"
        />
      </div>
    </section>
  );
}
