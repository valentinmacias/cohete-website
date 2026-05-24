"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PrioritiesMobile() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Configuramos el Scrolltrigger apuntando al contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- VERTICAL POSITIONING (SCROLL TRACK) ---
  // Mueve el track de texto verticalmente según el scroll (ajustado a la altura de línea mobile)
  const trackY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -100]);

  // --- GRADIENTS & OPACITIES BASED ON SCROLL POSITION ---
  // Velocidad Focus Timeline
  const velocidadGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
    ],
  );
  const velocidadOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.4, 0],
  );

  // Creatividad Focus Timeline
  const creatividadGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
    ],
  );
  const creatividadOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.4, 1, 0.4],
  );

  // Speed Focus Timeline
  const speedGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)",
    ],
  );
  const speedOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 1]);

  // --- DESCRIPTION FADES (DISCRETE SWAPPING) ---
  const desc1Opacity = useTransform(scrollYProgress, (latest) =>
    latest < 0.33 ? 1 : 0,
  );
  const desc2Opacity = useTransform(scrollYProgress, (latest) =>
    latest >= 0.33 && latest < 0.66 ? 1 : 0,
  );
  const desc3Opacity = useTransform(scrollYProgress, (latest) =>
    latest >= 0.66 ? 1 : 0,
  );

  // Base text masking rules
  const textGradientStyles = {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* Sticky configurado a top-[20dvh] para que la animación empiece exactamente 
        cuando la línea roja superior esté al 20% por debajo del top del viewport.
      */}
      <div className="sticky top-[20dvh] h-[60dvh] w-full overflow-hidden flex flex-col justify-center">
        {/* Top center light — Rectangle 10.png */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Image
            src="/Rectangle 10.png"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-8">
          {/* Left — Title */}
          <div className="flex-shrink-0">
            <h2 className="text-[42px] font-medium leading-[120%] text-white">
              Nuestras
              <br />
              Prioridades
            </h2>
          </div>

          {/* Right — Priorities Scroll Window */}
          <div className="flex flex-col items-start w-full">
            {/* Mask Window Box (fija la altura visible para un ítem a la vez) */}
            <div className="relative h-[50px] w-full overflow-hidden">
              {/* MOVING TRACK LAYER */}
              <motion.div
                style={{ y: trackY }}
                className="absolute top-0 left-0 flex flex-col w-full"
              >
                {/* VELOCIDAD */}
                <motion.span
                  style={{
                    opacity: velocidadOpacity,
                    backgroundImage: velocidadGradient,
                    ...textGradientStyles,
                  }}
                  className="text-[42px] font-medium leading-[50px] block select-none h-[50px]"
                >
                  Velocidad
                </motion.span>

                {/* CREATIVIDAD */}
                <motion.span
                  style={{
                    opacity: creatividadOpacity,
                    backgroundImage: creatividadGradient,
                    ...textGradientStyles,
                  }}
                  className="text-[42px] font-medium leading-[50px] block select-none h-[50px]"
                >
                  Creatividad
                </motion.span>

                {/* SPEED / RAZONABILIDAD */}
                <motion.span
                  style={{
                    opacity: speedOpacity,
                    backgroundImage: speedGradient,
                    ...textGradientStyles,
                  }}
                  className="text-[42px] font-medium leading-[50px] block select-none h-[50px]"
                >
                  Speed
                </motion.span>
              </motion.div>
            </div>

            {/* Sub-Description Window Container */}
            <div className="relative min-h-[80px] w-full mt-3">
              {/* Description 1 */}
              <motion.p
                style={{ opacity: desc1Opacity }}
                className="text-base text-white tracking-wide font-light absolute top-0 left-0 transition-opacity duration-200"
              >
                Hacemos un trabajo rápido y de calidad.
                <br />
                Manteniendo el enfoque en cada detalle.
              </motion.p>

              {/* Description 2 */}
              <motion.p
                style={{ opacity: desc2Opacity }}
                className="text-base text-white tracking-wide font-light absolute top-0 left-0 transition-opacity duration-200"
              >
                There are no random elements in our design for beauty. The main
                idea is a functional design.
              </motion.p>

              {/* Description 3 */}
              <motion.p
                style={{ opacity: desc3Opacity }}
                className="text-base text-white tracking-wide font-light absolute top-0 left-0 transition-opacity duration-200"
              >
                Our priority is to do the project quickly, but at the same time
                pay attention to the quality final result.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
