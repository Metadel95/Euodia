import Hero from "@/components/Hero";
import Meaning from "@/components/Meaning";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Meaning />
      <CTA />
      <Footer />
    </main>
  );
}
