import React from 'react'

import bgDayak from '@/assets/images/bg-dayak.jpg'

function PageDesc({title, route}) {
  return (
    <div className='relative h-[25vh] bg-cover bg-center ' style={{ backgroundImage: `url(${bgDayak})` }}>
      <div className='absolute inset-0 bg-black opacity-65'></div> {/* Overlay with opacity */}
      <div className='relative flex flex-col items-center justify-center h-full w-full pt-10'>
        <h1 className='text-[4rem] font-bold'>{title}</h1> {/* Title */}
        <h2 className='text-[1.5rem] text-gray'>{route}</h2> {/* route */}
      </div>
    </div>
  )
}

export default PageDesc