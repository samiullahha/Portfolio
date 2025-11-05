import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      company: "Tech Corp",
      content: "Sami delivered an exceptional project that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      image: "/c1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      company: "StartupXYZ",
      content: "Working with Sami was a pleasure. He transformed our ideas into a beautiful and functional web application.",
      image: "/c2.jpg"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Founder",
      company: "Digital Agency",
      content: "Sami's React and Next.js skills are top-notch. He built a scalable solution that our team loves using.",
      image: "/c4.jpg"
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Design Lead",
      company: "Creative Studio",
      content: "The UI/UX work Sami did for us was incredible. He perfectly balanced aesthetics with functionality.",
      image: "/c5.jpg"
    }
  ]

  return (
    <div id="testimonials" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 px-4">
        What Clients <span className="text-cyan-300">Say</span>
      </h1>
      <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Testimonials from clients I've worked with
      </p>
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            content={testimonial.content}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials

