import { useState } from "react";
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { TypewriterEffect} from '@/components/ui/TypeWriterEffect';
import { FloatingDock } from "@/components/ui/FloatingDock";
import AnimatedBlob from "@/components/ui/AnimatedBlob"
import RoleText from "@/components/ui/RoleText";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/animation/animation";
import { items, words } from "@/data";
import { RiScrollToBottomFill  } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  const [textAnimationDone, setTextAnimationDone] = useState(false); 
  const [textWritterEffectDone, setWritterEffectDone] = useState(false); 

  const handleTextGenerateComplete = () => {
    setTextAnimationDone(true); 
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-130px)]">
      <div className="grid grid-cols-1 gap-14 xl:grid-cols-3 xl:gap-10 2xl:gap-12 w-full ">
        <section className="h-auto w-full xl:col-span-2">
          <div className="flex flex-col text-center items-center sm:flex-col md:flex-row lg:flex-row xl:flex-col  2xl:flex-row 2xl:justify-start 2xl:mt-12">
            <TextGenerateEffect
              words="Hello there! I'm Fernan"
              highlightWord="Fernan"
              onAnimationComplete={handleTextGenerateComplete} 
            />
              <RoleText />
          </div>

          {textAnimationDone && (
            <div className="z-100">
              <TypewriterEffect
                words={words}
                className="text-left justify-center text-4xl mt-5"
                cursorClassName="text-blue-500"
                onComplete={() => setWritterEffectDone(true)} 
              />
                
              {textWritterEffectDone && (
                <div className="flex z-100 mt-4 md:mt-0 lg:mt-0 justify-center">
                  <FloatingDock
                    items={items}
                    desktopClassName="custom-desktop-class"
                    mobileClassName="custom-mobile-class"
                  />
                </div>
              )}
            </div>
          )}
        </section>

        <section className="flex items-center justify-center mt-4 sm:mt-8 md:mt-6">
          <motion.div
            className="w-[85%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-full 2xl:w-full "
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
          >
            <div className="relative mx-auto w-full flex items-center justify-center ">
              <AnimatedBlob />
              <div className="relative w-100 h-100 overflow-hidden rounded-full">
                <Image
                  src="/fern.jpg"
                  alt="Fern"
                  className="relative z-10 w-full h-full object-cover rounded-full"
                  width={500}
                  height={50}
                />
              </div>
            </div>
          </motion.div>
        </section>
        
        <section className="xl:col-span-3 flex items-center justify-center">
          {textWritterEffectDone && (
            <Link href="/#projects">
              <motion.div
                className="col-span-2 w-full transform -translate-x-1/2 "
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <span className="text-2xl sm:mt-2 md:mt-2 xl:mt-20 flex items-center">
                  Scroll down
                  <RiScrollToBottomFill className="text-4xl text-secondarybg ml-2" />
                </span>
              </motion.div>
            </Link>
          )}
        </section>
      </div>
    </div>
  )
}
