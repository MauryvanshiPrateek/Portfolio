import { Hero } from "@/components/hero/Hero";
import { ThePathSoFar } from "@/components/home/ThePathSoFar";
import { JapaneseProjectsShowcase } from "@/components/projects/JapaneseProjectsShowcase";
import { TpcMetrics } from "@/components/home/TpcMetrics";
import { Capabilities } from "@/components/home/Capabilities";
import { International } from "@/components/home/International";
import { HomeCta } from "@/components/home/HomeCta";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <ThePathSoFar />
      <JapaneseProjectsShowcase />
      <TpcMetrics />
      <Capabilities />
      <International />
      <HomeCta />
    </main>
  );
}
