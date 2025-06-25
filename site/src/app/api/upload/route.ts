import { NextRequest, NextResponse } from 'next/server';
import { IncomingMessage } from 'http';
import { Readable } from 'stream';
import formidable, { Files, File as FormidableFile } from 'formidable';
import { put } from '@vercel/blob';

// Necessário para usar formidable no App Router
export const config = {
    api: {
        bodyParser: false,
    },
};

// Transforma um Web Request em Node Readable (para o formidable aceitar)
function readableWebToNodeReadable(webReadable: ReadableStream<Uint8Array>): Readable {
    const reader = webReadable.getReader();
    return new Readable({
        async read() {
            const { done, value } = await reader.read();
            if (done) {
                this.push(null);
            } else {
                this.push(value);
            }
        },
    });
}

export async function POST(req: NextRequest) {
    try {
        const nodeReq = readableWebToNodeReadable(req.body! as ReadableStream<Uint8Array>) as IncomingMessage;

        const form = formidable({ multiples: false });

        const { files }: { files: Files } = await new Promise((resolve, reject) => {
            form.parse(nodeReq, (err, fields, files) => {
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
    } catch (error: unknown) {
        return NextResponse.json(
            { error: 'Erro ao processar o upload', details: (error as Error)?.message || String(error) },
            { status: 500 }
        );
    }
}
