// Projects.js

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectData from "../../data/projectData"; // Import the project data
import ProjectsCard from "./ProjectsCard";
import "./Projects.css";

const Projects = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides as needed
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "60px", // Adjust the margin as needed
    draggable: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust for mobile screens
        },
      },
    ],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Programmatically advance to the next slide
      }
    }, 3000); // 1000 milliseconds (1 second) interval

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <div className="Project-heading-Container w-full ">
          <div className="Project-heading" id="Project-heading-one">
            M
          </div>
          <div className="Project-heading" id="Project-heading-two">
            y
          </div>
          <div className="Project-heading" id="Project-heading-two"></div>
          <div className="Project-heading" id="Project-heading-two">
            P
          </div>
          <div className="Project-heading" id="Project-heading-four">
            r
          </div>
          <div className="Project-heading" id="Project-heading-three">
            o
          </div>
          <div className="Project-heading" id="Project-heading-two">
            j
          </div>
          <div className="Project-heading" id="Project-heading-two">
            e
          </div>
          <div className="Project-heading" id="Project-heading-four">
            c
          </div>
          <div className="Project-heading" id="Project-heading-two">
            t
          </div>
          <div className="Project-heading" id="Project-heading-four">
            s
          </div>
        </div>
      </div>
      <Slider {...sliderSettings} ref={sliderRef} className="relative">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card transition-transform transform scale-90 hover:scale-100"
          >
            <ProjectsCard
              title={project.title}
              src={project.src}
              websiteLink={project.websiteLink}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
