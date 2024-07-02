import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from 'react-icons/ai'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { FaGlobe, FaMobile, FaBars } from 'react-icons/fa'


const Features = () => {
  return (
    <section id='features' className='w-full h-[800px] pb-20  border-b-[1px] border-b-block'>
       <Title title='Features' des='What I Do'/>
       <div className='grid grid-cols-3 gap-20'>
       <Card 
            title="Business Strategy"
            des="Recieve Briefs from clients, makes a proposal, do a preliminary design and thereafter a final design"
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
