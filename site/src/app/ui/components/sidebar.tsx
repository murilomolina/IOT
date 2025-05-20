"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* background*/}
      <div
        className={clsx(
          "fixed inset-0 z-20 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-30 w-64 bg-blue-900 text-white shadow-xl transform transition-transform duration-300 ease-in-out px-1",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* header menu */}
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-lg font-bold tracking-wide">Menu</h2>
          <button onClick={onClose} aria-label="Fechar Menu">
            <XMarkIcon className="w-7 h-7 hover:text-gray-300 transition" />
          </button>
        </div>

        {/* NAV */}
        <nav className="p-2 space-y-3 bg-blue-900/95 rounded-xl">
          {[
            { name: "Início", href: "/" },
            { name: "Sobre Nós", href: "#about" },
            { name: "Projetos", href: "#projetos" },
            // { name: "Contato", href: "/contato" },
            { name: "Dashboard", href: "/dashboard" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 rounded-md text-white font-semibold hover:text-white hover:bg-white/10 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
