import { fill } from "../../lib/svg";
/** Origin = bottom centre of the hut. */
export function VillageHut({ animated = true }: { animated?: boolean }) {
  return (
    <g>
      <ellipse cx="0" cy="2" rx="52" ry="4" style={fill("shadow")} opacity=".5" />
      <rect x="-38" y="-34" width="76" height="34" style={fill("cattle2")} />
      <path d="M-52 -28L-15 -68H15L52 -28Q26 -24 0 -26Q-26 -24 -52 -28Z" style={fill("cattle")} />
      <path d="M-52 -28Q-26 -24 0 -26Q26 -24 52 -28" fill="none" stroke="var(--edgeLight)" strokeWidth=".8" opacity=".5" />
      <path d="M-24 0V-26Q-18 -31 -12 -26V0Z" style={fill("shadow")} />
      <radialGradient id="tl-win"><stop offset="0" stopColor="var(--window)" stopOpacity=".5" /><stop offset="1" stopColor="var(--window)" stopOpacity="0" /></radialGradient>
      <g className={animated ? "tl-breathe" : undefined} style={{ ["--per" as string]: "7s" }}>
        <circle cx="15" cy="-18" r="14" fill="url(#tl-win)" />
        <rect x="10" y="-23" width="10" height="9" rx="1" style={fill("window")} />
      </g>
    </g>
  );
}
