import React from 'react';

export default function ExperienceTimeline() {
  return (
    <div className="bg-zinc-900 text-white p-6 font-sans">
      <h2 className="text-2xl font-bold mb-4">Experiencia</h2>
      <div className="relative border-l border-blue-500 pl-6 space-y-8">
        <div className="relative">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[22px] top-1.5"></div>
          <div className="mb-1 text-sm text-gray-400">Mar. 2024 - Actualidad · 3 Meses</div>
          <div className="mb-1 text-sm text-gray-400">Toronto, Canada · Remoto</div>
          <h3 className="text-lg font-semibold">Front-End Developer – SoundAdvice</h3>
        </div>
        <div className="relative">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[22px] top-1.5"></div>
          <div className="mb-1 text-sm text-gray-400">Jul. 2023 - Feb. 2024 · 8 Meses</div>
          <div className="mb-1 text-sm text-gray-400">Bogotá, Colombia · Remoto</div>
          <h3 className="text-lg font-semibold mb-2">Front-End Developer – Qantto, LLC</h3>
          <p className="text-sm text-gray-400">
            Responsable del diseño y desarrollo Front-end de una herramienta de automatización de cotizaciones
            para empresas globales. Lanzamos con éxito el producto (SaaS), superando las expectativas del cliente y
            mejorando la eficiencia de cotizaciones.
          </p>
        </div>
      </div>
    </div>
  );
}