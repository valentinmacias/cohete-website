"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInUp } from "./animation/FadeInUp";

export default function PrioritiesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- VERTICAL POSITIONING (SCROLL TRACK) ---
  const trackY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -80, -160]);

  // --- GRADIENTS & OPACITIES BASED ON SCROLL POSITION ---
  // Creativity Focus Timeline
  const creativityGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0.4) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,0) 100%)",
    ],
  );
  const creativityOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0],
  );

  // Reasonableness Focus Timeline
  const reasonablenessGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0.4) 100%)",
    ],
  );
  const reasonablenessOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.4, 1, 0.4],
  );

  // Speed Focus Timeline
  const speedGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%)",
    ],
  );
  const speedOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

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
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center overflow-hidden">
        {/* Background Lights */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Image
            src="/Rectangle 10.png"
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Content Layout */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-6 md:gap-24 items-start">
          {/* Static Left Title */}
          <div className="flex-shrink-0 md:w-1/3 pt-4 md:pt-10">
            <FadeInUp>
              <h2 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-[120%] text-white">
                Nuestras Prioridades
              </h2>
            </FadeInUp>
          </div>

          {/* Dynamic Scroll Window Container */}
          <div className="flex flex-col items-start h-auto md:h-[450px] w-full md:w-2/3 justify-start relative pt-2 md:pt-10">
            {/* Mask Window Box */}
            <div className="relative h-[85px] w-full">
              {/* MOVING TRACK LAYER */}
              <motion.div
                style={{ y: trackY }}
                className="absolute top-0 left-0 flex flex-col h-auto w-full"
              >
                {/* CREATIVITY */}
                <motion.span
                  style={{
                    opacity: creativityOpacity,
                    backgroundImage: creativityGradient,
                    ...textGradientStyles,
                  }}
                  className="text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-[80px] block select-none h-[80px]"
                >
                  Velocidad
                </motion.span>

                {/* REASONABLENESS */}
                <motion.span
                  style={{
                    opacity: reasonablenessOpacity,
                    backgroundImage: reasonablenessGradient,
                    ...textGradientStyles,
                  }}
                  className="text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-[80px] block select-none h-[80px]"
                >
                  Creatividad
                </motion.span>

                {/* SPEED */}
                <motion.span
                  style={{
                    opacity: speedOpacity,
                    backgroundImage: speedGradient,
                    ...textGradientStyles,
                  }}
                  className="text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-[80px] block select-none h-[80px]"
                >
                  Ejecución
                </motion.span>
              </motion.div>
            </div>

            {/* Sub-Description Window (Spacer handled via mt) */}
            <div className="relative min-h-[160px] md:min-h-[120px] w-full mt-8 md:mt-24">
              {/* Description 1 */}
              <motion.p
                style={{ opacity: desc1Opacity }}
                className="text-base md:text-xl tracking-wide font-light max-w-[500px] absolute top-0 left-0 transition-opacity duration-200"
              >
                Hacemos un trabajo rápido y de calidad. Manteniendo el enfoque
                en cada detalle.
              </motion.p>

              {/* Description 2 */}
              <motion.p
                style={{ opacity: desc2Opacity }}
                className="text-base md:text-xl tracking-wide font-light max-w-[500px] absolute top-0 left-0 transition-opacity duration-200"
              >
                Hacemos un trabajo rápido y de calidad. Manteniendo el enfoque
                en cada detalle.
              </motion.p>

              {/* Description 3 */}
              <motion.p
                style={{ opacity: desc3Opacity }}
                className="text-base md:text-xl tracking-wide font-light max-w-[500px] absolute top-0 left-0 transition-opacity duration-200"
              >
                Hacemos un trabajo rápido y de calidad. Manteniendo el enfoque
                en cada detalle.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
