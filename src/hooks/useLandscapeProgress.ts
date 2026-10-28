import { useSyncExternalStore } from "react";

/** Tiny external store: SceneTransition writes scroll progress (0-1); only subscribers (debug overlay) re-render. */
let value = 0;
const subs = new Set<() => void>();
export const setLandscapeProgress = (p: number) => { if (p === value) return; value = p; subs.forEach((f) => f()); };
export const useLandscapeProgress = () =>
  useSyncExternalStore((cb) => { subs.add(cb); return () => { subs.delete(cb); }; }, () => value, () => 0);
