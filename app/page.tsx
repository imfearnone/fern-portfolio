"use client"

import GridBackground from "@/components/GridBackground";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Page() {
  return (  
    <div id="main" className="flex flex-col justify-center items-center p-4">
      <GridBackground />

      <section className="flex justify-center items-center w-[80%]">
        <Hero />
      </section>

      <section id="projects" className="mt-16 w-[80%]">
        <h1 className="text-4xl font-bold my-5">Projects</h1>
        
        <Projects />
      </section>

      <section id="about" className="mt-36 w-[80%] rounded-2xl">
        <h1 className="text-4xl font-bold my-5">About Me</h1>
        <About />
      </section>

      <div className="w-[80%] flex flex-col justify-center relative">
        <div className="w-full h-full absolute">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            className="object-cover object-center w-full h-full opacity-100%"
            width={500}
            height={50}
          />
        </div>
        
        <section id="contact" className="mt-36 w-full rounded-2xl relative">
          <h1 className="text-4xl font-bold my-5">Get In Touch</h1>
          <Contacts />
        </section>
        
        <section className="flex justify-center">
          <Footer />
        </section>
      </div>
    </div>
  );
}