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
      const res = await fetch('/api/post-esp-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ip, config }),
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
      <span>{label}</span>
      <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
          checked ? 'bg-green-500' : 'bg-gray-500'
        }`}
        aria-pressed={checked}
        aria-label={`Toggle ${label}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">⚙ Configurar ESP32-CAM</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-300">IP da ESP32-CAM:</span>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Ex: 192.168.0.100"
            className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 rounded font-semibold disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Enviando...' : '🚀 Enviar Configuração'}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center font-semibold overflow-hidden ${
            error ? 'text-red-400' : 'text-green-400'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
