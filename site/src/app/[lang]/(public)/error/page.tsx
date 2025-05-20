'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "Ocorreu um erro inesperado.";
  if (error === "AccessDenied") {
    errorMessage = "Você não tem permissão para acessar esta aplicação.";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 max-w-md text-center border border-gray-700">
        <h1 className="text-4xl font-extrabold text-red-500 mb-4">
          ⚠ Erro de Autenticação
        </h1>
        <p className="text-lg text-gray-300">{errorMessage}</p>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/login"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-md text-white font-medium"
          >
            🔑 Tentar Novamente
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 shadow-md text-white font-medium"
          >
            🏠 Voltar à Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
