"use client";

import { motion } from "motion/react";

interface WavyDividerProps {
  hasNode?: boolean;
  nodeHref?: string;
  nodeLabel?: string;
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  flip?: boolean;
}

export function WavyDivider({
  hasNode = true,
  nodeHref = "#path",
  nodeLabel = "Scroll to content",
  className = "",
  strokeColor = "rgba(232, 144, 56, 0.45)",
  fillColor = "#110D28",
  flip = false,
}: WavyDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none ${className} ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        viewBox="0 0 1440 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 lg:h-20 block preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(232, 144, 56, 0.05)" />
            <stop offset="25%" stopColor="rgba(232, 144, 56, 0.35)" />
            <stop offset="50%" stopColor="rgba(232, 144, 56, 0.65)" />
            <stop offset="75%" stopColor="rgba(232, 144, 56, 0.35)" />
            <stop offset="100%" stopColor="rgba(232, 144, 56, 0.05)" />
          </linearGradient>

          <filter id="waveGlow" x="-5%" y="-30%" width="110%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Soft atmospheric glow path */}
        <path
          d="M 0,38 C 220,18 420,52 640,32 C 685,28 710,25 720,25 C 730,25 755,28 800,32 C 1020,52 1220,18 1440,38 L 1440,70 L 0,70 Z"
          fill={fillColor}
        />

        {/* Ambient glow stroke behind main stroke */}
        <path
          d="M 0,38 C 220,18 420,52 640,32 C 685,28 710,25 720,25 C 730,25 755,28 800,32 C 1020,52 1220,18 1440,38"
          stroke="url(#waveStrokeGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#waveGlow)"
          opacity="0.6"
        />

        {/* Fine crisp wavy separator line */}
        <path
          d="M 0,38 C 220,18 420,52 640,32 C 685,28 710,25 720,25 C 730,25 755,28 800,32 C 1020,52 1220,18 1440,38"
          stroke="url(#waveStrokeGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Center Navigational Glowing Pin / Compass Node from Reference Image */}
      {hasNode && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-auto">
          {/* Subtle top guide line */}
          <span className="w-[1px] h-3 bg-gradient-to-b from-transparent to-accent/60 mb-0.5" />

          <a
            href={nodeHref}
            aria-label={nodeLabel}
            data-hover-box="true"
            data-cursor-label="EXPLORE ↓"
            className="group relative flex items-center justify-center p-1"
          >
            {/* Outer thin ring */}
            <span className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-accent/60 bg-[#110D28]/90 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_16px_rgba(232,144,56,0.5)]">
              {/* Outer faint pulsing radar halo */}
              <span className="absolute inset-0 rounded-full border border-accent/30 animate-ping opacity-30" />
              
              {/* Center glowing amber dot */}
              <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(232,144,56,0.9)] group-hover:bg-[#ffaf58] transition-colors" />
            </span>
          </a>

          {/* Subtle bottom guide line */}
          <span className="w-[1px] h-4 bg-gradient-to-t from-transparent to-accent/60 mt-0.5" />
        </div>
      )}
    </div>
  );
}
