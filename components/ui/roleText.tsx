import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const switchRole = {
  initial: {
    opacity: 0,
    y: 20, 
  },
  enter: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 1, 
    },
  },
  exit: {
    opacity: 0,
    y: -20, 
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function RoleText() {
  const roles = [
    "&nbspa <span class='text-secondarybg'>Web Developer</span>",
    "&nbspan <span class='text-secondarybg'>App Developer</span>",
    "&nbspa <span class='text-secondarybg'>Mobile Developer</span>",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true); 
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length); 
        setIsExiting(false); 
      }, 400); 
    }, 3000); 

    return () => clearInterval(interval); 
  }, [roles.length]);

  return (
    <div className="text-2xl sm:text-2xl md:text-2xl md:mt-4 lg:text-3xl xl:text-4xl font-bold text-center overflow-hidden">
      <motion.div
        key={currentRole}
        variants={switchRole}
        initial="initial"
        animate={isExiting ? "exit" : "enter"} 
        dangerouslySetInnerHTML={{ __html: roles[currentRole] }} 
      />
    </div>
  );
}
