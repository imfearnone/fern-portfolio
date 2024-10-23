import React from 'react'
import { techImages } from '../data/index'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '../animation/animation'
import AnimatedImage from './ui/AnimatedImage'
import Image from 'next/image'

export default function About() {
  return (
    <div className="w-full flex flex-col xl:flex-row text-primarybg">
        <section className="flex flex-col p-4 order-2  xl:order-1 xl:w-1/2 xl:rounded-b-none xl:rounded-l-2xl xl:rounded-bl-2xl bg-white rounded-b-2xl">
            <motion.span
                className='pl-10 pt-10 pr-10 text-justify'
                initial="hidden"
                whileInView="visible" 
                viewport={{ amount: 0.3 }} 
                variants={slideInFromLeft} 
            >
                Hello there! I’m <span className='font-bold'>Fernan R. Retardo,</span> a passionate software developer from Taguig City, Philippines. 
                With a strong foundation in computer science and a keen eye for detail, I strive to build innovative and impactful solutions through technology. 
                I am driven by a love for coding and a desire to constantly learn, grow, and contribute to exciting projects. 
                Whether it’s crafting intuitive user interfaces or optimizing backend systems, I approach each challenge with creativity and determination to deliver exceptional results.
                
            </motion.span>

            <motion.span
                className='pl-10 pt-5 pr-10 text-justify'
                initial="hidden"
                whileInView="visible" 
                viewport={{ amount: 0.3 }} 
                variants={slideInFromLeft} 
            >
                I hold a <span className='font-bold'>Bachelor of Science in Computer Science, majoring in Application Development from the University of Makati,</span>  where I graduated with honors as <span className='font-bold'>Cum Laude</span>. During my studies, 
                I was consistently recognized for my academic achievements, including being a finalist for Best Computer Science Thesis and receiving multiple awards in hackathons and programming competitions.
                
            </motion.span>

            <motion.span
                className='pl-10 pt-5 pr-10 text-justify'
                initial="hidden"
                whileInView="visible" 
                viewport={{ amount: 0.3 }} 
                variants={slideInFromLeft} 
            >
                My professional experience as a Developer Intern at the Bases Conversion and Development Authority allowed me to hone my skills in IT support, system development, and risk monitoring. Additionally, I have completed two freelance projects as a frontend 
                web developer, where I implemented modern frameworks and technologies to create engaging user experiences. I take pride in my ability to collaborate effectively, solve complex problems, and adapt to new challenges with ease.
            
            </motion.span>

            <motion.div
                initial="hidden"
                whileInView="visible" 
                viewport={{ amount: 0.3 }} 
                variants={slideInFromLeft} 
            >
                <span className='flex pl-10 pt-5 pr-10 pb-4 text-justify font-bold'>I have hands-on experience working with a variety of programming languages and technologies:</span>
                <div className='flex flex-wrap justify-center p-2 mb-10 space-x-5'>
                    {techImages.map((tech, index) => (
                        <div key={index} className='flex flex-col items-center text-primarybg m-2'>
                            <Image src={tech.src} alt={tech.alt} className='h-10 w-10' width={500} height={50}/>
                            <span>{tech.alt}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>

        <section className="bg-secondarybg p-4 order-1 rounded-t-2xl xl:order-2 xl:w-1/2 xl:rounded-t-none xl:rounded-r-2xl">
            <div className="justify-center items-center rounded-t-2xl h-72 xl:h-full relative">
                <div className="w-full h-full absolute">
                    <Image
                        src="/footer-grid.svg"
                        alt="grid"
                        className="object-cover object-center w-full h-full opacity-100%"
                        width={500}
                        height={50}
                    />
                </div>
                <AnimatedImage />  
            </div>
        </section>
    </div>
  )
}
