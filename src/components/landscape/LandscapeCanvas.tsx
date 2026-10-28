import type { ReactNode } from "react";
import { MOBILE_VIEWBOX, SCENE, TABLET_PORTRAIT_VIEWBOX, TABLET_VIEWBOX } from "../../config/landscape.config";

export type SceneView = "desktop" | "tablet" | "tabletPortrait" | "mobile";
const VIEWBOX: Record<SceneView, string> = { desktop: `0 0 ${SCENE.w} ${SCENE.h}`, tablet: TABLET_VIEWBOX, tabletPortrait: TABLET_PORTRAIT_VIEWBOX, mobile: MOBILE_VIEWBOX };

/** Master SVG, anchored to the bottom of the stage. Fit by width, so no side is ever cropped (sky fills any extra height). */
export function LandscapeCanvas({ view, children }: { view: SceneView; children: ReactNode }) {
  return (
    <svg className="tl-canvas" data-view={view} viewBox={VIEWBOX[view]} preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}
/** Single positioning primitive used by the composition root. anchor = authored origin of the child. */
export function Placed({ x, y, scale = 1, anchor = [0, 0], opacity = 1, children }: { x: number; y: number; scale?: number; anchor?: readonly [number, number]; opacity?: number; children: ReactNode }) {
  return <g transform={`translate(${x} ${y}) scale(${scale}) translate(${-anchor[0]} ${-anchor[1]})`} opacity={opacity}>{children}</g>;
}
