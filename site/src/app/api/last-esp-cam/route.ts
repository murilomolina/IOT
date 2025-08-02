// src/app/api/last-esp-cam/route.ts
import { supabase } from '@/app/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('address')
    .select('esp_cam')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new NextResponse(JSON.stringify({ ips: data.map(d => d.esp_cam) }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
