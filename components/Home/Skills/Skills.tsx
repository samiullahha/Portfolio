"use client";
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  const skills = [
    { id: 1, name: "React.js", level: 90 },
    { id: 2, name: "Next.js", level: 85 },
    { id: 3, name: "TypeScript", level: 80 },
    { id: 4, name: "Tailwind CSS", level: 95 },
    { id: 5, name: "Node.js", level: 80 },
    { id: 6, name: "MongoDB", level: 75 },
    { id: 7, name: "JavaScript", level: 90 },
    { id: 8, name: "UI/UX Design", level: 85 }
  ]

  return (
    <div id="skills" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 px-4">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <p className="text-center text-gray-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Technologies and tools I work with
      </p>
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills

