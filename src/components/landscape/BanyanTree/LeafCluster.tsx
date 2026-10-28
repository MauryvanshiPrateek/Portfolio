import { memo, useMemo } from "react";
import type { COLORS } from "../../../config/landscape.config";
import { fill, leafD, mulberry32 } from "../../../lib/svg";
import type { WindVars } from "../../../types/landscape.types";

export interface ClusterWind { rot: number; dx: number; per: number; delay: number }
export interface LeafClusterProps {
  /** Attachment point: the sway rotates around this anchor, so leaves never detach. */
  x: number; y: number; r: number; seed: number;
  color: keyof typeof COLORS;
  wind?: ClusterWind | null;
}

/** 7-11 leaves baked into ONE path; the whole twig moves as a unit. */
export const LeafCluster = memo(function LeafCluster({ x, y, r, seed, color, wind }: LeafClusterProps) {
  const d = useMemo(() => {
    const rnd = mulberry32(seed), n = 7 + Math.floor(rnd() * 5), k = 0.8 + r / 60;
    let s = "";
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (rnd() - 0.5) * 2.6, dist = rnd() * r;
      s += leafD(x + Math.cos(a) * dist * 1.1, y + Math.sin(a) * dist * 0.9 - r * 0.1, a + (rnd() - 0.5) * 1.2, (5 + rnd() * 6) * k, 1.6 + rnd() * 1.6);
    }
    return s;
  }, [x, y, r, seed]);
  if (!wind) return <path d={d} style={fill(color)} />;
  const style: WindVars = { transformOrigin: `${x}px ${y}px`, "--rot": `${wind.rot}deg`, "--dx": `${wind.dx}px`, "--per": `${wind.per}s`, "--delay": `-${wind.delay}s` };
  return <g className="tl-sway" style={style}><path d={d} style={fill(color)} /></g>;
});
