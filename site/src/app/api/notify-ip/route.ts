// import { NextRequest, NextResponse } from 'next/server';

// let lastReceivedIP: string | null = null;

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const ip = body.ip;

//   if (!ip) {
//     return new NextResponse('IP não fornecido', { status: 400 });
//   }

//   lastReceivedIP = ip;
//   return new NextResponse('IP recebido com sucesso', { status: 200 });
// }

// export async function GET() {
//   return new NextResponse(lastReceivedIP ?? '', {
//     status: 200,
//     headers: { 'Content-Type': 'text/plain' },
//   });
// }


import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';


export async function POST(req: NextRequest) {
  const body = await req.json();
  const device = body.device;
  const ip = body.ip;

  if (!ip && !device) {
    return new NextResponse('IP não fornecido', { status: 400 });
  }


  const { error } = await supabase
    .from('address')
    .upsert([{ ip: ip, name: device }]);

  if (error) {
    console.error('Erro ao inserir no Supabase:', error);
    return new NextResponse('Erro ao salvar no banco de dados', { status: 500 });
  }

  return new NextResponse('IP recebido e salvo com sucesso', { status: 200 });
}
