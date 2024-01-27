import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import educationData from "../../data/ResumeData/educationData";
import internshipData from "../../data/ResumeData/internshipData";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* Add dynamic date from educationData.js */}
          <p className="text-sm text-designColor tracking-[4px]">
            {educationData[0].date}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Map through educationData and render ResumeCard dynamically */}
          {educationData.map((education) => (
            <ResumeCard
              title={education.title}
              subTitle={education.subTitle}
              result={education.result}
              des={education.des}
            />
          ))}
        </div>
      </div>

      {/* Internship section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* Add dynamic date from internshipData.js */}
          <p className="text-sm text-designColor tracking-[4px]">
            {internshipData[0].date}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Map through internshipData and render ResumeCard dynamically */}
          {internshipData.map((internship) => (
            <ResumeCard
              title={internship.title}
              subTitle={internship.subTitle}
              result={internship.result}
              des={internship.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
