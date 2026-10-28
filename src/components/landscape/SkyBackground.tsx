import { COLORS, SKY_STOPS } from "../../config/landscape.config";
export function SkyBackground() {
  const g = SKY_STOPS.map(([p, k]) => `${COLORS[k]} ${p}%`).join(", ");
  return (<><div className="tl-fill" style={{ background: `linear-gradient(180deg, ${g})` }} /><div className="tl-fill tl-noise" /></>);
}
