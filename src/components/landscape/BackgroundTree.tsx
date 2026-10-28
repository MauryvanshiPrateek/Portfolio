import { COLORS } from "../../config/landscape.config";
import { blobPath, mulberry32, starD } from "../../lib/svg";
import type { WindVars } from "../../types/landscape.types";

export type TreeVariant = "broadLeft" | "sparse" | "medium" | "ornamental";
type Lobe = [number, number, number, number];
type Star = [number, number, number];
interface Def { trunk: string; top?: [number, number]; limbW?: number; lobes?: Lobe[]; stars?: Star[]; ferns?: boolean; canopy: string; trunkC: string; detail: string }

/** Perimeter-scalloped crown: ring of lobes around an ellipse + a solid core. */
const crown = (cx: number, cy: number, rx: number, ry: number, n: number, lr: number): Lobe[] => [
  [cx, cy, rx * 0.86, ry * 0.8],
  ...Array.from({ length: n }, (_, i): Lobe => { const a = (i / n) * Math.PI * 2 + 0.3; return [cx + Math.cos(a) * rx * 0.78, cy + Math.sin(a) * ry * 0.74, lr * (0.8 + 0.4 * ((i * 7) % 5) / 4), lr * 0.78]; }),
];

const DEFS: Record<TreeVariant, Def> = {
  broadLeft: { trunk: "M-11 0C-10-24-8-42-15-66L-4-62L0-72L6-62L17-68C11-44 10-24 13 0Z", lobes: crown(0, -100, 118, 58, 14, 34), canopy: "var(--treeFar)", trunkC: "var(--treeFar)", detail: "var(--treeFarDetail)" },
  sparse: { trunk: "M-4 0C-4-24-2-38-3-50L3-50C3-38 4-24 5 0Z", top: [0, -50], limbW: 2.6, stars: [[-46, -84, 27], [0, -104, 29], [46, -86, 27], [-24, -62, 19], [26, -60, 19]], canopy: "var(--tree)", trunkC: "var(--tree)", detail: "var(--treeDetail)" },
  medium: { trunk: "M-10 0C-8-26-7-52-8-82L8-82C7-52 8-26 11 0Z", top: [0, -80], limbW: 3.6, stars: [[-104, -148, 46], [-58, -196, 50], [6, -216, 54], [68, -196, 50], [108, -150, 46], [-18, -146, 48], [52, -138, 42], [-72, -102, 36], [84, -104, 36]], ferns: true, canopy: "var(--trunk2)", trunkC: "var(--trunk)", detail: "var(--canopyMid)" },
  ornamental: { trunk: "M-2 0L-1.4-30L1.4-30L2 0Z", lobes: [[0, -42, 17, 15], [-9, -32, 10, 9], [10, -33, 10, 9]], canopy: "var(--tree)", trunkC: "var(--tree)", detail: "var(--treeDetail)" },
};

export interface BackgroundTreeProps {
  variant: TreeVariant; x: number; y: number; scale?: number;
  canopyColor?: string; trunkColor?: string; animationEnabled?: boolean; seed?: number;
}
/** Local origin = base of trunk. Parallax is applied by the parent layer group. Only a handful of crown pieces sway. */
export function BackgroundTree({ variant, x, y, scale = 1, canopyColor, trunkColor, animationEnabled = true, seed = 3 }: BackgroundTreeProps) {
  const d = DEFS[variant], r = mulberry32(seed + Math.round(x)), canopy = canopyColor ?? d.canopy, trunkC = trunkColor ?? d.trunkC;
  const sway = (ox: number, oy: number, i: number): WindVars | undefined =>
    animationEnabled && i % 3 === 1 ? { transformOrigin: `${ox}px ${oy}px`, "--rot": `${0.3 + r() * 0.7}deg`, "--dx": "0.4px", "--per": `${7 + r() * 4}s`, "--delay": `-${r() * 10}s` } : undefined;
  const wrap = (key: string | number, s: WindVars | undefined, kids: React.ReactNode) => <g key={key} className={s ? "tl-sway" : undefined} style={s}>{kids}</g>;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d={d.trunk} fill={trunkC} />
      {d.top && d.stars?.map(([cx, cy], i) => <path key={i} d={`M${d.top![0]} ${d.top![1]}Q${cx * 0.3} ${(d.top![1] + cy) / 2} ${cx} ${cy + 6}`} fill="none" stroke={trunkC} strokeWidth={d.limbW} strokeLinecap="round" />)}
      {d.lobes?.map(([cx, cy, rx, ry], i) => wrap(i, sway(cx, cy + ry, i), <>
        <path d={blobPath(cx, cy, rx, ry, r, 10, 0.3)} fill={canopy} />
        {rx > 30 && <path d={blobPath(cx + 5, cy - 5, rx * 0.55, ry * 0.5, r, 8, 0.3)} fill={d.detail} opacity=".4" />}
      </>))}
      {d.stars?.map(([cx, cy, sr], i) => wrap(`s${i}`, sway(cx, cy + sr * 0.4, i), <>
        <path d={starD(cx, cy, sr, 11, r)} fill={canopy} />
        {sr > 34 && <path d={starD(cx, cy, sr * 0.62, 9, r, 0.2)} fill={d.detail} opacity=".55" />}
      </>))}
      {d.ferns && [-30, 24].map((fx, i) => <path key={fx} d={starD(fx, -2, 24 - i * 4, 8, r, -Math.PI * 0.95, -Math.PI * 0.05)} fill={canopyColor ?? COLORS.trunk} />)}
    </g>
  );
}
