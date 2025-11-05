 "use client";
 import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ParticlesHero from './particleBackground';
import Typewriter from 'typewriter-effect'
import { BsArrowRight } from 'react-icons/bs';
const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
   <ParticlesHero />
      <div className='relative z-10 flex flex-col items-center'>
        <Image 
          src="/Gemini_Generated_Image_g1gfjbg1gfjbg1gf.png" 
          alt="Hero image"
          width={150}
          height={150}
          className='w-[150px] h-[150px] rounded-full border-2 border-[#0c0c48aa] object-cover mb-4 sm:mb-6'
        />
        <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 px-4 text-center tracking-wide'>
          Crafting digital experiences with <br className='hidden sm:block'/>clean  <span className='text-cyan-300'>code</span> and <span className='text-cyan-300'>creative design.</span>
          </h1>
          <h2 className='mt-4 sm:mt-5 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl px-2 text-center font-medium flex flex-col sm:flex-row items-center justify-center'>
            Hi! I'm Sami Ullah - A Passionate 
            <span className='text-cyan-300 ml-2 font-bold'>
                <Typewriter 
                    options={{
                        strings: ['Full-Stack Developer 🚀', 'Tailwind CSS Expert 🌊', 'React.js & Next.js Enthusiast 💻'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 75,
                        wrapperClassName: "pl-2",
                    }}
                />
            </span>
          </h2>
          <Link 
            href="#projects"
            className="mt-6 px-8 sm:px-10 py-3 sm:py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-base sm:text-lg font-medium flex items-center justify-center group mx-auto"
          >
            <span>See my work</span>
            <BsArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </Link>
      </div>
    </div>
  )
}

export default Hero;
