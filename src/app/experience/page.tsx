import type { Metadata } from "next";
import { ExperienceContent } from "@/components/experience/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience — Mauryvanshi Prateek",
  description:
    "Training & Placement Core Head at CSVTU. Coordinated 10+ campus drives, 500–600 students, and 2,000+ company listings.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
