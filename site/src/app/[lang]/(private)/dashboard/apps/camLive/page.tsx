'use client';

import { useState } from "react";
import Link from "next/link";
import ShowIP from "./components/show-ip";

export default function CameraPage() {
  const [ip, setIp] = useState("");
  const [customIp, setCustomIp] = useState<string | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
      <h2 className="text-4xl text-white mb-8 font-bold tracking-wide">
        ESP32-CAM ao Vivo
        <ShowIP className="ml-4 text-base align-middle" style={{}} />
      </h2>
      
      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Copie e cole o IP da câmera"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => setCustomIp(ip)}
          className="px-6 py-2 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-full font-semibold shadow transition-all duration-300 hover:scale-105"
          disabled={!ip}
        >
          Camera IP
        </button>
        {customIp && (
          <Link
            href={`http://${customIp}/`}
            target="_blank"
            className="mt-2 px-10 py-4 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-full text-lg font-semibold no-underline shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Ir para a camera ({customIp})
          </Link>
        )}
      </div>
    </div>
  );
}
