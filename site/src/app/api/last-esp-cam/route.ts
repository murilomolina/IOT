import { supabase } from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('address')
    .select('ip')
    .eq('name', 'ESP32-CAM')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new NextResponse(JSON.stringify({ ips: data.map(d => d.ip) }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
