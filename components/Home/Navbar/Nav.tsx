 "use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navlinks } from '@/constant/constant';
import { FaCode } from 'react-icons/fa6';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav?: () => void; 
};

const Nav: React.FC<Props> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed w-full h-[12vh] z-[10000] transition-all duration-200 ${navBg ? 'bg-[#0f142e] shadow-md' : 'bg-transparent'}`}>
      <div className="flex items-center h-full w-[90%] mx-auto">
        {/* Left: logo + name */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">Sami Ullah<span className="text-cyan-300">.</span></h1>
        </div>

        {/* Flexible spacer pushes the next block fully to the right without changing internal gaps */}
        <div className="flex-1" />

        {/* Navlinks - Right side with proper gap (keeps space-x-6 unchanged) */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-sm xl:text-base hover:text-cyan-300 text-white font-medium transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Burger menu (always on the right) */}
        <div className="flex items-center ml-4 lg:ml-6">
          <HiBars3BottomRight onClick={openNav} className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
