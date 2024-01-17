// Skills.js

import React from 'react';
import { motion } from 'framer-motion';
import {
  developmentSkills,
  programmingSkills,
  technicalSkills,
  applicationDevelopmentSkills,
  designSkills,
  frontEndDevelopmentSkills,
} from '../../data/ResumeData/skillData';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="w-full lgl:w-1/2">
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      <div className='mt-14 w-full flex flex-col gap-6'>
        {skills.map((skill, index) => (
          <div className="overflow-x-hidden" key={index}>
            <p className="text-sm uppercase font-medium">{skill.skill}</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  width: `${skill.percentage}%`,
                  // background: `linear-gradient(to right, #1E3A8A, #FF5A5F)`,
                }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                {/* <span className="absolute -top-7 right-0">{`${skill.percentage}%`}</span> */}
              </motion.span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <SkillCategory title="Development Skill" skills={developmentSkills} />
        <SkillCategory title="Programming Skills" skills={programmingSkills} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <SkillCategory title="Technical Skill" skills={technicalSkills} />
        <SkillCategory title="Application Development" skills={applicationDevelopmentSkills} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <SkillCategory title="Design Skill" skills={designSkills} />
        <SkillCategory title="Front-End Development" skills={frontEndDevelopmentSkills} />
      </motion.div>
    </div>
  );
};

export default Skills;