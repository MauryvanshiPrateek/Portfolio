import type { Metadata } from "next";
import { SkillsContent } from "@/components/skills/SkillsContent";

export const metadata: Metadata = {
  title: "Capabilities & Skills — Mauryvanshi Prateek",
  description:
    "An interactive capability map across AI/ML, Data, Development, and Systems — grounded in real project implementations.",
};

export default function SkillsPage() {
  return <SkillsContent />;
}
