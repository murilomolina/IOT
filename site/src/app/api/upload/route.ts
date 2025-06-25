import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import formidable from 'formidable';
import { Fields, Files, File as FormidableFile } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const form = formidable({ multiples: false });

  const buffer = await new Promise<{ fields: Fields; files: Files }>((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  const file = Array.isArray(buffer.files.file)
    ? buffer.files.file[0]
    : buffer.files.file;

  if (!file || !(file as FormidableFile).filepath) {
    return NextResponse.json({ error: 'Arquivo inválido' }, { status: 400 });
  }

  const typedFile = file as FormidableFile;

  const blob = await put(
    `${Date.now()}_${typedFile.originalFilename || 'photo.jpg'}`,
    typedFile.filepath,
    { access: 'public' }
  );

  return NextResponse.json({ url: blob.url });
}
