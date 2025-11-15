 "use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navlinks } from '@/constant/constant';
import { FaCode } from 'react-icons/fa6';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useAuth, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

type Props = {
  openNav?: () => void; 
};

const Nav: React.FC<Props> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener('scroll', handler);

    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push('/sign-in');
  };

  return (
    <nav className={`fixed w-full h-[12vh] z-[10000] transition-all duration-200 ${navBg ? 'bg-[#0f142e] shadow-md' : 'bg-transparent'}`}>
      <div className="flex items-center h-full w-[90%] mx-auto">
        {/* Left: logo + name */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-base sm:text-xl md:text-2xl text-white font-bold">Sami Ullah.</h1>
        </div>

        {/* Flexible spacer pushes the next block fully to the right without changing internal gaps */}
        <div className="flex-1" />

        {/* Logout button - Mobile view (visible on mobile, next to Sami Ullah) */}
        {isSignedIn && (
          <div className="flex items-center lg:hidden mr-3 sm:mr-4">
            <button
              onClick={handleLogout}
              className="text-xs sm:text-sm text-white font-medium transition-all duration-300 whitespace-nowrap px-4 sm:px-5 py-1.5 sm:py-2 bg-gray-800/50 hover:bg-cyan-400/20 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400"
            >
              Logout
            </button>
          </div>
        )}

        {/* Navlinks - Right side with proper gap (keeps space-x-6 unchanged) - Desktop only */}
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
          {isSignedIn && (
            <button
              onClick={handleLogout}
              className="text-sm xl:text-base text-white font-medium transition-all duration-300 whitespace-nowrap px-6 py-2.5 bg-gray-800/50 hover:bg-cyan-400/20 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400"
            >
              Logout
            </button>
          )}
        </div>

        {/* Burger menu (always on the right) */}
        <div className="flex items-center ml-2 sm:ml-4 lg:ml-6">
          <HiBars3BottomRight onClick={openNav} className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
