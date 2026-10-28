"use client";

import React from "react";
import { motion } from "motion/react";

interface ArtifactProps {
  isHovered?: boolean;
}

/* ─────────────────────────────────────────────────────────────
   1. MT. FUJI (富士山) — JalRakshak (Hydrodynamics & Flood)
   ───────────────────────────────────────────────────────────── */
export function MtFujiArtifact({ isHovered = false }: ArtifactProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500"
      >
        <defs>
          {/* Rising Sun Disk behind peak */}
          <radialGradient id="fujiSun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E2583E" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#C93D24" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8A1E0B" stopOpacity="0" />
          </radialGradient>

          {/* Fuji Mountain Body Gradient */}
          <linearGradient id="fujiSlope" x1="0" y1="60" x2="0" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#253556" />
            <stop offset="50%" stopColor="#1B263E" />
            <stop offset="100%" stopColor="#0F1726" />
          </linearGradient>

          {/* Snowcap Gradient */}
          <linearGradient id="fujiSnow" x1="0" y1="40" x2="0" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#EAF1FC" />
            <stop offset="100%" stopColor="#B4CCE8" />
          </linearGradient>

          {/* Water Wave Ripple for JalRakshak */}
          <linearGradient id="waterRipple" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6EA8FE" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#6EA8FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6EA8FE" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Ambient Halo */}
        <circle cx="100" cy="95" r="54" fill="url(#fujiSun)" opacity={isHovered ? 0.95 : 0.75} className="transition-opacity duration-300" />

        {/* Mountain Base Body */}
        <path
          d="M100,52 L122,86 C138,110 162,142 188,168 L12,168 C38,142 62,110 78,86 Z"
          fill="url(#fujiSlope)"
        />

        {/* Snowcap Summit with Iconic Jagged Ridges */}
        <path
          d="M87,70 L100,52 L113,70 L118,74 L123,88 L116,94 L110,88 L104,102 L98,90 L92,98 L85,88 L78,94 L82,78 Z"
          fill="url(#fujiSnow)"
        />

        {/* Shaded facets of snow for depth */}
        <path
          d="M100,52 L113,70 L118,74 L123,88 L116,94 L110,88 L100,102 L100,52 Z"
          fill="#A4C2E4"
          opacity="0.45"
        />

        {/* Dynamic Water Inundation Ripples at Base (Hydrodynamics) */}
        <ellipse cx="100" cy="168" rx="84" ry="10" stroke="url(#waterRipple)" strokeWidth="1.6" fill="none" />
        <ellipse cx="100" cy="174" rx="64" ry="7" stroke="url(#waterRipple)" strokeWidth="1.2" strokeDasharray="3 3" fill="none" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. TORII GATE (鳥居) — StockPilot AI (Conversational Gateway)
   ───────────────────────────────────────────────────────────── */
