"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll relative to the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll transformations (flying away, shrinking, and subtle extra rotation on scroll)
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Intro fade-in animations for the text elements
  const fadeInUp : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "backOut" } },
  };

  return (
    <main 
      ref={containerRef}
      className="flex-1 w-full max-w-[1200px] mx-auto mt-[120px] px-6 md:px-8 pt-12 pb-14 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10"
    >
      {/* Left Text Column */}
      <motion.div 
        className="flex-1 max-w-[620px] flex flex-col items-start text-left"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.06 } }
        }}
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 select-none"
        >
          <span className="text-brand-gradient block">Escalamos</span>
          <span className="block">
            las <span className="text-brand-gradient inline-block">ventas</span>{" "}
            de tu
          </span>
          <span className="text-brand-gradient block">eCommerce</span>
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          className="text-base md:text-[22px] font-light mb-6"
        >
          Desarrollamos tu negocio online ejecutando soluciones que bajan
          costos, maximizan inversiones y adquieren nuevos clientes.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button>Quiero recibir una propuesta</Button>
        </motion.div>
      </motion.div>

      {/* Right Image Column */}
      <div className="flex-1 relative w-full max-w-[480px] aspect-square lg:max-w-[550px]">
        {/* 1. Scroll Controller Wrapper */}
        <motion.div
          style={{ y: scrollY, scale: scrollScale, opacity }}
          className="w-full h-full relative will-change-transform"
        >
          {/* 2. Intro Landing & Dynamic Rotation Wrapper */}
          <motion.div
            initial={{ y: -450, opacity: 0, scale: 0.7, rotate: -20 }} // Starts completely straight, oversized up top
            animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}    // Tilts to its exact design position as it settles
            transition={{ 
              type: "spring", 
              stiffness: 55, 
              damping: 14,
              mass: 1.2,
              delay: 0.2 
            }}
            className="w-full h-full relative"
          >
            {/* 3. Infinite Floating Idle Wrapper */}
            <div className="w-full h-full animate-float-slow">
              <Image
                src="/Rocket_dark 1.png"
                alt="Cohete 3D Rocket"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}