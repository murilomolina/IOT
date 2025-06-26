import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "Nenhum arquivo recebido." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}_${file.name.replaceAll(" ", "_")}`;

  try {
    const blob = await put(fileName, buffer, { access: "public" });
    return NextResponse.json({ url: blob.url }, { status: 201 });
  } catch (err) {
    console.error("Erro ao salvar no Vercel Blob:", err);
    return NextResponse.json({ error: "Falha no upload." }, { status: 500 });
  }
}
