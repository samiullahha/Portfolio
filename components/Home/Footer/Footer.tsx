import React from 'react'
import { BsEnvelope, BsLinkedin } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Navlinks } from '@/constant/constant'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0d0d1f] border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Section - Branding */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Sami <span className="text-cyan-300">Ullah</span>
            </h2>
            <p className="text-white text-xs sm:text-sm leading-relaxed">
              Full-Stack Developer crafting beautiful and functional web experiences
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {Navlinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Connect With Me */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-base sm:text-lg mb-4">Connect With Me</h3>
            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a 
                href="https://www.linkedin.com/in/sami-ulllah/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                title="LinkedIn"
              >
                <BsLinkedin className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/mesamiullah03/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                title="Instagram"
              >
                <FaInstagram className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://x.com/su1946275" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                title="X (Twitter)"
              >
                <FaXTwitter className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:su1946275@gmail.com" 
                className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                title="Email"
              >
                <BsEnvelope className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              © {currentYear} CodeMaster. All rights reserved. | Designed & Developed by <span className="text-cyan-400">Sami Ullah</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

