import React, { useState, useEffect } from "react";
// import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
// import Achievement from './Achievement';
// import Experience from "./Experience"
import "./Resume.css";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  // const [experienceData, setExperienceData] = useState(false);
  // const [achievementData, setAchievementData] = useState(false);

  useEffect(() => {
    const animateTitle = () => {
      const title = document.querySelector('.myresume-title');
      title.classList.remove('three');
      void title.offsetWidth; // Trigger a reflow to restart the animation
      title.classList.add('three');
    };

    // Trigger the animation every 2 seconds
    const animationInterval = setInterval(animateTitle, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <div className="flex justify-center items-center text-center">
        {/* <Title title="" des="My Resume" /> */}
        <div className="myresume-title-container">
      <div className="myresume-title three">
        <span>M</span><span>y</span>&nbsp;<span>R</span><span>e</span><span>s</span><span>u</span><span>m</span><span>e</span>
      </div>
    </div>
      </div>
      <div>
        {/* <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"> */}
        <ul className="relative w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              // setExperienceData(false);
              // setAchievementData(false);
            }}
            className={`${
              skillData
                ? "border-designColor rounded-lg resumehover-light"
                : "border-transparent resumehover-light"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              // setExperienceData(false);
              // setAchievementData(false);
            }}
            className={`${
              educationData
                ? "border-designColor rounded-lg resumehover-light"
                : "border-transparent resumehover-light"
            } resumeLi`}
          >
            Education
          </li>

          {/* <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
            }}
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li> */}
          {/* <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(true);
            }}
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li> */}
        </ul>
      </div>

      {skillData && <Skills />}
      {educationData && <Education />}
      {/* {achievementData && <Achievement />}
      {experienceData && <Experience />} */}
    </section>
  );
};

export default Resume;
