"use client";

import React from "react";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="w-full h-screen relative flex flex-col justify-center items-center min-h-[70vh] px-6 text-center bg-gradient-to-br from-gray-900 via-blue-900 to-black"
    >
      {/* Fundo animado usando Tailwind (pulse) e radial gradient via background-image utilitário */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-20 animate-pulse"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(59,130,246,0.6), transparent 70%)",
        }}
      />

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient-x mb-6 max-w-4xl drop-shadow-lg">
        Plataforma de Controle e Monitoramento IoT
      </h1>

      <p className="max-w-xl text-blue-300 text-lg md:text-xl mb-10 leading-relaxed">
        Visualize e gerencie dispositivos conectados em tempo real, com segurança e alta performance.
      </p>

      <style>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
            filter: brightness(1);
          }
          50% {
            background-position: 100% 50%;
            filter: brightness(1.2);
          }
          100% {
            background-position: 0% 50%;
            filter: brightness(1);
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
