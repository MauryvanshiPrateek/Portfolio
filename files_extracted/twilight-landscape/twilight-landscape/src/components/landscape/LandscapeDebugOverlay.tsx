import { OBJECTS, SCENE, TRANSITION } from "../../config/landscape.config";
import { useLandscapeProgress } from "../../hooks/useLandscapeProgress";
/** HTML readout. Enable with NEXT_PUBLIC_LANDSCAPE_DEBUG=true (or the `debug` prop). */
export function LandscapeDebugOverlay() {
  const progress = useLandscapeProgress();
  const phase = [...TRANSITION.phases].reverse().find(([p]) => progress >= p)?.[1];
  return <div className="tl-debug">progress {progress.toFixed(3)} · phase {phase}</div>;
}
/** SVG marks for object origins and layer labels, drawn inside the canvas. */
export function DebugMarks() {
  const pts: [string, number, number][] = [["banyan", OBJECTS.banyan.x, OBJECTS.banyan.y], ["hut", OBJECTS.hut.x, OBJECTS.hut.y], ["temple", OBJECTS.temple.x, OBJECTS.temple.y], ["cattle", OBJECTS.cattle.x, OBJECTS.cattle.y], ...OBJECTS.trees.map((t, i): [string, number, number] => [`${t.variant}#${i} (${t.layer})`, t.x, t.y])];
  return (
    <g fontSize="12" fill="#9f9" stroke="#9f9" strokeWidth="1">
      <rect x="0" y="0" width={SCENE.w} height={SCENE.h} fill="none" strokeDasharray="6" />
      {pts.map(([n, x, y]) => <g key={n}><path d={`M${x - 6} ${y}H${x + 6}M${x} ${y - 6}V${y + 6}`} /><text x={x + 8} y={y - 6} stroke="none">{n}</text></g>)}
    </g>
  );
}
