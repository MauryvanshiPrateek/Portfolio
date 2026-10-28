import type { LayerName } from "../types/landscape.types";

/** Reference frame: ground line ~y735, canopy y172-497, matches the spec coordinates at 1920x800. */
export const SCENE = { w: 1920, h: 800 } as const;
export const BREAKPOINTS = { mobile: 768, tablet: 1100 } as const;
/** Tablet crops the outer edges so the banyan, hut and temple stay legible. */
export const TABLET_VIEWBOX = "260 40 1500 760";
/** Portrait tablets: hut + banyan + cattle + medium tree; temple is cropped out. */
export const TABLET_PORTRAIT_VIEWBOX = "420 80 1000 720";
/** Mobile crops to the banyan instead of shrinking the whole 1920px scene. */
export const MOBILE_VIEWBOX = "700 150 700 650";
export const DEBUG = process.env.NEXT_PUBLIC_LANDSCAPE_DEBUG === "true";

export const COLORS = {
  sky0: "#291640", sky1: "#38204F", sky2: "#512746", sky3: "#78363F", sky4: "#A94728", sky5: "#D65A24", skyGlow: "#EA7A32",
  hillFar: "#4D416F", hillMid: "#30214F", hillFg: "#211735", ground: "#100D25", shadow: "#0A0B16",
  trunkDeep: "#07110F", trunk: "#0B1713", trunk2: "#10201A", branchHl: "#1A2B22",
  canopyBack: "#0B1A14", treeFar: "#3B3060", treeFarDetail: "#4D416F", canopy: "#10231B", canopyMid: "#172D21", leafHl: "#233D2A", leafWarm: "#30422A",
  tree: "#171326", treeDetail: "#29213E",
  cattle: "#100D20", cattle2: "#17132A", edgeLight: "#342344",
  amber: "#B96B31", amberHl: "#E69A46", window: "#F5B84F", star: "#D9B7E8", text2: "#B9A8CC", text1: "#F3EAF8",
} as const;

export const SKY_STOPS: [number, keyof typeof COLORS][] = [
  [0, "sky0"], [23, "sky1"], [43, "sky2"], [62, "sky3"], [79, "sky4"], [100, "sky5"],
];

/** Object placement in scene units. Local origins are documented per component (usually bottom-centre). */
export const OBJECTS = {
  banyan: { x: 972, y: 731, scale: 0.94 },          // origin = trunk base centre
  hut: { x: 538, y: 700, scale: 0.72 },
  temple: { x: 1688, y: 597, scale: 1.1 },
  cattle: { x: 1060, y: 628, scale: 1 },
  loneCow: { x: 292, y: 722, scale: 0.8 },
  trees: [
    { variant: "broadLeft", x: 112, y: 680, scale: 1, layer: "distant" },
    { variant: "sparse", x: 381, y: 677, scale: 0.92, layer: "distant" },
    { variant: "medium", x: 1335, y: 666, scale: 1, layer: "mid" },
    { variant: "ornamental", x: 1558, y: 648, scale: 0.85, layer: "mid" },
    { variant: "ornamental", x: 1806, y: 622, scale: 1, layer: "mid" },
  ],
} as const;

export const GROUND_PATH = "M -600 736 C -100 728 260 742 620 740 C 800 739 880 727 960 727 C 1040 727 1100 745 1360 746 C 1600 747 1760 730 1960 735 L 2520 738 L 4000 738";

/** Parallax factor + the slice of scroll progress (0-1) in which each layer travels. */
export const TRANSITION = {
  pinScreens: 3,            // pinned scroll length in viewport heights; the next section ("curtain") starts rising at (n-1)/n of progress
  mobileScreens: 1.2,
  travel: 2000,                 // scene units a factor-1.0 layer travels
  mobileTravelScale: 0.5,
  layers: {
    distant: { parallax: 0.17, from: 0.2, to: 0.9 },
    mid: { parallax: 0.48, from: 0.22, to: 0.9 },
    fore: { parallax: 0.92, from: 0.45, to: 0.9 },
  } as Record<LayerName, { parallax: number; from: number; to: number }>,
  cueFade: [0.2, 0.32] as const,
  sceneFade: [0.84, 1] as const,
  phases: [[0, "A idle"], [0.2, "B shift"], [0.45, "C tree exits"], [0.7, "D edge"], [0.9, "E next section"]] as [number, string][],
};

export const WIND = {
  zones: {
    inner: { share: 0.08, rot: [0.3, 0.8], dx: [0.2, 0.6], per: [8, 11] },
    outer: { share: 0.2, rot: [0.8, 1.8], dx: [0.5, 1.5], per: [6, 9] },
    twig: { share: 1, rot: [1, 2.5], dx: [0.8, 1.8], per: [5, 8] },
  },
  roots: { rot: 0.4, per: [7, 12] },
  tree: { rot: [0.3, 1], per: [7, 11] },
  mobileShare: 0.5,
} as const;

export const STARS = { desktop: 22, mobile: 12, twinkling: 6, mobileTwinkling: 3, period: [4, 9], opacity: [0.25, 0.6] } as const;
