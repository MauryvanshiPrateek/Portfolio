import { CowSilhouette } from "./CowSilhouette";
/** Origin = ground point left of the group. One adult zebu + a calf, offset timings. */
export function CattleGroup({ animated = true }: { animated?: boolean }) {
  return (
    <g>
      <CowSilhouette x={52} scale={1.0} tall={1.32} tailPer={7} headPer={9} delay={1} animated={animated} />
      <CowSilhouette x={142} y={0} scale={0.6} tall={1.25} flip tone="cattle2" tailPer={5} headPer={8} delay={4} animated={animated} />
    </g>
  );
}
