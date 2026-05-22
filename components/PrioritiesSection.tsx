import Image from "next/image";

export default function Priorities() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030406]">
      {/* Background Stars Layers — always visible */}
      <div className="absolute inset-0 stars-bg pointer-events-none z-0" />
      <div className="absolute inset-0 stars-bg-dense pointer-events-none z-0 opacity-60" />

      {/* Top center light — Rectangle 10.png */}
      <div className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-10">
        <Image
          src="/Rectangle 10.png"
          alt=""
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-8 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16">
        {/* Left — Title */}
        <div className="flex-shrink-0">
          <h2 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.1] text-white select-none">
            Nuestras
            <br />
            Prioridades
          </h2>
        </div>

        {/* Right — Priorities + description */}
        <div className="flex flex-col items-start gap-1">
          {/* Velocidad — solid white */}
          <span className="text-[42px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.1] text-white select-none">
            Velocidad
          </span>

          {/* Creatividad — top-to-bottom fade: #FFFFFF66 → #FFFFFF00 */}
          <span
            className="text-[42px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.1] select-none"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #FFFFFF66 0%, #FFFFFF00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Creatividad
          </span>

          {/* Body copy */}
          <p className="mt-5 text-sm md:text-base text-white/60 leading-relaxed max-w-[380px]">
            Hacemos un trabajo rápido y de calidad.
            <br />
            Manteniendo el enfoque en cada detalle.
          </p>
        </div>
      </div>
    </section>
  );
}
