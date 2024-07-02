import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiFigma, SiAutocad, SiAutodesk } from 'react-icons/si'

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder", "A Civil Engineer", "Front End Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
    
    return (
        <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Success Agare</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
                    <Cursor 
                        cursorBlinking={false}
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    I perform structural analysis & design on diverse structures, ranging from reinforced concrete to steel structures, producing 2D detail drawings of them in AutoCAD, and could comfortably 
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaFacebook/>
                        </span>
                        <span className='bannerIcon'>
                            <FaTwitter/>
                        </span>
                        <span className='bannerIcon'>
                            <FaLinkedinIn/>
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>BEST SKILLS ON</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <FaReact/>
                        </span>
                        <span className='bannerIcon'>
                            <SiAutocad/>
                        </span>
                        <span className='bannerIcon'>
                            <SiAutodesk/>
                        </span>
                        <span className='bannerIcon'>
                            <SiFigma/>
                        </span>
                        <span className='bannerIcon'>
                            <SiTailwindcss/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner
