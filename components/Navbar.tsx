"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Desktop & Mobile Closed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-150%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full max-w-[1200px] mx-auto mt-6 px-4 md:px-6 pointer-events-auto"
        >
          <div className="border border-white/20 rounded-3xl px-6 py-6 flex items-center justify-between transition-all duration-300 backdrop-blur-md">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-icon.svg"
                alt="Cohete Icon"
                width={34}
                height={41}
                priority
                className="h-8 w-auto md:h-12"
              />
              <span className="text-2xl font-medium">cohete</span>
            </Link>

            {/* Center Links - Desktop only */}
            <div className="hidden md:flex items-center gap-8 text-base">
              <Link
                href="#servicios"
                className="hover:text-[#00df89] transition-colors"
              >
                Servicios <span className="text-white/90 ml-1">/</span>
              </Link>
              <Link
                href="#casos-de-estudio"
                className="hover:text-[#00df89] transition-colors"
              >
                Casos de Estudio <span className="text-white/90 ml-1">/</span>
              </Link>
              <Link
                href="#contacto"
                className="hover:text-[#00df89] transition-colors"
              >
                Contacto <span className="text-white/90 ml-1">/</span>
              </Link>
            </div>

            {/* Button - Desktop only */}
            <div className="hidden md:block">
              <Button size="sm">Quiero recibir una propuesta</Button>
            </div>

            {/* Menú Link - Mobile only */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-sm font-medium text-white underline decoration-white/40 underline-offset-4 hover:text-[#00df89] transition-colors"
            >
              Menú
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Responsive Open Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 p-4 bg-black/40 backdrop-blur-sm md:hidden flex items-start justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="relative w-full max-w-[480px] bg-[#0c0d12]/95 border border-white/20 rounded-3xl p-6 flex flex-col shadow-[0_0_50px_rgba(0,223,137,0.05)] overflow-hidden"
            >
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
                  Servicios <span className="text-white/90 ml-2">/</span>
                </Link>
                <Link
                  href="#casos-de-estudio"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-white hover:text-[#00df89] transition-colors"
                >
                  Casos de Estudio <span className="text-white/90 ml-2">/</span>
                </Link>
                <Link
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-white hover:text-[#00df89] transition-colors"
                >
                  Contacto <span className="text-white/90 ml-2">/</span>
                </Link>
              </div>

              {/* CTA Button */}
              <div className="w-full mt-auto relative z-10">
                <Button size="md" className="w-full">
                  Quiero recibir una propuesta
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
