import StatItem from "./StatItem";
import { FadeInUp } from "./animation/FadeInUp";

export default function StatsSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-16 text-white selection:bg-primary/30">
      {/* SECTION HEADER */}
      <div className="w-full text-center mb-16 md:mb-24">
        <FadeInUp>
          <h2 className="text-4xl md:text-7xl font-semibold">
            No prometemos,{" "}
            <span className="text-brand-gradient">ejecutamos.</span>
          </h2>
        </FadeInUp>
      </div>

      {/* STRATEGIC LAYOUT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* LEFT COLUMN: METRICS STACK (Spans 5 out of 12 columns on desktop) */}
        <div className="order-last md:order-first md:col-span-5 flex flex-col space-y-6 md:pr-4">
          <StatItem number="+15000" label="Anuncios Lanzados" />
          <StatItem number="+250" label="Sitios Webs Creados" />
          <StatItem
            number="4"
            label="Continentes en los que trabajamos"
            showDivider={false}
          />
        </div>

        {/* RIGHT COLUMN: DYNAMIC GRAPHIC WORLD MAP CONTAINER (Spans 7 out of 12 columns) */}
        <div className="md:col-span-7 w-full flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Replace with your exact dotted world map graphic asset */}
            <img
              src="/imagen 9.png"
              alt="Global operations distribution network map"
              className="w-full h-auto object-contain select-none pointer-events-none"
              draggable={false}
            />

            {/* Optional: If you want to place those glowing ping points exactly over cities via CSS:
              <div className="absolute top-[45%] left-[28%] w-3 h-3 bg-[#00ffcc] rounded-full animate-ping" />
              <div className="absolute top-[68%] left-[34%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
