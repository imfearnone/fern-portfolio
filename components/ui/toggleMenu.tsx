'use client'

import { useState, useEffect } from 'react';
import React from 'react';
import DownloadBtn from './DownloadBtn';
import NavBtn from './NavBtn';
import GridBackground from '@/components/gridBackground';

export default function ToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden'; 
    } else {
        document.body.style.overflow = ''; 
    }
    return () => {
        document.body.style.overflow = ''; 
    };
  }, [isMenuOpen]);

  return (
    <div>
        <button 
            className="md:hidden focus:outline-none absolute top-5 right-6 m-[52]"
            onClick={toggleMenu}
        >
            {isMenuOpen ? (
                <svg 
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            ) : (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            )}
        </button>
      
        {isMenuOpen && (
            <div className="fixed inset-0 z-[51] w-screen h-screen bg-primarybg md:hidden flex flex-col justify-center align-center text-center">
                
                <GridBackground />
                <div className="absolute top-5 right-6">
                    <button
                        className="text-white"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                
                <div className="flex flex-col justify-center items-center text-center">
                    <NavBtn vertical onClick={toggleMenu} />
                </div>

                <div className="flex flex-col mt-10 justify-center items-center text-center">
                    <DownloadBtn />
                </div>
            </div>
        )}
    </div>
  );
}
