"use client";
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi'; 

export default function DownloadBtn() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href="/RetardoFernanR_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-2 animate-shimmer px-4 py-2 flex items-center justify-center rounded-md border-secondarybg bg-[linear-gradient(110deg,#1F2833,45%,#43546e,55%,#1F2833)] bg-[length:200%_100%] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primarybg focus:ring-offset-2 focus:ring-offset-secondarybg"
    >
      <span
        className={`flex items-center transition-transform duration-300 ease-in-out ${
          isHovered ? '-translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
        }`}
      >
        Download Resume
      </span>
      <span
        className={`absolute flex items-center transition-transform duration-300 ease-in-out ${
          isHovered ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      >
        <FiDownload className="text-xl" />
      </span>
    </a>
  );
}
