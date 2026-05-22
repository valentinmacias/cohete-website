"use client";
import React from "react";
import ResultItem from "./ResultCard";
import Image from "next/image";

export default function ResultsSection() {
  return (
    <section className="py-24 text-white font-sans">
      {/* Main Grid Header */}
      <div className="mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl text-center font-semibold tracking-tight text-white leading-tight">
          <span className="text-brand-gradient">Resultados</span> que hablan por
          nosotros.
        </h2>
      </div>

      {/* Main Structural Flow Stack */}
      <div className="flex flex-col divide-y divide-white/[0.08]">
        {/* ROW 01: AGREGAR */}
        <ResultItem
          title="AGREGAR"
          metric="$1.347.529 USD"
          timeframe="EN 90 DÍAS"
          flagIcon={
            <Image width={20} height={20} src="/flag 1.png" alt="USA" />
          }
          marketText="Para Marca Americana"
          timelineText="Primeros 90 Días"
          rightContent={
            <img
              src="/Result 1.png"
              alt="Analytics data timeline showcase"
              className="w-full h-auto object-contain"
            />
          }
        />

        {/* ROW 02: ESCALAR */}
        <ResultItem
          title="ESCALAR"
          metric="+7.000 ÓRDENES"
          timeframe="EN 30 DÍAS"
          flagIcon={
            <Image
              width={20}
              height={20}
              src="/united-kingdom 1.png"
              alt="UK"
            />
          }
          marketText="Para Marca Inglesa"
          timelineText="Primeros 30 Días"
          rightContent={
            <img
              src="/Result 2.png"
              alt="Sales growth data metrics display"
              className="w-full h-auto object-contain"
            />
          }
          flip={true}
        />

        {/* ROW 03: ESCALAR */}
        <ResultItem
          title="ESCALAR"
          metric="+7.000 ÓRDENES"
          timeframe="EN 30 DÍAS"
          flagIcon={
            <Image width={20} height={20} src="/world 1.png" alt="UK" />
          }
          marketText="Para Marca Inglesa"
          timelineText="Primeros 30 Días"
          rightContent={
            <img
              src="/Result 2.png"
              alt="Sales growth data metrics display"
              className="w-full h-auto object-contain"
            />
          }
        />
      </div>
    </section>
  );
}
