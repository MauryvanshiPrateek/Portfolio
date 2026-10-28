import type { CSSProperties } from "react";

export interface LandscapeObjectProps {
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
  zIndex?: number;
  parallaxFactor?: number;
  className?: string;
  reducedMotion?: boolean;
}
export type WindVars = CSSProperties & Record<`--${string}`, string | number>;
export type LayerName = "distant" | "mid" | "fore";
