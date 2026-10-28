import { fill } from "../../lib/svg";
/** Lightest, lowest-contrast ridge: the left plateau the big tree and cow stand on. Fades darker toward the ground. */
export const DistantHills = () => (
  <g>
    <defs>
      <linearGradient id="tl-far" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--hillFar)" /><stop offset="1" stopColor="var(--hillMid)" /></linearGradient>
    </defs>
    <path d="M-600 690C-300 680 -100 686 120 684C300 680 440 672 560 682C700 694 800 700 900 716C1200 700 1600 690 2000 700C2300 708 2500 696 2800 704V800H-600Z" fill="url(#tl-far)" />
    <path d="M-600 700C-200 694 100 704 400 700C500 698 580 708 700 722V800H-600Z" style={fill("hillMid")} opacity=".35" />
  </g>
);
