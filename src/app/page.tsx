import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Usage from "@/components/Usage";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TrustBar />
        <Story />
        <Products />
        <Benefits />
        <Usage />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
