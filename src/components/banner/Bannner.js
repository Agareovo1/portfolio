import React from 'react'
import LeftBanner from './LeftBanner'
import { bannerImg } from '../../assets/index'

const Banner = () => {
    return (
        <section id='home' className='w-full py-20 flex items-center border-b-[1px] font-titleFont border-b-black'>
            <LeftBanner />
            <div className='w-1/2 flex justify-center'>
                <div className='w-1/2 p-5 bg-black rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105'>
                    <img 
                        src={bannerImg} 
                        alt='Banner' 
                        className='rounded-lg w-full h-auto opacity-80 transition-opacity duration-300 hover:opacity-100'
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner
