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
  const name = body.name;
  const ip = body.ip;

  if (!ip || !name) {
    return new NextResponse('IP ou name não fornecido', { status: 400 });
  }

  console.log('Salvando no banco:', { ip, name });

  const { data, error } = await supabase
    .from('address')
    .upsert([{ ip: ip, name: name }])
    .select();

  if (error) {
    console.error('Erro ao inserir no Supabase:', error);
    return new NextResponse('Erro ao salvar no banco de dados', { status: 500 });
  }

  console.log('Registro salvo:', data);

  return new NextResponse('IP recebido e salvo com sucesso', { status: 200 });
}
