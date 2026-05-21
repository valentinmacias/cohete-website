"use client";

import React from "react";

// Mocking the partner logos data.
// Replace src paths with your actual logo files in /public
const partners = [
  { name: "MiróSol", src: "/logos/mirosol.svg" },
  { name: "Argentina Todo Terreno", src: "/logos/argentina-tt.svg" },
  { name: "Grafa70", src: "/logos/grafa70.svg" },
  { name: "Next+", src: "/logos/next.svg" },
  { name: "Focus", src: "/logos/focus.svg" },
  { name: "Umbrella", src: "/logos/umbrella.svg" },
  { name: "Gauci", src: "/logos/gauci.svg" },
  { name: "Gilipollas", src: "/logos/gilipollas.svg" },
];

export default function PartnersAndAbout() {
  // Duplicate the array to create a seamless infinite marquee loops
  const marqueeLogos = [...partners, ...partners, ...partners];

  return (
    <section className="w-full relative z-10 bg-transparent py-12 overflow-hidden stars-bg-dense">
      {/* --- SECTION 1: TRUSTED BY / MARQUEE LOGOS --- */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 mb-10">
        <h2 className="text-lg md:text-2xl font-medium mb-8 tracking-wide">
          Confían en Nosotros
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="w-full relative flex items-center overflow-x-hidden select-none mb-14 py-2">
        {/* Left & Right subtle mask gradients to fade edge logos if desired */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030406] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030406] to-transparent z-10 pointer-events-none" />

        {/* Moving track */}
        <div className="flex gap-16 md:gap-24 items-center shrink-0 animate-marquee whitespace-nowrap">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              {/* Using standard img tags for easier flexible width setups inside layouts like marquee layouts, or use Next Image */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-7 md:h-9 w-auto object-contain"
                onError={(e) => {
                  // Fallback string if image assets are missing during build setup
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    const textNode = document.createTextNode(logo.name);
                    parent.appendChild(textNode);
                    parent.className =
                      "text-zinc-500 font-bold tracking-wider text-sm md:text-base";
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION DIVIDER (Fine subtle edge line replacing the red design guide line) --- */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-16" />
      </div>

      {/* --- SECTION 2: DIGITAL STUDIO DESCRIPTION --- */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col gap-8 relative">
        {/* Glow backdrop behind copy */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full ambient-green-glow -z-10 pointer-events-none" />

        {/* Big Bold Core Paragraph Layout */}
        <h3 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.25] max-w-[1080px] select-none">
          <span className="text-primary">cohete</span> es un estudio de
          performance digital que{" "}
          <span className="text-brand-gradient">
            convierte estrategia en facturación, escala y posicionamiento
          </span>{" "}
          para las empresas{" "}
          <span className="text-brand-gradient">más exigentes.</span>
        </h3>

        {/* Secondary Subtext Copy */}
        <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-[860px] mt-2">
          Diseñamos estrategia digital, sitios e-commerce, performance media,
          CRM y chatbots con IA para marcas que operan en Estados Unidos,
          Europa, Asia y América Latina.
        </p>
      </div>
    </section>
  );
}
