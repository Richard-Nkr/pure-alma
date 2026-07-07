import Hero from "@/components/Hero";
import LaFormule from "@/components/LaFormule";
import Kpis from "@/components/Kpis";
import LeQuotidien from "@/components/LeQuotidien";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <LaFormule />
      <Kpis />
      <LeQuotidien />
    </main>
  );
}
