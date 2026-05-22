"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    queVendes: "Accesorios de moda",
    instagram: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 text-white font-sans selection:bg-[#00ffcc]/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* LEFT COLUMN: HERO HEADLINE & FLOATING ROCKET MOCKUP */}
        <div className="md:col-span-5 flex flex-col space-y-12">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white uppercase leading-[1.1]">
            HAGAMOS <br />
            <span className="text-[#00ffcc]">DESPEGAR</span> TU <br />
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
          <div className="w-full bg-[#161616]/90 border border-white/10 rounded-2xl p-8 sm:p-12 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-white mb-2">
                COMPLETÁ EL FORMULARIO
              </h3>
              <p className="text-gray-400 text-sm">
                No prometemos. Ejecutamos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-gray-400 tracking-wider">
                  ¿Qué vendés? *
                </label>
                <input
                  type="text"
                  required
                  value={formData.queVendes}
                  onChange={(e) =>
                    setFormData({ ...formData, queVendes: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-gray-600 outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Question 2 */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-gray-400 tracking-wider">
                  Cuenta de Instagram de tu negocio (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="@minegocio"
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-gray-600 outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Question 3 */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-gray-400 tracking-wider">
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
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-gray-600 outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Question 4 */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-gray-400 tracking-wider">
                  Mensaje (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Quiero conocer más acerca de sus servicios..."
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-700 focus:border-[#00ffcc] py-2 text-white placeholder-gray-600 outline-none transition-colors duration-300 text-sm sm:text-base"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-block border border-[#00ffcc]/30 bg-[#0c1f1a] hover:bg-[#00ffcc]/20 text-[#00ffcc] text-xs font-bold tracking-widest uppercase py-3.5 px-8 rounded-full transition-all duration-300 transform active:scale-95 whitespace-nowrap"
                >
                  RECIBIR PROPUESTA
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
