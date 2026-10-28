import { fill } from "../../lib/svg";
/** Origin = bottom centre of the platform. Perfectly symmetric nagara shikhara; static by design. */
const N = 7, hw = (i: number) => 22 * Math.pow(1 - i / (N + 1), 0.8) + 2.5, y0 = (i: number) => -18 - i * 10.5;
const side = (() => {
  const pts: [number, number][] = [];
  for (let i = 0; i < N; i++) { const a = hw(i), b = hw(i + 1), y = y0(i); pts.push([a, y], [a, y - 8], [a + 2, y - 8], [a + 2, y - 10], [b, y - 10.5]); }
  return pts;
})();
const TOWER = `M${-side[0][0]} -14${side.map(([x, y]) => `L${-x} ${y}`).join("")}L0 ${y0(N) - 2}${[...side].reverse().map(([x, y]) => `L${x} ${y}`).join("")}L${side[0][0]} -14Z`;
export function HilltopTemple() {
  return (
    <g>
      <path d="M-36 0V-5H36V0ZM-31 -5V-9H31V-5Z" style={fill("cattle")} />
      <path d={TOWER} style={fill("cattle")} />
      {/* porch (mandapa) with stepped roof, in front of the tower */}
      <path d="M-27 -9V-18H27V-9ZM-30 -18H30L24 -23H-24ZM-22 -23H22L15 -27H-15Z" style={fill("cattle")} />
      <ellipse cx="0" cy={y0(N) - 2.5} rx="6.5" ry="2.6" style={fill("cattle2")} />
      <path d={`M-1.3 ${y0(N) - 5}L-1.9 ${y0(N) - 10}Q0 ${y0(N) - 15} 1.9 ${y0(N) - 10}L1.3 ${y0(N) - 5}ZM-.5 ${y0(N) - 14}L0 ${y0(N) - 21}L.5 ${y0(N) - 14}Z`} style={fill("cattle")} />
      <path d="M-4.5 -9V-15Q0 -20 4.5 -15V-9Z" style={fill("shadow")} />
      <path d="M-9 0H9L11 6H-11Z" style={fill("cattle")} />
      <path d={Array.from({ length: N }, (_, i) => `M${-hw(i) - 2} ${y0(i) - 9}H${hw(i) + 2}`).join("")} stroke="var(--edgeLight)" strokeWidth=".9" opacity=".7" />
      <path d={`M0 -26V${y0(N) - 4}`} stroke="var(--edgeLight)" strokeWidth=".7" opacity=".55" />
    </g>
  );
}
