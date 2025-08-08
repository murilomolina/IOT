'use client';
export async function POST(req: Request) {
  try {
    const { ip, ...config } = await req.json();

    if (!ip || typeof ip !== 'string') {
      return new Response(JSON.stringify({ error: 'IP inválido' }), { status: 400 });
    }

    const response = await fetch(`http://${ip}/config`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });

    const text = await response.text();

    if (!response.ok) {
      return new Response(JSON.stringify({ error: text }), { status: response.status });
    }

    return new Response(text, { status: 200 });
  } catch (error) {
    console.error('Erro no proxy:', error);
    return new Response(JSON.stringify({ error: 'Erro no proxy' }), { status: 500 });
  }
}
