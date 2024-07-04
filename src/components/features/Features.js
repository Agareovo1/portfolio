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
       des="Recieve Briefs from clients, makes a proposal, do a preliminary design and thereafter a final design"
       icon={<SiProgress/>}
       />
       <Card
       title="Mobile Development"
       des="Recieve Briefs from clients, makes a proposal, do a preliminary design and thereafter a final design"
       icon={<FaMobile/>}
       />
       <Card
       title="UX Design"
       des="Recieve Briefs from clients, makes a proposal, do a preliminary design and thereafter a final design"
       icon={<SiAntdesign/>}
       />
       <Card
       title="Hosting Websites"
       des="Recieve Briefs from clients, makes a proposal, do a preliminary design and thereafter a final design"
       icon={<FaGlobe/>}
       />
       <Card
       title='App Development'
       des="Recieve Briefs from clients, makes a proposal, do a preliminary design and thereafter a final design"
        icon={<AiFillAppstore/>}
       />
       </div>
    </section>
    
  )
}

export default Features
