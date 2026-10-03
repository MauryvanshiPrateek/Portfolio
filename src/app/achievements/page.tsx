import type { Metadata } from "next";
import { AchievementsContent } from "@/components/achievements/AchievementsContent";

export const metadata: Metadata = {
  title: "Achievements — Mauryvanshi Prateek",
  description:
    "Selected hackathon and program recognitions — NamoVesh Hackathon (selected) and MSME Drone Program.",
};

export default function AchievementsPage() {
  return <AchievementsContent />;
}
