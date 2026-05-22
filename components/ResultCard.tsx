import React from "react";

interface ResultItemProps {
  title: string; // e.g., "AGREGAR"
  metric: string; // e.g., "$1.347.529 USD"
  timeframe: string; // e.g., "EN 90 DÍAS"
  flagIcon: string; // e.g., "🇺🇸" or "🇬🇧"
  marketText: string; // e.g., "Para Marca Americana"
  timelineText: string; // e.g., "Primeros 90 Días"
  ctaText?: string;
  onCtaClick?: () => void;
  rightContent: React.ReactNode; // The chart / dashboard image component
}

export default function ResultItem({
  title,
  metric,
  timeframe,
  flagIcon,
  marketText,
  timelineText,
  ctaText = "QUIERO RECIBIR UNA PROPUESTA",
  onCtaClick,
  rightContent,
}: ResultItemProps) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 py-12 text-white font-sans">
      {/* Left Column: Typography Details Block (Takes exactly 50% width on desktop) */}
      <div className="w-full md:w-1/2 flex flex-col justify-between space-y-8">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase leading-[1.15]">
            {title} <br />
            <span className="text-[#00ffcc] font-semibold block text-4xl md:text-5xl my-1">
              {metric}
            </span>
            <span>{timeframe}</span>
          </h3>

          {/* Icon + Detail Context Rows */}
          <div className="space-y-4 pt-2 text-base md:text-lg text-gray-300">
            <div className="flex items-center gap-3">
              <span className="text-xl select-none">{flagIcon}</span>
              <p className="font-medium tracking-wide">{marketText}</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Pixel Perfect Hourglass Icon matching your UI aesthetic */}
              <svg
                className="w-5 h-5 text-gray-400 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V12h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-medium tracking-wide text-gray-400">
                {timelineText}
              </p>
            </div>
          </div>
        </div>

        {/* Action Call Button */}
        <div className="pt-4">
          <button
            onClick={onCtaClick}
            className="inline-block border border-[#00ffcc]/30 bg-[#0c1f1a] hover:bg-[#00ffcc]/20 text-[#00ffcc] text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-full transition-all duration-300 transform active:scale-95 whitespace-nowrap"
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* Right Column: Dynamic Graphics Image Slot (Takes exactly 50% width on desktop) */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          {rightContent}
        </div>
      </div>
    </div>
  );
}
