export interface TreeBranchProps { d: string; w: number; color?: string; highlight?: boolean }
/** Curved branch drawn as a stroke; an optional thin highlight rides its upper edge. */
export function TreeBranch({ d, w, color = "var(--trunk)", highlight }: TreeBranchProps) {
  return (
    <g fill="none" strokeLinecap="round">
      <path d={d} stroke={color} strokeWidth={w} />
      {highlight && <path d={d} stroke="var(--branchHl)" strokeWidth={Math.max(1, w * 0.12)} transform={`translate(-1.5 ${-w * 0.3})`} opacity=".55" />}
    </g>
  );
}
