import React from 'react'
import Pineapple from "../public/Pineapple.png"

export const ProductCard = ({data}) => {
    
  return (
    <div  style={{
        backgroundImage: 'radial-gradient(circle, #f8fc00, #c7d807, #9bb40b, #73910b, #4f6f09)',
      }}
       className='h-screen  group rounded-3xl w-full flex flex-col items-center overflow-hidden'>
        
            <h1 className='text-5xl absolute z-1 mt-5 font-bold uppercase'>{data.name}</h1>
    
        <div className='relative h-[100%] w-[100%] overflow-hidden flex items-center justify-center '>
            <img className='xl:w-[18%] lg:w-[22%] md:w-[26%] w-[35%] 2xl:w-[35%] z-1' src={data.img} alt="" />
            <img className='absolute group scale-0 group-hover:scale-100 duration-800 h-[100%]' src={data.pngImg} alt="" />
        </div>
    </div>
  )
}
