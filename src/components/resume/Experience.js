import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Structural Engineer"
            subTitle="Isaac Udezue & Associates - (2019 - Present)"
            result="Nigeria"
            des="Senior Civil Engineer tasked with producing structural engineering drawings on AutoCAD."
          />
          <ResumeCard
            title="Web Developer (Freelancer)"
            subTitle="Project Collaboration - (2023)"
            result="Nigeria"
            des="Participated in a hackathon with my team and secured third place."
          />
          <ResumeCard
            title="Front-end Developer (Freelancer)"
            subTitle="Websites to Clients' Satisfaction - (2020 - Present)"
            result="Discord"
            des="Completed projects for clients on Discord channel platforms."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="Dhaka"
            des="Provided training to prepare individuals for various sectors of the economy and areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Mikee (2022)"
            result="Nigeria"
            des="Tutored students on the basics of programming."
          />
          <ResumeCard
            title="Structural Engineering Intern"
            subTitle="Deltec Engineering Limited (2017 - 2018)"
            result="Warri"
            des="One-year training in the use of structural engineering software such as Prota, Orion, STAAD Pro, Tekla Tedds, SAP2000, and Beamax."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
