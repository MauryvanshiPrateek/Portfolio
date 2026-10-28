import type { CSSProperties } from "react";
import { COLORS } from "../config/landscape.config";

export type Rnd = () => number;
export const mulberry32 = (seed: number): Rnd => () => {
  seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
export const range = (r: Rnd, [a, b]: readonly number[]) => a + r() * (b - a);
export const fill = (name: keyof typeof COLORS): CSSProperties => ({ fill: `var(--${name})` });

export const paletteVars = (): CSSProperties =>
  Object.fromEntries(Object.entries(COLORS).map(([k, v]) => [`--${k}`, v])) as CSSProperties;

const f = (n: number) => n.toFixed(1);

/** Closed organic blob (Catmull-Rom -> cubic bezier) around an ellipse. */
export function blobPath(cx: number, cy: number, rx: number, ry: number, r: Rnd, n = 11, jag = 0.16) {
  const p = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2, k = 1 - jag / 2 + r() * jag;
    return [cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k];
  });
  let d = `M${f(p[0][0])} ${f(p[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = p[(i + n - 1) % n], p1 = p[i], p2 = p[(i + 1) % n], p3 = p[(i + 2) % n];
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + "Z";
}

/** One teardrop leaf from base point at angle `a` (radians). */
export function leafD(x: number, y: number, a: number, len: number, w: number) {
  const tx = x + Math.cos(a) * len, ty = y + Math.sin(a) * len;
  const mx = (x + tx) / 2, my = (y + ty) / 2, px = -Math.sin(a) * w, py = Math.cos(a) * w;
  return `M${f(x)} ${f(y)}Q${f(mx + px)} ${f(my + py)} ${f(tx)} ${f(ty)}Q${f(mx - px)} ${f(my - py)} ${f(x)} ${f(y)}Z`;
}

/** Palmate "star" crown: n narrow leaves radiating from (cx,cy), compiled into ONE path. */
export function starD(cx: number, cy: number, r: number, n: number, rnd: Rnd, from = 0, to = Math.PI * 2) {
  let d = "";
  for (let i = 0; i < n; i++) {
    const a = from + ((i + 0.5) / n) * (to - from) + (rnd() - 0.5) * 0.28;
    d += leafD(cx, cy, a, r * (0.72 + rnd() * 0.36), r * (0.19 + rnd() * 0.06));
  }
  return d;
}
