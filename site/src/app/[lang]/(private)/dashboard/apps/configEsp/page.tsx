'use client';
import React, { useState, useEffect } from 'react';

export default function ConfigPage() {
  const [camServer, setCamServer] = useState(true);
  const [uploadAPI, setUploadAPI] = useState(false);
  const [sdCard, setSdCard] = useState(false);
  const [ledESP, setLedESP] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ip, setIp] = useState(''); // IP do dispositivo

  useEffect(() => {
    async function fetchLastIp() {
      try {
        const res = await fetch('/api/last-esp-cam');
        const data = await res.json();
        if (Array.isArray(data.ips) && data.ips.length > 0) {
          setIp(data.ips[0]);
        }
      } catch (error) {
        console.error('Erro ao buscar último IP:', error);
      }
    }
    fetchLastIp();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(false);

    const config = { camServer, uploadAPI, sdCard, ledESP };

    try {
      const res = await fetch(`http://${ip}/config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });


      const text = await res.text();

      if (res.ok) {
        setMessage('✅ ' + text);
        setError(false);
      } else {
        setMessage('❌ ' + text);
        setError(true);
      }
    } catch (err) {
      setMessage('❌ Erro ao enviar configuração.');
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const ToggleSwitch = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
      <span className="text-white">{label}</span>
      <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? 'bg-green-500' : 'bg-gray-500'
          }`}
        aria-pressed={checked}
        aria-label={`Toggle ${label}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${checked ? 'translate-x-6' : 'translate-x-1'
            }`}
        />
      </button>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 text-gray-900 rounded-xl">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-800 text-center">
        Configurar ESP32-CAM
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="text-gray-700 font-medium">IP da ESP32-CAM:</span>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Ex: 192.168.0.100"
            className="w-full mt-2 p-3 rounded-md bg-white border border-gray-300 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </label>

        <ToggleSwitch
          label="Ativar servidor de câmera"
          checked={camServer}
          onChange={() => setCamServer(!camServer)}
        />
        <ToggleSwitch
          label="Ativar Upload via API"
          checked={uploadAPI}
          onChange={() => setUploadAPI(!uploadAPI)}
        />
        <ToggleSwitch
          label="Ativar gravação em SD"
          checked={sdCard}
          onChange={() => setSdCard(!sdCard)}
        />
        <ToggleSwitch
          label="Ativar LED da ESP"
          checked={ledESP}
          onChange={() => setLedESP(!ledESP)}
        />

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-indigo-600
          hover:from-blue-600 hover:to-indigo-700 rounded-md font-semibold text-white
          shadow-md transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Enviando...' : '🚀 Enviar Configuração'}
        </button>
      </form>

      {message && (
        <p
          className={`mt-6 text-center font-semibold max-w-full truncate ${error ? 'text-red-500' : 'text-green-600'
            }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
