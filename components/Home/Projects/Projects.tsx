import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/p1.jpg",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      image: "/p2.jpg",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      image: "/p3.jpg",
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics and insights.",
      tech: ["React", "Chart.js", "REST API"]
    },
    {
      id: 4,
      image: "/p4.jpg",
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing projects and skills.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"]
    }
  ]

  return (
    <div id="projects" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 px-4">
        My Recent <span className="text-cyan-300">Projects</span>
      </h1>
      <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Explore some of my latest work and projects I've built
      </p>
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects

