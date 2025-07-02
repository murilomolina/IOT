import { NextRequest, NextResponse } from 'next/server';

let lastReceivedIP: string | null = null;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const ip = body.ip;

  if (!ip) {
    return new NextResponse('IP não fornecido', { status: 400 });
  }

  lastReceivedIP = ip;
  return new NextResponse('IP recebido com sucesso', { status: 200 });
}

export async function GET() {
  return new NextResponse(lastReceivedIP ?? '', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}
