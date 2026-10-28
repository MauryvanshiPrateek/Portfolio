"use client";

/**
 * HeroBottomNav.tsx
 *
 * Bottom-split navigation for the Hero landing page.
 * Uses the ClipPathLinks "wipe from nearest edge" hover animation (21st.dev pattern).
 *
 * Layout — two vertical columns pinned to the bottom of the hero:
 *   LEFT  │ Home · Projects · Experience
 *   RIGHT │ Contact · GitHub · Résumé · ⌘K
 *
 * Both columns are fully visible on page load.
 * Hover: accent colour wipes in from the mouse entry edge.
 */

import { motion } from "motion/react";
import {
  Home,
  Layers,
  Briefcase,
  Mail,
  Code2,
  FileText,
  Command,
} from "lucide-react";
import { ClipLinkColumn, ClipLinkItem } from "@/components/ui/clip-path-links";
import { socialLinks } from "@/data/navigation";

// ─── Nav data ─────────────────────────────────────────────────────────────────

const leftItems: ClipLinkItem[] = [
  { id: "home",       label: "Home",       href: "/",            icon: Home },
  { id: "projects",   label: "Projects",   href: "/projects",    icon: Layers },
  { id: "experience", label: "Experience", href: "/experience",  icon: Briefcase },
];

const rightItems: ClipLinkItem[] = [
  { id: "contact", label: "Contact", href: "/contact",          icon: Mail },
  { id: "github",  label: "GitHub",  href: socialLinks.github,  icon: Code2,    external: true },
  { id: "resume",  label: "Résumé",  href: "/resume",           icon: FileText },
  { id: "cmd",     label: "⌘K",      href: "#",                 icon: Command,  isAction: true },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroBottomNav() {
  const openCommandPalette = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <div className="relative z-20 w-full max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 pb-2">
      <div className="flex items-end justify-between">

        {/* ── LEFT column — stagger up on entry ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ClipLinkColumn
            items={leftItems}
            className="backdrop-blur-sm bg-background/30"
          />
        </motion.div>

        {/* ── RIGHT column — stagger up slightly later ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <ClipLinkColumn
            items={rightItems}
            onAction={openCommandPalette}
            className="backdrop-blur-sm bg-background/30"
          />
        </motion.div>

      </div>
    </div>
  );
}
