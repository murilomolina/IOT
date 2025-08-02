// 'use client';

// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function CameraPage() {
//   const [customIp, setCustomIp] = useState("");
//   const [ip, setIp] = useState<string | null>(null);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     fetch('/api/notify-ip')
//       .then(res => res.text())
//       .then(setIp)
//       .catch(console.error);
//   }, []);

//   const copyToClipboard = () => {
//     if (!ip) return;
//     navigator.clipboard.writeText(ip).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // feedback visual por 2s
//     });
//   };

//   return (
//     <div className="min-h-[80vh] flex flex-col justify-center items-center">
//       <h2 className="text-4xl text-white mb-8 font-bold tracking-wide">
//         ESP32-CAM ao Vivo
//       </h2>
//       <button onClick={copyToClipboard}>
//         {copied ? '✅ Copiado!' : '📋 Copiar'}
//       </button>
      
//       <div className="flex flex-col items-center gap-2">
//         <input
//           type="text"
//           placeholder="Copie e cole o IP da câmera"
//           value={ip || ""}
//           onChange={(e) => setIp(e.target.value)}
//           className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />
//         <button
//           onClick={() => setCustomIp(ip || "")}
//           className="px-6 py-2 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-full font-semibold shadow transition-all duration-300 hover:scale-105"
//           disabled={!ip}
//         >
//           Camera IP
//         </button>
//         {customIp && (
//           <Link
//             href={`http://${customIp}/`}
//             target="_blank"
//             className="mt-2 px-10 py-4 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-full text-lg font-semibold no-underline shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
//           >
//             Ir para a camera ({customIp})
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CameraPage() {
  const [ip, setIp] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);  
  const [ipList, setIpList] = useState<string[]>([]);


  useEffect(() => {
  fetch('/api/last-esp-cam')
    .then(res => res.json())
    .then(data => {
      setIpList(data.ips);
      setIp(data.ips?.[0] || null);
    })
    .catch(console.error);
}, []);



  const copyToClipboard = () => {
    if (!ip) return;
    navigator.clipboard.writeText(ip).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900 tracking-wide drop-shadow-lg">
          ESP32-CAM ao Vivo
        </h1>

        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-2">
            Ultimo IP recebido
          </p>
          {ip ? (
            <div className="w-full rounded-lg px-4 py-3 border text-gray-900 border-gray-300 bg-white text-lg text-center">
              {ip}
            </div>
          ) : (
            <div className="w-full rounded-lg px-4 py-3 border text-gray-500 border-gray-300 bg-white text-lg text-center italic">
              Nenhum IP recebido
            </div>
          )}
        </div>

        <button
          onClick={copyToClipboard}
          className={`w-full mb-6 py-3 rounded-lg font-semibold transition 
            ${copied 
              ? "bg-green-500 text-white shadow-lg" 
              : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg"}`}
          aria-label="Copiar IP para área de transferência"
        >
          {copied ? '✅ Copiado!' : '📋 Copiar IP'}
        </button>

        {ip && (
          <Link
            href={`http://${ip}/`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center w-full mb-4 py-3 rounded-lg font-semibold text-white transition 
              bg-gradient-to-r from-[#43cea2] to-[#185a9d] shadow-lg
              hover:scale-105 hover:shadow-2xl`}
            aria-label="Abrir câmera no IP informado"
          >
            Ir para a câmera
          </Link>
        )}


        {ipList.length > 0 && (
          <div className="mb-6 text-left text-black">
            <h2 className="text-lg font-semibold mb-2">Últimos IPs recebidos:</h2>
            <ul className="space-y-1">
              {ipList.map((item, index) => (
                <li key={index}>
                  <a
                    href={`http://${item}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
