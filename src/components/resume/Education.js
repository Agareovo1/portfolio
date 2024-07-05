import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BEng in Civil Engineering"
            subTitle="Federal University of Technology, Akure(FUTA)  (2013 - 2018)"
            result="4.20/5.00"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title=" Software Engineering in Alt School Africa"
            subTitle="Alt School Africa (2022 - 2023)"
            result="Distinction"
            des="Full Stack program comprising of frontend and backend using various frameworks and progtraming languages."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Government College (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Student at Global Source"
            subTitle="Qwasar - (2022 - Present)"
            result="SilicON valley"
            des="software Engineering Student at Outsource Global "
          />
          <ResumeCard
            title="Civil Engineer"
            subTitle="Isaac Udezue & Associates  - (2019 - Present)"
            result="Nigeria"
            des="Produce structural 2D drawings and detailing of various structures ranging from reinforced concrete to steel structures."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Qwasar Student - (2022 - 2023)"
            result="Oman"
            des="Student @ outsource Global"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education