import { STARS } from "../../config/landscape.config";
import { mulberry32, range } from "../../lib/svg";
import type { WindVars } from "../../types/landscape.types";

const R = mulberry32(11);
const ALL = (() => {
  const out: { x: number; y: number; r: number; o: number; per: number; delay: number }[] = [];
  while (out.length < STARS.desktop) {
    const x = 30 + R() * 1860, y = 20 + R() * 360;
    if (Math.hypot((x - 962) / 360, (y - 300) / 210) < 1) continue; // keep canopy negative space
    out.push({ x, y, r: 0.7 + R() * 1.3, o: R() < 0.15 ? 0.6 + R() * 0.1 : 0.25 + R() * 0.3, per: range(R, STARS.period), delay: R() * 9 });
  }
  return out;
})();

/** Own full-bleed SVG so the sky never moves with the scroll parallax. */
export function StarField({ mobile = false, animated = true }: { mobile?: boolean; animated?: boolean }) {
  const n = mobile ? STARS.mobile : STARS.desktop, tw = mobile ? STARS.mobileTwinkling : STARS.twinkling;
  return (
    <svg className="tl-fill" viewBox="0 0 1920 800" preserveAspectRatio="xMidYMin slice" aria-hidden="true" focusable="false">
      {ALL.slice(0, n).map((s, i) => {
        const twinkles = animated && i % Math.ceil(n / tw) === 0; // spreads exactly `tw` stars across the field
        const style: WindVars = { fill: "var(--star)", opacity: s.o, ...(twinkles ? { "--lo": 0.25, "--hi": Math.min(0.6, s.o + 0.25), "--per": `${s.per}s`, "--delay": `-${s.delay}s` } : null) };
        return <circle key={i} cx={s.x} cy={s.y} r={s.r} className={twinkles ? "tl-twinkle" : undefined} style={style} />;
      })}
    </svg>
  );
}
