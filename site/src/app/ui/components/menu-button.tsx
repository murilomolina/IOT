"use client";

import { useState } from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Sidebar from "@/ui/components/sidebar"; // ajuste o caminho se necessário
import Link from "next/link";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-40">
      {/* Botão para abrir o menu no mobile */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir Menu"
        className="block md:hidden p-4"
      >
        <Bars3BottomLeftIcon className="w-8 h-8 text-white hover:text-gary-300 transition" />
      </button>

      {/* Sidebar Mobile */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Menu Desktop (visível em md+) */}
      <div className="hidden md:flex gap-6 text-white text-sm font-normal">
        <Link href="#inicio" className="hover:text-white transition">Início</Link>
        <Link href="#main-projects" className="hover:text-white transition">Principais Projetos</Link>
        <Link href="/contato" className="hover:text-white transition">Contato</Link>
        <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
      </div>
    </div>
  );
}
