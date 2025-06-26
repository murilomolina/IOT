import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { blobs } = await list();

    return NextResponse.json({ blobs });
  } catch (err) {
    console.error("Erro ao listar blobs:", err);
    return NextResponse.json({ error: "Falha ao buscar arquivos" }, { status: 500 });
  }
}
