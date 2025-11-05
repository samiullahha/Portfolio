"use client";
import React from 'react'
import Image from 'next/image'

const About = () => {
  const skills = [
    "Full-Stack Development",
    "Next.js",
    "React.js",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB"
  ]

  return (
    <div id="about" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 px-4">
        About <span className="text-cyan-300">Me</span>
      </h1>
      <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base mb-12 max-w-2xl mx-auto px-4">
        Get to know more about my journey and expertise
      </p>
      
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Image Section - Aligned with first paragraph */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm md:max-w-md">
              <Image 
                src="/coding.jpg" 
                alt="Coding - Full-Stack Development"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg object-cover shadow-lg border-2 border-cyan-400/30"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2 space-y-6">
            {/* First Paragraph - Aligned with Image */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I am passionate about the future of <span className="text-cyan-300 font-semibold">Artificial Intelligence</span> and its transformative potential across industries. Currently, I am working in <span className="text-cyan-300 font-semibold">Full-Stack Development</span>, where I have gained <span className="text-yellow-300 font-semibold">2 years</span> of hands-on experience building dynamic and responsive web applications.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                My expertise lies in frontend development with strong skills in <span className="text-cyan-300">Next.js</span>, <span className="text-cyan-300">React.js</span>, and <span className="text-cyan-300">TailwindCSS</span>. I am also enthusiastic about <span className="text-cyan-300">JavaScript</span>, <span className="text-cyan-300">TypeScript</span>, <span className="text-cyan-300">Node.js</span>, and <span className="text-cyan-300">MongoDB</span>, continually expanding my knowledge to create efficient and scalable solutions.
              </p>
            </div>

            {/* Experience Section */}
            <div className="bg-gray-800/50 p-4 sm:p-5 rounded-lg border border-gray-700/50">
              <h3 className="text-cyan-300 font-bold text-base sm:text-lg mb-3">Experience</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Full-Stack Developer</p>
                    <p className="text-gray-400 text-xs sm:text-sm">2 Years of Professional Experience</p>
                    <p className="text-gray-500 text-xs mt-1">Building modern, responsive web applications</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-cyan-300 font-bold text-base sm:text-lg mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/50 border border-cyan-400/30 text-cyan-300 rounded-full text-xs sm:text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

