"use client";

import { useEffect, useRef } from "react";

export function DuskScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      containerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      <div ref={containerRef} className="relative w-full h-full transition-transform duration-700 ease-out">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dusk Sky Gradient */}
            <linearGradient id="duskSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#140d2e" />
              <stop offset="16%" stopColor="#1e1344" />
              <stop offset="32%" stopColor="#2c1a4e" />
              <stop offset="46%" stopColor="#45224e" />
              <stop offset="58%" stopColor="#632948" />
              <stop offset="68%" stopColor="#853638" />
              <stop offset="78%" stopColor="#b44e26" />
              <stop offset="86%" stopColor="#d8702c" />
              <stop offset="92%" stopColor="#e88834" />
              <stop offset="97%" stopColor="#d46c24" />
              <stop offset="100%" stopColor="#a8521a" />
            </linearGradient>

            {/* Horizon Glow */}
            <radialGradient id="duskHorizon" cx="50%" cy="100%" r="65%">
              <stop offset="0%" stopColor="#c86422" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#682c12" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#140a08" stopOpacity="0" />
            </radialGradient>

            {/* Sun/Horizon Bloom */}
            <radialGradient id="duskBloom" cx="50%" cy="70%" r="55%">
              <stop offset="0%" stopColor="#ffb84a" stopOpacity="0.45" />
              <stop offset="30%" stopColor="#e07222" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#6a2410" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#180e08" stopOpacity="0" />
            </radialGradient>

            {/* Mandir Aura Glow */}
            <radialGradient id="mandirGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e38" stopOpacity="0.35" />
              <stop offset="45%" stopColor="#b46222" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#34190c" stopOpacity="0" />
            </radialGradient>

            {/* Diya Clay & Flame Gradients */}
            <linearGradient id="clayGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7a4622" />
              <stop offset="50%" stopColor="#442412" />
              <stop offset="100%" stopColor="#1c0c06" />
            </linearGradient>

            <radialGradient id="diyaFlameGrad" cx="50%" cy="70%" r="60%">
              <stop offset="0%" stopColor="#fff8e2" />
              <stop offset="25%" stopColor="#ffe494" />
              <stop offset="60%" stopColor="#ff9a28" />
              <stop offset="100%" stopColor="#d4520e" stopOpacity="0.95" />
            </radialGradient>

            <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffb84a" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#e87018" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#6a2c06" stopOpacity="0" />
            </radialGradient>

            {/* Window Glow for the Hut */}
            <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffb84a" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#c86e20" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#4a2206" stopOpacity="0" />
            </radialGradient>

            {/* Chulha Smoke Gradient */}
            <radialGradient id="smokeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#b0a0c4" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#8c78a2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#68547c" stopOpacity="0" />
            </radialGradient>

            {/* Ridge Gradients */}
            <linearGradient id="ridgeFront" x1="0" y1="680" x2="0" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#251c4a" />
              <stop offset="35%" stopColor="#1c143a" />
              <stop offset="100%" stopColor="#120c28" />
            </linearGradient>

            <linearGradient id="ridgeRim" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#544078" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#6e4884" stopOpacity="0.4" />
              <stop offset="85%" stopColor="#8a5a78" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7a4658" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="farHillLeft" x1="0" y1="710" x2="0" y2="850" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3d2c52" />
              <stop offset="60%" stopColor="#302042" />
              <stop offset="100%" stopColor="#241634" />
            </linearGradient>

            <linearGradient id="farHillRight" x1="1000" y1="640" x2="1440" y2="850" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#442e56" />
              <stop offset="30%" stopColor="#3a254c" />
              <stop offset="100%" stopColor="#261638" />
            </linearGradient>
          </defs>

          {/* 1. Sky Background */}
          <rect width="1440" height="900" fill="url(#duskSky)" />

          {/* 2. Horizon Glow & Bloom */}
          <ellipse cx="720" cy="900" rx="760" ry="420" fill="url(#duskHorizon)" />
          <ellipse cx="720" cy="870" rx="920" ry="300" fill="url(#duskBloom)" />

          {/* 3. Twinkling Stars */}
          <g fill="#f0eaff">
            {[
              [112, 68, 0.9, 0.7],
              [210, 28, 0.7, 0.6],
              [360, 35, 0.6, 0.5],
              [480, 52, 0.8, 0.65],
              [645, 180, 0.6, 0.5],
              [700, 72, 0.5, 0.45],
              [980, 42, 0.6, 0.5],
              [1088, 175, 0.7, 0.6],
              [1195, 66, 0.8, 0.65],
              [1280, 32, 0.6, 0.5],
              [1358, 46, 0.9, 0.7],
              [1440, 28, 0.5, 0.4],
              [185, 310, 0.6, 0.45],
              [240, 44, 0.8, 0.6],
              [520, 60, 0.5, 0.45],
              [840, 20, 0.7, 0.55],
              [990, 25, 0.8, 0.6],
              [1150, 88, 0.6, 0.5],
              [1250, 48, 0.6, 0.45],
              [1420, 72, 0.5, 0.4],
              [628, 280, 0.5, 0.4],
              [768, 358, 0.5, 0.35],
              [1128, 278, 0.6, 0.5],
              [1382, 358, 0.4, 0.35],
              [1035, 162, 1.4, 0.9],
              [1168, 280, 1.3, 0.85],
              [208, 252, 1.3, 0.85],
              [898, 150, 1.2, 0.8],
            ].map(([cx, cy, r, op], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} opacity={op}>
                <animate
                  attributeName="opacity"
                  values={`${op * 0.4};${op};${op * 0.4}`}
                  dur={`${2.5 + (i % 5) * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          {/* 4. Distant Birds in V-Formation Gliding Across Dusk Sky */}
          <g fill="none" stroke="#25163a" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
            <path d="M480,180 Q485,176 490,180 Q495,176 500,180" />
            <path d="M505,173 Q509,170 514,173 Q518,170 523,173" />
            <path d="M528,168 Q532,165 536,168 Q540,165 544,168" />
            <path d="M548,174 Q552,171 556,174 Q560,171 564,174" />
            <path d="M568,181 Q572,178 576,181 Q580,178 584,181" />
            <path d="M820,220 Q824,217 828,220 Q832,217 836,220" />
            <path d="M842,215 Q846,212 850,215 Q854,212 858,215" />
          </g>

          {/* 5. Western Far Hill (Left) with Peepal, Mango, Village Hut, Cow */}
          <g>
            <path
              d="M-30,730 C70,726 150,721 250,722 C350,723 450,728 540,733 C580,749 615,765 660,782 L700,900 L-30,900 Z"
              fill="url(#farHillLeft)"
            />
            {/* Distant trees on left ridge */}
            <image href="/peepal2-far.svg" x="2" y="622" width="192" height="104" preserveAspectRatio="xMidYMax meet" />
            <image href="/mango-far.svg" x="248" y="635" width="104" height="92" preserveAspectRatio="xMidYMax meet" />
            
            {/* The Rural Village Hut */}
            <image href="/hut-far.svg" x="386" y="690" width="58" height="48" preserveAspectRatio="xMidYMax meet" />
            
            {/* Distant cattle on the ridge */}
            <image href="/cow3-sil.png" x="200" y="709" width="63" height="47" preserveAspectRatio="xMidYMax meet" transform="matrix(-1 0 0 1 464 0)" />

            {/* Hut Lit Window (Warm Lantern Light) */}
            <ellipse cx="427.8" cy="715.3" rx="7" ry="5.5" fill="url(#windowGlow)">
              <animate attributeName="opacity" values="0.6;0.9;0.65;0.85;0.6" dur="5s" repeatCount="indefinite" />
            </ellipse>
            <circle cx="427.8" cy="715.3" r="2.2" fill="#f5a843" />

            {/* Rising Chulha Smoke Puffs */}
            <circle cx="408" cy="695" r="2.5" fill="url(#smokeGrad)" opacity="0">
              <animateMotion
                path="M0,0 C1,-10 -2,-20 0.5,-31 C3,-43 1,-53 7,-64 C12,-73 17,-81 24,-88"
                dur="11s"
                repeatCount="indefinite"
              />
              <animate attributeName="opacity" values="0;0.7;0.5;0" dur="11s" repeatCount="indefinite" />
              <animate attributeName="r" values="2;4;6.5" dur="11s" repeatCount="indefinite" />
            </circle>
            <circle cx="408" cy="695" r="2.5" fill="url(#smokeGrad)" opacity="0">
              <animateMotion
                path="M0,0 C1,-10 -2,-20 0.5,-31 C3,-43 1,-53 7,-64 C12,-73 17,-81 24,-88"
                dur="11s"
                begin="-5.5s"
                repeatCount="indefinite"
              />
              <animate attributeName="opacity" values="0;0.7;0.5;0" dur="11s" begin="-5.5s" repeatCount="indefinite" />
              <animate attributeName="r" values="2;4;6.5" dur="11s" begin="-5.5s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* 6. Eastern Far Hill (Right) with Hilltop Mandir & Ridge */}
          <g>
            <path
              d="M1005,900 L1005,800 C1040,774 1098,737 1175,696 C1235,666 1258,660 1295,661 C1357,679 1418,698 1520,722 L1520,900 Z"
              fill="url(#farHillRight)"
            />
            {/* Distant trees framing ridge */}
            <image href="/ashok-far.svg" x="1156" y="660" width="36" height="38" preserveAspectRatio="xMidYMax meet" />
            <image href="/mango-far.svg" x="1292" y="640" width="46" height="42" preserveAspectRatio="xMidYMax meet" />
            <image href="/ashok-far.svg" x="1340" y="650" width="36" height="36" preserveAspectRatio="xMidYMax meet" />

            {/* Hilltop Mandir Halo Glow */}
            <ellipse cx="1272" cy="615" rx="56" ry="64" fill="url(#mandirGlow)">
              <animate attributeName="opacity" values="0.75;0.95;0.75" dur="4s" repeatCount="indefinite" />
            </ellipse>

            {/* The Hilltop Mandir with flying dhwaja (flag) */}
            <image href="/mandir2-dusk.svg" x="1226" y="567" width="78" height="96" preserveAspectRatio="xMidYMax meet" />
            
            {/* Lit Diya at temple stairs */}
            <circle cx="1250" cy="720" r="1.5" fill="#f5a843">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* 7. Foreground Crest Ridge */}
          <path
            d="M0,786 C150,756 310,766 460,736 C600,708 700,696 810,684 C870,676 915,679 955,686 C1015,696 1075,720 1160,742 C1250,766 1330,776 1410,780 L1440,782 L1440,900 L0,900 Z"
            fill="url(#ridgeFront)"
          />
          <path
            d="M0,786 C150,756 310,766 460,736 C600,708 700,696 810,684 C870,676 915,679 955,686 C1015,696 1075,720 1160,742 C1250,766 1330,776 1410,780"
            fill="none"
            stroke="url(#ridgeRim)"
            strokeWidth="1.6"
          />

          {/* 8. The Great Banyan Tree in Center (The Masterpiece Vector from reference) */}
          <image
            href="/tree-clean.svg"
            x="440"
            y="340"
            width="580"
            height="520"
            preserveAspectRatio="xMidYMax meet"
          />

          {/* 9. Mango & Ashok trees on the crest */}
          <image
            href="/mango-dusk.svg"
            x="898"
            y="522"
            width="224"
            height="208"
            preserveAspectRatio="xMidYMax meet"
            transform="matrix(-1 0 0 1 2020 0)"
          />

          {/* 10. Mother Cow and Calf Under the Banyan Tree */}
          <image
            href="/cow5-sil.png"
            x="807"
            y="614"
            width="76"
            height="72"
            preserveAspectRatio="xMidYMax meet"
            transform="matrix(-1 0 0 1 1690 0)"
          />
          <image
            href="/cow2-sil.png"
            x="878"
            y="640"
            width="45"
            height="46"
            preserveAspectRatio="xMidYMax meet"
          />

          {/* 11. The Sacred Lit Diya at the Foot of the Banyan Tree */}
          <g transform="translate(710, 800) scale(0.9)">
            {/* Diya Glow Aura */}
            <ellipse cx="0" cy="3" rx="34" ry="7.5" fill="url(#diyaGlow)">
              <animate attributeName="opacity" values="0.5;0.75;0.5" dur="2.4s" repeatCount="indefinite" />
            </ellipse>
            <circle cx="0" cy="-8" r="22" fill="url(#diyaGlow)">
              <animate attributeName="opacity" values="0.55;0.8;0.55" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Diya Clay Pot */}
            <path
              d="M-9,0 C-9.6,3 -5,6.8 0,7 C5,6.8 9.6,3 9,0 A9,2.4 0 0 0 -9,0 Z"
              fill="url(#clayGrad)"
              stroke="#1a0e06"
              strokeWidth="0.4"
            />
            <ellipse cx="0" cy="0" rx="7.4" ry="1.9" fill="#140c07" />

            {/* Flickering Animated Diya Flame */}
            <path fill="url(#diyaFlameGrad)">
              <animate
                attributeName="d"
                values="
                  M0,-2.8 C-2.3,-4.5 -2.5,-7.5 -1.2,-10 C-0.7,-11 -0.3,-12 0,-12 C0.3,-12 0.7,-11 1.2,-10 C2.5,-7.5 2.3,-4.5 0,-2.8 Z;
                  M0,-2.8 C-1.9,-4.5 -1.9,-7.5 -0.4,-9.9 C0.1,-10.8 0.7,-11.7 1.2,-11.9 C1.1,-10.9 1.0,-10 1.4,-9.6 C2.6,-7.4 1.6,-4.5 0,-2.8 Z;
                  M0,-2.8 C-2.3,-4.5 -2.5,-7.5 -1.2,-10 C-0.7,-11 -0.3,-12 0,-12 C0.3,-12 0.7,-11 1.2,-10 C2.5,-7.5 2.3,-4.5 0,-2.8 Z;
                  M0,-2.8 C-2.6,-4.5 -1.6,-7.4 -1.4,-9.6 C-1.0,-10 -1.1,-10.9 -1.2,-11.9 C-0.7,-11.7 -0.1,-10.8 0.4,-9.9 C1.9,-7.5 1.9,-4.5 0,-2.8 Z;
                  M0,-2.8 C-2.3,-4.5 -2.5,-7.5 -1.2,-10 C-0.7,-11 -0.3,-12 0,-12 C0.3,-12 0.7,-11 1.2,-10 C2.5,-7.5 2.3,-4.5 0,-2.8 Z
                "
                dur="2.2s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* 12. Bottom Darkness Seam */}
          <path
            d="M0,865 Q140,845 280,858 Q420,838 560,850 Q700,836 840,846 Q980,836 1120,848 Q1260,838 1380,852 Q1420,858 1440,862 L1440,900 L0,900 Z"
            fill="#110d28"
          />
        </svg>
      </div>
    </div>
  );
}
