import React from 'react'
import Image from 'next/image'

type Props = {
  image: string;
  title: string;
  description: string;
  tech: string[];
}

const ProjectCard = ({ image, title, description, tech }: Props) => {
  return (
    <div className='bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 cursor-pointer h-full flex flex-col'>
      <Image src={image} alt={title} width={1000} height={1000} className='w-full h-auto' />
      <div className='p-6 flex-1 flex flex-col'>
        <h3 className='text-xl font-bold text-white mb-3'>{title}</h3>
        <p className='text-gray-300 text-sm mb-4 flex-1'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-blue-800/50 text-cyan-300 text-xs rounded-full'>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

