"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "en" | "ja";

// ─────────────────────────────────────────────────────────────────────────────
// Translation dictionary — English (source) ↔ Japanese
// Rule: names, project titles, institutions stay in English.
//       All descriptive / prose content switches to Japanese.
// ─────────────────────────────────────────────────────────────────────────────
export const translations = {
  // ── Navbar ──────────────────────────────────────────────────────────────────
  nav: {
    home:         { en: "Home",         ja: "ホーム" },
    about:        { en: "About",        ja: "概要" },
    projects:     { en: "Projects",     ja: "作品" },
    experience:   { en: "Experience",   ja: "経歴" },
    skills:       { en: "Skills",       ja: "技術" },
    achievements: { en: "Achievements", ja: "実績" },
    contact:      { en: "Contact",      ja: "連絡" },
    resume:       { en: "Résumé",       ja: "履歴書" },
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    tagline:   { en: "THE ARTISAN'S WAY · CRAFT", ja: "職人の道 · 匠" },
    horizon:   { en: "DUSK HORIZON", ja: "黄昏 · DUSK HORIZON" },
    coords:    { en: "BHILAI 21.19° N ──► TOKYO 35.67° N", ja: "ブヒライ 21.19° N ──► 東京 35.67° N" },
    walkDown:  { en: "WALK DOWN TO THE GROVE", ja: "道を歩き下る" },
  },

  // ── The Path So Far ─────────────────────────────────────────────────────────
  path: {
    sectionTag:  { en: "THE PATH SO FAR",    ja: "これまでの道" },
    heading:     { en: "The path so far",    ja: "これまでの道のり" },
    intro:       {
      en: "Namaste! I am <b>Mauryvanshi Prateek</b> — an artificial intelligence engineering student at CSVTU Bhilai, building practical systems where computational models meet real human friction.",
      ja: "はじめまして。私は <b>Mauryvanshi Prateek</b> です。CSVTU Bhilaiで人工知能工学を学んでおり、計算モデルと現実の課題が交わる実用的なシステムを構築しています。",
    },
    philosophyTag: { en: "PHILOSOPHY // PRINCIPLES", ja: "理念 // PHILOSOPHY" },
    philosophyFlow: { en: "IDEA ──► SYSTEM ──► PRODUCT", ja: "アイデア ──► システム ──► 製品" },
    items: [
      {
        en: { period: "4 YEARS", institution: "CSVTU Bhilai", role: "B.Tech in Artificial Intelligence", description: "Deep learning, simulation solvers, geospatial rasters, and practical systems engineering." },
        ja: { period: "4年間", institution: "CSVTU Bhilai", role: "人工知能学士課程", description: "深層学習、シミュレーションソルバー、地理空間ラスター、実践的システム工学。" },
      },
      {
        en: { period: "1 YEAR", institution: "Training & Placement Cell", role: "Core Head & Student Coordinator", description: "Coordinating 10+ campus recruitment drives, 500+ student data records, and corporate recruiter operations." },
        ja: { period: "1年間", institution: "Training & Placement Cell", role: "中核責任者 & 学生コーディネーター", description: "10件以上のキャンパス採用活動、500件以上の学生データ、企業リクルーター業務を統括。" },
      },
      {
        en: { period: "SYSTEMS", institution: "Applied AI Projects", role: "Lead Engineer", description: "JalRakshak 2D hydrodynamic flood simulation & StockPilot AI conversational WhatsApp retail tooling." },
        ja: { period: "実装", institution: "Applied AI Projects", role: "リードエンジニア", description: "JalRakshak 2D水力洪水シミュレーション & StockPilot AI WhatsApp 会話型リテールツール。" },
      },
      {
        en: { period: "PRESENT · NOW", institution: "Global Trajectory", role: "Cross-Cultural Engineering", description: "Developing resilient AI and software systems with an active focus on Japanese & East Asian technical ecosystems." },
        ja: { period: "現在進行形", institution: "Global Trajectory", role: "越境エンジニアリング", description: "日本・東アジアの技術エコシステムに焦点を当て、堅牢なAI・ソフトウェアシステムを開発中。" },
      },
    ],
    philosophySteps: [
      { num: "01", en: { label: "Idea",    sub: "Constraints"    }, ja: { label: "構想",    sub: "制約条件"    } },
      { num: "02", en: { label: "Data",    sub: "ETL & Rasters"  }, ja: { label: "データ",  sub: "ETL・ラスター" } },
      { num: "03", en: { label: "Model",   sub: "Solvers & LLMs" }, ja: { label: "モデル",  sub: "ソルバー・LLM" } },
      { num: "04", en: { label: "System",  sub: "Architecture"   }, ja: { label: "システム", sub: "アーキテクチャ" } },
      { num: "05", en: { label: "Product", sub: "Real Utility"   }, ja: { label: "製品",    sub: "実用価値"    } },
    ],
  },

  // ── Projects Showcase ────────────────────────────────────────────────────────
  projects: {
    sectionTag:  { en: "THE ARTIFACTS",  ja: "作品群" },
    heading:     { en: "System of Elements", ja: "要素のシステム" },
    subtext:     {
      en: "Six computational systems, each embodied by a Japanese artifact — where hydrodynamic simulation, conversational messaging, and atomic architectures meet artisanal discipline.",
      ja: "六つの計算システム、それぞれを日本の工芸品として体現。水力シミュレーション、会話型メッセージング、アトミックアーキテクチャが職人の規律と交わる場所。",
    },
    allProjects: { en: "ALL PROJECTS ARCHIVE (6)", ja: "全作品アーカイブ（6件）" },
    explore:     { en: "Explore System", ja: "詳細を見る" },
  },

  // ── TPC Metrics ──────────────────────────────────────────────────────────────
  tpc: {
    sectionTag: { en: "LEADERSHIP & SYSTEMS",     ja: "リーダーシップとシステム" },
    heading:    { en: "People, operations & data", ja: "人・運営・データ" },
    subtext:    {
      en: "Core Head & Student Coordinator at CSVTU's Training & Placement Cell — orchestrating campus recruitment pipelines, records for 500+ students, and direct corporate partnerships.",
      ja: "CSVTUの就職支援セルにてコア責任者 & 学生コーディネーターとして、採用パイプライン、500件以上の学生記録、企業パートナーシップを統括。",
    },
    fullLog: { en: "FULL EXPERIENCE LOG", ja: "経歴全記録" },
    metrics: [
      { en: { label: "Campus Drives",       sub: "End-to-end coordinated"    }, ja: { label: "就職活動",     sub: "端から端まで統括"   } },
      { en: { label: "Students Managed",    sub: "B.Tech + Diploma cohorts"  }, ja: { label: "学生管理",     sub: "学士・専門コース"   } },
      { en: { label: "Company Directory",   sub: "Curated & verified records" }, ja: { label: "企業ディレクトリ", sub: "精選・検証済み記録"   } },
      { en: { label: "HR Liaisons",         sub: "Direct corporate recruiters" }, ja: { label: "HR連絡担当",  sub: "直接採用担当企業"   } },
      { en: { label: "MoMs & Reports",      sub: "Institutional documentation" }, ja: { label: "議事録・報告",  sub: "機関内ドキュメント"  } },
    ],
  },

  // ── Capabilities ────────────────────────────────────────────────────────────
  capabilities: {
    sectionTag:  { en: "CAPABILITIES",     ja: "技量" },
    heading:     { en: "What I build with", ja: "使用技術・ツール" },
    subtext:     {
      en: "Tools and technologies grounded in practical project implementation. No arbitrary proficiency percentages.",
      ja: "実際のプロジェクト実装に基づくツールと技術。恣意的な習熟度パーセンテージは使用しない。",
    },
    fullMap: { en: "FULL CAPABILITY MAP", ja: "技術マップ全体" },
  },

  // ── International / Trajectory ───────────────────────────────────────────────
  international: {
    sectionTag: { en: "TRAJECTORY TO JAPAN", ja: "日本へのキャリアパス" },
    heading:    { en: "Building beyond borders", ja: "国境を超えて構築する" },
    subtext:    {
      en: "I am focusing my career toward international AI and software engineering roles, with a dedicated interest in Japan and East Asia. My goal is developing systems that unite technical depth with cross-cultural product utility.",
      ja: "日本および東アジアへの関心を軸に、国際的なAI・ソフトウェアエンジニアリング職を目指しています。技術的深度と越境的な製品価値を融合させたシステム開発が目標です。",
    },
    origin:      { en: "ORIGIN",      ja: "出身地" },
    practice:    { en: "PRACTICE",    ja: "専門領域" },
    destination: { en: "DESTINATION", ja: "目標地" },
    originVal:   { en: "CSVTU Bhilai · Chhattisgarh, India",          ja: "CSVTU Bhilai · チャッティースガル州、インド" },
    practiceVal: { en: "Applied AI, Data & Systems Engineering",       ja: "応用AI・データ・システムエンジニアリング" },
    destVal:     { en: "Japan & East Asia Technical Ecosystems",       ja: "日本・東アジアの技術エコシステム" },
  },

  // ── Home CTA ─────────────────────────────────────────────────────────────────
  cta: {
    sectionTag: { en: "CONVERSATION",   ja: "対話" },
    heading:    { en: "Let's build something useful.", ja: "一緒に有益なものを作りましょう。" },
    subtext:    {
      en: "Whether it's an AI/ML engineering role, an applied data challenge, or a serious technical dialogue — I am always open to meaningful conversation.",
      ja: "AI/MLエンジニアリングの役割、応用データの課題、または真剣な技術的対話——常に意義ある対話に開かれています。",
    },
    emailBtn:    { en: "Email me →",  ja: "メール →" },
    linkedInBtn: { en: "LinkedIn ↗",  ja: "LinkedIn ↗" },
    resumeBtn:   { en: "Résumé ↗",    ja: "履歴書 ↗" },
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: { en: "Building systems that matter.", ja: "意義あるシステムを構築する。" },
    rights:  { en: "All rights reserved.", ja: "全著作権所有。" },
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────────────────────
interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (path: string) => string;
  isJapanese: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (path: string) => path,
  isJapanese: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ja" : "en"));
  }, []);

  // Generic path resolver: "nav.home" → translations.nav.home[lang]
  const t = useCallback(
    (path: string): string => {
      const keys = path.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let obj: any = translations;
      for (const key of keys) {
        obj = obj?.[key];
      }
      if (obj && typeof obj === "object" && lang in obj) {
        return obj[lang] as string;
      }
      return path;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isJapanese: lang === "ja" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
