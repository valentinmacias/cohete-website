import React from "react";

interface ServiceCardProps {
  number: string;
  title: string;
  ctaText?: string;
  onCtaClick?: () => void;
  children: React.ReactNode;
  rightContent: React.ReactNode;
}

export default function ServiceCard({
  number,
  title,
  ctaText = "QUIERO RECIBIR UNA PROPUESTA",
  onCtaClick,
  children,
  rightContent,
}: ServiceCardProps) {
  return (
    <div
      className="relative w-full max-w-6xl min-h-[460px] text-white flex flex-col md:flex-row items-stretch justify-between overflow-visible font-sans bg-no-repeat"
      style={{
        backgroundImage: 'url("/Union.png")',
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 p-8 sm:p-12 md:p-16 items-center">
        <div className="md:col-span-7 flex flex-col justify-between h-full space-y-8 pt-6 md:pt-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="text-gray-500 font-medium mr-1">{number}.</span>{" "}
              {title}
            </h2>

            <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-300 max-w-xl">
              {children}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onCtaClick}
              className="inline-block border border-[#00ffcc]/30 bg-[#0c1f1a] hover:bg-[#00ffcc]/20 text-[#00ffcc] text-xs font-bold tracking-widest uppercase py-3.5 px-8 rounded-full transition-all duration-300 transform active:scale-95 whitespace-nowrap"
            >
              {ctaText}
            </button>
          </div>
        </div>

        <div className="md:col-span-5 w-full flex items-center justify-center min-h-[280px] md:min-h-full">
          <div className="w-full h-full flex items-center justify-center">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
}
