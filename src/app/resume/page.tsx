
import type { Metadata } from "next";
import { ResumeContent } from "@/components/resume/ResumeContent";

export const metadata: Metadata = {
  title: "Résumé — Mauryvanshi Prateek",
  description:
    "Interactive résumé for Mauryvanshi Prateek — AI/ML Engineering, Data, GenAI, and Software development.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
