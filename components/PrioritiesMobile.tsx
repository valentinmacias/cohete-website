"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PrioritiesMobile() {
  const targetRef = useRef<HTMLDivElement>(null);

  // Escuchamos el scroll global de la pantalla respecto a este contenedor único estático
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Provoca que la animación inicie justo cuando el elemento entra un 40% abajo en el viewport
    offset: ["start 0.5", "end 0.5"],
  });

  // --- POSICIONAMIENTO VERTICAL (TRACK DE TEXTO) ---
  // Desplazamiento preciso adaptado al line-height del texto móvil
  const trackY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -100]);

  // --- GRADIENTES Y OPACIDADES BASADOS EN EL PROGRESO DEL SCROLL ---
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

  // --- INTERCAMBIO DISCRETO DE DESCRIPCIONES ---
  const desc1Opacity = useTransform(scrollYProgress, (latest) =>
    latest < 0.33 ? 1 : 0,
  );
  const desc2Opacity = useTransform(scrollYProgress, (latest) =>
    latest >= 0.33 && latest < 0.66 ? 1 : 0,
  );
  const desc3Opacity = useTransform(scrollYProgress, (latest) =>
    latest >= 0.66 ? 1 : 0,
  );

  const textGradientStyles = {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    // Limitado estrictamente a un máximo de 60vh sin alturas artificiales extras
    <section
      ref={targetRef}
      className="relative w-full max-h-[60vh] h-full overflow-hidden py-12 flex flex-col justify-center"
    >
      {/* Luz de fondo — Rectangle 10.png */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Image
          src="/Rectangle 10.png"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Contenido principal en flujo regular */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 flex flex-col gap-6">
        {/* Título estático superior */}
        <div className="flex-shrink-0">
          <h2 className="text-[42px] font-medium leading-[120%] text-white tracking-tight">
            Nuestras
            <br />
            Prioridades
          </h2>
        </div>

        {/* Ventana de Scroll de ítems */}
        <div className="flex flex-col items-start w-full">
          {/* MÁSCARA GRADUAL: Evita cortes limpios y asienta el desvanecimiento del video */}
          <div
            className="relative h-[55px] w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
            }}
          >
            {/* CAPA DE TRACK EN MOVIMIENTO */}
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

              {/* SPEED */}
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

          {/* Contenedor de descripciones asíncronas */}
          <div className="relative min-h-[60px] w-full mt-2">
            {/* Descripción 1 */}
            <motion.p
              style={{ opacity: desc1Opacity }}
              className="text-base text-white tracking-wide font-light absolute top-0 left-0 transition-opacity duration-200"
            >
              Hacemos un trabajo rápido y de calidad.
              <br />
              Manteniendo el enfoque en cada detalle.
            </motion.p>

            {/* Descripción 2 */}
            <motion.p
              style={{ opacity: desc2Opacity }}
              className="text-base text-white tracking-wide font-light absolute top-0 left-0 transition-opacity duration-200"
            >
              There are no random elements in our design for beauty. The main
              idea is a functional design.
            </motion.p>

            {/* Descripción 3 */}
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
    </section>
  );
}
