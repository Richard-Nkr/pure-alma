import Hero from "@/components/Hero";
import LaFormule from "@/components/LaFormule";
import Kpis from "@/components/Kpis";
import NotreHistoire from "@/components/NotreHistoire";
import LeQuotidien from "@/components/LeQuotidien";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <LaFormule />
      <Kpis />
      <NotreHistoire />
      <LeQuotidien />
      <Footer />
    </main>
  );
}
