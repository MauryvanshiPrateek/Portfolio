import { Hero } from "@/components/hero/Hero";
import { IdeaToSystem } from "@/components/home/IdeaToSystem";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { TpcMetrics } from "@/components/home/TpcMetrics";
import { Capabilities } from "@/components/home/Capabilities";
import { International } from "@/components/home/International";
import { HomeCta } from "@/components/home/HomeCta";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <IdeaToSystem />
      <FeaturedProjects />
      <TpcMetrics />
      <Capabilities />
      <International />
      <HomeCta />
    </main>
  );
}
