"use client"
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { images } from '../data';
import { slideInFromLeft } from '../animation/animation';


export default function animatedImage() {
    const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); 
  }, []);
  return (
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={slideInFromLeft}
      className="relative flex justify-center items-center w-full h-[95%] mt-2"
    >
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`3Dman ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </motion.div>
  )
}
