import type { NextApiRequest, NextApiResponse } from 'next';
import { writeFile } from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // importante: precisamos do corpo bruto
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end('Somente POST');
    return;
  }

  try {
    const chunks: Uint8Array[] = [];

    for await (const chunk of req) {
      chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);
    const fileName = `photo_${Date.now()}.jpg`;
    const filePath = path.join(process.cwd(), 'public', fileName);

    await writeFile(filePath, buffer);

    res.status(200).json({ url: `/${fileName}` });
  } catch (err) {
    console.error('Erro ao salvar imagem:', err);
    res.status(500).json({ error: 'Erro ao salvar imagem' });
  }
}
