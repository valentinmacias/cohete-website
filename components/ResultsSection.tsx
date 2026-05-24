"use client";
import { FadeInUp } from "./animation/FadeInUp";
import ResultCard from "./ResultCard";

export default function ResultsSection() {
  return (
    <section
      id="results-section"
      className="pt-6 md:pt-24 text-white border-b border-b-gray-800"
    >
      {/* Main Grid Header */}
      <div className="mb-6 md:mb-20">
        <FadeInUp>
          <h2 className="text-4xl sm:text-5xl md:text-7xl px-20 md:px-6 text-center font-semibold tracking-tight text-white leading-tight">
          <span className="text-brand-gradient">Resultados</span> que hablan por
          nosotros.
        </h2>
        </FadeInUp>
      </div>

      {/* Main Structural Flow Stack */}
      <div className="flex flex-col md:divide-y divide-white/[0.08]">
        {/* ROW 01: AGREGAR */}
        <ResultCard
          title={
            <>
              AGREGAR{" "}
              <span className="block text-brand-gradient">$1.347.529 USD</span>{" "}
              EN 90 DÍAS
            </>
          }
          flagIcon="/flag 1.png"
          marketText="Para Marca Americana"
          timelineText="Primeros 90 Días"
          image="/Result 1.png"
        />

        {/* ROW 02: ESCALAR */}
        <ResultCard
          title={
            <>
              <span className="text-brand-gradient">ESCALAR</span> A MÁS DE{" "}
              <span className="block text-brand-gradient">+7.000 órdenes</span>{" "}
              EN 30 DÍAS
            </>
          }
          flagIcon="/united-kingdom 1.png"
          marketText="Para Marca Inglesa"
          timelineText="Primeros 30 Días"
          image="/Result 2.png"
          flip={true}
        />

        {/* ROW 03: ESCALAR */}
        <ResultCard
          title={
            <>
              <span className="text-brand-gradient">Triplicar</span> tu{" "}
              <span className="block text-brand-gradient">facturación</span>
              en 30 días
            </>
          }
          flagIcon="/world 1.png"
          marketText="Para Marca Argentina"
          timelineText="Primeros 30 Días"
          image="/Result 3.png"
        />
      </div>
    </section>
  );
}
