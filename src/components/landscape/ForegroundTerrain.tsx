import { GROUND_PATH } from "../../config/landscape.config";
import { fill } from "../../lib/svg";
/** Near-black purple. The ground fill shares GROUND_PATH with GroundLightLine, so the line follows the terrain exactly. */
export const ForegroundTerrain = () => (
  <g>
    <path d="M-600 712C0 702 400 718 760 724C940 726 1040 728 1240 724C1500 714 1900 724 2520 716L4000 716V1100H-600Z" style={fill("hillFg")} opacity=".9" />
    <path d={`${GROUND_PATH} V1100H-600Z`} style={fill("ground")} />
  </g>
);
