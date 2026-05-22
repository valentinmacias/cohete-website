"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    queVendes: "",
    instagram: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-25 text-white selection:bg-[#00ffcc]/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* LEFT COLUMN: HERO HEADLINE & FLOATING ROCKET MOCKUP */}
        <div className="md:col-span-5 flex flex-col space-y-12">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-wide text-white uppercase leading-[1.1]">
            HAGAMOS <br />
            <span className="text-brand-gradient">DESPEGAR</span> TU <br />
            NEGOCIO.
          </h2>

          {/* Hardware accelerated container for the rocket mockup graphic */}
          <div className="relative w-full max-w-[320px] mx-auto md:mx-0 aspect-square flex items-center justify-center">
            <img
              src="/Rocket_dark 1.png"
              alt="Propulsion rocket illustration"
              className="w-full h-full object-contain"
              style={{ animationDuration: "4s" }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-CONVERSION DATA FORM CARD */}
        <div className="md:col-span-7 w-full">
          <div className="w-full bg-[#1F2123]/90 border border-white/10 rounded-2xl p-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="mb-12">
              <h3 className="text-xl sm:text-[32px] font-medium tracking-wide uppercase text-white mb-4">
                COMPLETÁ EL FORMULARIO
              </h3>
              <p className="text-gray-300 text-sm">
                No prometemos. Ejecutamos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-[#F1F1F1]">¿Qué vendés? *</label>
                <input
                  type="text"
                  placeholder="Accesorios de moda"
                  required
                  value={formData.queVendes}
                  onChange={(e) =>
                    setFormData({ ...formData, queVendes: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-[#707070] outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Question 2 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-[#F1F1F1]">
                  Cuenta de Instagram de tu negocio (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="@minegocio"
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-[#707070] outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Question 3 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-[#F1F1F1]">
                  Teléfono de contacto *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="3541 37-1673"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-[#707070] outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Question 4 */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm text-[#F1F1F1]">
                  Mensaje (Opcional)
                </label>
                <textarea
                  placeholder="Quiero conocer más acerca de sus servicios..."
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-[#707070] outline-none transition-colors duration-300 text-sm sm:text-base h-20"
                />
              </div>

              {/* Submit CTA Button */}
              <div>
                <button
                  type="submit"
                  className="inline-block border border-primary/70 bg-gradient-to-r from-[#06FAC3]/10 to-[#05C499]/10 hover:bg-[#00ffcc]/20 text-[#00ffcc] text-sm leading-normal tracking-widest uppercase py-3.5 px-7 rounded-full hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] transition-all duration-300 transform active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  QUIERO RECIBIR UNA PROPUESTA
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
