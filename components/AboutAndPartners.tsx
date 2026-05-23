"use client";

import { useEffect, useRef } from "react";

const partners = [
  { name: "Bathinda", src: "/logos/BATHINDA.webp" },
  { name: "Flexigom", src: "/logos/FLEXIGOM.webp" },
  { name: "Gaudi", src: "/logos/GAUDI.webp" },
  { name: "Gianni di Paolo", src: "/logos/Gianni di Paolo.webp" },
  { name: "Gilipollas", src: "/logos/GILLIPOLLAS.webp" },
  { name: "Grafa70", src: "/logos/GRAFA70.webp" },
  { name: "IPC Pools", src: "/logos/IPC POOLS.webp" },
  { name: "Logo ATT", src: "/logos/LOGO ATT.webp" },
  { name: "MiróSol", src: "/logos/MIROSOL.webp" },
  { name: "Noor", src: "/logos/NOOR.webp" },
  { name: "Oh Wear", src: "/logos/OH WEAR.webp" },
  { name: "Ombu", src: "/logos/OMBU.webp" },
  { name: "Plenty", src: "/logos/PLENTY.webp" },
  { name: "Sofart", src: "/logos/SOFART.webp" },
  { name: "Wegolf", src: "/logos/WEGOLF.webp" },
  { name: "Zorba", src: "/logos/ZORBA.webp" },
];
export default function PartnersAndAbout() {
  // Only duplicate once since the loop calculation relies on maxScroll = scrollWidth / 2
  const marqueeLogos = [...partners, ...partners];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTrack = trackRef.current;
    if (!scrollTrack) return;

    const durationInSeconds = 25;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const speedMap: Record<number, number> = {
      25: isSafari ? 1.5 : 0.9,
      35: isSafari ? 1 : 0.65,
      45: isSafari ? 0.65 : 0.45,
    };

    const speed =
      speedMap[durationInSeconds] ||
      (isSafari ? 40 / durationInSeconds : 25 / durationInSeconds);

    let scrollPosition = 0;
    let animationFrameId: number;

    const smoothScroll = () => {
      if (!scrollTrack) return;

      scrollPosition -= speed;

      const maxScroll = scrollTrack.scrollWidth / 2;

      if (Math.abs(scrollPosition) >= maxScroll) {
        scrollPosition += maxScroll;
      }

      scrollTrack.style.transform = `translate3d(${scrollPosition}px, 0, 0)`;
      scrollTrack.style.webkitTransform = `translate3d(${scrollPosition}px, 0, 0)`;

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full relative z-10 bg-transparent overflow-hidden stars-bg-dense pb-14 lg:pb-28">
      {/* --- SECTION 1: TRUSTED BY / MARQUEE LOGOS --- */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 mb-4 md:mb-14">
        <h2 className="text-[22px] md:text-[38px] md:font-medium tracking-wide">
          Confían en Nosotros
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="w-full relative flex items-center overflow-x-hidden select-none mb-7 py-2">
        {/* Left & Right subtle mask gradients to fade edge logos if desired */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030406] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030406] to-transparent z-10 pointer-events-none" />

        {/* Moving track */}
        <div
          ref={trackRef}
          className="flex gap-16 md:gap-24 items-center shrink-0 whitespace-nowrap"
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center"
            >
              {/* Using standard img tags for easier flexible width setups inside layouts like marquee layouts, or use Next Image */}
              <img
                src={logo.src}
                alt={logo.name}
                className="w-28 lg:w-32 max-h-8 lg:max-h-auto lg:h-auto aspect-square object-contain"
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
      <div className="mt-[70px] lg:mt-[100px] w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col gap-8 relative">
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
        <p className="text-base md:text-2xl font-light md:font-normal md:leading-[130%]">
          Diseñamos estrategia digital, sitios e-commerce, performance media,
          CRM y chatbots con IA para marcas que operan en Estados Unidos,
          Europa, Asia y América Latina.
        </p>
      </div>
    </section>
  );
}
