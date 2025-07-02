import Image from "next/image";
import UserButton from "@/app/ui/auth/user-button";
import MenuButtonWrapper from "@/ui/components/menubutton-wrapper";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-gray-900 shadow-lg bg-gray-900/90 backdrop-blur-md">
      <div className="relative flex h-16 items-center px-6 md:px-10">

        {/* Botão da sidebar - esquerda em mobile, visível só em mobile */}
        <div className="block md:hidden text-blue-300 cursor-pointer hover:text-blue-500 transition duration-300">
          <MenuButtonWrapper />
        </div>

        {/* Logo - centralizado em mobile, alinhado à esquerda em desktop */}
        <div className="absolute inset-0 flex justify-center items-center md:static md:justify-start md:items-center md:space-x-4">
          <Image
            priority
            src="/assets/images/logo.svg"
            height={100}
            width={100}
            alt="Logo"
            quality={100}
            className="h-12 w-auto rounded-sm shadow-sm"
          />
          <p className="hidden sm:block text-xl font-bold text-white tracking-wide drop-shadow-sm">
            IOT Projects
          </p>
        </div>

        {/* Direita - MenuButton (desktop) + UserButton */}
        <div className="flex items-center space-x-4 ml-auto">
          <div className="hidden md:block text-blue-300 cursor-pointer hover:text-blue-500 transition duration-300">
            <MenuButtonWrapper />
          </div>
          <UserButton />
        </div>

      </div>
    </header>
  );
}
