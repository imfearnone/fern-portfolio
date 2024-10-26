"use client"

import React from "react";
import { motion } from "framer-motion";
import LogoBtn from "./ui/logoBtn";
import NavBtn from "./ui/navBtn";
import DownloadBtn from "./ui/downloadBtn";
import ToggleMenu from "./ui/toggleMenu";

const headerItemVariants = {
  hidden: { opacity: 0, y: -20 }, 
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

export default function Header() {
  return (
    <motion.header
      className="p-4"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="w-[90%] text-center justify-center items-center">
        <nav className="flex items-center justify-between">
          <motion.div className="sm:justify-start md:flex-1 lg:flex-1 justify-between" variants={headerItemVariants}>
            <LogoBtn />
          </motion.div>

          <motion.div
            className="flex-1 hidden md:flex justify-center"
            variants={headerItemVariants}
          >
            <NavBtn />
          </motion.div>

          <motion.div
            className="flex-1 hidden md:flex justify-end"
            variants={headerItemVariants}
          >
            <DownloadBtn />
          </motion.div>

          <div className="">
              <ToggleMenu />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
