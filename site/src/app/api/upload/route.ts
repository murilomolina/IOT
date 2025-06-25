import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import formidable, { Files, File as FormidableFile } from 'formidable';
import { IncomingMessage } from 'http';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: NextRequest) {
    const form = formidable({ multiples: false });

    const { files }: { files: Files } = await new Promise((resolve, reject) => {
        form.parse(req as unknown as IncomingMessage, (err, fields, files) => {
            if (err) reject(err);
            else resolve({ files });
        });
    });


    const file = Array.isArray(files.file) ? files.file[0] : files.file;

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
