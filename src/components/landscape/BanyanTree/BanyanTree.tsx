import { AerialRoots } from "./AerialRoots";
import { BanyanCanopy } from "./BanyanCanopy";
import { TreeTrunk } from "./TreeTrunk";

/** Authored in scene coordinates; local origin (anchor) = trunk base centre (960, 790). */
export const BANYAN_ANCHOR = [960, 790] as const;
export function BanyanTree({ windScale = 1, animated = true }: { windScale?: number; animated?: boolean }) {
  return (
    <g>
      <BanyanCanopy part="back" />
      <AerialRoots part="back" animated={animated} />
      <TreeTrunk />
      <BanyanCanopy part="front" windScale={windScale} animated={animated} />
      <AerialRoots part="front" animated={animated} />
    </g>
  );
}
