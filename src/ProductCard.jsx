import React from 'react'
import Pineapple from "../public/Pineapple.png"

export const ProductCard = () => {
  return (
    <div  style={{
        backgroundImage: 'radial-gradient(circle, #f8fc00, #c7d807, #9bb40b, #73910b, #4f6f09)',
      }}
       className='h-screen rounded-3xl w-full overflow-hidden'>
        <div className='w-full h-[15%] p-3 flex items-center justify-center'>
            <h1 className='text-5xl font-bold uppercase'>Chocolate</h1>
        </div>
        <div className='h-[85%] flex items-center justify-center '>
            <img className='xl:w-[20%] lg:w-[28%] md:w-[32%] w-[35%]  2xl:w-[18%]' src={Pineapple} alt="" />
        </div>
    </div>
  )
}
