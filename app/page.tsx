import CTA from "@/components/CTA";
import GrowingChallenge from "@/components/GrowingChallenge";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PredictionMethods from "@/components/PredictionMethods";

export default function Home() {
  return (
    <div className="bg-white h-screen max-w-7xl mx-auto">
      <Header />
      <Hero />
      <GrowingChallenge />
      <PredictionMethods />
      <CTA />
    </div>
  );
}
