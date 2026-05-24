"use client";
import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number; // Optional delay in seconds
  duration?: number; // Optional duration in seconds
}

export function FadeInUp({
  children,
  delay = 0.15,
  duration = 0.6,
  ...props
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers slightly before element enters view
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Clean, modern ease-out cubic curve
      }}
      {...props} // Passes down any native div attributes like className
    >
      {children}
    </motion.div>
  );
}
