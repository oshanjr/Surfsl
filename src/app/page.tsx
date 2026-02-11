import { HeroSection } from "@/components/home/HeroSection";
import { SocialProof } from "@/components/home/SocialProof";
import { VibeGrid } from "@/components/home/VibeGrid";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <SocialProof />
      <FeaturedPackages />
      <VibeGrid />
    </div>
  );
}
