"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FiCopy } from 'react-icons/fi';
import { slideInFromLeft } from '../animation/animation';

export default function Contacts() {
    const [copied, setCopied] = useState(false);

    const email = 'retardo.fernan@gmail.com';

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
    };

    return (
        <div className='w-full bg-white md:p-4 lg:p-6 xl:p-8 2xl:p-10 text-primarybg shadow-black shadow-lg p-2 rounded-2xl justify-center'>
            <motion.div
                className='w-full flex flex-wrap justify-center space-x-4 sm:space-x-8 md:space-x-10 space-y-3 mt-10 mb-10'
                initial="hidden"
                whileInView="visible" 
                viewport={{ amount: 0.3 }} 
                variants={slideInFromLeft} 
            >
                
                <span className='flex text-2xl mt-4'>{email}</span>
                <button 
                    onClick={handleCopyEmail} 
                    className='flex flex-col items-center hover:text-black focus:outline-none'>
                    <FiCopy className='text-3xl mt-2 ' />
                    <span className='mt-10 absolute '>{copied ? 'Copied' : ''}</span>
                </button>

                <a 
                    href={`mailto:${email}`} 
                    className='bg-primarybg font-bold text-white shadow-slate-500 shadow-lg hover:text-secondarybg py-3 px-5 rounded-lg focus:outline-none'>

                    Send Email 
                </a>
            </motion.div>
        </div>
    );
}
