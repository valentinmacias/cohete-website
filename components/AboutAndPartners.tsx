"use client";

import React from "react";

// Mocking the partner logos data.
// Replace src paths with your actual logo files in /public
const partners = [
  { name: "MiróSol", src: "/mirosol.png" },
  { name: "Argentina Todo Terreno", src: "/mirosol.png" },
  { name: "Grafa70", src: "/mirosol.png" },
  { name: "Next+", src: "/mirosol.png" },
  { name: "Focus", src: "/mirosol.png" },
  { name: "Umbrella", src: "/mirosol.png" },
  { name: "Gauci", src: "/mirosol.png" },
  { name: "Gilipollas", src: "/mirosol.png" },
];

export default function PartnersAndAbout() {
  // Duplicate the array to create a seamless infinite marquee loops
  const marqueeLogos = [...partners, ...partners, ...partners];

  return (
    <section className="w-full relative z-10 bg-transparent overflow-hidden stars-bg-dense pb-28">
      {/* --- SECTION 1: TRUSTED BY / MARQUEE LOGOS --- */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 mb-6">
        <h2 className="text-lg md:text-[38px]  font-medium mb-8 tracking-wide">
          Confían en Nosotros
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="w-full relative flex items-center overflow-x-hidden select-none mb-7 py-2">
        {/* Left & Right subtle mask gradients to fade edge logos if desired */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030406] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030406] to-transparent z-10 pointer-events-none" />

        {/* Moving track */}
        <div className="flex gap-16 md:gap-24 items-center shrink-0 animate-marquee whitespace-nowrap">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center"
            >
              {/* Using standard img tags for easier flexible width setups inside layouts like marquee layouts, or use Next Image */}
              <img
                src={logo.src}
                alt={logo.name}
                className="w-auto object-contain"
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

      {/* --- SECTION 2: DIGITAL STUDIO DESCRIPTION --- */}
      <div className="mt-[100px] w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col gap-8 relative">
        {/* Big Bold Core Paragraph Layout */}
        <h3 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-white tracking-tight leading-[120%] max-w-[1080px] select-none">
          <span className="text-brand-gradient">cohete</span> es un estudio de
          performance digital que{" "}
          <span className="text-brand-gradient">convierte</span> estrategia en{" "}
          <span className="text-brand-gradient">
            acturación, escala y posicionamiento
          </span>{" "}
          para las empresas{" "}
          <span className="text-brand-gradient">más exigentes.</span>
        </h3>

        {/* Secondary Subtext Copy */}
        <p className="text-sm sm:text-base md:text-2xl font-normal leading-[130%]">
          Diseñamos estrategia digital, sitios e-commerce, performance media,
          CRM y chatbots con IA para marcas que operan en Estados Unidos,
          Europa, Asia y América Latina.
        </p>
      </div>
    </section>
  );
}
