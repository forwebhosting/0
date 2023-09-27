import React from 'react';
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible slides as needed
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '60px', // Adjust the margin as needed
    draggable: true, // Enable dragging
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens
          draggable: true, // Enable dragging for smaller screens if needed
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust for mobile screens
          draggable: true, // Enable dragging for mobile screens if needed
        },
      },
    ],
  };
  

  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="grid justify-center items-center text-center">
        {/* Your title or description */}
      </div>
      <Slider {...sliderSettings}>
        <ProjectsCard
          title="OTT CLONE"
          src={DisneyClone}
          websiteLink={DisneyCloneLink}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          src={projectOne}
          websiteLink={YoutubeCloneLink}
        />
        <ProjectsCard
          title="E-commerce Website(Habeeb)"
          src={projectTwo}
          websiteLink={HabeebEcomLink}
        />
        <ProjectsCard
          title="Amazon Clone"
          src={AmazonClone}
          websiteLink={AmazonCloneLink}
        />
        <ProjectsCard title="NoBroker Clone" src={NobrokerClone} />
        <ProjectsCard title="Phising Tool" src={PhisingTool} />
      </Slider>
    </section>
  );
}

export default Projects;
