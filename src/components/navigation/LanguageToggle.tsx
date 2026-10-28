"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  const isJapanese = lang === "ja";

  return (
    <button
      onClick={toggleLang}
      className="relative h-9 w-[72px] rounded-[10px] border border-border bg-surface hover:border-accent transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent overflow-hidden"
      aria-label={isJapanese ? "Switch to English" : "日本語に切り替え"}
      title={isJapanese ? "Switch to English" : "日本語に切り替え"}
    >
      {/* Sliding pill indicator */}
      <span
        className="absolute inset-y-[3px] w-[32px] rounded-[7px] bg-accent transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ left: isJapanese ? "calc(100% - 35px)" : "3px" }}
        aria-hidden="true"
      />

      {/* Labels */}
      <span className="relative flex items-center justify-between px-2 h-full w-full select-none pointer-events-none">
        <span
          className={`text-[10px] font-serif tracking-wider transition-colors duration-200 ${
            !isJapanese ? "text-white font-semibold" : "text-text-muted"
          }`}
        >
          EN
        </span>
        <span
          className={`text-[10px] font-serif tracking-wider transition-colors duration-200 ${
            isJapanese ? "text-white font-semibold" : "text-text-muted"
          }`}
        >
          日
        </span>
      </span>
    </button>
  );
}
