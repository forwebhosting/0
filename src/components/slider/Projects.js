import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectOne, projectTwo, DisneyClone, AmazonClone, NobrokerClone, PhisingTool } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const DisneyCloneLink = "https://disneyclone-thowfickofficial.netlify.app/";
const HabeebEcomLink = "https://habeebecommerce-thowfickofficial.netlify.app/";
const YoutubeCloneLink = "https://youtubeclone-thowfickofficial.netlify.app/";
const AmazonCloneLink = "https://amazonclone-thowfickofficial.netlify.app/";

const Projects = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides as needed
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '60px', // Adjust the margin as needed
    draggable: false, // Disable user dragging
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
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="grid justify-center items-center text-center">
        {/* Your title or description */}
      </div>
      <Slider {...sliderSettings }ref={sliderRef} className="relative">
      <div className="project-card transition-transform transform scale-90 hover:scale-100">
        <ProjectsCard
          title="OTT CLONE"
          src={DisneyClone}
          websiteLink={DisneyCloneLink}
        />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          src={projectOne}
          websiteLink={YoutubeCloneLink}
        />
         </div>
         <div className="project-card transition-transform transform scale-90 hover:scale-100">
        <ProjectsCard
          title="E-commerce Website(Habeeb)"
          src={projectTwo}
          websiteLink={HabeebEcomLink}
        />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
        <ProjectsCard
          title="Amazon Clone"
          src={AmazonClone}
          websiteLink={AmazonCloneLink}
        />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
        <ProjectsCard title="NoBroker Clone" src={NobrokerClone} />
        </div>
        <div className="project-card transition-transform transform scale-90 hover:scale-100">
        <ProjectsCard title="Phising Tool" src={PhisingTool} />
        </div>
      </Slider>
    </section>
  );
}

export default Projects;
