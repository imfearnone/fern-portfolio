'use client'
import Image from "next/image";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import GridBackground from "@/components/gridBackground";
import footerImg from "@/public/footer-grid.svg";

export default function Home() {
  return (  
    <main className="flex flex-col justify-center items-center p-4">
      <GridBackground />

      <section className="flex justify-center items-center w-[80%]">
        <Hero />
      </section>

      <section id="projects" className="mt-16 w-[80%]">
        <h1 className="text-2xl md:text-4xl font-bold my-5">Projects</h1>
        
        <Projects />
      </section>

      <section id="about" className="mt-36 w-[80%] rounded-2xl">
        <h1 className="text-2xl md:text-4xl font-bold my-5">About Me</h1>
        <About />
      </section>

      <div className="w-[80%] flex flex-col justify-center relative">
        <div className="w-full h-full absolute">
          <Image
            src={footerImg}
            alt="grid"
            className="object-cover object-center w-full h-full opacity-100%"
          />
        </div>
        
        <section id="contact" className="mt-36 w-full rounded-2xl relative">
          <h1 className="text-2xl md:text-4xl font-bold my-5">Get In Touch</h1>
          <Contacts />
        </section>
        
        <section className="flex justify-center">
          <Footer />
        </section>
      </div>
    </main>
  );
}