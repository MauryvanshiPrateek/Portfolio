"use client";
import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BREAKPOINTS, TRANSITION as T } from "../../config/landscape.config";
import { setLandscapeProgress } from "../../hooks/useLandscapeProgress";
import type { LayerName } from "../../types/landscape.types";

/**
 * Scroll-scrubbed transition. Desktop: stage is pinned and each depth layer translates by
 * parallax * travel inside its own progress window. Mobile: no pin, shorter travel.
 * Reduced motion: nothing is registered (normal page flow, static scene).
 */
export function SceneTransition({ stageRef, enabled }: { stageRef: RefObject<HTMLElement | null>; enabled: boolean }) {
  useEffect(() => { // passive effect: the parent <section> ref is only attached after child layout effects run
    const root = stageRef.current;
    if (!enabled || !root) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const build = (pin: boolean) => {
      const scale = pin ? 1 : T.mobileTravelScale, screens = pin ? T.pinScreens : T.mobileScreens;
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root, start: "top top", end: () => (pin ? `+=${window.innerHeight * screens}` : "bottom top"), pin, pinSpacing: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true, onUpdate: (s) => { setLandscapeProgress(s.progress); root.dataset.spent = s.progress >= 0.999 ? "true" : "false"; } },
      });
      root.querySelectorAll<SVGGElement>("[data-layer]").forEach((el) => {
        const L = T.layers[el.dataset.layer as LayerName];
        tl.to(el, { x: -L.parallax * T.travel * scale, ease: "power1.inOut", duration: L.to - L.from }, L.from);
      });
      tl.to(root.querySelectorAll("[data-cue]"), { autoAlpha: 0, y: -18, duration: T.cueFade[1] - T.cueFade[0] }, T.cueFade[0]);
      tl.to(root.querySelector(".tl-fade"), { autoAlpha: 0, yPercent: -4, duration: T.sceneFade[1] - T.sceneFade[0] }, T.sceneFade[0]);
      tl.set({}, {}, 1); // timeline length = exactly 1 so scroll progress == timeline progress
    };
    mm.add(`(min-width: ${BREAKPOINTS.mobile}px)`, () => build(true));
    mm.add(`(max-width: ${BREAKPOINTS.mobile - 1}px)`, () => build(false));
    return () => { mm.revert(); delete root.dataset.spent; }; // kills timelines + ScrollTriggers, clears inline styles and the flag
  }, [stageRef, enabled]);
  return null;
}
