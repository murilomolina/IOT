import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  ip?: string;
};

let lastReceivedIP: string | null = null; // Armazenamento temporário

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { ip } = req.body;

    if (!ip) {
      return res.status(400).json({ message: 'IP não fornecido' });
    }

    lastReceivedIP = ip;

    return res.status(200).json({ message: 'IP recebido com sucesso', ip });
  } else if (req.method === 'GET') {
    return res.status(200).json({ message: 'Último IP', ip: lastReceivedIP ?? 'Desconhecido' });
  }

  return res.status(405).json({ message: 'Método não permitido' });
}
