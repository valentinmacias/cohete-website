"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { FadeInUp } from "./animation/FadeInUp";

interface StatItemProps {
  number: string; // Accepts string like "150" or "+40%"
  label: string;
  showDivider?: boolean;
}

export default function StatItem({ number, label, showDivider = true }: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Extract raw numeric value and any suffix (like %, +, M, etc.)
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, "")) || 0;
  const suffix = number.replace(/[0-9.]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.floor(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
    });

    return rounded.on("change", (latest) => {
      if (textRef.current) {
        textRef.current.textContent = latest;
      }
    });
  }, [isInView, count, numericValue, rounded]);

  return (
    <FadeInUp>
<div ref={containerRef} className="w-full space-y-6 md:space-y-12">
      <div className="space-y-3">
        <span 
          ref={textRef}
          className="text-brand-gradient font-semibold text-5xl md:text-6xl block tracking-tight"
        >
          {`0${suffix}`}
        </span>
        <p className="text-white text-base md:text-2xl tracking-wide">
          {label}
        </p>
      </div>
      {showDivider && (
        <hr className="border-t-2 border-white/30 w-full pt-2 md:pt-8 mt-4" />
      )}
    </div>

    </FadeInUp>
  );
}