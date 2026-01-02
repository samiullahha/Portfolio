import React from 'react'
import Image from 'next/image'
type Props = {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <div className='bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/60 transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-700/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 h-full flex flex-col'>
      <Image src={icon} alt={name} width={50} height={50} className='mb-4' />
      <h1 className='text-lg font-bold text-white mb-2'>{name}</h1>
      <p className='text-gray-300 text-xs leading-relaxed'>{description}</p>
    </div>
  )
}

export default ServiceCard
