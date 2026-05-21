import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutAndPartners from "@/components/AboutAndPartners";
import ServicesSection from "@/components/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030406] text-white flex flex-col overflow-hidden">
      {/* Background Stars Layers */}
      <div className="absolute inset-0 stars-bg pointer-events-none z-0" />
      <div className="absolute inset-0 stars-bg-dense pointer-events-none z-0 opacity-60" />

      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] -translate-y-1/2 ambient-green-glow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] ambient-green-glow pointer-events-none opacity-80" />
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-emerald-950/20 blur-[120px] pointer-events-none" />

      <Navbar />
      <Hero />
      <AboutAndPartners />
      <ServicesSection />
    </div>
  );
}
