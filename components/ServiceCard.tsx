import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import { FadeInUp } from "./animation/FadeInUp";

interface ServiceCardProps {
  title: string;
  ctaText?: string;
  onCtaClick?: () => void;
  children: React.ReactNode;
  image: string;
  leftSectionClassName?: string;
  rightSectionClassName?: string;
}

export default function ServiceCard({
  title,
  ctaText = "QUIERO RECIBIR UNA PROPUESTA",
  onCtaClick,
  children,
  image,
  leftSectionClassName = "",
  rightSectionClassName = "",
}: ServiceCardProps) {
  return (
    <div
      className="relative w-full max-w-6xl min-h-[460px] text-white flex flex-col md:flex-row items-stretch justify-between overflow-visible
      bg-no-repeat bg-center bg-size-[100%_100%]
      bg-[url('/Union-1.png')]
      md:bg-[url('/Union.png')]
      "
    >
      <div className="w-full flex flex-col-reverse md:flex-row gap-3 md:gap-10 px-5 py-7 md:px-12 md:py-20">
        <div
          className={`md:w-[50%] flex flex-col justify-between h-full md:pt-4 ${leftSectionClassName}`}
        >
          <div>
            <FadeInUp>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-12 ">
              {title}
            </h2>
            </FadeInUp>

        <FadeInUp>
            <div className="space-y-8 text-base md:text-xl leading-[140%] font-light">
              {children}
            </div>
            </FadeInUp>
          </div>

          <div className="mt-6 md:mt-10">
             <FadeInUp><Button onClick={onCtaClick} className="w-full md:w-fit">
              {ctaText}
            </Button></FadeInUp>
          </div>
        </div>

        <div
          className={`md:w-[50%] w-full flex items-center justify-center min-h-[280px] ${rightSectionClassName}`}
        >
          <div className="relative w-full min-h-[230px] md:min-h-full">
              <Image src={image} alt="" fill className="w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
