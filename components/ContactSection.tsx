"use client";

import React, { useState } from "react";
import { FadeInUp } from "./animation/FadeInUp";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    queVendes: "",
    instagram: "",
    telefono: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setIsSuccess(false);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);

        setFormData({
          queVendes: "",
          instagram: "",
          telefono: "",
          mensaje: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="w-full max-w-6xl mx-auto px-6 md:px-0 pt-14 pb-10 lg:py-25 text-white selection:bg-[#00ffcc]/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* LEFT COLUMN: HERO HEADLINE & FLOATING ROCKET MOCKUP */}
        <div className="md:col-span-5 flex flex-col">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-wide text-white uppercase leading-[1.1]">
              HAGAMOS <br />
              <span className="text-brand-gradient">DESPEGAR</span> TU <br />
              NEGOCIO.
            </h2>
          </FadeInUp>

          {/* Hardware accelerated container for the rocket mockup graphic */}
          <div className="md:mt-12 hidden md:flex relative w-full max-w-[320px] mx-auto md:mx-0 aspect-square items-center justify-center">
            <FadeInUp>
              <img
                src="/Rocket_dark 1.png"
                alt="Propulsion rocket illustration"
                className="w-full h-full object-contain"
                style={{ animationDuration: "4s" }}
              />
            </FadeInUp>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-CONVERSION DATA FORM CARD */}
        <div className="md:col-span-7 w-full">
          <div className="w-full bg-[#1F2123]/90 border border-white/10 rounded-2xl p-6 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="mb-8 md:mb-12">
              <FadeInUp>
                <h3 className="text-[28px] sm:text-[32px] font-medium tracking-wide uppercase text-white mb-4">
                  COMPLETÁ EL FORMULARIO
                </h3>
              </FadeInUp>
              <FadeInUp>
                <p className="text-gray-300 text-sm">
                  Nos contactaremos en menos de 24hs
                </p>
              </FadeInUp>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1 */}
              <div className="flex flex-col space-y-2">
                <FadeInUp>
                  <label className="text-sm text-[#F1F1F1]">
                    ¿Qué vendés? *
                  </label>
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
                </FadeInUp>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col space-y-2">
                <FadeInUp>
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
                </FadeInUp>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col space-y-2">
                <FadeInUp>
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
                </FadeInUp>
              </div>

              {/* Question 4 */}
              <div className="flex flex-col space-y-2">
                <FadeInUp>
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
                </FadeInUp>
              </div>

              {/* Submit CTA Button */}
              <div className="flex flex-col space-y-4">
                <FadeInUp>
                  <div>
                    <button
                      type="submit"
                      className={`inline-block border text-xs md:text-sm leading-normal tracking-widest uppercase py-3.5 px-5 md:px-7 rounded-full transition-all duration-300 transform whitespace-nowrap
                      ${
                        loading
                          ? "border-gray-700 bg-gray-800/40 text-gray-500 cursor-not-allowed animate-pulse scale-100"
                          : "border-primary/70 bg-gradient-to-r from-[#06FAC3]/10 to-[#05C499]/10 hover:bg-[#00ffcc]/20 text-[#00ffcc] hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] active:scale-95 cursor-pointer"
                      }`}
                      disabled={loading}
                    >
                      QUIERO RECIBIR UNA PROPUESTA
                    </button>
                  </div>
                  {isSuccess && (
                    <p className="text-sm text-[#00ffcc] font-medium tracking-wide">
                      Muchas gracias. Nos comunicaremos contigo.
                    </p>
                  )}
                </FadeInUp>
              </div>
            </form>
          </div>
        </div>

        <div className="md:hidden relative w-full max-w-[500px] mx-auto md:mx-0 flex items-center">
          <FadeInUp>
            <img
              src="/Rocket_dark 1.png"
              alt="Propulsion rocket illustration"
              className="w-[70%] h-fit object-contain"
              style={{ animationDuration: "4s" }}
            />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
