import React from 'react'

type Props = {
  name: string;
  level: number;
  icon?: string;
}

const SkillCard = ({name, level, icon}: Props) => {
  return (
    <div className='bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300'>
      {icon && (
        <div className='text-4xl mb-4 text-center'>📱</div>
      )}
      <h3 className='text-lg font-bold text-white mb-3 text-center'>{name}</h3>
      <div className='w-full bg-gray-700 rounded-full h-2'>
        <div 
          className='bg-gradient-to-r from-blue-600 to-cyan-400 h-2 rounded-full transition-all duration-500'
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <p className='text-gray-400 text-sm mt-2 text-center'>{level}%</p>
    </div>
  )
}

export default SkillCard

