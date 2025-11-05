import React from 'react'
import Image from 'next/image'
type Props = {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard = ({description,icon,name}:Props) => {
  return (
    <div className='bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer border border-gray-700/50'>
      <Image src={icon} alt={name} width={60} height={60} className='mb-6'/>
      <h1 className='text-xl font-bold text-white mb-4'>{name}</h1>
      <p className='text-gray-300 text-sm leading-relaxed'>{description}</p>
    </div>
  )
}

export default ServiceCard
