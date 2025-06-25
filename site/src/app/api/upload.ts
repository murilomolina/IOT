import { NextApiRequest, NextApiResponse } from 'next';
import { put } from '@vercel/blob';
import formidable, { Fields, Files, File as FormidableFile } from 'formidable';

export const config = {
  api: {
    bodyParser: false, // necessário para usar formidable
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
    const fileData = files.file;

    if (err || !fileData) {
      res.status(400).json({ error: 'Erro ao processar arquivo' });
      return;
    }

    const file = Array.isArray(fileData) ? fileData[0] : fileData;

    if (!file || !(file as FormidableFile).filepath) {
      res.status(400).json({ error: 'Arquivo inválido' });
      return;
    }

    const typedFile = file as FormidableFile;

    const blob = await put(
      `${Date.now()}_${typedFile.originalFilename || 'photo.jpg'}`,
      typedFile.filepath,
      {
        access: 'public',
      }
    );

    res.status(200).json({ url: blob.url });
  });
}
