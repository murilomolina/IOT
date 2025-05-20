"use client";

import { usePathname } from "next/navigation";
import MenuButton from "@/ui/components/menu-button";
// import Link from "next/link";
// import { HomeIcon } from "@heroicons/react/24/outline";

export default function MenuButtonWrapper() {
  const pathname = usePathname();

  if (pathname.includes("/dashboard")) {
    return null
    // (
    //   <Link
    //     href="/"
    //     className="p-1 rounded-md text-blue-700 hover:text-blue-500 transition"
    //     aria-label="Página Inicial"
    //   >
    //     <HomeIcon className="w-6 h-6 text-white" />
    //   </Link>
    // );
  }

  return <MenuButton />;
}
