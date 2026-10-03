import type { Metadata } from "next";
import { ProjectsList } from "@/components/projects/ProjectsList";

export const metadata: Metadata = {
  title: "Projects & Selected Work — Mauryvanshi Prateek",
  description:
    "Systems, experiments and products I've built while exploring AI, data and software engineering.",
};

export default function ProjectsPage() {
  return (
    <main className="py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="max-w-[1280px] mx-auto space-y-12">
        {/* Page Hero */}
        <div className="space-y-4 max-w-3xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest">
            SELECTED WORK
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text">
            Systems, experiments and products.
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            A comprehensive index of engineering systems, applied prototypes, and learning experiments built across machine learning, hydrodynamic simulation, GenAI, and software pipelines.
          </p>
        </div>

        {/* Project Filtering and Grid */}
        <ProjectsList />
      </div>
    </main>
  );
}
