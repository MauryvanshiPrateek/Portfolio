import { useMemo } from "react";
import { WIND } from "../../../config/landscape.config";
import { mulberry32, range } from "../../../lib/svg";
import type { WindVars } from "../../../types/landscape.types";

interface Root { d: string; fill: string; sway?: WindVars }
const FILLS = ["var(--trunkDeep)", "var(--trunk)", "var(--trunk)", "var(--trunk2)"];

function build(): { back: Root[]; front: Root[] } {
  const r = mulberry32(21), back: Root[] = [], front: Root[] = [];
  const make = (x0: number, y0: number, len: number, w: number, thin: boolean, i: number) => {
    const lean = (r() - 0.5) * 60, x1 = x0 + lean, y1 = y0 + len, wb = Math.max(0.8, w * 0.3);
    const c1x = x0 + lean * 0.1 + (r() - 0.5) * 14, c2x = x0 + lean * 0.8 + (r() - 0.5) * 12;
    const d = `M${x0 - w / 2} ${y0}C${c1x - w / 3} ${y0 + len * 0.35} ${c2x - w / 4} ${y0 + len * 0.7} ${x1 - wb / 2} ${y1}L${x1 + wb / 2} ${y1}C${c2x + w / 4} ${y0 + len * 0.7} ${c1x + w / 3} ${y0 + len * 0.35} ${x0 + w / 2} ${y0}Z`;
    // only a few thin roots sway; thick roots are static
    const sway: WindVars | undefined = thin && i % 3 === 0 ? { transformOrigin: `${x0}px ${y0}px`, "--rot": `${WIND.roots.rot * (0.5 + r() * 0.5)}deg`, "--dx": "0px", "--per": `${range(r, WIND.roots.per)}s`, "--delay": `-${r() * 10}s` } : undefined;
    (i % 3 === 0 ? back : front).push({ d, fill: FILLS[Math.floor(r() * FILLS.length)], sway });
  };
  for (let i = 0; i < 16; i++) make(775 + (i / 15) * 390 + (r() - 0.5) * 24, 470 + r() * 30, 120 + r() * 160, 3 + r() * 3.4, false, i);
  for (let i = 0; i < 10; i++) make(790 + r() * 360, 475 + r() * 25, 90 + r() * 140, 1.6, true, i);
  return { back, front };
}
const ROOTS = build();

export function AerialRoots({ part, animated = true }: { part: "back" | "front"; animated?: boolean }) {
  const list = useMemo(() => ROOTS[part], [part]);
  return (
    <g>
      {list.map((r) => <path key={r.d} d={r.d} className={animated && r.sway ? "tl-sway" : undefined} style={{ fill: r.fill, ...(animated ? r.sway : null) }} />)}
    </g>
  );
}
