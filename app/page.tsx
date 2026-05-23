import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutAndPartners from "@/components/AboutAndPartners";
import ServicesSection from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import ResultsSection from "@/components/ResultsSection";
import StatsSection from "@/components/StatsSection";
import PrioritiesSection from "@/components/PrioritiesSection";
import SpaceBackground from "@/components/SpaceBackground"; // Import here

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030406] text-white flex flex-col">
      {/* Exact Canvas Space Background */}
      <SpaceBackground />

      {/* Foreground Layout Elements */}
      <div className="relative z-10 flex flex-col width-full grow">
        <Navbar />
        <Hero />
        <AboutAndPartners />
        <PrioritiesSection />
        <ServicesSection />
        <StatsSection />
        <ResultsSection />
        <ContactSection />
      </div>
    </div>
  );
}
