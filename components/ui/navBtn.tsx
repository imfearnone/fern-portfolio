import React from 'react';
import Link from 'next/link';

export default function NavBtn({ vertical, onClick }: { vertical?: boolean, onClick?: () => void }) {
  return (
    <ul className={`flex ${vertical ? 'flex-col space-y-4' : 'space-x-4'} text-xl`}>
        <li>
            <Link href="/#projects" className="relative group" onClick={onClick}>
            <span className="hover:text-white">Projects</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondarybg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
        </li>
        <li>
            <Link href="/#about" className="relative group" onClick={onClick}>
            <span className="hover:text-white">About</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondarybg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
        </li>
        <li>
            <Link href="/#contact" className="relative group" onClick={onClick}>
            <span className="hover:text-white">Contact</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondarybg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
        </li>
    </ul>
  );
}
