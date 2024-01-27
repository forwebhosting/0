// Certificate.js

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificateCard from "./CertificateCard";
import certificateData from "../../data/certificateData";
import "./certificate.css";

const Certificate = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current && sliderRef.current.slickNext) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      id="certificate"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <div className="Certificate-heading-Container w-full ">
          <div className="Certificate-heading" id="Certificate-heading-one">
            C
          </div>
          <div className="Certificate-heading" id="Certificate-heading-two">
            e
          </div>
          <div className="Certificate-heading" id="Certificate-heading-two">
            r
          </div>
          <div className="Certificate-heading" id="Certificate-heading-two">
            t
          </div>
          <div className="Certificate-heading" id="Certificate-heading-four">
            i
          </div>
          <div className="Certificate-heading" id="Certificate-heading-three">
            f
          </div>
          <div className="Certificate-heading" id="Certificate-heading-two">
            i
          </div>
          <div className="Certificate-heading" id="Certificate-heading-two">
            c
          </div>
          <div className="Certificate-heading" id="Certificate-heading-four">
            a
          </div>
          <div className="Certificate-heading" id="Certificate-heading-two">
            t
          </div>
          <div className="Certificate-heading" id="Certificate-heading-four">
            es
          </div>
        </div>
      </div>
      <Slider {...sliderSettings} ref={sliderRef} className="relative">
        {certificateData.map((certificate, index) => (
          <div
            key={index}
            className="project-card transition-transform transform scale-90 hover:scale-100"
          >
            <CertificateCard
              title={certificate.title}
              des={certificate.des}
              src={certificate.src}
              link={certificate.link}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Certificate;
