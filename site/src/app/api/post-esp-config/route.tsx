import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { ip, config } = await req.json();

    if (!ip || !config) {
      return NextResponse.json({ error: 'IP ou config não fornecido' }, { status: 400 });
    }

    const response = await fetch(`http://${ip}/config`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });

    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error) {
    console.error('Erro proxy:', error);
    return NextResponse.json({ error: 'Erro no proxy' }, { status: 500 });
  }
}
