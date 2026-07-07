import Hero from "@/components/Hero";
import LaFormule from "@/components/LaFormule";
import Kpis from "@/components/Kpis";
import LesBienfaits from "@/components/LesBienfaits";
import LeQuotidien from "@/components/LeQuotidien";
import MarqueImages from "@/components/MarqueImages";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <LaFormule />
      <Kpis />
      <LesBienfaits />
      <LeQuotidien />
      <MarqueImages />
    </main>
  );
}
