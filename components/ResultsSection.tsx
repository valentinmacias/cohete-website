"use client";
import React from "react";
import ResultItem from "./ResultCard";

export default function ResultsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 text-white font-sans">
      {/* Main Grid Header */}
      <div className="mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white uppercase leading-tight">
          <span className="text-[#00ffcc]">Resultados</span> que hablan por
          nosotros.
        </h2>
      </div>

      {/* Main Structural Flow Stack */}
      <div className="flex flex-col space-y-24 divide-y divide-white/[0.08]">
        {/* ROW 01: AGREGAR */}
        <ResultItem
          title="AGREGAR"
          metric="$1.347.529 USD"
          timeframe="EN 90 DÍAS"
          flagIcon="🇺🇸"
          marketText="Para Marca Americana"
          timelineText="Primeros 90 Días"
          rightContent={
            <img
              src="/your-chart-image-1.png"
              alt="Analytics data timeline showcase"
              className="w-full h-auto object-contain max-h-[360px]"
            />
          }
        />

        {/* ROW 02: ESCALAR */}
        <div className="pt-24">
          <ResultItem
            title="ESCALAR"
            metric="+7.000 ÓRDENES"
            timeframe="EN 30 DÍAS"
            flagIcon="🇬🇧"
            marketText="Para Marca Inglesa"
            timelineText="Primeros 30 Días"
            rightContent={
              <img
                src="/your-chart-image-2.png"
                alt="Sales growth data metrics display"
                className="w-full h-auto object-contain max-h-[360px]"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