export function ToriiArtifact({ isHovered = false }: ArtifactProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500"
      >
        <defs>
          {/* Vermilion Red Lacquer */}
          <linearGradient id="toriiRed" x1="0" y1="40" x2="0" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FA5C42" />
            <stop offset="45%" stopColor="#DF3820" />
            <stop offset="100%" stopColor="#9C1E0C" />
          </linearGradient>

          {/* Black lacquered beam ends & caps */}
          <linearGradient id="toriiBlack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A242B" />
            <stop offset="100%" stopColor="#120E15" />
          </linearGradient>

          {/* Warm lantern aura */}
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB84A" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#E85D45" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Gateway Glow */}
        <ellipse cx="100" cy="115" rx="42" ry="48" fill="url(#lanternGlow)" opacity={isHovered ? 0.9 : 0.55} />

        {/* Main Curved Kasagi (Top Beam) */}
        <path
          d="M20,52 C55,47 145,47 180,52 L178,60 C146,56 54,56 22,60 Z"
          fill="url(#toriiBlack)"
        />
        <path
          d="M26,58 C58,54 142,54 174,58 L170,68 C140,64 60,64 30,68 Z"
          fill="url(#toriiRed)"
        />

        {/* Shimaki & Nuki (Secondary Crossbeams) */}
        <rect x="36" y="80" width="128" height="9" rx="1.5" fill="url(#toriiRed)" />
        <rect x="36" y="80" width="8" height="9" fill="url(#toriiBlack)" />
        <rect x="156" y="80" width="8" height="9" fill="url(#toriiBlack)" />

        {/* Vertical Center Tablet (Gakuzuka) */}
        <rect x="96" y="66" width="8" height="15" fill="url(#toriiBlack)" />
        <rect x="97" y="68" width="6" height="11" fill="#C29147" />

        {/* Two Grand Pillars (Hashira) */}
        {/* Left Pillar */}
        <path d="M54,68 L52,168 L68,168 L66,68 Z" fill="url(#toriiRed)" />
        <rect x="48" y="162" width="24" height="12" rx="2" fill="url(#toriiBlack)" />

        {/* Right Pillar */}
        <path d="M134,68 L132,168 L148,168 L146,68 Z" fill="url(#toriiRed)" />
        <rect x="128" y="162" width="24" height="12" rx="2" fill="url(#toriiBlack)" />

        {/* Shimenawa Sacred Rope with Hanging Shide paper streamers */}
        <path d="M56,92 Q100,102 144,92" stroke="#EAD4AA" strokeWidth="3" fill="none" />
        <polygon points="76,96 79,106 74,108 77,118 72,119 75,107" fill="#F8F6F0" />
        <polygon points="98,99 101,109 96,111 99,122 94,123 97,110" fill="#F8F6F0" />
        <polygon points="120,96 123,106 118,108 121,118 116,119 119,107" fill="#F8F6F0" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. BAMBOO (竹) — Crop Intelligence (Agronomy & Soil Telemetry)
   ───────────────────────────────────────────────────────────── */
