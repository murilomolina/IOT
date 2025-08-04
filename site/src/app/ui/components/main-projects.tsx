import React from 'react';
// import Link from 'next/link';
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
              src={"https://blog.eletrogate.com/wp-content/uploads/2022/01/Setup_programar-1024x634.png"}
              alt="Projeto 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
              Cam Iot
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0">
              Projeto utilizando ESP32-CAM para monitoramento em tempo real, com integração de fotos e vídeos, ideal para aplicações de segurança e vigilância.
              <br />
                O projeto inclui uma grade de fotos ao vivo, permitindo visualizar imagens capturadas pela câmera em tempo real, com timestamps para fácil identificação. Utilizando a API (da Vercel) para listar blobs, as imagens são ordenadas do mais recente para o mais antigo, proporcionando uma visão clara e organizada do histórico de capturas.
              
            </p>

            {/* <Link
              href="#projetos"
              className="inline-block px-8 py-3 rounded-lg text-md font-semibold bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Saiba Mais
            </Link> */}
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
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmdSxREcfkLK3nRl7kWu50GG6FU4BeNLomA&s"}
              alt="Projeto 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
              Em desenvolvimento
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0">
              Sensor de presença com ESP32, utilizando o sensor de movimento PIR para detectar presença. Desenvolvido para prevenção de acidentes de idosos com dificuldade de mobilidade, o projeto inclui um sistemas de alertas que notifica o usuário quando uma pessoa é detectada em uma área específica e tambem emite um alerta sonoro.
            </p>

            {/* <Link
              href="#projetos"
              className="inline-block px-8 py-3 rounded-lg text-md font-semibold bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Saiba Mais
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProjects;
