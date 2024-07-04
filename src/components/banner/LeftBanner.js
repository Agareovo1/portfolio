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
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-4xl md:text-6xl font-bold text-white'>Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Success Agare</span>
                </h1>
                <h2 className='text-2xl md:text-4xl font-bold text-white'>a <span>{text}</span>
                    <Cursor 
                        cursorBlinking={false}
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className='text-sm md:text-base font-bodyFont leading-6 tracking-wide'>
                A dedicated and versatile professional with over six years of experience in civil engineering and structural design. I possess a strong background in utilizing advanced engineering software for design and analysis, coupled with a robust skill set in full-stack web development. My unique blend of expertise allows me to bridge the gap between engineering and technology, aiming to develop innovative solutions to enhance civil engineering practices.
                </p>
            </div>
            <div className='flex flex-col md:flex-row gap-6 justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                    <div className='flex gap-4'>
                        <a href='https://www.github.com/Agareovo1' target='_blank' rel='noopener noreferrer'>
                        <span className='bannerIcon'>
                            <FaFacebook/>
                        </span>
                        </a>
                        <a href='https://www.github.com/Agareovo1' target='_blank' rel='noopener noreferrer'> 
                        <span className='bannerIcon'>
                            <FaTwitter/>
                        </span>
                        </a>
                        <a href='https://www.linkedin.com/in/success-agare-4b7012271' target='_blank' rel='noopener noreferrer'>
                        <span className='bannerIcon'>
                            <FaLinkedinIn/>
                        </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Best Skills On</h2>
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
            {/* Media */}
        </div>
    )
}

export default LeftBanner
