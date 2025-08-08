'use client';
import  { supabase }  from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

type Device = {
  id: string;
  name: string;
  created_at: string;
};

export default function Page() {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const { data, error } = await supabase
        .from('address')
        .select('id, name, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar dispositivos:', error);
        return;
      }

      setDevices(data || []);
    };

    fetchDevices();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Dashboard Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceStatusCard key={device.id} name={device.name} lastSeen={device.created_at} />
        ))}
      </div>
    </div>
  );
}

function DeviceStatusCard({ name, lastSeen }: { name: string; lastSeen: string }) {
  const now = new Date();
  const lastSeenDate = parseISO(lastSeen);
  const diffMs = now.getTime() - lastSeenDate.getTime();
  const diffDays = diffMs / 1000 / 60 / 60 / 24;
  const isOnline = diffDays <= 5;

  return (
    <div
      className={`rounded-xl p-5 border shadow-md transition 
        ${isOnline ? "bg-green-900/30 border-green-500/30" : "bg-red-900/30 border-red-500/30"}`}
    >
      <h2 className="flex items-center text-xl font-semibold text-white mb-2">
        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
        {name}
      </h2>

      <p className="text-xs text-gray-400">
        Última atualização: {formatDistanceToNowStrict(lastSeenDate, { locale: ptBR })} atrás
      </p>
    </div>
  );
}