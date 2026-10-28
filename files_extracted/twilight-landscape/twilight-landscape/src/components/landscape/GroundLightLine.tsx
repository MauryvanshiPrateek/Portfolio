import { COLORS, GROUND_PATH } from "../../config/landscape.config";
/** Shares GROUND_PATH with ForegroundTerrain and lives in the same parallax group, so it can't detach. */
export function GroundLightLine({ animated = true }: { animated?: boolean }) {
  return (
    <g fill="none" strokeLinecap="round">
      <linearGradient id="tl-line" gradientUnits="userSpaceOnUse" x1="-600" x2="2520">
        <stop offset="0" stopColor={COLORS.amber} stopOpacity=".55" /><stop offset=".5" stopColor={COLORS.amberHl} /><stop offset="1" stopColor={COLORS.amber} stopOpacity=".55" />
      </linearGradient>
      <path d={GROUND_PATH} stroke={COLORS.amber} strokeWidth="4" opacity=".16" className={animated ? "tl-line-glow" : undefined} style={{ ["--per" as string]: "8s" }} />
      <path d={GROUND_PATH} stroke="url(#tl-line)" strokeWidth="1.6" />
    </g>
  );
}