export function BambooArtifact({ isHovered = false }: ArtifactProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500"
      >
        <defs>
          {/* Bamboo Green Stalk Gradient */}
          <linearGradient id="bambooStalk" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E5C38" />
            <stop offset="45%" stopColor="#3FA365" />
            <stop offset="85%" stopColor="#55C98A" />
            <stop offset="100%" stopColor="#256B42" />
          </linearGradient>

          {/* Leaf Jade Gradient */}
          <linearGradient id="bambooLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#68D391" />
            <stop offset="100%" stopColor="#1A4A2E" />
          </linearGradient>

          {/* Dewdrop Aura */}
          <radialGradient id="bambooGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#55C98A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1A4A2E" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="58" fill="url(#bambooGlow)" opacity={isHovered ? 0.8 : 0.4} />

        {/* Main Central Stalk */}
        <g>
          {/* Segment 1 (Base) */}
          <rect x="92" y="142" width="16" height="34" rx="2" fill="url(#bambooStalk)" />
          <ellipse cx="100" cy="142" rx="9" ry="2" fill="#8CE0AB" />

          {/* Segment 2 (Mid) */}
          <rect x="93" y="98" width="14" height="42" rx="2" fill="url(#bambooStalk)" />
          <ellipse cx="100" cy="98" rx="8" ry="2" fill="#8CE0AB" />

          {/* Segment 3 (Upper) */}
          <rect x="94" y="52" width="12" height="44" rx="2" fill="url(#bambooStalk)" />
          <ellipse cx="100" cy="52" rx="7" ry="2" fill="#8CE0AB" />

          {/* Segment 4 (Top tip) */}
          <rect x="95" y="24" width="10" height="26" rx="2" fill="url(#bambooStalk)" />
        </g>

        {/* Secondary Left Stalk */}
        <g opacity="0.85">
          <rect x="68" y="112" width="11" height="46" rx="1.5" fill="url(#bambooStalk)" transform="rotate(-4 74 135)" />
          <rect x="71" y="68" width="9" height="42" rx="1.5" fill="url(#bambooStalk)" transform="rotate(-4 75 89)" />
        </g>

        {/* Graceful Pointed Bamboo Leaves */}
        {/* Right leaf cluster */}
        <path d="M100,98 Q130,90 156,104 Q132,108 100,102 Z" fill="url(#bambooLeaf)" />
        <path d="M102,96 Q142,75 168,82 Q138,90 102,98 Z" fill="url(#bambooLeaf)" />
        <path d="M104,98 Q125,115 146,128 Q124,118 103,101 Z" fill="url(#bambooLeaf)" />

        {/* Left leaf cluster */}
        <path d="M72,88 Q42,80 22,96 Q48,96 72,90 Z" fill="url(#bambooLeaf)" />
        <path d="M72,86 Q36,68 14,75 Q42,82 72,88 Z" fill="url(#bambooLeaf)" />

        {/* Top sprouting young leaves */}
        <path d="M98,42 Q76,28 64,18 Q84,30 98,44 Z" fill="url(#bambooLeaf)" />
        <path d="M102,42 Q124,28 136,18 Q116,30 102,44 Z" fill="url(#bambooLeaf)" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. SENSU FAN (扇子) — Predictor (NLP & Sequence Folding)
   ───────────────────────────────────────────────────────────── */
export function SensuArtifact({ isHovered = false }: ArtifactProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500"
      >
        <defs>
          {/* Fan Paper Gradient (Deep Midnight Indigo to Plum) */}
          <linearGradient id="sensuPaper" x1="0" y1="0" x2="200" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2A1B44" />
            <stop offset="50%" stopColor="#432258" />
            <stop offset="100%" stopColor="#1E1232" />
          </linearGradient>

          {/* Gold Leaf Accents */}
          <linearGradient id="goldLeaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#E5A83B" />
            <stop offset="100%" stopColor="#B3781E" />
          </linearGradient>

          {/* Golden Bamboo Ribs */}
          <linearGradient id="fanRibs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EAD295" />
            <stop offset="100%" stopColor="#7E581D" />
          </linearGradient>
        </defs>

        {/* Fan Arc Background Paper */}
        <path
          d="M100,146 L32,68 C52,48 148,48 168,68 Z"
          fill="url(#sensuPaper)"
          stroke="url(#goldLeaf)"
          strokeWidth="1.5"
        />

        {/* Pleated Fan Folds (11 Flutes) */}
        <path d="M100,146 L44,62" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L58,56" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L73,52" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L89,50" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L100,49" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L111,50" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L127,52" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L142,56" stroke="#5E357A" strokeWidth="1" opacity="0.6" />
        <path d="M100,146 L156,62" stroke="#5E357A" strokeWidth="1" opacity="0.6" />

        {/* Painted Gold Cherry Blossoms (Sakura Motif) on Fan Paper */}
        <g fill="url(#goldLeaf)">
          {/* Main Blossom */}
          <circle cx="100" cy="80" r="4.5" />
          <ellipse cx="100" cy="72" rx="4.5" ry="6.5" />
          <ellipse cx="108" cy="78" rx="6.5" ry="4.5" />
          <ellipse cx="105" cy="88" rx="6" ry="4.5" />
          <ellipse cx="95" cy="88" rx="6" ry="4.5" />
          <ellipse cx="92" cy="78" rx="6.5" ry="4.5" />

          {/* Small companion blossom & drifting petals */}
          <circle cx="126" cy="70" r="3" />
          <ellipse cx="126" cy="65" rx="3.5" ry="5" />
          <ellipse cx="132" cy="70" rx="5" ry="3.5" />
          <ellipse cx="121" cy="70" rx="5" ry="3.5" />

          <ellipse cx="74" cy="76" rx="4" ry="2" transform="rotate(-30 74 76)" />
          <ellipse cx="82" cy="94" rx="3.5" ry="1.8" transform="rotate(25 82 94)" />
        </g>

        {/* Outer Heavy Bamboo Guard Ribs (Oya-bone) */}
        <path d="M100,146 L30,66 L34,68 L100,146 Z" fill="url(#fanRibs)" />
        <path d="M100,146 L170,66 L166,68 L100,146 Z" fill="url(#fanRibs)" />

        {/* Pivot Rivet (Kaname) & Hanging Silk Tassel */}
        <circle cx="100" cy="146" r="4" fill="url(#goldLeaf)" />
        <circle cx="100" cy="146" r="1.8" fill="#1A1024" />

        {/* Flowing Silk Tassel */}
        <path d="M100,150 Q96,165 98,184 Q100,186 102,184 Q104,165 100,150 Z" fill="#E5A83B" />
        <line x1="99" y1="184" x2="97" y2="194" stroke="#E5A83B" strokeWidth="1" />
        <line x1="100" y1="184" x2="100" y2="196" stroke="#E5A83B" strokeWidth="1" />
        <line x1="101" y1="184" x2="103" y2="194" stroke="#E5A83B" strokeWidth="1" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. KATANA (刀) — CyberWar (Offensive Attack & Defensive Telemetry)
   ───────────────────────────────────────────────────────────── */
export function KatanaArtifact({ isHovered = false }: ArtifactProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500"
      >
        <defs>
          {/* Tamahagane Folded Steel Blade */}
          <linearGradient id="bladeSteel" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#DDE6EE" />
            <stop offset="70%" stopColor="#8FA0B2" />
            <stop offset="100%" stopColor="#4F6072" />
          </linearGradient>

          {/* Tempered Edge Gleam */}
          <linearGradient id="bladeEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#D5E8FF" />
            <stop offset="100%" stopColor="#9AB8D8" />
          </linearGradient>

          {/* Golden Tsuba & Habaki */}
          <linearGradient id="goldTsuba" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#D49A32" />
            <stop offset="100%" stopColor="#784E0C" />
          </linearGradient>

          {/* Crimson Aura on Threat Strike */}
          <radialGradient id="katanaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D64545" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D64545" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="62" fill="url(#katanaGlow)" opacity={isHovered ? 0.85 : 0.4} />

        {/* Diagonal Katana Blade Silhouette */}
        <g transform="rotate(-40 100 100)">
          {/* Blade Spine & Body */}
          <path
            d="M36,97 Q100,94 154,97 L162,99 Q100,102 36,99 Z"
            fill="url(#bladeSteel)"
          />

          {/* Wavy Hamon (Temper Line) along Cutting Edge */}
          <path
            d="M36,98 Q50,96.5 65,98 Q80,96.5 95,98 Q110,96.5 125,98 Q140,96.5 154,98"
            stroke="url(#bladeEdge)"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Habaki (Blade Collar) */}
          <rect x="36" y="95" width="8" height="6" rx="1" fill="url(#goldTsuba)" />

          {/* Tsuba (Circular Handguard) */}
          <ellipse cx="36" cy="98" rx="4" ry="16" fill="url(#goldTsuba)" />
          <ellipse cx="36" cy="98" rx="2" ry="12" fill="#1C1420" />

          {/* Tsuka (Hilt with Traditional Diamond Tsukamaki Wrap) */}
          <rect x="6" y="96" width="30" height="4" fill="#E8DCD0" />
          {/* Diamond wraps */}
          <polygon points="12,96 15,98 12,100 9,98" fill="#18121E" />
          <polygon points="18,96 21,98 18,100 15,98" fill="#18121E" />
          <polygon points="24,96 27,98 24,100 21,98" fill="#18121E" />
          <polygon points="30,96 33,98 30,100 27,98" fill="#18121E" />

          {/* Kashira (Pommel Cap) */}
          <rect x="5" y="95" width="3" height="6" rx="1" fill="url(#goldTsuba)" />

          {/* Dynamic Light Slash Flare across the blade tip */}
          <circle cx="158" cy="98" r="3" fill="#FFFFFF" opacity={isHovered ? 1 : 0.6}>
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. SUSHI (寿司) — Omotenashi Core (Artisanal Precision Systems)
   ───────────────────────────────────────────────────────────── */
export function SushiArtifact({ isHovered = false }: ArtifactProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-500"
      >
        <defs>
          {/* Fresh Salmon Sashimi Gradient */}
          <linearGradient id="salmonGrad" x1="40" y1="70" x2="160" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF7A59" />
            <stop offset="45%" stopColor="#FF6240" />
            <stop offset="80%" stopColor="#E24424" />
            <stop offset="100%" stopColor="#B32B10" />
          </linearGradient>

          {/* Shari Rice Pearlescent Glow */}
          <linearGradient id="riceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#EFECE6" />
            <stop offset="100%" stopColor="#D5D0C6" />
          </linearGradient>

          {/* Dark Nori Belt */}
          <linearGradient id="noriBelt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E2721" />
            <stop offset="100%" stopColor="#0E1410" />
          </linearGradient>

          {/* Warm Dining Aura */}
          <radialGradient id="sushiAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA07A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#B32B10" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="58" fill="url(#sushiAura)" opacity={isHovered ? 0.8 : 0.45} />

        {/* Minimalist Geta / Slate Board Base */}
        <ellipse cx="100" cy="138" rx="66" ry="12" fill="#161222" stroke="#3A2A5E" strokeWidth="1" />
        <ellipse cx="100" cy="135" rx="60" ry="9" fill="#1C172C" />

        {/* Shari (Hand-Formed Rice Pillow) */}
        <path
          d="M56,112 C56,98 144,98 144,112 C144,128 56,128 56,112 Z"
          fill="url(#riceGrad)"
        />
        {/* Subtle Individual Rice Grains Texture */}
        <ellipse cx="64" cy="116" rx="3.5" ry="2" fill="#FFFFFF" />
        <ellipse cx="72" cy="120" rx="4" ry="2.2" fill="#FFFFFF" />
        <ellipse cx="128" cy="118" rx="3.5" ry="2" fill="#FFFFFF" />
        <ellipse cx="136" cy="114" rx="4" ry="2.2" fill="#FFFFFF" />

        {/* Sake (Fresh Salmon Sashimi Slice Drape) */}
        <path
          d="M48,102 C52,80 148,80 152,102 C152,118 48,118 48,102 Z"
          fill="url(#salmonGrad)"
        />

        {/* White Marbling Lines across the Salmon Cut */}
        <path d="M68,88 Q82,98 78,114" stroke="#FFF0ED" strokeWidth="1.8" opacity="0.65" strokeLinecap="round" />
        <path d="M90,84 Q104,96 100,115" stroke="#FFF0ED" strokeWidth="1.8" opacity="0.65" strokeLinecap="round" />
        <path d="M112,85 Q126,97 122,114" stroke="#FFF0ED" strokeWidth="1.8" opacity="0.65" strokeLinecap="round" />
        <path d="M134,88 Q144,98 142,112" stroke="#FFF0ED" strokeWidth="1.6" opacity="0.65" strokeLinecap="round" />

        {/* Nori Belt (Crisp Seaweed Ribbon) */}
        <rect x="94" y="84" width="12" height="34" rx="1.5" fill="url(#noriBelt)" />
        <line x1="97" y1="84" x2="97" y2="118" stroke="#3A483E" strokeWidth="0.8" opacity="0.5" />

        {/* Wasabi & Gari (Pickled Ginger) Accent */}
        <circle cx="148" cy="128" r="5" fill="#8CE0AB" opacity="0.9" />
        <path d="M156,128 Q162,124 165,129 Q160,133 156,128 Z" fill="#F8B4B4" />
      </svg>
    </div>
  );
}
