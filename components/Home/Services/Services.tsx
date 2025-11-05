"use client";
import React from 'react'
import ServiceCard from './ServiceCard'
const Services = () => {
  return (
  <div id="services" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
        My <span className="text-cyan-300">Services</span>
      </h1>
      <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Collaborate with brands and agencies to create impactful results
      </p>
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-20">
        <div>
          <ServiceCard 
            icon="/d1.png" 
            name="UI and UX Design" 
            description="Crafting intuitive and engaging user interfaces that enhance user experience. Creating wireframes, prototypes, and pixel-perfect designs that users love." 
          />
        </div>
        <div>
          <ServiceCard 
            icon="/s2.png" 
            name="Web & Mobile App Development" 
            description="Building responsive web applications and mobile apps using modern technologies. Full-stack development with React, Next.js, and native mobile frameworks." 
          />
        </div>
        <div>
          <ServiceCard 
            icon="/s3.png" 
            name="Design & Creativity" 
            description="Creative design solutions that stand out. From branding to visual identity, I bring creative ideas to life with attention to detail and modern aesthetics." 
          />
        </div>
        <div>
          <ServiceCard 
            icon="/s4.png" 
            name="Web Development" 
            description="Custom web development services including frontend, backend, and database integration. Building scalable, performant, and SEO-friendly websites." 
          />
        </div>
      </div>
    </div>
  )
}

export default Services
