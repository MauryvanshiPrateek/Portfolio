"use client";
import { useEffect, useRef, useState } from "react";
import "../../styles/landscape.css";
import { BREAKPOINTS, DEBUG, OBJECTS, WIND } from "../../config/landscape.config";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { paletteVars } from "../../lib/svg";
import { AtmosphericGlow } from "./AtmosphericGlow";
import { BackgroundTree } from "./BackgroundTree";
import { BANYAN_ANCHOR, BanyanTree } from "./BanyanTree/BanyanTree";
import { BrandMark } from "./BrandMark";
import { CattleGroup } from "./CattleGroup";
import { DistantHills } from "./DistantHills";
import { ForegroundTerrain } from "./ForegroundTerrain";
import { GroundLightLine } from "./GroundLightLine";
import { HilltopTemple } from "./HilltopTemple";
import { DebugMarks, LandscapeDebugOverlay } from "./LandscapeDebugOverlay";
import { LandscapeCanvas, Placed, type SceneView } from "./LandscapeCanvas";
import { CowSilhouette } from "./CowSilhouette";
import { MiddleHills } from "./MiddleHills";
import { SceneTransition } from "./SceneTransition";
import { ScrollCue } from "./ScrollCue";
import { SkyBackground } from "./SkyBackground";
import { StarField } from "./StarField";
import { VillageHut } from "./VillageHut";

export interface TwilightLandscapeProps { debug?: boolean; brandHref?: string; monogram?: string; className?: string }

/** Composition root: the only place objects are positioned. Layers are <g data-layer> groups that SceneTransition translates. */
export function TwilightLandscape({ debug = DEBUG, brandHref, monogram, className }: TwilightLandscapeProps) {
  const stage = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const mobile = useMediaQuery(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);
  const [paused, setPaused] = useState(false);
  const tablet = useMediaQuery(`(max-width: ${BREAKPOINTS.tablet - 1}px)`);
  const portrait = useMediaQuery("(orientation: portrait)");
  const view: SceneView = mobile ? "mobile" : tablet ? (portrait ? "tabletPortrait" : "tablet") : "desktop";

  useEffect(() => { // pause CSS animation when off-screen or the tab is hidden
    const el = stage.current; if (!el) return;
    let visible = true;
    const sync = () => setPaused(!visible || document.hidden);
    // Read the LAST entry: the first callback can report the pre-layout (zero-height) state.
    const io = new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; sync(); });
    io.observe(el); document.addEventListener("visibilitychange", sync);
    return () => { io.disconnect(); document.removeEventListener("visibilitychange", sync); };
  }, []);

  const anim = !reduced, windScale = mobile ? WIND.mobileShare : 1;
  const trees = (layer: string) => OBJECTS.trees.map((t, i) => t.layer === layer && <BackgroundTree key={i} {...t} seed={i + 1} animationEnabled={anim && !mobile} />);
  const { banyan, hut, temple, cattle } = OBJECTS;

  return (
    <section ref={stage} className={`tl-stage ${className ?? ""}`} style={paletteVars()} data-motion={anim ? "on" : "off"} data-paused={paused} aria-label="Illustrated banyan grove at twilight">
      <div className="tl-fade">
        <SkyBackground />
        <AtmosphericGlow />
        <StarField mobile={mobile} animated={anim} />
        <LandscapeCanvas view={view}>
          <g data-layer="distant"><DistantHills />{trees("distant")}
            {!mobile && <CowSilhouette x={OBJECTS.loneCow.x} y={OBJECTS.loneCow.y} scale={OBJECTS.loneCow.scale} tailPer={8} headPer={10} delay={3} animated={anim} />}
          </g>
          <g data-layer="mid">
            <MiddleHills />
            <Placed x={hut.x} y={hut.y} scale={hut.scale}><VillageHut animated={anim} /></Placed>
            {trees("mid")}
            <Placed x={temple.x} y={temple.y} scale={temple.scale}><HilltopTemple /></Placed>
            <Placed x={cattle.x} y={cattle.y} scale={cattle.scale}><CattleGroup animated={anim} /></Placed>
          </g>
          <g data-layer="fore">
            <ForegroundTerrain />
            <GroundLightLine animated={anim} />
            <Placed x={banyan.x} y={banyan.y} scale={banyan.scale} anchor={BANYAN_ANCHOR}><BanyanTree windScale={windScale} animated={anim} /></Placed>
          </g>
          {debug && <DebugMarks />}
        </LandscapeCanvas>
        <ScrollCue />
        <BrandMark href={brandHref} monogram={monogram} />
      </div>
      {debug && <LandscapeDebugOverlay />}
      <SceneTransition stageRef={stage} enabled={anim} />
    </section>
  );
}
