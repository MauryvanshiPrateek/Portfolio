"use client";

/**
 * clip-path-links.tsx
 *
 * ClipPathLinks — Social / nav link grid with a clip-path "wipe from nearest edge"
 * hover reveal effect, adapted from 21st.dev.
 *
 * Adapted for this portfolio:
 *   • Uses only lucide-react (no react-icons)
 *   • Uses motion/react (which re-exports framer-motion) for useAnimate
 *   • Icons, labels, and hrefs are passed as props so the component is reusable
 */

import React from "react";
import Link from "next/link";
import { useAnimate } from "motion/react";
import { LucideIcon } from "lucide-react";

// ─── Clip-path constants ──────────────────────────────────────────────────────

const NO_CLIP          = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP    = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP  = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP     = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "left" | "right" | "top" | "bottom";

const ENTRANCE_KEYFRAMES: Record<Side, string[]> = {
  left:   [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top:    [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right:  [TOP_LEFT_CLIP,     NO_CLIP],
};

const EXIT_KEYFRAMES: Record<Side, string[]> = {
  left:   [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top:    [NO_CLIP, TOP_RIGHT_CLIP],
  right:  [NO_CLIP, BOTTOM_LEFT_CLIP],
};

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ClipLinkItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  isAction?: boolean;
}

// ─── Single link box ─────────────────────────────────────────────────────────

interface LinkBoxProps {
  item: ClipLinkItem;
  onAction?: () => void;
}

export function LinkBox({ item, onAction }: LinkBoxProps) {
  const [scope, animate] = useAnimate();
  const Icon = item.icon;

  const getNearestSide = (e: React.MouseEvent<HTMLElement>): Side => {
    const box = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const sides = [
      { proximity: Math.abs(box.left   - e.clientX), side: "left"   as Side },
      { proximity: Math.abs(box.right  - e.clientX), side: "right"  as Side },
      { proximity: Math.abs(box.top    - e.clientY), side: "top"    as Side },
      { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" as Side },
    ];
    return sides.sort((a, b) => a.proximity - b.proximity)[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[getNearestSide(e)] });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[getNearestSide(e)] });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (item.isAction) {
      e.preventDefault();
      onAction?.();
    }
  };

  const sharedProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    "aria-label": item.label,
    className:
      "relative flex items-center gap-3 px-5 py-4 w-full group " +
      "bg-transparent text-text-secondary transition-colors duration-200 " +
      "hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
  };

  const inner = (
    <>
      {/* Default state */}
      <Icon className="w-4 h-4 shrink-0 relative z-10" strokeWidth={1.5} />
      <span className="text-[11px] font-mono tracking-[0.2em] uppercase relative z-10 select-none">
        {item.label}
      </span>

      {/* Clip-path overlay — accent fill wiped in from nearest edge */}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 flex items-center gap-3 px-5 bg-accent/90 text-background transition-colors"
      >
        <Icon className="w-4 h-4 shrink-0" strokeWidth={1.5} />
        <span className="text-[11px] font-mono tracking-[0.2em] uppercase select-none">
          {item.label}
        </span>
      </div>
    </>
  );

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
        {inner}
      </a>
    );
  }

  if (item.isAction) {
    return (
      <button type="button" {...sharedProps}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={item.href} {...sharedProps}>
      {inner}
    </Link>
  );
}

// ─── Column container ─────────────────────────────────────────────────────────

interface ClipLinkColumnProps {
  items: ClipLinkItem[];
  onAction?: () => void;
  className?: string;
}

export function ClipLinkColumn({ items, onAction, className = "" }: ClipLinkColumnProps) {
  return (
    <div className={`flex flex-col divide-y divide-border/50 border border-border/50 ${className}`}>
      {items.map((item) => (
        <LinkBox key={item.id} item={item} onAction={onAction} />
      ))}
    </div>
  );
}

