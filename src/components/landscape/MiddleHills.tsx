import { fill } from "../../lib/svg";
/** Central mound behind the banyan (cattle ridge) + the temple hill. Both live in the "mid" parallax group. */
export const MiddleHills = () => (
  <g>
    <defs>
      <linearGradient id="tl-temple-hill" x1="0" y1="0" x2="0.35" y2="1"><stop offset="0" stopColor="var(--hillFar)" /><stop offset=".7" stopColor="var(--hillMid)" /></linearGradient>
    </defs>
    {/* temple hill: rounded crown at x~1650 */}
    <path d="M1380 752C1470 736 1540 690 1600 618C1632 598 1672 594 1712 598C1790 612 1850 650 1960 690C2100 730 2400 746 3200 742V800H1380Z" fill="url(#tl-temple-hill)" />
    {/* central mound */}
    <path d="M520 738C640 712 800 664 960 640C1040 628 1090 620 1140 620C1230 622 1300 640 1420 676C1520 706 1620 730 1760 742V800H520Z" style={fill("hillMid")} />
  </g>
);
