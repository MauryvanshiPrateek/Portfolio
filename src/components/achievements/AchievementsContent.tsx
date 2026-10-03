"use client";

import { motion } from "motion/react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Award, Zap } from "lucide-react";
import { ease } from "@/lib/animations";

const achievements = [
  {
    id: "namovesh",
    label: "HACKATHON",
    icon: Award,
    color: "text-warning",
    borderColor: "border-warning/40",
    bgColor: "bg-warning/5",
    title: "NamoVesh Hackathon — Selected",
    context: "National-level innovation hackathon",
    desc: "Selected for a hackathon project exploring electricity generation from mechanical energy produced by footsteps on specialised pressure-sensitive tiles. The concept addressed decentralised micro-energy harvesting for high-footfall public infrastructure.",
    technical: [
      "Piezoelectric energy harvesting from pedestrian kinetic impact",
      "Load-bearing tile architecture with embedded transducers",
      "Micro-grid integration concept for public spaces",
    ],
    status: "SELECTED",
  },
  {
    id: "msme-drone",
    label: "PROGRAMME",
    icon: Zap,
    color: "text-accent",
    borderColor: "border-accent/40",
    bgColor: "bg-accent/5",
    title: "MSME Drone Technology Programme",
    context: "Government of India — MSME initiative",
    desc: "Participated in a structured drone technology programme under the MSME initiative, gaining exposure to drone hardware, autonomous operation principles, flight control systems, and application domains in agricultural surveillance and logistics.",
    technical: [
      "Drone hardware systems and frame configurations",
      "Autonomous flight control and navigation",
      "Agricultural surveillance and aerial data collection use cases",
    ],
    status: "COMPLETED",
  },
];

export function AchievementsContent() {
  return (
    <main className="py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1280px] mx-auto space-y-16">

        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest">
            05 / RECOGNITION
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[0.97]">
            Achievements.
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            Selected programme participations and hackathon recognitions. Presented without embellishment.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: ease.standard }}
              >
                <CardSpotlight className={`h-full p-6 sm:p-8 border ${item.borderColor}`}>
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-[8px] border ${item.borderColor} ${item.bgColor}`}>
                          <Icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <span className={`font-mono text-[11px] uppercase tracking-widest font-bold ${item.color}`}>
                          {item.label}
                        </span>
                      </div>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-[4px] border ${item.borderColor} ${item.bgColor} ${item.color}`}>
                        {item.status}
                      </span>
                    </div>

                    {/* Title & Context */}
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-text leading-tight mb-1">
                        {item.title}
                      </h2>
                      <div className="text-xs font-mono text-text-muted">{item.context}</div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>

                    {/* Technical Points */}
                    <div className="space-y-2 pt-2 border-t border-border">
                      <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider">TECHNICAL FOCUS</div>
                      {item.technical.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs text-text-secondary">
                          <span className={`${item.color} font-bold shrink-0`}>→</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardSpotlight>
              </motion.div>
            );
          })}
        </div>

        {/* Honest framing note */}
        <div className="p-4 rounded-[12px] border border-border bg-surface font-mono text-xs text-text-muted">
          <span className="text-accent mr-2">╱╱</span>
          Achievements listed reflect actual participation and selection outcomes, presented accurately without inflation.
        </div>
      </div>
    </main>
  );
}
