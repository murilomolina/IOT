import React from 'react';
import Image from 'next/image';

const MainProjects = () => {
  return (
    <>
      {/* First Section */}
      <section
        id="main-projects"
        className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white mb-4"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src={"https://blocks.astratic.com/img/general-img-landscape.png"}
              alt="Projeto 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
              Projeto 1
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0">
              Conecte dispositivos inteligentes para monitoramento e automação em tempo real, com eficiência, segurança e controle remoto através de uma plataforma intuitiva.
            </p>

            <a
              href="#projetos"
              className="inline-block px-8 py-3 rounded-lg text-md font-semibold bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section
        id="main-projects"
        className="py-20 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
            <Image
              src={"https://blocks.astratic.com/img/general-img-landscape.png"}
              alt="Projeto 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
              Projeto 2
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0">
              Uma solução escalável de IoT para automação, conectando sensores e dispositivos com segurança e controle inteligente, pronta para crescer com suas necessidades.
            </p>

            <a
              href="#projetos"
              className="inline-block px-8 py-3 rounded-lg text-md font-semibold bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProjects;
