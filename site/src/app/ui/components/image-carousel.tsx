'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper';

interface Project {
  image: string;
  title: string;
  description: string;
}

export default function ImageCarousel({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  }, []);

  const currentProject = projects[currentIndex]; // Pegamos o projeto diretamente do array

  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={!isMobile}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSlideChange={handleSlideChange}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen flex items-center justify-center">
              <Image
                src={project.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-center text-center text-white p-6 md:p-12 z-10">
                <div className={`bg-black/50 p-6 md:p-10 rounded-3xl shadow-lg max-w-xl ${isMobile ? 'text-sm' : 'text-lg'}` }>
                  <h1 className={`font-extrabold mb-4 ${isMobile ? 'text-lg' : 'text-3xl md:text-5xl'}`}>
                    {isMobile ? 'Empresa' : currentProject.title}
                  </h1>
                  <p className={`mb-6 font-light ${isMobile ? 'text-xs' : 'text-lg md:text-2xl'}`}>
                    {isMobile ? 'Conheça mais sobre nossos projetos e localizações.' : currentProject.description}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {!isMobile ? (
                      <>
                        <Link href={currentProject.title} prefetch={false}> {/* i have to find a better way to go to project info */}
                          <button className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
                            Saiba Mais
                          </button>
                        </Link>
                      </>
                    ) : (
                      <Link href="#about" className="bg-blue-500 text-black px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300">
                        Saiba Mais!
                      </Link>
                    )}
                  </div>
                </div>
                {!isMobile && (
                  <Link href="#about">
                    <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-300 transition-all duration-300 w-max z-20">
                      Conheça mais!
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}