import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from 'react-icons/ai'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { FaGlobe, FaMobile, FaBars } from 'react-icons/fa'


const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className="flex justify-center items-center text-center">
       <Title title='Features' des='What I Do'/>
       </div>
       <div className='grid grid-cols-1 md:grid-cols- xl:grid-cols-3 gap-6 xl:gap-20'>
       <Card 
            title="Business Strategy"
            des="I connect with clients, offering 2D structural drawings on AutoCAD of reinforced concrete structures and steel. After understanding client requirements, I deliver detailed designs compliant with relevant codes in PDF or DWG formats."
            icon={<FaBars/>}
       />
       <Card
       title="SEO Optimization"
       des="I enhance website visibility through effective SEO practices, including keyword research and on-page optimization, to drive organic traffic and improve search engine rankings."
       icon={<SiProgress/>}
       />
       <Card
       title="Mobile Development"
       des="I create responsive mobile applications, ensuring seamless user experiences across all devices, from concept to deployment."
       icon={<FaMobile/>}
       />
       <Card
       title="Structural Design"
       des="With over six years of experience, I provide precise structural designs using advanced software, adhering to international standards like BS 8110, BS 5950, and Eurocode."
       icon={<SiAntdesign/>}
       />
       <Card
       title="Hosting Websites"
       des="I offer reliable web hosting services with high uptime and fast loading speeds, ensuring your website remains accessible and secure."
       icon={<FaGlobe/>}
       />
       <Card
       title='App Development'
       des="I develop functional and engaging web and mobile apps using technologies like React.js, Ruby on Rails, and Tailwind CSS, focusing on intuitive interfaces and robust functionality."
        icon={<AiFillAppstore/>}
       />
       </div>
    </section>
    
  )
}

export default Features
