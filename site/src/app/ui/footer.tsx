import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo or Brand Name */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets/images/logo.svg" 
            alt="Logo"
            width={100}
            height={100}
            // className="rounded-full"
          />
          {/* <span className="text-lg font-semibold text-blue-500"></span> */}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
          <Link href="#home" className="text-gray-300 hover:text-blue-500 transition-all duration-300">Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-blue-500 transition-all duration-300">Sobre Nós</Link>
          <Link href="#projetos" className="text-gray-300 hover:text-blue-500 transition-all duration-300">Projetos</Link>
          {/* <Link href="#contato" className="text-gray-300 hover:text-blue-500 transition-all duration-300">Contato</Link> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="https://twitter.com" target="_blank">
            <Image src="/assets/images/file.svg" alt="Twitter" width={24} height={24} className="hover:scale-110 transition-all duration-300" />
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <Image src="/assets/images/file.svg" alt="Facebook" width={24} height={24} className="hover:scale-110 transition-all duration-300" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image src="/assets/images/file.svg" alt="Instagram" width={24} height={24} className="hover:scale-110 transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8">
        <p>&copy; {new Date().getFullYear()}  Todos os direitos reservados.</p>
        <p>developed by <Link href={'https://github.com/murilomolina'}>Murilo Molina Barone</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
