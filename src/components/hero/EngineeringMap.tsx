"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Database, Cpu, Sparkles, Terminal, Layers } from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  sublabel: string;
  icon: typeof Database;
  projects: string[];
  x: number;
  y: number;
}

const desktopNodes: NodeData[] = [
  {
    id: "data",
    label: "DATA",
    sublabel: "ETL & Telemetry",
    icon: Database,
    projects: ["TPC Placement Analytics", "Geospatial Rasters", "Soil & Weather Feeds"],
    x: 10,
    y: 50,
  },
  {
    id: "ml",
    label: "ML & SIMULATION",
    sublabel: "Hydrodynamics & NLP",
    icon: Cpu,
    projects: ["JalRakshak (ANUGA 2D)", "Predictor (Sequence)", "Crop Intelligence"],
    x: 48,
    y: 22,
  },
  {
    id: "genai",
    label: "GENAI & CONVERSATIONAL",
    sublabel: "Prompt & State",
    icon: Sparkles,
    projects: ["StockPilot AI (WhatsApp Bot)", "Context Parsing"],
    x: 48,
    y: 78,
  },
  {
    id: "software",
    label: "SOFTWARE",
    sublabel: "APIs & Webhooks",
    icon: Terminal,
    projects: ["State Machines", "REST APIs", "Modern Web Architecture"],
    x: 78,
    y: 50,
  },
  {
    id: "products",
    label: "PRODUCTS",
    sublabel: "Usable Systems",
    icon: Layers,
    projects: ["Disaster Planning", "Conversational Inventory", "Agronomic Advisory"],
    x: 95,
    y: 50,
  },
];

export function EngineeringMap() {
  const [activeNode, setActiveNode] = useState<string | null>("ml");

  const activeData = desktopNodes.find((n) => n.id === activeNode) || desktopNodes[1];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Desktop & Tablet Interactive SVG Canvas */}
      <div className="hidden sm:block relative w-full h-[360px] lg:h-[400px] rounded-[16px] border border-border bg-surface/70 p-5 backdrop-blur-sm overflow-hidden shadow-sm">
        {/* Engineering Grid Background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#252C3315_1px,transparent_1px),linear-gradient(to_bottom,#252C3315_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="flex items-center justify-between text-[11px] font-mono text-text-muted mb-2 border-b border-border/60 pb-2">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            ENGINEERING PIPELINE MAP
          </span>
          <span>HOVER NODE TO INSPECT</span>
        </div>

        {/* SVG Connectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ padding: "40px 20px" }}>
          {/* Data to ML */}
          <path
            d="M 80 180 C 140 180, 160 90, 240 90"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Data to GenAI */}
          <path
            d="M 80 180 C 140 180, 160 270, 240 270"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* ML to Software */}
          <path
            d="M 330 90 C 370 90, 370 180, 420 180"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
          />
          {/* GenAI to Software */}
          <path
            d="M 350 270 C 380 270, 380 180, 420 180"
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
          />
          {/* Software to Products */}
          <path
            d="M 470 180 L 510 180"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
          />
        </svg>

        {/* Node Buttons */}
        <div className="relative z-10 w-full h-[250px] flex items-center justify-between mt-4 px-2">
          {/* Column 1: DATA */}
          <div className="flex flex-col justify-center">
            <NodeCard
              node={desktopNodes[0]}
              isActive={activeNode === desktopNodes[0].id}
              onHover={() => setActiveNode(desktopNodes[0].id)}
            />
          </div>

          {/* Column 2: ML & GENAI */}
          <div className="flex flex-col justify-between h-[230px]">
            <NodeCard
              node={desktopNodes[1]}
              isActive={activeNode === desktopNodes[1].id}
              onHover={() => setActiveNode(desktopNodes[1].id)}
            />
            <NodeCard
              node={desktopNodes[2]}
              isActive={activeNode === desktopNodes[2].id}
              onHover={() => setActiveNode(desktopNodes[2].id)}
            />
          </div>

          {/* Column 3: SOFTWARE */}
          <div className="flex flex-col justify-center">
            <NodeCard
              node={desktopNodes[3]}
              isActive={activeNode === desktopNodes[3].id}
              onHover={() => setActiveNode(desktopNodes[3].id)}
            />
          </div>

          {/* Column 4: PRODUCTS */}
          <div className="flex flex-col justify-center">
            <NodeCard
              node={desktopNodes[4]}
              isActive={activeNode === desktopNodes[4].id}
              onHover={() => setActiveNode(desktopNodes[4].id)}
            />
          </div>
        </div>

        {/* Dynamic Inspection Drawer at bottom */}
        <div className="relative z-10 mt-3 pt-3 border-t border-border/80 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-text-muted">ACTIVE:</span>
            <span className="text-accent font-semibold">{activeData.label}</span>
          </div>
          <div className="text-text-secondary truncate max-w-[280px] lg:max-w-[340px]">
            {activeData.projects.join(" · ")}
          </div>
        </div>
      </div>

      {/* Mobile Vertical Flow representation */}
      <div className="sm:hidden flex flex-col gap-2 p-4 rounded-[16px] border border-border bg-surface">
        <div className="text-[11px] font-mono text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          SYSTEM FLOW
        </div>
        <div className="flex flex-col gap-2">
          {["DATA", "MODEL (ML & GENAI)", "SOFTWARE (SYSTEM)", "PRODUCT"].map((step, idx) => (
            <div key={step} className="flex items-center gap-2 text-xs font-mono">
              <span className="w-5 h-5 rounded-[6px] border border-border bg-surface-elevated flex items-center justify-center text-text-muted text-[10px]">
                0{idx + 1}
              </span>
              <span className="text-text font-medium">{step}</span>
              {idx < 3 && <span className="text-accent ml-auto">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NodeCard({
  node,
  isActive,
  onHover,
}: {
  node: NodeData;
  isActive: boolean;
  onHover: () => void;
}) {
  const Icon = node.icon;
  return (
    <motion.button
      onMouseEnter={onHover}
      onFocus={onHover}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative text-left p-3 rounded-[12px] border transition-all duration-200 cursor-pointer ${
        isActive
          ? "border-accent bg-surface-elevated shadow-[0_0_15px_rgba(77,141,255,0.15)]"
          : "border-border bg-surface hover:border-text-secondary/50"
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <Icon
          className={`w-3.5 h-3.5 transition-colors ${
            isActive ? "text-accent" : "text-text-muted group-hover:text-text"
          }`}
        />
        <span
          className={`text-[11px] font-mono font-bold tracking-wider ${
            isActive ? "text-text" : "text-text-secondary"
          }`}
        >
          {node.label}
        </span>
      </div>
      <div className="text-[10px] text-text-muted font-mono">{node.sublabel}</div>
    </motion.button>
  );
}
