import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-8 pt-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
      {/* Left Text Column */}
      <div className="flex-1 max-w-[620px] flex flex-col items-start text-left">
        <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 select-none">
          <span className="text-brand-gradient block">Escalamos</span>
          <span className="block">
            las <span className="text-brand-gradient inline-block">ventas</span>{" "}
            de tu
          </span>
          <span className="text-brand-gradient block">eCommerce</span>
        </h1>
        <p className="text-base md:text-[22px] font-light mb-6">
          Desarrollamos tu negocio online ejecutando soluciones que bajan
          costos, maximizan inversiones y adquieren nuevos clientes.
        </p>
        <Button>Quiero recibir una propuesta</Button>
      </div>

      {/* Right Image Column */}
      <div className="hidden md:flex flex-1 items-center justify-center relative min-h-[450px] lg:min-h-[550px]">
        <div className="relative w-full max-w-[480px] aspect-square lg:max-w-[550px] animate-float-slow">
          <Image
            src="/Rocket_dark 1.png"
            alt="Cohete 3D Rocket"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </main>
  );
}
