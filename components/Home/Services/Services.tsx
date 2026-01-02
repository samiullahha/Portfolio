import React from 'react'
import ServiceCard from './ServiceCard'
const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: "/d1.png",
      name: "AI Chatbots",
      description: "Automate support with intelligent 24/7 AI chatbots."
    },
    {
      id: 2,
      icon: "/s4.png",
      name: "Web Development",
      description: "High-performance websites designed to convert visitors."
    },
    {
      id: 3,
      icon: "/s2.png",
      name: "Custom Software",
      description: "Tailored software solutions to streamline your operations."
    },
    {
      id: 4,
      icon: "/s3.png",
      name: "Brand Designing",
      description: "Unique brand identities that inspire trust and recognition."
    },
    {
      id: 5,
      icon: "/d1.png",
      name: "UI/UX Design",
      description: "Intuitive designs that keep your customers engaged."
    },
    {
      id: 6,
      icon: "/s2.png",
      name: "AI Development",
      description: "Smart AI solutions to automate and scale your business."
    },
    {
      id: 7,
      icon: "/s4.png",
      name: "SEO Optimization",
      description: "Rank higher and drive organic traffic to your website."
    },
    {
      id: 8,
      icon: "/s3.png",
      name: "Digital Marketing",
      description: "Data-driven strategies to grow your brand visibility."
    }
  ];

  return (
    <div id="services" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
        My <span className="text-cyan-300">Services</span>
      </h1>
      <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Collaborate with brands and agencies to create impactful results
      </p>
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-12 sm:mt-16 md:mt-20">
        {servicesData.map((service) => (
          <div key={service.id}>
            <ServiceCard
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
