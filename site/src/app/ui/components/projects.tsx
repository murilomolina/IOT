'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects = [
    { id: 1, imageSrc: 'https://blocks.astratic.com/img/general-img-landscape.png', title: 'Projeto 1', description: 'Descrição do Projeto 1' },
    { id: 2, imageSrc: 'https://blocks.astratic.com/img/general-img-landscape.png', title: 'Projeto 2', description: 'Descrição do Projeto 2' },
    { id: 3, imageSrc: 'https://blocks.astratic.com/img/general-img-landscape.png', title: 'Projeto 3', description: 'Descrição do Projeto 3' },
    { id: 4, imageSrc: 'https://blocks.astratic.com/img/general-img-landscape.png', title: 'Projeto 4', description: 'Descrição do Projeto 4' },
    { id: 5, imageSrc: 'https://blocks.astratic.com/img/general-img-landscape.png', title: 'Projeto 5', description: 'Descrição do Projeto 5' },
    { id: 6, imageSrc: 'https://blocks.astratic.com/img/general-img-landscape.png', title: 'Projeto 6', description: 'Descrição do Projeto 6' },
    
    // { id: 1, imageSrc: 'https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg', title: 'Projeto 1', description: 'Descrição do Projeto 1' },
    // { id: 2, imageSrc: 'https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg', title: 'Projeto 2', description: 'Descrição do Projeto 2' },
    // { id: 3, imageSrc: 'https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg', title: 'Projeto 3', description: 'Descrição do Projeto 3' },
    // { id: 4, imageSrc: 'https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg', title: 'Projeto 4', description: 'Descrição do Projeto 4' },
    // { id: 5, imageSrc: 'https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg', title: 'Projeto 5', description: 'Descrição do Projeto 5' },
    // { id: 6, imageSrc: 'https://asdsdasddfdgdfgg.public.blob.vercel-storage.com/diretorio1/diretorio3/foto.jpg', title: 'Projeto 6', description: 'Descrição do Projeto 6' },
  ];

  return (
    <section id="projetos" className="py-16 px-6 md:px-16 bg-gray-900 text-white relative">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nossos Projetos</h2>
        <p className="text-lg sm:text-xl text-gray-300">Confira alguns dos nossos projetos mais recentes e incríveis.</p>
      </div>

      {/* Swiper Carrossel */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={!isMobile}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
        modules={[Navigation, Autoplay]}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="relative rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Indicador de rotação aprimorado */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-gray-300 animate-bounce">
        <span className="text-sm font-semibold">Deslize para ver mais</span>
      </div>
    </section>
  );
};

export default Projects;
