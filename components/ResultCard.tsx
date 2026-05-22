import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

interface ResultItemProps {
  title: React.ReactNode;
  flagIcon: string;
  marketText: string;
  timelineText: string;
  ctaText?: string;
  onCtaClick?: () => void;
  image: string;
  flip?: boolean;
}

export default function ResultItem({
  title,
  flagIcon,
  marketText,
  timelineText,
  ctaText = "QUIERO RECIBIR UNA PROPUESTA",
  onCtaClick,
  image,
  flip,
}: ResultItemProps) {
  return (
    <div>
      <div
        className={`max-w-6xl mx-auto flex flex-col items-center justify-between gap-12 pt-6 pb-12 text-white ${flip ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* Left Column: Typography Details Block (Takes exactly 50% width on desktop) */}
        <div className="w-full md:w-1/2 flex flex-col justify-between space-y-8">
          <div className="space-y-12">
            <h3 className="text-3xl md:text-[44px] font-semibold uppercase leading-[130%]">
              {title} <br />
            </h3>

            <div className="space-y-3 pt-2 text-base md:text-xl text-gray-200">
              <div className="flex items-center gap-5">
                <Image width={20} height={20} src={flagIcon} alt="Flag Icon" />
                <p className="tracking-wide">{marketText}</p>
              </div>
              <div className="flex items-center gap-5">
                <Image
                  width={20}
                  height={20}
                  src="/Mask group.png"
                  alt="hourglass"
                  className="object-contain"
                />
                <p className="tracking-wide">{timelineText}</p>
              </div>
            </div>
          </div>

          {/* Action Call Button */}
          <div className="pt-4">
            <Button onClick={onCtaClick}>{ctaText}</Button>
          </div>
        </div>

        {/* Right Column: Dynamic Graphics Image Slot (Takes exactly 50% width on desktop) */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={image}
              alt="Sales growth data metrics display"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
