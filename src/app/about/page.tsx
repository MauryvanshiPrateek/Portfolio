import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Mauryvanshi Prateek",
  description:
    "I'm Prateek — an AI-focused engineering student who builds things people can actually use. B.Tech CSE (AI), CSVTU.",
};

export default function AboutPage() {
  return <AboutContent />;
}
