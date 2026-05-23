import Image from "next/image";

export default function Priorities() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top center light — Rectangle 10.png */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Image
          src="/Rectangle 10.png"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-8 py-10 md:pt-24 md:pb-28 flex flex-col md:flex-row gap-10 md:gap-24">
        {/* Left — Title */}
        <div className="flex-shrink-0">
          <h2 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-[120%] text-white">
            Nuestras
            <br />
            Prioridades
          </h2>
        </div>

        {/* Right — Priorities + description */}
        <div className="flex flex-col items-start">
          {/* Velocidad — solid white */}
          <span className="text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-[120%] text-white">
            Velocidad
          </span>

          {/* Creatividad — top-to-bottom fade: #FFFFFF66 → #FFFFFF00 */}
          <span
            className="text-[42px] sm:text-5xl md:text-6xl lg:text-[70px] font-medium leading-[120%]"
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
          <p className="mt-3 text-base md:text-xl text-white tracking-wide font-light md:max-w-[420px]">
            Hacemos un trabajo rápido y de calidad.
            <br />
            Manteniendo el enfoque en cada detalle.
          </p>
        </div>
      </div>
    </section>
  );
}
