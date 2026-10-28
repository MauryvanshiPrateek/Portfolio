import { fill } from "../../lib/svg";
import type { WindVars } from "../../types/landscape.types";

export interface CowProps { x: number; y?: number; scale?: number; flip?: boolean; tone?: "cattle" | "cattle2"; tailPer?: number; headPer?: number; delay?: number; animated?: boolean; /** vertical stretch for taller zebu proportions */ tall?: number }
/**
 * Local frame ~0-112 x 0-62 facing LEFT, hooves at y=60. x,y = ground point under the body centre.
 * Zebu silhouette: shoulder hump, dewlap, forward horns. Only tail and head move; legs never do.
 */
export function CowSilhouette({ x, y = 0, scale = 1, flip, tone = "cattle", tailPer = 7, headPer = 9, delay = 0, animated = true, tall = 1 }: CowProps) {
  const v = (per: number, o: string): WindVars => ({ transformOrigin: o, "--per": `${per}s`, "--delay": `-${delay}s` });
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale * tall}) translate(-56 -60)`}>
      {/* torso + legs */}
      <path style={fill(tone)} d="M34 20C40 13 50 11 57 13C61 5 70 3 76 9C80 13 84 14 92 14C102 14 108 18 110 25C111 30 108 35 104 37L103 60H98L97 41C91 42 85 42 79 41L78 60H72L71 41C63 42 54 42 46 41L45 60H39L38 41C35 37 33 30 34 20Z" />
      {/* tail */}
      <path d="M108 22C112 30 112 42 109 54" fill="none" stroke={`var(--${tone})`} strokeWidth="2.2" strokeLinecap="round" className={animated ? "tl-cow-tail" : undefined} style={v(tailPer, "108px 20px")} />
      {/* head, neck, dewlap, horns, ear */}
      <g className={animated ? "tl-cow-head" : undefined} style={v(headPer, "34px 22px")}>
        <path style={fill(tone)} d="M38 16C30 16 22 20 16 25C10 28 5 32 3 38L4 43L10 44C15 42 20 38 24 34C28 38 32 40 38 38C40 32 40 24 38 16Z" />
        <path style={fill(tone)} d="M17 24C12 18 12 11 18 7C17 12 18 17 21 22ZM26 20L34 16L31 23Z" />
      </g>
    </g>
  );
}
