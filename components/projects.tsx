import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { projectlists } from "@/data";
import {motion} from 'framer-motion';
import { slideInFromLeft } from '../animation/animation';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="w-full flex flex-col space-y-10">
        {projectlists.map((project, index) => (
            <motion.div 
                key={index} 
                className="w-full flex flex-col lg:flex-row rounded-2xl"
                initial="hidden"
                whileInView="visible" 
                viewport={{ amount: 0.3 }} 
                variants={slideInFromLeft} 
            >
                <section className="flex bg-white justify-center rounded-t-3xl lg:w-1/2 lg:rounded-l-3xl lg:rounded-tr-none">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={500}
                        height={50}
                        className={`object-contain rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none xl:object-cover  ${
                            project.title === 'Barangay Comembo Mobile Application (Admin)' ? '' : 
                            project.title === 'Barangay Comembo Mobile Application (User)' ? 'h-[400px] lg:h-[552px] xl:h-[504px] 2xl:h-[380px]' : 
                            project.title === 'Mangadeck (Android)' ? 'rounded-t-none h-[500px] lg:h-[430px] lg:rounded-tl-none xl:h-[400px] 2xl:h-[325px]' : ''
                        }`}
                    />
                </section>
                <section className="p-4 space-y-2 bg-secondarybg lg:w-1/2 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl lg:rounded-br-2xl">
                    <h1 className="text-primarybg text-2xl font-bold">
                        {project.title}
                    </h1>

                    <p className="text-primarybg">
                        {project.description}
                    </p>

                    <div className="flex justify-center flex-wrap lg:justify-start">
                        {project.technologies.map((tech, i) => (
                            <div key={i} className="shadow-gray-500 shadow-lg bg-white text-primarybg flex justify-center items-center rounded-xl p-2 mr-2 mt-2">
                                {tech}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center space-x-4 pt-6 pb-6 lg:justify-start">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <button className="bg-secondarybg border-primarybg border-2 text-primarybg px-4 py-2 rounded">
                                    GitHub
                                </button>
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <button className="flex bg-primarybg border-primarybg border-2 text-secondarybg px-4 py-2 rounded">
                                    Demo 
                                    <FaArrowRight className="m-1 ml-3" />
                                </button>
                            </a>
                        )}
                    </div>
                </section>
            </motion.div>
        ))}
    </div>
  );
}
