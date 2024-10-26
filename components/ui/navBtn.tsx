import React from 'react';
import { Link } from 'react-scroll';

export default function NavBtn({ vertical, onClick }: { vertical?: boolean, onClick?: () => void }) {
  return (
    <ul className={`flex ${vertical ? 'flex-col space-y-4' : 'space-x-4'} text-xl`}>
      <li>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          offset={-70} 
          className="relative group cursor-pointer" 
          onClick={onClick}
        >
          <span className="hover:text-white">Projects</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondarybg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          offset={-70} 
          className="relative group cursor-pointer" 
          onClick={onClick}
        >
          <span className="hover:text-white">About</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondarybg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          offset={-70} 
          className="relative group cursor-pointer" 
          onClick={onClick}
        >
          <span className="hover:text-white">Contact</span>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-secondarybg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </li>
    </ul>
  );
}
