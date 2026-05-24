"use client";

import { motion } from "framer-motion";

export default function AboutAndDescription() {
  // Container variants that control the staggering cascade across all children sequentially
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // The subtle typing delay between each single unit (chars then words)
      },
    },
  };

  // Headline single-character fade-in and micro slide-up
  const charVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  // Bottom paragraph word-by-word smooth reveal matching the video cadence
  const wordVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 0.8, // Slightly softer opacity for subtext as seen in premium layouts
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Headline structure definitions
  const textSegments = [
    { text: "cohete", isGradient: true },
    { text: " es un estudio de performance digital que ", isGradient: false },
    { text: "convierte", isGradient: true },
    { text: " estrategia en ", isGradient: false },
    { text: "acturación, escala y posicionamiento", isGradient: true },
    { text: " para las empresas ", isGradient: false },
    { text: "más exigentes.", isGradient: true },
  ];

  // Flatten segments into individual characters
  const flattenedChars = textSegments.reduce<{ char: string; isGradient: boolean }[]>(
    (acc, segment) => {
      const chars = segment.text.split("").map((char) => ({
        char,
        isGradient: segment.isGradient,
      }));
      return [...acc, ...chars];
    },
    []
  );

  // Split bottom paragraph text into individual words
  const subtextParagraph =
    "Diseñamos estrategia digital, sitios e-commerce, performance media, CRM y chatbots con IA para marcas que operan en Estados Unidos, Europa, Asia y América Latina.";
  const subtextWords = subtextParagraph.split(" ");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-[70px] lg:mt-[100px] w-full max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col gap-8 relative"
    >
      {/* Big Bold Core Paragraph Layout */}
      <h3 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[60px] font-medium text-white tracking-tight leading-[120%] max-w-[1080px] select-none">
        {flattenedChars.map((item, index) => (
          <motion.span
            key={`char-${index}`}
            variants={charVariants}
            className={`inline-block ${item.isGradient ? "text-brand-gradient" : ""}`}
            style={{ whiteSpace: item.char === " " ? "pre" : "normal" }}
          >
            {item.char}
          </motion.span>
        ))}
      </h3>

      {/* Secondary Subtext Copy - Word by Word reveal */}
      <p className="text-base md:text-2xl font-light md:font-normal md:leading-[130%] text-white flex flex-wrap gap-x-[0.3em] gap-y-0 select-none">
        {subtextWords.map((word, index) => (
          <motion.span
            key={`word-${index}`}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}