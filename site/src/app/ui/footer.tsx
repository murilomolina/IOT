import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-blue-900 text-white pt-12 pb-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={60}
            height={60}
          />
          <span className="text-xl font-semibold text-blue-400 hidden sm:inline">IOT Projects</span>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center">

          <Link href="#home" className="text-gray-300 hover:text-blue-500 transition">Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-blue-500 transition">Sobre</Link>
          <Link href="#projetos" className="text-gray-300 hover:text-blue-500 transition">Projetos</Link>
          <Link href="https://murilomolina.vercel.app" target='_blank' className="text-gray-300 hover:text-blue-500 transition">Portfolio</Link>
          <Link href='/dashboard' className="text-gray-300 hover:text-blue-500 transition">Dashboard</Link>
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          <Link href="https://github.com/murilomolina/" target="_blank">
            <Image src="/assets/images/github.svg" alt="github" width={24} height={24} className="hover:scale-110 transition" />
          </Link>
          {/* <Link href="https://facebook.com" target="_blank">
            <Image src="/assets/images/file.svg" alt="Facebook" width={24} height={24} className="hover:scale-110 transition" />
          </Link> */}
          <Link href="https://www.instagram.com/murilomolina_/" target="_blank">
            <Image src="/assets/images/instagram.svg" alt="Instagram" width={24} height={24} className="hover:scale-110 transition" />
          </Link>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="my-8 border-t border-gray-700 w-11/12 mx-auto" />

      {/* Direitos autorais */}
      <div className="text-center text-sm text-gray-400 space-y-1">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{' '}
          <Link href="https://github.com/murilomolina" target="_blank" className="text-blue-400 hover:underline">
            Murilo Molina Barone
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
