'use server'
import ImageCarousel from "@/ui/components/image-carousel";
import AboutUs from "../../../ui/components/about-us";
import Footer from "@/app/ui/footer";
import Projects from "@/app/ui/components/projects";
import getExposedPictures from "../../../../../public/assets/images/exposedPictures";

export default async function Home() {
  const projects = await getExposedPictures(); // Carrega as fotos do servidor no servidor

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Main Content */}
      <main className="flex flex-col gap-8 font-[family-name:var(--font-geist-sans)]">

        {/* Image Carousel */}
        <section id="#home">
          <ImageCarousel projects={projects} />
        </section>

        {/* About Us Section */}
        <section id="#about">
          <AboutUs />
        </section>

        {/* Projects */}
        <section id="#projects">
          <Projects />
        </section>
      </main>

      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
}
