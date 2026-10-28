import { TreeBranch } from "./TreeBranch";

const MAIN: [string, number][] = [
  ["M885 520 C860 490 820 450 770 440", 22], ["M930 505 C940 470 950 440 958 405", 26],
  ["M1030 500 C1070 470 1110 440 1150 420", 22], ["M905 495 C880 470 850 430 805 395", 14],
  ["M1010 480 C1040 440 1070 400 1100 385", 12],
];
const SECONDARY: [string, number][] = [
  ["M800 430 C780 410 760 400 740 380", 7], ["M1120 430 C1150 410 1175 400 1195 380", 7], ["M960 420 C945 380 940 350 945 320", 7],
];

/** Buttress roots spreading along the ground: tapered strands, thicker near the trunk. */
const FLARE: [string, number][] = [
  ["M900 780C850 786 790 784 735 792", 5], ["M915 790C860 796 800 800 752 806", 3], ["M1010 782C1070 790 1130 786 1196 794", 5],
  ["M1000 792C1060 800 1120 802 1170 808", 3], ["M880 770C840 768 800 760 770 764", 3.4], ["M1030 774C1080 772 1120 764 1160 768", 3.4],
];
/** Trunk, root flare and branches. Static: the trunk never sways. */
export function TreeTrunk() {
  return (
    <g>
      <path d="M740 792C820 780 870 770 892 700C898 640 884 560 866 505L912 480C930 520 950 530 966 512C990 500 1015 490 1050 462L1086 478C1052 520 1022 560 1022 620C1024 700 1070 770 1190 790Z" style={{ fill: "var(--trunk)" }} />
      <path d="M1000 792C1012 720 1000 640 1026 560C1042 520 1052 500 1062 470L1088 472C1076 520 1060 560 1064 620C1068 700 1110 762 1180 792Z" style={{ fill: "var(--trunk2)" }} />
      <path d="M900 700C915 640 905 580 892 540C930 580 940 640 930 720Z" style={{ fill: "var(--trunkDeep)" }} />
      <path d="M880 792C920 770 960 740 960 640C962 700 1000 760 1060 792Z" style={{ fill: "var(--trunkDeep)" }} opacity=".7" />
      <path d="M868 505C884 560 898 640 892 700" fill="none" stroke="var(--branchHl)" strokeWidth="1.4" opacity=".5" />
      <path d="M1062 470C1050 520 1026 560 1026 620" fill="none" stroke="var(--branchHl)" strokeWidth="1.4" opacity=".45" />
      {FLARE.map(([d, w]) => <path key={d} d={d} fill="none" stroke="var(--trunkDeep)" strokeWidth={w} strokeLinecap="round" />)}
      <path d="M948 700C954 650 944 600 952 540" fill="none" stroke="var(--trunkDeep)" strokeWidth="5" opacity=".8" />
      {MAIN.map(([d, w], i) => <TreeBranch key={d} d={d} w={w} highlight={i % 2 === 0} />)}
      {SECONDARY.map(([d, w]) => <TreeBranch key={d} d={d} w={w} color="var(--trunk2)" />)}
    </g>
  );
}
