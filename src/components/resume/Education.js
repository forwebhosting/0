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
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Business Administration - BBA"
            subTitle="Bharathidasan University, Tiruchirappalli (2020 - 2023)"
            result=""
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Veeraraghava Higher Secondarary School (2018 - 2020)"
            result="70%"
            des="Secondary education or post-primary education covers two phases on the Higher Secondary Certificate of TN Board."
          />
          <ResumeCard
            title="Diploma in COMPUTER HARDWARE TECHNOLOGY"
            subTitle="Tiruchirappalli Regional Engineering College Science and Technology Entrepreneurs Park (2018)"
            result="1st class"
            des="Completed diploma in COMPUTER HARDWARE TECHNOLOGY with a 1st class distinction at Tiruchirappalli Regional Engineering College Science and Technology Entrepreneurs Park in 2018."
          />

        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Cyber Security Engineer"
            subTitle="Senselearner Technologies  - (Sep - Oct 2023)"
            result="Uttarakhand, India  "
            // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Cyber Security "
            subTitle="Cyberdosti Technologies  - (Sep 2023)"
            result="India"
            // des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="IMAGGAR Technologies - (2023)"
            result="TAMIL NADU"
            // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="MRG ENGINEERING - (2021)"
            result="TAMIL NADU"
            // des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education