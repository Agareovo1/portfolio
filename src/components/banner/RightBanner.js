import React from 'react'
import { bannerImg } from '../../assets/index'


const RightBanner = () => {
  return (
    <div className='w-1/2 flex justify-center relative'>
    <div className='relative w-1/2'>
        <div className='absolute -top-4 -left-4 w-full h-full bg-black rounded-lg transform rotate-3 shadow-2xl'></div>
        <div className='absolute -top-2 -left-2 w-full h-full bg-black rounded-lg transform rotate-6 shadow-2xl'></div>
        <div className='w-full p-5 bg-black rounded-lg shadow-2xl overflow-hidden'>
            <div className='transition-transform duration-300 hover:scale-105'>
                <img 
                    src={bannerImg} 
                    alt='Banner' 
                    className='rounded-lg w-full transform scale-90 hover:scale-100 transition-transform duration-300'
                />
            </div>
        </div>
    </div>
</div>
  )
}

export default RightBanner
