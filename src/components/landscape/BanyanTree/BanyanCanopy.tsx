import { COLORS, WIND } from "../../../config/landscape.config";
import { blobPath, fill, mulberry32, range } from "../../../lib/svg";
import { LeafCluster, type ClusterWind } from "./LeafCluster";

const C = { cx: 962, cy: 345, rx: 255, ry: 105 };
type Lobe = { cx: number; cy: number; rx: number; ry: number; k: number };
interface Cluster { x: number; y: number; r: number; seed: number; color: keyof typeof COLORS; zone: "inner" | "outer" | "twig"; u: number; wind: ClusterWind }

function generate() {
  const r = mulberry32(7), lobes: Lobe[] = [];
  for (let i = 0; i < 18; i++) { // asymmetric spiral fill of the dome
    const t = Math.sqrt((i + 0.5) / 18) * 0.95, a = i * 2.399, c = Math.cos(a);
    const rad = 95 - 55 * t + r() * 20;
    lobes.push({ cx: C.cx + C.rx * t * c * (c > 0 ? 1.04 : 0.94), cy: C.cy + C.ry * t * Math.sin(a), rx: rad * 1.2, ry: rad * 0.85, k: t });
  }
  for (let i = 0; i < 7; i++) lobes.push({ cx: 765 + i * 62 + r() * 20, cy: 466 + r() * 26, rx: 40 + r() * 20, ry: 26 + r() * 12, k: 1 }); // ragged lower edge
  const back = lobes.map((l) => blobPath(l.cx, l.cy, l.rx * 1.08, l.ry * 1.08, r));
  const mid = lobes.map((l) => blobPath(l.cx + 3, l.cy + 2, l.rx * 0.9, l.ry * 0.9, r));
  const front = lobes.filter((l) => l.k > 0.55).map((l) => blobPath(l.cx - 2, l.cy - l.ry * 0.25, l.rx * 0.6, l.ry * 0.55, r));

  const clusters: Cluster[] = [];
  const add = (n: number, rMin: number, rMax: number, rim: boolean, twig: boolean, tones: (keyof typeof COLORS)[]) => {
    for (let i = 0; i < n; i++) {
      const l = lobes[Math.floor(r() * lobes.length)], a = r() * Math.PI * 2, rad = rim ? 0.55 + r() * 0.35 + (twig ? 0.12 : 0) : Math.sqrt(r());
      const x = l.cx + Math.cos(a) * l.rx * rad, y = l.cy + Math.sin(a) * l.ry * rad;
      if (y > 505) continue;
      const d = Math.hypot((x - C.cx) / C.rx, (y - C.cy) / (C.ry + 30)), rr = range(r, [rMin, rMax]);
      const zone = twig ? "twig" : d < 0.6 ? "inner" : "outer", z = WIND.zones[zone];
      const color = r() < 0.04 ? "leafWarm" : tones[Math.floor(r() * tones.length)];
      clusters.push({ x, y: y + rr * 0.4, r: rr, seed: Math.floor(r() * 1e6), color, zone, u: r(),
        wind: { rot: range(r, z.rot), dx: range(r, z.dx), per: range(r, z.per), delay: r() * 11 } });
    }
  };
  add(60, 22, 34, false, false, ["canopy", "canopyMid"]);
  add(50, 16, 26, true, false, ["canopyMid", "leafHl", "canopyMid"]);
  add(12, 9, 14, true, true, ["canopyMid", "leafHl"]);
  return { back, mid, front, clusters };
}
const G = generate();

export interface BanyanCanopyProps { part: "back" | "front"; /** 0-1 multiplier on how many clusters sway (lower on mobile) */ windScale?: number; animated?: boolean }

export function BanyanCanopy({ part, windScale = 1, animated = true }: BanyanCanopyProps) {
  if (part === "back") return <g>{G.back.map((d, i) => <path key={i} d={d} style={fill("canopyBack")} />)}</g>;
  return (
    <g>
      {G.mid.map((d, i) => <path key={i} d={d} style={fill("canopy")} />)}
      {G.front.map((d, i) => <path key={i} d={d} style={fill("canopyMid")} opacity=".85" />)}
      {G.clusters.map((c) => {
        const moves = animated && (c.zone === "twig" || c.u < WIND.zones[c.zone].share * windScale);
        return <LeafCluster key={c.seed} x={c.x} y={c.y} r={c.r} seed={c.seed} color={c.color} wind={moves ? c.wind : null} />;
      })}
    </g>
  );
}
