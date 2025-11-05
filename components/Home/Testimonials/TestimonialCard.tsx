import React from 'react'
import Image from 'next/image'

type Props = {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const TestimonialCard = ({name, role, company, content, image}: Props) => {
  return (
    <div className='bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300'>
      <div className='flex items-center mb-4'>
        <Image 
          src={image} 
          alt={name} 
          width={50} 
          height={50} 
          className='rounded-full mr-4 object-cover'
        />
        <div>
          <h4 className='text-white font-bold'>{name}</h4>
          <p className='text-gray-400 text-sm'>{role} at {company}</p>
        </div>
      </div>
      <p className='text-gray-300 text-sm leading-relaxed'>&quot;{content}&quot;</p>
      <div className='mt-4 text-yellow-400 text-xl'>★★★★★</div>
    </div>
  )
}

export default TestimonialCard

