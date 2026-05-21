"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Closed Navbar */}
      <nav className="w-full max-w-[1200px] mx-auto mt-6 px-4 md:px-6 z-40 relative">
        <div className="border border-white/10 backdrop-blur-md bg-[#0a0a0c]/60 rounded-2xl md:rounded-[20px] px-6 py-4 flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icon.svg"
              alt="Cohete Icon"
              width={34}
              height={41}
              priority
              className="h-8 w-auto md:h-10"
            />
            <Image
              src="/logo-text.svg"
              alt="Cohete Text"
              width={75}
              height={19}
              priority
              className="h-4 w-auto md:h-5"
            />
          </Link>

          {/* Center Links - Desktop only */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-100">
            <Link href="#servicios" className="hover:text-[#00df89] transition-colors">
              Servicios <span className="text-white/80 ml-1">/</span>
            </Link>
            <Link href="#casos-de-estudio" className="hover:text-[#00df89] transition-colors">
              Casos de Estudio <span className="text-white/80 ml-1">/</span>
            </Link>
            <Link href="#contacto" className="hover:text-[#00df89] transition-colors">
              Contacto <span className="text-white/80 ml-1">/</span>
            </Link>
          </div>

          {/* Button - Desktop only */}
          <div className="hidden md:block">
            <Link
              href="#propuesta"
              className="inline-block border border-[#00df89]/30 text-primary hover:bg-primary/5 text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,223,137,0.15)]"
            >
              Quiero recibir una propuesta
            </Link>
          </div>

          {/* Menú Link - Mobile only */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-sm font-medium text-white underline decoration-white/40 underline-offset-4 hover:text-[#00df89] transition-colors"
          >
            Menú
          </button>
        </div>
      </nav>

      {/* Mobile Responsive Open Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 p-4 bg-black/40 backdrop-blur-sm md:hidden flex items-start justify-center transition-all duration-300">
          <div className="relative w-full max-w-[480px] bg-[#0c0d12]/95 border border-white/10 rounded-[24px] p-6 flex flex-col shadow-[0_0_50px_rgba(0,223,137,0.05)] overflow-hidden">
            {/* Glow Effect bottom-left inside card */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#00df89]/20 blur-[60px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between relative z-10">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="/logo-icon.svg"
                  alt="Cohete Icon"
                  width={34}
                  height={41}
                  priority
                  className="h-8 w-auto"
                />
                <Image
                  src="/logo-text.svg"
                  alt="Cohete Text"
                  width={75}
                  height={19}
                  priority
                  className="h-4 w-auto"
                />
              </div>

              {/* Close Button (X) */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#00df89] transition-colors p-1"
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 my-12 pl-2 relative z-10">
              <Link
                href="#servicios"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-white hover:text-[#00df89] transition-colors"
              >
                Servicios <span className="text-white/20 ml-2">/</span>
              </Link>
              <Link
                href="#casos-de-estudio"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-white hover:text-[#00df89] transition-colors"
              >
                Casos de Estudio <span className="text-white/20 ml-2">/</span>
              </Link>
              <Link
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-white hover:text-[#00df89] transition-colors"
              >
                Contacto <span className="text-white/20 ml-2">/</span>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="w-full mt-auto relative z-10">
              <Link
                href="#propuesta"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center border border-[#00df89]/30 text-[#00df89] hover:text-[#00ff9d] hover:border-[#00df89] hover:bg-[#00df89]/5 text-xs font-bold uppercase tracking-wider py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,223,137,0.15)]"
              >
                Quiero recibir una propuesta
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
