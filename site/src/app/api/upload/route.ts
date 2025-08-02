import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";
import { put } from "@vercel/blob";

const API_SECRET = process.env.UPLOAD_API_KEY;

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || authHeader !== `Bearer ${API_SECRET}`) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: "Tipo de conteúdo inválido." }, { status: 400 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file || typeof file !== "object") {
      return NextResponse.json({ error: "Nenhum arquivo enviado." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `esp_cam/photos/${Date.now()}_${file.name.replaceAll(" ", "_")}`;

    const blob = await put(fileName, buffer, { access: "public" });

    // para salvar os metadados no Supabase "cache"
    const { error: dbError } = await supabase.from('blobs').insert({
      pathname: fileName,
      url: blob.url,
      timestamp: Date.now()
    });

    if (dbError) {
      console.error("Erro ao salvar metadados no Supabase:", dbError);
    }

    return NextResponse.json({ url: blob.url }, { status: 201 });
  } catch (err) {
    console.error("Erro ao processar o upload:", err);
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}
