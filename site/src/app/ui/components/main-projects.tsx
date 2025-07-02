import React from 'react';
import Image from 'next/image';

const MainProjects = () => {
  return (
    <>
      {/* First Section */}
      <section id='main-projects' className="about-us py-20 px-6 md:px-16 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105">
            <Image 
              // src={"https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg"} 
              src={"https://blocks.astratic.com/img/general-img-landscape.png"}
              alt="About Us" 
              fill 
              // objectFit="cover" 
              className="object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Projeto 1
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Este projeto de IoT conecta dispositivos inteligentes para monitoramento e automação em tempo real, proporcionando maior eficiência, segurança e controle remoto através de uma plataforma intuitiva e escalável.
            </p>

            {/* Button */}
            <a href="#projetos" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-md font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="about-us py-20 px-6 md:px-16 bg-gray-900 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Projeto 2
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Este projeto de IoT conecta dispositivos inteligentes para monitoramento e automação em tempo real, proporcionando maior eficiência, segurança e controle remoto através de uma plataforma intuitiva e escalável.
            </p>

            {/* Button */}
            <a href="#projetos" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-md font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
              Saiba Mais
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 relative h-72 md:h-96 rounded-lg overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105">
            <Image 
              // src={"https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg"} 
              src={"https://blocks.astratic.com/img/general-img-landscape.png"}
              alt="About Us" 
              fill 
              // objectFit="cover" 
              className="object-cover"
            />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default MainProjects;
